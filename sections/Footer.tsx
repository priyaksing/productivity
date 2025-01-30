import Logo from "@/public/logosaas.png"
import SocialX from "@/public/social-x.png"
import SocialInsta from "@/public/social-insta.png"
import SocialLinkedin from "@/public/social-linkedin.png"
import SocialPin from "@/public/social-pin.png"
import SocialYoutube from "@/public/social-youtube.png"
import Image from "next/image"

export default function Footer() {

    return (
        <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
            <div className="container">
                <div className="relative inline-flex before:content-[''] before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:blur before:absolute">
                    <Image
                        src={Logo} alt="Logo"
                        height={40}
                        className="relative" />
                </div>

                <nav className="flex flex-col md:flex-row md:justify-center gap-6 my-6">
                    <a href="#">About</a>
                    <a href="#">Customers</a>
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Help</a>
                    <a href="#">Careers</a>
                </nav>

                <div className="flex justify-center gap-6">
                    <Image src={SocialX} alt="Social X" height={24} />
                    <Image src={SocialInsta} alt="Social Insta" height={24} />
                    <Image src={SocialLinkedin} alt="Social Linkedin" height={24} />
                    <Image src={SocialPin} alt="Social Pin" height={24} />
                    <Image src={SocialYoutube} alt="Social Youtube" height={24} />
                </div>

                <p className="mt-6 ">
                    &copy; 2024 Your Company, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    )
}