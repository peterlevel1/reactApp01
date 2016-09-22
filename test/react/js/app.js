import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';

var App = React.createClass({
  render: () => {
    return (
      <div>
        <h1> !!!this is [ --- a react app111111 --- ] ! yes ! hura!!!!</h1>
        <Hello title="hello world !"/>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
