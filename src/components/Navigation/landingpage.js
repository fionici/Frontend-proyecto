import React from "react";
import '../landingpage.css';
import destinosvideo from '../../video/destinosvideo.mp4';

const Landingpage = () => {
    return (
        <div className="landingpage">
            <video src={destinosvideo} autoPlay muted loop class="video-bg" />
        </div>


    )
}

export default Landingpage;