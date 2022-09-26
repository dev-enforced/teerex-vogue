import { Navbar } from "components";
import { AppRoutes } from "routes";
import styles from "./App.module.css";
const App = () => {
  return (
    <div className={styles.app_container}>
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
