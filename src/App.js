import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ClothesScreen from "./screens/ClothesScreen"
import ShoesScreen from './screens/ShoesScreen'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
     <Router>
      <Header />
      <main className='py-3'>
        <Container>


          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/clothes" element={<ClothesScreen />} />
            <Route path="shoes" element={<ShoesScreen />} />
          </Routes>


        </Container>
      </main>
      <Footer />
    </Router>
  );
}




export default App;
