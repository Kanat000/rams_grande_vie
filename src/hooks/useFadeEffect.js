import {useEffect, useRef} from "react";
import {useAnimation, useInView} from "framer-motion";



export const useFadeEffect = () => {
    const fadeRef = useRef(null);
    const isInView = useInView(fadeRef, {once: true})
    const mainControls = useAnimation()
    useEffect(()=>{
        if(isInView)
            mainControls.start('visible').then();
        else mainControls.set('hidden')
    }, [isInView, mainControls])


    return {fadeRef: fadeRef, mainControls: mainControls}
}