import React from 'react';

export default function Result ({result}) {

    return (
        <div id="result-div">
            <h2 id="result"> Your image is classified as a {result}</h2>
        </div>
    )
}