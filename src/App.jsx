import { useState } from "react";
import StripHeader from "./Components/StripHeader";  // Import the StripHeader component
import Learn from "./Components/Learn";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Offer from "./Components/Offer";
import Buy from "./Components/Buy";
import Featured from "./Components/Featured";
import Gallery from "./Components/Gallery"
import Social from "./Components/Social";
import CategoryCarousal from "./Components/CategoryCarousal";
import FeaturesCarousal from "./Components/FeaturesCarousal";
import Footer from "./Components/Footer";
import StripFooter from "./Components/StripFooter";
import Fashion from "./Components/Fashion";
import FeaturedProducts from "./Components/FeaturedProduct";
import Brand from "./Components/Brand";
import Blog from "./Components/Blog";
import About from "./Components/About";
import Viewed from "./Components/Viewed";
function App() {
  // Counter state
  const [counter, setCounter] = useState(0);

  // Functions to handle adding and removing the counter value
  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="w-full box-border">
      <StripHeader />
      <Header/>
      <Navbar/>
      <Hero/>
      <Offer/>
      <Buy/>
      <CategoryCarousal/>
      <FeaturedProducts/>
      <FeaturesCarousal/>
      <Featured/>
      <Fashion/>
      <Brand/>
      <Blog/>
      <About/>

      <Gallery/>
      <Viewed/>
      <Social/>
      
      <Footer/>
      <StripFooter/>
      
      {/* <h1 className="">Hello Vaibhav</h1>
      <h2>Counter value: {counter}</h2> */}
      
      {/* Buttons for adding and removing counter value */}
      {/* <button onClick={addValue}>ADD value</button>
      <button onClick={removeValue}>Remove value</button> */}
      
      {/* Optional paragraph to display current counter */}
      {/* <p>Current counter: {counter}</p> */}
      {/* <Learn/> */}
    </div>
  );
}

export default App;
