import Hero from 'src/components/Home/Hero/Hero';
import Lifecicle from 'src/components/Home/Lifecycle/Lifecicle';
import Reviews from 'src/components/Home/Reviews/Reviews';

const Home = () => {
  return (
    <div>
      <Hero
        title="Finding hidden"
        titleFeatured=" oportunities"
        description="Eucalyptus meaning origins from ancient greek: it means hidden good, well, beauty"
        btnText="Search for a project"
        href="/search"
      />
      <Reviews />
      <Lifecicle />
    </div>
  );
};

export default Home;
