import emailjs from "emailjs-com";

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      e.target,
      "YOUR_PUBLIC_KEY"
    ).then(
      () => {
        alert("Message Sent ✅");
      },
      () => {
        alert("Failed ❌");
      }
    );

    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <h2 className="section-title">Contact Me</h2>

      <form onSubmit={sendEmail} className="max-w-xl mx-auto flex flex-col gap-4">
        <input name="user_name" placeholder="Your Name" className="p-3 rounded text-black"/>
        <input name="user_email" placeholder="Your Email" className="p-3 rounded text-black"/>
        <textarea name="message" placeholder="Message" className="p-3 rounded text-black"/>

        <button className="btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;