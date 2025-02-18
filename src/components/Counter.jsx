import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [btn, setBtn] = useState([
    { id: 1, value: 5, isClicked: false },
    { id: 2, value: 10, isClicked: false },
    { id: 3, value: 15, isClicked: false },
  ]);

  const style = {
    main: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      backgroundColor: "white",
    },
    stepBtn: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "50px",
      aspectRatio: "1/1",
      backgroundColor: "blue",
      margin: "5px",
      fontSize: "30px",
      fontWeight: "bold",
      color: "white",
    },
    btn: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "10px",
      fontSize: "30px",
      fontWeight: "bold",
      color: "white",
      padding: "10px",
      backgroundColor: "green",
      borderRadius: "5px",
    },
  };

  return (
    <div style={style.main}>
      <div>
        <h1
          style={{
            ...style.stepBtn,
            backgroundColor: "transparent",
            color: "black",
            fontSize: "50px",
          }}
        >
          {count}
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            ...style.stepBtn,
            backgroundColor: "transparent",
            color: "black",
          }}
        >
          Step
        </h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {btn.map((item) => (
            <button
              key={item.id}
              style={{
                ...style.stepBtn,
                backgroundColor: item.isClicked ? "green" : "blue",
              }}
              onClick={() => {
                setBtn((prevBtn) => {
                  return prevBtn.map((btnItem) => {
                    return btnItem.id === item.id
                      ? { ...btnItem, isClicked: true }
                      : { ...btnItem, isClicked: false };
                  });
                });

                setIncrement(item.value);
              }}
            >
              {item.value}
            </button>
          ))}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <button style={style.btn} onClick={() => setCount(count + increment)}>
          Increment
        </button>
        <button style={style.btn} onClick={() => setCount(count - increment)}>
          Decrement
        </button>
        <button
          style={style.btn}
          onClick={() => {
            setCount(0);
            setIncrement(1);
            setBtn((prevBtn) => {
              return prevBtn.map((btnItem) => ({
                ...btnItem,
                isClicked: false,
              }));
            });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
