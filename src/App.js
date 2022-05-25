
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Filter from './components/Filter/Filter'
import Project from './components/Project/Project'

function App(props) {
  return (

    <div className="App">
      <div>
        <Sidebar />
      </div>
      <div className="left-part">
        <Navbar />
        <Filter/>
        <Project/>
      </div>
    </div>
  );
}

export default App;
