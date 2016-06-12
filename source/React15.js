const React = require('react')
const ReactDOM = require('react-dom')

if (typeof window === 'object') {
  window.React15 = {
    React: React,
    ReactDOM: ReactDOM
  }
}
