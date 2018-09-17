import React,{createContext} from 'react'

export const HeaderContext = createContext({})

export function withHeaderContext(Component) {
  return function(props) {
    return (
      <HeaderContext.Consumer>
        {context => <Component {...props} headerContext={context}/>}
      </HeaderContext.Consumer>
    )
  }
}