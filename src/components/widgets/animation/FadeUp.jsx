import React from 'react';
import {useFadeEffect} from "../../../hooks/useFadeEffect.js";
import {motion} from "framer-motion";

const FadeUp = ({children, delay, duration}) => {
    const {fadeRef, mainControls} = useFadeEffect()
    return (
        <motion.div
            ref={fadeRef}
            variants={{
                hidden: {opacity:0.2, y:"100%"},
                visible: {opacity:1, y:0},
            }}
            transition={{duration: duration ? duration : 0.7, delay: delay ? delay : 0.1}}
            initial={'hidden'} animate={mainControls}
            style={{width:"inherit", height:"inherit", display:"inherit", justifyContent: "inherit", alignItems: "inherit"}}
        >
            {children}
        </motion.div>
    );
};

export default FadeUp;