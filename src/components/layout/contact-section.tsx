import { HtmlHTMLAttributes } from "react";
import * as Icon from "react-bootstrap-icons";
import asphaltBg from "@/assets/images/cartographer.png";
import { socials } from "@/assets/dummy-data";

const ContactSection = ({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <section style={{ background: `url(${asphaltBg})` }}>
      <div
        className="container flex items-center md:py-8 max-md:bg-white"
        {...props}
      >
        <div className="gray-sect-card flex-row-reverse bg-white">
          <div className="max-md:py-5 flex flex-col gap-5 md:gap-7">
            <div className="section-title self-start">Contact me</div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, soluta quam ipsa quas possimus rerum. Debitis rerum
              cumque quidem dolor, tempore quo eaque modi officiis inventore
              nisi! Ipsa fugiat soluta deleniti eveniet. Aspernatur atque amet
              magni corporis assumenda nobis, soluta sequi!
            </p>
            <div className="flex flex-col">
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
            <div className="my-2 flex flex-wrap gap-4 text-xl text-primary">
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
          <div>
            <div className="section-title">Send a message</div>
            <form action="" className="contact-form my-7">
              <input type="text" name="name" id="" placeholder="Your Name" />
              <input type="email" name="email" id="" placeholder="Your Email" />
              <input type="text" name="subject" id="" placeholder="Subject" />
              <textarea name="msg" rows={6} placeholder="Message"></textarea>
              <button type="submit" className="bg-primary text-white">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
