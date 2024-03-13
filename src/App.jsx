import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Property from "./pages/Property/Property";
import Layout from "./Layout/Layout";
import PropertiesPage from "./pages/PropertiesPage/PropertiesPage";

function App() {
    return (
      <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<PropertiesPage />} />
              <Route path="/single-property" element={<Property />} />
              <Route path="/contact-us" element={<Contact />} />
            </Routes>
          </Layout>
      </BrowserRouter>
    )
}

export default App
