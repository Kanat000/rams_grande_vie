import {useRef} from "react";

export const usePageConnectors = () => {
    return {
        main: {pageRef: useRef()},
        pages: {
            planPage: {
                name: 'Планировки',
                link: '/',
                pageRef: useRef(),
                linkRef: useRef()
            },
            aboutPage: {
                name: 'О проекте',
                link: '/',
                pageRef: useRef(),
                linkRef: useRef()
            },
            infrastructurePage: {
                name: 'Инфраструктура',
                link: '/',
                pageRef: useRef(),
                linkRef: useRef()
            },
            locationPage: {
                name: 'Расположение',
                link: '/',
                pageRef: useRef(),
                linkRef: useRef()
            },
            galleryPage: {
                name: 'Галерея',
                link: '/',
                pageRef: useRef(),
                linkRef: useRef()
            },
            allInOnePage: {
                name: 'ALL-in-ONE',
                link: '/',
                pageRef: useRef(),
                linkRef: useRef()
            }
        }
    }
}