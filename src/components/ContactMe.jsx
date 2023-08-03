import React, { useRef } from "react";
import SectionContainer from "./subcomponents/SectionContainer";
import Texts from "./subcomponents/Texts";
import emailjs from "emailjs-com";
import Animate from "./animationcomponents/Animate";

const ContactMe = ({ contact }) => {
  const form = useRef();
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validEmail = emailRegex.test(input2.current.value);
    try {
      if (
        !input1.current.value ||
        !input2.current.value ||
        !input3.current.value ||
        !input4.current.value
      ) {
        alert("Incomplete credentials");
        return;
      }
      if (!validEmail) {
        alert("Please enter a valid E-mail");
        return;
      }
      await emailjs.sendForm(
        "service_n4hy5rv",
        "template_6yikhke",
        form.current,
        "LYD2PjwK_ChypiseY"
      );
      alert(
        "Email Sent 📨./n Thank you for contacting me 🤝./n You will be responded to immediately"
      );
    } catch (error) {
      console.error(`Failed to send. Error is ${error}`);
      alert(
        `❌❌❌❌❌❌ /n There was an error sending your message. /n ${error}`
      );
    }
  };

  return (
    <SectionContainer title="contactMe" theRef={contact}>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 pb-12">
        <Texts size="lg">
          <Animate>
            <p>
              I'm excited to hear from you and explore the endless possibilities
              of frontend development.
            </p>
          </Animate>
          <Animate>
            <p>
              Whether you have a project in mind or need a skilled developer to
              breathe life into your ideas, don't hesitate to reach out! Use the
              form below to get in touch, and let's create something
              extraordinary together.
            </p>
          </Animate>
          <Animate>
            <p>Looking forward to connecting with you!</p>
          </Animate>
        </Texts>
        <form ref={form} className="flex flex-col gap-3 lg:w-[50%] w-[100%] ">
          <Animate>
            <div className="md:flex grid gap-4">
              <input
                ref={input1}
                className={`border-[1px]    focus:outline-none w-[100%] p-1 bg-black `}
                type="text"
                name="name"
                id="1"
                placeholder="Full Name"
              />
              <input
                ref={input2}
                className={`  border-[1px]   focus:outline-none w-[100%] p-1 bg-black`}
                type="email"
                name="email"
                id="2"
                placeholder="E-mail"
                required
              />
            </div>
          </Animate>
          <Animate>
            <input
              ref={input3}
              className={` border-[1px]   bg-black focus:outline-none w-[100%] p-1 `}
              type="text"
              name="subject"
              id="3"
              placeholder="Subject"
            />
          </Animate>
          <Animate>
            <textarea
              ref={input4}
              className={`bg-black h-32 border-[1px]    focus:outline-none mx-auto w-[100%] p-1`}
              type="text"
              name="message"
              id="4"
              placeholder="Your Message"
            />
          </Animate>
          <div>
            <Animate>
              <button
                type="submit"
                onClick={handleSubmit}
                className=" border-[1px]   p-2  mt-3 font-bold font-sacramento"
              >
                Send Message
              </button>
            </Animate>
          </div>
        </form>
      </div>
    </SectionContainer>
  );
};

export default ContactMe;
