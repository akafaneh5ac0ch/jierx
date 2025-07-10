webpackJsonp([126,138,163,202,203,227],{

/***/ "./components/switch/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Switch = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/switch/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/switch/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Switch = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Switch, _Intact);

    function Switch() {
        _classCallCheck(this, Switch);

        return _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
    }

    _createClass(Switch, [{
        key: 'defaults',
        value: function defaults() {
            return {
                name: undefined,
                on: undefined,
                off: undefined,
                value: false,
                trueValue: true,
                falseValue: false,
                width: undefined,
                height: undefined,
                size: 'default',
                disabled: false,

                _dragging: false
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            this._move = this._move.bind(this);
            this._dragEnd = this._dragEnd.bind(this);
        }
    }, {
        key: '_dragStart',
        value: function _dragStart(e) {
            if (e.which !== 1) return;

            this._x = e.clientX;
            this._height = this.refs.bar.clientHeight;
            this._width = this.refs.bar.clientWidth;
            this._maxWidth = this.element.clientWidth;

            document.addEventListener('mousemove', this._move);
            document.addEventListener('mouseup', this._dragEnd);
        }
    }, {
        key: '_move',
        value: function _move(e) {
            this.set('_dragging', true);

            var left = e.clientX - this._x;
            var width = Math.min(Math.max(this._height, this._width + left), this._maxWidth);
            this.refs.bar.style.width = width + 'px';
        }
    }, {
        key: '_dragEnd',
        value: function _dragEnd(e) {
            this.set('_dragging', false);

            var bar = this.refs.bar;

            // treat mousedown -> mouseup as click
            if (this._x === e.clientX) {
                this._toggle();
            } else {
                var percent = (bar.clientWidth - this._height / 2) / this._maxWidth;

                if (!this.isChecked()) {
                    if (percent >= 0.5) {
                        this.check();
                    }
                } else if (percent < 0.5) {
                    this.uncheck();
                }
                if (!this.isChecked() && this.get('width') && this.get('height')) {
                    // if is set width and height
                    bar.style.width = this.get('height') + 'px';
                } else {
                    bar.style.width = '';
                }
            }

            document.removeEventListener('mousemove', this._move);
            document.removeEventListener('mouseup', this._dragEnd);
        }
    }, {
        key: '_toggle',
        value: function _toggle() {
            if (this.get('disabled')) return;

            if (this.isChecked()) {
                this.uncheck();
            } else {
                this.check();
            }
        }
    }, {
        key: 'isChecked',
        value: function isChecked() {
            return this.get('value') === this.get('trueValue');
        }
    }, {
        key: 'check',
        value: function check() {
            this.set('value', this.get('trueValue'));
        }
    }, {
        key: 'uncheck',
        value: function uncheck() {
            this.set('value', this.get('falseValue'));
        }
    }, {
        key: '_handleClick',
        value: function _handleClick(e) {
            e.stopPropagation();
        }
    }, {
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);

    return Switch;
}(_intact2.default), _class2.propTypes = {
    disabled: Boolean
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Switch;
exports.Switch = Switch;

/***/ }),

/***/ "./components/switch/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/switch/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/switch/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/switch/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/switch/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj;

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    var _require = __webpack_require__("./components/utils.js"),
        addStyle = _require.addStyle;

    var _self$get = self.get(),
        className = _self$get.className,
        style = _self$get.style,
        children = _self$get.children,
        name = _self$get.name,
        on = _self$get.on,
        off = _self$get.off,
        value = _self$get.value,
        trueValue = _self$get.trueValue,
        falseValue = _self$get.falseValue,
        width = _self$get.width,
        height = _self$get.height,
        size = _self$get.size,
        disabled = _self$get.disabled,
        _dragging = _self$get._dragging;

    var classNameObj = (_classNameObj = {
        'k-switch': true
    }, _defineProperty(_classNameObj, className, className), _defineProperty(_classNameObj, 'k-checked', value === trueValue), _defineProperty(_classNameObj, 'k-' + size, true), _defineProperty(_classNameObj, 'k-disabled', disabled), _defineProperty(_classNameObj, 'k-dragging', _dragging), _classNameObj);

    var onStyle = void 0;
    var offStyle = void 0;
    var barStyle = void 0;
    if (width && height) {
        style = addStyle(style, {
            width: width + 'px',
            height: height + 'px',
            borderRadius: height + 'px',
            lineHeight: height + 'px'
        });
        var textLeft = height / 3;
        var textWidth = width - height - textLeft;
        onStyle = {
            left: textLeft + 'px',
            width: textWidth + 'px'
        };
        offStyle = {
            left: height + 'px',
            width: textWidth + 'px'
        };
        barStyle = {
            width: value === trueValue ? '100%' : height + 'px'
        };
    }

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-click': function () {
            try {
                return [self._toggle][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [h('input', { 'type': 'checkbox', 'name': function () {
            try {
                return [name][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'value': function () {
            try {
                return [trueValue][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), checked: _detectCheckboxChecked(self, 'value', function () {
            try {
                return [trueValue][0];
            } catch (e) {
                _e(e);
            }
        }.call(this)), 'ev-change': function evChange(__e) {
            _setCheckboxModel(self, 'value', function () {
                try {
                    return [trueValue][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), function () {
                try {
                    return [falseValue][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), __e);
        } }, null, null, null, function (i) {
        widgets['input'] = i;
    }), function () {
        try {
            return [off || blocks.off][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', { 'style': function () {
            try {
                return [offStyle][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, (_blocks.off = function (parent) {
        return function () {
            try {
                return [off][0];
            } catch (e) {
                _e(e);
            }
        }.call(this);
    }) && (__blocks.off = function (parent) {
        var self = this;
        return blocks.off ? blocks.off.call(this, function () {
            return _blocks.off.call(self, parent);
        }) : _blocks.off.call(this, parent);
    }) && __blocks.off.call(this), 'k-off') : undefined, h('div', { 'style': function () {
            try {
                return [barStyle][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [function () {
        try {
            return [on || blocks.on][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', { 'style': function () {
            try {
                return [onStyle][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, (_blocks.on = function (parent) {
        return function () {
            try {
                return [on][0];
            } catch (e) {
                _e(e);
            }
        }.call(this);
    }) && (__blocks.on = function (parent) {
        var self = this;
        return blocks.on ? blocks.on.call(this, function () {
            return _blocks.on.call(self, parent);
        }) : _blocks.on.call(this, parent);
    }) && __blocks.on.call(this), 'k-on') : undefined, h('div', null, h('div', { 'ev-click': function () {
            try {
                return [self._handleClick][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-mousedown': function () {
            try {
                return [self._dragStart][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, h('img', { 'src': 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' }), 'k-handle', null, function (i) {
        widgets['handle'] = i;
    }), 'k-wrapper')], 'k-bar', null, function (i) {
        widgets['bar'] = i;
    })], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/switch/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-switch {\n  display: inline-block;\n  vertical-align: middle;\n  background: #eee;\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n}\n.k-switch input {\n  opacity: 0;\n  position: absolute;\n}\n.k-switch .k-bar {\n  position: absolute;\n  text-align: right;\n  overflow: hidden;\n}\n.k-switch .k-wrapper {\n  display: inline-block;\n  position: relative;\n  z-index: 1;\n  border-radius: 100%;\n}\n.k-switch .k-bar,\n.k-switch .k-wrapper {\n  height: 100%;\n  background: #eee;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.k-switch .k-handle {\n  border-radius: 100%;\n  background: #fff;\n  height: 100%;\n  cursor: pointer;\n  -webkit-transition: left 0.25s ease-in-out;\n  transition: left 0.25s ease-in-out;\n  display: inline-block;\n}\n.k-switch .k-handle img {\n  height: 100%;\n  visibility: hidden;\n}\n.k-switch .k-on,\n.k-switch .k-off {\n  position: absolute;\n  font-size: 0.857142857142857rem;\n  color: #fff;\n  text-align: center;\n}\n.k-switch.k-dragging .k-bar,\n.k-switch.k-dragging .k-wrapper {\n  background: #0a5eee;\n  -webkit-transition: background 0.25s ease-in-out;\n  transition: background 0.25s ease-in-out;\n}\n.k-switch.k-default {\n  width: 3.428571428571428rem;\n  height: 1.714285714285714rem;\n  line-height: 1.714285714285714rem;\n  border-radius: 1.714285714285714rem;\n}\n.k-switch.k-default .k-bar {\n  width: 1.714285714285714rem;\n  border-radius: 1.714285714285714rem;\n}\n.k-switch.k-default .k-wrapper {\n  padding: 0.142857142857143rem;\n}\n.k-switch.k-default .k-on,\n.k-switch.k-default .k-off {\n  width: 1.142857142857143rem;\n}\n.k-switch.k-default .k-on {\n  left: 0.571428571428571rem;\n}\n.k-switch.k-default .k-off {\n  left: 1.714285714285714rem;\n}\n.k-switch.k-small {\n  width: 2.571428571428572rem;\n  height: 1.285714285714286rem;\n  line-height: 1.285714285714286rem;\n  border-radius: 1.285714285714286rem;\n}\n.k-switch.k-small .k-bar {\n  width: 1.285714285714286rem;\n  border-radius: 1.285714285714286rem;\n}\n.k-switch.k-small .k-wrapper {\n  padding: 0.142857142857143rem;\n}\n.k-switch.k-small .k-on,\n.k-switch.k-small .k-off {\n  width: 0.857142857142857rem;\n}\n.k-switch.k-small .k-on {\n  left: 0.428571428571429rem;\n}\n.k-switch.k-small .k-off {\n  left: 1.285714285714286rem;\n}\n.k-switch.k-mini {\n  width: 1.714285714285714rem;\n  height: 0.857142857142857rem;\n  line-height: 0.857142857142857rem;\n  border-radius: 0.857142857142857rem;\n}\n.k-switch.k-mini .k-bar {\n  width: 0.857142857142857rem;\n  border-radius: 0.857142857142857rem;\n}\n.k-switch.k-mini .k-wrapper {\n  padding: 0.071428571428571rem;\n}\n.k-switch.k-mini .k-on,\n.k-switch.k-mini .k-off {\n  width: 0.571428571428571rem;\n}\n.k-switch.k-mini .k-on {\n  left: 0.285714285714286rem;\n}\n.k-switch.k-mini .k-off {\n  left: 0.857142857142857rem;\n}\n.k-switch.k-checked .k-bar,\n.k-switch.k-checked .k-wrapper {\n  background: #0a5eee;\n}\n.k-switch.k-checked .k-bar {\n  width: 100%;\n}\n.k-switch.k-disabled {\n  background: #e6e6e6;\n  cursor: not-allowed;\n}\n.k-switch.k-disabled .k-bar,\n.k-switch.k-disabled .k-wrapper {\n  background: #e6e6e6;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/form/demos/basic/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example.index-36 .k-form-item > .k-label {\n  width: 150px;\n}\n.example.index-36 .k-slider,\n.example.index-36 .k-select {\n  width: 300px;\n}\n.example.index-36 .k-radio,\n.example.index-36 .k-checkbox {\n  margin-right: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/form/demos/custom/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example.index-37 .k-form-item .k-form-item {\n  margin-bottom: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./site/components/form recursive demos.*index.js$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./demos/basic/index.js": "./site/components/form/demos/basic/index.js",
	"./demos/custom/index.js": "./site/components/form/demos/custom/index.js",
	"./demos/label/index.js": "./site/components/form/demos/label/index.js",
	"./demos/variable/index.js": "./site/components/form/demos/variable/index.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./site/components/form recursive demos.*index.js$";

/***/ }),

/***/ "./site/components/form/demos/basic/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/form/demos/basic/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/form/demos/basic/index.vdt");

var _index3 = _interopRequireDefault(_index2);

__webpack_require__("./site/components/form/demos/basic/index.styl");

var _message = __webpack_require__("./components/message/index.js");

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(_default, _Intact);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    _createClass(_default, [{
        key: 'defaults',
        value: function defaults() {
            return {
                model: {
                    checkbox: []
                }
            };
        }
    }, {
        key: 'submit',
        value: function submit() {
            _message2.default.success('验证通过，开始提交');
            console.log(this.get('model'));
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.refs.form.reset();
            console.log(this.get('model'));
        }
    }]);

    return _default;
}(_intact2.default), _class2.template = _index3.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;

/***/ }),

/***/ "./site/components/form/demos/basic/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/form/demos/basic/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/form/demos/basic/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/form/demos/basic/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./site/components/form/demos/basic/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  return h(_form.Form, { 'ev-submit': function () {
      try {
        return [self.submit][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': [h(_form.FormItem, { 'label': 'Input', 'model': 'model.input', 'rules': function () {
        try {
          return [{ required: true }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'children': h(_input.Input, { 'children': null, '_context': this, value: _getModel(self, 'model.input'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.input', __n);
        } }), '_context': this }), h(_form.FormItem, { 'label': 'Select', 'model': 'model.select', 'rules': function () {
        try {
          return [{ required: true }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'messages': function () {
        try {
          return [{ required: '必须选择' }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'children': h(_select.Select, { 'children': [h(_select.Option, { 'value': 'Javascript', 'children': 'Javascript', '_context': this }), h(_select.Option, { 'value': 'PHP', 'children': 'PHP', '_context': this }), h(_select.Option, { 'value': 'C++', 'children': 'C++', '_context': this })], '_context': this, value: _getModel(self, 'model.select'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.select', __n);
        } }), '_context': this }), h(_form.FormItem, { 'label': 'Checkbox', 'model': 'model.checkbox', 'rules': function () {
        try {
          return [{ required: true, maxLength: 2 }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'messages': function () {
        try {
          return [{ required: '必须选择' }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'children': [h(_checkbox.Checkbox, { 'trueValue': 'Javascript', 'children': 'Javascript', '_context': this, value: _getModel(self, 'model.checkbox'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.checkbox', __n);
        } }), h(_checkbox.Checkbox, { 'trueValue': 'PHP', 'children': 'PHP', '_context': this, value: _getModel(self, 'model.checkbox'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.checkbox', __n);
        } }), h(_checkbox.Checkbox, { 'trueValue': 'C++', 'children': 'C++', '_context': this, value: _getModel(self, 'model.checkbox'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.checkbox', __n);
        } })], '_context': this }), h(_form.FormItem, { 'label': 'Radio', 'model': 'model.radio', 'rules': function () {
        try {
          return [{ required: true }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'messages': function () {
        try {
          return [{ required: '必须选择' }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'children': [h(_radio.Radio, { 'trueValue': 'Javascript', 'children': 'Javascript', '_context': this, value: _getModel(self, 'model.radio'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.radio', __n);
        } }), h(_radio.Radio, { 'trueValue': 'PHP', 'children': 'PHP', '_context': this, value: _getModel(self, 'model.radio'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.radio', __n);
        } }), h(_radio.Radio, { 'trueValue': 'C++', 'children': 'C++', '_context': this, value: _getModel(self, 'model.radio'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.radio', __n);
        } })], '_context': this }), h(_form.FormItem, { 'label': 'Radio ButtonGroup', 'model': 'model.buttonGroup', 'rules': function () {
        try {
          return [{ required: true }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'messages': function () {
        try {
          return [{ required: '必须选择' }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'children': h(_button.ButtonGroup, { 'checkType': 'radio', 'children': [h(_button.Button, { 'value': 'Javascript', 'children': 'Javascript', '_context': this }), h(_button.Button, { 'value': 'PHP', 'children': 'PHP', '_context': this }), h(_button.Button, { 'value': 'C++', 'children': 'C++', '_context': this })], '_context': this, value: _getModel(self, 'model.buttonGroup'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.buttonGroup', __n);
        } }), '_context': this }), h(_form.FormItem, { 'label': 'Switch', 'children': h(_switch.Switch, { 'children': null, '_context': this, value: _getModel(self, 'model.switch'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.switch', __n);
        } }), '_context': this }), h(_form.FormItem, { 'label': 'Slider', 'children': h(_slider.Slider, { 'isShowInput': function () {
          try {
            return [false][0];
          } catch (e) {
            _e(e);
          }
        }.call(this), 'children': null, '_context': this, value: _getModel(self, 'model.slider'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.slider', __n);
        } }), '_context': this }), h(_form.FormItem, { 'label': 'Textarea', 'model': 'model.textarea', 'children': h(_input.Input, { 'type': 'textarea', 'children': null, '_context': this, value: _getModel(self, 'model.textarea'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.textarea', __n);
        } }), '_context': this }), h(_form.FormItem, { 'label': 'Password', 'model': 'model.password', 'rules': function () {
        try {
          return [{ required: true }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'children': h(_input.Input, { 'type': 'password', 'children': null, '_context': this, value: _getModel(self, 'model.password'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.password', __n);
        } }), '_context': this }), h(_form.FormItem, { 'label': 'Confirm Password', 'model': 'model.confirmPassword', 'rules': function () {
        try {
          return [{ required: true, equalTo: 'model.password' }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'children': h(_input.Input, { 'type': 'password', 'children': null, '_context': this, value: _getModel(self, 'model.confirmPassword'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.confirmPassword', __n);
        } }), '_context': this }), h(_form.FormItem, { 'children': [h(_button.Button, { 'type': 'primary', 'htmlType': 'submit', 'children': '提交', '_context': this }), h(_button.Button, { 'style': 'margin-left: 20px', 'ev-click': function () {
          try {
            return [self.reset][0];
          } catch (e) {
            _e(e);
          }
        }.call(this), 'children': '重置', '_context': this })], '_context': this })], '_context': this }, null, null, null, function (i) {
    widgets['form'] = i;
  });
};

var _form = __webpack_require__("./components/form/index.js");

var _input = __webpack_require__("./components/input/index.js");

var _select = __webpack_require__("./components/select/index.js");

var _checkbox = __webpack_require__("./components/checkbox/index.js");

var _radio = __webpack_require__("./components/radio/index.js");

var _button = __webpack_require__("./components/button/index.js");

var _switch = __webpack_require__("./components/switch/index.js");

var _slider = __webpack_require__("./components/slider/index.js");

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/form/demos/custom/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/form/demos/custom/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/form/demos/custom/index.vdt");

var _index3 = _interopRequireDefault(_index2);

__webpack_require__("./site/components/form/demos/custom/index.styl");

var _form = __webpack_require__("./components/form/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

// 添加全局规则
_form.Form.addMethod('letter', function (value, item, param) {
    console.log('arguments', value, item, param);
    return (/^[a-z|A-Z]+$/.test(value)
    );
}, '只能输入字母');

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(_default, _Intact);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    _createClass(_default, [{
        key: 'defaults',
        value: function defaults() {
            return {
                descriptions: ['']
            };
        }
    }, {
        key: 'add',
        value: function add() {
            this.set('descriptions', this.get('descriptions').concat(''));
        }
    }, {
        key: 'delete',
        value: function _delete(index) {
            var descriptions = this.get('descriptions').slice(0);
            descriptions.splice(index, 1);
            this.set('descriptions', descriptions);
        }
    }]);

    return _default;
}(_intact2.default), _class2.template = _index3.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;

/***/ }),

/***/ "./site/components/form/demos/custom/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/form/demos/custom/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/form/demos/custom/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/form/demos/custom/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./site/components/form/demos/custom/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    return h(_form.Form, { 'children': h(_form.FormItem, { 'label': '描述', 'children': [_Vdt.utils.map(function () {
                try {
                    return [self.get('descriptions')][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), function (value, key) {
                return h(_form.FormItem, { 'model': function () {
                        try {
                            return ['descriptions.' + key][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'hideLabel': function () {
                        try {
                            return [true][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'rules': function () {
                        try {
                            return [{
                                required: true,
                                // 自定义全局规则
                                letter: true,
                                // 自定义局部规则，所有描述必须不重复
                                unique: function unique(value) {
                                    var count = 0;
                                    self.get('descriptions').find(function (item) {
                                        if (item === value) count++;
                                        return count > 1;
                                    });

                                    // 直接返回错误文案，或者也可以单独定义messages为{unique: '不能相同'}
                                    return count === 1 || '不能相同';
                                }
                            }][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'children': h(_input.Input, { 'children': null, '_context': this, value: _getModel(self, function () {
                            try {
                                return ['descriptions.' + key][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this)), 'ev-$change:value': function ev$changeValue(__c, __n) {
                            _setModel(self, function () {
                                try {
                                    return ['descriptions.' + key][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), __n);
                        } }), '_context': this, '_blocks': function (blocks) {
                        var _blocks = {},
                            __blocks = extend({}, blocks);
                        return (_blocks.append = function (parent) {
                            return h(_button.Button, { 'ev-click': function () {
                                    try {
                                        return [self.delete.bind(self, key)][0];
                                    } catch (e) {
                                        _e(e);
                                    }
                                }.call(this), 'children': '删除', '_context': this });
                        }) && (__blocks.append = function (parent) {
                            var self = this;
                            return blocks.append ? blocks.append.call(this, function () {
                                return _blocks.append.call(self, parent);
                            }) : _blocks.append.call(this, parent);
                        }) && __blocks;
                    }.call(this, {}) });
            }, this), h(_button.Button, { 'ev-click': function () {
                    try {
                        return [self.add][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'children': '添加', '_context': this })], '_context': this }), '_context': this });
};

var _form = __webpack_require__("./components/form/index.js");

var _input = __webpack_require__("./components/input/index.js");

var _button = __webpack_require__("./components/button/index.js");

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/form/demos/label/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/form/demos/label/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/form/demos/label/index.vdt");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(_default, _Intact);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    return _default;
}(_intact2.default), _class2.template = _index3.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;

/***/ }),

/***/ "./site/components/form/demos/label/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    return h(_form.Form, { 'children': [h(_form.FormItem, { 'children': h(_input.Input, { 'children': null, '_context': this }), '_context': this, '_blocks': function (blocks) {
                var _blocks = {},
                    __blocks = extend({}, blocks);
                return (_blocks.label = function (parent) {
                    return [h('i', { 'style': 'color: red' }, '*'), ' 姓名'];
                }) && (__blocks.label = function (parent) {
                    var self = this;
                    return blocks.label ? blocks.label.call(this, function () {
                        return _blocks.label.call(self, parent);
                    }) : _blocks.label.call(this, parent);
                }) && __blocks;
            }.call(this, {}) }), h(_form.FormItem, { 'children': h(_input.Input, { 'children': null, '_context': this }), '_context': this, '_blocks': function (blocks) {
                var _blocks = {},
                    __blocks = extend({}, blocks);
                return (_blocks.label = function (parent) {
                    return [h('i', null, null, 'ion-person'), ' 姓名'];
                }) && (__blocks.label = function (parent) {
                    var self = this;
                    return blocks.label ? blocks.label.call(this, function () {
                        return _blocks.label.call(self, parent);
                    }) : _blocks.label.call(this, parent);
                }) && __blocks;
            }.call(this, {}) })], '_context': this });
};

var _form = __webpack_require__("./components/form/index.js");

var _input = __webpack_require__("./components/input/index.js");

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/form/demos/variable/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/form/demos/variable/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/form/demos/variable/index.vdt");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(_default, _Intact);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    return _default;
}(_intact2.default), _class2.template = _index3.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;

/***/ }),

/***/ "./site/components/form/demos/variable/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

    _Vdt || (_Vdt = Vdt);
    obj || (obj = {});
    blocks || (blocks = {});
    var h = _Vdt.miss.h,
        hc = _Vdt.miss.hc,
        hu = _Vdt.miss.hu,
        widgets = this && this.widgets || {},
        _blocks = {},
        __blocks = {},
        __u = _Vdt.utils,
        extend = __u.extend,
        _e = __u.error,
        _className = __u.className,
        __o = __u.Options,
        _getModel = __o.getModel,
        _setModel = __o.setModel,
        _setCheckboxModel = __u.setCheckboxModel,
        _detectCheckboxChecked = __u.detectCheckboxChecked,
        _setSelectModel = __u.setSelectModel,
        self = this.data,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    return h(_form.Form, { 'children': h(_form.FormItem, { 'label': '姓名', 'children': h(_grid.Row, { 'gutter': '16', 'children': [h(_grid.Col, { 'span': '12', 'children': h(_form.FormItem, { 'hideLabel': function () {
                            try {
                                return [true][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this), 'model': 'firstName', 'rules': function () {
                            try {
                                return [{
                                    // 该规则取值，随着lastName的存在与否而改变
                                    required: self.get('lastName')
                                }][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this), 'children': h(_input.Input, { 'children': null, '_context': this, value: _getModel(self, 'firstName'), 'ev-$change:value': function ev$changeValue(__c, __n) {
                                _setModel(self, 'firstName', __n);
                            } }), '_context': this }), '_context': this }), h(_grid.Col, { 'span': '12', 'children': h(_form.FormItem, { 'hideLabel': function () {
                            try {
                                return [true][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this), 'model': 'lastName', 'rules': function () {
                            try {
                                return [{
                                    // 该规则取值，随着firstName的存在与否而改变
                                    required: self.get('firstName')
                                }][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this), 'children': h(_input.Input, { 'children': null, '_context': this, value: _getModel(self, 'lastName'), 'ev-$change:value': function ev$changeValue(__c, __n) {
                                _setModel(self, 'lastName', __n);
                            } }), '_context': this }), '_context': this })], '_context': this }), '_context': this }), '_context': this });
};

var _form = __webpack_require__("./components/form/index.js");

var _input = __webpack_require__("./components/input/index.js");

var _grid = __webpack_require__("./components/grid/index.js");

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/form/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _article = __webpack_require__("./site/src/components/article/index.js");

var _article2 = _interopRequireDefault(_article);

var _index = __webpack_require__("./site/components/form/index.json");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var r = __webpack_require__("./site/components/form recursive demos.*index.js$");
var demos = r.keys().map(r);

var _default = function (_Article) {
    _inherits(_default, _Article);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    _createClass(_default, [{
        key: 'defaults',
        value: function defaults() {
            return _extends({}, _get(_default.prototype.__proto__ || Object.getPrototypeOf(_default.prototype), 'defaults', this).call(this), _index2.default, { demos: demos });
        }
    }]);

    return _default;
}(_article2.default);

exports.default = _default;
module.exports = exports['default'];

/***/ }),

/***/ "./site/components/form/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"表单","category":"组件","order":0},"catalogs":[],"contents":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1><h2 id='header-FormItem'>FormItem</h2><div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>model</td>\n<td>指定需要验证的属性名称</td>\n<td><code>String</code></td>\n<td><code>undefined</code></td>\n</tr>\n<tr>\n<td>rules</td>\n<td>指定验证规则</td>\n<td><code>Object</code></td>\n<td><code>{}</code></td>\n</tr>\n<tr>\n<td>messages</td>\n<td>指定验证失败时错误提示文案</td>\n<td><code>Object</code></td>\n<td><code>{}</code></td>\n</tr>\n<tr>\n<td>classNames</td>\n<td>指定验证失败时添加的className</td>\n<td><code>Object</code></td>\n<td><code>{}</code></td>\n</tr>\n<tr>\n<td>label</td>\n<td>指定表单每一项前面展示的标题</td>\n<td><code>String</code></td>\n<td><code>undefined</code></td>\n</tr>\n<tr>\n<td>htmlFor</td>\n<td>指定<code>label</code>的<code>for</code>属性</td>\n<td><code>String</code></td>\n<td><code>undefined</code></td>\n</tr>\n<tr>\n<td>hideLabel</td>\n<td>是否隐藏<code>label</code>，默认会展示<code>label</code>，即使该属性为空，也会展示占位元素</td>\n<td><code>Boolean</code></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n                    </table>\n                </div><h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1><h2 id='header-FormItem'>FormItem</h2><div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>名称</th>\n<th>说明</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>label</td>\n<td>扩展前面的标题<code>label</code></td>\n</tr>\n<tr>\n<td>content</td>\n<td>扩展后面的内容，也可以使用<code>children</code>代替</td>\n</tr>\n<tr>\n<td>append</td>\n<td>往后面追加的内容</td>\n</tr>\n</tbody>\n                    </table>\n                </div><h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1><h2 id='header-Form'>Form</h2><div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>事件名</th>\n<th>说明</th>\n<th>参数</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>submit</td>\n<td>当表单提交并且所有规则都验证通过时触发</td>\n<td>1. <code>Event</code> <br /> 2. <code>Form</code>实例</td>\n</tr>\n</tbody>\n                    </table>\n                </div><h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1><h2 id='header-Form'>Form</h2><div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>方法名</th>\n<th>说明</th>\n<th>参数</th>\n<th>返回值</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>validate</td>\n<td>验证表单所有规则</td>\n<td>-</td>\n<td><code>Promise</code>: <code>.then(valid =&gt; {})</code>，<code>valid</code>为<code>true</code>验证成功，否则失败</td>\n</tr>\n<tr>\n<td>reset</td>\n<td>重置表单</td>\n<td>-</td>\n<td><code>undefined</code></td>\n</tr>\n</tbody>\n                    </table>\n                </div><h1 id='header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95'>静态方法</h1><h2 id='header-Form'>Form</h2><p><code>Form</code>还提供了一个静态方法，用于全局添加验证规则，通过<code>Form.addMethod()</code>调用</p>\n<div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>方法名</th>\n<th>说明</th>\n<th>参数</th>\n<th>返回值</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>addMethod</td>\n<td>添加全局验证规则，这样在所有<code>FormItem</code>中如果需要使用该规则，只需要在<code>rules</code>中写上该规则名即可</td>\n<td>1. <code>name</code> 指定规则名称，不能重复 <br /> 2. <code>method</code> 指定该规则的验证函数，该函数返回<code>true</code>或<code>false</code>来标识验证成功或失败，该函数将传入3个参数：1. 当前验证的值，2. 当前验证的<code>FormItem</code>实例，3. 当前规则的参数 <br /> 3. <code>message</code> 验证失败时的错误提示文案，该值可以为字符串或者函数，如果为函数，传入参数同<code>method</code>，用于个性化文案提示 <br /> 4. <code>className</code> 验证失败时添加的类名</td>\n<td><code>undefined</code></td>\n</tr>\n</tbody>\n                    </table>\n                </div>","codes":[{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":40,"sideBars":{"组件":[{"title":"面包屑","path":"components/breadcrumb/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Breadcrumb","path":"#header-Breadcrumb","level":2,"content":"<h2 id='header-Breadcrumb'>Breadcrumb</h2>","text":"Breadcrumb","children":[]},{"title":"BreadcrumbItem","path":"#header-BreadcrumbItem","level":2,"content":"<h2 id='header-BreadcrumbItem'>BreadcrumbItem</h2>","text":"BreadcrumbItem","children":[]}]}]},{"title":"按钮","path":"components/button/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Button","path":"#header-Button","level":2,"content":"<h2 id='header-Button'>Button</h2>","text":"Button","children":[]},{"title":"ButtonGroup","path":"#header-ButtonGroup","level":2,"content":"<h2 id='header-ButtonGroup'>ButtonGroup</h2>","text":"ButtonGroup","children":[]}]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Button","path":"#header-Button","level":2,"content":"<h2 id='header-Button'>Button</h2>","text":"Button","children":[]}]}]},{"title":"复选框","path":"components/checkbox/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"日期选择","path":"components/datepicker/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"弹窗","path":"components/dialog/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"下拉菜单","path":"components/dropdown/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Dropdown","path":"#header-Dropdown","level":2,"content":"<h2 id='header-Dropdown'>Dropdown</h2>","text":"Dropdown","children":[]},{"title":"DropdownItem","path":"#header-DropdownItem","level":2,"content":"<h2 id='header-DropdownItem'>DropdownItem</h2>","text":"DropdownItem","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":2,"content":"<h2 id='header-%E4%BA%8B%E4%BB%B6'>事件</h2>","text":"事件","children":[]},{"title":"DropdownItem","path":"#header-DropdownItem","level":2,"content":"<h2 id='header-DropdownItem'>DropdownItem</h2>","text":"DropdownItem","children":[]}]}]},{"title":"可编辑文本","path":"components/editable/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"表单","path":"components/form/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"FormItem","path":"#header-FormItem","level":2,"content":"<h2 id='header-FormItem'>FormItem</h2>","text":"FormItem","children":[]}]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[{"title":"FormItem","path":"#header-FormItem","level":2,"content":"<h2 id='header-FormItem'>FormItem</h2>","text":"FormItem","children":[]}]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]},{"title":"静态方法","path":"#header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95'>静态方法</h1>","text":"静态方法","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]}]},{"title":"栅格","path":"components/grid/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Row","path":"#header-Row","level":2,"content":"<h2 id='header-Row'>Row</h2>","text":"Row","children":[]},{"title":"Col","path":"#header-Col","level":2,"content":"<h2 id='header-Col'>Col</h2>","text":"Col","children":[]}]}]},{"title":"输入框","path":"components/input/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"全局提示","path":"components/message/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"静态方法","path":"#header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95'>静态方法</h1>","text":"静态方法","children":[]}]},{"title":"分页","path":"components/pagination/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Pagination","path":"#header-Pagination","level":2,"content":"<h2 id='header-Pagination'>Pagination</h2>","text":"Pagination","children":[]}]}]},{"title":"进度条","path":"components/progress/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"单选框","path":"components/radio/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"选择框","path":"components/select/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Select","path":"#header-Select","level":2,"content":"<h2 id='header-Select'>Select</h2>","text":"Select","children":[]},{"title":"Option","path":"#header-Option","level":2,"content":"<h2 id='header-Option'>Option</h2>","text":"Option","children":[]}]}]},{"title":"滑块","path":"components/slider/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"数字输入框","path":"components/spinner/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"步骤条","path":"components/steps/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Steps","path":"#header-Steps","level":2,"content":"<h2 id='header-Steps'>Steps</h2>","text":"Steps","children":[]},{"title":"Step","path":"#header-Step","level":2,"content":"<h2 id='header-Step'>Step</h2>","text":"Step","children":[]}]}]},{"title":"表格","path":"components/table/index.md","children":[{"title":"表格属性Table","path":"#header-%E8%A1%A8%E6%A0%BC%E5%B1%9E%E6%80%A7Table","level":1,"content":"<h1 id='header-%E8%A1%A8%E6%A0%BC%E5%B1%9E%E6%80%A7Table'>表格属性Table</h1>","text":"表格属性Table","children":[]}]},{"title":"穿梭框","path":"components/transfer/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]}]},"highlighted":[{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N3aXRjaC9pbmRleC5zdHlsP2UzNDkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zd2l0Y2gvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3dpdGNoL2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2Zvcm0vZGVtb3MvYmFzaWMvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9jdXN0b20vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZm9ybSBkZW1vcy4qaW5kZXguanMkIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL2Jhc2ljL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL2Jhc2ljL2luZGV4LnN0eWw/YTAyNiIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9iYXNpYy9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2Zvcm0vZGVtb3MvY3VzdG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL2N1c3RvbS9pbmRleC5zdHlsP2NlM2UiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2Zvcm0vZGVtb3MvY3VzdG9tL2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9sYWJlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9sYWJlbC9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2Zvcm0vZGVtb3MvdmFyaWFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2Zvcm0vZGVtb3MvdmFyaWFibGUvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9mb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9mb3JtL2luZGV4Lmpzb24iXSwibmFtZXMiOlsiU3dpdGNoIiwidGVtcGxhdGUiLCJuYW1lIiwidW5kZWZpbmVkIiwib24iLCJvZmYiLCJ2YWx1ZSIsInRydWVWYWx1ZSIsImZhbHNlVmFsdWUiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJkaXNhYmxlZCIsIl9kcmFnZ2luZyIsIl9tb3ZlIiwiYmluZCIsIl9kcmFnRW5kIiwiZSIsIndoaWNoIiwiX3giLCJjbGllbnRYIiwiX2hlaWdodCIsInJlZnMiLCJiYXIiLCJjbGllbnRIZWlnaHQiLCJfd2lkdGgiLCJjbGllbnRXaWR0aCIsIl9tYXhXaWR0aCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXQiLCJsZWZ0IiwiTWF0aCIsIm1pbiIsIm1heCIsInN0eWxlIiwiX3RvZ2dsZSIsInBlcmNlbnQiLCJpc0NoZWNrZWQiLCJjaGVjayIsInVuY2hlY2siLCJnZXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcFR5cGVzIiwiQm9vbGVhbiIsIm9iaiIsIl9WZHQiLCJibG9ja3MiLCIkY2FsbGVlIiwiVmR0IiwiaCIsIm1pc3MiLCJoYyIsImh1Iiwid2lkZ2V0cyIsIl9ibG9ja3MiLCJfX2Jsb2NrcyIsIl9fdSIsInV0aWxzIiwiZXh0ZW5kIiwiX2UiLCJlcnJvciIsIl9jbGFzc05hbWUiLCJjbGFzc05hbWUiLCJfX28iLCJPcHRpb25zIiwiX2dldE1vZGVsIiwiZ2V0TW9kZWwiLCJfc2V0TW9kZWwiLCJzZXRNb2RlbCIsIl9zZXRDaGVja2JveE1vZGVsIiwic2V0Q2hlY2tib3hNb2RlbCIsIl9kZXRlY3RDaGVja2JveENoZWNrZWQiLCJkZXRlY3RDaGVja2JveENoZWNrZWQiLCJfc2V0U2VsZWN0TW9kZWwiLCJzZXRTZWxlY3RNb2RlbCIsInNlbGYiLCJkYXRhIiwic2NvcGUiLCJBbmltYXRlIiwicGFyZW50IiwiX3N1cGVyIiwicmVxdWlyZSIsImFkZFN0eWxlIiwiY2hpbGRyZW4iLCJjbGFzc05hbWVPYmoiLCJvblN0eWxlIiwib2ZmU3R5bGUiLCJiYXJTdHlsZSIsImJvcmRlclJhZGl1cyIsImxpbmVIZWlnaHQiLCJ0ZXh0TGVmdCIsInRleHRXaWR0aCIsImNhbGwiLCJjaGVja2VkIiwiX19lIiwiaSIsIl9oYW5kbGVDbGljayIsIl9kcmFnU3RhcnQiLCJkZWZhdWx0IiwibW9kZWwiLCJjaGVja2JveCIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsInJlc2V0Iiwic3VibWl0IiwicmVxdWlyZWQiLCJfX2MiLCJfX24iLCJtYXhMZW5ndGgiLCJlcXVhbFRvIiwiYWRkTWV0aG9kIiwiaXRlbSIsInBhcmFtIiwidGVzdCIsImRlc2NyaXB0aW9ucyIsImNvbmNhdCIsImluZGV4Iiwic2xpY2UiLCJzcGxpY2UiLCJtYXAiLCJrZXkiLCJsZXR0ZXIiLCJ1bmlxdWUiLCJjb3VudCIsImZpbmQiLCJhcHBlbmQiLCJkZWxldGUiLCJhZGQiLCJsYWJlbCIsInIiLCJkZW1vcyIsImtleXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLE0sV0FDaEIsaUJBQU9DLFFBQVAsRTs7Ozs7Ozs7Ozs7bUNBR1U7QUFDUCxtQkFBTztBQUNIQyxzQkFBTUMsU0FESDtBQUVIQyxvQkFBSUQsU0FGRDtBQUdIRSxxQkFBS0YsU0FIRjtBQUlIRyx1QkFBTyxLQUpKO0FBS0hDLDJCQUFXLElBTFI7QUFNSEMsNEJBQVksS0FOVDtBQU9IQyx1QkFBT04sU0FQSjtBQVFITyx3QkFBUVAsU0FSTDtBQVNIUSxzQkFBTSxT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SUFBNEksRUFBRSw0SUFBNEksRUFBRSxFQUFFLGtFQUFrRSwySUFBMkksMElBQTBJLEVBQUUsOEpBQThKLEVBQUUsNElBQTRJLEVBQUUsOEpBQThKLEVBQUUsRUFBRSxFQUFFLG1FQUFtRSw0SUFBNEksRUFBRSw0SUFBNEksRUFBRSxFQUFFLDREQUE0RCwySUFBMkksMElBQTBJLEVBQUUsRUFBRSxnS0FBZ0ssMElBQTBJLEVBQUUsRUFBRSwySUFBMkksc0hBQXNILEVBQUUsRUFBRSwySUFBMkksc0hBQXNILEVBQUUsRUFBRSxxTEFBcUwsc0hBQXNILEVBQUUsRUFBRSxFQUFFLDREQUE0RCwySUFBMkksaUhBQWlILEVBQUUsaUhBQWlILEVBQUUsRUFBRSxFQUFFLDhEQUE4RCw0SUFBNEksRUFBRSxpS0FBaUssRUFBRSw0SUFBNEksRUFBRSxFQUFFLGlFQUFpRSw0SUFBNEksRUFBRSxzTEFBc0wsRUFBRSxFQUFFLGtFQUFrRSw0SUFBNEksRUFBRSwySUFBMkksb0pBQW9KLEVBQUUsRUFBRSxFQUFFLGlFQUFpRSw0SUFBNEksRUFBRSxFQUFFLDhEQUE4RCw0SUFBNEksRUFBRSxFQUFFLCtEQUErRCwySUFBMkksZ0lBQWdJLEVBQUUsZ0lBQWdJLEVBQUUsRUFBRSxFQUFFLDhEQUE4RCw0SUFBNEksRUFBRSxFQUFFLGtFQUFrRSw0SUFBNEksRUFBRSxFQUFFLDhEQUE4RCwySUFBMkksMkhBQTJILEVBQUUsc0hBQXNILEVBQUUsRUFBRSxFQUFFLDZEQUE2RCwrTUFBK00sRUFBRSxFQUFFLGlFQUFpRSw0SUFBNEksRUFBRSxFQUFFLGlCQUFpQiwrTEFBK0wsZ0pBQWdKLDZQQUE2UCw2RkFBNkYsR0FBRyxlQUFlLEUiLCJmaWxlIjoic3RhdGljL2NodW5rLzMwNjkzNDVkMzE2NTgyZTU4ZjlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpdGNoIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiB0ZW1wbGF0ZTsgfVxuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBvbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgb2ZmOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgICAgICB0cnVlVmFsdWU6IHRydWUsXG4gICAgICAgICAgICBmYWxzZVZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNpemU6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcblxuICAgICAgICAgICAgX2RyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLl9tb3ZlID0gdGhpcy5fbW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9kcmFnRW5kID0gdGhpcy5fZHJhZ0VuZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9kcmFnU3RhcnQoZSkge1xuICAgICAgICBpZiAoZS53aGljaCAhPT0gMSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuX3ggPSBlLmNsaWVudFg7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IHRoaXMucmVmcy5iYXIuY2xpZW50SGVpZ2h0O1xuICAgICAgICB0aGlzLl93aWR0aCA9IHRoaXMucmVmcy5iYXIuY2xpZW50V2lkdGg7XG4gICAgICAgIHRoaXMuX21heFdpZHRoID0gdGhpcy5lbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX21vdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fZHJhZ0VuZCk7XG4gICAgfVxuXG4gICAgX21vdmUoZSkge1xuICAgICAgICB0aGlzLnNldCgnX2RyYWdnaW5nJywgdHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgbGVmdCA9IGUuY2xpZW50WCAtIHRoaXMuX3g7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gTWF0aC5taW4oXG4gICAgICAgICAgICBNYXRoLm1heCh0aGlzLl9oZWlnaHQsIHRoaXMuX3dpZHRoICsgbGVmdCksXG4gICAgICAgICAgICB0aGlzLl9tYXhXaWR0aFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnJlZnMuYmFyLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgIH1cblxuICAgIF9kcmFnRW5kKGUpIHtcbiAgICAgICAgdGhpcy5zZXQoJ19kcmFnZ2luZycsIGZhbHNlKTtcblxuICAgICAgICBjb25zdCBiYXIgPSB0aGlzLnJlZnMuYmFyO1xuXG4gICAgICAgIC8vIHRyZWF0IG1vdXNlZG93biAtPiBtb3VzZXVwIGFzIGNsaWNrXG4gICAgICAgIGlmICh0aGlzLl94ID09PSBlLmNsaWVudFgpIHtcbiAgICAgICAgICAgIHRoaXMuX3RvZ2dsZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IChiYXIuY2xpZW50V2lkdGggLSB0aGlzLl9oZWlnaHQgLyAyKSAvIHRoaXMuX21heFdpZHRoO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDaGVja2VkKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAocGVyY2VudCA+PSAwLjUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVjaygpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBlcmNlbnQgPCAwLjUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuY2hlY2soKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDaGVja2VkKCkgJiYgdGhpcy5nZXQoJ3dpZHRoJykgJiYgdGhpcy5nZXQoJ2hlaWdodCcpKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgaXMgc2V0IHdpZHRoIGFuZCBoZWlnaHRcbiAgICAgICAgICAgICAgICBiYXIuc3R5bGUud2lkdGggPSB0aGlzLmdldCgnaGVpZ2h0JykgKyAncHgnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiYXIuc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX21vdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fZHJhZ0VuZCk7XG4gICAgfVxuXG4gICAgX3RvZ2dsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHRoaXMuaXNDaGVja2VkKCkpIHtcbiAgICAgICAgICAgIHRoaXMudW5jaGVjaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGVjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNDaGVja2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3ZhbHVlJykgPT09IHRoaXMuZ2V0KCd0cnVlVmFsdWUnKTtcbiAgICB9XG5cbiAgICBjaGVjaygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgdGhpcy5nZXQoJ3RydWVWYWx1ZScpKTtcbiAgICB9XG5cbiAgICB1bmNoZWNrKCkge1xuICAgICAgICB0aGlzLnNldCgndmFsdWUnLCB0aGlzLmdldCgnZmFsc2VWYWx1ZScpKTtcbiAgICB9XG5cbiAgICBfaGFuZGxlQ2xpY2soZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtTd2l0Y2h9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zd2l0Y2gvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3N3aXRjaC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL2NvbXBvbmVudHMvc3dpdGNoL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxMjYgMTM4IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5jb25zdCB7YWRkU3R5bGV9ID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubGV0IHtcbiAgICBjbGFzc05hbWUsIHN0eWxlLCBjaGlsZHJlbixcbiAgICBuYW1lLCBvbiwgb2ZmLCB2YWx1ZSxcbiAgICB0cnVlVmFsdWUsIGZhbHNlVmFsdWUsIHdpZHRoLFxuICAgIGhlaWdodCwgc2l6ZSwgZGlzYWJsZWQsIF9kcmFnZ2luZ1xufSA9IHNlbGYuZ2V0KCk7XG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay1zd2l0Y2gnOiB0cnVlLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXG4gICAgJ2stY2hlY2tlZCc6IHZhbHVlID09PSB0cnVlVmFsdWUsIFxuICAgIFtgay0ke3NpemV9YF06IHRydWUsXG4gICAgJ2stZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAnay1kcmFnZ2luZyc6IF9kcmFnZ2luZyxcbn07XG5cblxubGV0IG9uU3R5bGU7XG5sZXQgb2ZmU3R5bGU7XG5sZXQgYmFyU3R5bGU7XG5pZiAod2lkdGggJiYgaGVpZ2h0KSB7XG4gICAgc3R5bGUgPSBhZGRTdHlsZShzdHlsZSwge1xuICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXG4gICAgICAgIGJvcmRlclJhZGl1czogYCR7aGVpZ2h0fXB4YCxcbiAgICAgICAgbGluZUhlaWdodDogYCR7aGVpZ2h0fXB4YCxcbiAgICB9KTtcbiAgICBjb25zdCB0ZXh0TGVmdCA9IGhlaWdodCAvIDM7XG4gICAgY29uc3QgdGV4dFdpZHRoID0gd2lkdGggLSBoZWlnaHQgLSB0ZXh0TGVmdDtcbiAgICBvblN0eWxlID0ge1xuICAgICAgICBsZWZ0OiBgJHt0ZXh0TGVmdH1weGAsXG4gICAgICAgIHdpZHRoOiBgJHt0ZXh0V2lkdGh9cHhgLFxuICAgIH07XG4gICAgb2ZmU3R5bGUgPSB7XG4gICAgICAgIGxlZnQ6IGAke2hlaWdodH1weGAsXG4gICAgICAgIHdpZHRoOiBgJHt0ZXh0V2lkdGh9cHhgLFxuICAgIH07XG4gICAgYmFyU3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiB2YWx1ZSA9PT0gdHJ1ZVZhbHVlID8gJzEwMCUnIDogYCR7aGVpZ2h0fXB4YCxcbiAgICB9O1xufVxuXG5yZXR1cm4gaCgnZGl2JywgeydzdHlsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzdHlsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fdG9nZ2xlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBbaCgnaW5wdXQnLCB7J3R5cGUnOiAnY2hlY2tib3gnLCAnbmFtZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtuYW1lIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZVZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGNoZWNrZWQ6IF9kZXRlY3RDaGVja2JveENoZWNrZWQoc2VsZiwgJ3ZhbHVlJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RydWVWYWx1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgJ2V2LWNoYW5nZSc6IGZ1bmN0aW9uKF9fZSkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2V0Q2hlY2tib3hNb2RlbChzZWxmLCAndmFsdWUnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZVZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtmYWxzZVZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIF9fZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2lucHV0J10gPSBpfSksIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtvZmYgfHwgYmxvY2tzLm9mZiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgeydzdHlsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtvZmZTdHlsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgKF9ibG9ja3Mub2ZmID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtvZmYgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKTt9KSAmJiAoX19ibG9ja3Mub2ZmID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLm9mZiA/IGJsb2Nrcy5vZmYuY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzLm9mZi5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3Mub2ZmLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzLm9mZi5jYWxsKHRoaXMpLCAnay1vZmYnKSA6IHVuZGVmaW5lZCwgaCgnZGl2JywgeydzdHlsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtiYXJTdHlsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtvbiB8fCBibG9ja3Mub24gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIHsnc3R5bGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbb25TdHlsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgKF9ibG9ja3Mub24gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW29uIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyk7fSkgJiYgKF9fYmxvY2tzLm9uID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLm9uID8gYmxvY2tzLm9uLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5vbi5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3Mub24uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3Mub24uY2FsbCh0aGlzKSwgJ2stb24nKSA6IHVuZGVmaW5lZCwgaCgnZGl2JywgbnVsbCwgaCgnZGl2Jywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9oYW5kbGVDbGljayBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtbW91c2Vkb3duJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX2RyYWdTdGFydCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgaCgnaW1nJywgeydzcmMnOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3J30pLCAnay1oYW5kbGUnLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snaGFuZGxlJ10gPSBpfSksICdrLXdyYXBwZXInKV0sICdrLWJhcicsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWydiYXInXSA9IGl9KV0sIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3N3aXRjaC9pbmRleC52ZHQiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5rLXN3aXRjaCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uay1zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLmstc3dpdGNoIC5rLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5rLXN3aXRjaCAuay13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG4uay1zd2l0Y2ggLmstYmFyLFxcbi5rLXN3aXRjaCAuay13cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuLmstc3dpdGNoIC5rLWhhbmRsZSB7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbGVmdCAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGxlZnQgMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5rLXN3aXRjaCAuay1oYW5kbGUgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmstc3dpdGNoIC5rLW9uLFxcbi5rLXN3aXRjaCAuay1vZmYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAwLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uay1zd2l0Y2guay1kcmFnZ2luZyAuay1iYXIsXFxuLmstc3dpdGNoLmstZHJhZ2dpbmcgLmstd3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kOiAjMGE1ZWVlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuLmstc3dpdGNoLmstZGVmYXVsdCB7XFxuICB3aWR0aDogMy40Mjg1NzE0Mjg1NzE0MjhyZW07XFxuICBoZWlnaHQ6IDEuNzE0Mjg1NzE0Mjg1NzE0cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzE0Mjg1NzE0Mjg1NzE0cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMS43MTQyODU3MTQyODU3MTRyZW07XFxufVxcbi5rLXN3aXRjaC5rLWRlZmF1bHQgLmstYmFyIHtcXG4gIHdpZHRoOiAxLjcxNDI4NTcxNDI4NTcxNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNzE0Mjg1NzE0Mjg1NzE0cmVtO1xcbn1cXG4uay1zd2l0Y2guay1kZWZhdWx0IC5rLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMC4xNDI4NTcxNDI4NTcxNDNyZW07XFxufVxcbi5rLXN3aXRjaC5rLWRlZmF1bHQgLmstb24sXFxuLmstc3dpdGNoLmstZGVmYXVsdCAuay1vZmYge1xcbiAgd2lkdGg6IDEuMTQyODU3MTQyODU3MTQzcmVtO1xcbn1cXG4uay1zd2l0Y2guay1kZWZhdWx0IC5rLW9uIHtcXG4gIGxlZnQ6IDAuNTcxNDI4NTcxNDI4NTcxcmVtO1xcbn1cXG4uay1zd2l0Y2guay1kZWZhdWx0IC5rLW9mZiB7XFxuICBsZWZ0OiAxLjcxNDI4NTcxNDI4NTcxNHJlbTtcXG59XFxuLmstc3dpdGNoLmstc21hbGwge1xcbiAgd2lkdGg6IDIuNTcxNDI4NTcxNDI4NTcycmVtO1xcbiAgaGVpZ2h0OiAxLjI4NTcxNDI4NTcxNDI4NnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI4NTcxNDI4NTcxNDI4NnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEuMjg1NzE0Mjg1NzE0Mjg2cmVtO1xcbn1cXG4uay1zd2l0Y2guay1zbWFsbCAuay1iYXIge1xcbiAgd2lkdGg6IDEuMjg1NzE0Mjg1NzE0Mjg2cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMS4yODU3MTQyODU3MTQyODZyZW07XFxufVxcbi5rLXN3aXRjaC5rLXNtYWxsIC5rLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMC4xNDI4NTcxNDI4NTcxNDNyZW07XFxufVxcbi5rLXN3aXRjaC5rLXNtYWxsIC5rLW9uLFxcbi5rLXN3aXRjaC5rLXNtYWxsIC5rLW9mZiB7XFxuICB3aWR0aDogMC44NTcxNDI4NTcxNDI4NTdyZW07XFxufVxcbi5rLXN3aXRjaC5rLXNtYWxsIC5rLW9uIHtcXG4gIGxlZnQ6IDAuNDI4NTcxNDI4NTcxNDI5cmVtO1xcbn1cXG4uay1zd2l0Y2guay1zbWFsbCAuay1vZmYge1xcbiAgbGVmdDogMS4yODU3MTQyODU3MTQyODZyZW07XFxufVxcbi5rLXN3aXRjaC5rLW1pbmkge1xcbiAgd2lkdGg6IDEuNzE0Mjg1NzE0Mjg1NzE0cmVtO1xcbiAgaGVpZ2h0OiAwLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG4gIGxpbmUtaGVpZ2h0OiAwLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuODU3MTQyODU3MTQyODU3cmVtO1xcbn1cXG4uay1zd2l0Y2guay1taW5pIC5rLWJhciB7XFxuICB3aWR0aDogMC44NTcxNDI4NTcxNDI4NTdyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG59XFxuLmstc3dpdGNoLmstbWluaSAuay13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDAuMDcxNDI4NTcxNDI4NTcxcmVtO1xcbn1cXG4uay1zd2l0Y2guay1taW5pIC5rLW9uLFxcbi5rLXN3aXRjaC5rLW1pbmkgLmstb2ZmIHtcXG4gIHdpZHRoOiAwLjU3MTQyODU3MTQyODU3MXJlbTtcXG59XFxuLmstc3dpdGNoLmstbWluaSAuay1vbiB7XFxuICBsZWZ0OiAwLjI4NTcxNDI4NTcxNDI4NnJlbTtcXG59XFxuLmstc3dpdGNoLmstbWluaSAuay1vZmYge1xcbiAgbGVmdDogMC44NTcxNDI4NTcxNDI4NTdyZW07XFxufVxcbi5rLXN3aXRjaC5rLWNoZWNrZWQgLmstYmFyLFxcbi5rLXN3aXRjaC5rLWNoZWNrZWQgLmstd3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kOiAjMGE1ZWVlO1xcbn1cXG4uay1zd2l0Y2guay1jaGVja2VkIC5rLWJhciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmstc3dpdGNoLmstZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5rLXN3aXRjaC5rLWRpc2FibGVkIC5rLWJhcixcXG4uay1zd2l0Y2guay1kaXNhYmxlZCAuay13cmFwcGVyIHtcXG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXI/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vY29tcG9uZW50cy9zd2l0Y2gvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9jb21wb25lbnRzL3N3aXRjaC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMTI2IDEzOCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmV4YW1wbGUuaW5kZXgtMzYgLmstZm9ybS1pdGVtID4gLmstbGFiZWwge1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG4uZXhhbXBsZS5pbmRleC0zNiAuay1zbGlkZXIsXFxuLmV4YW1wbGUuaW5kZXgtMzYgLmstc2VsZWN0IHtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuLmV4YW1wbGUuaW5kZXgtMzYgLmstcmFkaW8sXFxuLmV4YW1wbGUuaW5kZXgtMzYgLmstY2hlY2tib3gge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL2Jhc2ljL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vc2l0ZS9jb21wb25lbnRzL2Zvcm0vZGVtb3MvYmFzaWMvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDEyNiAxMzgiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5leGFtcGxlLmluZGV4LTM3IC5rLWZvcm0taXRlbSAuay1mb3JtLWl0ZW0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlcj97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9jdXN0b20vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9jdXN0b20vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDEyNiAxNjMiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZGVtb3MvYmFzaWMvaW5kZXguanNcIjogXCIuL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL2Jhc2ljL2luZGV4LmpzXCIsXG5cdFwiLi9kZW1vcy9jdXN0b20vaW5kZXguanNcIjogXCIuL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL2N1c3RvbS9pbmRleC5qc1wiLFxuXHRcIi4vZGVtb3MvbGFiZWwvaW5kZXguanNcIjogXCIuL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL2xhYmVsL2luZGV4LmpzXCIsXG5cdFwiLi9kZW1vcy92YXJpYWJsZS9pbmRleC5qc1wiOiBcIi4vc2l0ZS9jb21wb25lbnRzL2Zvcm0vZGVtb3MvdmFyaWFibGUvaW5kZXguanNcIlxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zaXRlL2NvbXBvbmVudHMvZm9ybSByZWN1cnNpdmUgZGVtb3MuKmluZGV4LmpzJFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL2Zvcm0gZGVtb3MuKmluZGV4LmpzJFxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL2NvbXBvbmVudHMvZm9ybSByZWN1cnNpdmUgZGVtb3MuKmluZGV4LmpzJFxuLy8gbW9kdWxlIGNodW5rcyA9IDEyNiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBkYXRhfSBmcm9tICcuL2luZGV4Lmpzb24nO1xuaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJzsgXG5cbmltcG9ydCBNZXNzYWdlIGZyb20gJ2twYy9jb21wb25lbnRzL21lc3NhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgY2hlY2tib3g6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICBNZXNzYWdlLnN1Y2Nlc3MoJ+mqjOivgemAmui/h++8jOW8gOWni+aPkOS6pCcpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdldCgnbW9kZWwnKSk7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMucmVmcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0KCdtb2RlbCcpKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL2Zvcm0vZGVtb3MvYmFzaWMvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9iYXNpYy9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL2Jhc2ljL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxMjYgMTM4IiwiaW1wb3J0IHtGb3JtLCBGb3JtSXRlbX0gZnJvbSAna3BjL2NvbXBvbmVudHMvZm9ybSc7aW1wb3J0IHtJbnB1dH0gZnJvbSAna3BjL2NvbXBvbmVudHMvaW5wdXQnO2ltcG9ydCB7U2VsZWN0LCBPcHRpb259IGZyb20gJ2twYy9jb21wb25lbnRzL3NlbGVjdCc7aW1wb3J0IHtDaGVja2JveH0gZnJvbSAna3BjL2NvbXBvbmVudHMvY2hlY2tib3gnO2ltcG9ydCB7UmFkaW99IGZyb20gJ2twYy9jb21wb25lbnRzL3JhZGlvJztpbXBvcnQge0J1dHRvbkdyb3VwLCBCdXR0b259IGZyb20gJ2twYy9jb21wb25lbnRzL2J1dHRvbic7aW1wb3J0IHtTd2l0Y2h9IGZyb20gJ2twYy9jb21wb25lbnRzL3N3aXRjaCc7aW1wb3J0IHtTbGlkZXJ9IGZyb20gJ2twYy9jb21wb25lbnRzL3NsaWRlcic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuXG5cblxuXG5cblxuXG5yZXR1cm4gaChGb3JtLCB7J2V2LXN1Ym1pdCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLnN1Ym1pdCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbaChGb3JtSXRlbSwgeydsYWJlbCc6ICdJbnB1dCcsICdtb2RlbCc6ICdtb2RlbC5pbnB1dCcsICdydWxlcyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7cmVxdWlyZWQ6IHRydWV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGgoSW5wdXQsIHsnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzLCB2YWx1ZTogX2dldE1vZGVsKHNlbGYsICdtb2RlbC5pbnB1dCcpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKF9fYywgX19uKSB7IF9zZXRNb2RlbChzZWxmLCAnbW9kZWwuaW5wdXQnLCBfX24pIH19KSwgJ19jb250ZXh0JzogdGhpc30pLCBoKEZvcm1JdGVtLCB7J2xhYmVsJzogJ1NlbGVjdCcsICdtb2RlbCc6ICdtb2RlbC5zZWxlY3QnLCAncnVsZXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe3JlcXVpcmVkOiB0cnVlfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnbWVzc2FnZXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe3JlcXVpcmVkOiAn5b+F6aG76YCJ5oupJ30gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogaChTZWxlY3QsIHsnY2hpbGRyZW4nOiBbaChPcHRpb24sIHsndmFsdWUnOiAnSmF2YXNjcmlwdCcsICdjaGlsZHJlbic6ICdKYXZhc2NyaXB0JywgJ19jb250ZXh0JzogdGhpc30pLCBoKE9wdGlvbiwgeyd2YWx1ZSc6ICdQSFAnLCAnY2hpbGRyZW4nOiAnUEhQJywgJ19jb250ZXh0JzogdGhpc30pLCBoKE9wdGlvbiwgeyd2YWx1ZSc6ICdDKysnLCAnY2hpbGRyZW4nOiAnQysrJywgJ19jb250ZXh0JzogdGhpc30pXSwgJ19jb250ZXh0JzogdGhpcywgdmFsdWU6IF9nZXRNb2RlbChzZWxmLCAnbW9kZWwuc2VsZWN0JyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oX19jLCBfX24pIHsgX3NldE1vZGVsKHNlbGYsICdtb2RlbC5zZWxlY3QnLCBfX24pIH19KSwgJ19jb250ZXh0JzogdGhpc30pLCBoKEZvcm1JdGVtLCB7J2xhYmVsJzogJ0NoZWNrYm94JywgJ21vZGVsJzogJ21vZGVsLmNoZWNrYm94JywgJ3J1bGVzJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tyZXF1aXJlZDogdHJ1ZSwgbWF4TGVuZ3RoOiAyfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnbWVzc2FnZXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe3JlcXVpcmVkOiAn5b+F6aG76YCJ5oupJ30gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogW2goQ2hlY2tib3gsIHsndHJ1ZVZhbHVlJzogJ0phdmFzY3JpcHQnLCAnY2hpbGRyZW4nOiAnSmF2YXNjcmlwdCcsICdfY29udGV4dCc6IHRoaXMsIHZhbHVlOiBfZ2V0TW9kZWwoc2VsZiwgJ21vZGVsLmNoZWNrYm94JyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oX19jLCBfX24pIHsgX3NldE1vZGVsKHNlbGYsICdtb2RlbC5jaGVja2JveCcsIF9fbikgfX0pLCBoKENoZWNrYm94LCB7J3RydWVWYWx1ZSc6ICdQSFAnLCAnY2hpbGRyZW4nOiAnUEhQJywgJ19jb250ZXh0JzogdGhpcywgdmFsdWU6IF9nZXRNb2RlbChzZWxmLCAnbW9kZWwuY2hlY2tib3gnKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbihfX2MsIF9fbikgeyBfc2V0TW9kZWwoc2VsZiwgJ21vZGVsLmNoZWNrYm94JywgX19uKSB9fSksIGgoQ2hlY2tib3gsIHsndHJ1ZVZhbHVlJzogJ0MrKycsICdjaGlsZHJlbic6ICdDKysnLCAnX2NvbnRleHQnOiB0aGlzLCB2YWx1ZTogX2dldE1vZGVsKHNlbGYsICdtb2RlbC5jaGVja2JveCcpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKF9fYywgX19uKSB7IF9zZXRNb2RlbChzZWxmLCAnbW9kZWwuY2hlY2tib3gnLCBfX24pIH19KV0sICdfY29udGV4dCc6IHRoaXN9KSwgaChGb3JtSXRlbSwgeydsYWJlbCc6ICdSYWRpbycsICdtb2RlbCc6ICdtb2RlbC5yYWRpbycsICdydWxlcyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7cmVxdWlyZWQ6IHRydWV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdtZXNzYWdlcyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7cmVxdWlyZWQ6ICflv4XpobvpgInmi6knfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbaChSYWRpbywgeyd0cnVlVmFsdWUnOiAnSmF2YXNjcmlwdCcsICdjaGlsZHJlbic6ICdKYXZhc2NyaXB0JywgJ19jb250ZXh0JzogdGhpcywgdmFsdWU6IF9nZXRNb2RlbChzZWxmLCAnbW9kZWwucmFkaW8nKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbihfX2MsIF9fbikgeyBfc2V0TW9kZWwoc2VsZiwgJ21vZGVsLnJhZGlvJywgX19uKSB9fSksIGgoUmFkaW8sIHsndHJ1ZVZhbHVlJzogJ1BIUCcsICdjaGlsZHJlbic6ICdQSFAnLCAnX2NvbnRleHQnOiB0aGlzLCB2YWx1ZTogX2dldE1vZGVsKHNlbGYsICdtb2RlbC5yYWRpbycpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKF9fYywgX19uKSB7IF9zZXRNb2RlbChzZWxmLCAnbW9kZWwucmFkaW8nLCBfX24pIH19KSwgaChSYWRpbywgeyd0cnVlVmFsdWUnOiAnQysrJywgJ2NoaWxkcmVuJzogJ0MrKycsICdfY29udGV4dCc6IHRoaXMsIHZhbHVlOiBfZ2V0TW9kZWwoc2VsZiwgJ21vZGVsLnJhZGlvJyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oX19jLCBfX24pIHsgX3NldE1vZGVsKHNlbGYsICdtb2RlbC5yYWRpbycsIF9fbikgfX0pXSwgJ19jb250ZXh0JzogdGhpc30pLCBoKEZvcm1JdGVtLCB7J2xhYmVsJzogJ1JhZGlvIEJ1dHRvbkdyb3VwJywgJ21vZGVsJzogJ21vZGVsLmJ1dHRvbkdyb3VwJywgJ3J1bGVzJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tyZXF1aXJlZDogdHJ1ZX0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ21lc3NhZ2VzJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tyZXF1aXJlZDogJ+W/hemhu+mAieaLqSd9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGgoQnV0dG9uR3JvdXAsIHsnY2hlY2tUeXBlJzogJ3JhZGlvJywgJ2NoaWxkcmVuJzogW2goQnV0dG9uLCB7J3ZhbHVlJzogJ0phdmFzY3JpcHQnLCAnY2hpbGRyZW4nOiAnSmF2YXNjcmlwdCcsICdfY29udGV4dCc6IHRoaXN9KSwgaChCdXR0b24sIHsndmFsdWUnOiAnUEhQJywgJ2NoaWxkcmVuJzogJ1BIUCcsICdfY29udGV4dCc6IHRoaXN9KSwgaChCdXR0b24sIHsndmFsdWUnOiAnQysrJywgJ2NoaWxkcmVuJzogJ0MrKycsICdfY29udGV4dCc6IHRoaXN9KV0sICdfY29udGV4dCc6IHRoaXMsIHZhbHVlOiBfZ2V0TW9kZWwoc2VsZiwgJ21vZGVsLmJ1dHRvbkdyb3VwJyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oX19jLCBfX24pIHsgX3NldE1vZGVsKHNlbGYsICdtb2RlbC5idXR0b25Hcm91cCcsIF9fbikgfX0pLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRm9ybUl0ZW0sIHsnbGFiZWwnOiAnU3dpdGNoJywgJ2NoaWxkcmVuJzogaChTd2l0Y2gsIHsnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzLCB2YWx1ZTogX2dldE1vZGVsKHNlbGYsICdtb2RlbC5zd2l0Y2gnKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbihfX2MsIF9fbikgeyBfc2V0TW9kZWwoc2VsZiwgJ21vZGVsLnN3aXRjaCcsIF9fbikgfX0pLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRm9ybUl0ZW0sIHsnbGFiZWwnOiAnU2xpZGVyJywgJ2NoaWxkcmVuJzogaChTbGlkZXIsIHsnaXNTaG93SW5wdXQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZmFsc2UgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpcywgdmFsdWU6IF9nZXRNb2RlbChzZWxmLCAnbW9kZWwuc2xpZGVyJyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oX19jLCBfX24pIHsgX3NldE1vZGVsKHNlbGYsICdtb2RlbC5zbGlkZXInLCBfX24pIH19KSwgJ19jb250ZXh0JzogdGhpc30pLCBoKEZvcm1JdGVtLCB7J2xhYmVsJzogJ1RleHRhcmVhJywgJ21vZGVsJzogJ21vZGVsLnRleHRhcmVhJywgJ2NoaWxkcmVuJzogaChJbnB1dCwgeyd0eXBlJzogJ3RleHRhcmVhJywgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpcywgdmFsdWU6IF9nZXRNb2RlbChzZWxmLCAnbW9kZWwudGV4dGFyZWEnKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbihfX2MsIF9fbikgeyBfc2V0TW9kZWwoc2VsZiwgJ21vZGVsLnRleHRhcmVhJywgX19uKSB9fSksICdfY29udGV4dCc6IHRoaXN9KSwgaChGb3JtSXRlbSwgeydsYWJlbCc6ICdQYXNzd29yZCcsICdtb2RlbCc6ICdtb2RlbC5wYXNzd29yZCcsICdydWxlcyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7cmVxdWlyZWQ6IHRydWV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGgoSW5wdXQsIHsndHlwZSc6ICdwYXNzd29yZCcsICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXMsIHZhbHVlOiBfZ2V0TW9kZWwoc2VsZiwgJ21vZGVsLnBhc3N3b3JkJyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oX19jLCBfX24pIHsgX3NldE1vZGVsKHNlbGYsICdtb2RlbC5wYXNzd29yZCcsIF9fbikgfX0pLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRm9ybUl0ZW0sIHsnbGFiZWwnOiAnQ29uZmlybSBQYXNzd29yZCcsICdtb2RlbCc6ICdtb2RlbC5jb25maXJtUGFzc3dvcmQnLCAncnVsZXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe3JlcXVpcmVkOiB0cnVlLCBlcXVhbFRvOiAnbW9kZWwucGFzc3dvcmQnfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBoKElucHV0LCB7J3R5cGUnOiAncGFzc3dvcmQnLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzLCB2YWx1ZTogX2dldE1vZGVsKHNlbGYsICdtb2RlbC5jb25maXJtUGFzc3dvcmQnKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbihfX2MsIF9fbikgeyBfc2V0TW9kZWwoc2VsZiwgJ21vZGVsLmNvbmZpcm1QYXNzd29yZCcsIF9fbikgfX0pLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRm9ybUl0ZW0sIHsnY2hpbGRyZW4nOiBbaChCdXR0b24sIHsndHlwZSc6ICdwcmltYXJ5JywgJ2h0bWxUeXBlJzogJ3N1Ym1pdCcsICdjaGlsZHJlbic6ICfmj5DkuqQnLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoQnV0dG9uLCB7J3N0eWxlJzogJ21hcmdpbi1sZWZ0OiAyMHB4JywgJ2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYucmVzZXQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogJ+mHjee9ricsICdfY29udGV4dCc6IHRoaXN9KV0sICdfY29udGV4dCc6IHRoaXN9KV0sICdfY29udGV4dCc6IHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snZm9ybSddID0gaX0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL2Zvcm0vZGVtb3MvYmFzaWMvaW5kZXgudmR0IiwiZXhwb3J0IHtkZWZhdWx0IGFzIGRhdGF9IGZyb20gJy4vaW5kZXguanNvbic7XG5pbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnOyBcblxuaW1wb3J0IHtGb3JtfSBmcm9tICdrcGMvY29tcG9uZW50cy9mb3JtJztcblxuLy8g5re75Yqg5YWo5bGA6KeE5YiZXG5Gb3JtLmFkZE1ldGhvZCgnbGV0dGVyJywgKHZhbHVlLCBpdGVtLCBwYXJhbSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdhcmd1bWVudHMnLCB2YWx1ZSwgaXRlbSwgcGFyYW0pO1xuICAgIHJldHVybiAvXlthLXp8QS1aXSskLy50ZXN0KHZhbHVlKTtcbn0sICflj6rog73ovpPlhaXlrZfmr40nKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbnM6IFsnJ11cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZCgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2Rlc2NyaXB0aW9ucycsIHRoaXMuZ2V0KCdkZXNjcmlwdGlvbnMnKS5jb25jYXQoJycpKTtcbiAgICB9XG5cbiAgICBkZWxldGUoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25zID0gdGhpcy5nZXQoJ2Rlc2NyaXB0aW9ucycpLnNsaWNlKDApO1xuICAgICAgICBkZXNjcmlwdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5zZXQoJ2Rlc2NyaXB0aW9ucycsIGRlc2NyaXB0aW9ucyk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL2N1c3RvbS9pbmRleC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL2N1c3RvbS9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL2N1c3RvbS9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMTI2IDE2MyIsImltcG9ydCB7Rm9ybSwgRm9ybUl0ZW19IGZyb20gJ2twYy9jb21wb25lbnRzL2Zvcm0nO2ltcG9ydCB7SW5wdXR9IGZyb20gJ2twYy9jb21wb25lbnRzL2lucHV0JztpbXBvcnQge0J1dHRvbn0gZnJvbSAna3BjL2NvbXBvbmVudHMvYnV0dG9uJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cblxucmV0dXJuIGgoRm9ybSwgeydjaGlsZHJlbic6IGgoRm9ybUl0ZW0sIHsnbGFiZWwnOiAn5o+P6L+wJywgJ2NoaWxkcmVuJzogW19WZHQudXRpbHMubWFwKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLmdldCgnZGVzY3JpcHRpb25zJykgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xucmV0dXJuIGgoRm9ybUl0ZW0sIHsnbW9kZWwnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYGRlc2NyaXB0aW9ucy4ke2tleX1gIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdoaWRlTGFiZWwnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdydWxlcyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsIFxuICAgICAgICAgICAgICAgIC8vIOiHquWumuS5ieWFqOWxgOinhOWImVxuICAgICAgICAgICAgICAgIGxldHRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyDoh6rlrprkuYnlsYDpg6jop4TliJnvvIzmiYDmnInmj4/ov7Dlv4XpobvkuI3ph43lpI1cbiAgICAgICAgICAgICAgICB1bmlxdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5nZXQoJ2Rlc2NyaXB0aW9ucycpLmZpbmQoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSA9PT0gdmFsdWUpIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY291bnQgPiAxO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyDnm7TmjqXov5Tlm57plJnor6/mlofmoYjvvIzmiJbogIXkuZ/lj6/ku6XljZXni6zlrprkuYltZXNzYWdlc+S4unt1bmlxdWU6ICfkuI3og73nm7jlkIwnfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY291bnQgPT09IDEgfHwgJ+S4jeiDveebuOWQjCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBoKElucHV0LCB7J2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpcywgdmFsdWU6IF9nZXRNb2RlbChzZWxmLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYGRlc2NyaXB0aW9ucy4ke2tleX1gIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKF9fYywgX19uKSB7IF9zZXRNb2RlbChzZWxmLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYGRlc2NyaXB0aW9ucy4ke2tleX1gIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIF9fbikgfX0pLCAnX2NvbnRleHQnOiB0aGlzLCAnX2Jsb2Nrcyc6IGZ1bmN0aW9uKGJsb2Nrcykge1xuICAgIHZhciBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0gZXh0ZW5kKHt9LCBibG9ja3MpO1xuICAgIHJldHVybiAoX2Jsb2Nrcy5hcHBlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gaChCdXR0b24sIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5kZWxldGUuYmluZChzZWxmLCBrZXkpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6ICfliKDpmaQnLCAnX2NvbnRleHQnOiB0aGlzfSk7fSkgJiYgKF9fYmxvY2tzLmFwcGVuZCA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5hcHBlbmQgPyBibG9ja3MuYXBwZW5kLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5hcHBlbmQuY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLmFwcGVuZC5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrcztcbn0uY2FsbCh0aGlzLCB7fSl9KTtcbn0sIHRoaXMpLCBoKEJ1dHRvbiwgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLmFkZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiAn5re75YqgJywgJ19jb250ZXh0JzogdGhpc30pXSwgJ19jb250ZXh0JzogdGhpc30pLCAnX2NvbnRleHQnOiB0aGlzfSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9jdXN0b20vaW5kZXgudmR0IiwiZXhwb3J0IHtkZWZhdWx0IGFzIGRhdGF9IGZyb20gJy4vaW5kZXguanNvbic7XG5pbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL2Zvcm0vZGVtb3MvbGFiZWwvaW5kZXguanMiLCJpbXBvcnQge0Zvcm0sIEZvcm1JdGVtfSBmcm9tICdrcGMvY29tcG9uZW50cy9mb3JtJztpbXBvcnQge0lucHV0fSBmcm9tICdrcGMvY29tcG9uZW50cy9pbnB1dCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuXG5yZXR1cm4gaChGb3JtLCB7J2NoaWxkcmVuJzogW2goRm9ybUl0ZW0sIHsnY2hpbGRyZW4nOiBoKElucHV0LCB7J2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30pLCAnX2NvbnRleHQnOiB0aGlzLCAnX2Jsb2Nrcyc6IGZ1bmN0aW9uKGJsb2Nrcykge1xuICAgIHZhciBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0gZXh0ZW5kKHt9LCBibG9ja3MpO1xuICAgIHJldHVybiAoX2Jsb2Nrcy5sYWJlbCA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBbaCgnaScsIHsnc3R5bGUnOiAnY29sb3I6IHJlZCd9LCAnKicpLCAnIOWnk+WQjSddO30pICYmIChfX2Jsb2Nrcy5sYWJlbCA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5sYWJlbCA/IGJsb2Nrcy5sYWJlbC5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3MubGFiZWwuY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLmxhYmVsLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzO1xufS5jYWxsKHRoaXMsIHt9KX0pLCBoKEZvcm1JdGVtLCB7J2NoaWxkcmVuJzogaChJbnB1dCwgeydjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KSwgJ19jb250ZXh0JzogdGhpcywgJ19ibG9ja3MnOiBmdW5jdGlvbihibG9ja3MpIHtcbiAgICB2YXIgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IGV4dGVuZCh7fSwgYmxvY2tzKTtcbiAgICByZXR1cm4gKF9ibG9ja3MubGFiZWwgPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gW2goJ2knLCBudWxsLCBudWxsLCAnaW9uLXBlcnNvbicpLCAnIOWnk+WQjSddO30pICYmIChfX2Jsb2Nrcy5sYWJlbCA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5sYWJlbCA/IGJsb2Nrcy5sYWJlbC5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3MubGFiZWwuY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLmxhYmVsLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzO1xufS5jYWxsKHRoaXMsIHt9KX0pXSwgJ19jb250ZXh0JzogdGhpc30pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL2Zvcm0vZGVtb3MvbGFiZWwvaW5kZXgudmR0IiwiZXhwb3J0IHtkZWZhdWx0IGFzIGRhdGF9IGZyb20gJy4vaW5kZXguanNvbic7XG5pbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL2Zvcm0vZGVtb3MvdmFyaWFibGUvaW5kZXguanMiLCJpbXBvcnQge0Zvcm0sIEZvcm1JdGVtfSBmcm9tICdrcGMvY29tcG9uZW50cy9mb3JtJztpbXBvcnQge0lucHV0fSBmcm9tICdrcGMvY29tcG9uZW50cy9pbnB1dCc7aW1wb3J0IHtSb3csIENvbH0gZnJvbSAna3BjL2NvbXBvbmVudHMvZ3JpZCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuXG5cbnJldHVybiBoKEZvcm0sIHsnY2hpbGRyZW4nOiBoKEZvcm1JdGVtLCB7J2xhYmVsJzogJ+Wnk+WQjScsICdjaGlsZHJlbic6IGgoUm93LCB7J2d1dHRlcic6ICcxNicsICdjaGlsZHJlbic6IFtoKENvbCwgeydzcGFuJzogJzEyJywgJ2NoaWxkcmVuJzogaChGb3JtSXRlbSwgeydoaWRlTGFiZWwnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdtb2RlbCc6ICdmaXJzdE5hbWUnLCAncnVsZXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICAvLyDor6Xop4TliJnlj5blgLzvvIzpmo/nnYBsYXN0TmFtZeeahOWtmOWcqOS4juWQpuiAjOaUueWPmFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogc2VsZi5nZXQoJ2xhc3ROYW1lJylcbiAgICAgICAgICAgICAgICB9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGgoSW5wdXQsIHsnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzLCB2YWx1ZTogX2dldE1vZGVsKHNlbGYsICdmaXJzdE5hbWUnKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbihfX2MsIF9fbikgeyBfc2V0TW9kZWwoc2VsZiwgJ2ZpcnN0TmFtZScsIF9fbikgfX0pLCAnX2NvbnRleHQnOiB0aGlzfSksICdfY29udGV4dCc6IHRoaXN9KSwgaChDb2wsIHsnc3Bhbic6ICcxMicsICdjaGlsZHJlbic6IGgoRm9ybUl0ZW0sIHsnaGlkZUxhYmVsJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RydWVdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnbW9kZWwnOiAnbGFzdE5hbWUnLCAncnVsZXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICAvLyDor6Xop4TliJnlj5blgLzvvIzpmo/nnYBmaXJzdE5hbWXnmoTlrZjlnKjkuI7lkKbogIzmlLnlj5hcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHNlbGYuZ2V0KCdmaXJzdE5hbWUnKVxuICAgICAgICAgICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogaChJbnB1dCwgeydjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXMsIHZhbHVlOiBfZ2V0TW9kZWwoc2VsZiwgJ2xhc3ROYW1lJyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oX19jLCBfX24pIHsgX3NldE1vZGVsKHNlbGYsICdsYXN0TmFtZScsIF9fbikgfX0pLCAnX2NvbnRleHQnOiB0aGlzfSksICdfY29udGV4dCc6IHRoaXN9KV0sICdfY29udGV4dCc6IHRoaXN9KSwgJ19jb250ZXh0JzogdGhpc30pLCAnX2NvbnRleHQnOiB0aGlzfSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy92YXJpYWJsZS9pbmRleC52ZHQiLCJpbXBvcnQgQXJ0aWNsZSBmcm9tICd+L3NyYy9jb21wb25lbnRzL2FydGljbGUnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9pbmRleC5qc29uJztcblxuY29uc3QgciA9IHJlcXVpcmUuY29udGV4dCgnLi8nLCB0cnVlLCAvZGVtb3MuKmluZGV4LmpzJC8pO1xuY29uc3QgZGVtb3MgPSByLmtleXMoKS5tYXAocik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQXJ0aWNsZSB7XG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7Li4uc3VwZXIuZGVmYXVsdHMoKSwgLi4uZGF0YSwgZGVtb3N9O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1wic2V0dGluZ1wiOntcInRpdGxlXCI6XCLooajljZVcIixcImNhdGVnb3J5XCI6XCLnu4Tku7ZcIixcIm9yZGVyXCI6MH0sXCJjYXRhbG9nc1wiOltdLFwiY29udGVudHNcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT48aDIgaWQ9J2hlYWRlci1Gb3JtSXRlbSc+Rm9ybUl0ZW08L2gyPjxkaXYgY2xhc3M9XFxcImstdGFibGUtd3JhcHBlciBrLWJvcmRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcImstdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD48dHI+XFxuPHRoPuWxnuaApzwvdGg+XFxuPHRoPuivtOaYjjwvdGg+XFxuPHRoPuexu+WeizwvdGg+XFxuPHRoPum7mOiupOWAvDwvdGg+XFxuPC90cj5cXG48L3RoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT48dHI+XFxuPHRkPm1vZGVsPC90ZD5cXG48dGQ+5oyH5a6a6ZyA6KaB6aqM6K+B55qE5bGe5oCn5ZCN56ewPC90ZD5cXG48dGQ+PGNvZGU+U3RyaW5nPC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPnVuZGVmaW5lZDwvY29kZT48L3RkPlxcbjwvdHI+XFxuPHRyPlxcbjx0ZD5ydWxlczwvdGQ+XFxuPHRkPuaMh+WumumqjOivgeinhOWImTwvdGQ+XFxuPHRkPjxjb2RlPk9iamVjdDwvY29kZT48L3RkPlxcbjx0ZD48Y29kZT57fTwvY29kZT48L3RkPlxcbjwvdHI+XFxuPHRyPlxcbjx0ZD5tZXNzYWdlczwvdGQ+XFxuPHRkPuaMh+WumumqjOivgeWksei0peaXtumUmeivr+aPkOekuuaWh+ahiDwvdGQ+XFxuPHRkPjxjb2RlPk9iamVjdDwvY29kZT48L3RkPlxcbjx0ZD48Y29kZT57fTwvY29kZT48L3RkPlxcbjwvdHI+XFxuPHRyPlxcbjx0ZD5jbGFzc05hbWVzPC90ZD5cXG48dGQ+5oyH5a6a6aqM6K+B5aSx6LSl5pe25re75Yqg55qEY2xhc3NOYW1lPC90ZD5cXG48dGQ+PGNvZGU+T2JqZWN0PC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPnt9PC9jb2RlPjwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPmxhYmVsPC90ZD5cXG48dGQ+5oyH5a6a6KGo5Y2V5q+P5LiA6aG55YmN6Z2i5bGV56S655qE5qCH6aKYPC90ZD5cXG48dGQ+PGNvZGU+U3RyaW5nPC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPnVuZGVmaW5lZDwvY29kZT48L3RkPlxcbjwvdHI+XFxuPHRyPlxcbjx0ZD5odG1sRm9yPC90ZD5cXG48dGQ+5oyH5a6aPGNvZGU+bGFiZWw8L2NvZGU+55qEPGNvZGU+Zm9yPC9jb2RlPuWxnuaApzwvdGQ+XFxuPHRkPjxjb2RlPlN0cmluZzwvY29kZT48L3RkPlxcbjx0ZD48Y29kZT51bmRlZmluZWQ8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+aGlkZUxhYmVsPC90ZD5cXG48dGQ+5piv5ZCm6ZqQ6JePPGNvZGU+bGFiZWw8L2NvZGU+77yM6buY6K6k5Lya5bGV56S6PGNvZGU+bGFiZWw8L2NvZGU+77yM5Y2z5L2/6K+l5bGe5oCn5Li656m677yM5Lmf5Lya5bGV56S65Y2g5L2N5YWD57SgPC90ZD5cXG48dGQ+PGNvZGU+Qm9vbGVhbjwvY29kZT48L3RkPlxcbjx0ZD48Y29kZT5mYWxzZTwvY29kZT48L3RkPlxcbjwvdHI+XFxuPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgIDwvZGl2PjxoMSBpZD0naGVhZGVyLSVFNiU4OSVBOSVFNSVCMSU5NSVFNyU4MiVCOSc+5omp5bGV54K5PC9oMT48aDIgaWQ9J2hlYWRlci1Gb3JtSXRlbSc+Rm9ybUl0ZW08L2gyPjxkaXYgY2xhc3M9XFxcImstdGFibGUtd3JhcHBlciBrLWJvcmRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcImstdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD48dHI+XFxuPHRoPuWQjeensDwvdGg+XFxuPHRoPuivtOaYjjwvdGg+XFxuPC90cj5cXG48L3RoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT48dHI+XFxuPHRkPmxhYmVsPC90ZD5cXG48dGQ+5omp5bGV5YmN6Z2i55qE5qCH6aKYPGNvZGU+bGFiZWw8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+Y29udGVudDwvdGQ+XFxuPHRkPuaJqeWxleWQjumdoueahOWGheWuue+8jOS5n+WPr+S7peS9v+eUqDxjb2RlPmNoaWxkcmVuPC9jb2RlPuS7o+abvzwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPmFwcGVuZDwvdGQ+XFxuPHRkPuW+gOWQjumdoui/veWKoOeahOWGheWuuTwvdGQ+XFxuPC90cj5cXG48L3Rib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+PGgxIGlkPSdoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2Jz7kuovku7Y8L2gxPjxoMiBpZD0naGVhZGVyLUZvcm0nPkZvcm08L2gyPjxkaXYgY2xhc3M9XFxcImstdGFibGUtd3JhcHBlciBrLWJvcmRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcImstdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD48dHI+XFxuPHRoPuS6i+S7tuWQjTwvdGg+XFxuPHRoPuivtOaYjjwvdGg+XFxuPHRoPuWPguaVsDwvdGg+XFxuPC90cj5cXG48L3RoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT48dHI+XFxuPHRkPnN1Ym1pdDwvdGQ+XFxuPHRkPuW9k+ihqOWNleaPkOS6pOW5tuS4lOaJgOacieinhOWImemDvemqjOivgemAmui/h+aXtuinpuWPkTwvdGQ+XFxuPHRkPjEuIDxjb2RlPkV2ZW50PC9jb2RlPiA8YnIgLz4gMi4gPGNvZGU+Rm9ybTwvY29kZT7lrp7kvos8L3RkPlxcbjwvdHI+XFxuPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgIDwvZGl2PjxoMSBpZD0naGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NSc+5pa55rOVPC9oMT48aDIgaWQ9J2hlYWRlci1Gb3JtJz5Gb3JtPC9oMj48ZGl2IGNsYXNzPVxcXCJrLXRhYmxlLXdyYXBwZXIgay1ib3JkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJrLXRhYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+PHRyPlxcbjx0aD7mlrnms5XlkI08L3RoPlxcbjx0aD7or7TmmI48L3RoPlxcbjx0aD7lj4LmlbA8L3RoPlxcbjx0aD7ov5Tlm57lgLw8L3RoPlxcbjwvdHI+XFxuPC90aGVhZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+PHRyPlxcbjx0ZD52YWxpZGF0ZTwvdGQ+XFxuPHRkPumqjOivgeihqOWNleaJgOacieinhOWImTwvdGQ+XFxuPHRkPi08L3RkPlxcbjx0ZD48Y29kZT5Qcm9taXNlPC9jb2RlPjogPGNvZGU+LnRoZW4odmFsaWQgPSZndDsge30pPC9jb2RlPu+8jDxjb2RlPnZhbGlkPC9jb2RlPuS4ujxjb2RlPnRydWU8L2NvZGU+6aqM6K+B5oiQ5Yqf77yM5ZCm5YiZ5aSx6LSlPC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+cmVzZXQ8L3RkPlxcbjx0ZD7ph43nva7ooajljZU8L3RkPlxcbjx0ZD4tPC90ZD5cXG48dGQ+PGNvZGU+dW5kZWZpbmVkPC9jb2RlPjwvdGQ+XFxuPC90cj5cXG48L3Rib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+PGgxIGlkPSdoZWFkZXItJUU5JTlEJTk5JUU2JTgwJTgxJUU2JTk2JUI5JUU2JUIzJTk1Jz7pnZnmgIHmlrnms5U8L2gxPjxoMiBpZD0naGVhZGVyLUZvcm0nPkZvcm08L2gyPjxwPjxjb2RlPkZvcm08L2NvZGU+6L+Y5o+Q5L6b5LqG5LiA5Liq6Z2Z5oCB5pa55rOV77yM55So5LqO5YWo5bGA5re75Yqg6aqM6K+B6KeE5YiZ77yM6YCa6L+HPGNvZGU+Rm9ybS5hZGRNZXRob2QoKTwvY29kZT7osIPnlKg8L3A+XFxuPGRpdiBjbGFzcz1cXFwiay10YWJsZS13cmFwcGVyIGstYm9yZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwiay10YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPjx0cj5cXG48dGg+5pa55rOV5ZCNPC90aD5cXG48dGg+6K+05piOPC90aD5cXG48dGg+5Y+C5pWwPC90aD5cXG48dGg+6L+U5Zue5YC8PC90aD5cXG48L3RyPlxcbjwvdGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5Pjx0cj5cXG48dGQ+YWRkTWV0aG9kPC90ZD5cXG48dGQ+5re75Yqg5YWo5bGA6aqM6K+B6KeE5YiZ77yM6L+Z5qC35Zyo5omA5pyJPGNvZGU+Rm9ybUl0ZW08L2NvZGU+5Lit5aaC5p6c6ZyA6KaB5L2/55So6K+l6KeE5YiZ77yM5Y+q6ZyA6KaB5ZyoPGNvZGU+cnVsZXM8L2NvZGU+5Lit5YaZ5LiK6K+l6KeE5YiZ5ZCN5Y2z5Y+vPC90ZD5cXG48dGQ+MS4gPGNvZGU+bmFtZTwvY29kZT4g5oyH5a6a6KeE5YiZ5ZCN56ew77yM5LiN6IO96YeN5aSNIDxiciAvPiAyLiA8Y29kZT5tZXRob2Q8L2NvZGU+IOaMh+WumuivpeinhOWImeeahOmqjOivgeWHveaVsO+8jOivpeWHveaVsOi/lOWbnjxjb2RlPnRydWU8L2NvZGU+5oiWPGNvZGU+ZmFsc2U8L2NvZGU+5p2l5qCH6K+G6aqM6K+B5oiQ5Yqf5oiW5aSx6LSl77yM6K+l5Ye95pWw5bCG5Lyg5YWlM+S4quWPguaVsO+8mjEuIOW9k+WJjemqjOivgeeahOWAvO+8jDIuIOW9k+WJjemqjOivgeeahDxjb2RlPkZvcm1JdGVtPC9jb2RlPuWunuS+i++8jDMuIOW9k+WJjeinhOWImeeahOWPguaVsCA8YnIgLz4gMy4gPGNvZGU+bWVzc2FnZTwvY29kZT4g6aqM6K+B5aSx6LSl5pe255qE6ZSZ6K+v5o+Q56S65paH5qGI77yM6K+l5YC85Y+v5Lul5Li65a2X56ym5Liy5oiW6ICF5Ye95pWw77yM5aaC5p6c5Li65Ye95pWw77yM5Lyg5YWl5Y+C5pWw5ZCMPGNvZGU+bWV0aG9kPC9jb2RlPu+8jOeUqOS6juS4quaAp+WMluaWh+ahiOaPkOekuiA8YnIgLz4gNC4gPGNvZGU+Y2xhc3NOYW1lPC9jb2RlPiDpqozor4HlpLHotKXml7bmt7vliqDnmoTnsbvlkI08L3RkPlxcbjx0ZD48Y29kZT51bmRlZmluZWQ8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjwvdGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cIixcImNvZGVzXCI6W3tcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XFxufVwifV0sXCJpbmRleFwiOjQwLFwic2lkZUJhcnNcIjp7XCLnu4Tku7ZcIjpbe1widGl0bGVcIjpcIumdouWMheWxkVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9icmVhZGNydW1iL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiQnJlYWRjcnVtYlwiLFwicGF0aFwiOlwiI2hlYWRlci1CcmVhZGNydW1iXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1CcmVhZGNydW1iJz5CcmVhZGNydW1iPC9oMj5cIixcInRleHRcIjpcIkJyZWFkY3J1bWJcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCJCcmVhZGNydW1iSXRlbVwiLFwicGF0aFwiOlwiI2hlYWRlci1CcmVhZGNydW1iSXRlbVwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItQnJlYWRjcnVtYkl0ZW0nPkJyZWFkY3J1bWJJdGVtPC9oMj5cIixcInRleHRcIjpcIkJyZWFkY3J1bWJJdGVtXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIuaMiemSrlwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9idXR0b24vaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJCdXR0b25cIixcInBhdGhcIjpcIiNoZWFkZXItQnV0dG9uXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1CdXR0b24nPkJ1dHRvbjwvaDI+XCIsXCJ0ZXh0XCI6XCJCdXR0b25cIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCJCdXR0b25Hcm91cFwiLFwicGF0aFwiOlwiI2hlYWRlci1CdXR0b25Hcm91cFwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItQnV0dG9uR3JvdXAnPkJ1dHRvbkdyb3VwPC9oMj5cIixcInRleHRcIjpcIkJ1dHRvbkdyb3VwXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLmlrnms5VcIixcInBhdGhcIjpcIiNoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTUnPuaWueazlTwvaDE+XCIsXCJ0ZXh0XCI6XCLmlrnms5VcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJCdXR0b25cIixcInBhdGhcIjpcIiNoZWFkZXItQnV0dG9uXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1CdXR0b24nPkJ1dHRvbjwvaDI+XCIsXCJ0ZXh0XCI6XCJCdXR0b25cIixcImNoaWxkcmVuXCI6W119XX1dfSx7XCJ0aXRsZVwiOlwi5aSN6YCJ5qGGXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2NoZWNrYm94L2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLml6XmnJ/pgInmi6lcIixcInBhdGhcIjpcImNvbXBvbmVudHMvZGF0ZXBpY2tlci9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5by556qXXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2RpYWxvZy9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuaJqeWxleeCuVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTYlODklQTklRTUlQjElOTUlRTclODIlQjlcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNiU4OSVBOSVFNSVCMSU5NSVFNyU4MiVCOSc+5omp5bGV54K5PC9oMT5cIixcInRleHRcIjpcIuaJqeWxleeCuVwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuaWueazlVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTVcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NSc+5pa55rOVPC9oMT5cIixcInRleHRcIjpcIuaWueazlVwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuS6i+S7tlwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjZcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNic+5LqL5Lu2PC9oMT5cIixcInRleHRcIjpcIuS6i+S7tlwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5LiL5ouJ6I+c5Y2VXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2Ryb3Bkb3duL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiRHJvcGRvd25cIixcInBhdGhcIjpcIiNoZWFkZXItRHJvcGRvd25cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLURyb3Bkb3duJz5Ecm9wZG93bjwvaDI+XCIsXCJ0ZXh0XCI6XCJEcm9wZG93blwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIkRyb3Bkb3duSXRlbVwiLFwicGF0aFwiOlwiI2hlYWRlci1Ecm9wZG93bkl0ZW1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLURyb3Bkb3duSXRlbSc+RHJvcGRvd25JdGVtPC9oMj5cIixcInRleHRcIjpcIkRyb3Bkb3duSXRlbVwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuS6i+S7tlwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjZcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNic+5LqL5Lu2PC9oMj5cIixcInRleHRcIjpcIuS6i+S7tlwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIkRyb3Bkb3duSXRlbVwiLFwicGF0aFwiOlwiI2hlYWRlci1Ecm9wZG93bkl0ZW1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLURyb3Bkb3duSXRlbSc+RHJvcGRvd25JdGVtPC9oMj5cIixcInRleHRcIjpcIkRyb3Bkb3duSXRlbVwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLlj6/nvJbovpHmlofmnKxcIixcInBhdGhcIjpcImNvbXBvbmVudHMvZWRpdGFibGUvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLkuovku7ZcIixcInBhdGhcIjpcIiNoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjYnPuS6i+S7tjwvaDE+XCIsXCJ0ZXh0XCI6XCLkuovku7ZcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuihqOWNlVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9mb3JtL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiRm9ybUl0ZW1cIixcInBhdGhcIjpcIiNoZWFkZXItRm9ybUl0ZW1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUZvcm1JdGVtJz5Gb3JtSXRlbTwvaDI+XCIsXCJ0ZXh0XCI6XCJGb3JtSXRlbVwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5omp5bGV54K5XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNiU4OSVBOSVFNSVCMSU5NSVFNyU4MiVCOVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU2JTg5JUE5JUU1JUIxJTk1JUU3JTgyJUI5Jz7mianlsZXngrk8L2gxPlwiLFwidGV4dFwiOlwi5omp5bGV54K5XCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiRm9ybUl0ZW1cIixcInBhdGhcIjpcIiNoZWFkZXItRm9ybUl0ZW1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUZvcm1JdGVtJz5Gb3JtSXRlbTwvaDI+XCIsXCJ0ZXh0XCI6XCJGb3JtSXRlbVwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5LqL5Lu2XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNlwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2Jz7kuovku7Y8L2gxPlwiLFwidGV4dFwiOlwi5LqL5Lu2XCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiRm9ybVwiLFwicGF0aFwiOlwiI2hlYWRlci1Gb3JtXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Gb3JtJz5Gb3JtPC9oMj5cIixcInRleHRcIjpcIkZvcm1cIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuaWueazlVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTVcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NSc+5pa55rOVPC9oMT5cIixcInRleHRcIjpcIuaWueazlVwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkZvcm1cIixcInBhdGhcIjpcIiNoZWFkZXItRm9ybVwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItRm9ybSc+Rm9ybTwvaDI+XCIsXCJ0ZXh0XCI6XCJGb3JtXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLpnZnmgIHmlrnms5VcIixcInBhdGhcIjpcIiNoZWFkZXItJUU5JTlEJTk5JUU2JTgwJTgxJUU2JTk2JUI5JUU2JUIzJTk1XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTklOUQlOTklRTYlODAlODElRTYlOTYlQjklRTYlQjMlOTUnPumdmeaAgeaWueazlTwvaDE+XCIsXCJ0ZXh0XCI6XCLpnZnmgIHmlrnms5VcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJGb3JtXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUZvcm1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUZvcm0nPkZvcm08L2gyPlwiLFwidGV4dFwiOlwiRm9ybVwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLmoIXmoLxcIixcInBhdGhcIjpcImNvbXBvbmVudHMvZ3JpZC9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIlJvd1wiLFwicGF0aFwiOlwiI2hlYWRlci1Sb3dcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLVJvdyc+Um93PC9oMj5cIixcInRleHRcIjpcIlJvd1wiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIkNvbFwiLFwicGF0aFwiOlwiI2hlYWRlci1Db2xcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUNvbCc+Q29sPC9oMj5cIixcInRleHRcIjpcIkNvbFwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLovpPlhaXmoYZcIixcInBhdGhcIjpcImNvbXBvbmVudHMvaW5wdXQvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLmianlsZXngrlcIixcInBhdGhcIjpcIiNoZWFkZXItJUU2JTg5JUE5JUU1JUIxJTk1JUU3JTgyJUI5XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTYlODklQTklRTUlQjElOTUlRTclODIlQjknPuaJqeWxleeCuTwvaDE+XCIsXCJ0ZXh0XCI6XCLmianlsZXngrlcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLkuovku7ZcIixcInBhdGhcIjpcIiNoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjYnPuS6i+S7tjwvaDE+XCIsXCJ0ZXh0XCI6XCLkuovku7ZcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuWFqOWxgOaPkOekulwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9tZXNzYWdlL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi6Z2Z5oCB5pa55rOVXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFOSU5RCU5OSVFNiU4MCU4MSVFNiU5NiVCOSVFNiVCMyU5NVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU5JTlEJTk5JUU2JTgwJTgxJUU2JTk2JUI5JUU2JUIzJTk1Jz7pnZnmgIHmlrnms5U8L2gxPlwiLFwidGV4dFwiOlwi6Z2Z5oCB5pa55rOVXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLliIbpobVcIixcInBhdGhcIjpcImNvbXBvbmVudHMvcGFnaW5hdGlvbi9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuaWueazlVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTVcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NSc+5pa55rOVPC9oMT5cIixcInRleHRcIjpcIuaWueazlVwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIlBhZ2luYXRpb25cIixcInBhdGhcIjpcIiNoZWFkZXItUGFnaW5hdGlvblwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItUGFnaW5hdGlvbic+UGFnaW5hdGlvbjwvaDI+XCIsXCJ0ZXh0XCI6XCJQYWdpbmF0aW9uXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIui/m+W6puadoVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9wcm9ncmVzcy9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5Y2V6YCJ5qGGXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3JhZGlvL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLpgInmi6nmoYZcIixcInBhdGhcIjpcImNvbXBvbmVudHMvc2VsZWN0L2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiU2VsZWN0XCIsXCJwYXRoXCI6XCIjaGVhZGVyLVNlbGVjdFwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItU2VsZWN0Jz5TZWxlY3Q8L2gyPlwiLFwidGV4dFwiOlwiU2VsZWN0XCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwiT3B0aW9uXCIsXCJwYXRoXCI6XCIjaGVhZGVyLU9wdGlvblwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItT3B0aW9uJz5PcHRpb248L2gyPlwiLFwidGV4dFwiOlwiT3B0aW9uXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIua7keWdl1wiLFwicGF0aFwiOlwiY29tcG9uZW50cy9zbGlkZXIvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuaVsOWtl+i+k+WFpeahhlwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9zcGlubmVyL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLmraXpqqTmnaFcIixcInBhdGhcIjpcImNvbXBvbmVudHMvc3RlcHMvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJTdGVwc1wiLFwicGF0aFwiOlwiI2hlYWRlci1TdGVwc1wiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItU3RlcHMnPlN0ZXBzPC9oMj5cIixcInRleHRcIjpcIlN0ZXBzXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwiU3RlcFwiLFwicGF0aFwiOlwiI2hlYWRlci1TdGVwXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1TdGVwJz5TdGVwPC9oMj5cIixcInRleHRcIjpcIlN0ZXBcIixcImNoaWxkcmVuXCI6W119XX1dfSx7XCJ0aXRsZVwiOlwi6KGo5qC8XCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3RhYmxlL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi6KGo5qC85bGe5oCnVGFibGVcIixcInBhdGhcIjpcIiNoZWFkZXItJUU4JUExJUE4JUU2JUEwJUJDJUU1JUIxJTlFJUU2JTgwJUE3VGFibGVcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFOCVBMSVBOCVFNiVBMCVCQyVFNSVCMSU5RSVFNiU4MCVBN1RhYmxlJz7ooajmoLzlsZ7mgKdUYWJsZTwvaDE+XCIsXCJ0ZXh0XCI6XCLooajmoLzlsZ7mgKdUYWJsZVwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi56m/5qKt5qGGXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3RyYW5zZmVyL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19XX0sXCJoaWdobGlnaHRlZFwiOlt7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganNcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gSW50YWN0IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2ludGFjdCc8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gdGVtcGxhdGUgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nLi9pbmRleC52ZHQnPC9zcGFuPjtcXG5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmRlZmF1bHQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWNsYXNzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5jbGFzczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXh0ZW5kczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtdGl0bGVcXFwiPkludGFjdDwvc3Bhbj4gPC9zcGFuPntcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPnN0YXRpYzwvc3Bhbj4gdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59PC9jb2RlPjwvcHJlPlwifV19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9pbmRleC5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9mb3JtL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAxMjYgMjI3Il0sInNvdXJjZVJvb3QiOiIifQ==