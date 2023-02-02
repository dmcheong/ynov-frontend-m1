import NavBar from "../components/NavBar";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar/>
      <Filter />
      <main>
        <div className={styles.container}>
        {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;