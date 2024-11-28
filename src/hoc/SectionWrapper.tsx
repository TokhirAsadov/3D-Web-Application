import {motion} from 'framer-motion';

import {styles} from '../styles';
import { staggerContainer } from "../utils/motion.ts";
import React from "react";

const SectionWrapper = ({Component}:{Component: React.ComponentType}, {idName}:{idName: string}) => function HOC(){
    return (
        <motion.section
            variants={staggerContainer({ staggerChildren: 0.15 }, { delayChildren: 0.2 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className={"hash-span"} id={idName}>

            </span>
            <Component />
        </motion.section>
    )
}
export default SectionWrapper
