import Theme from "styles/Theme";
import GlobalStyle from "styles/GlobalStyle";
import SignIn from "components/views/SignIn";
import Products from "components/views/Products";
import Header from "components/organisms/Header/Header";
import { login } from "store/UserData/Actions";
import { useAppDispatch } from "store/hooks";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  dispatch(login("michal.depa@op.pl", "123456"));

  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/signin" element={<SignIn />} />

          <Route path="*" element={<Products />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
