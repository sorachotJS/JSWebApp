
function NewsComponent(){
    return(
        <>
        <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h4 className="m-0 text-uppercase font-weight-bold">News</h4>
                                <a className="text-secondary font-weight-medium text-decoration-none" href="">View All</a>
                            </div>
                        </div>
                        
                       
                        <div className="col-lg-12">
                            <div className="row news-lg mx-0 mb-3">
                                <div className="col-md-6 h-100 px-0">
                                    <img className="img-fluid h-100" src="img/news-700x435-5.jpg" style={{objectFit: 'cover'}}/>
                                </div>
                                <div className="col-md-6 d-flex flex-column border bg-white h-100 px-0">
                                    <div className="mt-auto p-4">
                                        <div className="mb-2">
                                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                href="">Business</a>
                                            <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                        </div>
                                        <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                        <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                            rebum clita rebum dolor stet amet justo</p>
                                    </div>
                                    <div className="d-flex justify-content-between bg-white border-top mt-auto p-4">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle mr-2" src="img/user.jpg" width="25" height="25" alt=""/>
                                            <small>John Doe</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <small className="ml-3"><i className="far fa-eye mr-2"></i>12345</small>
                                            <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center bg-white mb-3" style={{height:'110px'}}>
                                <img className="img-fluid" src="img/news-110x110-1.jpg" alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                </div>
                            </div>
                            <div className="d-flex align-items-center bg-white mb-3" style={{height:'110px'}}>
                                <img className="img-fluid" src="img/news-110x110-2.jpg" alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center bg-white mb-3" style={{height:'110px'}}>
                                <img className="img-fluid" src="img/news-110x110-3.jpg" alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                </div>
                            </div>
                            <div className="d-flex align-items-center bg-white mb-3" style={{height:'110px'}}>
                                <img className="img-fluid" src="img/news-110x110-4.jpg" alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
        
        </>
    )
}

export default NewsComponent