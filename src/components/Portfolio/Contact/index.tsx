import React, {useState} from "react";
import {Header, SectionS} from "@/components/Section/styles";
import {ContainerForm, ContainerSocial} from "./styles";
import GithubSvg from "@/assets/HeaderIcons/GithubSvg";
import LinkedinSvg from "@/assets/HeaderIcons/LinkedinSvg";
import CircleBlur from "@/components/CircleBlur";

import toast, {Toaster} from "react-hot-toast";
import useEmail from "@/hooks/useEmail";
export default function Contact() {
  const [contact, setContact] = useState({name: "", email: "", message: ""});
  const {loading, sendEmail} = useEmail();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    sendEmail(contact);
  };

  const handleChange = (e: any) => {
    setContact({...contact, [e.target.name]: e.target.value});
  };

  return (
    <SectionS id="contact">
      <CircleBlur isRight top={300} />
      <Header>
        Contact <span>Me</span>
      </Header>

      <Toaster />
      <ContainerForm onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Message"
          id=""
          cols={30}
          rows={10}
          onChange={handleChange}
        />

        <button disabled={loading}> Send </button>

        <ContainerSocial>
          <a
            className="social-icon"
            target="_blank"
            href="https://github.com/duwan2112"
          >
            <GithubSvg />
          </a>
          <a
            className="social-icon"
            target="_blank"
            href="https://www.linkedin.com/in/duwan-pe%C3%B1a-309453172/"
          >
            <LinkedinSvg />
          </a>
        </ContainerSocial>
      </ContainerForm>
    </SectionS>
  );
}
