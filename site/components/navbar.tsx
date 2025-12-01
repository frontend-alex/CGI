import Link from "next/link";
import AppLogo from "@/components/logo";

import { Globe, Menu, } from "lucide-react";
import { ROUTES } from "@/config/routes";

import { navbarLinks } from "@/constants/data";

const Navbar = () => {
    return (
        <nav className="p-1 bg-white font-(--font-source-code-pro) sticky top-0 z-10 shadow-xl px-5 xl:px-0">
            <div className="flex justify-between items-center gap-3 max-w-6xl mx-auto">
                <div className="flex items-center gap-20">
                    <AppLogo />
                    <ul className="hidden lg:flex items-center navbar-links gap-10">
                        {navbarLinks.map((link, idx) => (
                            <li key={idx}>
                                <Link href={link.url}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <ul className="hidden lg:flex items-center gap-5 navbar-links">
                    <li>
                        <Link href={ROUTES.APP.LOGIN}>
                            Contact
                        </Link>
                    </li>
                    <div className="w-px h-10 bg-black" />
                    <li>
                        <Link className="flex items-center gap-2" href={ROUTES.APP.REGISTER}>
                            <Globe size={18} />
                            Global
                        </Link>
                    </li>
                    <div className="w-px h-10 bg-black" />
                    <li>
                        <Link href={ROUTES.APP.REGISTER}>
                            En
                        </Link>
                    </li>
                </ul>

                <div className="flex lg:hidden">
                    <Menu />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
