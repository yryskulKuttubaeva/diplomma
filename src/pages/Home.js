import Header from "../components/Header/Header";
import headerImage from "../assets/home.jpeg";

function Home() {
  return (
    <>
      <Header
        title="Welcome to our technics shop!"
        image={headerImage}>
        In fact not everything is so wonderful as it seems at the first sight. Just look at people around — they are obviously addicted to their mobiles like to drugs. Every second you see a person staring at his telephone screen. Children are playing games and applications in their mobiles instead of playing football or walking with friends. People forget what it is like to communicate face to face, they only chat to people online. Moreover using mobile phones very often is dangerous because of radiation we get.
      </Header>
    </>
  );
}

export default Home;