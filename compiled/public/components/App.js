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
      peers: ['Alex', 'G-Man'],
      requests: ['Chell: Buddies?', 'Wheatley: Buddies?', 'Freeman: Buddies?']
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.setState({
        interval: setInterval(function () {
          return _this2.setState({ requests: _this2.state.requests.concat(obtainRequests(1, _this2.state.peers)) });
        }, 8000)
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      closeInterval(this.state.interval);
    }
  }, {
    key: 'addRequest',
    value: function addRequest(request) {
      var _request$split = request.split(/: /);

      var _request$split2 = _slicedToArray(_request$split, 2);

      var peer = _request$split2[0];
      var query = _request$split2[1];


      if (query === 'Buddies?') {
        this.setState({ peers: _.uniq(this.state.peers.concat(peer)) });
      } else {
        var _query$split = query.split(/[()]/);

        var _query$split2 = _slicedToArray(_query$split, 2);

        var action = _query$split2[0];
        var parameter = _query$split2[1];

        var answer = this.functionLookup(action)(Number(parameter));

        this.setState({ computations: _.uniq(this.state.computations.concat(action + '(' + parameter + ') = ' + this.functionLookup(action)(Number(parameter)) + ' (for ' + peer + ')')) });

        this.saveComputation({ description: request, content: answer });
      }

      this.removeRequest(request);
    }
  }, {
    key: 'removeRequest',
    value: function removeRequest(request) {
      this.setState({ requests: _.without(this.state.requests, request) });
    }
  }, {
    key: 'removePeer',
    value: function removePeer(name) {
      this.setState({
        peers: _.without(this.state.peers, name),
        requests: _.reject(this.state.requests, function (request) {
          return request.split(/: /)[0] === name;
        })
      });
    }
  }, {
    key: 'saveComputation',
    value: function saveComputation(computation) {
      $.ajax({
        url: '/api/computation',
        header: {
          'content-type': 'application/json'
        },
        data: computation,
        type: 'POST',
        success: function success(data) {
          return console.log('Sucessfully wrote to database ', data);
        },
        error: function error(err) {
          return console.error('Dude, you blew up the internet: ', err);
        }
      });
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
              React.createElement(PeerList, { peers: this.state.peers, removePeer: this.removePeer.bind(this) })
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

var obtainRequests = function obtainRequests(n, peers) {
  var functions = ['fib', 'nRooks'];
  var parameters = _.range(5, 10);

  return _.range(n).reduce(function (requests, next) {
    var randomFunction = functions[Math.floor(Math.random() * functions.length)];
    var randomParameter = parameters[Math.floor(Math.random() * parameters.length)];
    var randomPeer = peers[Math.floor(Math.random() * peers.length)];
    return requests.concat(randomPeer + ': ' + randomFunction + '(' + randomParameter + ')');
  }, []);
};

window.App = App;