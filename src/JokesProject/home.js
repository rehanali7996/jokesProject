import React from 'react';
import App from './Modal';
import { FaHandHoldingHeart } from "react-icons/fa";

export default function QuotesHome(){
    return(
        <div className="container-fluid" style={{display:"grid",placeItems:"center", height:"100vh",backgroundImage:"linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(/images/background.jpg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
            <App/>
            <div className="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);border:1px solid #FFCC00;border-radius:10px">
                <p style="font-family: 'Spartan';font-size: 12px;">Created with <FaHandHoldingHeart/> Rehan </p>
            </div>
        </div>
    )    
}
