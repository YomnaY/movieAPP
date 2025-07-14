import React, { useContext } from 'react';
import Developers from '../components/developers';
const About = () => {

    return (
        <div>
            <div className=' aboutus bg-dark '>
                <div style={{ paddingTop: "10px" }}>
                    <center>
                        <h2 >About Us</h2>
                        <h6>This the team of develobers who designed this website</h6>
                        <h6>You can contact us via email adn we promise that we will respons as soon as possible</h6>
                    </center>
                </div>
            </div>
            <Developers></Developers>
        </div>
    );
}

export default About;