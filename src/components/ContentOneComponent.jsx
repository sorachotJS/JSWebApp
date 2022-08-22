import OwlCarousel from 'react-owl-carousel';  
function ContentOneComponent(){
    return(
        <>
        <div className="container-fluid pt-5 mb-3">
        <div className="container">
            <div className="section-title">
                <h4 className="m-0 text-uppercase font-weight-bold">Featured News</h4>
            </div>
            <OwlCarousel className="owl-carousel news-carousel carousel-item-4 position-relative" margin={10} autoplay smartSpeed={1000}  dots={false} loop nav navText={['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>']}>
                <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                    <img className="img-fluid h-100" src="img/news-700x435-1.jpg"  style={{ objectFit: "cover" }}/>
                    <div className="overlay">
                        <div className="mb-2">
                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="">Business</a>
                            <a className="text-white" href=""><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                    </div>
                </div>
                <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                    <img className="img-fluid h-100" src="img/news-700x435-2.jpg"  style={{ objectFit: "cover" }}/>
                    <div className="overlay">
                        <div className="mb-2">
                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="">Business</a>
                            <a className="text-white" href=""><small>Jan 01, 2046</small></a>
                        </div>
                        <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                    </div>
                </div>
                <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                    <img className="img-fluid h-100" src="img/news-700x435-3.jpg"  style={{ objectFit: "cover" }}/>
                    <div className="overlay">
                        <div className="mb-2">
                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="">Business</a>
                            <a className="text-white" href=""><small>Jan 01, 2047</small></a>
                        </div>
                        <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                    </div>
                </div>
                <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                    <img className="img-fluid h-100" src="img/news-700x435-4.jpg"  style={{ objectFit: "cover" }}/>
                    <div className="overlay">
                        <div className="mb-2">
                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="">Business</a>
                            <a className="text-white" href=""><small>Jan 01, 2048</small></a>
                        </div>
                        <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                    </div>
                </div>
                <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                    <img className="img-fluid h-100" src="img/news-700x435-5.jpg"  style={{ objectFit: "cover" }}/>
                    <div className="overlay">
                        <div className="mb-2">
                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="">Business</a>
                            <a className="text-white" href=""><small>Jan 01, 2049</small></a>
                        </div>
                        <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    </div>
        
        </>
    )
}

export default ContentOneComponent