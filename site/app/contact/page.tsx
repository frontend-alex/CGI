import { ContactInfo } from "@/constants/data";
import Image from "next/image";

const page = () => {
    return (
        <>
            <div className="max-w-7xl flex flex-row gap-3 mx-auto px-5 lg:px-0">
                <div className="flex items-center justify-start w-full">
                    <h1 className="text-4xl font-medium text-(--heading-color)">Contact Us</h1>
                </div>
                <div className="relative w-full">
                    <Image width={1000} height={1000} src="/images/login-banner.png" alt="Contact" className="h-full object-cover" />
                    <div className="cgi-logo w-[100px] h-[100px] absolute bottom-0 left-0"></div>
                </div>
            </div>
            <div className="bg-[--color-background-light-white]">
                <div className="max-w-7xl mx-auto px-5 xl:px-0 flex flex-col lg:flex-row gap-3 lg:items-center justify-between p-5">
                    {ContactInfo.map((info, idx) => (
                        <div className="flex flex-col gap-2" key={idx}>

                            {/* Heading Block */}
                            <div className="flex items-center gap-3 mb-1">
                                <info.icon className="size-7" />
                                <h2 className="text-2xl font-semibold">{info.label}</h2>
                            </div>

                            {/* Links */}
                            <div>
                                {info.links.map((link, linkIndex) => (
                                    <div
                                        className="flex items-center gap-3 mb-3"
                                        key={linkIndex}
                                    >
                                        <link.icon className="text-(--color-gradient-end-purple)" />

                                        <a
                                            href={link.url}
                                            className="text-2xl underline text-[var(--color-gradient-end-purple)] w-full group-hover:text-[var(--color-gradient-end-purple)]"
                                        >
                                            {link.label}
                                        </a>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default page;