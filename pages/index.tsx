import Aboutus from 'src/components/Home/Aboutus/Aboutus';
import Hero from 'src/components/Home/Hero/Hero';
import Lifecicle from 'src/components/Home/Lifecycle/Lifecicle';
import Reviews from 'src/components/Home/Reviews/Reviews';

const Home = () => {
  return (
    <>
      <Hero btnText="Search for a project" href="/search" />
      <Reviews />
      <Aboutus />
      <Lifecicle />
    </>
  );
};

export default Home;
