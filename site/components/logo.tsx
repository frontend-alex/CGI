import Link from "next/link";

import { ROUTES } from "@/config/routes";
import Image from "next/image";

export const SmallAppLogo = () => {
    return (
        <Link href={ROUTES.PUBLIC.LANDING}>
            <Image
                width={20}
                height={20}
                src="/svgs/logo.svg"
                alt="Logo"
                className="size-15 text-primary"
            />
        </Link>
    );
};

export const AppLogo = () => {
    return (
        <Link href={ROUTES.PUBLIC.LANDING}>
            <div className="flex items-center gap-3">
                <Image
                    width={40}
                    height={40}
                    src="/svgs/logo.svg"
                    alt="Logo"
                    className="size-15 text-primary"
                />
            </div>
        </Link>
    );
};

export default AppLogo;
