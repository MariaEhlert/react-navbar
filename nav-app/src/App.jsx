import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './Components/Partials/Header/Header'
import { Main } from './Components/Partials/Main/Main'
import { Footer } from './Components/Partials/Footer/Footer'
import { Home } from './Components/Pages/Home/Home'
import { About } from './Components/Pages/About/About'
import { Gallery } from './Components/Gallery/Gallery'

const arrImage = [
  { 
    id: 1,
    image: 'https://api.mediehuset.net/images/sdg/photos/1.jpg',
    name: 'Afskaf fattigdom'
  },
  {
    id: 2,
    image: 'https://api.mediehuset.net/images/sdg/photos/2.jpg',
    name: 'Stop sult'
  },
  {
    id: 3,
    image: 'https://api.mediehuset.net/images/sdg/photos/3.jpg',
    name: 'Sundhed og trivsel'
  },
  {
    id: 4,
    image: 'https://api.mediehuset.net/images/sdg/photos/4.jpg',
    name: 'Kvalitetsdannelse'
  },
]

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery imgList={arrImage} />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;