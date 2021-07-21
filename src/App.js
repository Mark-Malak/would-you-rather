import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CreateQuestion from './components/CreateQuestion';
import OutlinedCard from './components/myCard';
class App extends React.Component {
 
 
 
  render() {
    return(
       <div className="App">
         <NavBar />
         <br/>
         <br/>  
         <OutlinedCard/>
         
     </div>
    )
  }
}

export default App;
