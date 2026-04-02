import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { getUsers } from "../Services/api";
import "../assets/css/UsersPage.css";

function UsersPage() {
  const { data, loading, error } = useFetch(getUsers);

  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");

  const getAgeColor = (age) => (age < 50 ? "red" : "green");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // 🔍 Search
  let users = data.users.filter((user) =>
    `${user.firstName} ${user.lastName} ${user.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Filter
  users = users.filter((user) =>
    gender ? user.gender === gender : true
  );

  // Sorting (IMPORTANT: before pagination)
  users = [...users].sort((a, b) =>
    sortOrder === "asc" ? a.age - b.age : b.age - a.age
  );

  // Pagination
  const usersPerPage = 10;
  const start = (currentPage - 1) * usersPerPage;
  const paginatedUsers = users.slice(start, start + usersPerPage);

  return (
    <div className="container">
      <h2 className="title">Users List</h2>

      <div className="controls">
        <input
          type="text"
          placeholder="Search name or email"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

        <select
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button
          onClick={() =>
            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
          }
        >
          Sort Age ({sortOrder})
        </button>

        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>

          <span>Page {currentPage}</span>

          <button
            disabled={currentPage === Math.ceil(users.length / 10)}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Birth Date</th>
          </tr>
        </thead>

        <tbody>
          {paginatedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td style={{ color: getAgeColor(user.age) }}>
                {user.age}
              </td>
              <td>{user.phone}</td>
              <td>{user.birthDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersPage;