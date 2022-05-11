import Header from "../components/Header/Header";
import headerImage from "../assets/home.jpeg";

function Home() {
  return (
    <>
      <Header
        title="Welcome to our optics shop!"
        image={headerImage}>
        
Our prescription glasses offer a wide choice of online ladies and mens frames ranging from cheap prescription glasses to top designer styles. If you need spectacles for work, reading or driving, we offer high quality glasses at a great price, along with free prescription lenses in most
      </Header>
    </>
  );
}

export default Home;