
export const switchActiveLink = (pages)=> {
    pages.map((page)=>{
        if (page.pageRef.current && page.linkRef.current){

            const pageBlock= page.pageRef.current
            const pageLink=  page.linkRef.current
            const pageTop =  pageBlock.offsetTop
            const pageBottom = pageTop + pageBlock.offsetHeight
            const scrollView = window.scrollY+500

            if(scrollView >= pageTop && scrollView<pageBottom){
                pageLink.classList.add('active-head-menu-link')
            }else{
                pageLink.classList.remove('active-head-menu-link')
            }
        }
    })
}