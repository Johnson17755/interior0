import Banner from './components/Banner/Banner';
import Banner2 from './components/Banner/Banner2';
import Brands from './components/Brands/Brands';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Newsletter from './components/Newsletter/Newsletter';
import Services from './components/Services.jsx/Services';
import Testimonial from './components/Testimonial/Testimonial';

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <Banner />
      <Banner2 />
      <Testimonial />
      <Newsletter/>
    </main>
  )
}

export default App;