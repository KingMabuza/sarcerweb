import React from 'react';
import Footer from "./Footer";
import Nav from "./Nav";


function Home() {
    return(
        <div>
            <div className={'row'}>
                <div className={'col s2'}>
                    <Nav/>
                </div>
                <div className={'col s10 center homeContent'}>
                    <h3>SARCER</h3>
                    <h6>- D I G I T A L S T U D I O -</h6>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Home
