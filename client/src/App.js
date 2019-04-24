import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      items: []
    }
  }
  componentDidMount(){
    axios.get('/api/items')
    .then(res => {
      console.log(res.data);
      this.setState({
        items: res.data
      });
    });
  }
  render(){
    return (
      <div className="App">
        Hello
        {this.state.items.map(item => (<h1>{item.name}</h1>))}
      </div>
    );
  }
}

export default App;
