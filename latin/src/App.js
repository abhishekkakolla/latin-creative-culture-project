import './App.css';
import React from 'react';
import Title from './components/title';
import Introduction from './components/introduction';



class App extends React.Component {


  state = {
    pagee: "0"
  };

  render() {
    return (
      <div className='body'>
        <Title />
        <Introduction page={this.state.pagee} />

        <div className='navbar'>
            <nav>
                <ul className='navbar_nav'>
                    <li className='nav_link'><a href="#" style={{color: "white", fontWeight:"bold", textDecoration: "none", fontSize:"25px"}}>Introduction</a></li>
                    <li className='nav_link'><a href="#" onClick={() => { this.setState({ pagee: "1" }); }} style={{color: "white", fontWeight:"bold", textDecoration: "none", fontSize:"25px"}}>Idea of Roman Religion</a></li>
                    <li className='nav_link'><a href="#" style={{color: "white", fontWeight:"bold", textDecoration: "none", fontSize:"25px"}}>Role of Roman Religion</a></li>
                    <li className='nav_link'><a href="#" style={{color: "white", fontWeight:"bold", textDecoration: "none", fontSize:"25px"}}>Works Cited</a></li>
                </ul>
            </nav>
        </div>

      </div>

      


    );

  }
}


export default App;