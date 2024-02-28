
export const scrollToView = (elementRef) => {
    elementRef.current.scrollIntoView({behavior: "smooth", block: 'start'})
}