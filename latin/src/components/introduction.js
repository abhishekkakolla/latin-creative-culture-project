import React from 'react';
import Idea from './idea_slide';
import Title from './title';
import Role from './role_slide';
import References from './references';

function Introduction(props) {
    const page = props.page;
    if (page == 0) {
        return (
            <div>
                <Title text={"Role of Religion in the life of Roman Citizens"} />
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly' }}>

                    <div>
                        <ul style={{ listStyleType: 'none', lineHeight: '50px', fontSize: '25px' }}>
                            <li>Abhishek Kakolla</li>
                            <li>Ms. Rogow</li>
                            <li>LVLBD1-01</li>
                            <li>23 April 2022</li>
                            <p><u>About the Project</u></p>
                            <p>This is an interactive demonstration<br /> I have created that teaches the <br /><b>idea</b> and <b>role</b> of religion in the lives<br /> of Roman Citizens. Everything was <br />created using ReactJS.</p>


                        </ul>


                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <img style={{ boxShadow: '5px 5px', width: '800px', position: 'relative' }} src="https://www.ancienthistorylists.com/wp-content/uploads/2014/08/animal-sacrifice-in-ancient-rome.jpg"></img>
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
    } else if (page == 2) {
        return (
            <div>
                <Role />
            </div>
        )
    } else if (page == 3) {
        return (
            <div>
                <References />
            </div>
        )
    }




}

export default Introduction;