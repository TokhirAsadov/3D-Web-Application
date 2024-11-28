import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from "../utils/motion.ts";

const ServiceCard = ({index, title, icon}) => {
    return (
        <Tilt className={"xs:w-[250px] w-full"}>
           <motion.div
                variants={
                   fadeIn(
                    {direction: "right"},
                    {type: "spring"},
                    {delay: 0.5 * index},
                    {duration: 0.74}
                   )
               }
                className={"w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"}

           >
                <motion.div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className={"bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"}
                >
                    <img src={icon} alt={title}
                        className={"w-16 h-16 object-contain"}
                    />
                    <h3 className={"text-white text-[20px] font-bold text-center"} >{title}</h3>
                </motion.div>
           </motion.div>
        </Tilt>
    )
}


const About = () => {
    return (
        <>
            <motion.div
                variants={textVariant({delay: 1})}
            >
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={
                    fadeIn(
                        {direction:""},
                        {type: ""},
                        {delay:0.1},
                        {duration:1}
                    )
                }
                className={"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"}
            >
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Asperiores, culpa deserunt dolore dolorem earum eligendi,
                explicabo impedit ipsam laborum minima nostrum perspiciatis placeat quasi
                sapiente totam unde veniam. Laboriosam nesciunt porro provident, quam
                quibusdam sunt voluptas voluptatibus! Aspernatur corporis dolorem maiores nulla praesentium sint velit? Accusantium aperiam autem,
                cupiditate delectus dolorem doloribus eum fuga ipsa iure porro similique, ullam, vel voluptatibus!
                A ab asperiores atque cupiditate dolore eum facilis labore nostrum officiis placeat, porro quo saepe,
                sapiente sed veritatis? Aliquid autem cum deserunt illo incidunt, laborum magni, molestias mollitia natus quo
                velit veniam veritatis, voluptatibus! Consectetur libero sit velit. Ab accusamus aliquid animi
                asperiores aut autem, consectetur corporis cumque delectus dignissimos distinctio dolor doloribus
                ducimus earum enim et ex excepturi facere facilis illo incidunt ipsum laudantium maiores maxime
                molestias mollitia nobis odio quae quas quia quidem sapiente soluta tenetur ut, voluptas voluptate
                voluptatibus. Alias aperiam aut cupiditate dicta magnam molestiae numquam quod tempore veritatis voluptates.
                Accusamus ad commodi eaque exercitationem molestias neque officiis possimus, quam quibusdam velit?
                Corporis debitis distinctio dolor enim et
                eveniet excepturi id ipsa nobis provident
                quae quas quisquam, saepe sit veritatis voluptate
                voluptatum. Autem dignissimos eum explicabo ipsa
                ipsum, molestiae odio officia pariatur placeat velit
                veniam!
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {
                    services.map((service,index)=>(
                        <ServiceCard key={service.title} index={index} {...service}/>
                    ))
                }
            </div>
        </>
    )
}
export default About
