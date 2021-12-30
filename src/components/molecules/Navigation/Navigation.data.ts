import { ReactComponent as ArrowIcon } from "assets/icons/ArrowIcon.svg";
import { ReactComponent as LoginIcon } from "assets/icons/LoginIcon.svg";
import { ReactComponent as RegistrationIcon } from "assets/icons/RegistrationIcon.svg";

import { ReactComponent as LogoutIcon } from "assets/icons/LogoutIcon.svg";
import { ReactComponent as AccIcon } from "assets/icons/AccIcon.svg";

export const navData = {
  unregistered: [
    {
      text: "Produkty",
      path: "/products",
      Icon: ArrowIcon,
    },
    {
      text: "Zaloguj się",
      path: "/login",
      Icon: LoginIcon,
    },
    {
      text: "Zarejestruj się",
      path: "/registration",
      Icon: RegistrationIcon,
    },
  ],
  registered: [
    {
      text: "Produkty",
      path: "/products",
      Icon: ArrowIcon,
    },
    {
      text: "Twoje konto",
      path: "/profile",
      Icon: AccIcon,
    },
    {
      text: "Wyloguj się",
      path: "/products",
      Icon: LogoutIcon,
      isLogout: true,
    },
  ],
};
