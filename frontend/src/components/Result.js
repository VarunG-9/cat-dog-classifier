import React from 'react';
import Alert from 'react-bootstrap/Alert';


export default function Result ({result}) {

    return (
        <div id="result-div">
            <Alert variant="success" id="alert"> Your image was classified as a {result}!</Alert>
            {/* <h2 id="result"> Your image is classified as a {result}!</h2>*/}
        </div>
    )
}