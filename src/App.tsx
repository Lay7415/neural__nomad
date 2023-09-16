import { FC } from "react";
import Main from "./pages/Main";
import { Navigate, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Cost from "./pages/Cost";
import Advantages from "./pages/Advantages";
import FAQ from "./pages/FAQ";
import Contacts from "./pages/Contacts";
// import './styles/global.css '

interface RoutesI {
  path: string;
  component: JSX.Element;
}

const routes: RoutesI[] = [
  {
    path: "/",
    component: <Navigate to={"/main"} />,
  },
  {
    path: "/main",
    component: <Main />,
  },
  {
    path: "/about_us",
    component: <AboutUs />,
  },
  {
    path: "/cost",
    component: <Cost />,
  },
  {
    path: "/advantages",
    component: <Advantages />,
  },
  {
    path: "/faq",
    component: <FAQ />,
  },
  {
    path: "/contacts",
    component: <Contacts />,
  },
];

const App: FC = () => {
  return (
    <Routes>
      {routes.map(({ path, component }, index) => {
        return <Route key={index} path={path} element={component} />;
      })}
    </Routes>
  );
};

export default App;
