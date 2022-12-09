function calculateBMI(weight, height) {
  const result = weight / (height * height);
  return result;
}


module.exports = { calculateBMI };
