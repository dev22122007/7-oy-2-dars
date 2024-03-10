import style from "./styles.module.css";
import "./index.css";
import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function Layout(props) {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  let carts = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < carts.length; i++) {
      sum += Number(carts[i].amount)
    }
    setCount(sum);
    props.setCount(sum);
    console.log(count);
  }, [count])

  return (
    <div>
      <header>
        <div className="box  bg-dark">
          <nav className="navbar navbar-expand-lg  bg-dark container-fluid container-lg">
            <section className="logout-section">
              <p>Hello demo, User !!!</p>
              <NavLink className="btnn">LogOut</NavLink>
            </section>
          </nav>
        </div>
        <nav className="navbar navbar-expand-lg bg-base-200">
          <div className="container-fluid container-lg">
            <NavLink
              className={`navbar-brand btn btn-primary text-light ${style.navbarBrand}`}
              href="#"
            >
              C
            </NavLink>

            <div className=" navbar" id="navbarText">
              <ul
                className={`navbar-nav me-auto mb-2 mb-lg-0 ${style.navbarNav}`}
              >
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${style.link}`}
                    aria-current="page"
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${style.link}`} to={"/about"}>
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${style.link}`}
                    to={"/products"}
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${style.link}`} to={"/cart"}>
                    Cart
                  </NavLink>
                </li>
              </ul>
              <span className="navbar-text"></span>
            </div>

            <div className={`header-icons ${style.savat}`}>
              {
                dark
                  ?
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="swap-off h-4 w-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
                  </svg>
                  :
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="swap-on h-4 w-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                  </svg>
              }
              <NavLink to={'/cart'}>
                <span className={style.span}>{props.count}</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className={`h-6 w-6 savat`}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                </svg>
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
