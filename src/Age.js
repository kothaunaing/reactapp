import { useState } from "react";

const Age = () => {
  const [textColor, setTextColor] = useState('black');
  const colors = ['lightgreen', 'blue', 'red',
    'lightpink', 'purple', 'green', 'orange',
  'gray', 'yellow', 'purple'];

  let [count, setCount] = useState(0);

  return (
    <div className="Age">
      <button onClick={() => {
        const currentColor = colors[Math.floor(Math.random() * colors.length)]
        setTextColor(currentColor);
      }}>Change Color</button>
      <h2 style={{
        color: textColor
      }}>Hi, the text is {textColor} now.</h2>

      <button onClick={() => {
        setCount(count + 1)
      }}>Increase</button>
      <button onClick={() => {
        setCount(count - 1)
      }}>Decrease</button>
      <button onClick={() => {
        setCount(0)
      }}>Set to zero</button>
      <div>{count}</div>
    </div>
  );
}

export default Age;