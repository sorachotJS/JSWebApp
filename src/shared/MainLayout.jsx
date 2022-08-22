import HeaderBar from "./HeaderBar";
import Footer from "./Footer";

function MainLayout({ children }) {
  return(
    <>
      <HeaderBar />
      {children}
      <Footer />
    </>
  );
}
export default MainLayout;
