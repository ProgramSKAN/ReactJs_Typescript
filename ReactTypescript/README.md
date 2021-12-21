> npx create-react-app rts --template typescript

# props

- use interface to define waht props child component expects to receive
- typescript doesn't know that we're making react component, so it thinks that child will not have there properties like propTypes,displayName,defaultProps,contextTypes which actually has for react component.so use React.FC{PropType}
