import React from 'react';

function Title(props) {
    const text = props.text;
    return(
        <div>
        <h1 style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>{text}</h1>
        </div>
    )
}

export default Title;