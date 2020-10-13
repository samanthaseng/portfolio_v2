import React, { useState } from 'react';
import { 
    ButtonWrapper,
    ContactContentWrapper,
    ContactText,
    ContactTitle,
    ContactTitleWrapper,
    ContactUpWrapper,
    ContactWrapper,
    InputContainer
} from './Contact.style';
import Button from '../UI/Button/Button';
import { validateEmail } from '../../helpers/validators/isEmail';
import { isRequired } from '../../helpers/validators/isRequired';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formResult, setFormResult] = useState({ success: null, message: null });

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);    
    }

    const handleMessageChange = e => {
        setMessage(e.target.value);   
    }

    const handleSendMessage = () => {
        setFormResult({ success: null, message: null });

        if (isRequired(name) || validateEmail(email) || isRequired(message)) {
            setFormResult({ 
                success: false, 
                message: isRequired(name) 
                    ? isRequired(name) 
                    : validateEmail(email) 
                        ? validateEmail(email) 
                        : isRequired(message)
            })
        };

        // setName('');
        // setEmail('');
        // setMessage('');
    }

    return (
        <ContactWrapper id="contact">
            <ContactUpWrapper />
            <ContactContentWrapper>
                <ContactTitleWrapper>
                    <ContactTitle>Me contacter</ContactTitle>
                </ContactTitleWrapper>
                <ContactText>
                    N'hésitez pas à me contacter. Je vous répondrai dans les plus brefs délais !
                </ContactText>
                <InputContainer>
                    <input 
                        placeholder="Nom" 
                        value={name}
                        onChange={handleNameChange}
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <textarea 
                        placeholder="Votre message"
                        value={message}
                        onChange={handleMessageChange}
                    />

                    <ButtonWrapper>
                        <Button 
                            component="contact-form"
                            action={handleSendMessage}
                        >
                            Envoyer
                        </Button>
                    </ButtonWrapper>
                </InputContainer>
            </ContactContentWrapper>
        </ContactWrapper>
    )
}
