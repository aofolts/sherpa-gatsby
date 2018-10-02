import React from 'react'
import css from '../less/footer.module.less'
import Section from './section'
import Wrap from './wrap'

const ContactForm = () => {

  return (
    <form id='contactForm' className={css.contactForm} name='contact' netlify action='/submission'>
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
        <Wrap width='small'>
          <h2>Got a project in mind?</h2>
          <ContactForm/>
        </Wrap>
      </Section>
      <FooterBar/>
    </footer>
  )
}

export default Footer