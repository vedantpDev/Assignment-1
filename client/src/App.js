import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./component/Homepage";
import About from "./pages/About";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Booklist from "./pages/Booklist";
import Contact from "./pages/Contact";
import PrivateRoute from "./component/PrivateRoute";
import PublicRoute from "./component/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        >
          <Route
            exact
            path="booklist"
            element={
              <PrivateRoute>
                <Booklist />
              </PrivateRoute>
            }
          />
          <Route
            path="contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
          <Route
            path="about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
