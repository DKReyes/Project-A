import '../Styles/TransitionText.css';
import { Outlet, Link } from 'react-router-dom';
import {useState,useEffect } from 'react';
import classNames from 'classnames';

const ANIMATED_WORDS = ['Full Stack Developer', 'Software Engineer', 'Cloud Developer', 'IT Graduate']
const TRANSITION_INTERVAL = 1500


const TransitionText = () => {

    const [transitionProp, setTransitionProp] = useState<TransitionProp>({transition: 'up'})

    useEffect(() => {
        const transitionTimeout = setInterval(() => {
            transitionProp.transition == 'up' ? setTransitionProp({ transition: 'down' }) : setTransitionProp({ transition: 'up'})
        }, TRANSITION_INTERVAL)

        return () => clearInterval(transitionTimeout)
    },[transitionProp])

}

export default TransitionText;