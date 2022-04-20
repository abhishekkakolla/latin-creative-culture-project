import React from 'react';

const SiteInfo = () => {

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <div style={{marginTop: '-22rem'}}>
            <ul style={{listStyleType: 'none', lineHeight: '50px', fontSize: '25px'}}>
            <li>Abhishek Kakolla</li> 
            <li>Ms. Rogow</li>
            <li>LVLBD1-01</li>
            <li>23 April 2022</li>
            </ul>
            </div>
            
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <img  style={{width: '800px', position: 'relative'}} src="https://www.ancienthistorylists.com/wp-content/uploads/2014/08/animal-sacrifice-in-ancient-rome.jpg"></img>
            </div>
        </div>
    )
}

export default SiteInfo;