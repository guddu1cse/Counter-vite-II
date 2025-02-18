import { useState } from "react";
import "./App.css";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    if (!todo.trim()) return;
    const newTodo = {
      id: Date.now(),
      todo,
      isEditable: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
    setTodo("");
  };

  const toggleEdit = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isEditable: !item.isEditable } : item
      )
    );
  };

  const handleEdit = (id, value) => {
    setTodos(
      todos.map((item) => (item.id === id ? { ...item, todo: value } : item))
    );
  };

  const style = {
    container: {
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    todoContainer: {
      width: "400px",
      height: "400px",
      border: "1px solid #ccc",
      borderRadius: "3px",
      padding: "10px",
    },
  };

  return (
    <div style={style.container}>
      <div style={style.todoContainer}>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Enter Todo"
            style={{
              width: "100%",
              color: "black",
              padding: "4px",
              borderTopLeftRadius: "3px",
              borderBottomLeftRadius: "3px",
              border: "1px solid green",
            }}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            onClick={handleAddTodo}
            style={{
              color: "white",
              background: "green",
              borderTopRightRadius: "3px",
              borderBottomRightRadius: "3px",
              paddingInline: "10px",
            }}
          >
            ADD
          </button>
        </div>
        {/* conditinal based rendering */}
        {todos.length > 0 && (
          <ul style={{ listStyle: "none", width: "100%" }}>
            {todos.map((todo) => (
              <li
                key={todo.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                {todo.isEditable ? (
                  <input
                    type="text"
                    placeholder="Enter Todo"
                    style={{
                      width: "100%",
                      color: "black",
                      padding: "4px",
                      borderTopLeftRadius: "3px",
                      borderBottomLeftRadius: "3px",
                      border: "1px solid gray",
                    }}
                    value={todo.todo}
                    onChange={(e) => handleEdit(todo.id, e.target.value)}
                  />
                ) : (
                  <span
                    style={{
                      width: "100%",
                      color: "black",
                      padding: "4px",
                      borderTopLeftRadius: "3px",
                      borderBottomLeftRadius: "3px",
                      border: "1px solid gray",
                    }}
                  >
                    {todo.todo}
                  </span>
                )}
                <button
                  style={{
                    color: "white",
                    background: "gray",
                    borderTopRightRadius: "3px",
                    borderBottomRightRadius: "3px",
                    paddingInline: "10px",
                  }}
                  onClick={() => toggleEdit(todo.id)}
                >
                  {todo.isEditable ? "SAVE" : "EDIT"}
                </button>
                <button
                  style={{
                    color: "white",
                    background: "red",
                    marginLeft: "5px",
                    borderRadius: "3px",
                    paddingInline: "10px",
                  }}
                  onClick={() =>
                    setTodos(todos.filter((t) => t.id !== todo.id))
                  }
                >
                  {"DELETE"}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Todo;
