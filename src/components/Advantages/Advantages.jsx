import React from "react";
import { motion } from "framer-motion";
import Coding2 from "../../assets/Coding2.jpg";
import Coding3 from "../../assets/Coding3.jpg";
import Coding4 from "../../assets/Coding4.jpg";
import Coding5 from "../../assets/Coding5.jpg";
import Coding6 from "../../assets/Coding6.jpg";
import "./Advantages.css";

const data = [
  {
    id: 1,
    title: "In Demand Tech Skills",
    text:
      "Stay ahead of the curve by acquiring in-demand tech skills that are shaping the future. Our courses focus on teaching you the latest technologies and skills that top companies are actively seeking in their candidates.",
    img: Coding2,
  },
  {
    id: 2,
    title: "Conducive Environment",
    text:
      "Experience a supportive and collaborative learning environment that fosters growth and innovation. Our courses are designed to provide you with the resources, guidance, and community you need to thrive in your learning journey.",
    img: Coding3,
  },
  {
    id: 3,
    title: "Industry Standard Approach",
    text:
      "Our courses are meticulously crafted to align with industry standards and best practices. You will learn the latest tools, technologies, and methodologies that are in demand by employers worldwide.",
    img: Coding4,
  },
  {
    id: 4,
    title: "Flexible Calendar",
    text:
      "Our flexible course calendar allows you to learn at your own pace and fit your studies into your busy schedule. Whether you are a full-time professional or a busy student, our courses adapt to your lifestyle, making learning convenient and achievable.",
    img: Coding5,
  },
  {
    id: 5,
    title: "Hiring Partners",
    text:
      "We collaborate with industry-leading companies to connect our graduates with exciting job opportunities. Our network of hiring partners recognizes the value of our courses and actively seeks talent from our pool of skilled and qualified students.",
    img: Coding6,
  },
];

const Advantages = () => {
  return (
    <motion.div
      className="advantages"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Advantages of training with us
      </motion.h1>

      {data.map((item, index) => {
        const isEven = index % 2 !== 0;

        return (
          <motion.div
            key={item.id}
            className="advantages-content"
            initial={{ opacity: 0, x: isEven ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {!isEven && (
              <motion.div className="advantages-text">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            )}

            <motion.img
              src={item.img}
              alt={item.title}
              className="advantages-img"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />

            {isEven && (
              <motion.div className="advantages-text">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Advantages;
