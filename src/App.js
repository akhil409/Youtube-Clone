import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import RecommendedVideos from './Recommendedvideos/RecommendedVideos';
// import Sidebar from './Sidebar';
// import Sample from './SearchTerm/SearchTerm';
// import SearchPage from './SearchPage/SearchPage';
import SearchTerm from './SearchTerm/SearchTerm';
import Sidebar from './Sidebar/Sidebar';
import SideRecommed from './SideRecommed/SideRecommed';

function App() {
  return (
    //BEM class naming convention
    <div className="App">
      <BrowserRouter>
          <Header />
          {/* <div className="app-page">
              <Sidebar />
              <RecommendedVideos />
              </div> */}

              <Routes>

                    <Route exact path='/search/:searchTerm' element={<SearchTerm />}> </Route> 

                    <Route exact path='/' element={<SideRecommed />}> </Route>
                    
              </Routes>
      </BrowserRouter>
 
      {/* <Header />
      <div className="app-page">
                           <Sidebar />
                           <RecommendedVideos />
        </div> */}

    </div>
  );
}

export default App;

// Reference:https://www.youtube.com/watch?v=NT299zIk2JY    03:28:00