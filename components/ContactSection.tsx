import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    message: '',
    reason: 'Inquiry',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formValues.name) newErrors.name = 'Name is required.';
    if (!formValues.email) newErrors.email = 'Email is required.';
    if (!formValues.message) newErrors.message = 'Message is required.';
    if (!/\S+@\S+\.\S+/.test(formValues.email)) newErrors.email = 'Email is invalid.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      setSuccessMessage('Thank you for contacting GlamCS! We will get back to you soon.');
      setFormValues({ name: '', email: '', message: '', reason: 'Inquiry' });
      setErrors({});
    }
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-orange-600 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact GlamCS
        </motion.h2>
        <div className="bg-orange-50 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">Name</label>
              <input
                className={w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-orange-400}
                type="text"
                name="name"
                id="name"
                value={formValues.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <input
                className={w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-orange-400}
                type="email"
                name="email"
                id="email"
                value={formValues.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="reason">Reason for Contact</label>
              <select
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                name="reason"
                id="reason"
                value={formValues.reason}
                onChange={handleChange}
              >
                <option value="Inquiry">Inquiry</option>
                <option value="Feedback">Feedback</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Support">Support</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="message">Message</label>
              <textarea
                className={w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-orange-400}
                name="message"
                id="message"
                value={formValues.message}
                onChange={handleChange}
                rows={4}
                required
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <motion.button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Send Message
            </motion.button>
          </form>
          {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-orange-600">GlamCS Contact Information</h3>
          <p className="text-gray-700">Location: 123 Glam Ave, Beauty City, BC 12345</p>
          <p className="text-gray-700">Business Hours: Mon-Fri 9am - 5pm</p>
          <p className="text-gray-700">Email: support@glamcs.com</p>
          <p className="text-gray-700">Phone: (123) 456-7890</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;