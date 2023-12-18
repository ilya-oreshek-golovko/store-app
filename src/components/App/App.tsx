import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AppRoutes from "../Routes/AppRoutes";
import Sidebar from "../Sidebar/Sidebar";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="sidebar-container">
        <AppRoutes />
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}
