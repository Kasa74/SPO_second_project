import { Routes, Route, HashRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import { routes } from "./routes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} Component={Component} />
          ))}
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
