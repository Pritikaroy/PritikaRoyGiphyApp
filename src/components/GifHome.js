import React from "react";

import GifResult from "./GifResult";
import Navigation from "./Navigation";
import Options from "./Options";


const GifHome = (props, { match }) => {
    let term = props.match.params.term;

    return (
        <div>
            <h1>React Giphy Generator</h1>
            <p>
                Click the <strong>Search</strong> icon to begin searching for gifs
            </p>
            <Navigation />

            <p>Or just </p>

            <Options />
            
            <GifResult term={term} />

            
        </div>
    );
};

export default GifHome;