import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const Contact = () => {

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },

    validationSchema: Yup.object({
      user_name: Yup.string().required("Name is required"),
      user_email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID || "service_rxwly59", 
          import.meta.env.VITE_TEMPLATE_ID|| "template_0n7m0mf",
          values,
          import.meta.env.VITE_PUBLIC_KEY|| "7dx-h-slZgMlTz8Qg"
        )
        .then(
          () => {
            alert("Message Sent ✅");
            resetForm();
          },
          () => {
            alert("Failed ❌");
          }
        );
    },
  });

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

      <form
        onSubmit={formik.handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        {/* Name */}
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="p-3 rounded text-black"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_name}
        />
        {formik.touched.user_name && formik.errors.user_name && (
          <p className="text-red-400 text-sm">{formik.errors.user_name}</p>
        )}

        {/* Email */}
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="p-3 rounded text-black"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_email}
        />
        {formik.touched.user_email && formik.errors.user_email && (
          <p className="text-red-400 text-sm">{formik.errors.user_email}</p>
        )}

        {/* Message */}
        <textarea
          name="message"
          placeholder="Message"
          className="p-3 rounded text-black"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message && (
          <p className="text-red-400 text-sm">{formik.errors.message}</p>
        )}

        <button
          type="submit"
         className="bg-cyan-400 text-black py-2 rounded hover:scale-105 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;