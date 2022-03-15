import React from "react";
import imagenError from '../assets/images/error-404.png';

function error() {
    return(
        <div className="text-center">
        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenError} alt=" Star Wars - Mandalorian "/>
    </div>

    )

   

}



export default error;