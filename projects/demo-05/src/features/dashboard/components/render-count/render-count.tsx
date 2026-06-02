/* eslint-disable react-hooks/refs */
import { useRef, useState } from "react";

export const RenderCount: React.FC = () => {
  let renderCount = 0; // cada render se reinicia
  const renderCountRef = useRef(0); // cada render mantiene el valor previo
  renderCount++;
  renderCountRef.current++;

    // //  Intento de hacerlo con un state
    // console.log('Render Count');
    // const [countRender, setCountRender] = useState(0);
    // setCountRender(countRender + 1);


  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    // setCount(count + 1);
    setCount((c) => c + 1);
    console.log('Component State', count);
  };

  return (
    <>
      <h2>React with state</h2>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <p>Render number (var) {renderCount}</p>
        <p>Render number (ref) {renderCountRef.current}</p>
      </div>
    </>
  );
};