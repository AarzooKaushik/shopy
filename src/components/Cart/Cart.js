import React from "react";
import classes from "./Cart.module.css";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import ModalContainer from "../Modal/Modal";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showPromoCode, setShowPromoCode] = useState(false);
  const [showAddNote, setShowAddNote] = useState(false);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart"));
    setCartItems(storedCartItems || []);
  }, []);

  const updateCartItems = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    window.dispatchEvent(new Event("storage"));
  };

  const incrementHandler = (id, size) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === id && cartItem.size === size) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
          totalPrice: cartItem.totalPrice + cartItem.price,
        };
      }
      return cartItem;
    });

    updateCartItems(updatedCartItems);
  };

  const decrementHandler = (id, size) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (
        cartItem.id === id &&
        cartItem.quantity > 1 &&
        cartItem.size === size
      ) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1,
          totalPrice: cartItem.totalPrice - cartItem.price,
        };
      }
      return cartItem;
    });

    updateCartItems(updatedCartItems);
  };

  const removeItemHandler = (id, size) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => !(cartItem.id === id && cartItem.size === size)
    );

    updateCartItems(updatedCartItems);
    toast.success(" Product removed from Cart !", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  const totalCartPrice = cartItems.reduce(
    (total, cartItem) => total + cartItem.totalPrice,
    0
  );

  const onCloseHandler = () => {
    setShowModal(false);
  };
  const togglePromoCode = () => {
    setShowPromoCode((prevShowPromoCode) => !prevShowPromoCode);
  };

  const toggleAddNote = () => {
    setShowAddNote((prevShowAddNote) => !prevShowAddNote);
  };

  return (
    <>
      {cartItems?.length ? (
        <div className={classes.cartContainer}>
          <div className={classes.myCart}>
            <h1>My Cart</h1>
            <div className={classes.cartBorder}></div>
            <div className={classes.cartItems}>
              {cartItems.map((item) => {
                const key = `${item.id}-${item.size}`;
                return (
                  <React.Fragment key={key}>
                    <div className={classes.cartProductDetail}>
                      <img src={item.image} alt="product" />
                      <div className={classes.productDetailInner}>
                        <div>
                          <h2>{item.title}</h2>
                          <p>${item.price}</p>
                          <p>color : {item.color}</p>
                          {item.size && <p>Size : {item.size}</p>}
                        </div>
                        <div className={classes.productCount}>
                          <span
                            onClick={() => decrementHandler(item.id, item.size)}
                          >
                            -
                          </span>
                          <span> {item.quantity} </span>
                          <span
                            onClick={() => incrementHandler(item.id, item.size)}
                          >
                            +
                          </span>
                        </div>
                        <h2>${item.totalPrice.toFixed(2)} </h2>
                      </div>
                      <span
                        onClick={() => removeItemHandler(item.id, item.size)}
                      >
                        &#10006;
                      </span>
                    </div>
                    <div className={classes.cartBorder}></div>
                  </React.Fragment>
                );
              })}
            </div>

            <div className={classes.cartForm}>
              <div>
                <p onClick={toggleAddNote}>
                  <i className="fa-regular fa-file-lines"></i> Add a note
                </p>
                <div
                  className={` ${classes.cartFormInput} ${
                    showAddNote ? classes.show : ""
                  }`}
                >
                  <textarea placeholder="Add a note here" />
                </div>
              </div>
              <div onClick={togglePromoCode}>
                <p>
                  <i className="fa-solid fa-tag"></i> Enter a promo code
                </p>

                <div
                  className={` ${classes.cartFormInput} ${
                    showPromoCode ? classes.show : ""
                  }`}
                >
                  <input type="text" placeholder="Enter a promo code" />
                  <button>Apply</button>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.OrderSummary}>
            <h1>Order Summary</h1>
            <div className={classes.cartBorder}></div>
            <h2 className={classes.flex}>
              <span>Subtotal</span> <span>${totalCartPrice.toFixed(2)} </span>
            </h2>
            <h2 className={classes.flex}>
              <span>Shipping </span> <span>FREE</span>
            </h2>
            <h2>Chandigarh, India</h2>
            <div className={classes.cartBorder}></div>

            <h1 className={classes.flex}>
              <span>Total</span> <span>${totalCartPrice.toFixed(2)}</span>
            </h1>
            <Button onClick={() => setShowModal(true)}>CheckOut</Button>
          </div>
        </div>
      ) : (
        <div className={classes.emptyCartContainer}>
          <h2>My Cart</h2>
          <div className={classes.cartBorder}></div>
          <p>Cart is empty</p>
          <div className={classes.cartBorder}></div>
        </div>
      )}

      {showModal && <ModalContainer onCloseHandler={onCloseHandler} />}
    </>
  );
};
export default Cart;
