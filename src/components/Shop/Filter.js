import classes from "./Filter.module.css";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const colours = ["black", "brown", "green", "purple", "red", "white"];

const CustomSlider = styled(Slider)`
  width: 95%;
  height: 2px;
  color: #474848;
  margin: auto;

  & .MuiSlider-thumb {
    width: 10px;
    height: 10px;
    transition: 0.5s;
  }
  & .MuiSlider-thumb:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    width: 12px;
    height: 12px;
  }
`;

const Filters = (props) => {
  const {
    updateFilter,
    minPrice,
    maxPrice,
    showFilter,
    onHideFilter,
    disabled,
  } = props;
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [range, setRange] = useState([minPrice, maxPrice]);
  const [optionsVisibility, setOptionsVisibility] = useState({
    price: true,
    color: false,
    category: false,
  });

  function handleChanges(event, newValue) {
    setRange(newValue);
    updateFilter("price", range);
  }

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prevCategories) => {
      const updatedCategories = prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category];

      updateFilter("category", updatedCategories);
      return updatedCategories;
    });
  };

  const isCategorySelected = (category) => {
    return selectedCategories.includes(category);
  };

  const toggleOptionVisibility = (option) => {
    setOptionsVisibility((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  return (
    <>
      <div className={`${classes.filter} ${showFilter ? classes.show : ""}`}>
        <div className={classes.filterContain}>
          <div onClick={() => onHideFilter()} className={classes.closeFilter}>
            &#10006;
          </div>
          <h2>Filter by</h2>

          <div className={classes.filterBorder}></div>
          <button onClick={() => toggleOptionVisibility("price")}>
            <span>Price</span>
            <span>{optionsVisibility.price ? "-" : "+"}</span>
          </button>
          <div
            className={`${classes.filterOptions} ${
              optionsVisibility.price ? classes.show : ""
            }`}
          >
            <CustomSlider
              min={minPrice}
              max={maxPrice}
              value={range}
              onChange={handleChanges}
            />
            <div className={classes.filterPrices}>
              <span>${range[0]}</span>
              <span>${range[1]}</span>
            </div>
          </div>
          <div className={classes.filterBorder}></div>

          <button onClick={() => toggleOptionVisibility("color")}>
            <span>Color</span>{" "}
            <span>{optionsVisibility.color ? "-" : "+"}</span>
          </button>
          <div
            className={`${classes.filterOptions} ${
              optionsVisibility.color ? classes.show : ""
            }`}
          >
            <div className={classes.colors}>
              {colours.map((curColor) => {
                return (
                  <div
                    key={curColor}
                    className={classes.color}
                    style={{ backgroundColor: curColor }}
                    onClick={() => {
                      updateFilter("color", curColor);
                      onHideFilter();
                      setSelectedCategories([]);
                      setRange([minPrice, maxPrice]);
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className={classes.filterBorder}></div>

          <button onClick={() => toggleOptionVisibility("category")}>
            <span>Category</span>{" "}
            <span>{optionsVisibility.category ? "-" : "+"}</span>
          </button>
          <div
            className={`${classes.filterOptions} ${
              optionsVisibility.category ? classes.show : ""
            }`}
          >
            <div className={classes.categoryOptions}>
              <div className={classes.categoryOption}>
                <input
                  type="checkbox"
                  id="cloth"
                  checked={isCategorySelected("cloth")}
                  onChange={() => handleCategoryToggle("cloth")}
                />
                <label htmlFor="cloth">Cloth</label>
              </div>
              <div className={classes.categoryOption}>
                <input
                  className={classes.checkbox}
                  type="checkbox"
                  id="footwear"
                  checked={isCategorySelected("footwear")}
                  onChange={() => handleCategoryToggle("footwear")}
                />
                <label htmlFor="footwear">Footwear</label>
              </div>
              <div className={classes.categoryOption}>
                <input
                  type="checkbox"
                  id="purse"
                  checked={isCategorySelected("purse")}
                  onChange={() => handleCategoryToggle("purse")}
                />
                <label htmlFor="purse">Purse</label>
              </div>
              <div className={classes.categoryOption}>
                <input
                  type="checkbox"
                  id="other"
                  checked={isCategorySelected("other")}
                  onChange={() => handleCategoryToggle("other")}
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
          <div className={classes.filterBorder}></div>
        </div>
        <div className={classes.clearFilterBtn}>
          <button
            disabled={disabled}
            onClick={() => {
              setSelectedCategories([]);
              setRange([minPrice, maxPrice]);
              updateFilter("all");
              onHideFilter();
            }}
          >
            Clear Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default Filters;
