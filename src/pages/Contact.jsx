import { Fragment } from "react";
import "./styles/contact.css";

export default function Contact() {
  return (
    <>
      <form className="contact form-control">
        <h2 className="col-12">Contact</h2>
        <label className="label-control col-12">Name:</label>
        <input
          className=" input form-control"
          type="text"
          placeholder="Enter your name"
        ></input>
        <label className="label-control col-12">Email address:</label>
        <input
          className=" input form-control"
          type="text"
          placeholder="Enter your email"
        ></input>
        <label className="label-control col-12">Message:</label>
        <textarea
          className=" input form-control"
          type="text"
          placeholder="Enter your message"
        ></textarea>
        <button className="btn">Send</button>
      </form>
    </>
  );
}
