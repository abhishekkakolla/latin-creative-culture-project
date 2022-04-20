import React from 'react';
import SiteInfo from './main';


function ChooseComponent(props) {
    const page_state = props.page_state;
    if (page_state=="introduction") {
        return <SiteInfo />
    } 
}

export default ChooseComponent;