import React, { useState, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import { 
    ButtonWrapper,
    ContactContentWrapper,
    ContactText,
    ContactTitle,
    ContactTitleWrapper,
    ContactUpWrapper,
    ContactWrapper,
    FormContainer,
    InputContainer,
    InputsContainer
} from './Contact.style';
import Button from '../UI/Button/Button';
import apiCall from '../../helpers/services/apiCall';
import { validateEmail } from '../../helpers/validators/isEmail';
import { isRequired } from '../../helpers/validators/isRequired';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formResult, setFormResult] = useState({ success: null, message: null });

    useEffect(() => {
        if (formResult.success !== null) {
            addToast(formResult.message, {
                appearance: formResult.success === true ? 'success' : 'error',
                autoDismiss: true,
            })
        }
        
    }, [formResult]);

    const { addToast } = useToasts();

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);    
    }

    const handleMessageChange = e => {
        setMessage(e.target.value);   
    }

    const handleSendMessage = async () => {
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
        } else {
            const options = {
                route: '/contact/',
                method: 'POST',
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                body: `name=${name}&email=${email}&message=${message}`
            }
            const response = await apiCall(options);
            
            setFormResult({success: response.success, message: response.message});
            if (response.success === true) {
                setName('');
                setEmail('');
                setMessage('');
            }
        };
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
                <FormContainer>
                    <InputsContainer>
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
                        </InputContainer>
                        <textarea 
                            placeholder="Votre message"
                            value={message}
                            onChange={handleMessageChange}
                        />
                    </InputsContainer>

                    <ButtonWrapper>
                        <Button 
                            component="contact-form"
                            action={handleSendMessage}
                        >
                            Envoyer
                        </Button>
                    </ButtonWrapper>
                </FormContainer>
            </ContactContentWrapper>
        </ContactWrapper>
    )
}
