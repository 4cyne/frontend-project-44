export const arithmeticProgression = (step, lim) => {
  // получаем массив прогрессии
  const arr = Array.from(
    { length: Math.ceil(lim / step) },
    (_, i) => (i + 1) * step
  );
  if (arr.length >= 5 && arr.length <= 10) {
    // рандомно выбираем число, которое хотим скрыть
    const randomIndex = Math.floor(Math.random() * arr.length);
    // сохраняем число
    const hiddenNumber = arr[randomIndex];

    arr[randomIndex] = "..";
    return {
      progression: arr,
      hiddenNumber,
    };
  }
};
