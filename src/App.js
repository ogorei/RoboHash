import React, {Component} from 'react';
import './App.css';
import CardList from './components/CardList';
import { robots } from './robotDetails';
import SearchBox from './components/SearchBox';

class App extends Component{
  constructor(){
    super()
    this.state ={
      robots: robots,
      searchfield:''
     }
  }

  onSearchChange =(event)=>{
    console.log(event.target.value);
    this.setState({searchfield: event.target.value})
  }

  render(){
    const filteredRobots = this.state.robots.filter(robots=>{
    return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
  return (
    <div className="App">
      <header className="App-header">Robot Profiles</header>
      <p id="tools">使用しているツール→ React, RoboHash(API),Tachyons(Styling)</p>
      <SearchBox searchChange={this.onSearchChange}/>
      <CardList props={filteredRobots} />
    
    </div>
  );
}
}

export default App;
