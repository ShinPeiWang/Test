import React from "react";
import { useSelector, useDispatch } from "react-redux";

const A: React.FC = () => {
  console.log("A 元件重新渲染");

  const dispatch = useDispatch();
  const counterA = useSelector(state => state.counterA);

  const handleAPlus = () => {
    dispatch({ type: "A_PLUS_ONE" });
  };

  return (
    <div>
      <span>A: {counterA}</span>
      <button onClick={handleAPlus}>A++</button>
    </div>
  );
};

export default A;
