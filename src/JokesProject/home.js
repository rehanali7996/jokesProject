import React from 'react';
import { ModalFooter } from 'react-bootstrap';
import App from './Modal';

export default function QuotesHome(){
    return(
        <div className="container-fluid" style={{display:"grid",placeItems:"center", height:"100vh",backgroundImage:"linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(/images/background.jpg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
            <App/>
            <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                <ModalFooter><p style="font-family: 'Spartan';font-size: 12px;">Created with <span><i class="fas fa-heart fa-lg"></i></span> Rehan </p></ModalFooter>
            </div>
        </div>
    )    
}
