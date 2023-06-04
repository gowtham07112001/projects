import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Fooder from "../Components/Fooder";
import Trip from "../Components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg="https://images.unsplash.com/photo-1618858130890-bdb9445afd21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Service"
      />
      <Trip />
      <Fooder />
    </>
  );
}

export default Service;
