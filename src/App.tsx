import { FC } from "react";
import Main from "./pages/Main";
import { Navigate, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Advantages from "./pages/Advantages";

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
    path: "/advantages",
    component: <Advantages />,
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
