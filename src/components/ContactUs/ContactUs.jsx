import React from 'react';
import { motion } from 'framer-motion';
import './contactus.css';
import Coding7 from '../../assets/Coding7.jpg';

const ContactUs = () => {
  return (
    <motion.div
      className="contact-us-page"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="contact-form"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! If you have any questions, feedback, or inquiries, please feel free to get in touch with us.
        </p>

        <motion.input
          type="text"
          placeholder="Your Name"
          whileFocus={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          whileFocus={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        <motion.textarea
          placeholder="Your Message"
          whileFocus={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          Submit
        </motion.button>
      </motion.div>

      <motion.img
        src={Coding7}
        alt="Contact Us"
        className="contact-image"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

export default ContactUs;
