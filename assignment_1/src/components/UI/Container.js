import "./Container.css";

const Container = (props) => {
  const classes = props.className + " curve-container";
  return <div className={classes}>{props.children}</div>;
};

export default Container;
