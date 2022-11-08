import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Appointments from "./pages/Appointments";
import Oders from "./pages/Oders";
import Services from "./pages/Services";
import Payment from "./pages/Payment";
import { ThemeProvider } from 'styled-components';

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
            <Route exact path="/" element={<Homepage/>} />
            <Route exact path="/Appointments" element={<Appointments />} />
            <Route exact path="/Payment" element={<Payment />} />
            <Route exact path="/Oders" element={<Oders />} />
            <Route exact path="/Services" element={<Services />} />
            <Route path="*" element={<p>ERROR:404 <strong>Page not found</strong></p>} />
          </Routes>
        </div>
        </ThemeProvider>
    );
}

export default App;
