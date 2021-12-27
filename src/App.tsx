import firebaseConfig from "utils/firebaseConfig";
import { login } from "store/UserData/Actions";
import { useAppDispatch } from "store/hooks";
import { initializeApp } from "firebase/app";

function App() {
  initializeApp(firebaseConfig);
  const dispatch = useAppDispatch();
  dispatch(login("michal.depa@op.pl", "123456"));
  console.log("xd");
  // login("michal.depa@op.pl", "123456");
  return <>x</>;
}

export default App;
