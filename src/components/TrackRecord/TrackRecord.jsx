import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import "./TrackRecord.css";

const TrackRecord = () => {
  return (
    <motion.div
      className="homepage-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Strength in Numbers
      </motion.h1>

      <div className="counter">
        {[ 
          { end: 98, suffix: "%", label: "Satisfaction" },
          { end: 2500, suffix: "+", label: "Success Stories" },
          { end: 5000, suffix: "+", label: "Students Trained" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="counter-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.3, duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="counter-number">
              <CountUp start={0} end={item.end} duration={5} suffix={item.suffix} />
            </h2>
            <p className="counter-label">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TrackRecord;
