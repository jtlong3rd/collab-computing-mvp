'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

    _this.state = {
      computations: ['Solve ALL THE N-QUEENS', 'Annoy fun-fun-function'],
      peers: ['Chell', 'Wheatley'],
      requests: ['I can haz n-queens for n=100?', 'fib(232) plz?']
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'jumbotron' },
          React.createElement(
            'h1',
            { className: 'text-md-center' },
            'CollabCompingFTW'
          )
        ),
        React.createElement(
          'div',
          { className: 'jumbotron' },
          React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
              'div',
              { className: 'col-md-3' },
              React.createElement(ComputationList, { computations: this.state.computations })
            ),
            React.createElement(
              'div',
              { className: 'col-md-offset-1 col-md-3' },
              React.createElement(PeerList, { peers: this.state.peers })
            ),
            React.createElement(
              'div',
              { className: 'col-md-offset-1 col-md-3' },
              React.createElement(RequestList, { requests: this.state.requests })
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;