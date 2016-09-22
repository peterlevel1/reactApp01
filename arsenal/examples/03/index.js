// jsx within array
// interpolate
// render with dom
(function () {
  var arr = [
    <h1>Hello world!</h1>,
    <h2>React is awesome</h2>
  ];
  ReactDOM.render(
    <div>{arr}</div>,
    document.getElementById('example-01')
  );
})();

// jsx
// render with component
(function () {
  var Hello = React.createClass({
    render: function () {
      return (
        <div>
          <h1>{this.props.name}</h1>
        </div>
      );
    }
  });

  ReactDOM.render(
    <Hello name="hello world ! haha !"/>,
    document.getElementById('example-02')
  );
})();

// children
// render with component which contains children
// iterate children by React.Children.map
(function () {
  var DemoChildren01 = React.createClass({
    render: function () {

      // span to be wrapped by li
      var interpolates = React.Children.map(this.props.children, function (child) {
        return <li>{child}</li>
      });
      return (
        <div>
          {interpolates}
        </div>
      );
    }
  });

  ReactDOM.render(
    <DemoChildren01>
      <span>haha</span>
      <span>children tests</span>
    </DemoChildren01>,
    document.getElementById('example-03')
  );
})();

// default props
(function () {
  var DemoDefaultProps = React.createClass({
    getDefaultProps: function () {
      return {
        title: 'default props'
      };
    },
    render: function () {
      return (
        <h1>{this.props.title}</h1>
      );
    }
  });

  ReactDOM.render(
    <DemoDefaultProps/>,
    document.getElementById('example-04')
  );
})();

// override props
(function () {
  var DemoOverrideProps = React.createClass({
    getDefaultProps: function () {
      return {
        title: 'default props 02'
      };
    },
    render: function () {
      return (
        <h1>{this.props.title}</h1>
      );
    }
  });

  ReactDOM.render(
    <DemoOverrideProps title="haha: default props overridden"/>,
    document.getElementById('example-04')
  );
})();

// propTypes with string
// used for checking params from others
(function () {
  var DemoOverrideProps = React.createClass({
    propTypes: {
      title: React.PropTypes.string.isRequired
    },
    getDefaultProps: function () {
      return {
        title: '1'
      };
    },
    render: function () {
      return (
        <h1>{this.props.title}</h1>
      );
    }
  });

  ReactDOM.render(
    <DemoOverrideProps/>,
    document.getElementById('example-05')
  );
})();

// demo ref
(function () {
  var DemoRef = React.createClass({
    handleClick: function () {
      this.refs.input01.focus();
    },
    render: function () {
      return (
        <div>
          <input type="text" ref="input01"/>
          <button onClick={this.handleClick}>haha</button>
        </div>
      );
    }
  });

  ReactDOM.render(
    <DemoRef/>,
    document.getElementById('example-06')
  );
})();

// state
// getInitialState
(function () {
  var DemoState01 = React.createClass({
    getInitialState: function () {
      return {
        liked: false
      }
    },
    handleClick: function () {
      this.setState({
        liked: !this.state.liked
      })
    },
    render: function () {
      var text = this.state.liked
        ? 'like'
        : 'do not like';

      return (
        <p onClick={this.handleClick}>
          you {text} this. click to toggle !
        </p>
      );
    }
  });

  ReactDOM.render(
    <DemoState01/>,
    document.getElementById('example-07')
  );
})();


// input demo with state
(function () {
  var DemoStateInput = React.createClass({
    getInitialState: function () {
      return {
        value: ""
      }
    },
    handleChange: function (e) {
      this.setState({
        value: e.target.value
      })
    },
    render: function () {
      return (
        <div>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <p>{this.state.value}</p>
        </div>
      );
    }
  });

  ReactDOM.render(
    <DemoStateInput/>,
    document.getElementById('example-08')
  );
})();

// component did mount
//
(function () {
  var DemoDidMount = React.createClass({
    getInitialState: function () {
      return {
        opacity: 1.0
      }
    },
    componentDidMount: function (e) {
      var self = this;
      var timer = setInterval(function () {

        self.state.opacity -= 0.05

        if (self.state.opacity < 0.1) {
          self.state.opacity = 1;
        }

        self.setState({ opacity: self.state.opacity });

      }, 1000);
    },
    render: function () {
      return (
        <h1 style={{opacity: this.state.opacity}}>
          hello {this.props.name}
        </h1>
      );
    }
  });

  ReactDOM.render(
    <DemoDidMount name="haha"/>,
    document.getElementById('example-08')
  );
})();
