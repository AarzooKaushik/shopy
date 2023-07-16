import { useState } from "react";
import classes from "./Footer.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      toast.error("Email is Required", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Invalid email format", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      return;
    }
    toast.success(`${email} has been subscribed .`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
    });
    setEmail("");
  };
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <>
      <footer>
        <div className={classes.footer}>
          <div className={classes.contact}>
            <div>
              <h2>STAY CONNECTED</h2>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-pinterest-p"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div>
              <h2>BE OUR FRIEND</h2>
              <input
                type="email"
                placeholder="Enter your email here*"
                value={email}
                onChange={handleEmailChange}
              />
              <button onClick={handleSubmit} className={classes.footerBtn}>
                Subscribe now
              </button>
            </div>
            <div>
              <h2>NEED ASSISTANCE?</h2>
              <p>123-456-7890</p>
              <p>info@mysite.com</p>
            </div>
          </div>
          <div>
            <p>© 2035 by Ropa. Powered and secured by AK .</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
