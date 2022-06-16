import s from './Resume.module.scss';
import { ReactComponent as FilesIcon } from '../../assets/resume-files.svg';
import { ReactComponent as DownloadIcon } from '../../assets/download.svg';
import { useEffect, useRef, useState } from 'react';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import LinerProgress from '../../components/UIElements/LinerProgress/LinerProgress';
import Button from '../../components/UIElements/Button/Button';
import emailjs from '@emailjs/browser';
import FormInput from './FormInput.jsx';
import TextareaInput from './textArea';
import { text } from 'body-parser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vyslh2o', 'template_ecvlixh', form.current, 'f9CXy2MLXFyWvnG4v')
      .then((result) => {
          console.log(result.text);
          window.location.href = '/';
      }, (error) => {
          console.log(error.text);
      });

      

  }
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const areatext = [
    {
      id: 1,
      name: "Message",
      type: "text",
      placeholder: "Message",
      errorMessage:
        "Pleace put a valid message",
      label: "Message",
      required: true,
    },
  ]
  

  const inputs = [
    {
      id: 1,
      name: "user_name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "user_email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
   
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  

  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            My <br /> Resume
          </h1>

          
        </div>
        <div className="app">
      <form  ref={form} onSubmit={sendEmail}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}            
          />
        ))}
        {areatext.map((input) => (
          <TextareaInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}            
          />
        ))}
        
        <input type="submit" value="Send" />
        
        
      </form>
    </div>
        

        
      </div>
    </BaseLayout>
  );
};

export default Contact;
