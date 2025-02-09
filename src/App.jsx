// style
import "./App.css";
// hooks
import { useState } from "react";
// components
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import UserList from "./components/userList/userList";
import NewUserForm from "./components/newUser/newUserForm";

function App() {
  // hooks
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  //funtions
  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
  };

  return (
    <div
      onClick={(e) => {
        e.target.className == "overlay" && setShowModal(false);
      }}
      className="App"
    >
      <Navbar usersLength={users.length} handleShowModal={handleShowModal} />
      <main>
        <div className="no-user">{users.length === 0 && <h2>No users</h2>}</div>
        <UserList users={users} deleteUser={deleteUser} />
        {showModal && <NewUserForm closeModal={closeModal} addUser={addUser} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
