import Theme from "styles/Theme";
import GlobalStyle from "styles/GlobalStyle";
import SignIn from "components/views/SignIn";
import { login } from "store/UserData/Actions";
import { useAppDispatch } from "store/hooks";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  dispatch(login("michal.depa@op.pl", "123456"));

  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          <Route path="/signin" element={SignIn} />
        </Routes>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
