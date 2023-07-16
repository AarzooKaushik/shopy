import classes from "./CustomerCare.module.css";
import Form from "../Form/Form";

const CustomerCare = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.CustomerCare}>
          <h1>CUSTOMER CARE</h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I'm a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>

        <div className={classes.border}></div>
        <div className={classes.contactForm}>
          <div>
            <p>Have any questions or concerns? </p>
            <p>We're always ready to help!</p>
            <h3>Call us at</h3>
            <p>123-456-7890</p>
            <p>or send us an email to:</p>
            <p>info@mysite.com</p>
          </div>

          <Form />
        </div>
        <div className={classes.border}></div>
        <div className={classes.CustomerCare}>
          <h1>RETURNS</h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I'm a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div className={classes.border}></div>
        <div>
          <h1>FAQ</h1>
          <div className={classes.questions}>
            <div>
              <h2>Do you provide International delivery?</h2>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
            <div>
              <h2>How do I track my order?</h2>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
            <div>
              <h2>How do I return an item?</h2>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
            <div>
              <h2>How can I contact your couriers?</h2>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
            <div>
              <h2>What is your returns policy?</h2>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
            <div>
              <h2>What are your delivery options?</h2>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomerCare;
