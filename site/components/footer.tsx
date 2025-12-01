import Link from "next/link";

import { Button } from "./ui/button";
import { ROUTES } from "@/config/routes";
import {
    ArrowRight,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
} from "lucide-react";
import AppLogo from "@/components/logo";
import { footerLinks } from "@/constants/data";

const Footer = () => {
    return (
        <section>
            <div
                className="h-[35dvh] flex flex-col gap-3 items-center justify-center"
                style={{ background: "var(--gradient-horizontal)" }}
            >
                <h1 className="text-white text-4xl font-light">How can we help?</h1>
                <Button variant="primary_second" className="w-max">
                    <Link href={ROUTES.PUBLIC.CONTACT}>Contact</Link>
                </Button>
            </div>

            <footer className="bg-[var(--color-background-light-white)] w-full">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5 lg:gap-0">
                    <div className="bg-white flex flex-col gap-2 py-2 px-5">
                        <AppLogo />
                        <h1 className="text-lg font-semibold">Insights you can act on</h1>
                        <p className="text-stone-400 max-w-[250px] text-sm">
                            Founded in 1976, CGI is among the largest IT and business
                            consulting services firms in the world. We are insights-driven and
                            outcomes-focused to help accelerate returns on your investments.
                        </p>

                        <button className="flex justifty-start text-sm font-bold gap-2 hover:text-(--color-gradient-end-purple)">
                            <span>Learn more about CGI</span>
                            <ArrowRight />
                        </button>

                        <p className="text-xs font-semibold">© 2025 CGI Inc.</p>
                    </div>

                    <div className="flex flex-col gap-3 lg:flex-row w-full justify-between px-5 lg:p-10 lg:w-[800px]">
                        {footerLinks.map((link, idx) => (
                            <div className="flex flex-col gap-2" key={idx}>
                                <h2 className="text-lg font-semibold">{link.label}</h2>

                                <ul className="flex flex-col">
                                    {link.links.map((linkItem, key) => {
                                        const linkClass = linkItem.class
                                            ? ` ${linkItem.class}`
                                            : "";
                                        const isExternal = linkItem.url.startsWith("http");

                                        return (
                                            <li
                                                className="group hover:bg-[var(--color-background-purple)] p-1"
                                                key={key}
                                            >
                                                <a
                                                    href={linkItem.url}
                                                    className={`text-sm w-full group-hover:text-[var(--color-gradient-end-purple)]${linkClass}`}
                                                    target={isExternal ? "_blank" : undefined}
                                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                                >
                                                    {linkItem.label}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[var(--color-background-purple)] flex flex-col justify-between gap-3 py-2 pt-5 px-5 lg:w-[300px]">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-lg font-semibold">Discover more about CGI</h1>
                            <p className="mt-3 text-sm font-semibold">Keeping you informed</p>
                            <Button variant="primary" className="w-max">
                                Subscribe
                            </Button>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h1 className="text-lg font-semibold">Follow us</h1>
                            <div className="flex items-center gap-10">
                                <Link href="#">
                                    <Facebook />
                                </Link>
                                <Link href="#">
                                    <Twitter />
                                </Link>
                                <Link href="#">
                                    <Linkedin />
                                </Link>
                                <Link href="#">
                                    <Instagram />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
