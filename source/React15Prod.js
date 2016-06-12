const React = require('react/dist/react.min')
const ReactDOM = require('react-dom/dist/react-dom.min')

if (typeof window === 'object') {
  window.React15 = {
    React: React,
    ReactDOM: ReactDOM
  }
}
