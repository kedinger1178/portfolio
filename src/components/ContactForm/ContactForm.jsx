import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from './contactForm.module.scss';

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const isFormValid = name && email && message;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isFormValid) return;

        const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_78lkhx4",
        "template_4acewb9",
        templateParams,
        "WigGPQ2YoLMh068co"
      )
      .then(
        () => {
          setSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");

          setTimeout(() => setSubmitted(false), 3000);
        },
        (error) => {
          console.error("Email error:", error);
        }
      );
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles['input-text']}>
                <label for='name'>Name <span className={styles.red}>*</span></label>
                <input type='text' name='name' id='name' required value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className={styles['input-text']}>
                <label for='email'>Email <span className={styles.red}>*</span></label>
                <input type='email' name='email' id='email' value={email} required onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className={styles['input-text']}>
                <label for='message'>Message <span className={styles.red}>*</span></label>
                <textarea type='text' rows="5" id='message' required name='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit" className={`button secondary ${!isFormValid ? "disabled" : ""}`} disabled={!isFormValid}>
                Send
            </button>

            {submitted && (
                <div className={styles['messageBanner']}>
                    <div className={styles['success-icon']}>
                        <i class="fa fa-check-circle"></i>
                    </div>
                    <div className={styles['success-message']}>
                    <p>Message sent successfully</p>
                    </div>
                    
                </div>
                
            )}
        </form>
    );
}

export default ContactForm;