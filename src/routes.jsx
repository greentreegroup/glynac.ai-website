import { Home, Profile, SignIn, SignUp, Contacts, Support, Manual} from "@/pages";



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
    name: "Contacts",
    path: "/contacts",
    element: <Contacts />,
  },
  {
    name: "Support",
    path: "/support",
    element: <Support />,
  },
  {
    name: "Manual",
    path: "/manual",
    element: <Manual />,
  },
  {
    name: "Docs",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
