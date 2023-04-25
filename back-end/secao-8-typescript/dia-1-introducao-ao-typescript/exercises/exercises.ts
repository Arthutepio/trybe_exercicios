// ./exercises.ts

export function getSquareArea(side: number): number {
  return side ** 2;
}

export function getRectangleArea(base: number, height: number): number {
  return base * height;
}

export function getTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((acc, side) => acc + side, 0);
}

export function triangleCheck(
  sideA: number,
  sideB: number,
  sideC: number
): boolean {
  const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
  const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
  const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
  return checkSideA && checkSideB && checkSideC;
}

// exercícios para fixar
export function diamondArea(diagonal1: number, diagonal2: number): number {
  return (diagonal1 * diagonal2) / 2;
}

export function trapezeArea(base1: number, base2: number, height: number): number {
  return ((base1 + base2) * height) / 2;
}

export function circleArea(radius: number): number {
  return 3.14 * (radius * radius)
}