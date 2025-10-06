import { Outlet } from "react-router-dom";
import TopBar from "./TopBar.jsx";
import Navbar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div className="app">
      <TopBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
