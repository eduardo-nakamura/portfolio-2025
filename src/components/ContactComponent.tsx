import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { faLinkedin, faGithub, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import './ContactComponent.css'



const SocialsUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 27px 0 80px;
  & > li {
    padding: 8px 12px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 24px;


  & > textarea {
    padding: 24px;

    border-radius: 8px;
    border: none;
    height: 128px;

  }
  & > textarea:focus {

  }
  ::placeholder {

  }
`;

const FormInput = styled.input`
  padding: 24px;

  border-radius: 8px;
  border: none;
  &:focus {

  }
  :-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset;
    -webkit-text-fill-color: #333;
    transition: background-color 5000s ease-in-out 0s;
    opacity:0;
  }

  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    box-shadow: 0 0 0px 1000px white inset;
    -webkit-text-fill-color: #333;
    transition: background-color 5000s ease-in-out 0s;    opacity:0;
  }
`;


function ContactComponent() {
  const nomeRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const mensagemRef = useRef<HTMLTextAreaElement>(null);
  const { t } = useTranslation();

  const enviarEmail = () => {
    if (nomeRef.current && emailRef.current && mensagemRef.current) {
      const nome = nomeRef.current.value;
      const email = emailRef.current.value;
      const mensagem = mensagemRef.current.value;

      const corpoEmail = `Nome: ${nome}%0D%0AEmail: ${email}%0D%0AMensagem: ${mensagem}`;
      const assuntoEmail = 'Nova mensagem do formulário de contato';
      const destinatarioEmail = 'eduardonakamuradev@gmail.com'; // Substitua pelo seu email

      window.location.href = `mailto:${destinatarioEmail}?subject=${encodeURIComponent(
        assuntoEmail
      )}&body=${corpoEmail}`;
    } else {
      console.error('One or more form elements not found.');
      // Optionally, show an error message to the user.
    }
  };

  return (
    <div className="containerSection">
      <div className="item-50">
        <h3>{t('lets_work_title')} </h3>
        <p style={{ fontSize: '16px' }}>{t('lets_work_socials')}</p>
        <SocialsUl>
          <li>
            <a
              href="https://www.linkedin.com/in/eduardo-nakamura-6771898"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon size="2x" icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/eduardo-nakamura/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon size="2x" icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="mailto:eduardonakamuradev@gmail.com">
              <FontAwesomeIcon size="2x" icon={faAt} />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5511974739805?text=Ola"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon size="2x" icon={faSquareWhatsapp} />
            </a>
          </li>
        </SocialsUl>
      </div>
      <div className="item-50">
        <FormContainer id="contactForm">
          <textarea
            ref={mensagemRef}
            name="user_message"
            placeholder={t('message')}
            required
          />
          <FormInput
            className="inputClass"
           
            type="text"
            ref={nomeRef}
            name="user_name"
            placeholder={t('name')}
            required
          />
          <FormInput
               className="inputClass"
           
            type="email"
            ref={emailRef}
            name="user_email"
            placeholder="Email"
            required
          />
          <button className='submitButton' type="button" onClick={enviarEmail}>
            {t('submit')}
          </button>
        </FormContainer>
      </div>
    </div>
  );
}

export default ContactComponent;