import React from 'react';
import Footer from "./Footer";
import Nav from "./Nav";


function About() {
    return(

        <div className={'row'}>
            <div className={'col s2'}>
                <Nav/>
            </div>
            <div className={'col s10 center aboutContent'}>
                <div id={'services'}>
                    <h3>Technology That Inspires</h3>
                    <p className={'grey-text'}>WHAT WE CAN DO FOR YOU</p>
                    <li>UI & UX Design</li>
                    <li>Web & Mobile Development</li>
                    <li>Search Engine Optimization</li>
                    <li>Digital Strategy</li>
                    <p className={'grey-text darken-3'}>WORK WITH US</p>
                    <a href={'mailto:info@sarcer.com'}>info@sarcer.com</a>
                    <p className={'grey-text'}>WE ARE UTC +02:00</p>
                    <p>37 Bunting Road</p>
                    <p>Johannesburg - South Africa</p>
                    <p className={'grey-text'}>FOLLOW US</p>
                    <li ><a href={'www.facebook.com/sarcer'}>FACEBOOK</a></li>
                    <li ><a href={'www.twitter.com/sarcer'}>TWITTER</a></li>
                    <li ><a href={'www.instagram.com/sarcer'}>INSTAGRAM</a></li>
                    <li><a href={'www.linkedin.com/sarcer'}>LINKEDIN</a></li>
                </div>

                <Footer/>
            </div>
        </div>
    )
}

export default About
