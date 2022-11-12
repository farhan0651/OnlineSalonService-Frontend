import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Appointments from "./pages/Appointments";
import Orders from "./pages/Orders";
import Services from "./pages/Services";
import MyCards from "./pages/MyCards";
import { ThemeProvider } from 'styled-components';
import Myprofile from './pages/Myprofile';
import Myprofile1 from './pages/MyProfile1';
import ProtectRoute from './pages/ProtectedRoute';
import SignIn from './pages/SignIn';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
    return (
      <ThemeProvider theme={theme}>
      <div>
          <Routes>
            <Route exact path="/Homepage" element={<Homepage/>} />
            <Route exact path='/signin' element={<SignIn />}/>
            <Route path="/" element={<ProtectRoute><Homepage /></ProtectRoute>}/>
            <Route exact path="/Myprofile" element={<Myprofile />} />
            <Route exact path="/Myprofile1" element={<Myprofile1 />} />
            <Route exact path="/Appointments" element={<Appointments />} />
            <Route exact path="/MyCards" element={<MyCards />} />
            <Route exact path="/Orders" element={<Orders />} />
            <Route exact path="/Services" element={<Services />} />
            <Route path="*" element={<p>ERROR:404 <strong>Page not found</strong></p>} />
          </Routes>
        </div>
        </ThemeProvider>
    );
}

export default App;
