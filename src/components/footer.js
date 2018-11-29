import React from 'react'
import css from 'less/footer.module.less'
import Section from './section'


const ContactForm = () => {

  return (
    <form id='contactForm' name='contact' method='post' className={css.contactForm} data-netlify='true' action='/submission' data-netlify-honeypot='honeypot'>
      <div className={css.field}>
        <label htmlFor='contactFormNameField' hidden>Your Name</label>
        <input 
          id='contactFormNameField' 
          type='text'
          name='name'
          placeholder='Name'
          className={css.input}
        />
      </div>
      <div className={css.field}>
        <label htmlFor='contactFormNameField' hidden>Your Name</label>
        <input 
          id='contactFormNameField' 
          type='text'
          name='email'
          placeholder='Email'
          className={css.input}
        />
      </div>
      <div className={css.field}>
        <label htmlFor='contactFormNameField' hidden>Your Name</label>
        <textarea 
          id='contactFormNameField' 
          placeholder='Your message...'
          name='message'
          className={css.textarea}
        />
      </div>
      <input type="hidden" name="form-name" value="contact"/>
      <input type='hidden' name="honeypot"/>
      <button type='submit' className={['primaryButton',css.submit].join(' ')}>Send it</button>
    </form>
  )
}

const FooterBar = () => {

  return (
    <div className={css.bar}>
      <div className={css.barCopyright}>© 2018 Sherpa Design Co.</div>
    </div>
  )
}

const Footer = props => {
  return (
    <footer id='footer' className={css.footer}>
      <Section name='contact' className={css.contactSection}>
        <div className='wrapSmall'>
          <h2>Got a project in mind?</h2>
          <ContactForm/>
        </div>
      </Section>
      <FooterBar/>
    </footer>
  )
}

export default Footer