const unitscubcs = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

function convert6 (value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unitscubcs.indexOf(fromUnit);
  const toIndex = unitscubcs.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(1000, exponent)
}