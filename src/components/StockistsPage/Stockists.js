import classes from "./Stockists.module.css";

const Stockists = () => {
  return (
    <>
      <div className={classes.container}>
        <h1>STOCKISTS </h1>
        <p>Find us in these fine stores</p>

        <h2 className={classes["margin-top-small"]}>The Blues</h2>
        <p>500 Terry Francine Street</p>
        <p>San Francisco, CA 94158</p>
        <p>Phone: 123.456.7890</p>
        <p className={classes["margin-top-small"]}>Mon-Sat: 10:00am-7:00pm</p>
        <p>Sunday: Closed</p>
        <span className={classes.dash}></span>
        <h2>Eva</h2>
        <p>500 Terry Francine Street</p>
        <p>San Francisco, CA 94158</p>
        <p>Phone: 123.456.7890</p>
        <p className={classes["margin-top-small"]}>Mon-Fri: 9:00am-6:00pm</p>
        <p>Sat-Sun: 10:00am-5:00pm</p>
      </div>
    </>
  );
};

export default Stockists;
