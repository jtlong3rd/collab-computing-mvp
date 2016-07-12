'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
      computations: [],
      peers: [],
      requests: ['Befriend Chell', 'Befriend Wheatley', 'fib(6)', 'nRooks(5)']
    };
    return _this;
  }

  _createClass(App, [{
    key: 'addRequest',
    value: function addRequest(request) {
      var _request$split = request.split(/[ ()]/);

      var _request$split2 = _slicedToArray(_request$split, 2);

      var action = _request$split2[0];
      var parameter = _request$split2[1];


      if (action === 'Befriend') {
        this.setState({ peers: _.uniq(this.state.peers.concat(parameter)) });
      } else {
        this.setState({ computations: this.state.computations.concat(action + '(' + parameter + ') = ' + this.functionLookup(action)(Number(parameter))) });
      }

      this.removeRequest(request);
    }
  }, {
    key: 'removeRequest',
    value: function removeRequest(request) {
      this.setState({ requests: _.without(this.state.requests, request) });
    }
  }, {
    key: 'functionLookup',
    value: function functionLookup(name) {
      if (name === 'fib') {
        return fib;
      } else {
        return nRooks;
      }
    }
  }, {
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
              React.createElement(RequestList, { requests: this.state.requests, addRequest: this.addRequest.bind(this), removeRequest: this.removeRequest.bind(this) })
            ),
            React.createElement(
              'div',
              { className: 'col-md-offset-1 col-md-3' },
              React.createElement(ComputationList, { computations: this.state.computations })
            ),
            React.createElement(
              'div',
              { className: 'col-md-offset-1 col-md-3' },
              React.createElement(PeerList, { peers: this.state.peers })
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

var fib = function fib(n) {
  var secLast = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
  var last = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  if (n === 1) {
    return secLast;
  }

  if (n === 2) {
    return last;
  }

  return fib(n - 1, last, secLast + last);
};

var nRooks = function nRooks(n) {
  var prev = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

  if (n === 0) {
    return prev;
  }

  return nRooks(n - 1, n * prev);
};

window.App = App;