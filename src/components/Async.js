import React, {createElement as e} from "react";
import Pending from "./Pending";
import Spinner from "./Spinner";

const Async = React.createClass({
  getInitialState: function () {
    return {mod: null}
  },

  componentWillUpdate: function (nextProps) {
    // reset `Async` state if updated `props.load` value is new
    if (this.state.mod && (nextProps.load !== this.props.load)) {
      this.setState(this.getInitialState())
    }
  },

  asyncImport: function () {
    const {load} = this.props

    load()
      .then(mod => {
        // artificially exaggerate the duration of the async fetch
        setTimeout(() => {
          this.setState({mod})
        }, 2000)
      })
      .catch(err => {
        console.log(`err: ${err}`)
      })
  },

  render: function () {
    console.log(`render() ... load: ${this.props.load}`)
    const {mod} = this.state
    const target = mod && mod.default

    // fetch "target" component if not already available on through `this.state`
    if (!target) {
      this.asyncImport()
    }

    return e(Pending, {target, fallback: Spinner})
  }
})

export default Async
