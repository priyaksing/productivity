'use client'
import ProductImage from "@/public/product-image.png"
import PyramidImage from "@/public/pyramid.png"
import TubeImage from "@/public/tube.png"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ProductShowcase() {

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const translateY = useTransform(scrollYProgress, [0, 1], [-150, 150])

    return (
        <section className="py-24 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip">
            <div className="container">
                <div className="section-heading">
                    <div className="tag flex justify-self-center">
                        Boost your productivity
                    </div>
                    <h2 className="my-5 title">
                        A more effective way to track progress
                    </h2>
                    <p className="description">
                        Effortlessly turn your ideas into a fully functional, responsive websites within minutes with this template
                    </p>
                </div>

                <div className="relative">
                    <Image
                        src={ProductImage}
                        alt="Product"
                        className="mt-10" />

                    <motion.img
                        src={PyramidImage.src}
                        alt="Pyramid"
                        height={262}
                        width={262}
                        className="hidden md:block absolute -right-36 -top-32"
                        style={{
                            translateY
                        }} />

                    <motion.img
                        src={TubeImage.src}
                        alt="Tube"
                        height={248}
                        width={248}
                        className="hidden md:block absolute bottom-24 -left-36 "
                        style={{
                            translateY
                        }} />

                </div>
            </div>
        </section>
    )
}