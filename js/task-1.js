const delay = (ms) => {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

const logger = (time) =>
  console.log(
    `%c TASK-1: Resolved after ${time}ms`,
    "color:red; font-size: 18px;"
  );

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

export default delay;
