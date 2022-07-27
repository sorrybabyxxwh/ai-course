import './App.css';
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import {Box} from "@mui/material";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
      </Box>
  );
}

export default App;
