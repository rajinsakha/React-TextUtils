// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Footer from './components/Footer';
// import About from './components/About';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not

  const [textColor, setTextColor] = useState('dark');
  

  const [alert, setAlert] = useState(null);

  const [btnColor, setBtnColor] = useState('primary');

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null)
      },2000);
  }

  // const toggleDangerMode = ()=>{
  //   if(mode == 'light'){
  //     setMode('danger');
  //     setTextColor('light');
  //     setBtnColor('danger');
  //     document.body.style.backgroundColor = '#f23547';
  //     showAlert("Danger mode has been enabled", "success");
  //   }
  //   else{
  //     setMode('light');
  //     setTextColor('dark');
  //     setBtnColor('primary');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // }


  const toggleMode = ()=>{
    if(mode == 'light'){
      setMode('dark');
      setTextColor('light');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      setTextColor('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title='TextUtils'  mode={mode} toggleMode={toggleMode} /*toggleDangerMode = {toggleDangerMode} */ textColor={textColor}/> 
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} btnColor={btnColor} /> }/> */}

          <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} btnColor={btnColor} /> 

          {/* <Route exact path="/about" element={<About/>}/> */}
          
        {/* </Routes> */}
       
      </div>
      {/* </BrowserRouter> */}
      <Footer mode={mode}/>
     </>
  );
}

export default App;
