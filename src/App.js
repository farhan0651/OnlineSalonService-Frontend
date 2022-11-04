import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Appointments from "./pages/Appointments";
import Oders from "./pages/Oders";
import Services from "./pages/Services";
import Payment from "./pages/Payment";

function App() {
    return (
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
    );
}

export default App;
