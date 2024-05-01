import { Routes, Route } from "react-router-dom";
import Auth from "../components/auth/Auth";
import Header from "../components/header/Header";
import Home from "../pages/home/Home";
import Footer from "../components/footer/Footer";
import Introduce from "../pages/introduce/Introduce";
import GirlShoes from "../pages/girl-shoes/GirlShoes";
import BoyShoes from "../pages/boy-shoes/BoyShoes";
import ChildrenShoes from "../pages/children-shoes/ChildrenShoes";
import News from "../pages/news/News";
import Contacts from "../pages/contacts/Contacts";
// import Pagination from "../components/pagination/pagination";
export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dang-nhap" element={<Auth />} />
        <Route path="/gioi-thieu" element={<Introduce />} />
        <Route path="/giay-nu" element={<GirlShoes />} />
        <Route path="/giay-nam" element={<BoyShoes />} />
        <Route path="/giay-tre-em" element={<ChildrenShoes />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      {/* <Pagination /> */}
      <Footer />
    </>
  );
}
