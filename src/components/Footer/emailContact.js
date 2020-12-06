import React from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_5dodvos",
        e.target,
        "user_0Dw8hJVzIsGwIqM2aycDE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div>
      <form onSubmit={sendEmail}>
        <input type="text" placeholder="Name" name="name" />
        <input type="email" placeholder="Email Address" name="email" />
        <input type="text" placeholder="Subject" name="subject" />
        <textarea
          id=""
          cols="30"
          rows="8"
          placeholder="Your Message"
          name="message"
        ></textarea>
        <input type="submit" value="Send Message"></input>
      </form>
    </div>
  );
};

export default ContactUs;
