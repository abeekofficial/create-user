// components/navbar/Navbar.js
import "./Navbar.css";

function Navbar({ usersLength, handleShowModal }) {
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <h1 className="navbar-logo">CUser</h1>
        <button className="create-user" onClick={handleShowModal}>
          Create user
        </button>
        <h3 className="navbar-counter">
          {usersLength > 0 ? `You have: ${usersLength} users` : `No user :(`}
        </h3>
      </div>
    </div>
  );
}

export default Navbar;
