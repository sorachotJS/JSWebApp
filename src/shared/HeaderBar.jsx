import { Link } from "react-router-dom";

function HeaderBar() {
  return (
    <>
      <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center bg-dark px-lg-5">
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-sm bg-dark p-0">
              <ul className="navbar-nav ml-n2">
                <li className="nav-item border-right border-secondary">
                  <a className="nav-link text-body small" href="#">
                    Monday, January 1, 2045
                  </a>
                </li>
                <li className="nav-item border-right border-secondary">
                  <a className="nav-link text-body small" href="#">
                    Advertise
                  </a>
                </li>
                <li className="nav-item border-right border-secondary">
                  <a className="nav-link text-body small" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-body small" href="#">
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3 text-right d-none d-md-block">
            <nav className="navbar navbar-expand-sm bg-dark p-0">
              <ul className="navbar-nav ml-auto mr-n2">
                <li className="nav-item">
                  <a className="nav-link text-body" href="#">
                    <small className="fab fa-twitter"></small>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-body" href="#">
                    <small className="fab fa-facebook-f"></small>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-body" href="#">
                    <small className="fab fa-linkedin-in"></small>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-body" href="#">
                    <small className="fab fa-instagram"></small>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-body" href="#">
                    <small className="fab fa-google-plus-g"></small>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-body" href="#">
                    <small className="fab fa-youtube"></small>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="row align-items-center bg-white py-3 px-lg-5">
          <div className="col-lg-12">
            <center><a href="index.html" className="navbar-brand p-0 d-none d-lg-block">
              <h1 className="m-0 display-4 text-uppercase text-primary">
                JS<span className="text-secondary font-weight-normal">Family</span>
              </h1>
            </a></center>
          </div>
         
        </div>
      </div>

      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5 ">
        <a href="index.html" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 display-4 text-uppercase text-primary">Biz<span className="text-white font-weight-normal">News</span></h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between px-0 px-lg-3 " id="navbarCollapse">
                <div className="navbar-nav mr-auto ml-auto py-0 ">
                  <Link className="nav-item nav-link" to="/"> Home</Link>

                  <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Blog</a>
                        <div className="dropdown-menu rounded-0 m-0">
                        <Link className="dropdown-item" to="/news"> News</Link>
                       <Link className="dropdown-item" to="/article"> Article</Link>
                        <Link className="dropdown-item" to="/knowledge"> Knowledge</Link>
                        </div>
                    </div>

                
                  <Link className="nav-item nav-link" to="/forum"> Forum</Link>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">learning</a>
                        <div className="dropdown-menu rounded-0 m-0">
                        <Link className="dropdown-item" to="/math"> Math</Link>
                        <Link className="dropdown-item" to="/eng"> English</Link>
                        <Link className="dropdown-item" to="/japan"> Japan</Link>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Private</a>
                        <div className="dropdown-menu rounded-0 m-0">
                        <Link className="dropdown-item" to="/religion"> Religion</Link>
                        <Link className="dropdown-item" to="/project"> Project</Link>
                        <Link className="dropdown-item" to="/Album"> Album</Link>
                        <Link className="dropdown-item" to="/Album"> Activity</Link>
                        </div>
                    </div>
                    <Link className="nav-item nav-link" to="/portfolio"> Portfolio</Link>
                    <Link className="nav-item nav-link" to="/contact"> Contact</Link>
                </div>
               
            </div>
        </nav>
    </div>
    </>
  );
}
export default HeaderBar;
