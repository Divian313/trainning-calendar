import "./BoardBar.scss";

const BoardBar = (props) => {
  return <nav className="navbar-board">{props.children}</nav>;
};
export default BoardBar;
