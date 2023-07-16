import classes from "./DemoPage.module.css";
import { useNavigate } from "react-router-dom";

const DemoPage = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(-1);
  };
  return (
    <>
      <div className={classes.loginContainer}>
        <h1>UNDER DEVELOPMENT</h1>
        <p>This page is under development.</p>
        <button onClick={clickHandler}>OK</button>
      </div>
    </>
  );
};

export default DemoPage;
