import classes from "./HomePage.module.css";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className={classes.homeContainer}>
        <div className={classes.homeContent}>
          <h1>STYLE & FASHION</h1>
          <NavLink to="shop">
            <Button>SHOP NOW</Button>
          </NavLink>
        </div>
      </div>
      <div className={classes.itemSection}>
        <div className={classes.itemSectionHeader}>
          <h1>YEAR ROUND</h1>
          <span className={classes.dash}></span>
          <p>Must Have Items</p>
        </div>
        <div className={classes.homePageItems}>
          <div className={classes.homePageItem}>
            <img
              src="https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_396,h_468,al_c,q_90,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.webp"
              alt="midi skirt"
            />
          </div>
          <div className={classes.homePageItem}>
            <div className={classes.saleTag}>SALE</div>
            <img
              src="https://static.wixstatic.com/media/cda177_b5a795ade21b41d38cadd836824e6768.jpg/v1/fill/w_396,h_542,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cda177_b5a795ade21b41d38cadd836824e6768.jpg"
              alt=""
            />
          </div>
          <div className={classes.homePageItem}>
            <img
              src="https://static.wixstatic.com/media/84770f_9a81715dcb4b43fa936d243fcd90e2a9.png/v1/fill/w_396,h_468,al_c,q_90,usm_0.66_1.00_0.01/84770f_9a81715dcb4b43fa936d243fcd90e2a9.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
