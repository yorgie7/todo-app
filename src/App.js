import React from "react";
import "./App.css";

const listStyle = {
  display: "flex",
  flexDirection: "column",
  margin: "5px 20% 5px 20%",
  border: "2px solid  #944dff",
  minHeight: "200px",
  backgroundColor: "#e6e6ff"
};

const inputStyle = {
  width: "30%",
  border: "2px solid grey",
  borderRadius: "5px",
  marginRight: "2px",
  height: "22px",
  padding: "0 0 0 5px"
};

const ulStyle = {
  display: "flex",
  flexDirection: "row",
  listStyleType: "none",
  margin: "2px 2px 2px 2px",
  padding: "0 0 0 20px"
};
const doneButton = {
  border: "1px solid grey",
  backgroundColor: "#6600ff",
  borderRadius: "5px",
  color: "white",
  margin: "0 5px 0 auto"
};

const button = {
  border: "1px solid grey",
  backgroundColor: "#6600ff",
  borderRadius: "5px",
  color: "white",
  fontSize: "14px",
  height: "26px"
};

const list = {
  fontSize: "16px",
  color: "#3333ff",
  fontWeight: "400",
  padding: "5px 0 0 0"
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTodo: {
        text: "",
        id: 0
      },
      todoArr: [],

      deletedArr: []
    };
  }

  onSubmit = (e) => {
    const { currentTodo , todoArr } = this.state;
    e.preventDefault();
    if (currentTodo.text === "") {
      alert("Please Enter Some Text.");
    } else {
     const updatedTodoArr = [...todoArr , currentTodo];

      this.setState({
        currentTodo: { text: "", id: 0 },
        todoArr: updatedTodoArr
      });
      console.log(currentTodo);
      console.log(todoArr);
    }
  };

  onChange = (e) => {
    this.setState({
      currentTodo: { text: e.target.value, id: this.state.todoArr.length }
    });
    if (e.target.value === "") {
      console.log("err//");
    }
  };

  remove = (key) => {
    const filteredItems = this.state.todoArr.filter((todo) => {
      return todo.id !== key;
    });
    const deletedItem = this.state.todoArr.filter((todo) => {
      return todo.id === key;
    });
    const removedItem = this.state.deletedArr.concat(deletedItem);
    this.setState({
      todoArr: filteredItems,
      deletedArr: removedItem
    });
  };

  render() {
    const {
      currentTodo: { text },
      todoArr,
      deletedArr
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">todo App</header>
        <div>
          <form onSubmit={this.onSubmit}>
            <input
              name="text"
              type="text"
              placeholder="Enter task here... "
              value={text}
              autoComplete="off"
              onChange={this.onChange}
              style={inputStyle}
            />

            <input type="submit" value="Add Task" style={button} />
          </form>
        </div>
        {todoArr.length === 0 ? (
          <p style={{ fontWeight: "300", marginTop: "10%" }}>
            Type your tasks for today...
          </p>
        ) : (
          <div style={listStyle}>
            {todoArr.map((todo) => (
              <ul key={todo.id} style={ulStyle}>
                <li key={todo.text} style={list}>
                  {todo.text}
                </li>
                <button style={doneButton} onClick={() => this.remove(todo.id)}>
                  Done
                </button>
              </ul>
            ))}
          </div>
        )}

        <div style={{ margin: "40px" }}>
          {deletedArr.map((element) => (
            <ul>
              <li key={element.text}>completed task: {element.text}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
