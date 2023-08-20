import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import the necessary components
import Starter from './Pages/Starter'; // Import the Starter component
import Game from './Pages/Game';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Starter />} />
                <Route path="/game" element={<Game />} />
            </Routes>
        </Router>
    );
}

export default App;
