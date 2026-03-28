
import { useState } from 'react';
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { HomePage } from './pages/HomePage'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header setIsOpen={setIsOpen} />
      <HomePage />
      <Footer />

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default App
