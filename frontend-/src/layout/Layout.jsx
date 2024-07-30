import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
const Layout = ({ children }) => {
  const isUserLoggedIn = false;

  return (
    <div className="flex w-full flex-col min-h-screen  bg-slate-300">
      {isUserLoggedIn ? <Navbar /> : null}
      <div className="flex flex-col md:flex-row w-full  h-full bottom-0">
        {children}
      </div>
      {isUserLoggedIn ? <Footer /> : null}
    </div>
  );
};

export default Layout;
