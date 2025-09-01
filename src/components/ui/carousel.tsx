"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

interface CarouselProps {
  children: React.ReactNode[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  loop?: boolean;
  showDots?: boolean;
  className?: string;
  itemClassName?: string;
  gap?: number;
  smoothScrollSpeed?: number;
  autoplayType?: "discrete" | "continuous";
}

export default function Carousel({
  children,
  autoplay = false,
  autoplaySpeed = 3000,
  loop = true,
  showDots = true,
  className = "",
  itemClassName = "",
  gap = 24,
  smoothScrollSpeed = 0.3,
  autoplayType = "discrete",
}: CarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoplayActive, setIsAutoplayActive] = useState(autoplay);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {}, []);

  const startDiscreteAutoplay = useCallback(() => {
    autoplayRef.current = setInterval(() => {
      if (!scrollContainerRef.current || !isAutoplayActive) return;

      const container = scrollContainerRef.current;

      let itemWidth: number;
      if (itemClassName.includes("w-[")) {
        const firstChild = container.firstElementChild as HTMLElement;
        itemWidth = firstChild ? firstChild.offsetWidth : 300;
      } else {
        itemWidth = container.clientWidth / getVisibleItems();
      }

      const currentScrollLeft = container.scrollLeft;
      const nextScrollPosition = currentScrollLeft + itemWidth + gap;
      const maxScrollLeft = container.scrollWidth - container.clientWidth - 1;

      if (nextScrollPosition >= maxScrollLeft) {
        if (loop) {
          setTimeout(() => {
            container.scrollTo({ left: 0, behavior: "smooth" });
          }, 100);
        }
      } else {
        container.scrollTo({ left: nextScrollPosition, behavior: "smooth" });
      }
    }, autoplaySpeed);
  }, [isAutoplayActive, itemClassName, gap, loop, autoplaySpeed]);

  const startContinuousAutoplay = useCallback(() => {
    if (!scrollContainerRef.current || !isAutoplayActive) return;

    const container = scrollContainerRef.current;

    setTimeout(() => {
      if (!container || !isAutoplayActive) return;

      const totalScrollWidth = container.scrollWidth;
      const sectionWidth = totalScrollWidth / 3;
      const startPosition = sectionWidth;

      container.scrollLeft = startPosition;

      let targetPosition = startPosition;
      let lastTimestamp = performance.now();

      const animate = (timestamp: number) => {
        if (!container || !isAutoplayActive) return;

        const deltaTime = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        const baseIncrement = smoothScrollSpeed / 4;
        const timeNormalizedIncrement = (baseIncrement * deltaTime) / 16;
        targetPosition += timeNormalizedIncrement;

        const maxPosition = sectionWidth * 2;

        if (targetPosition >= maxPosition) {
          const overflow = targetPosition - maxPosition;
          targetPosition = overflow;
        }

        const currentScroll = container.scrollLeft;
        const diff = targetPosition - currentScroll;

        if (Math.abs(diff) > sectionWidth / 2) {
          container.scrollLeft = targetPosition;
        } else {
          const smoothFactor = 0.8;
          container.scrollLeft = currentScroll + diff * smoothFactor;
        }

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
    }, 100);
  }, [isAutoplayActive, smoothScrollSpeed]);

  const startAutoplay = useCallback(() => {
    if (!isAutoplayActive) return;

    if (autoplayType === "continuous") {
      startContinuousAutoplay();
    } else {
      startDiscreteAutoplay();
    }
  }, [
    isAutoplayActive,
    autoplayType,
    startContinuousAutoplay,
    startDiscreteAutoplay,
  ]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  const handleMouseEnter = () => {
    if (autoplay) {
      setIsAutoplayActive(false);
      stopAutoplay();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay) {
      setIsAutoplayActive(true);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const itemWidth = container.clientWidth / getVisibleItems();
    const scrollPosition = index * (itemWidth + gap);

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  const getVisibleItems = () => {
    if (!scrollContainerRef.current) return 1;
    const containerWidth = scrollContainerRef.current.clientWidth;

    if (containerWidth >= 1280) return 4;
    if (containerWidth >= 1024) return 3;
    if (containerWidth >= 768) return 2;
    return 1;
  };

  const updateCurrentIndex = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const itemWidth = container.clientWidth / getVisibleItems();
    const currentIndex = Math.round(container.scrollLeft / (itemWidth + gap));
    setCurrentIndex(currentIndex);
  }, [gap]);

  useEffect(() => {
    if (isAutoplayActive) {
      const timer = setTimeout(() => {
        startAutoplay();
      }, 100);

      return () => {
        clearTimeout(timer);
        stopAutoplay();
      };
    } else {
      stopAutoplay();
    }

    return () => {
      stopAutoplay();
    };
  }, [
    isAutoplayActive,
    loop,
    autoplaySpeed,
    autoplayType,
    smoothScrollSpeed,
    startAutoplay,
    stopAutoplay,
  ]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container && autoplayType === "discrete") {
      container.addEventListener("scroll", updateCurrentIndex);
      return () => container.removeEventListener("scroll", updateCurrentIndex);
    }
  }, [autoplayType, updateCurrentIndex]);

  const totalDots = Math.max(0, children.length - getVisibleItems() + 1);

  return (
    <div className={`relative w-full ${className}`}>
      <div
        ref={scrollContainerRef}
        className={`flex overflow-x-auto scrollbar-hide ${
          autoplayType === "continuous"
            ? ""
            : "snap-x snap-mandatory scroll-smooth"
        }`}
        style={{
          gap: `${gap}px`,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
        onMouseEnter={
          autoplayType === "discrete" ? handleMouseEnter : undefined
        }
        onMouseLeave={
          autoplayType === "discrete" ? handleMouseLeave : undefined
        }
        onTouchStart={
          autoplayType === "discrete"
            ? () => setIsAutoplayActive(false)
            : undefined
        }
        onTouchEnd={
          autoplayType === "discrete"
            ? () => autoplay && setIsAutoplayActive(true)
            : undefined
        }
      >
        {(autoplayType === "continuous"
          ? [...children, ...children, ...children]
          : children
        ).map((child, index) => (
          <div
            key={`${
              autoplayType === "continuous"
                ? `${index % children.length}-${Math.floor(
                    index / children.length
                  )}`
                : index
            }`}
            className={`flex-shrink-0 snap-start ${itemClassName}`}
            style={
              itemClassName.includes("w-[")
                ? {}
                : {
                    width: `calc((100% - ${
                      gap * (getVisibleItems() - 1)
                    }px) / ${getVisibleItems()})`,
                  }
            }
          >
            {child}
          </div>
        ))}
      </div>

      {showDots && totalDots > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-secondary w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
