import '../Styles/Technology.css'

import {Cloud, renderSimpleIcon } from 'react-icon-cloud'
import { useState, useEffect } from 'react'
import { siReact, siJavascript, siAmazonaws, siDotnet, siGithub, siGit, siPhp, siPython, siRuby, siRubyonrails, siMysql, siHtml5, siGooglecloud, siAndroidstudio, siOracle} from "simple-icons"

const theIcons = [
        siReact, siJavascript, siAmazonaws, siDotnet, siGit, siGithub, siPhp, siPython, siRuby, siRubyonrails, siMysql, siHtml5, siGooglecloud, siAndroidstudio, siOracle
]

const icons = theIcons.map((icon) => {
    return renderSimpleIcon({
        icon,
        size: 100,
        aProps: {
        onClick: (e) => e.preventDefault()
        }
    })
})

const options = {
    'wheelZoom': false,
    "minSpeed": 0.008, 
    "maxSpeed":0.04, 
    "imageScale": 1.2, 
    "noSelect": true
}

const Technology = () => {

    return (
        <>
            <div>
                <h2>Technology</h2>
                <p>
                Throughout my career so far I've worked with all froms of front-end,  back-end,
                and databasing with cloud computing in my most recent years. The current technologies I'm
                profecient at are React, Javascript, C#, Python, AWS, and CSS.
                </p>
            </div>
            <div class='temp'>
                <Cloud 
                    options={options}
                >
                    {icons}
                </Cloud>
            </div>
        </>
    );
  };
  
  export default Technology;
  