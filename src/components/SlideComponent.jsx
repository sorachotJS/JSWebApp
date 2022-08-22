
import OwlCarousel from 'react-owl-carousel';  

// import 'owl.carousel/dist/assets/owl.carousel.css';  

// import 'owl.carousel/dist/assets/owl.theme.default.css';  

function SlideCom() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 px-0">



            <OwlCarousel  className="owl-carousel main-carousel position-relative" autoplay smartSpeed={1500} items={1} dots loop center >
              <div
                className="position-relative overflow-hidden"
                style={{ height: '500px' }}
              >
                <img
                  className="img-fluid h-100"
                  src="img/news-800x500-1.jpg"
                  style={{ objectFit: "cover" }}
                />
                <div className="overlay">
                  <div className="mb-2">
                    <a
                      className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                      href=""
                    >
                      Business
                    </a>
                    <a className="text-white" href="">
                      Jan 01, 2045
                    </a>
                  </div>
                  <a
                    className="h2 m-0 text-white text-uppercase font-weight-bold"
                    href=""
                  >
                    Lorem ipsum dolor sit amet elit. Proin vitae porta diam...
                  </a>
                </div>
              </div>
              <div
                className="position-relative overflow-hidden"
                style={{ height: '500px' }}
              >
                <img
                  className="img-fluid h-100"
                  src="img/news-800x500-2.jpg"
                  style={{ objectFit: "cover" }}
                />
                <div className="overlay">
                  <div className="mb-2">
                    <a
                      className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                      href=""
                    >
                      Business
                    </a>
                    <a className="text-white" href="">
                      Jan 01, 2045
                    </a>
                  </div>
                  <a
                    className="h2 m-0 text-white text-uppercase font-weight-bold"
                    href=""
                  >
                    Lorem ipsum dolor sit amet elit. Proin vitae porta diam...
                  </a>
                </div>
              </div>
              <div
                className="position-relative overflow-hidden"
                style={{ height: '500px' }}
              >
                <img
                  className="img-fluid h-100"
                  src="img/news-800x500-3.jpg"
                  style={{ objectFit: "cover" }}
                />
                <div className="overlay">
                  <div className="mb-2">
                    <a
                      className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                      href=""
                    >
                      Business
                    </a>
                    <a className="text-white" href="">
                      Jan 01, 2045
                    </a>
                  </div>
                  <a
                    className="h2 m-0 text-white text-uppercase font-weight-bold"
                    href=""
                  >
                    Lorem ipsum dolor sit amet elit. Proin vitae porta diam...
                  </a>
                </div>
              </div>
            </OwlCarousel>





          </div>
          <div className="col-lg-5 px-0">
            <div className="row mx-0">
              <div className="col-md-6 px-0">
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "250px" }}
                >
                  <img
                    className="img-fluid w-100 h-100"
                    src="img/news-700x435-1.jpg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <div className="mb-2">
                      <a
                        className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href=""
                      >
                        Business
                      </a>
                      <a className="text-white" href="">
                        <small>Jan 01, 2045</small>
                      </a>
                    </div>
                    <a
                      className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                      href=""
                    >
                      Lorem ipsum dolor sit amet elit...
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-0">
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "250px" }}
                >
                  <img
                    className="img-fluid w-100 h-100"
                    src="img/news-700x435-2.jpg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <div className="mb-2">
                      <a
                        className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href=""
                      >
                        Business
                      </a>
                      <a className="text-white" href="">
                        <small>Jan 01, 2045</small>
                      </a>
                    </div>
                    <a
                      className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                      href=""
                    >
                      Lorem ipsum dolor sit amet elit...
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-0">
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "250px" }}
                >
                  <img
                    className="img-fluid w-100 h-100"
                    src="img/news-700x435-3.jpg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <div className="mb-2">
                      <a
                        className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href=""
                      >
                        Business
                      </a>
                      <a className="text-white" href="">
                        <small>Jan 01, 2045</small>
                      </a>
                    </div>
                    <a
                      className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                      href=""
                    >
                      Lorem ipsum dolor sit amet elit...
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-0">
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "250px" }}
                >
                  <img
                    className="img-fluid w-100 h-100"
                    src="img/news-700x435-4.jpg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <div className="mb-2">
                      <a
                        className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href=""
                      >
                        Business
                      </a>
                      <a className="text-white" href="">
                        <small>Jan 01, 2045</small>
                      </a>
                    </div>
                    <a
                      className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                      href=""
                    >
                      Lorem ipsum dolor sit amet elit...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark py-3 mb-3">
        <div className="container">
          <div className="row align-items-center bg-dark">
            <div className="col-12">
              <div className="d-flex justify-content-between">
                <div
                  className="bg-primary text-dark text-center font-weight-medium py-2"
                   style={{width: '170px'}}
                >
                  Breaking News
                </div>
                <OwlCarousel
                  className="owl-carousel tranding-carousel position-relative d-inline-flex align-items-center ml-3"
                  autoplay smartSpeed={1500}  dot={false} loop nav navText={['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>']}
                  style={{width: 'calc(100% - 170px)',paddingRight: '90px'}}
                >
                  <div className="text-truncate">
                    <a
                      className="text-white text-uppercase font-weight-semi-bold"
                      href=""
                    >
                      Lorem ipsum dolor sit amet elit. Proin interdum lacus eget
                      ante tincidunt, sed faucibus nisl sodales
                    </a>
                  </div>
                  <div className="text-truncate">
                    <a
                      className="text-white text-uppercase font-weight-semi-bold"
                      href=""
                    >
                      Lorem ipsum dolor sit amet elit. Proin interdum lacus eget
                      ante tincidunt, sed faucibus nisl sodales
                    </a>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SlideCom;
