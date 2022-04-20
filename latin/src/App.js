import './App.css';
import Nav from './components/navbar';
import SiteInfo from './components/main';
import Title from './components/title';
import ChooseComponent from './components/lesson';



function App() {
  
  return (
    <div className='body'>
      <Title />
      <Nav />
      <ChooseComponent page_state={"introduction"} />
    </div>
    
  );
  
}


export default App;