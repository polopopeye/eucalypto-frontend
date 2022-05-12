import Hero from 'src/components/Home/Hero/Hero';
import Reviews from 'src/components/Home/Reviews/Reviews';

const Home = () => {
  return (
    <div>
      <Hero
        title="Your hidden"
        titleFeatured=" oportunities"
        src=" https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        description="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam."
        btnText="Find out more"
        href="/search"
      />
      <Reviews />
    </div>
  );
};

export default Home;
