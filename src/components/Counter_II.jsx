import React from "react";
import { useState } from "react";

const Counter_II = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [max, setMax] = useState(Infinity);
  const [btn, setBtn] = useState([
    { id: 1, value: 5, isClicked: false },
    { id: 2, value: 10, isClicked: false },
    { id: 3, value: 15, isClicked: false },
  ]);

  const [maxBtn, setMaxBtn] = useState([
    { id: 4, value: 15, isClicked: false },
    { id: 5, value: 100, isClicked: false },
    { id: 6, value: 200, isClicked: false },
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
      backgroundColor: "blue",
      margin: "5px",
      fontSize: "30px",
      fontWeight: "bold",
      color: "white",
      paddingInline: "10px",
      borderRadius: "5px",
      cursor: "pointer",
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
      cursor: "pointer",
    },
    heading: {
      fontSize: "30px",
      fontWeight: "bold",
      color: "black",
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
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "50px",
            }}
          >
            <h1 style={style.heading}>Step</h1>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {btn.map((item) => (
                <button
                  key={item.id}
                  style={{
                    ...style.stepBtn,
                    backgroundColor: item.isClicked ? "#5271FF" : "#21345E",
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

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "50px",
            }}
          >
            <h1 style={style.heading}>Max Value</h1>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {maxBtn.map((item) => (
                <button
                  key={item.id}
                  style={{
                    ...style.stepBtn,
                    backgroundColor: item.isClicked ? "#5271FF" : "#21345E",
                  }}
                  onClick={() => {
                    setMaxBtn((prevBtn) => {
                      return prevBtn.map((btnItem) => {
                        return btnItem.id === item.id
                          ? { ...btnItem, isClicked: true }
                          : { ...btnItem, isClicked: false };
                      });
                    });

                    setMax(item.value);
                  }}
                >
                  {item.value}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <button
          style={style.btn}
          onClick={() =>
            setCount(count + increment <= max ? count + increment : count)
          }
        >
          Increment
        </button>
        <button
          style={style.btn}
          onClick={() =>
            setCount(
              Math.abs(count - increment) <= max ? count - increment : count
            )
          }
        >
          Decrement
        </button>
        <button
          style={style.btn}
          onClick={() => {
            setCount(0);
            setIncrement(1);
            setMax(Infinity);

            setBtn((prevBtn) => {
              return prevBtn.map((btnItem) => ({
                ...btnItem,
                isClicked: false,
              }));
            });

            setMaxBtn((prevBtn) => {
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

export default Counter_II;
