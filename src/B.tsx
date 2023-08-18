import React from "react";
import { useSelector, useDispatch } from "react-redux";

const B: React.FC = () => {
  console.log("B 元件重新渲染");

  const dispatch = useDispatch();
  const counterB = useSelector(state => state.counterB);

  const handleBPlus = () => {
    dispatch({ type: "B_PLUS_ONE" });
  };

  return (
    <div>
      <span>B: {counterB}</span>
      <button onClick={handleBPlus}>B++</button>
    </div>
  );
};

export default B;
