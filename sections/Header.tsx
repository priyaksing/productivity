import Image from "next/image"
import Logo from "@/public/logosaas.png"
import Menu from "@/public/menu.svg"

export default function Header() {
    return (
        <header className="top-0 sticky backdrop-blur-sm z-20">
            <div className="bg-black text-white text-sm flex justify-center py-3 gap-3">
                <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity.</p>
                <p>Get started for free</p>
            </div>

            <div className="py-5">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <Image src={Logo} alt="logo" height={40} width={40} />
                        <Image src={Menu} alt="menu" height={20} width={20} className="md:hidden" />
                        <nav className="hidden md:flex items-center gap-6 text-black/60">
                            <a href="#">About</a>
                            <a href="#">Features</a>
                            <a href="#">Customers</a>
                            <a href="#">Updates</a>
                            <a href="#">Help</a>
                            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight">Get for free</button>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}