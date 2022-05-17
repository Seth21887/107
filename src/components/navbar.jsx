
import "./navbar.css";

//differences in JSX from HTML are we are now using className instead of class, and everything must be closed, even tags that didn't need to be closed in HTML, like inputs

function Navbar(){ //custom components will start with a capital letter and return something
    return (
    <div className="navbar">
        <h1>Menu will be here</h1>
    </div>
    );
}

export default Navbar; //need to export a component so it can be imported somewhere else