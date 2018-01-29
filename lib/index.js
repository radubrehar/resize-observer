'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RENDER = _react2.default.createElement('div', {
  style: { display: 'none' },
  'data-name': '@rb/resize-observer-placeholder'
});

var ReactResizeObserver = function (_React$Component) {
  _inherits(ReactResizeObserver, _React$Component);

  function ReactResizeObserver() {
    _classCallCheck(this, ReactResizeObserver);

    return _possibleConstructorReturn(this, (ReactResizeObserver.__proto__ || Object.getPrototypeOf(ReactResizeObserver)).apply(this, arguments));
  }

  _createClass(ReactResizeObserver, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (!ResizeObserver) {
        return;
      }
      var node = (0, _reactDom.findDOMNode)(this);
      var target = node.parentNode;

      this.target = target;

      var observer = new ResizeObserver(function (entries) {
        _this2.props.onObserverResize(entries);

        var first = entries[0];

        if (first) {
          _this2.props.onResize(first.contentRect, entries);
        }
      });

      observer.observe(target);

      this.observer = observer;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      delete this.target;
      if (this.observer) {
        this.observer.unobserve(target);
        if (this.observer.disconnect) {
          this.observer.disconnect();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return RENDER;
    }
  }]);

  return ReactResizeObserver;
}(_react2.default.Component);

var emptyFn = function emptyFn() {};

ReactResizeObserver.defaultProps = {
  onObserverResize: emptyFn,
  onResize: emptyFn
};
ReactResizeObserver.propTypes = {
  onObserverResize: _propTypes2.default.func,
  onResize: _propTypes2.default.func
};

exports.default = ReactResizeObserver;