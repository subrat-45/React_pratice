import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import Bakground from './Bakground';
import { motion } from "framer-motion";

const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={1} className="card">
        <FaRegFileAlt className='icn'/>
        <p>{data.desc}</p>
        <div className="footer" style={{ backgroundColor: data.color }}>
            <div className="info">
                <h5>{data.size}</h5>
                <div className="icon">
                    <GoDownload />
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Card

