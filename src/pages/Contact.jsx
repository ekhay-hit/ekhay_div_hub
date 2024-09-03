import "./styles/contact.css";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  function handelSubmit(e) {
    e.preventDefault();
    console.log(email);
    console.log(name);
    console.log(content);
    if (!name || !email || !content) {
      setMessage("all field are required");
      return;
    } else {
      setSuccess(true);
      setMessage("email sent");
      setName("");
      setEmail("");
      setContent("");
    }
  }
  return (
    <>
      <form className="contact " onSubmit={handelSubmit}>
        <h2 className="col-10">Contact :</h2>

        <label className="label-control ">Name:</label>
        <input
          className=" input form-control"
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        ></input>

        <label className="label-control ">Email address:</label>
        <input
          className=" input form-control col-8"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <label className="label-control">Message:</label>
        <textarea
          className=" input form-control"
          type="text"
          placeholder="Enter your message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        {!success ? (
          <h3 className="text-danger message">{message}</h3>
        ) : (
          <h3 className="text-success message">{message}</h3>
        )}
        <button className="btn">Send</button>
      </form>
    </>
  );
}
