// Создать компонент React, реализующий секундомер с кнопками Start и Stop,
// который отображает прошедшее время и останавливается при нажатии.

// import React, { useState, useRef, useEffect } from "react";

// function App() {
//   const [seconds, setSeconds] = useState(0);

//   const [isRunning, setIsRunning] = useState(false);

//   const intervalRef = useRef(null);

//   useEffect(() => {
//     if (isRunning) {
//       intervalRef.current = setInterval(() => {
//         setSeconds((prev) => prev + 1);
//       }, 1000);
//     }

//     return () => {
//       clearInterval(intervalRef.current);
//     };
//   }, [isRunning]);

//   const handleStart = () => {
//     if (!isRunning) setIsRunning(true);
//   };

//   const handleStop = () => {
//     setIsRunning(false);
//   };

//   return (
//     <div>
//       <h1>Секундомер: {seconds} сек</h1>
//       <button onClick={handleStart} disabled={isRunning}>
//         Start
//       </button>
//       <button onClick={handleStop} disabled={!isRunning}>
//         Stop
//       </button>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect, useRef } from "react";

function App() {
  // Состояние для хранения времени (в миллисекундах)
  const [time, setTime] = useState(0);
  // Состояние для управления запуском/остановкой таймера
  const [isRunning, setIsRunning] = useState(false);

  // Ref для сохранения времени последнего запуска
  const startTimeRef = useRef(null);

  // Функция запуска таймера
  const startTimer = () => {
    setIsRunning(true);
  };

  // Функция остановки таймера
  const stopTimer = () => {
    setIsRunning(false);
  };

  // Используем useEffect для управления таймером
  useEffect(() => {
    if (isRunning) {
      // Запоминаем время начала при старте таймера
      startTimeRef.current = Date.now() - time;

      // Запускаем интервал
      const intervalId = setInterval(() => {
        setTime(Date.now() - startTimeRef.current);
      }, 10);

      // Очищаем интервал при размонтировании или изменении isRunning
      return () => clearInterval(intervalId);
    }
  }, [isRunning]); // Перезапускаем эффект при изменении isRunning

  // Форматирование времени в формат MM:SS:MS
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((ms % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    const milliseconds = Math.floor((ms % 1000) / 10)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Секундомер</h1>
      <p>{formatTime(time)}</p>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
    </div>
  );
}

export default App;
