import React, { useState, useEffect, useRef } from 'react';
import Heading from './components/Heading';
import Box from './components/Box';
import Result from './components/Result'
function App() {
  const [result, setResult]= useState(null);
  const [file, setFile] = useState(null);

  const hideBoxElements= () => {
    const upload_icon = document.getElementById('upload_icon');
    upload_icon.style.display = 'none';
    const upload_button = document.getElementById('upload_button');
    upload_button.style.display = 'none';
  }
  return (
    <div className="App">
        <Heading />
        <Box file={file} setFile={setFile} hideBoxElements = {hideBoxElements} setResult={setResult}/>
        <Result result={result}/> 
    </div>
  );
}

export default App;
