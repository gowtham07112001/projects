import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Fooder from "../Components/Fooder";
import ContactForm from "../Components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg="https://images.unsplash.com/photo-1480480565647-1c4385c7c0bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
        title="Contact"
      />
      <ContactForm />
      <Fooder />
    </>
  );
}

export default Contact;
