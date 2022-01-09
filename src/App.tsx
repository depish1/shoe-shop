import Theme from "styles/Theme";
import GlobalStyle from "styles/GlobalStyle";
import LoginForm from "components/views/LoginForm/LoginForm";
import RegistrationForm from "components/views/RegistrationForm/RegistrationForm";
import Products from "components/views/Products/Products";
import ProductSite from "components/views/ProductSite/ProductSite";
import Header from "components/organisms/Header/Header";
import Modal from "components/atoms/Modal/Modal";
import { useLoader } from "components/atoms/Loader/useLoader";
import { useAppSelector } from "store/hooks";
import { ThemeProvider } from "styled-components";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App: React.FC = () => {
  const userData = useAppSelector((state) => state.userDataReducer.userData);
  const { Loader, renderLoader } = useLoader();
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/login"
            element={!userData ? <LoginForm /> : <Navigate to="/products" />}
          />
          <Route
            path="/registration"
            element={
              !userData ? <RegistrationForm /> : <Navigate to="/products" />
            }
          />
          <Route path="/products/:id" element={<ProductSite />} />
          {["/", "/products", "*"].map((path, index) => (
            <Route path={path} element={<Products />} key={index} />
          ))}
        </Routes>
      </Router>
      <Loader render={renderLoader} />
      <Modal />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
