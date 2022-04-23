import React from 'react';
import Title from './title';

function Role() {
    return (
        <div>
            <Title text={"Role of Roman Religion"} />
            <div style={{ marginLeft: '20px', lineHeight: '50px', fontSize: '25px' }}>
                <div>
                    <p><u>How was religion practiced?</u></p>
                </div>
                <ul>
                    <li>The Romans built temples to worship their gods and goddesses and hosted rituals and
                        festivals to celebrate them.</li>
                    <li>For example, Temple of Venus</li>
                    <li>One of these celebrated festivals was Saturnalia</li>
                    <li>Saturnalia was the considered the most popular festival of the year and celebrated Saturn, the God of sowing or seed.</li>
                    <li>Slaves were free to do what they wanted, and all work was cancelled (Wong).</li>
                </ul>

                <div className='container'>
                    <img className='image' src="https://www.romecitytour.it/wp-content/uploads/2019/09/Saturnalia.jpg"></img>
                    <div className="middle">
                        <div className="text">Saturnalia
                        </div>
                    </div>
                </div>

                <div>
                    <p><u>How did religion affect the daily lives of Romans?</u></p>
                </div>
                <ul>
                    <li>Any unexpected or adverse events in Roman life were thought to be directly related to
                        the mood of certain gods</li>
                    <li>As a result, people would often make offerings to the gods, such as sacrificed animals
                        like bulls and sheep to thank or please them (Barrow).
                    </li>
                    <li>The one feature that distinguishes monotheistic religions from the religion of the Romans
                        was their emphasis on morality and ethics. Romans believed that their deities were
                        concerned with offerings and rituals instead of their morals.</li>

                </ul>


                <p><u>⭐Test Yourself:⭐</u></p>
                <p><b>What gods / goddesses were lararia dedicated to?</b></p>


                <div className='container' style={{ width: '800px', height: '50px' }}>
                    <div className='image' style={{ width: '800px', height: '50px', backgroundColor: 'black' }}>
                        <p style={{ color: 'white', display: 'block' }}>Answer</p>
                    </div>
                    <div className="middle">
                        <div className="text">Lararia were dedicated to the guardian spirits of the household (or Lares).
                        </div>
                    </div>
                </div>


                <br />
                <br />
                <br />
                <br />




            </div>
        </div>

    )
}


export default Role;