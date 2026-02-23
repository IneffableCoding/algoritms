import React, { useState, useCallback, memo } from "react";

// Исправь ошибку и оптимизируй рендер
const Button = memo(function Button({ onClick }) {
  console.log("render");
  return <button onClick={onClick}>Click me</button>;
});

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const onClick = useCallback(() => {
    setIsVisible(!isVisible);
  }, []);

  return (
    <>
      <Button onClick={onClick} />
      {isVisible && <div>lorem ipsum</div>}
    </>
  );
}

export default App;

/*
Вот краткий список исправлений и оптимизаций:

1. Проблема с useCallback:
   - В текущем коде useCallback не зависит от isVisible, что приводит к устаревшему значению
    isVisible внутри колбэка.
   - Исправление: добавить isVisible в массив зависимостей:
     const onClick = useCallback(() => {
         setIsVisible(!isVisible);
     }, [isVisible]);

2. Альтернативный вариант без isVisible в зависимостях
   - Если вы хотите избежать добавления isVisible в зависимости useCallback,
   можно использовать функциональный обновление состояния:

     const onClick = useCallback(() => {
         setIsVisible(prev => !prev);
     }, []);
*/

/*
Проблема была в "устаревшем замыкании" (stale closure).

Функция "замыкает" переменные из области видимости, где была создана. 
Если не обновлять функцию при изменении этих переменных, 
она продолжает использовать старые значения.

Вариант 1: добавить зависимость
const onClick = useCallback(() => {
    setIsVisible(!isVisible);
}, [isVisible]); // функция пересоздаётся при изменении isVisible

Вариант 2: функциональное обновление (не требует зависимостей)
const onClick = useCallback(() => {
    setIsVisible(prev => !prev); // берёт актуальное значение из React
}, []);
*/