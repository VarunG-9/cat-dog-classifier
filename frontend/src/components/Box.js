import React, { useRef } from 'react';
import upload_icon from '../images/upload-icon.png';
import Choose_Files_Button from './Choose_Files_Button';


export default function Box ({file, setFile, hideBoxElements, setResult }) {
    const boxRef = useRef(null);
    return (
        <div className='box-div' ref={boxRef}>
            <img src={upload_icon} id="upload_icon"></img>
            <Choose_Files_Button file={file} setFile={setFile} id="upload_button" hideBoxElements = {hideBoxElements} boxRef={boxRef} setResult={setResult}/> 
        </div>
    )
}