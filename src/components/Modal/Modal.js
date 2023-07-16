import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import Button from "../Button/Button";
const Modal = (props) => {
  return (
    <>
      <div onClick={props.onCloseHandler} className={classes.backDrop}></div>
      <div className={classes.modal}>
        <span onClick={props.onCloseHandler}> &#10006;</span>
        <h1>We can't accept online orders right now</h1>
        <p>Please contact us to complete your purchase.</p>
        <Button onClick={props.onCloseHandler}>Got It</Button>
      </div>
    </>
  );
};

const ModalContainer = (props) => {
  return ReactDOM.createPortal(
    <Modal onCloseHandler={props.onCloseHandler} />,
    document.getElementById("modal-portal")
  );
};

export default ModalContainer;
