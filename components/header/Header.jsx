import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Router } from "react-router-dom";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="relative z-[99999] h-[125px] w-full  text-white/80">
        <div className="h-[72px] bg-bgPrimary ">
          <div className="max-w-[1230px] mx-auto h-full flex justify-between items-center ">
            <div className="text-lg cursor-pointer hover:text-white transition-all ease-in-out duration-300">
              <NavLink
                to="/dang-nhap"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="text-[13px] cursor-pointer py-[10px] hover:text-white transition-all ease-linear duration-200 font-bold tracking-[0.32px] no-underline uppercase text-white/80"
                href=""
              >
                Đăng nhập / Đăng ký
              </NavLink>
            </div>
            <div className="w-[300px] h-full">
              <Link
                className="w-full h-full flex justify-center items-center"
                to="/"
              >
                <img
                  className="w-auto h-[70%]"
                  src="../public/logo.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="flex flex-row justify-center items-center gap-5">
              <FontAwesomeIcon
                icon={faSearch}
                className="cursor-pointer hover:text-white transition-all ease-in-out duration-300"
              />
              <div className="flex gap-5 justify-center items-center text-lg hover:text-white transition-all ease-in-out duration-300">
                <div className="font-bold text-[13px] uppercase -mr-3 cursor-pointer">
                  Giỏ hàng/Thanh toán
                </div>
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </div>
          </div>
          <div className="min-h-[25px] w-full shadow-shadowAccounts bg-[#d3d3d3]">
            <div className="px-[15px] max-w-[1230px] mx-auto py-4">
              <ul className="flex w-full gap-[30px] justify-center">
                <li className="css-nav">
                  <Link className="" to="/">
                    Trang chủ
                  </Link>
                </li>

                <li className="css-nav">
                  <Link className="" to="/gioi-thieu">
                    giới thiệu
                  </Link>
                </li>
                <li className="css-nav">
                  <Link className="" to="/giay-nu">
                    giày nữ
                  </Link>
                </li>
                <li className="css-nav">
                  <Link className="" to="/giay-nam">
                    giày nam
                  </Link>
                </li>
                <li className="css-nav">
                  <Link className="" to="/giay-tre-em">
                    giày trẻ em
                  </Link>
                </li>
                <li className="css-nav">
                  <Link className="" to="/news">
                    tin tức
                  </Link>
                </li>
                <li className="css-nav">
                  <Link className="" to="/contacts">
                    liên hệ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
