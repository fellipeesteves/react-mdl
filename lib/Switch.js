'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _mdlUpgrade = require('./utils/mdlUpgrade');

var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    checked: _react.PropTypes.bool,
    className: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    onChange: _react.PropTypes.func,
    ripple: _react.PropTypes.bool
};

var Switch = function (_React$Component) {
    _inherits(Switch, _React$Component);

    function Switch() {
        _classCallCheck(this, Switch);

        return _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
    }

    _createClass(Switch, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.disabled !== prevProps.disabled) {
                var fnName = this.props.disabled ? 'disable' : 'enable';
                (0, _reactDom.findDOMNode)(this).MaterialSwitch[fnName]();
            }
            if (this.props.checked !== prevProps.checked) {
                var _fnName = this.props.checked ? 'on' : 'off';
                (0, _reactDom.findDOMNode)(this).MaterialSwitch[_fnName]();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                ripple = _props.ripple,
                children = _props.children,
                inputProps = _objectWithoutProperties(_props, ['className', 'ripple', 'children']);

            var classes = (0, _classnames2.default)('mdl-switch mdl-js-switch', {
                'mdl-js-ripple-effect': ripple
            }, className);

            return _react2.default.createElement(
                'label',
                { className: classes },
                _react2.default.createElement('input', _extends({
                    type: 'checkbox',
                    className: 'mdl-switch__input'
                }, inputProps)),
                _react2.default.createElement(
                    'span',
                    { className: 'mdl-switch__label' },
                    children
                )
            );
        }
    }]);

    return Switch;
}(_react2.default.Component);

Switch.propTypes = propTypes;

exports.default = (0, _mdlUpgrade2.default)(Switch, true);