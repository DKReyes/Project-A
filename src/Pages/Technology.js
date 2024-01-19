import {Cloud, renderSimpleIcon, renderImage, renderText, ICloud} from 'react-icon-cloud'
// import jsIcon from "simple-icons/icons/javascript";

// const iconTag = renderSimpleIcon({
//   icon: jsIcon,
// })

// const imgTag = renderImg({
//   imgProps: {
//     src: 'https://openmoji.org/data/color/svg/1F44B.svg',
//     alt: 'Globe',
//     width: 100,
//     height: 100
//   },
//   aProps: {
//     href: 'https://openmoji.org',
//     target: '_blank',
//     rel: 'noreferrer',
//   }
// })

// const textTag = renderText({
//   text: 'hello'
// })

// const containerProps: ICloud['containerProps'] = {}
// const canvasProps: ICloud['canvasProps'] = {}
// const cloudProps: ICloud['options'] = {}


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
            <Cloud 
                // containerProps={containerProps} 
                // canvasProps={canvasProps}
                // options={options}
            >
                {/* {iconTag} */}
                {/* {imgTag}
                {textTag} */}
            </Cloud>
        </>
    );
  };
  
  export default Technology;
  