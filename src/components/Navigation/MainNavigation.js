import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const updateTotalQuantity = (e) => {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      if (cartItems) {
        const newTotalQuantity = cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        );
        setTotalQuantity(newTotalQuantity);
      }
    };

    window.addEventListener("storage", updateTotalQuantity);

    updateTotalQuantity();

    return () => {
      window.removeEventListener("storage", updateTotalQuantity);
    };
  });

  return (
    <>
      <nav>
        <div className={classes.navbar}>
          <NavLink to="/">
            <div className={classes.logo}>SHOPY</div>
          </NavLink>

          <ul
            className={`${classes.navlist} ${showMenu ? classes.showMenu : ""}`}
          >
            <li>
              <NavLink
                to="/"
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="shop"
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setShowMenu(false)}
                to="stockist"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Stockist
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setShowMenu(false)}
                to="CustomerCare"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Customer Care
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setShowMenu(false)}
                to="/demo"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Login
              </NavLink>
            </li>
            <li className={classes.hideMenu} onClick={() => setShowMenu(false)}>
              {" "}
              &#10006;
            </li>
          </ul>
          <NavLink
            to="cart"
            className={({ isActive }) =>
              isActive ? classes.cartActive : undefined
            }
          >
            <button className={classes.cartBtn}>Cart {totalQuantity}</button>
          </NavLink>
          <div className={classes.menuActions}>
            <div>
              <NavLink to="cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </NavLink>
            </div>
            <div className={classes.menuBtn} onClick={() => setShowMenu(true)}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavigation;
