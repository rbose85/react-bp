import React, {createElement as e} from "react";

const Pending = React.createClass({
  render: function () {
    const {target: Component, fallback: Interstitial} = this.props
    return Component ? e(Component) : e(Interstitial)
  }
})

export default Pending
