import React, {createElement as e} from "react";
import Async from "./Async";

const Toggler = React.createClass({
  getInitialState: function () {
    return {clicked: null}
  },

  clickHandler: function () {
    console.log(`---EVER BEEN CLICKED?---`)
    const {clicked} = this.state
    this.setState({clicked: !clicked})
  },
  toggledElement: function (bool) {
    // "Critical dependency: the request of a dependency is an expression", this
    // warning message from Webpack will display unless the argument passed into
    // the `System.import()` function is a literal string.
    return e(Async, {
      load: () => bool ?
        System.import('./Home') :
        System.import('./About')
    })
  },
  render: function () {
    const {clicked} = this.state
    return (
      e('div', {className: 'Toggler'},
        e('button', {onClick: this.clickHandler}, 'click me!'),

        // render nothing if loading `App` for the first time...
        clicked === null ? clicked : this.toggledElement(clicked)
      )
    )
  }
})

export default Toggler
