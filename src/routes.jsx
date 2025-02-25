import { Home, Profile, SignIn, SignUp, News, Contacts, Support, Manual} from "@/pages";



export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "News",
    path: "/news",
    element: <News />,
  },
  {
    name: " ",
    path: "/contacts",
    element: <Contacts />,
  },
  {
    name: " ",
    path: "/support",
    element: <Support />,
  },
  {
    name: " ",
    path: "/manual",
    element: <Manual />,
  },
  {
    name: " ",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
