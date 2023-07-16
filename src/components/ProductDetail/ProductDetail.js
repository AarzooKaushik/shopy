import classes from "./ProductDetail.module.css";
import Button from "../Button/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalContainer from "../Modal/Modal";
import CustomDropdown from "./DropDown";
import data from "../../data.json";

const PRODUCTS = data.PRODUCTS;

const ProductDetail = () => {
  const navigate = useNavigate();
  const [prevIndex, setPrevIndex] = useState(null);
  const [nextIndex, setNextIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [showProductInfo, setShowProductInfo] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  useEffect(() => {
    let _product = PRODUCTS?.length
      ? PRODUCTS.find((it) => it.id === productId)
      : {};
    const currentIndex = PRODUCTS.findIndex((it) => it.id === productId);
    setProduct(_product);

    setPrevIndex(currentIndex > 0 ? currentIndex - 1 : null);
    setNextIndex(currentIndex < PRODUCTS.length - 1 ? currentIndex + 1 : null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId, PRODUCTS]);

  const prevItemHandler = () => {
    if (prevIndex !== null) {
      const prevProductId = PRODUCTS[prevIndex].id;
      navigate(`/shop/${prevProductId}`);
    }
  };
  const nextItemHandler = () => {
    if (nextIndex !== null) {
      const nextProductId = PRODUCTS[nextIndex].id;
      navigate(`/shop/${nextProductId}`);
    }
  };
  const onAddCartItemHandler = () => {
    if (selectedSize === "") {
      toast.error("Please select a size before adding to the cart.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      return;
    }
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.size === selectedSize
    );
    if (!existingItem) {
      const newItem = {
        image: product.image,
        id: product.id,
        price: product.price,
        color: product.color,
        quantity: quantity,
        totalPrice: product.price * quantity,
        title: product.title,
        size: selectedSize,
      };

      cartItems.push(newItem);
    } else {
      existingItem.quantity += quantity;
      existingItem.totalPrice += product.price * quantity;
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("storage"));
    toast.success(" Product added to Cart !", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
    });
    setQuantity(1);
    setSelectedSize("");
  };

  const onCloseHandler = () => {
    setShowModal(false);
  };
  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (value > 0) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };
  const handleSizeChange = (option) => {
    setSelectedSize(option);
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.flex}>
          <p className={classes.pagination}>
            <span
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </span>{" "}
            /{" "}
            <span
              onClick={() => {
                navigate("/shop");
              }}
            >
              Shop
            </span>{" "}
            / <span>{product?.title}</span>
          </p>
          <div className={classes.pagination}>
            <button onClick={prevItemHandler} disabled={prevIndex === null}>
              <i className="fa-solid fa-chevron-left"></i> Prev
            </button>{" "}
            | {""}
            <button onClick={nextItemHandler} disabled={nextIndex === null}>
              {" "}
              Next <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className={classes.productContain}>
          <div>
            <div className={classes.productImage}>
              <img src={product?.image} alt="" />
            </div>
            <p>
              I'm a product description. I'm a great place to include more
              information about your product. Buyers like to know what they're
              getting before they purchase.
            </p>
          </div>
          <div>
            <h1>{product?.title}</h1>
            <p>SKU: 0004</p>
            <h2>${product?.price}</h2>
            <p className={classes.label}>Color : {product?.color}</p>
            <div className={classes.productColor}>
              {" "}
              <div style={{ backgroundColor: product?.color }}></div>
            </div>

            <div>
              {" "}
              <p className={classes.label}>Size</p>
              <CustomDropdown
                value={selectedSize}
                onChange={handleSizeChange}
              />
            </div>

            <p className={classes.label}>Quantity</p>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
            />

            <button
              className={classes.primaryBtn}
              onClick={onAddCartItemHandler}
            >
              Add to Cart
            </button>

            <Button onClick={() => setShowModal(true)}>Buy Now</Button>

            <div className={classes.productInfo}>
              <button
                className={classes.flex}
                onClick={() => {
                  setShowProductInfo(!showProductInfo);
                }}
              >
                <h3>PRODUCT INFO</h3>
                <span> {showProductInfo ? "-" : "+"} </span>
              </button>

              <p className={showProductInfo ? classes.show : ""}>
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also ce to write what makes this product
                special and how your customers can benefit from this item know
                what they're getting before they purchase, so give them as much
                information as possible so they can buy with confidence and
                certainty.
              </p>

              <div className={classes.border}></div>
              <button
                className={classes.flex}
                onClick={() => {
                  setShowPolicy(!showPolicy);
                }}
              >
                <h3>RETURN AND REFUND POLICY</h3>
                <span>{showPolicy ? "-" : "+"}</span>
              </button>
              <p className={showPolicy ? classes.show : ""}>
                I'm a Return and Refund policy. I'm a great place to let your
                customers know what to do in case they are dissatisfied with
                their purchase. Having a straightforward refund or exchange
                policy is a great way to build trust and reassure your customers
                that they can buy with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
      {showModal && <ModalContainer onCloseHandler={onCloseHandler} />}
    </>
  );
};

export default ProductDetail;
