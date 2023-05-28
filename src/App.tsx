import { useDebugValue, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [items, setItems] = useState<any[]>([]);
  const changeHandler = (event: any) => setMessage(event.target.value);
  function addItem() {
    if (message === "") {
      alert("This feild cannot be empty");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: { message },
    };
    setItems((oldList) => [...oldList, item]);
    setMessage("");
    console.log(item.value);
  }
  function deleteItem(id: any) {
    console.log("clicked");

    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
    console.log(newArray);
  }
  return (
    <>
      <input
        type="text"
        placeholder="add an Item..."
        onChange={changeHandler}
        value={message}
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value.message}{" "}
              <button onClick={() => deleteItem(item.id)}>❌</button>
              {/* <button onClick={}>🔧</button> */}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
