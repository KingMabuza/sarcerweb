import React from 'react';
import Nav from "./Nav";
import emailjs from 'emailjs-com';
import {navigate} from "@reach/router";


function Contact() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('zoho', 'sarcer_contact', e.target, 'user_i42NihVkbu5mbE2TKIvhj')
            .then((result) => {
                console.log(result.text);
                navigate('/')
            }, (error) => {
                console.log(error.text);
            });
    }

    return(

        <div className={'row'}>
            <div className={'col s2'}>
                <Nav/>
            </div>
            <div  className={'col s10 contactContent'}>
                <h3 className={'center'}>TALK TO US</h3>
                <div className={'container'}>
                    <form onSubmit={sendEmail}>
                        <input type={'text'} name='name' placeholder={'Name'} className={'white-text'}/>
                        <input type={'email'} name='email' placeholder={'Email'} className={'white-text'}/>
                        <input type={'text'} name='subject' placeholder={'Subject'} className={'white-text'}/>
                        <input type={'text'} name='message' placeholder={'Message'} className={'white-text'}/>
                        <button className={'btn transparent'} type={'submit' } value={'send'}>TALK TO US</button>
                    </form>
                </div>
                <footer className={'contactFooter grey-text center'}>© SARCER. 2020 <span className={'Rights'}>ALL RIGHTS RESERVED</span></footer>
            </div>
        </div>

    )
}

export default Contact
