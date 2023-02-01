const unitsArea = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

function convert4(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unitsArea.indexOf(fromUnit);
  const toIndex = unitsArea.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(100, exponent);
}