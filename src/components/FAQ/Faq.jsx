import React, { useState } from 'react';
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { motion, AnimatePresence } from 'framer-motion';
import "./Faq.css";

const FAQPage = () => {
  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "Enrolling in a course is easy! Simply browse our course catalog, choose the course you're interested in, and click the 'Enroll Now' button. Follow the prompts to create an account and complete the enrollment process."
    },
    {
      question: "Are the courses self-paced?",
      answer: "Yes, most of our courses are self-paced, allowing you to study at your own convenience. You'll have access to course materials and resources 24/7, and you can progress through the content at your preferred speed."
    },
    {
      question: "Do you offer financial assistance or scholarships?",
      answer: "We're committed to making education accessible. We offer various financial assistance options and scholarships to eligible students. Contact our support team to learn more about available opportunities."
    },
    {
      question: "How long do I have access to a course?",
      answer: "Once enrolled, you'll have lifetime access to the course materials, including any updates or improvements. This allows you to revisit the content and continue learning even after you've completed the course."
    },
    {
      question: "Do you provide certificates upon completion?",
      answer: "Yes, upon successful completion of a course, you'll receive a certificate of completion. Our certificates are recognized by industry professionals and can enhance your resume and credentials."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="faq-page"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h1>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="faq-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <p>{faq.question}</p>
              {openIndex === index ? (
                <BiSolidUpArrow size={18} className="arrow-up" />
              ) : (
                <BiSolidDownArrow size={18} />
              )}
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQPage;
