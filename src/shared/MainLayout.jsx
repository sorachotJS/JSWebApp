import HeaderBar from "./HeaderBar";
import Footer from "./Footer";

function MainLayout({ children }) {
  return(
    <>
      <HeaderBar />
      {children}
      <Footer />
    <a href="#" class="btn btn-primary btn-square back-to-top"><i class="fa fa-arrow-up"></i></a>
    </>
  );
}
export default MainLayout;
