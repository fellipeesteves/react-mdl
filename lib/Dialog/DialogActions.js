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

var DialogActions = function DialogActions(props) {
    var className = props.className,
        fullWidth = props.fullWidth,
        children = props.children,
        otherProps = _objectWithoutProperties(props, ['className', 'fullWidth', 'children']);

    var classes = (0, _classnames2.default)('mdl-dialog__actions', {
        'mdl-dialog__actions--full-width': fullWidth
    }, className);

    return _react2.default.createElement(
        'div',
        _extends({ className: classes }, otherProps),
        children
    );
};

DialogActions.propTypes = {
    className: _react.PropTypes.string,
    fullWidth: _react.PropTypes.bool
};

exports.default = DialogActions;