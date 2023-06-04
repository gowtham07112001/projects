import React from "react";
import "../Components/ContactForm.css";

export default function ContactForm() {
  return (
    <div className="from-container">
      <h1>Send a message to us!</h1>
      <form>
        <input placeholder="Name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Subject"></input>
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Seend Message</button>
      </form>
    </div>
  );
}
