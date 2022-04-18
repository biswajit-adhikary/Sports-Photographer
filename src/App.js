import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/LoginRegister/Login/Login';
import Register from './Pages/LoginRegister/Register/Register';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Checkout from './Pages/Checkout/Checkout';
import ForgotPassword from './Pages/LoginRegister/ForgotPassword/ForgotPassword';
import RequireAuth from './Pages/LoginRegister/RequireAuth/RequireAuth';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="/about" element={<About></About>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/forgotpassword" element={<ForgotPassword></ForgotPassword>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
