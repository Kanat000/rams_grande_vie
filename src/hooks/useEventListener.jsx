import {useEffect} from "react";

export const useEventListener = (props) => {
    const {event, handler, passive = false,mediaQuery, depsArray} = props

    useEffect(() => {
            mediaQuery
                ? mediaQuery.addEventListener(event, handler, passive)
                : window.addEventListener(event, handler, passive);

            return () => {
                mediaQuery
                    ? mediaQuery.removeEventListener(event, handler)
                    : window.removeEventListener(event, handler);

            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [ ...depsArray, handler, event, passive]);
}