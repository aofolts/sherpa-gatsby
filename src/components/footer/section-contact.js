import React from 'react'
import css from 'less/footer/section-contact.module.less'

class Form extends React.Component {
  render() {
    const formProps = {
      netlify: 'true',
      action: '/submission',
      id: 'form-contact',
      className: css.form,
      'netlify-honeypot': 'herebotiebotie' 
    }

    return (
      <form {...formProps}>
        <div className={css.contentLeft}>
          <h2 className={css.headline}>Say Hello!</h2>
          <div className={css.field}>
            <label className={css.label} htmlFor='formContactFieldName'>Name</label>
            <input className={css.input} type='text' id='formContactFieldName' required/>
          </div>
          <div className={css.field}>
            <label className={css.label} htmlFor='formContactFieldEmail'>Email</label>
            <input className={css.input} type='email' id='formContactFieldEmail' name='name' required/>
          </div>

          <div className={[css.field,css.fieldCheckbox].join(' ')}>
            <div className={css.inputCheckboxWrap}>
              
              <input className={[css.input,css.inputCheckbox].join(' ')} type='checkbox' id='formContactFieldHuman' name='name' required/>
            </div>
            <label className={[css.label,css.checkboxLabel].join(' ')} htmlFor='formContactFieldHuman'>I am not a robot.</label>
          </div>

          <input type='hidden' name='herebotiebotie'/>
        </div>
        <div className={css.contentRight}>
          <div className={css.message}>
            <div className={css.field}>
              <label className={css.label} htmlFor='formContactFieldMessage'>Your Message</label>
              <textarea className={css.input} type='email' id='formContactFieldMessage' name='message' required rows={5}/>
            </div>
          </div>
          <button className={css.submit} type='submit'>Send Message</button>
        </div>
      </form>
    )
  }
}

const Postcard = () => {
  return (
    <div className={css.postcard}>
      <Form/>
    </div>
  )
}

const SectionContact = () => {
  return (
    <section id='contact' className={css.section}>
      <div className={css.wrap}>
        <Postcard/>
      </div>
    </section>
  )
}

export default SectionContact