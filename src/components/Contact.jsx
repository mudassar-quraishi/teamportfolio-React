import { useState } from "react";

export default function Contact() {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = (form) => {
    const newErrors = {};

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name) {
      newErrors.name = "Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = "Name must contain only alphabets.";
    }

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!subject) {
      newErrors.subject = "Subject is required.";
    }

    if (!message) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    const form = e.target;

    if (!validate(form)) {
      e.preventDefault(); // ⛔ stop Formspree submit
      setStatus("");
    } else {
      setStatus("Sending message...");
    }
  };

  return (
    <section
      id="contact"
      className="p-10 border border-slate-600 rounded-xl shadow-sm mb-8"
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        Contact Us
      </h2>

      <div className="max-w-xl mx-auto">
        <form
          action="https://formspree.io/f/xkgegbqd"
          method="POST"
          noValidate
          onSubmit={handleSubmit}
        >
          {/* NAME */}
          <div className="mb-5">
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-slate-500 rounded-lg focus:ring-emerald-400 focus:border-emerald-400 bg-slate-600"
            />
            <span className="error-message text-sm text-red-500 mt-1 block">
              {errors.name}
            </span>
          </div>

          {/* EMAIL */}
          <div className="mb-5">
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border border-slate-500 rounded-lg focus:ring-emerald-400 focus:border-emerald-400 bg-slate-600"
            />
            <span className="error-message text-sm text-red-500 mt-1 block">
              {errors.email}
            </span>
          </div>

          {/* SUBJECT */}
          <div className="mb-5">
            <label className="block mb-2 font-semibold">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-3 border border-slate-500 rounded-lg focus:ring-emerald-400 focus:border-emerald-400 bg-slate-600"
            />
            <span className="error-message text-sm text-red-500 mt-1 block">
              {errors.subject}
            </span>
          </div>

          {/* MESSAGE */}
          <div className="mb-5">
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 border border-slate-500 rounded-lg h-36 resize-y focus:ring-emerald-400 focus:border-emerald-400 bg-slate-600"
            />
            <span className="error-message text-sm text-red-500 mt-1 block">
              {errors.message}
            </span>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full p-3 text-lg font-bold text-slate-900 bg-emerald-400 rounded-lg hover:bg-emerald-500 transition duration-300"
          >
            Submit
          </button>

          {/* STATUS MESSAGE */}
          {status && (
            <div
              id="form-status"
              className="mt-4 text-center font-semibold text-emerald-400"
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
