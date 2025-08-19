import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = React.useState<ContactFormProps>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white text-orange-500 p-8 md:p-16">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact GlamCS
      </motion.h1>
      <p className="text-center mb-12">
        We would love to hear from you! Reach out for any inquiries or feedback about our luxurious cosmetics.
      </p>
      
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-orange-100 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Our Location</h2>
        <p className="mb-2">Visit us at our luxurious GlamCS store:</p>
        <p className="font-medium">123 Glamour St, Beauty City, BC 45678</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
        <p className="font-medium">Monday - Friday: 10 AM - 8 PM</p>
        <p className="font-medium">Saturday: 10 AM - 6 PM</p>
        <p className="font-medium">Sunday: Closed</p>
      </div>
    </div>
  );
};

export default ContactPage;