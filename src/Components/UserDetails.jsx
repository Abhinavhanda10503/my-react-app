import UserForm from "./Userform";
import "../assets/css/UserForm.css";

function AddUserPage() {

  const handleAddUser = (formData) => {
    console.log("New User:", formData);

    // later: send to API or context
  };

  return (
    <div>
      <h2>Add New User</h2>

      <UserForm onSubmit={handleAddUser} />
    </div>
  );
}

export default AddUserPage;