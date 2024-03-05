import React from 'react';
import {useFadeEffect} from "../../../hooks/useFadeEffect.js";
import {motion} from "framer-motion";

const CustomFade = ({children, variants, delay}) => {
    const {fadeRef, mainControls} = useFadeEffect()
    return (
        <motion.div
            ref={fadeRef}
            variants={variants}
            transition={{duration:0.7, delay: delay ? delay : 0.1}}
            initial={'hidden'} animate={mainControls}
        >
            {children}
        </motion.div>
    );
};

export default CustomFade;