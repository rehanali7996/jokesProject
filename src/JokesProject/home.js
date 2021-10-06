import React from 'react';
import App from './Modal';

export default function QuotesHome(){
    return(
        <div className="container-fluid" style={{display:"grid",placeItems:"center", height:"100vh",backgroundImage:"linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(/images/background.jpg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}>
            <App/>

        </div>
    )    
}
