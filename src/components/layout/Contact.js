import React, { useState } from 'react';

import { StyledContact, ContactForm } from '../styles/contact';
import { Container } from '../styles/container';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { submitForm } from '../../actions/form';

const Contact = () => {
  const [response, setResponse] = useState(null);
  const [resColor, setResColor] = useState('#87290b');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [ref, inView] = useInView({
    triggerOnce: true
  });

  // Animations
  const grow = {
    scale: inView ? 1 : 0
  };

  const handleSubmit = async () => {
    let formInputs = {
      name,
      email,
      message
    };

    setResponse('Sending message...');

    const res = await submitForm(formInputs);

    setResColor(res.isSuccess ? 'green' : '#87290b');
    setResponse(res.msg);

    if (res.isSuccess) {
      setName('');
      setEmail('');
      setMessage('');
    }

    setTimeout(() => {
      setResponse(null);
    }, 4000);
  };

  return (
    <StyledContact id='contact'>
      <Container>
        <div className='contact-header'>
          <motion.h2 animate={grow}>Contact</motion.h2>
        </div>
        <div className='contact-main'>
          <p className='error' style={{ color: resColor }}>
            {response}
          </p>
          <ContactForm ref={ref}>
            <p type='Name:'>
              <input
                type='text'
                placeholder='Write your name here...'
                value={name}
                onChange={e => setName(e.target.value)}
              ></input>
            </p>
            <p type='Email:'>
              <input
                type='email'
                placeholder='Let me know how to contact you back...'
                value={email}
                onChange={e => setEmail(e.target.value)}
              ></input>
            </p>
            <p type='Message:'>
              <input
                type='text'
                placeholder='What would you like to tell me...'
                value={message}
                onChange={e => setMessage(e.target.value)}
              ></input>
            </p>
            <button
              type='submit'
              onClick={e => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Send Message
            </button>
          </ContactForm>
        </div>
      </Container>
    </StyledContact>
  );
};

export default Contact;
