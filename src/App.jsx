import Header from "./components/Header.jsx"
import NavBar from "./components/NavBar.jsx"
import AlfajoresFilteringButtonConteiner from "./components/AlfajoresFilteringButtonConteiner.jsx"
import WhoWeAre from "./components/WhoWeAre.jsx"
import Contacts from "./components/Contacts.jsx"
import Footer from "./components/Footer.jsx"
import SidebarCart from "./components/SidebarCart.jsx"
import { CartProvider } from "./context/CartContext.jsx"

function App() {
  {/*
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  } 
  */}

  return (
    <CartProvider>
      <Header />
      <NavBar />
      <AlfajoresFilteringButtonConteiner /> {/* Aca esta tambien esta el componente que contienes las cartas de los alfajores */}
      <WhoWeAre />
      <Contacts />
      <Footer />
      <SidebarCart />
    </CartProvider>
  )
}

export default App