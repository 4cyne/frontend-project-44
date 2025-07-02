import { getRandomNumber } from "../../utils/get-random-number.js";

export const arithmeticProgression = (step, lim) => {
  // получаем массив прогрессии
  const arr = Array.from(
    { length: Math.ceil(lim / step) },
    (_, i) => (i + 1) * step
  );
  if (arr.length > 5 && arr.length <= 10) {
    // рандомно выбираем число, которое хотим скрыть
    const randomIndex = Math.floor(getRandomNumber(1, arr.length - 1));
    // сохраняем число
    const hiddenNumber = arr[randomIndex];
    arr[randomIndex] = "..";
    return {
      progression: arr,
      hiddenNumber,
    };
  } else {
    arithmeticProgression(step, lim);
  }
};
