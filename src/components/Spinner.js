import React, {createElement as e} from "react";

const Spinner = React.createClass({
  render: function () {
    return e('div', {className: 'Spinner'}, 'Loading Spinner &hellip;')
  }
})

export default Spinner
