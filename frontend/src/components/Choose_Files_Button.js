import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';


export default function Choose_Files_Button ({ file, setFile, hideBoxElements, boxRef, setResult}) {
    const fileUpload = async (e) => {

        console.log(e.target.files[0]);
        setFile(e.target.files[0]); 
        hideBoxElements(); 
        boxRef.current.style.height = '500px';
        boxRef.current.style.width = '700px';
        boxRef.current.style.backgroundImage = `url(${URL.createObjectURL(e.target.files[0])})`;
        boxRef.current.style.backgroundSize = '100% 100%';
        boxRef.current.style.backgroundRepeat = 'no-repeat';
        const resultDiv = document.getElementById('result-div');
        resultDiv.style.display = 'block';
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        const response = await fetch('/classify', {
            method: 'POST',
            body: formData
        })
        const result = await response.text(); 
        setResult(result);
        console.log(result);
    }
    const clickInput = ()  => {
        document.getElementById('file_input').click();
    }

    return (
        <div>
            <div style={{display: 'none'}}>
                <input type="file" accept='image/png, image/jpeg, image/jpg' onChange={fileUpload} id='file_input' display='none'/>
            </div>
            <Button variant="link" id="upload_button" onClick={clickInput}> Upload Files From Device </Button>    
        </div>
    )
}

