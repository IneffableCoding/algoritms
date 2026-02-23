// Создать компонент React, реализующий секундомер с кнопками Start и Stop,
// который отображает прошедшее время и останавливается при нажатии.

// Импортируем необходимые хуки из React
import React, { useState, useEffect, useRef } from 'react';

function App() {
    // ===== СОСТОЯНИЯ (STATE) =====
    // time - текущее прошедшее время в миллисекундах
    // setTime - функция для обновления time
    const [time, setTime] = useState(0);

    // isRunning - флаг: true = таймер запущен, false = остановлен
    // setIdRunning - функция для переключения состояния
    const [isRunning, setIdRunning] = useState(false);

    // ===== REF (ССЫЛКА) =====
    // startTimeRef - хранит время старта таймера
    // useRef используется, потому что изменение НЕ должно вызывать перерендер
    const startTimeRef = useRef(null);

    // ===== ФУНКЦИИ УПРАВЛЕНИЯ =====
    // Запуск таймера - просто меняем состояние на true
    const startTimer = () => {
        setIdRunning(true);
    }

    // Остановка таймера - просто меняем состояние на false
    const stopTimer = () => {
        setIdRunning(false);
    }

    // ===== ОСНОВНАЯ ЛОГИКА ТАЙМЕРА =====
    // useEffect срабатывает при каждом изменении isRunning
    useEffect(() => {
        // Если таймер запущен (isRunning = true)
        if (isRunning) {
            // КЛЮЧЕВОЙ МОМЕНТ: вычисляем время старта
            // Date.now() - текущее время в миллисекундах
            // Вычитаем time (уже прошедшее время), чтобы получить момент старта
            // Это позволяет приостанавливать и возобновлять таймер
            startTimeRef.current = Date.now() - time;

            // Запускаем интервал, который будет обновлять время каждые 10мс
            const intervalId = setInterval(() => {
                // Каждые 10мс вычисляем: сколько прошло с момента старта
                // и обновляем состояние time
                setTime(Date.now() - startTimeRef.current);
            }, 10); // 10 миллисекунд = 0.01 секунды

            // Функция очистки (cleanup)
            // Вызывается когда:
            // 1. isRunning становится false (остановка таймера)
            // 2. Компонент размонтируется
            return () => clearInterval(intervalId);
        }
    }, [isRunning]); // Эффект зависит только от isRunning

    // ===== ФОРМАТИРОВАНИЕ ВРЕМЕНИ =====
    // Принимает миллисекунды, возвращает строку в формате "MM:SS:MS"
    const formatTime = (ms) => {
        // Минуты: делим общее время на 60000 (мс в минуте)
        // Math.floor - округление вниз до целого числа
        // toString - превращаем число в строку
        // padStart(2, '0') - добавляем ноль в начало, если нужно (5 → "05")
        const minutes = Math.floor(ms / 60000)
            .toString()
            .padStart(2, '0');

        // Секунды: берём остаток от минут (ms % 60000) и делим на 1000
        const seconds = Math.floor((ms % 60000) / 1000)
            .toString()
            .padStart(2, '0');

        // Миллисекунды: берём остаток от секунд (ms % 1000) и делим на 10
        // Делим на 10, чтобы получить 2 цифры (430мс → 43)
        const milliseconds = Math.floor((ms % 1000) / 10)
            .toString()
            .padStart(2, '0');

        // Возвращаем отформатированную строку
        return `${minutes}:${seconds}:${milliseconds}`;
    }

    // ===== ОТРИСОВКА (RENDER) =====
    return (
        // Контейнер с центрированием и отступом сверху
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Секундомер</h1>

            {/* Отображаем отформатированное время */}
            <p>{formatTime(time)}</p>

            {/* Кнопка Start */}
            <button
                onClick={startTimer}           // при клике запускаем
                disabled={isRunning}           // неактивна, если уже запущен
            >
                Start
            </button>

            {/* Кнопка Stop */}
            <button
                onClick={stopTimer}            // при клике останавливаем
                disabled={!isRunning}          // неактивна, если не запущен
            >
                Stop
            </button>
        </div>
    );
}

export default App;