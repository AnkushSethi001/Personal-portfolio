import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import "./LayoutOutlet.css"



const LayoutOutlet = () => {
  return (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
  );
};

export default LayoutOutlet