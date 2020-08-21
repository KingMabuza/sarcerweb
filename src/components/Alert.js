import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function Alert() {
    return(
        <div>
            <div className={'row'}>
                <div className={'col s2'}>
                    <Nav/>
                </div>
                <div className={'col s10 center homeContent'}>
                    <h3>SARCER</h3>
                    <p>Thank You. Your Message Has Been Received</p>
                    <Footer/>
                </div>
            </div>
        </div>
        )
}

export default Alert
