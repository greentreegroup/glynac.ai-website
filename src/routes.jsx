import { Home, Software, CommunicationTools, EmailTools ,DemographicData,DataSelection, StandardizedData, Qualitative, Quantitative, Pricing, Security, About, Blog, Client_case, Contacts, FAQ, Manual, News, Partner_program, Support, Update} from "@/pages";

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
    name: "demographic-data",
    path: "/demographic-data", 
    element: <DemographicData />,
  },
  {
    name: "data-selection",
    path: "/data-selection", 
    element: <DataSelection />,
  },
  {
    name: "standardized-data",
    path: "/standardized-data", 
    element: <StandardizedData />,
  },
  {
    name: "ai-qualitative",
    path: "/ai-qualitative", 
    element: <Qualitative />,
  },
  {
    name: "ai-quantitative",
    path: "/ai-quantitative", 
    element: <Quantitative />,
  },
  {
    name: "pricing",
    path: "/pricing", 
    element: <Pricing />,
  },
  {
    name: "security",
    path: "/security", 
    element: <Security />,
  },
  {
    name: "about",
    path: "/about", 
    element: <About />,
  },
  {
    name: "blog",
    path: "/blog", 
    element: <Blog />,
  },
  {
    name: "client_case",
    path: "/client_case", 
    element: <Client_case />,
  },
  {
    name: "contacts",
    path: "/contacts", 
    element: <Contacts />,
  },
  {
    name: "faq",
    path: "/faq", 
    element: <FAQ />,
  },
  {
    name: "manual",
    path: "/manual", 
    element: <Manual />,
  },
  {
    name: "news",
    path: "/news", 
    element: <News />,
  },
  {
    name: "partner_program",
    path: "/partner_program", 
    element: <Partner_program />,
  },
  {
    name: "support",
    path: "/support", 
    element: <Support />,
  },
  {
    name: "update",
    path: "/update", 
    element: <Update />,
  },
  {
    name: "Docs",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
