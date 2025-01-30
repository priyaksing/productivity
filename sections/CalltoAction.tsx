"use client"

import StarImage from "@/public/star.png"
import SpringImage from "@/public/spring.png"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function CalltoAction() {

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const translateY = useTransform(scrollYProgress, [0, 1], [-150, 150])

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip">
            <div className="container">
                <div className="section-heading relative">
                    <div className="title">
                        Signup for free today
                    </div>
                    <p className="description mt-5">
                        Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
                    </p>

                    <motion.img
                        src={StarImage.src}
                        alt="Star"
                        height={360}
                        width={360}
                        className="absolute -left-[350px] -top-[140px]"
                        style={{
                            translateY
                        }} />

                    <motion.img
                        src={SpringImage.src}
                        alt="Spring"
                        height={360}
                        width={360}
                        className="absolute -right-[350px] -top-[10px]"
                        style={{
                            translateY
                        }} />
                </div>

                <div className="flex justify-center gap-2 mt-10">
                    <button className="btn btn-primary">Get for free</button>
                    <button className="btn btn-text">Learn more</button>
                </div>
            </div>
        </section>
    )
}