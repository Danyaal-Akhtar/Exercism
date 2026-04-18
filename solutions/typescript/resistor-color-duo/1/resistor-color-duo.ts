const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

const colorCode = (color: string): number => {
  return COLORS.indexOf(color);
};

export function decodedValue(colors: string[]): number {
  const firstColor = colorCode(colors[0]);
  const secondColor = colorCode(colors[1]);

  return firstColor * 10 + secondColor;
}
