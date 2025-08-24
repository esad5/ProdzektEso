import Link from "next/link";
import { useHeaderContex } from "@/providers/HeaderContex";
import Logo from "./Logo";

const Navbar = () => {
  const { headerStyle, headerSize, isNavbarAppointmentBtn } = useHeaderContex();

  const navItemsRaw = [
    { name: "Home", path: "/" },
    { name: "O nama", path: "/about" },
    { name: "Vijesti", path: "/blogs" },
  
  ];

  const navItems = navItemsRaw.map(item => ({
    ...item,
    dropdown: null,
  }));

  return (
    <div
      className={`col header-menu-column ${
        headerStyle === 2
          ? " menu-color-white"
          : headerStyle === 5
          ? "justify-content-center align-items-center"
          : ""
      }`}
    >
      {headerStyle === 5 ? <Logo sticky={true} /> : ""}
      <div
        className={`header-menu ${
          headerStyle === 5 ? "header-menu-2" : "d-none d-xl-block "
        } `}
      >
        <nav>
          <div className="ltn__main-menu">
            <ul>
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}

              {(isNavbarAppointmentBtn ||
                headerSize === "lg" ||
                headerStyle === 2 ||
                headerStyle === 4) && (
                <li className="special-link">
                  <Link href="/">ZAKAŽI SERVIS</Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
