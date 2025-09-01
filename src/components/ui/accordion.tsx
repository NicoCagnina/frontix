"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useState,
  PropsWithChildren,
} from "react";

type AccordionType = "single" | "multiple";

type AccordionContextValue = {
  openValues: string[];
  type: AccordionType;
  collapsible: boolean;
  baseId: string;
  toggleItem: (value: string) => void;
  isItemOpen: (value: string) => boolean;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

type AccordionProps = PropsWithChildren<{
  type?: AccordionType;
  collapsible?: boolean;
  className?: string;
  defaultValue?: string | string[];
}>;

export function Accordion({
  type = "single",
  collapsible = false,
  className,
  defaultValue,
  children,
}: AccordionProps) {
  const baseId = useId();

  const initialOpen: string[] = useMemo(() => {
    if (defaultValue == null) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  }, [defaultValue]);

  const [openValues, setOpenValues] = useState<string[]>(initialOpen);

  const isItemOpen = useCallback(
    (value: string) => openValues.includes(value),
    [openValues]
  );

  const toggleItem = useCallback(
    (value: string) => {
      setOpenValues((prev) => {
        const currentlyOpen = prev.includes(value);
        if (type === "single") {
          if (currentlyOpen) {
            return collapsible ? [] : prev;
          }
          return [value];
        }
        if (currentlyOpen) {
          return prev.filter((v) => v !== value);
        }
        return [...prev, value];
      });
    },
    [type, collapsible]
  );

  const value = useMemo<AccordionContextValue>(
    () => ({ openValues, type, collapsible, baseId, toggleItem, isItemOpen }),
    [openValues, type, collapsible, baseId, toggleItem, isItemOpen]
  );

  return (
    <div className={className} role="presentation">
      <AccordionContext.Provider value={value}>
        {children}
      </AccordionContext.Provider>
    </div>
  );
}

type AccordionItemContextValue = {
  value: string;
};

const AccordionItemContext = createContext<AccordionItemContextValue | null>(
  null
);

type AccordionItemProps = PropsWithChildren<{
  value: string;
  className?: string;
}>;

export function AccordionItem({
  value,
  className,
  children,
}: AccordionItemProps) {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionItem must be used within Accordion");
  const state = ctx.isItemOpen(value) ? "open" : "closed";
  return (
    <div className={className} data-state={state} data-value={value}>
      <AccordionItemContext.Provider value={{ value }}>
        {children}
      </AccordionItemContext.Provider>
    </div>
  );
}

type AccordionTriggerProps = PropsWithChildren<{
  className?: string;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export function AccordionTrigger({
  className,
  children,
  ...rest
}: AccordionTriggerProps) {
  const accordion = useContext(AccordionContext);
  const item = useContext(AccordionItemContext);
  if (!accordion)
    throw new Error("AccordionTrigger must be used within Accordion");
  if (!item)
    throw new Error("AccordionTrigger must be used within AccordionItem");

  const open = accordion.isItemOpen(item.value);
  const triggerId = `${accordion.baseId}-trigger-${item.value}`;
  const contentId = `${accordion.baseId}-content-${item.value}`;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    rest.onClick?.(e);
    if (e.defaultPrevented) return;
    accordion.toggleItem(item.value);
  };

  return (
    <button
      id={triggerId}
      aria-controls={contentId}
      aria-expanded={open}
      data-state={open ? "open" : "closed"}
      className={className}
      type="button"
      {...rest}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

type AccordionContentProps = PropsWithChildren<{
  className?: string;
}> &
  React.HTMLAttributes<HTMLDivElement>;

export function AccordionContent({
  className,
  children,
  ...rest
}: AccordionContentProps) {
  const accordion = useContext(AccordionContext);
  const item = useContext(AccordionItemContext);
  if (!accordion)
    throw new Error("AccordionContent must be used within Accordion");
  if (!item)
    throw new Error("AccordionContent must be used within AccordionItem");

  const open = accordion.isItemOpen(item.value);
  const triggerId = `${accordion.baseId}-trigger-${item.value}`;
  const contentId = `${accordion.baseId}-content-${item.value}`;

  const [height, setHeight] = useState<number>(0);
  const innerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const measure = () => setHeight(el.scrollHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      ro.disconnect();
    };
  }, [children, open]);

  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={triggerId}
      aria-hidden={!open}
      data-state={open ? "open" : "closed"}
      className={className}
      style={{
        overflow: "hidden",
        height: open ? height : 0,
        transition: "height 300ms ease",
        pointerEvents: open ? "auto" : "none",
      }}
      {...rest}
    >
      <div
        ref={innerRef}
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-4px)",
          transition: "opacity 200ms ease, transform 200ms ease",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
