import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Property from "./pages/Property/Property";
import Layout from "./Layout/Layout";
import PropertiesPage from "./pages/PropertiesPage/PropertiesPage";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";

function App() {
      const location = useLocation();

      const [loading, setLoading] = useState(true);

      useEffect(() => {
          setTimeout(() => {
            setLoading(false)
          }, 2000);
      }, [])
      
      useEffect(() => {
        window.scrollTo(0, 0)
      }, [location])
      
      return (
        <Layout>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<PropertiesPage />} />
              <Route path="/single-property" element={<Property />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/:route" element={<Error/>}/>
              <Route path="/:route/:route" element={<Error/>}/>
          </Routes>
          {loading && <Loading/>}
        </Layout>
      )
}

export default App
