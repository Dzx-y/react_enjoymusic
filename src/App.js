import React from 'react';
import './App.css';
import Header from './pages/Header/header'
import HeaderRouter from './router/HeaderRouter'
import Bottom from './pages/Bottom/bottom'

function App() {
	return(<React.Fragment>
		      <Header></Header>
		      <Bottom></Bottom>
		      <HeaderRouter></HeaderRouter>
		    </React.Fragment>)
}

export default App;