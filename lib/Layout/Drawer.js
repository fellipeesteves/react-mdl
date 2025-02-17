'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Drawer = function Drawer(props) {
    var className = props.className,
        title = props.title,
        children = props.children,
        otherProps = _objectWithoutProperties(props, ['className', 'title', 'children']);

    var classes = (0, _classnames2.default)('mdl-layout__drawer', className);

    return _react2.default.createElement(
        'div',
        _extends({ className: classes }, otherProps),
        title ? _react2.default.createElement(
            'span',
            { className: 'mdl-layout-title' },
            title
        ) : null,
        children
    );
};
Drawer.propTypes = {
    className: _react.PropTypes.string,
    title: _react.PropTypes.node
};

exports.default = Drawer;