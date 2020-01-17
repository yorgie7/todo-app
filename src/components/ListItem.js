import React, { Component } from 'react'



const button = {
    border: '1px solid grey',
    backgroundColor:'#6600ff',
    borderRadius: '5px',
    color: 'white', fontSize:'14px',
    height: '26px'
    }
    


class ListItem extends Component {
constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
}
remove (key){

    this.props.remove(key);
    console.log('remove invoked in li');
}
    render() {
        const {key, text}= this.props;
        return (
            <div>
                <ul style={listStyle}>
          <li key={text}>{text}</li>
        <button onClick = {(key)=>this.remove(key)}>Done</button></ul>
        
            </div>
        )
    }
}
export default ListItem;