'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _cloneChildren = require('../utils/cloneChildren');

var _cloneChildren2 = _interopRequireDefault(_cloneChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DropDownSection = function DropDownSection(props) {
    var className = props.className,
        size = props.size,
        title = props.title,
        children = props.children,
        otherProps = _objectWithoutProperties(props, ['className', 'size', 'title', 'children']);

    var classes = (0, _classnames2.default)(_defineProperty({}, 'mdl-' + size + '-footer__drop-down-section', true), className);

    return _react2.default.createElement(
        'div',
        _extends({ className: classes }, otherProps),
        _react2.default.createElement('input', { className: 'mdl-' + size + '-footer__heading-checkbox', type: 'checkbox', defaultChecked: true }),
        _react2.default.createElement(
            'h1',
            { className: 'mdl-' + size + '-footer__heading' },
            title
        ),
        (0, _cloneChildren2.default)(children, { size: size })
    );
};

DropDownSection.propTypes = {
    className: _react.PropTypes.string,
    size: _react.PropTypes.oneOf(['mini', 'mega']),
    title: _react.PropTypes.node.isRequired
};
DropDownSection.defaultProps = {
    size: 'mega'
};

exports.default = DropDownSection;