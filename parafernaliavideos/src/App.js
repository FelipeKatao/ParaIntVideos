import React from 'react';
import './css/App.css';
import MenuBar from './components/MenuBar.js'
import {Switch,Route, Redirect} from 'react-router-dom'
import MainPage from './components/MainPage';
import VideoPage from './components/VideoPage';

function App() {
  return (
    <>
    <MenuBar></MenuBar>
    <Switch>
      <Route path='/initialPage' component={MainPage}></Route>
      <Route path='/videoPage' component={VideoPage}></Route>
      <Redirect to='/initialPage' ></Redirect>
    </Switch>
  </>
  );
}

export default App;
