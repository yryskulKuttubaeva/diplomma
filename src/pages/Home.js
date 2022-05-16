import Header from "../Components/Header";
import headerImage from "../assets/home.png"
function Home() {
  return (
    <>
      <Header
        title="Welcome to our technology shop!"
        image={headerImage}>
        Technology is the continually developing result of accumulated knowledge and application in all techniques, skills, methods, and processes used in industrial production and scientific research. Technology is embedded in the operation of all machines, with or without detailed knowledge of their function, for the intended purpose of an organization.
      </Header>
    </>
  );
}

export default Home;