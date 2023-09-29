import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import DraftsIcon from "@mui/icons-material/Drafts";
import {
  ContactFormWrapper,
  Form,
  FormTitle,
  Input,
  TextArea,
} from "./ContactStyled";
import { Container, Desc, Title, Wrapper } from "../SkillsSection/SkillsStyled";
import RoundedButton from "../commons/Button/RoundedButton";

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        "service_71iyblj",
        "template_ovzzxii",
        form.current,
        "YeqlM6Shkp65aGapm"
      )
      .then(
        (result) => {
          props.showSnack();
        },
        (error) => {
          props.showErrSnack();
        }
      );
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Get in touch effortlessly. Whether it's about projects, opportunities,
          or just a friendly chat, I'm all ears. Drop me a line!
        </Desc>

        <ContactFormWrapper>
          <FormTitle>
            <DraftsIcon fontSize="large" />
          </FormTitle>
          <Form ref={form} onSubmit={sendEmail}>
            <Input
              placeholder="Name"
              type="text"
              name="user_name"
              required
              minLength="5"
              maxLength="25"
            />
            <Input
              placeholder="Email"
              type="email"
              name="user_email"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            />
            <TextArea
              placeholder="Message"
              name="message"
              required
              minLength="5"
              maxLength="250"
            />
            <RoundedButton type="submit" text={"Send"}></RoundedButton>
          </Form>
        </ContactFormWrapper>
      </Wrapper>
    </Container>
  );
};

export default Contact;
