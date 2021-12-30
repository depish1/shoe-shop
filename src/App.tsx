import Theme from "styles/Theme";
import GlobalStyle from "styles/GlobalStyle";
import LoginForm from "components/views/LoginForm";
import Products from "components/views/Products";
import Header from "components/organisms/Header/Header";
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
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route
            path="/login"
            element={!userData ? <LoginForm /> : <Navigate to="/products" />}
          />

          <Route path="*" element={<Products />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
