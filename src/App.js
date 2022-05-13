import Cart from "./Components/Cart";
import Nav from "./Components/Nav";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Cart />
      <HomeScreen />
      <Footer/>
    </div>
  );
}

export default App;