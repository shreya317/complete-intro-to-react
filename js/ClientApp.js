/* global React ReactDOM */

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1(null, 'Check out this component!')
      )
    )
  }
})

var MyTitleFact = React.createFactory(MyTitle)

ReactDOM.render(
  div(null,
    MyTitleFact(null),
    MyTitleFact(null),
    MyTitleFact(null)
), document.getElementById('app'))