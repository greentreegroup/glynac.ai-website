import { Home, Software, CommunicationTools, EmailTools } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "software",
    path: "/software", // Define the path for Software section
    element: <Software />,
  },
  {
    name: "communication-tools",
    path: "/communication-tools",
    element: <CommunicationTools />,
  },
  {
    name: "email-tools",
    path: "/email-tools",
    element: <EmailTools />,
  },
  
  {
    name: "Docs",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
