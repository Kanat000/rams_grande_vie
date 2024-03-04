import '../App.scss'
import {usePageConnectors} from "../hooks/usePageConnectors.js";
import Header from "./widgets/header/Header.jsx";
import Main from "./pages/main/Main.jsx";
import About from "./pages/about/About.jsx";
import CallToAction from "./pages/callToAction/CallToAction.jsx";
import {createContext, useRef} from "react";
import Plan from "./pages/plan/Plan.jsx";
import {AboutCards, AboutSliders, GallerySliders, infra_sliders, plans} from "../data/index.jsx";
import Infrastructure from "./pages/infrastructure/Infrastructure.jsx";
import Location from "./pages/location/Location.jsx";
import Gallery from "./pages/gallery/Gallery.jsx";
import Progress from "./pages/progress/Progress.jsx";
import BackToMain from "./shared/BackToMain.jsx";
import {useInView} from "framer-motion";


export const StateContext = createContext(null);
const Landing = () => {
    const backToMainRef = useRef()
    const pageStore = usePageConnectors()
    const isInView = useInView(backToMainRef)

    return (
        <div className={'vie-landing-container'}>
            <BackToMain btmRef={backToMainRef}/>
            <Header pageStore={pageStore} isInScroll={!isInView}/>
            <Main pageRef={pageStore.main.pageRef} aboutRef={pageStore.pages.aboutPage.pageRef}/>
            <StateContext.Provider value={{mobile: AboutCards, laptop: AboutSliders}}>
                <About pageRef={pageStore.pages.aboutPage.pageRef}/>
            </StateContext.Provider>
            <CallToAction />

            <StateContext.Provider  value={plans}>
                <Plan pageRef={pageStore.pages.planPage.pageRef}/>
            </StateContext.Provider>
            <StateContext.Provider value={infra_sliders}>
                <Infrastructure pageRef={pageStore.pages.infrastructurePage.pageRef}/>
            </StateContext.Provider>

            <Location pageRef={pageStore.pages.locationPage.pageRef}/>
            <StateContext.Provider value={GallerySliders}>
                <Gallery pageRef={pageStore.pages.galleryPage.pageRef}/>
            </StateContext.Provider>
            <Progress pageRef={pageStore.pages.allInOnePage.pageRef}/>
        </div>
    );
};

export default Landing;