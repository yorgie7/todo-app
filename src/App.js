import React from 'react';
import './App.css';

const listStyle = {
  display: 'flex',
  flexDirection: 'column',
  margin: '5px 20% 5px 20%',
  border: '2px solid  #944dff',
  minHeight: '200px',
  backgroundColor: '#e6e6ff'
}

const inputStyle = {
  width: '30%',
  border: '2px solid grey',
  borderRadius: '5px',
  marginRight: '2px',
  height: '22px',
  padding: '0 0 0 5px'
}

const ulStyle = {
  display: 'flex',
  flexDirection: 'row',
  listStyleType: 'none',
  margin: '2px 2px 2px 2px',
  padding: '0 0 0 20px'
}
const doneButton = {
  border: '1px solid grey',
  backgroundColor: '#6600ff',
  borderRadius: '5px',
  color: 'white',
  margin:'0 5px 0 auto'
}

const button = {
  border: '1px solid grey',
  backgroundColor: '#6600ff',
  borderRadius: '5px',
  color: 'white', fontSize: '14px',
  height: '26px',
}

const list = {
  fontSize: '16px',
  color: '#3333ff',
  fontWeight: '400',
  padding: '5px 0 0 0'
}


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentTodo: {
        text: '',
        isActive: true
      },
      todoArr: [],

      deletedArr: []

    }
  }


  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.currentTodo.text === '') {
      alert("Please Enter Some Text.");

    }
    else {
      this.state.todoArr.push(this.state.currentTodo);

      this.setState({ currentTodo: { text: '' }, todoArr: this.state.todoArr })

      console.log(this.state.todoArr)

    }
  };

  onChange = (e) => {
    this.setState({ currentTodo: { text: e.target.value, isActive: true } });
    if (e.target.value === '') {
      console.log('err//');
    }
  };


  remove = key => {
    const filteredItems = this.state.todoArr.filter(todo => {
      return todo.text !== key
    });
    const deletedItem = this.state.todoArr.filter(todo => {
      return todo.text === key
    });
    const removedItem = this.state.deletedArr.concat(deletedItem)
    this.setState({
      todoArr: filteredItems, deletedArr: removedItem
    })
    console.log(this.state.deletedArr);
  };


  render() {
    return (

      <div className="App">
        <header className="App-header">
          todo App
      </header>
        <div>
          <form onSubmit={this.onSubmit}>
            <input name='text' type='text'
              placeholder='Enter task here... '
              value={this.state.currentTodo.text} autoComplete='off'
              onChange={this.onChange}
              style={inputStyle} />

            <input type='submit' value='Add Task' style={button} />
          </form>
        </div>
        {this.state.todoArr.length === 0 ? (<p style={{ fontWeight: '300', marginTop: '10%' }}>
          Type your tasks for today...</p>
        ) : (
            <div style={listStyle}>
              {this.state.todoArr.map((todo) =>
                todo.isActive && <ul style={ulStyle}>
                  <li key={todo.text} style={list}>{todo.text}</li>
                  <button style={doneButton} onClick={() => this.remove(todo.text)}>Done</button>
                </ul>)}

            </div>)}

        <div style={{ margin: '40px' }}>

          {this.state.deletedArr.map((element) =>
            (<ul>
              <li key={element.text}>completed task: {element.text}</li></ul>)
          )}
        </div>
      </div>

    );
  }

}

export default App;
