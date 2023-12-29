import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AppRoutes from "../Routes/AppRoutes";
import Sidebar from "../Sidebar/Sidebar";
import { getCategories } from "../../features/categories/categoriesSlice";
import { useAppDispatch } from "../../hooks/hooks";
import { useEffect } from "react";
import styles from './App.module.scss';
import { getProducts } from "../../features/products/productsSlice";

export default function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="app-container">
      <Header />
      <div className={styles["sidebar-container"]}>
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  )
}
