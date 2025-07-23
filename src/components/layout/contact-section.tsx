import { HtmlHTMLAttributes } from "react";
import * as Icon from "react-bootstrap-icons";
import asphaltBg from "@/assets/images/cartographer.png";

const ContactSection = ({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <section style={{ background: `url(${asphaltBg})` }}>
      <div className="container flex items-center" {...props}>
        <div className="reverse bg-white">
          <div className="cont-me md:text-lg">
            <div className="section-title">Contact me</div>
            <p className="leading-[1.7] my-[35px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, soluta quam ipsa quas possimus rerum. Debitis rerum
              cumque quidem dolor, tempore quo eaque modi officiis inventore
              nisi! Ipsa fugiat soluta deleniti eveniet. Aspernatur atque amet
              magni corporis assumenda nobis, soluta sequi!
            </p>
            <div className="flex flex-col gap-2">
              <div className="contact-info">
                <Icon.GeoAltFill />
                4, Daniel Street, Abule-Egba, Lagos
              </div>
              <div className="contact-info">
                <Icon.PhoneFill />
                +2347048638352
              </div>
              <div className="contact-info">
                <Icon.EnvelopeFill />
                abdulfataibabajide255@gmail.com
              </div>
            </div>
            <div className="contact-icons">
              <div>
                <Icon.Facebook />
              </div>
              <div>
                <Icon.Github />
              </div>
              <div>
                <Icon.Twitter />
              </div>
              <div>
                <Icon.Linkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
