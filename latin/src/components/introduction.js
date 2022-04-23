import React from 'react';
import Idea from './idea_slide';
import Title from './title';

function Introduction(props) {
    const page = props.page;
    if (page == 0) {
        return (
            <div>
                <Title text={"Role of Religion in the life of Roman Citizens"} />
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly' }}>

                    <div style={{ marginTop: '-22rem' }}>
                        <ul style={{ listStyleType: 'none', lineHeight: '50px', fontSize: '25px' }}>
                            <li>Abhishek Kakolla</li>
                            <li>Ms. Rogow</li>
                            <li>LVLBD1-01</li>
                            <li>23 April 2022</li>
                        </ul>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <img style={{ width: '800px', position: 'relative' }} src="https://www.ancienthistorylists.com/wp-content/uploads/2014/08/animal-sacrifice-in-ancient-rome.jpg"></img>
                    </div>
                </div>
            </div>
        )
    } else if (page == 1) {
        return (
            <div>
                <Idea />
            </div>
        )
    }




}

export default Introduction;