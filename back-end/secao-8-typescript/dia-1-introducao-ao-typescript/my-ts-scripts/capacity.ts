const unitsCapacity = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convert3(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unitsCapacity.indexOf(fromUnit);
  const toIndex = unitsCapacity.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}