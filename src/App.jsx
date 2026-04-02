import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Components/User";
import Navbar from "./Components/Navbar";
import UserDetails from "./Components/UserDetails";
import Posts from "./Components/Posts";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"/>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;