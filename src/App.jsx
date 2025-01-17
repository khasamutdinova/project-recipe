import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
// import Profile from "./pages/profile"; // Страница профиля
import Sign from "./pages/sign-in.jsx";

function App() {
  return (
    <Router>
      <div className="navbar bg-base-100 shadow-sm z-[1] border w-full px-4">
        <div className="flex-none">
          <img className="btn btn-square btn-ghost rounded-full" src="/logo.png" />
        </div>
        <div className="flex-none">
          <a className="btn btn-ghost text-xl">chefGPT</a>
        </div>

        <div className="flex-1 flex justify-center">
          <ul className="menu menu-horizontal space-x-16 text-lg">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/sign-in"></Link></li>
          </ul>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <Link to="/sign-in" className="btn bg-blue-500 hover:bg-blue-600 text-white border">
            Sign In
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
              <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
            </svg>
          </Link>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/profile" className="justify-between">Profile</Link>
              </li>
              <li className="text-red-600"><a>Log Out</a></li>
            </ul>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/profile" element={<Profile />} /> Страница профиля */}
        <Route path="/sign-in" element={<Sign />} />      
      </Routes>
    </Router>
  );
}

export default App;
