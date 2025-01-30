"use client"

import React from "react";
import avatar1 from "@/public/avatar-1.png";
import avatar2 from "@/public/avatar-2.png";
import avatar3 from "@/public/avatar-3.png";
import avatar4 from "@/public/avatar-4.png";
import avatar5 from "@/public/avatar-5.png";
import avatar6 from "@/public/avatar-6.png";
import avatar7 from "@/public/avatar-7.png";
import avatar8 from "@/public/avatar-8.png";
import avatar9 from "@/public/avatar-9.png";
import Image from "next/image";
import { motion } from "framer-motion"

const testimonials = [
    {
        text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
        imageSrc: avatar1.src,
        name: "Jamie Rivera",
        username: "@jamietechguru00",
    },
    {
        text: "Our team's productivity has skyrocketed since we started using this tool. ",
        imageSrc: avatar2.src,
        name: "Josh Smith",
        username: "@jjsmith",
    },
    {
        text: "This app has completely transformed how I manage my projects and deadlines.",
        imageSrc: avatar3.src,
        name: "Morgan Lee",
        username: "@morganleewhiz",
    },
    {
        text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
        imageSrc: avatar4.src,
        name: "Casey Jordan",
        username: "@caseyj",
    },
    {
        text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
        imageSrc: avatar5.src,
        name: "Taylor Kim",
        username: "@taylorkimm",
    },
    {
        text: "The customizability and integration capabilities of this app are top-notch.",
        imageSrc: avatar6.src,
        name: "Riley Smith",
        username: "@rileysmith1",
    }
];

export const Testimonials = () => {
    return (
        <section className="bg-white">
            <div className="container">
                <div className="section-heading">
                    <div className="tag flex justify-self-center">
                        Testimonials
                    </div>
                    <h2 className="title my-5">
                        What our users say
                    </h2>
                    <p className="description">
                        From intuitive design to powerful features, our app has become an essential tool for user all around the world
                    </p>
                </div>

                <div className="max-h-[738px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
                    <motion.div
                        initial={{
                            translateY: 0
                        }}
                        animate={{
                            translateY: "-50%"
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 pb-6 mt-10">
                        {[...new Array(2)].fill(0).map((_, index) => (
                            <React.Fragment key={index}>
                                {testimonials.map((testimonial) => (
                                    <div className="card">
                                        <div>
                                            {testimonial.text}
                                        </div>
                                        <div className="flex items-center gap-2 mt-5">
                                            <Image
                                                src={testimonial.imageSrc}
                                                alt={testimonial.name}
                                                width={40}
                                                height={40}
                                            />
                                            <div className="flex flex-col">
                                                <p className="font-medium tracking-tight leading-5">{testimonial.name}</p>
                                                <p className="tracking-tight leading-5">{testimonial.username}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}

                    </motion.div>
                </div>
            </div>
        </section >
    )
};
