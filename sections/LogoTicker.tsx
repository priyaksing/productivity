"use client"
import AcmeLogo from "@/public/logo-acme.png"
import QuantumLogo from "@/public/logo-quantum.png"
import EchoLogo from "@/public/logo-echo.png"
import CelestialLogo from "@/public/logo-celestial.png"
import PulseLogo from "@/public/logo-pulse.png"
import ApexLogo from "@/public/logo-apex.png"
import Image from "next/image"
import { motion } from "framer-motion"


export default function LogoTicker() {

    return (
        <div className="py-8 md:py-12 bg-white">
            <div className="container">
                <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <motion.div
                        className="flex gap-14 pr-14"
                        animate={{
                            translateX: "-100%"
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}>
                        <Image src={AcmeLogo} alt="AcmeLogo" className="logo-ticker-image" />
                        <Image src={QuantumLogo} alt="QuantumLogo" className="logo-ticker-image" />
                        <Image src={EchoLogo} alt="EchoLogo" className="logo-ticker-image" />
                        <Image src={CelestialLogo} alt="CelestialLogo" className="logo-ticker-image" />
                        <Image src={PulseLogo} alt="PulseLogo" className="logo-ticker-image" />
                        <Image src={ApexLogo} alt="ApexLogo" className="logo-ticker-image" />
                        {/* Duplicate set for animation */}
                        <Image src={AcmeLogo} alt="AcmeLogo" className="logo-ticker-image" />
                        <Image src={QuantumLogo} alt="QuantumLogo" className="logo-ticker-image" />
                        <Image src={EchoLogo} alt="EchoLogo" className="logo-ticker-image" />
                        <Image src={CelestialLogo} alt="CelestialLogo" className="logo-ticker-image" />
                        <Image src={PulseLogo} alt="PulseLogo" className="logo-ticker-image" />
                        <Image src={ApexLogo} alt="ApexLogo" className="logo-ticker-image" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}