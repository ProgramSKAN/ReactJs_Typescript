> npx create-react-app rts --template typescript

# props

- use interface to define waht props child component expects to receive
- typescript doesn't know that we're making react component, so it thinks that child will not have there properties like propTypes,displayName,defaultProps,contextTypes which actually has for react component.so use React.FC{PropType}

---

# redux

> npx create-react-app redux-ts --template typescript
> npm install --save-exact @types/react-redux@7.1.15 axios@0.21.1 react-redux@7.2.2 redux@4.0.5 redux-thunk@2.3.0
