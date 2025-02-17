'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _clamp = require('clamp');

var _clamp2 = _interopRequireDefault(_clamp);

var _shadows = require('../utils/shadows');

var _shadows2 = _interopRequireDefault(_shadows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
    align: _react.PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch']),
    className: _react.PropTypes.string,
    col: _react.PropTypes.number,
    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element, _react.PropTypes.func]),
    phone: _react.PropTypes.number,
    tablet: _react.PropTypes.number,
    offset: _react.PropTypes.number,
    offsetDesktop: _react.PropTypes.number,
    offsetTablet: _react.PropTypes.number,
    offsetPhone: _react.PropTypes.number,
    hideDesktop: _react.PropTypes.bool,
    hidePhone: _react.PropTypes.bool,
    hideTablet: _react.PropTypes.bool,
    shadow: _react.PropTypes.number
};

function isDefined(data) {
    return typeof data !== 'undefined';
}

var Cell = function Cell(props) {
    var _classNames;

    var align = props.align,
        className = props.className,
        children = props.children,
        col = props.col,
        phone = props.phone,
        tablet = props.tablet,
        component = props.component,
        hideDesktop = props.hideDesktop,
        hidePhone = props.hidePhone,
        hideTablet = props.hideTablet,
        shadow = props.shadow,
        offset = props.offset,
        offsetDesktop = props.offsetDesktop,
        offsetTablet = props.offsetTablet,
        offsetPhone = props.offsetPhone,
        otherProps = _objectWithoutProperties(props, ['align', 'className', 'children', 'col', 'phone', 'tablet', 'component', 'hideDesktop', 'hidePhone', 'hideTablet', 'shadow', 'offset', 'offsetDesktop', 'offsetTablet', 'offsetPhone']);

    var hasShadow = isDefined(shadow);
    var shadowLevel = (0, _clamp2.default)(shadow || 0, 0, _shadows2.default.length - 1);

    var classes = (0, _classnames2.default)('mdl-cell', (_classNames = {}, _defineProperty(_classNames, 'mdl-cell--' + col + '-col', isDefined(col)), _defineProperty(_classNames, 'mdl-cell--' + phone + '-col-phone', isDefined(phone)), _defineProperty(_classNames, 'mdl-cell--' + tablet + '-col-tablet', isDefined(tablet)), _defineProperty(_classNames, 'mdl-cell--' + align, isDefined(align)), _defineProperty(_classNames, 'mdl-cell--' + offset + '-offset', isDefined(offset)), _defineProperty(_classNames, 'mdl-cell--' + offsetDesktop + '-offset-desktop', isDefined(offsetDesktop)), _defineProperty(_classNames, 'mdl-cell--' + offsetTablet + '-offset-tablet', isDefined(offsetTablet)), _defineProperty(_classNames, 'mdl-cell--' + offsetPhone + '-offset-phone', isDefined(offsetPhone)), _defineProperty(_classNames, 'mdl-cell--hide-desktop', hideDesktop), _defineProperty(_classNames, 'mdl-cell--hide-phone', hidePhone), _defineProperty(_classNames, 'mdl-cell--hide-tablet', hideTablet), _defineProperty(_classNames, _shadows2.default[shadowLevel], hasShadow), _classNames), className);

    return _react2.default.createElement(component || 'div', _extends({
        className: classes
    }, otherProps), children);
};

Cell.propTypes = propTypes;

exports.default = Cell;