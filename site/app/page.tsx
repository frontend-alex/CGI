import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="flex flex-col gap-3">
        <header className="lg:h-[calc(75dvh-100px)] flex flex-col lg:flex-row justify-center items-center max-w-7xl mx-auto px-5 lg:px-0">
          <div className="flex flex-col gap-3 relative max-w-[600px] lg:max-w-[40%] text-center lg:text-left">
            <span className="cgi-logo w-[50px] h-[50px]" />
            <h1 className="text-4xl lg:text-6xl font-bold">
              Welcome to NERA-CGI
            </h1>
            <p className="text-sm text-stone-400">
              Your gateway to comprehensive criminal justice information,
              empowering professionals, researchers, and the public with
              reliable data, expert insights, and the latest developments
              shaping law, policy, and reform across the justice system.
            </p>
            <a href={ROUTES.APP.DASHBOARD} className="w-max">
              <Button variant="primary">Get Started</Button>
            </a>
          </div>
          <video
            autoPlay
            muted
            loop
            preload="auto"
            className="w-full max-w-[500px] lg:max-w-[600px] h-auto object-contain"
          >
            <source src="https://brand.cgi.com/galleries/banner/cgi_loop_devicegraphique_hr_x2.mp4" />
          </video>
        </header>
      </div>
    </div>
  );
}
