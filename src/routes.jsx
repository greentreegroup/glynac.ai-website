import { Home, Profile, SignIn, SignUp, About, Other, Pricing } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
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
    name: "About",
    path: "/about",
    element: <About />,
  },
  {
    name: "Other",
    path: "/other",
    element: <Other />,
  },
  {
    name: "Pricing",
    path: "/pricing",
    element: <Pricing />,
  },
  {
    name: "Docs",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
