import React from 'react'
import PropTypes from 'prop-types'

const FormContext = React.createContext()

export function withFormContext(Component) {
  return props => (
    <FormContext.Consumer>
      {context => <Component {...props} Context={context}/>}
    </FormContext.Consumer>
  )
}

class Form extends Conponent {

  render() {
    const {
      children,
      className,
      id
    } = props

    const context = {
      id
    }

    return (
      <FormContext.Provider value={context}>
        <form {...{id,className}}>
          {children}
        </form>
      </FormContext.Provider>
    )
  }
}

Form.propTypes = {
  id: PropTypes.string.isRequired
}

// export const Field = ({
//   className,
//   children,
//   element,
//   form
// }) => {
//   const fieldClasses = [
//     css.field,
//     className
//   ].join(' ')

//   if (!element.id) {
//     element.id = element.name + form.name
//   }

//   return (
//     <div className={fieldClasses}>
//       <label for={element.id}></label>
//       {children}
//     </div>
//   )
// }

// export const TextField = props => {
//   const inputProps = pick(props,[
//     'required',
//     'name',
//     'placeholder',
//     'label'
//   ])

//   return (
//     <Field name=''>
//       <Label/>
//       <Input/>
//     </Field>
//   )
// }