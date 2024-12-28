/// route
import { BrowserRouter, Route, Routes } from "react-router-dom";
/// style
import './style/base.css';
import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound";
import MainPage from "./pages/MainPage";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
function App(props) {
    <Layout></Layout>
    return (<BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Layout></Layout>}>
                <Route path={"contact"} element={<Contact></Contact>}></Route>
                <Route path="faq" element={<Faq></Faq>}></Route>
                <Route path="privacy" element={<Privacy></Privacy>}></Route>
                <Route path="terms" element={<Terms></Terms>}></Route>
                <Route index element={<MainPage></MainPage>}></Route>
                <Route path={"*"} element={<NotFound></NotFound>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>);
}
export default App;