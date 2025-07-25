import { HtmlHTMLAttributes } from "react";
import asphaltBg from "@/assets/images/cartographer.png";
import { socials } from "@/assets/dummy-data";

const AboutSection = ({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement>) => {
    
  return (
    <section style={{ background: `url(${asphaltBg})` }}>
      <div
        className="container flex items-center md:py-8 max-md:bg-white"
        {...props}
      >
        <div className="gray-sect-card bg-white">
          {/* User Image */}
          <div className="bg-light max-w-[400px] aspect-square"></div>

          {/* Main Content */}
          <div className="md:p-4 flex flex-col items-start gap-4">
            <div className="section-title">About me</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit amet
              aspernatur alias harum optio fugiat ratione repellendus tenetur
              perferendis placeat culpa aperiam quo ullam qui ab, architecto cum
              eum unde et ducimus. Commodi, placeat necessitatibus!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
              ipsum ut vero cum aspernatur assumenda asperiores, commodi
              voluptate labore dolorem. Voluptate, architecto nobis provident
              sint minima eius? Fugiat, quas dolores!
            </p>
            <div className="flex gap-3">
              <div className="font-medium">
                <div>Name:</div>
                <div>Profile:</div>
                <div>Email:</div>
                <div>Phone:</div>
              </div>
              <div>
                <div>Abdulfatai Babajide</div>
                <div>Full stack web developer</div>
                <div>abdulfataibabajide255@gmail.com</div>
                <div>+2347048638352</div>
              </div>
            </div>
            <div className="my-5 flex flex-wrap justify-center gap-4 text-xl text-primary">
              {socials.map((social, index) => {
                return (
                  <a
                    href={social.link}
                    key={index}
                    className="border-2 text-primary border-primary p-2 rounded-full hover:bg-primary hover:text-white"
                  >
                    <social.icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
