import {useEffect, useRef} from "react";


export const useSmoothCountUpEffect = (isInView, setProgressPercent, stopCount) => {
    const intervalRef = useRef(null);

    useEffect(()=>{
        if (isInView) {
            intervalRef.current = setInterval(() => {
                setProgressPercent(prev => {
                    if(prev >= (stopCount-1)){
                        clearInterval(intervalRef.current)
                    }
                    return prev + 1
                })
            }, 10)
        }else{
            setProgressPercent(0)
            clearInterval(intervalRef.current)
        }

    },[isInView])
}