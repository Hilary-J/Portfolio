import { HtmlHTMLAttributes } from "react";
import splashImage from "@/assets/images/splash-image.png";
import userImage from "@/assets/images/user.jpg";
import { socials } from "@/assets/dummy-data";

const IntroSection = ({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement>) => {
  
  return (
    <section className={`bg-secondary text-primary`}>
      <div
        className={`container flex items-center justify-between gap-10 py-5 ${className}`}
        {...props}
      >
        {/* Intro */}
        <div className="md:max-w-[500px]">
          <h1 className="text-[50px] md:text-[80px] lg:text-[110px] font-bouncy">
            Welcome.
          </h1>
          <p className="flex flex-col gap-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, iure
            libero cumque tempore, praesentium ratione, quasi earum repudiandae
            animi eligendi blanditiis! Modi fuga numquam quae, excepturi
            explicabo dolores omnis porro. <br />
            <span className="flex gap-4 text-xl">
              {socials.map((social, index) => {
                return (
                  <a
                    href={social.link}
                    key={index}
                    className="text-primary hover:text-primary"
                  >
                    <social.icon />
                  </a>
                );
              })}
            </span>
          </p>
        </div>

        {/* Splash Image */}
        <div
          className="h-full flex-shrink-0"
          style={{ filter: "drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))" }}
        >
          <img
            src={userImage}
            className="h-full"
            style={{
              WebkitMaskImage: `url(${splashImage})`,
              WebkitMaskSize: "cover",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
