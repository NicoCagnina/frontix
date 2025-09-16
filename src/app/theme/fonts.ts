import { Plus_Jakarta_Sans } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const fonts = {
  sans: [
    "Plus Jakarta Sans",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
  weights: {
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },
} as const;

export const fontWeights = {
  extraLight: "font-extralight",
  light: "font-light",
  regular: "font-normal",
  medium: "font-medium",
  semiBold: "font-semibold",
  bold: "font-bold",
  extraBold: "font-extrabold",
} as const;

export const fontFamily = {
  sans: "font-sans",
} as const;

export const getFontClasses = (
  weight: keyof typeof fontWeights = "regular"
) => {
  return `${fontFamily.sans} ${fontWeights[weight]}`;
};
