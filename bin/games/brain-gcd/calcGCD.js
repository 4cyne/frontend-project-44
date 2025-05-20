export const NOD = (num1, num2) => {
  if (num1 > num2) return NOD(num2, num1);
  if (!num1) return num2;
  return NOD(num1, num2 % num1);
};
