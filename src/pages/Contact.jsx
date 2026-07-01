import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const Contact = () => {

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    },

    validationSchema: Yup.object({
      user_name: Yup.string().required("Name is required"),

      user_email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),

      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter valid 10 digit number")
        .required("Phone is required"),

      subject: Yup.string().required("Subject is required"),

      company: Yup.string(),

      message: Yup.string()
        .min(10, "Message too short")
        .required("Message is required"),
    }),

    onSubmit: (values, { resetForm }) => {

      // ✅ Add time automatically
      const newValues = {
        ...values,
        time: new Date().toLocaleString(),
      };

      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          newValues,
          import.meta.env.VITE_PUBLIC_KEY
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
    <section className="py-20 bg-black text-white">
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

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="p-3 rounded text-black"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone && (
          <p className="text-red-400 text-sm">{formik.errors.phone}</p>
        )}

        {/* Subject */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="p-3 rounded text-black"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subject}
        />
        {formik.touched.subject && formik.errors.subject && (
          <p className="text-red-400 text-sm">{formik.errors.subject}</p>
        )}

        {/* Company */}
        <input
          type="text"
          name="company"
          placeholder="Company (Optional)"
          className="p-3 rounded text-black"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.company}
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Message"
          className="p-3 rounded text-black h-32"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message && (
          <p className="text-red-400 text-sm">{formik.errors.message}</p>
        )}

        {/* Button */}
        <button
          type="submit"
          className="bg-cyan-400 text-black py-2 rounded hover:scale-105 transition"
        >
          Send Message 🚀
        </button>

      </form>
    </section>
  );
};

export default Contact;