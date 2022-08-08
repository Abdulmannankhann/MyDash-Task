import SignUp from './components/SignUp'
import Chart from './components/Chart'
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
	const [isAuth,setIsAuth] = useState(false)
	
  return (
	<BrowserRouter>
	<CssBaseline>
	  <Routes>
		<Route path="/" element={<SignUp setIsAuth={setIsAuth} isAuth={isAuth} />} />
		<Route path="/chart" element={<Chart />} />
	  </Routes>
	</CssBaseline>
  </BrowserRouter>
  );
}

export default App;
