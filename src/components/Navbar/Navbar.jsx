import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { PRODUCT_LISTING_ROUTE, CART_ROUTE } from "constants";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { pathname } = useLocation();
  const [toggleMenu, updateToggleMenu] = useState(false);
  const showMenu = () => {
    updateToggleMenu(true);
  };
  return (
    <>
      <nav className={styles.navigation_container}>
        <div className={styles.left_nav_container}>
          <div className={`${styles.menu} mr-1`} onClick={showMenu}>
            <span className={`${styles.hamburger_menu} material-icons`}>
              menu
            </span>
          </div>
          <Link
            to={PRODUCT_LISTING_ROUTE}
            className={`${styles.brand_logo_link}`}
          >
            <h3 className={`${styles.brand_logo}`}>VOGUE</h3>
          </Link>
          <div className={`${styles.left_nav_links} ml-4`}>
            <Link
              to={CART_ROUTE}
              className={`${styles.brand_logo_link} mr-1 ${styles.mini_link}`}
            >
              PRODUCTS
            </Link>
          </div>
        </div>
        {pathname === PRODUCT_LISTING_ROUTE ? (
          <span
            className={`${styles.search_container} pos-relative rounded-sm`}
          >
            <span className={`${styles.search_bar_icon} pos-absolute`}>
              <span className="material-icons-outlined">search</span>
            </span>
            <input
              type="search"
              autoComplete="false"
              placeholder="search..."
              className={`rounded-sm ${styles.search_input}`}
            />
          </span>
        ) : null}

        <ul className={`${styles.ecom_actions_container}`}>
          <li className={`ml-4`}>
            <Link
              to={CART_ROUTE}
              className={`${styles.brand_logo_link} ${styles.ecom_action_link}`}
            >
              <div className={`pos-relative ${styles.icon_badge}`}>
                <span
                  className={`material-icons-outlined ${styles.icon_badge_span}`}
                >
                  shopping_cart
                </span>
                <span className={`pos-absolute ${styles.badge_number}`}>2</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export { Navbar };
