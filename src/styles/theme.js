const colors = {
  green: "#00cc00",
  red: "#DC2929",
  pink: "#C60AA8",
  white: "#fff",
  bg: "#000",
  menu: "#F9F9F9",
  black: "#000",
  yellow: "#F5FF80",
  link: "#1F29F5",
  orange: "#EB4F3A",
  gray: "#BCBCBC",
  gray100: "#F1F1F1",
  gray200: "#878787",
  blue: "#025B8B",
  blue100: "#2792CC",
  blue200: "#D5E6EF",
  txt: "#242424",
};

const sizes = {
  wrap: 1696,
  padding: 15,
};

const fonts = {
  body: "'Source Sans Pro', sans-serif",
};

const btn = {
  fontSize: "16px",
  fontWeigt: 700,
  lineHeight: "20px",
  borderRadius: "6px",
  letterSpacing: "-0.02em",
  padding: "18px 24px",
  paddingXl: "20px 28px",
  bg: colors.green,
  blue: colors.blue,
};

const transition = {
  time: ".2s ease-in-out",
  timeXL: ".4s ease-in-out",
};

const breakpoints = ["40em", "52em", "64em", "80em"];

// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export const theme = {
  btn,
  sizes,
  colors,
  transition,
  fonts,
  breakpoints,
};
