'use client'
import CheckIcon from "@/public/check.svg"
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion"

const pricingTiers = [
    {
        title: "Free",
        monthlyPrice: 0,
        buttonText: "Get started for free",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "2GB storage",
            "Integrations",
            "Basic support",
        ],
    },
    {
        title: "Pro",
        monthlyPrice: 9,
        buttonText: "Sign up now",
        popular: true,
        inverse: true,
        features: [
            "Up to 50 project members",
            "Unlimited tasks and projects",
            "50GB storage",
            "Integrations",
            "Priority support",
            "Advanced support",
            "Export support",
        ],
    },
    {
        title: "Business",
        monthlyPrice: 19,
        buttonText: "Sign up now",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "200GB storage",
            "Integrations",
            "Dedicated account manager",
            "Custom fields",
            "Advanced analytics",
            "Export capabilities",
            "API access",
            "Advanced security features",
        ],
    },
];

export const Pricing = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="section-heading">
                    <h2 className="title">Pricing</h2>
                    <p className="mt-5 description">
                        Free forever, upgrade for unlimited tasks, better security and exclusive features.
                    </p>
                </div>

                <div className="mt-10 flex flex-col gap-6 items-center lg:flex-row lg:items-end lg:justify-center">
                    {pricingTiers.map(({
                        title,
                        monthlyPrice,
                        buttonText,
                        popular,
                        inverse,
                        features }) => (

                        <div className={twMerge("card",
                            inverse && "border-black bg-black text-white"
                        )}>
                            <div className="flex justify-between items-center">
                                <h3 className={twMerge("text-lg font-bold text-black/50", inverse && "text-white/60")}>
                                    {title}
                                </h3>
                                {popular && (
                                    <div className="inline-flex text-sm px-4 py-2 border border-white/20 rounded-xl">
                                        <motion.span
                                            animate={{
                                                backgroundPositionX: "100%"
                                            }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                repeatType: "loop",
                                                ease: "linear"
                                            }}
                                            className="font-medium bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] bg-clip-text text-transparent">
                                            Popular
                                        </motion.span>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-baseline gap-1 my-[30px]">
                                <span className="text-4xl font-bold tracking-tighter leading-none">
                                    ${monthlyPrice}
                                </span>
                                <span className={twMerge("font-bold text-black/50 tracking-tighter", inverse && "text-white/60")}>
                                    /month
                                </span>
                            </div>

                            <button className={twMerge("btn btn-primary w-full", inverse && "bg-white text-black")}>
                                {buttonText}
                            </button>

                            <ul className="flex flex-col gap-5 mt-8">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-4 text-sm">
                                        <Image src={CheckIcon} alt="check icon" height={24} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};
