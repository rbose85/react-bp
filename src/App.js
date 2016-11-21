import React, {createElement as e} from "react"
import Toggler from "./components/Toggler"

const App = React.createClass({
  render: function () {
    return (
      e('div', {className: 'App'},
        e('p', {className: 'App-title'}, 'App World'),
        e(Toggler)
      )
    )
  }
})

export default App
