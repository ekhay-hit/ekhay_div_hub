import "./styles/contact.css";

export default function Contact() {
  return (
    <>
      <form className="contact ">
        <h2 className="col-10">Contact :</h2>
        <label className="label-control ">Name:</label>
        <input
          className=" input form-control"
          type="text"
          placeholder="Enter your name"
        ></input>
        <label className="label-control ">Email address:</label>
        <input
          className=" input form-control col-8"
          type="text"
          placeholder="Enter your email"
        ></input>
        <label className="label-control">Message:</label>
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
