import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { getUserById } from "../Services/api";
import { useState } from "react";


function Posts() {
    const [search, setSearch] = useState("");

    const { data, loading, error } = useFetch(getUserById, search);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>User Details</h2>
            <input type="number" placeholder="Search by ID" value={search} onChange={(e) => setSearch(e.target.value)} />

            {search &&
                <table border="1" width="100%" style={{ marginTop: "15px" }}>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Phone</th>
                            <th>Birth Date</th>
                        </tr>
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>{data.email}</td>
                            <td>{data.age}</td>
                            <td>{data.phone}</td>
                            <td>{data.birthDate}</td>
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    );
}

export default Posts;