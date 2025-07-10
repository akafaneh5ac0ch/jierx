webpackJsonp([17,23,102],{

/***/ "./components/table/column.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _column = __webpack_require__("./components/table/column.vdt");

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableColumn = function (_Intact) {
    _inherits(TableColumn, _Intact);

    function TableColumn() {
        _classCallCheck(this, TableColumn);

        return _possibleConstructorReturn(this, (TableColumn.__proto__ || Object.getPrototypeOf(TableColumn)).apply(this, arguments));
    }

    _createClass(TableColumn, [{
        key: 'defaults',
        value: function defaults() {
            return {
                title: '',
                template: function template(data, index) {},

                key: '',
                sortable: false,
                width: undefined,
                groups: undefined,

                // passed by parent
                $parent: undefined
            };
        }
    }, {
        key: 'onClick',
        value: function onClick(e) {
            this.trigger('click', e);
        }
    }, {
        key: 'onDragStart',
        value: function onDragStart(e) {
            this.trigger('dragStart', e);
        }
    }, {
        key: 'template',
        get: function get() {
            return _column2.default;
        }
    }]);

    return TableColumn;
}(_intact2.default);

exports.default = TableColumn;
module.exports = exports['default'];

/***/ }),

/***/ "./components/table/column.vdt":
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

    var _self$get = self.get(),
        width = _self$get.width,
        title = _self$get.title,
        key = _self$get.key,
        sortable = _self$get.sortable,
        groups = _self$get.groups,
        $parent = _self$get.$parent;

    var _$parent$get = $parent.get(),
        sort = _$parent$get.sort,
        resizable = _$parent$get.resizable;

    return h('th', { 'width': function () {
            try {
                return [width][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'title': function () {
            try {
                return [title][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-click': function () {
            try {
                return [self.onClick][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [function () {
        try {
            return [resizable][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', { 'ev-mousedown': function () {
            try {
                return [self.onDragStart][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, null, 'k-resize') : undefined, h('div', null, [function () {
        try {
            return [!groups][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, function () {
        try {
            return [title][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), 'c-ellipsis') : undefined, '\n        ', function () {
        var _this = this;

        try {
            return [function () {
                if (sortable) {
                    var type = key === sort.key ? sort.type : '';
                    return h('div', null, h('i', null, null, _className(function () {
                        try {
                            var _ref;

                            return [(_ref = {
                                'k-icon': true
                            }, _defineProperty(_ref, 'icon-' + type, type), _defineProperty(_ref, 'icon-sortable', !type), _ref)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this))), _className(function () {
                        try {
                            return [_defineProperty({ 'k-sort': true }, 'k-' + type, type)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this)));
                }
            }()][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n    '], 'k-th')], _className(function () {
        try {
            return [{ 'k-sortable': sortable }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/table/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TableColumn = exports.Table = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/table/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/table/index.styl");

var _column = __webpack_require__("./components/table/column.js");

var _column2 = _interopRequireDefault(_column);

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

var scrollBarWidth = undefined;

var MIN_WIDTH = 40;
var slice = Array.prototype.slice;

var Table = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Table, _Intact);

    function Table() {
        _classCallCheck(this, Table);

        return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
    }

    _createClass(Table, [{
        key: 'defaults',
        value: function defaults() {
            return {
                data: [],
                scheme: {},
                checkType: 'checkbox', // radio | none 
                rowKey: function rowKey(value, index) {
                    return index;
                },
                rowClassName: function rowClassName(value, index) {},
                // add className for tr
                checkedKeys: [], // for checkbox
                checkedKey: undefined, // for radio
                rowCheckable: true, // click row to check
                rowExpandable: true, // click row to expand
                noDataTemplate: '/(ㄒoㄒ)/~~ 没有找到亲要的数据哦~',
                disableRow: function disableRow(data, index) {
                    return false;
                },

                sort: {},
                groups: {},
                resizable: false,
                expand: undefined, // expand template callback
                expandedKeys: [],
                type: 'default', // default border
                fixHeader: false,

                _padding: 0,
                _disabledAmount: 0
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            // keep the event consistent
            this.on('$change:checkedKeys', function (c, newValue, oldValue) {
                _this2.trigger('$change:checked', c, newValue, oldValue);
            });
            this.on('$change:checkedKey', function (c, newValue, oldValue) {
                _this2.trigger('$change:checked', c, [newValue], [oldValue]);
            });
            // calculate padding of header when some props have changed
            ['data', 'fixHeader'].forEach(function (item) {
                _this2.on('$changed:' + item, _this2._calcHeaderPadding);
            });
            // update disabled amount when some props have changed
            ['data', 'disableRow'].forEach(function (item) {
                _this2.on('$change:' + item, _this2._updateDisabledAmount);
            });
            this._updateDisabledAmount();

            this._move = this._move.bind(this);
            this._dragEnd = this._dragEnd.bind(this);
        }
    }, {
        key: '_mount',
        value: function _mount() {
            if (scrollBarWidth === undefined) {
                scrollBarWidth = getScrollbarWidth();
            }
            this._calcHeaderPadding();
        }
    }, {
        key: 'isCheckAll',
        value: function isCheckAll() {
            var checkedKeys = this.get('checkedKeys');
            var dataLength = this.get('data').length;
            var disabledAmount = this.get("_disabledAmount");
            var amount = dataLength - disabledAmount;
            return amount && checkedKeys.length === amount;
        }
    }, {
        key: 'isChecked',
        value: function isChecked(key) {
            var _get = this.get(),
                checkType = _get.checkType,
                checkedKey = _get.checkedKey,
                checkedKeys = _get.checkedKeys;

            if (checkType === 'checkbox') {
                return ~checkedKeys.indexOf(key);
            } else if (checkType === 'radio') {
                return checkedKey === key;
            }
            return false;
        }
    }, {
        key: 'checkAll',
        value: function checkAll() {
            var _this3 = this;

            var rowKey = this.get('rowKey');
            var disableRow = this.get('disableRow');
            var checkedKeys = [];
            this.get('data').forEach(function (value, index) {
                if (!disableRow.call(_this3, value, index)) {
                    checkedKeys.push(rowKey.call(_this3, value, index));
                }
            });
            this.set('checkedKeys', checkedKeys);
        }
    }, {
        key: 'uncheckAll',
        value: function uncheckAll() {
            this.set('checkedKeys', []);
        }
    }, {
        key: 'checkRow',
        value: function checkRow(key) {
            this._checkUncheckRow(key, true, false);
        }
    }, {
        key: 'uncheckRow',
        value: function uncheckRow(key) {
            this._checkUncheckRow(key, false, false);
        }
    }, {
        key: 'shrinkRow',
        value: function shrinkRow(key) {
            this._expandShrinkRow(key, false, false);
        }
    }, {
        key: 'expandRow',
        value: function expandRow(key) {
            this._expandShrinkRow(key, true, false);
        }

        /**
         * @brief get the checked data
         * @return {Array}
         */

    }, {
        key: 'getCheckedData',
        value: function getCheckedData() {
            var _this4 = this;

            var rowKey = this.get('rowKey');
            var checkType = this.get('checkType');
            if (checkType === 'checkbox') {
                var checkedKeys = this.get('checkedKeys');
                var checkedKeysMap = {};
                checkedKeys.forEach(function (item) {
                    checkedKeysMap[item] = true;
                });
                return this.get('data').filter(function (value, index) {
                    var key = rowKey.call(_this4, value, index);
                    return checkedKeysMap[key];
                });
            } else if (checkType === 'radio') {
                var checkedKey = this.get('checkedKey');
                return this.get('data').filter(function (value, index) {
                    return rowKey.call(_this4, value, index) === checkedKey;
                });
            } else {
                return [];
            }
        }
    }, {
        key: '_calcHeaderPadding',
        value: function _calcHeaderPadding() {
            if (this.get('fixHeader')) {
                var tableHeight = this.table.offsetHeight;
                var containerHeight = this.scroll.offsetHeight;
                var headerHeight = this.header.offsetHeight;
                this.set('_padding', tableHeight - headerHeight > containerHeight ? scrollBarWidth : 0);
            }
        }
    }, {
        key: '_updateDisabledAmount',
        value: function _updateDisabledAmount() {
            var _this5 = this;

            var disabledAmount = 0;
            var disableRow = this.get('disableRow');
            this.get('data').forEach(function (item, index) {
                if (disableRow.call(_this5, item, index)) {
                    disabledAmount++;
                }
            });
            this.set('_disabledAmount', disabledAmount);
        }
    }, {
        key: '_toggleCheckAll',
        value: function _toggleCheckAll(c, checked) {
            if (checked) {
                this.checkAll();
            } else {
                this.uncheckAll();
            }
        }
    }, {
        key: '_clickRow',
        value: function _clickRow(value, index, key, e) {
            // if is from checkbox or radio then do nothing
            if (e.target.tagName.toLowerCase() === 'input') return;
            if (this.get('disableRow').call(this, value, index)) return;

            if (this.get('rowCheckable')) {
                this._checkUncheckRow(key);
            }

            if (this.get('rowExpandable')) {
                this._expandShrinkRow(key);
            }
        }
    }, {
        key: '_checkUncheckRow',
        value: function _checkUncheckRow(key) {
            var isCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var isToggle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            var checkType = this.get('checkType');
            if (checkType === 'checkbox') {
                var checkedKeys = this.get('checkedKeys').slice(0);
                var i = checkedKeys.indexOf(key);
                if ((!isCheck || isToggle) && i > -1) {
                    checkedKeys.splice(i, 1);
                    this.set('checkedKeys', checkedKeys);
                } else if (isCheck || isToggle) {
                    checkedKeys.push(key);
                    this.set('checkedKeys', checkedKeys);
                }
            } else if (checkType === 'radio') {
                this.set('checkedKey', key);
            }
        }
    }, {
        key: '_expandShrinkRow',
        value: function _expandShrinkRow(key) {
            var isExpand = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var isToggle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (typeof this.get('expand') !== 'function') return;

            var expandedKeys = this.get('expandedKeys').slice(0);
            var i = expandedKeys.indexOf(key);
            if ((!isExpand || isToggle) && i > -1) {
                expandedKeys.splice(i, 1);
                this.set('expandedKeys', expandedKeys);
            } else if (isExpand || isToggle) {
                expandedKeys.push(key);
                this.set('expandedKeys', expandedKeys);
            }
        }
    }, {
        key: '_sort',
        value: function _sort(key, value) {
            var sort = Object.assign({}, this.get('sort'));
            sort.key = key;
            sort.type = sort.type === 'desc' ? 'asc' : 'desc';
            this.set('sort', sort);
        }
    }, {
        key: '_dragStart',
        value: function _dragStart(e) {
            // left key
            if (e.which !== 1) return;

            this._resizing = true;
            this._containerWidth = this.element.offsetWidth;
            this._x = e.clientX;

            var currentTh = e.target.parentNode;
            var prevTh = currentTh.previousElementSibling;

            this._currentThs = [currentTh];
            this._prevThs = [prevTh];
            this._tables = [this.table];

            if (this.get('fixHeader')) {
                var ths = this.table.children[0].getElementsByTagName('th');
                var fixThs = currentTh.parentNode.children;
                var index = slice.call(fixThs).indexOf(currentTh);
                this._currentThs.push(ths[index]);
                this._prevThs.push(ths[index - 1]);
                // this._tables.push(this.header.children[0]);
                // if fixHeader we should change the width of header and scroll
                this._tables = [this.header, this.scroll];
            }

            document.addEventListener('mousemove', this._move);
            document.addEventListener('mouseup', this._dragEnd);
        }
    }, {
        key: '_move',
        value: function _move(e) {
            if (this._resizing) {
                var delX = e.clientX - this._x;
                var prevWidth = this._prevThs[0].offsetWidth + delX;
                var tableWidth = this._tables[0].offsetWidth + delX;

                if (prevWidth < MIN_WIDTH) return;

                this._prevThs.forEach(function (item) {
                    item.style.width = prevWidth + 'px';
                });

                if (this._containerWidth >= tableWidth) {
                    this._tables.forEach(function (item) {
                        item.style.width = '100%';
                    });
                } else {
                    this._tables.forEach(function (item) {
                        item.style.width = tableWidth + 'px';
                    });
                }

                this._x = e.clientX;
            }
        }
    }, {
        key: '_dragEnd',
        value: function _dragEnd(e) {
            if (this._resizing) {
                this._resizing = false;
                document.removeEventListener('mousemove', this._move);
                document.removeEventListener('mouseup', this._dragEnd);
            }
        }
    }, {
        key: '_destroy',
        value: function _destroy() {
            this._dragEnd();
        }
    }, {
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);

    return Table;
}(_intact2.default), _class2.propTypes = {
    rowCheckable: Boolean,
    rowExpandable: Boolean,
    resizable: Boolean,
    fixHeader: Boolean
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Table;
exports.Table = Table;
exports.TableColumn = _column2.default;

// reference: http://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript

function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}

/***/ }),

/***/ "./components/table/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _this = this,
        _classNameObj;

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

    var _self$get = self.get(),
        checkType = _self$get.checkType,
        scheme = _self$get.scheme,
        checkedKeys = _self$get.checkedKeys,
        data = _self$get.data,
        rowKey = _self$get.rowKey,
        className = _self$get.className,
        fixHeader = _self$get.fixHeader,
        noDataTemplate = _self$get.noDataTemplate,
        disableRow = _self$get.disableRow,
        groups = _self$get.groups,
        resizable = _self$get.resizable,
        expand = _self$get.expand,
        expandedKeys = _self$get.expandedKeys,
        type = _self$get.type,
        style = _self$get.style,
        rowClassName = _self$get.rowClassName,
        children = _self$get.children,
        sort = _self$get.sort;

    var colSpan = checkType === 'checkbox' || checkType === 'radio' ? 1 : 0;
    var expandable = typeof expand === 'function';
    var _scheme = {};

    var theadCreator = function theadCreator() {
        return h('thead', null, h('tr', null, [function () {
            try {
                return [checkType === 'checkbox'][0];
            } catch (e) {
                _e(e);
            }
        }.call(_this) ? h('th', null, h(_checkbox2.default, { 'value': function () {
                try {
                    return [self.isCheckAll()][0];
                } catch (e) {
                    _e(e);
                }
            }.call(_this), 'ev-$change:value': function () {
                try {
                    return [self._toggleCheckAll][0];
                } catch (e) {
                    _e(e);
                }
            }.call(_this), 'children': null, '_context': _this }), 'k-th-check') : function () {
            try {
                return [checkType === 'radio'][0];
            } catch (e) {
                _e(e);
            }
        }.call(_this) ? h('th', null, null, 'k-th-check') : undefined, '\n        ', function () {
            var _this2 = this;

            try {
                return [__u.map(scheme, function (item, key) {
                    colSpan++;

                    if (!__u.isObject(item)) {
                        item = { title: item };
                    }

                    return h(_column2.default, _extends({}, function () {
                        try {
                            return [item][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this2), { 'key': function () {
                            try {
                                return [key][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this2), '$parent': function () {
                            try {
                                return [self][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this2), 'ev-click': function () {
                            try {
                                return [item.sortable ? self._sort.bind(self, key, item) : undefined][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this2), 'ev-dragStart': function () {
                            try {
                                return [self._dragStart][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this2), 'children': null, '_context': _this2 }));
                })][0];
            } catch (e) {
                _e(e);
            }
        }.call(_this), '\n        ', function () {
            try {
                return [// for using TableColumn as children
                __u.map(children ? Array.isArray(children) ? children : [children] : children, function (vNode) {
                    if (vNode.tag === _column2.default) {
                        colSpan++;
                        var props = _extends({}, vNode.props, { $parent: self });
                        vNode.props = props;
                        if (props.key == null) {
                            _e('key for TableColumn must be specified.');
                        } else if (/^\d+$/.test(props.key)) {
                            // avoid digital key
                            _e('don\'t use digits as key.');
                        }
                        _scheme[props.key] = {
                            title: props.title,
                            template: props.template || props.default
                        };
                        return vNode;
                    }
                })][0];
            } catch (e) {
                _e(e);
            }
        }.call(_this), '\n    ']));
    };

    var thead = theadCreator();

    var tbody = h('tbody', null, ['\n    ', function () {
        var _this3 = this;

        try {
            return [data && data.length ? __u.map(data, function (value, index) {
                var key = rowKey.call(self, value, index);
                var disabled = disableRow.call(self, value, index);
                var className = rowClassName.call(self, value, index);
                var tr = h(_row2.default, { 'key': function () {
                        try {
                            return [key][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3), 'ev-click': function () {
                        try {
                            return [self._clickRow.bind(self, value, index, key)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3), 'className': _className(function () {
                        try {
                            var _ref;

                            return [(_ref = {
                                'k-disabled': disabled
                            }, _defineProperty(_ref, className, className), _defineProperty(_ref, 'k-checked', self.isChecked(key)), _ref)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3)), 'ev-$destroyed': function () {
                        try {
                            return [self.shrinkRow.bind(self, key)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3), 'children': [function () {
                        try {
                            return [checkType === 'checkbox'][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3) ? h('td', null, h(_checkbox2.default, { 'name': 'k-table-checkbox', 'trueValue': function () {
                            try {
                                return [key][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this3), 'disabled': function () {
                            try {
                                return [disabled][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this3), 'children': null, '_context': _this3, value: _getModel(self, 'checkedKeys'), 'ev-$change:value': function ev$changeValue(__c, __n) {
                            _setModel(self, 'checkedKeys', __n);
                        } })) : function () {
                        try {
                            return [checkType === 'radio'][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3) ? h('td', null, h(_radio2.default, { 'name': 'k-table-radio', 'trueValue': function () {
                            try {
                                return [key][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this3), 'disabled': function () {
                            try {
                                return [disabled][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this3), 'children': null, '_context': _this3, value: _getModel(self, 'checkedKey'), 'ev-$change:value': function ev$changeValue(__c, __n) {
                            _setModel(self, 'checkedKey', __n);
                        } })) : undefined, '\n                ', function () {
                        var _this4 = this;

                        try {
                            return [__u.map(__u.extend({}, scheme, _scheme), function (item, key) {
                                var td = void 0;
                                if (__u.isObject(item) && item.template) {
                                    if (typeof item.template === 'function') {
                                        td = item.template.call(self, value, index);
                                        // for Intact-Vue
                                        if (_intact.normalize) {
                                            td = (0, _intact.normalize)(td);
                                        }
                                    } else {
                                        td = item.template;
                                    }
                                } else if (value[key] !== undefined) {
                                    td = value[key];
                                } else {
                                    var _obj = value,
                                        keys = key.split('.'),
                                        i = 0;
                                    while (_obj != null && i < keys.length) {
                                        _obj = _obj[keys[i++]];
                                    }
                                    td = i && i === keys.length ? _obj : null;
                                }
                                return h('td', { 'title': function () {
                                        try {
                                            return [typeof td === 'string' || typeof td === 'number' ? td : undefined][0];
                                        } catch (e) {
                                            _e(e);
                                        }
                                    }.call(_this4) }, function () {
                                    try {
                                        return [typeof td === 'boolean' ? String(td) : td][0];
                                    } catch (e) {
                                        _e(e);
                                    }
                                }.call(_this4));
                            })][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3), '\n            '], '_context': _this3 });

                if (expandable && expandedKeys.indexOf(key) > -1) {
                    return [tr, h('tr', null, h('td', { 'colspan': function () {
                            try {
                                return [colSpan][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this3) }, function () {
                        try {
                            return [expand.call(self, value, index)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3)), 'k-expand', function () {
                        try {
                            return [key + '.expand'][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this3))];
                } else {
                    return tr;
                }
            }) : h('tr', null, h('td', { 'colspan': function () {
                    try {
                        return [colSpan][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this) }, ['\n                ', function () {
                try {
                    return [noDataTemplate][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), '\n            '], 'k-no-data'), null, 'table_no_data')][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n']);

    var classNameObj = (_classNameObj = {
        'k-table-wrapper': true
    }, _defineProperty(_classNameObj, className, className), _defineProperty(_classNameObj, 'k-' + type, type !== 'default'), _classNameObj);

    var table = h('table', null, ['\n    ', function () {
        try {
            return [thead][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n    ', function () {
        try {
            return [tbody][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n'], 'k-table', null, function () {
        try {
            return [function (dom) {
                return self.table = dom;
            }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this));

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [function () {
        try {
            return [fixHeader][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', { 'style': function () {
            try {
                return [{ paddingRight: self.get('_padding') + 'px' }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, h('table', null, ['\n            ', function () {
        try {
            return [theadCreator()][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n        '], 'k-table'), 'k-fixed', null, function () {
        try {
            return [function (dom) {
                return self.header = dom;
            }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)) : undefined, '\n    ', function () {
        try {
            return [fixHeader ? h('div', { 'style': function () {
                    try {
                        return [typeof fixHeader === 'number' || typeof fixHeader === 'string' ? { maxHeight: fixHeader + 'px' } : undefined][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this) }, function () {
                try {
                    return [table][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'k-scroll', null, function () {
                try {
                    return [function (dom) {
                        return self.scroll = dom;
                    }][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this)) : table][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n'], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _checkbox = __webpack_require__("./components/checkbox/index.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = __webpack_require__("./components/radio/index.js");

var _radio2 = _interopRequireDefault(_radio);

var _row = __webpack_require__("./components/table/row.js");

var _row2 = _interopRequireDefault(_row);

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _column = __webpack_require__("./components/table/column.js");

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/table/row.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _row = __webpack_require__("./components/table/row.vdt");

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// for tr $destroyed event
var TableRow = function (_Intact) {
    _inherits(TableRow, _Intact);

    function TableRow() {
        _classCallCheck(this, TableRow);

        return _possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).apply(this, arguments));
    }

    _createClass(TableRow, [{
        key: 'template',
        get: function get() {
            return _row2.default;
        }
    }]);

    return TableRow;
}(_intact2.default);

exports.default = TableRow;
module.exports = exports['default'];

/***/ }),

/***/ "./components/table/row.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
  return h('tr', _extends({}, function () {
    try {
      return [self.get()][0];
    } catch (e) {
      _e(e);
    }
  }.call(this)), function () {
    try {
      return [self.get('children')][0];
    } catch (e) {
      _e(e);
    }
  }.call(this));
};

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/table recursive demos.*index.js$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./demos/basic/index.js": "./site/components/table/demos/basic/index.js"
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
webpackContext.id = "./site/components/table recursive demos.*index.js$";

/***/ }),

/***/ "./site/components/table/demos/basic/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/table/demos/basic/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/table/demos/basic/index.vdt");

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

/***/ "./site/components/table/demos/basic/index.vdt":
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

  var scheme = { a: '表头1', b: '表头2' };
  var data2 = [{ a: '哈哈1', b: '哈哈2' }, { a: '表头固定啦', b: '哈哈2' }, { a: '往下拉', b: '哈哈2' }, { a: '我是底部', b: '哈哈2' }];

  return h('div', null, h(_table2.default, { 'scheme': function () {
      try {
        return [scheme][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'data': function () {
      try {
        return [data2][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'fixHeader': function () {
      try {
        return [100][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': null, '_context': this }));
};

var _table = __webpack_require__("./components/table/index.js");

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/table/index.js":
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

var _index = __webpack_require__("./site/components/table/index.json");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var r = __webpack_require__("./site/components/table recursive demos.*index.js$");
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

/***/ "./site/components/table/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"表格","category":"组件","order":1},"catalogs":[],"contents":"<h1 id='header-%E8%A1%A8%E6%A0%BC%E5%B1%9E%E6%80%A7%20Table'>表格属性 Table</h1><div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>data</td>\n<td>表格数据</td>\n<td><code>Array</code></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>scheme</td>\n<td>表头信息</td>\n<td><code>Object</code></td>\n<td><code>{}</code></td>\n</tr>\n<tr>\n<td>checkType</td>\n<td>框的类型: 单选 radio , 复选 checkbox ,  没有 none</td>\n<td><code>String</code></td>\n<td><code>&quot;checkbox&quot;</code></td>\n</tr>\n<tr>\n<td>noDataTemplate</td>\n<td>当没有数据的时候展示信息</td>\n<td><code>String</code></td>\n<td><code>&quot;/(ㄒoㄒ)/~~ 没有找到亲要的数据哦~&quot;</code></td>\n</tr>\n<tr>\n<td>fixHeader</td>\n<td>表头固定</td>\n<td><code>Boolean</code></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n                    </table>\n                </div><p>| rowKey | 设置行的key | <code>Function</code> | <code>function(value, index) {  return index; }</code> || rowClassName | 设置行的class | <code>Function</code> | <code>function(value, index) {  }</code> || checkedKeys | 哪行被选中（针对多选） | <code>Array</code> | <code>[]</code> || checkedKey | 哪行被选中（针对单选） | <code>任何</code> | <code>undefined</code> || rowCheckable | 是否整行选中 | <code>Boolean</code> | <code>true</code> || rowExpandable | 是否点击整行展开 | <code>Boolean</code> | <code>true</code> || disableRow | 禁用某一行 | <code>Function</code> | <code>function(data, index) { return false }</code> || sort | 排序 | <code>Object</code> | <code>{}</code> || groups | 分组 | <code>Object</code> | <code>{}</code> || resizable | 是否可以表头拖动 | <code>Boolean</code> | <code>false</code> || expand | 展开条件 | <code>Function</code> | <code>undefined</code> || expandedKeys | 哪行展开 | <code>Array</code> | <code>[]</code> || type | 类型 | <code>String</code> | <code>&quot;default&quot;</code> || _padding | padding | <code>Number</code> | <code>0</code> || _disabledAmount | disabledAmount | <code>Number</code> | <code>0</code> |</p>\n","codes":[{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":93,"sideBars":{"组件":[{"title":"面包屑","path":"components/breadcrumb/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Breadcrumb","path":"#header-Breadcrumb","level":2,"content":"<h2 id='header-Breadcrumb'>Breadcrumb</h2>","text":"Breadcrumb","children":[]},{"title":"BreadcrumbItem","path":"#header-BreadcrumbItem","level":2,"content":"<h2 id='header-BreadcrumbItem'>BreadcrumbItem</h2>","text":"BreadcrumbItem","children":[]}]}]},{"title":"按钮","path":"components/button/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Button","path":"#header-Button","level":2,"content":"<h2 id='header-Button'>Button</h2>","text":"Button","children":[]},{"title":"ButtonGroup","path":"#header-ButtonGroup","level":2,"content":"<h2 id='header-ButtonGroup'>ButtonGroup</h2>","text":"ButtonGroup","children":[]}]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Button","path":"#header-Button","level":2,"content":"<h2 id='header-Button'>Button</h2>","text":"Button","children":[]}]}]},{"title":"复选框","path":"components/checkbox/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"日期选择","path":"components/datepicker/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"弹窗","path":"components/dialog/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"下拉菜单","path":"components/dropdown/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Dropdown","path":"#header-Dropdown","level":2,"content":"<h2 id='header-Dropdown'>Dropdown</h2>","text":"Dropdown","children":[]},{"title":"DropdownItem","path":"#header-DropdownItem","level":2,"content":"<h2 id='header-DropdownItem'>DropdownItem</h2>","text":"DropdownItem","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":2,"content":"<h2 id='header-%E4%BA%8B%E4%BB%B6'>事件</h2>","text":"事件","children":[]},{"title":"DropdownItem","path":"#header-DropdownItem","level":2,"content":"<h2 id='header-DropdownItem'>DropdownItem</h2>","text":"DropdownItem","children":[]}]}]},{"title":"可编辑文本","path":"components/editable/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"表单","path":"components/form/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"FormItem","path":"#header-FormItem","level":2,"content":"<h2 id='header-FormItem'>FormItem</h2>","text":"FormItem","children":[]}]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[{"title":"FormItem","path":"#header-FormItem","level":2,"content":"<h2 id='header-FormItem'>FormItem</h2>","text":"FormItem","children":[]}]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]},{"title":"静态方法","path":"#header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95'>静态方法</h1>","text":"静态方法","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]}]},{"title":"栅格","path":"components/grid/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Row","path":"#header-Row","level":2,"content":"<h2 id='header-Row'>Row</h2>","text":"Row","children":[]},{"title":"Col","path":"#header-Col","level":2,"content":"<h2 id='header-Col'>Col</h2>","text":"Col","children":[]}]}]},{"title":"输入框","path":"components/input/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"全局提示","path":"components/message/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"静态方法","path":"#header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95'>静态方法</h1>","text":"静态方法","children":[]}]},{"title":"分页","path":"components/pagination/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Pagination","path":"#header-Pagination","level":2,"content":"<h2 id='header-Pagination'>Pagination</h2>","text":"Pagination","children":[]}]}]},{"title":"进度条","path":"components/progress/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"单选框","path":"components/radio/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"选择框","path":"components/select/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Select","path":"#header-Select","level":2,"content":"<h2 id='header-Select'>Select</h2>","text":"Select","children":[]},{"title":"Option","path":"#header-Option","level":2,"content":"<h2 id='header-Option'>Option</h2>","text":"Option","children":[]}]}]},{"title":"滑块","path":"components/slider/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"数字输入框","path":"components/spinner/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"步骤条","path":"components/steps/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Steps","path":"#header-Steps","level":2,"content":"<h2 id='header-Steps'>Steps</h2>","text":"Steps","children":[]},{"title":"Step","path":"#header-Step","level":2,"content":"<h2 id='header-Step'>Step</h2>","text":"Step","children":[]}]}]},{"title":"表格","path":"components/table/index.md","children":[{"title":"表格属性 Table","path":"#header-%E8%A1%A8%E6%A0%BC%E5%B1%9E%E6%80%A7%20Table","level":1,"content":"<h1 id='header-%E8%A1%A8%E6%A0%BC%E5%B1%9E%E6%80%A7%20Table'>表格属性 Table</h1>","text":"表格属性 Table","children":[]}]},{"title":"穿梭框","path":"components/transfer/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]}]},"highlighted":[{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2NvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2NvbHVtbi52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3Jvdy52ZHQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL3RhYmxlIGRlbW9zLippbmRleC5qcyQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL3RhYmxlL2RlbW9zL2Jhc2ljL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy90YWJsZS9kZW1vcy9iYXNpYy9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL3RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy90YWJsZS9pbmRleC5qc29uIl0sIm5hbWVzIjpbIlRhYmxlQ29sdW1uIiwidGl0bGUiLCJ0ZW1wbGF0ZSIsImRhdGEiLCJpbmRleCIsImtleSIsInNvcnRhYmxlIiwid2lkdGgiLCJ1bmRlZmluZWQiLCJncm91cHMiLCIkcGFyZW50IiwiZSIsInRyaWdnZXIiLCJvYmoiLCJfVmR0IiwiYmxvY2tzIiwiJGNhbGxlZSIsIlZkdCIsImgiLCJtaXNzIiwiaGMiLCJodSIsIndpZGdldHMiLCJfYmxvY2tzIiwiX19ibG9ja3MiLCJfX3UiLCJ1dGlscyIsImV4dGVuZCIsIl9lIiwiZXJyb3IiLCJfY2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiX19vIiwiT3B0aW9ucyIsIl9nZXRNb2RlbCIsImdldE1vZGVsIiwiX3NldE1vZGVsIiwic2V0TW9kZWwiLCJfc2V0Q2hlY2tib3hNb2RlbCIsInNldENoZWNrYm94TW9kZWwiLCJfZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiX3NldFNlbGVjdE1vZGVsIiwic2V0U2VsZWN0TW9kZWwiLCJzZWxmIiwic2NvcGUiLCJBbmltYXRlIiwicGFyZW50IiwiX3N1cGVyIiwiZ2V0Iiwic29ydCIsInJlc2l6YWJsZSIsImNhbGwiLCJvbkNsaWNrIiwib25EcmFnU3RhcnQiLCJ0eXBlIiwic2Nyb2xsQmFyV2lkdGgiLCJNSU5fV0lEVEgiLCJzbGljZSIsIkFycmF5IiwicHJvdG90eXBlIiwiVGFibGUiLCJzY2hlbWUiLCJjaGVja1R5cGUiLCJyb3dLZXkiLCJ2YWx1ZSIsInJvd0NsYXNzTmFtZSIsImNoZWNrZWRLZXlzIiwiY2hlY2tlZEtleSIsInJvd0NoZWNrYWJsZSIsInJvd0V4cGFuZGFibGUiLCJub0RhdGFUZW1wbGF0ZSIsImRpc2FibGVSb3ciLCJleHBhbmQiLCJleHBhbmRlZEtleXMiLCJmaXhIZWFkZXIiLCJfcGFkZGluZyIsIl9kaXNhYmxlZEFtb3VudCIsIm9uIiwiYyIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJmb3JFYWNoIiwiaXRlbSIsIl9jYWxjSGVhZGVyUGFkZGluZyIsIl91cGRhdGVEaXNhYmxlZEFtb3VudCIsIl9tb3ZlIiwiYmluZCIsIl9kcmFnRW5kIiwiZ2V0U2Nyb2xsYmFyV2lkdGgiLCJkYXRhTGVuZ3RoIiwibGVuZ3RoIiwiZGlzYWJsZWRBbW91bnQiLCJhbW91bnQiLCJpbmRleE9mIiwicHVzaCIsInNldCIsIl9jaGVja1VuY2hlY2tSb3ciLCJfZXhwYW5kU2hyaW5rUm93IiwiY2hlY2tlZEtleXNNYXAiLCJmaWx0ZXIiLCJ0YWJsZUhlaWdodCIsInRhYmxlIiwib2Zmc2V0SGVpZ2h0IiwiY29udGFpbmVySGVpZ2h0Iiwic2Nyb2xsIiwiaGVhZGVySGVpZ2h0IiwiaGVhZGVyIiwiY2hlY2tlZCIsImNoZWNrQWxsIiwidW5jaGVja0FsbCIsInRhcmdldCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImlzQ2hlY2siLCJpc1RvZ2dsZSIsImkiLCJzcGxpY2UiLCJpc0V4cGFuZCIsIk9iamVjdCIsImFzc2lnbiIsIndoaWNoIiwiX3Jlc2l6aW5nIiwiX2NvbnRhaW5lcldpZHRoIiwiZWxlbWVudCIsIm9mZnNldFdpZHRoIiwiX3giLCJjbGllbnRYIiwiY3VycmVudFRoIiwicGFyZW50Tm9kZSIsInByZXZUaCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJfY3VycmVudFRocyIsIl9wcmV2VGhzIiwiX3RhYmxlcyIsInRocyIsImNoaWxkcmVuIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmaXhUaHMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWxYIiwicHJldldpZHRoIiwidGFibGVXaWR0aCIsInN0eWxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInByb3BUeXBlcyIsIkJvb2xlYW4iLCJvdXRlciIsImNyZWF0ZUVsZW1lbnQiLCJ2aXNpYmlsaXR5IiwibXNPdmVyZmxvd1N0eWxlIiwiYm9keSIsImFwcGVuZENoaWxkIiwid2lkdGhOb1Njcm9sbCIsIm92ZXJmbG93IiwiaW5uZXIiLCJ3aWR0aFdpdGhTY3JvbGwiLCJyZW1vdmVDaGlsZCIsImNvbFNwYW4iLCJleHBhbmRhYmxlIiwiX3NjaGVtZSIsInRoZWFkQ3JlYXRvciIsImlzQ2hlY2tBbGwiLCJfdG9nZ2xlQ2hlY2tBbGwiLCJtYXAiLCJpc09iamVjdCIsIl9zb3J0IiwiX2RyYWdTdGFydCIsImlzQXJyYXkiLCJ2Tm9kZSIsInRhZyIsInByb3BzIiwidGVzdCIsImRlZmF1bHQiLCJ0aGVhZCIsInRib2R5IiwiZGlzYWJsZWQiLCJ0ciIsIl9jbGlja1JvdyIsImlzQ2hlY2tlZCIsInNocmlua1JvdyIsIl9fYyIsIl9fbiIsInRkIiwia2V5cyIsInNwbGl0IiwiU3RyaW5nIiwiY2xhc3NOYW1lT2JqIiwiZG9tIiwicGFkZGluZ1JpZ2h0IiwibWF4SGVpZ2h0IiwiVGFibGVSb3ciLCJhIiwiYiIsImRhdGEyIiwiciIsImRlbW9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7O21DQUdOO0FBQ1AsbUJBQU87QUFDSEMsdUJBQU8sRUFESjtBQUVIQyx3QkFGRyxvQkFFTUMsSUFGTixFQUVZQyxLQUZaLEVBRW1CLENBQUcsQ0FGdEI7O0FBR0hDLHFCQUFLLEVBSEY7QUFJSEMsMEJBQVUsS0FKUDtBQUtIQyx1QkFBT0MsU0FMSjtBQU1IQyx3QkFBUUQsU0FOTDs7QUFRSDtBQUNBRSx5QkFBU0Y7QUFUTixhQUFQO0FBV0g7OztnQ0FFT0csQyxFQUFHO0FBQ1AsaUJBQUtDLE9BQUwsQ0FBYSxPQUFiLEVBQXNCRCxDQUF0QjtBQUNIOzs7b0NBRVdBLEMsRUFBRztBQUNYLGlCQUFLQyxPQUFMLENBQWEsV0FBYixFQUEwQkQsQ0FBMUI7QUFDSDs7OzRCQXRCYztBQUFFO0FBQWtCOzs7Ozs7a0JBRGxCWCxXOzs7Ozs7Ozs7Ozs7Ozs7a0JDRk4sVUFBU2EsR0FBVCxFQUFjQyxJQUFkLEVBQW9CQyxNQUFwQixFQUE0QkMsT0FBNUIsRUFBcUM7O0FBRXBERixhQUFTQSxPQUFPRyxHQUFoQjtBQUNBSixZQUFRQSxNQUFNLEVBQWQ7QUFDQUUsZUFBV0EsU0FBUyxFQUFwQjtBQUNBLFFBQUlHLElBQUlKLEtBQUtLLElBQUwsQ0FBVUQsQ0FBbEI7QUFBQSxRQUFxQkUsS0FBS04sS0FBS0ssSUFBTCxDQUFVQyxFQUFwQztBQUFBLFFBQXdDQyxLQUFLUCxLQUFLSyxJQUFMLENBQVVFLEVBQXZEO0FBQUEsUUFBMkRDLFVBQVUsUUFBUSxLQUFLQSxPQUFiLElBQXdCLEVBQTdGO0FBQUEsUUFBaUdDLFVBQVUsRUFBM0c7QUFBQSxRQUErR0MsV0FBVyxFQUExSDtBQUFBLFFBQ0FDLE1BQU1YLEtBQUtZLEtBRFg7QUFBQSxRQUNrQkMsU0FBU0YsSUFBSUUsTUFEL0I7QUFBQSxRQUN1Q0MsS0FBS0gsSUFBSUksS0FEaEQ7QUFBQSxRQUN1REMsYUFBYUwsSUFBSU0sU0FEeEU7QUFBQSxRQUVBQyxNQUFNUCxJQUFJUSxPQUZWO0FBQUEsUUFFbUJDLFlBQVlGLElBQUlHLFFBRm5DO0FBQUEsUUFFNkNDLFlBQVlKLElBQUlLLFFBRjdEO0FBQUEsUUFHQUMsb0JBQW9CYixJQUFJYyxnQkFIeEI7QUFBQSxRQUcwQ0MseUJBQXlCZixJQUFJZ0IscUJBSHZFO0FBQUEsUUFJQUMsa0JBQWtCakIsSUFBSWtCLGNBSnRCO0FBQUEsUUFLQUMsT0FBTyxLQUFLekMsSUFMWjtBQUFBLFFBS2tCMEMsUUFBUWhDLEdBTDFCO0FBQUEsUUFLK0JpQyxVQUFVRixRQUFRQSxLQUFLRSxPQUx0RDtBQUFBLFFBSytEQyxTQUFTLENBQUMvQixXQUFXLEVBQVosRUFBZ0JnQyxNQUx4Rjs7QUFMb0Qsb0JBY2hESixLQUFLSyxHQUFMLEVBZGdEO0FBQUEsUUFZaEQxQyxLQVpnRCxhQVloREEsS0FaZ0Q7QUFBQSxRQVl6Q04sS0FaeUMsYUFZekNBLEtBWnlDO0FBQUEsUUFZbENJLEdBWmtDLGFBWWxDQSxHQVprQztBQUFBLFFBYWhEQyxRQWJnRCxhQWFoREEsUUFiZ0Q7QUFBQSxRQWF0Q0csTUFic0MsYUFhdENBLE1BYnNDO0FBQUEsUUFhOUJDLE9BYjhCLGFBYTlCQSxPQWI4Qjs7QUFBQSx1QkFlMUJBLFFBQVF1QyxHQUFSLEVBZjBCO0FBQUEsUUFlN0NDLElBZjZDLGdCQWU3Q0EsSUFmNkM7QUFBQSxRQWV2Q0MsU0FmdUMsZ0JBZXZDQSxTQWZ1Qzs7QUFpQnBELFdBQU9qQyxFQUFFLElBQUYsRUFBUSxFQUFDLFNBQVMsWUFBVztBQUFDLGdCQUFJO0FBQUMsdUJBQU8sQ0FBQ1gsS0FBRCxFQUFTLENBQVQsQ0FBUDtBQUFtQixhQUF4QixDQUF5QixPQUFNSSxDQUFOLEVBQVM7QUFBQ2lCLG1CQUFHakIsQ0FBSDtBQUFNO0FBQUMsU0FBdEQsQ0FBdUR5QyxJQUF2RCxDQUE0RCxJQUE1RCxDQUFWLEVBQTZFLFNBQVMsWUFBVztBQUFDLGdCQUFJO0FBQUMsdUJBQU8sQ0FBQ25ELEtBQUQsRUFBUyxDQUFULENBQVA7QUFBbUIsYUFBeEIsQ0FBeUIsT0FBTVUsQ0FBTixFQUFTO0FBQUNpQixtQkFBR2pCLENBQUg7QUFBTTtBQUFDLFNBQXRELENBQXVEeUMsSUFBdkQsQ0FBNEQsSUFBNUQsQ0FBdEYsRUFBeUosWUFBWSxZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDUixLQUFLUyxPQUFOLEVBQWdCLENBQWhCLENBQVA7QUFBMEIsYUFBL0IsQ0FBZ0MsT0FBTTFDLENBQU4sRUFBUztBQUFDaUIsbUJBQUdqQixDQUFIO0FBQU07QUFBQyxTQUE3RCxDQUE4RHlDLElBQTlELENBQW1FLElBQW5FLENBQXJLLEVBQVIsRUFBd1AsQ0FBQyxZQUFXO0FBQUMsWUFBSTtBQUFDLG1CQUFPLENBQUNELFNBQUQsRUFBYSxDQUFiLENBQVA7QUFBdUIsU0FBNUIsQ0FBNkIsT0FBTXhDLENBQU4sRUFBUztBQUFDaUIsZUFBR2pCLENBQUg7QUFBTTtBQUFDLEtBQTFELENBQTJEeUMsSUFBM0QsQ0FBZ0UsSUFBaEUsSUFBd0VsQyxFQUFFLEtBQUYsRUFBUyxFQUFDLGdCQUFnQixZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDMEIsS0FBS1UsV0FBTixFQUFvQixDQUFwQixDQUFQO0FBQThCLGFBQW5DLENBQW9DLE9BQU0zQyxDQUFOLEVBQVM7QUFBQ2lCLG1CQUFHakIsQ0FBSDtBQUFNO0FBQUMsU0FBakUsQ0FBa0V5QyxJQUFsRSxDQUF1RSxJQUF2RSxDQUFqQixFQUFULEVBQXlHLElBQXpHLEVBQStHLFVBQS9HLENBQXhFLEdBQXFNNUMsU0FBdE0sRUFBaU5VLEVBQUUsS0FBRixFQUFTLElBQVQsRUFBZSxDQUFDLFlBQVc7QUFBQyxZQUFJO0FBQUMsbUJBQU8sQ0FBQyxDQUFDVCxNQUFGLEVBQVcsQ0FBWCxDQUFQO0FBQXFCLFNBQTFCLENBQTJCLE9BQU1FLENBQU4sRUFBUztBQUFDaUIsZUFBR2pCLENBQUg7QUFBTTtBQUFDLEtBQXhELENBQXlEeUMsSUFBekQsQ0FBOEQsSUFBOUQsSUFBc0VsQyxFQUFFLEtBQUYsRUFBUyxJQUFULEVBQWUsWUFBVztBQUFDLFlBQUk7QUFBQyxtQkFBTyxDQUFDakIsS0FBRCxFQUFTLENBQVQsQ0FBUDtBQUFtQixTQUF4QixDQUF5QixPQUFNVSxDQUFOLEVBQVM7QUFBQ2lCLGVBQUdqQixDQUFIO0FBQU07QUFBQyxLQUF0RCxDQUF1RHlDLElBQXZELENBQTRELElBQTVELENBQWYsRUFBa0YsWUFBbEYsQ0FBdEUsR0FBd0s1QyxTQUF6SyxFQUFvTCxZQUFwTCxFQUFrTSxZQUFXO0FBQUE7O0FBQUMsWUFBSTtBQUFDLG1CQUFPO0FBQzdxQixvQkFBSUYsUUFBSixFQUFjO0FBQ1Ysd0JBQU1pRCxPQUFPbEQsUUFBUTZDLEtBQUs3QyxHQUFiLEdBQW1CNkMsS0FBS0ssSUFBeEIsR0FBK0IsRUFBNUM7QUFEVSwyQkFFVnJDLEVBQUUsS0FBRixFQUFTLElBQVQsRUFBZUEsRUFBRSxHQUFGLEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUJZLFdBQVcsWUFBVztBQUFDLDRCQUFJO0FBQUE7O0FBQUMsbUNBQU87QUFDN0QsMENBQVU7QUFEbUQsK0RBRXBEeUIsSUFGb0QsRUFFM0NBLElBRjJDLHlCQUc3RCxlQUg2RCxFQUc1QyxDQUFDQSxJQUgyQyxVQUk3RCxDQUo2RCxDQUFQO0FBSW5ELHlCQUo4QyxDQUk3QyxPQUFNNUMsQ0FBTixFQUFTO0FBQUNpQiwrQkFBR2pCLENBQUg7QUFBTTtBQUFDLHFCQUpnQixDQUlmeUMsSUFKZSxPQUFYLENBQW5CLENBQWYsRUFJNEN0QixXQUFXLFlBQVc7QUFBQyw0QkFBSTtBQUFDLG1DQUFPLG1CQUFFLFVBQVUsSUFBWixXQUF3QnlCLElBQXhCLEVBQWlDQSxJQUFqQyxHQUF5QyxDQUF6QyxDQUFQO0FBQW1ELHlCQUF4RCxDQUF5RCxPQUFNNUMsQ0FBTixFQUFTO0FBQUNpQiwrQkFBR2pCLENBQUg7QUFBTTtBQUFDLHFCQUF0RixDQUF1RnlDLElBQXZGLE9BQVgsQ0FKNUMsQ0FGVTtBQU9iO0FBUjRxQixpQkFTN3FCLENBVDZxQixDQUFQO0FBU25xQixTQVQ4cEIsQ0FTN3BCLE9BQU16QyxDQUFOLEVBQVM7QUFBQ2lCLGVBQUdqQixDQUFIO0FBQU07QUFBQyxLQVRnb0IsQ0FTL25CeUMsSUFUK25CLENBUzFuQixJQVQwbkIsQ0FBbE0sRUFTamIsUUFUaWIsQ0FBZixFQVN2WixNQVR1WixDQUFqTixDQUF4UCxFQVM0RHRCLFdBQVcsWUFBVztBQUFDLFlBQUk7QUFBQyxtQkFBTyxDQUFDLEVBQUMsY0FBY3hCLFFBQWYsRUFBRCxFQUE0QixDQUE1QixDQUFQO0FBQXNDLFNBQTNDLENBQTRDLE9BQU1LLENBQU4sRUFBUztBQUFDaUIsZUFBR2pCLENBQUg7QUFBTTtBQUFDLEtBQXpFLENBQTBFeUMsSUFBMUUsQ0FBK0UsSUFBL0UsQ0FBWCxDQVQ1RCxDQUFQO0FBVUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkQ7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQUlJLGlCQUFpQmhELFNBQXJCOztBQUVBLElBQU1pRCxZQUFZLEVBQWxCO0FBQ0EsSUFBTUMsUUFBUUMsTUFBTUMsU0FBTixDQUFnQkYsS0FBOUI7O0lBR3FCRyxLLFdBQ2hCLGlCQUFPM0QsUUFBUCxFOzs7Ozs7Ozs7OzttQ0FHVTtBQUNQLG1CQUFPO0FBQ0hDLHNCQUFNLEVBREg7QUFFSDJELHdCQUFRLEVBRkw7QUFHSEMsMkJBQVcsVUFIUixFQUdvQjtBQUN2QkMsc0JBSkcsa0JBSUlDLEtBSkosRUFJVzdELEtBSlgsRUFJa0I7QUFBRSwyQkFBT0EsS0FBUDtBQUFlLGlCQUpuQztBQUtIOEQsNEJBTEcsd0JBS1VELEtBTFYsRUFLaUI3RCxLQUxqQixFQUt3QixDQUFJLENBTDVCO0FBSzhCO0FBQ2pDK0QsNkJBQWEsRUFOVixFQU1jO0FBQ2pCQyw0QkFBWTVELFNBUFQsRUFPb0I7QUFDdkI2RCw4QkFBYyxJQVJYLEVBUWlCO0FBQ3BCQywrQkFBZSxJQVRaLEVBU2tCO0FBQ3JCQyxnQ0FBZ0IsdUJBVmI7QUFXSEMsMEJBWEcsc0JBV1FyRSxJQVhSLEVBV2NDLEtBWGQsRUFXcUI7QUFBRSwyQkFBTyxLQUFQO0FBQWMsaUJBWHJDOztBQVlIOEMsc0JBQU0sRUFaSDtBQWFIekMsd0JBQVEsRUFiTDtBQWNIMEMsMkJBQVcsS0FkUjtBQWVIc0Isd0JBQVFqRSxTQWZMLEVBZWdCO0FBQ25Ca0UsOEJBQWMsRUFoQlg7QUFpQkhuQixzQkFBTSxTQWpCSCxFQWlCYztBQUNqQm9CLDJCQUFXLEtBbEJSOztBQW9CSEMsMEJBQVUsQ0FwQlA7QUFxQkhDLGlDQUFpQjtBQXJCZCxhQUFQO0FBdUJIOzs7Z0NBU087QUFBQTs7QUFDSjtBQUNBLGlCQUFLQyxFQUFMLENBQVEscUJBQVIsRUFBK0IsVUFBQ0MsQ0FBRCxFQUFJQyxRQUFKLEVBQWNDLFFBQWQsRUFBMkI7QUFDdEQsdUJBQUtyRSxPQUFMLENBQWEsaUJBQWIsRUFBZ0NtRSxDQUFoQyxFQUFtQ0MsUUFBbkMsRUFBNkNDLFFBQTdDO0FBQ0gsYUFGRDtBQUdBLGlCQUFLSCxFQUFMLENBQVEsb0JBQVIsRUFBOEIsVUFBQ0MsQ0FBRCxFQUFJQyxRQUFKLEVBQWNDLFFBQWQsRUFBMkI7QUFDckQsdUJBQUtyRSxPQUFMLENBQWEsaUJBQWIsRUFBZ0NtRSxDQUFoQyxFQUFtQyxDQUFDQyxRQUFELENBQW5DLEVBQStDLENBQUNDLFFBQUQsQ0FBL0M7QUFDSCxhQUZEO0FBR0E7QUFDQSxhQUFDLE1BQUQsRUFBUyxXQUFULEVBQXNCQyxPQUF0QixDQUE4QixnQkFBUTtBQUNsQyx1QkFBS0osRUFBTCxlQUFvQkssSUFBcEIsRUFBNEIsT0FBS0Msa0JBQWpDO0FBQ0gsYUFGRDtBQUdBO0FBQ0EsYUFBQyxNQUFELEVBQVMsWUFBVCxFQUF1QkYsT0FBdkIsQ0FBK0IsZ0JBQVE7QUFDbkMsdUJBQUtKLEVBQUwsY0FBbUJLLElBQW5CLEVBQTJCLE9BQUtFLHFCQUFoQztBQUNILGFBRkQ7QUFHQSxpQkFBS0EscUJBQUw7O0FBRUEsaUJBQUtDLEtBQUwsR0FBYSxLQUFLQSxLQUFMLENBQVdDLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBYjtBQUNBLGlCQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtBQUNIOzs7aUNBRVE7QUFDTCxnQkFBSS9CLG1CQUFtQmhELFNBQXZCLEVBQWtDO0FBQzlCZ0QsaUNBQWlCaUMsbUJBQWpCO0FBQ0g7QUFDRCxpQkFBS0wsa0JBQUw7QUFDSDs7O3FDQUVZO0FBQ1QsZ0JBQU1qQixjQUFjLEtBQUtsQixHQUFMLENBQVMsYUFBVCxDQUFwQjtBQUNBLGdCQUFNeUMsYUFBYSxLQUFLekMsR0FBTCxDQUFTLE1BQVQsRUFBaUIwQyxNQUFwQztBQUNBLGdCQUFNQyxpQkFBaUIsS0FBSzNDLEdBQUwsQ0FBUyxpQkFBVCxDQUF2QjtBQUNBLGdCQUFNNEMsU0FBU0gsYUFBYUUsY0FBNUI7QUFDQSxtQkFBT0MsVUFBVTFCLFlBQVl3QixNQUFaLEtBQXVCRSxNQUF4QztBQUNIOzs7a0NBRVN4RixHLEVBQUs7QUFBQSx1QkFDa0MsS0FBSzRDLEdBQUwsRUFEbEM7QUFBQSxnQkFDSmMsU0FESSxRQUNKQSxTQURJO0FBQUEsZ0JBQ09LLFVBRFAsUUFDT0EsVUFEUDtBQUFBLGdCQUNtQkQsV0FEbkIsUUFDbUJBLFdBRG5COztBQUVYLGdCQUFJSixjQUFjLFVBQWxCLEVBQThCO0FBQzFCLHVCQUFPLENBQUNJLFlBQVkyQixPQUFaLENBQW9CekYsR0FBcEIsQ0FBUjtBQUNILGFBRkQsTUFFTyxJQUFJMEQsY0FBYyxPQUFsQixFQUEyQjtBQUM5Qix1QkFBT0ssZUFBZS9ELEdBQXRCO0FBQ0g7QUFDRCxtQkFBTyxLQUFQO0FBQ0g7OzttQ0FFVTtBQUFBOztBQUNQLGdCQUFNMkQsU0FBUyxLQUFLZixHQUFMLENBQVMsUUFBVCxDQUFmO0FBQ0EsZ0JBQU11QixhQUFhLEtBQUt2QixHQUFMLENBQVMsWUFBVCxDQUFuQjtBQUNBLGdCQUFNa0IsY0FBYyxFQUFwQjtBQUNBLGlCQUFLbEIsR0FBTCxDQUFTLE1BQVQsRUFBaUJpQyxPQUFqQixDQUF5QixVQUFDakIsS0FBRCxFQUFRN0QsS0FBUixFQUFrQjtBQUN2QyxvQkFBSSxDQUFDb0UsV0FBV3BCLElBQVgsU0FBc0JhLEtBQXRCLEVBQTZCN0QsS0FBN0IsQ0FBTCxFQUEwQztBQUN0QytELGdDQUFZNEIsSUFBWixDQUFpQi9CLE9BQU9aLElBQVAsU0FBa0JhLEtBQWxCLEVBQXlCN0QsS0FBekIsQ0FBakI7QUFDSDtBQUNKLGFBSkQ7QUFLQSxpQkFBSzRGLEdBQUwsQ0FBUyxhQUFULEVBQXdCN0IsV0FBeEI7QUFDSDs7O3FDQUVZO0FBQ1QsaUJBQUs2QixHQUFMLENBQVMsYUFBVCxFQUF3QixFQUF4QjtBQUNIOzs7aUNBRVEzRixHLEVBQUs7QUFDVixpQkFBSzRGLGdCQUFMLENBQXNCNUYsR0FBdEIsRUFBMkIsSUFBM0IsRUFBaUMsS0FBakM7QUFDSDs7O21DQUVVQSxHLEVBQUs7QUFDWixpQkFBSzRGLGdCQUFMLENBQXNCNUYsR0FBdEIsRUFBMkIsS0FBM0IsRUFBa0MsS0FBbEM7QUFDSDs7O2tDQUVTQSxHLEVBQUs7QUFDWCxpQkFBSzZGLGdCQUFMLENBQXNCN0YsR0FBdEIsRUFBMkIsS0FBM0IsRUFBa0MsS0FBbEM7QUFDSDs7O2tDQUVTQSxHLEVBQUs7QUFDWCxpQkFBSzZGLGdCQUFMLENBQXNCN0YsR0FBdEIsRUFBMkIsSUFBM0IsRUFBaUMsS0FBakM7QUFDSDs7QUFFRDs7Ozs7Ozt5Q0FJaUI7QUFBQTs7QUFDYixnQkFBTTJELFNBQVMsS0FBS2YsR0FBTCxDQUFTLFFBQVQsQ0FBZjtBQUNBLGdCQUFNYyxZQUFZLEtBQUtkLEdBQUwsQ0FBUyxXQUFULENBQWxCO0FBQ0EsZ0JBQUljLGNBQWMsVUFBbEIsRUFBOEI7QUFDMUIsb0JBQU1JLGNBQWMsS0FBS2xCLEdBQUwsQ0FBUyxhQUFULENBQXBCO0FBQ0Esb0JBQU1rRCxpQkFBaUIsRUFBdkI7QUFDQWhDLDRCQUFZZSxPQUFaLENBQW9CLFVBQUNDLElBQUQsRUFBVTtBQUMxQmdCLG1DQUFlaEIsSUFBZixJQUF1QixJQUF2QjtBQUNILGlCQUZEO0FBR0EsdUJBQU8sS0FBS2xDLEdBQUwsQ0FBUyxNQUFULEVBQWlCbUQsTUFBakIsQ0FBd0IsVUFBQ25DLEtBQUQsRUFBUTdELEtBQVIsRUFBa0I7QUFDN0Msd0JBQU1DLE1BQU0yRCxPQUFPWixJQUFQLFNBQWtCYSxLQUFsQixFQUF5QjdELEtBQXpCLENBQVo7QUFDQSwyQkFBTytGLGVBQWU5RixHQUFmLENBQVA7QUFDSCxpQkFITSxDQUFQO0FBSUgsYUFWRCxNQVVPLElBQUkwRCxjQUFjLE9BQWxCLEVBQTJCO0FBQzlCLG9CQUFNSyxhQUFhLEtBQUtuQixHQUFMLENBQVMsWUFBVCxDQUFuQjtBQUNBLHVCQUFPLEtBQUtBLEdBQUwsQ0FBUyxNQUFULEVBQWlCbUQsTUFBakIsQ0FBd0IsVUFBQ25DLEtBQUQsRUFBUTdELEtBQVIsRUFBa0I7QUFDN0MsMkJBQU80RCxPQUFPWixJQUFQLFNBQWtCYSxLQUFsQixFQUF5QjdELEtBQXpCLE1BQW9DZ0UsVUFBM0M7QUFDSCxpQkFGTSxDQUFQO0FBR0gsYUFMTSxNQUtBO0FBQ0gsdUJBQU8sRUFBUDtBQUNIO0FBQ0o7Ozs2Q0FFb0I7QUFDakIsZ0JBQUksS0FBS25CLEdBQUwsQ0FBUyxXQUFULENBQUosRUFBMkI7QUFDdkIsb0JBQU1vRCxjQUFjLEtBQUtDLEtBQUwsQ0FBV0MsWUFBL0I7QUFDQSxvQkFBTUMsa0JBQWtCLEtBQUtDLE1BQUwsQ0FBWUYsWUFBcEM7QUFDQSxvQkFBTUcsZUFBZSxLQUFLQyxNQUFMLENBQVlKLFlBQWpDO0FBQ0EscUJBQUtQLEdBQUwsQ0FBUyxVQUFULEVBQXFCSyxjQUFjSyxZQUFkLEdBQTZCRixlQUE3QixHQUErQ2hELGNBQS9DLEdBQWdFLENBQXJGO0FBQ0g7QUFDSjs7O2dEQUV1QjtBQUFBOztBQUNwQixnQkFBSW9DLGlCQUFpQixDQUFyQjtBQUNBLGdCQUFNcEIsYUFBYSxLQUFLdkIsR0FBTCxDQUFTLFlBQVQsQ0FBbkI7QUFDQSxpQkFBS0EsR0FBTCxDQUFTLE1BQVQsRUFBaUJpQyxPQUFqQixDQUF5QixVQUFDQyxJQUFELEVBQU8vRSxLQUFQLEVBQWlCO0FBQ3RDLG9CQUFJb0UsV0FBV3BCLElBQVgsU0FBc0IrQixJQUF0QixFQUE0Qi9FLEtBQTVCLENBQUosRUFBd0M7QUFDcEN3RjtBQUNIO0FBQ0osYUFKRDtBQUtBLGlCQUFLSSxHQUFMLENBQVMsaUJBQVQsRUFBNEJKLGNBQTVCO0FBQ0g7Ozt3Q0FFZWIsQyxFQUFHNkIsTyxFQUFTO0FBQ3hCLGdCQUFJQSxPQUFKLEVBQWE7QUFDVCxxQkFBS0MsUUFBTDtBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLQyxVQUFMO0FBQ0g7QUFDSjs7O2tDQUVTN0MsSyxFQUFPN0QsSyxFQUFPQyxHLEVBQUtNLEMsRUFBRztBQUM1QjtBQUNBLGdCQUFJQSxFQUFFb0csTUFBRixDQUFTQyxPQUFULENBQWlCQyxXQUFqQixPQUFtQyxPQUF2QyxFQUFnRDtBQUNoRCxnQkFBSSxLQUFLaEUsR0FBTCxDQUFTLFlBQVQsRUFBdUJHLElBQXZCLENBQTRCLElBQTVCLEVBQWtDYSxLQUFsQyxFQUF5QzdELEtBQXpDLENBQUosRUFBcUQ7O0FBRXJELGdCQUFJLEtBQUs2QyxHQUFMLENBQVMsY0FBVCxDQUFKLEVBQThCO0FBQzFCLHFCQUFLZ0QsZ0JBQUwsQ0FBc0I1RixHQUF0QjtBQUNIOztBQUVELGdCQUFJLEtBQUs0QyxHQUFMLENBQVMsZUFBVCxDQUFKLEVBQStCO0FBQzNCLHFCQUFLaUQsZ0JBQUwsQ0FBc0I3RixHQUF0QjtBQUNIO0FBQ0o7Ozt5Q0FFZ0JBLEcsRUFBdUM7QUFBQSxnQkFBbEM2RyxPQUFrQyx1RUFBeEIsS0FBd0I7QUFBQSxnQkFBakJDLFFBQWlCLHVFQUFOLElBQU07O0FBQ3BELGdCQUFNcEQsWUFBWSxLQUFLZCxHQUFMLENBQVMsV0FBVCxDQUFsQjtBQUNBLGdCQUFJYyxjQUFjLFVBQWxCLEVBQThCO0FBQzFCLG9CQUFNSSxjQUFjLEtBQUtsQixHQUFMLENBQVMsYUFBVCxFQUF3QlMsS0FBeEIsQ0FBOEIsQ0FBOUIsQ0FBcEI7QUFDQSxvQkFBTTBELElBQUlqRCxZQUFZMkIsT0FBWixDQUFvQnpGLEdBQXBCLENBQVY7QUFDQSxvQkFBSSxDQUFDLENBQUM2RyxPQUFELElBQVlDLFFBQWIsS0FBMEJDLElBQUksQ0FBQyxDQUFuQyxFQUFzQztBQUNsQ2pELGdDQUFZa0QsTUFBWixDQUFtQkQsQ0FBbkIsRUFBc0IsQ0FBdEI7QUFDQSx5QkFBS3BCLEdBQUwsQ0FBUyxhQUFULEVBQXdCN0IsV0FBeEI7QUFDSCxpQkFIRCxNQUdPLElBQUkrQyxXQUFXQyxRQUFmLEVBQXlCO0FBQzVCaEQsZ0NBQVk0QixJQUFaLENBQWlCMUYsR0FBakI7QUFDQSx5QkFBSzJGLEdBQUwsQ0FBUyxhQUFULEVBQXdCN0IsV0FBeEI7QUFDSDtBQUNKLGFBVkQsTUFVTyxJQUFJSixjQUFjLE9BQWxCLEVBQTJCO0FBQzlCLHFCQUFLaUMsR0FBTCxDQUFTLFlBQVQsRUFBdUIzRixHQUF2QjtBQUNIO0FBQ0o7Ozt5Q0FFZ0JBLEcsRUFBd0M7QUFBQSxnQkFBbkNpSCxRQUFtQyx1RUFBeEIsS0FBd0I7QUFBQSxnQkFBakJILFFBQWlCLHVFQUFOLElBQU07O0FBQ3JELGdCQUFJLE9BQU8sS0FBS2xFLEdBQUwsQ0FBUyxRQUFULENBQVAsS0FBOEIsVUFBbEMsRUFBOEM7O0FBRTlDLGdCQUFNeUIsZUFBZSxLQUFLekIsR0FBTCxDQUFTLGNBQVQsRUFBeUJTLEtBQXpCLENBQStCLENBQS9CLENBQXJCO0FBQ0EsZ0JBQU0wRCxJQUFJMUMsYUFBYW9CLE9BQWIsQ0FBcUJ6RixHQUFyQixDQUFWO0FBQ0EsZ0JBQUksQ0FBQyxDQUFDaUgsUUFBRCxJQUFhSCxRQUFkLEtBQTJCQyxJQUFJLENBQUMsQ0FBcEMsRUFBdUM7QUFDbkMxQyw2QkFBYTJDLE1BQWIsQ0FBb0JELENBQXBCLEVBQXVCLENBQXZCO0FBQ0EscUJBQUtwQixHQUFMLENBQVMsY0FBVCxFQUF5QnRCLFlBQXpCO0FBQ0gsYUFIRCxNQUdPLElBQUk0QyxZQUFZSCxRQUFoQixFQUEwQjtBQUM3QnpDLDZCQUFhcUIsSUFBYixDQUFrQjFGLEdBQWxCO0FBQ0EscUJBQUsyRixHQUFMLENBQVMsY0FBVCxFQUF5QnRCLFlBQXpCO0FBQ0g7QUFDSjs7OzhCQUVLckUsRyxFQUFLNEQsSyxFQUFPO0FBQ2QsZ0JBQU1mLE9BQU9xRSxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLdkUsR0FBTCxDQUFTLE1BQVQsQ0FBbEIsQ0FBYjtBQUNBQyxpQkFBSzdDLEdBQUwsR0FBV0EsR0FBWDtBQUNBNkMsaUJBQUtLLElBQUwsR0FBWUwsS0FBS0ssSUFBTCxLQUFjLE1BQWQsR0FBdUIsS0FBdkIsR0FBK0IsTUFBM0M7QUFDQSxpQkFBS3lDLEdBQUwsQ0FBUyxNQUFULEVBQWlCOUMsSUFBakI7QUFDSDs7O21DQUVVdkMsQyxFQUFHO0FBQ1Y7QUFDQSxnQkFBSUEsRUFBRThHLEtBQUYsS0FBWSxDQUFoQixFQUFtQjs7QUFFbkIsaUJBQUtDLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxpQkFBS0MsZUFBTCxHQUF1QixLQUFLQyxPQUFMLENBQWFDLFdBQXBDO0FBQ0EsaUJBQUtDLEVBQUwsR0FBVW5ILEVBQUVvSCxPQUFaOztBQUVBLGdCQUFNQyxZQUFZckgsRUFBRW9HLE1BQUYsQ0FBU2tCLFVBQTNCO0FBQ0EsZ0JBQU1DLFNBQVNGLFVBQVVHLHNCQUF6Qjs7QUFFQSxpQkFBS0MsV0FBTCxHQUFtQixDQUFDSixTQUFELENBQW5CO0FBQ0EsaUJBQUtLLFFBQUwsR0FBZ0IsQ0FBQ0gsTUFBRCxDQUFoQjtBQUNBLGlCQUFLSSxPQUFMLEdBQWUsQ0FBQyxLQUFLaEMsS0FBTixDQUFmOztBQUVBLGdCQUFJLEtBQUtyRCxHQUFMLENBQVMsV0FBVCxDQUFKLEVBQTJCO0FBQ3ZCLG9CQUFNc0YsTUFBTSxLQUFLakMsS0FBTCxDQUFXa0MsUUFBWCxDQUFvQixDQUFwQixFQUF1QkMsb0JBQXZCLENBQTRDLElBQTVDLENBQVo7QUFDQSxvQkFBTUMsU0FBU1YsVUFBVUMsVUFBVixDQUFxQk8sUUFBcEM7QUFDQSxvQkFBTXBJLFFBQVFzRCxNQUFNTixJQUFOLENBQVdzRixNQUFYLEVBQW1CNUMsT0FBbkIsQ0FBMkJrQyxTQUEzQixDQUFkO0FBQ0EscUJBQUtJLFdBQUwsQ0FBaUJyQyxJQUFqQixDQUFzQndDLElBQUluSSxLQUFKLENBQXRCO0FBQ0EscUJBQUtpSSxRQUFMLENBQWN0QyxJQUFkLENBQW1Cd0MsSUFBSW5JLFFBQVEsQ0FBWixDQUFuQjtBQUNBO0FBQ0E7QUFDQSxxQkFBS2tJLE9BQUwsR0FBZSxDQUFDLEtBQUszQixNQUFOLEVBQWMsS0FBS0YsTUFBbkIsQ0FBZjtBQUNIOztBQUVEa0MscUJBQVNDLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDLEtBQUt0RCxLQUE1QztBQUNBcUQscUJBQVNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLEtBQUtwRCxRQUExQztBQUNIOzs7OEJBRUs3RSxDLEVBQUc7QUFDTCxnQkFBSSxLQUFLK0csU0FBVCxFQUFvQjtBQUNoQixvQkFBTW1CLE9BQU9sSSxFQUFFb0gsT0FBRixHQUFZLEtBQUtELEVBQTlCO0FBQ0Esb0JBQU1nQixZQUFZLEtBQUtULFFBQUwsQ0FBYyxDQUFkLEVBQWlCUixXQUFqQixHQUErQmdCLElBQWpEO0FBQ0Esb0JBQU1FLGFBQWEsS0FBS1QsT0FBTCxDQUFhLENBQWIsRUFBZ0JULFdBQWhCLEdBQThCZ0IsSUFBakQ7O0FBRUEsb0JBQUlDLFlBQVlyRixTQUFoQixFQUEyQjs7QUFFM0IscUJBQUs0RSxRQUFMLENBQWNuRCxPQUFkLENBQXNCLGdCQUFRO0FBQzFCQyx5QkFBSzZELEtBQUwsQ0FBV3pJLEtBQVgsR0FBbUJ1SSxZQUFZLElBQS9CO0FBQ0gsaUJBRkQ7O0FBSUEsb0JBQUksS0FBS25CLGVBQUwsSUFBd0JvQixVQUE1QixFQUF3QztBQUNwQyx5QkFBS1QsT0FBTCxDQUFhcEQsT0FBYixDQUFxQixnQkFBUTtBQUN6QkMsNkJBQUs2RCxLQUFMLENBQVd6SSxLQUFYLEdBQW1CLE1BQW5CO0FBQ0gscUJBRkQ7QUFHSCxpQkFKRCxNQUlPO0FBQ0gseUJBQUsrSCxPQUFMLENBQWFwRCxPQUFiLENBQXFCLGdCQUFRO0FBQ3pCQyw2QkFBSzZELEtBQUwsQ0FBV3pJLEtBQVgsR0FBbUJ3SSxhQUFhLElBQWhDO0FBQ0gscUJBRkQ7QUFHSDs7QUFFRCxxQkFBS2pCLEVBQUwsR0FBVW5ILEVBQUVvSCxPQUFaO0FBQ0g7QUFDSjs7O2lDQUVRcEgsQyxFQUFHO0FBQ1IsZ0JBQUksS0FBSytHLFNBQVQsRUFBb0I7QUFDaEIscUJBQUtBLFNBQUwsR0FBaUIsS0FBakI7QUFDQWlCLHlCQUFTTSxtQkFBVCxDQUE2QixXQUE3QixFQUEwQyxLQUFLM0QsS0FBL0M7QUFDQXFELHlCQUFTTSxtQkFBVCxDQUE2QixTQUE3QixFQUF3QyxLQUFLekQsUUFBN0M7QUFDSDtBQUNKOzs7bUNBRVU7QUFDUCxpQkFBS0EsUUFBTDtBQUNIOzs7NEJBL1JjO0FBQUU7QUFBa0I7Ozs7NkJBNEI1QjBELFMsR0FBWTtBQUNmN0Usa0JBQWM4RSxPQURDO0FBRWY3RSxtQkFBZTZFLE9BRkE7QUFHZmhHLGVBQVdnRyxPQUhJO0FBSWZ4RSxlQUFXd0U7QUFKSSxDO2tCQTlCRnRGLEs7UUFvU2JBLEssR0FBQUEsSztRQUFpQjdELFc7O0FBRXpCOztBQUNBLFNBQVN5RixpQkFBVCxHQUE2QjtBQUN6QixRQUFJMkQsUUFBUVQsU0FBU1UsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FELFVBQU1KLEtBQU4sQ0FBWU0sVUFBWixHQUF5QixRQUF6QjtBQUNBRixVQUFNSixLQUFOLENBQVl6SSxLQUFaLEdBQW9CLE9BQXBCO0FBQ0E2SSxVQUFNSixLQUFOLENBQVlPLGVBQVosR0FBOEIsV0FBOUIsQ0FKeUIsQ0FJa0I7O0FBRTNDWixhQUFTYSxJQUFULENBQWNDLFdBQWQsQ0FBMEJMLEtBQTFCOztBQUVBLFFBQUlNLGdCQUFnQk4sTUFBTXZCLFdBQTFCO0FBQ0E7QUFDQXVCLFVBQU1KLEtBQU4sQ0FBWVcsUUFBWixHQUF1QixRQUF2Qjs7QUFFQTtBQUNBLFFBQUlDLFFBQVFqQixTQUFTVSxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQU8sVUFBTVosS0FBTixDQUFZekksS0FBWixHQUFvQixNQUFwQjtBQUNBNkksVUFBTUssV0FBTixDQUFrQkcsS0FBbEI7O0FBRUEsUUFBSUMsa0JBQWtCRCxNQUFNL0IsV0FBNUI7O0FBRUE7QUFDQXVCLFVBQU1uQixVQUFOLENBQWlCNkIsV0FBakIsQ0FBNkJWLEtBQTdCOztBQUVBLFdBQU9NLGdCQUFnQkcsZUFBdkI7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7O2tCQ3hVYyxVQUFTaEosR0FBVCxFQUFjQyxJQUFkLEVBQW9CQyxNQUFwQixFQUE0QkMsT0FBNUIsRUFBcUM7QUFBQTtBQUFBOztBQUVwREYsYUFBU0EsT0FBT0csR0FBaEI7QUFDQUosWUFBUUEsTUFBTSxFQUFkO0FBQ0FFLGVBQVdBLFNBQVMsRUFBcEI7QUFDQSxRQUFJRyxJQUFJSixLQUFLSyxJQUFMLENBQVVELENBQWxCO0FBQUEsUUFBcUJFLEtBQUtOLEtBQUtLLElBQUwsQ0FBVUMsRUFBcEM7QUFBQSxRQUF3Q0MsS0FBS1AsS0FBS0ssSUFBTCxDQUFVRSxFQUF2RDtBQUFBLFFBQTJEQyxVQUFVLFFBQVEsS0FBS0EsT0FBYixJQUF3QixFQUE3RjtBQUFBLFFBQWlHQyxVQUFVLEVBQTNHO0FBQUEsUUFBK0dDLFdBQVcsRUFBMUg7QUFBQSxRQUNBQyxNQUFNWCxLQUFLWSxLQURYO0FBQUEsUUFDa0JDLFNBQVNGLElBQUlFLE1BRC9CO0FBQUEsUUFDdUNDLEtBQUtILElBQUlJLEtBRGhEO0FBQUEsUUFDdURDLGFBQWFMLElBQUlNLFNBRHhFO0FBQUEsUUFFQUMsTUFBTVAsSUFBSVEsT0FGVjtBQUFBLFFBRW1CQyxZQUFZRixJQUFJRyxRQUZuQztBQUFBLFFBRTZDQyxZQUFZSixJQUFJSyxRQUY3RDtBQUFBLFFBR0FDLG9CQUFvQmIsSUFBSWMsZ0JBSHhCO0FBQUEsUUFHMENDLHlCQUF5QmYsSUFBSWdCLHFCQUh2RTtBQUFBLFFBSUFDLGtCQUFrQmpCLElBQUlrQixjQUp0QjtBQUFBLFFBS0FDLE9BQU8sS0FBS3pDLElBTFo7QUFBQSxRQUtrQjBDLFFBQVFoQyxHQUwxQjtBQUFBLFFBSytCaUMsVUFBVUYsUUFBUUEsS0FBS0UsT0FMdEQ7QUFBQSxRQUsrREMsU0FBUyxDQUFDL0IsV0FBVyxFQUFaLEVBQWdCZ0MsTUFMeEY7O0FBTG9ELG9CQXNCaERKLEtBQUtLLEdBQUwsRUF0QmdEO0FBQUEsUUFrQmhEYyxTQWxCZ0QsYUFrQmhEQSxTQWxCZ0Q7QUFBQSxRQWtCckNELE1BbEJxQyxhQWtCckNBLE1BbEJxQztBQUFBLFFBa0I3QkssV0FsQjZCLGFBa0I3QkEsV0FsQjZCO0FBQUEsUUFrQmhCaEUsSUFsQmdCLGFBa0JoQkEsSUFsQmdCO0FBQUEsUUFrQlY2RCxNQWxCVSxhQWtCVkEsTUFsQlU7QUFBQSxRQW1CaERqQyxTQW5CZ0QsYUFtQmhEQSxTQW5CZ0Q7QUFBQSxRQW1CckM0QyxTQW5CcUMsYUFtQnJDQSxTQW5CcUM7QUFBQSxRQW1CMUJKLGNBbkIwQixhQW1CMUJBLGNBbkIwQjtBQUFBLFFBbUJWQyxVQW5CVSxhQW1CVkEsVUFuQlU7QUFBQSxRQW9CaEQvRCxNQXBCZ0QsYUFvQmhEQSxNQXBCZ0Q7QUFBQSxRQW9CeEMwQyxTQXBCd0MsYUFvQnhDQSxTQXBCd0M7QUFBQSxRQW9CN0JzQixNQXBCNkIsYUFvQjdCQSxNQXBCNkI7QUFBQSxRQW9CckJDLFlBcEJxQixhQW9CckJBLFlBcEJxQjtBQUFBLFFBb0JQbkIsSUFwQk8sYUFvQlBBLElBcEJPO0FBQUEsUUFxQmhEeUYsS0FyQmdELGFBcUJoREEsS0FyQmdEO0FBQUEsUUFxQnpDOUUsWUFyQnlDLGFBcUJ6Q0EsWUFyQnlDO0FBQUEsUUFxQjNCc0UsUUFyQjJCLGFBcUIzQkEsUUFyQjJCO0FBQUEsUUFxQmpCdEYsSUFyQmlCLGFBcUJqQkEsSUFyQmlCOztBQXdCcEQsUUFBSTZHLFVBQVVoRyxjQUFjLFVBQWQsSUFBNEJBLGNBQWMsT0FBMUMsR0FBb0QsQ0FBcEQsR0FBd0QsQ0FBdEU7QUFDQSxRQUFNaUcsYUFBYSxPQUFPdkYsTUFBUCxLQUFrQixVQUFyQztBQUNBLFFBQU13RixVQUFVLEVBQWhCOztBQUVBLFFBQU1DLGVBQWUsU0FBZkEsWUFBZTtBQUFBLGVBQU1oSixFQUFFLE9BQUYsRUFBVyxJQUFYLEVBQWlCQSxFQUFFLElBQUYsRUFBUSxJQUFSLEVBQWMsQ0FBQyxZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDNkMsY0FBYyxVQUFmLEVBQTRCLENBQTVCLENBQVA7QUFBc0MsYUFBM0MsQ0FBNEMsT0FBTXBELENBQU4sRUFBUztBQUFDaUIsbUJBQUdqQixDQUFIO0FBQU07QUFBQyxTQUF6RSxDQUEwRXlDLElBQTFFLFVBQXVGbEMsRUFBRSxJQUFGLEVBQVEsSUFBUixFQUFjQSxzQkFBWSxFQUFDLFNBQVMsWUFBVztBQUFDLG9CQUFJO0FBQUMsMkJBQU8sQ0FBQzBCLEtBQUt1SCxVQUFMLEVBQUQsRUFBcUIsQ0FBckIsQ0FBUDtBQUErQixpQkFBcEMsQ0FBcUMsT0FBTXhKLENBQU4sRUFBUztBQUFDaUIsdUJBQUdqQixDQUFIO0FBQU07QUFBQyxhQUFsRSxDQUFtRXlDLElBQW5FLE9BQVYsRUFBeUYsb0JBQW9CLFlBQVc7QUFBQyxvQkFBSTtBQUFDLDJCQUFPLENBQUNSLEtBQUt3SCxlQUFOLEVBQXdCLENBQXhCLENBQVA7QUFBa0MsaUJBQXZDLENBQXdDLE9BQU16SixDQUFOLEVBQVM7QUFBQ2lCLHVCQUFHakIsQ0FBSDtBQUFNO0FBQUMsYUFBckUsQ0FBc0V5QyxJQUF0RSxPQUE3RyxFQUErTCxZQUFZLElBQTNNLEVBQWlOLGlCQUFqTixFQUFaLENBQWQsRUFBK1AsWUFBL1AsQ0FBdkYsR0FBc1csWUFBVztBQUFDLGdCQUFJO0FBQUMsdUJBQU8sQ0FBQ1csY0FBYyxPQUFmLEVBQXlCLENBQXpCLENBQVA7QUFBbUMsYUFBeEMsQ0FBeUMsT0FBTXBELENBQU4sRUFBUztBQUFDaUIsbUJBQUdqQixDQUFIO0FBQU07QUFBQyxTQUF0RSxDQUF1RXlDLElBQXZFLFVBQW9GbEMsRUFBRSxJQUFGLEVBQVEsSUFBUixFQUFjLElBQWQsRUFBb0IsWUFBcEIsQ0FBcEYsR0FBd0hWLFNBQS9kLEVBQTBlLFlBQTFlLEVBQXdmLFlBQVc7QUFBQTs7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUNpQixJQUFJNEksR0FBSixDQUFRdkcsTUFBUixFQUFnQixVQUFDcUIsSUFBRCxFQUFPOUUsR0FBUCxFQUFlO0FBQzlsQjBKOztBQUVBLHdCQUFJLENBQUN0SSxJQUFJNkksUUFBSixDQUFhbkYsSUFBYixDQUFMLEVBQXlCO0FBQ3JCQSwrQkFBTyxFQUFDbEYsT0FBT2tGLElBQVIsRUFBUDtBQUNIOztBQUVELDJCQUFPakUsaUNBQWMsWUFBVztBQUFDLDRCQUFJO0FBQUMsbUNBQU8sQ0FBQ2lFLElBQUQsRUFBUSxDQUFSLENBQVA7QUFBa0IseUJBQXZCLENBQXdCLE9BQU14RSxDQUFOLEVBQVM7QUFBQ2lCLCtCQUFHakIsQ0FBSDtBQUFNO0FBQUMscUJBQXJELENBQXNEeUMsSUFBdEQsUUFBZCxJQUFnRixPQUFPLFlBQVc7QUFBQyxnQ0FBSTtBQUFDLHVDQUFPLENBQUMvQyxHQUFELEVBQU8sQ0FBUCxDQUFQO0FBQWlCLDZCQUF0QixDQUF1QixPQUFNTSxDQUFOLEVBQVM7QUFBQ2lCLG1DQUFHakIsQ0FBSDtBQUFNO0FBQUMseUJBQXBELENBQXFEeUMsSUFBckQsUUFBdkYsRUFBd0osV0FBVyxZQUFXO0FBQUMsZ0NBQUk7QUFBQyx1Q0FBTyxDQUFDUixJQUFELEVBQVEsQ0FBUixDQUFQO0FBQWtCLDZCQUF2QixDQUF3QixPQUFNakMsQ0FBTixFQUFTO0FBQUNpQixtQ0FBR2pCLENBQUg7QUFBTTtBQUFDLHlCQUFyRCxDQUFzRHlDLElBQXRELFFBQW5LLEVBQXFPLFlBQVksWUFBVztBQUFDLGdDQUFJO0FBQUMsdUNBQU8sQ0FBQytCLEtBQUs3RSxRQUFMLEdBQWdCc0MsS0FBSzJILEtBQUwsQ0FBV2hGLElBQVgsQ0FBZ0IzQyxJQUFoQixFQUFzQnZDLEdBQXRCLEVBQTJCOEUsSUFBM0IsQ0FBaEIsR0FBbUQzRSxTQUFwRCxFQUFnRSxDQUFoRSxDQUFQO0FBQTBFLDZCQUEvRSxDQUFnRixPQUFNRyxDQUFOLEVBQVM7QUFBQ2lCLG1DQUFHakIsQ0FBSDtBQUFNO0FBQUMseUJBQTdHLENBQThHeUMsSUFBOUcsUUFBalAsRUFBMlcsZ0JBQWdCLFlBQVc7QUFBQyxnQ0FBSTtBQUFDLHVDQUFPLENBQUNSLEtBQUs0SCxVQUFOLEVBQW1CLENBQW5CLENBQVA7QUFBNkIsNkJBQWxDLENBQW1DLE9BQU03SixDQUFOLEVBQVM7QUFBQ2lCLG1DQUFHakIsQ0FBSDtBQUFNO0FBQUMseUJBQWhFLENBQWlFeUMsSUFBakUsUUFBM1gsRUFBd2MsWUFBWSxJQUFwZCxFQUEwZCxrQkFBMWQsSUFBUDtBQUNILGlCQVJra0IsQ0FBRCxFQVE3akIsQ0FSNmpCLENBQVA7QUFRbmpCLGFBUjhpQixDQVE3aUIsT0FBTXpDLENBQU4sRUFBUztBQUFDaUIsbUJBQUdqQixDQUFIO0FBQU07QUFBQyxTQVJnaEIsQ0FRL2dCeUMsSUFSK2dCLE9BQXhmLEVBUVgsWUFSVyxFQVFHLFlBQVc7QUFBQyxnQkFBSTtBQUFDLHVCQUFPLENBQUM7QUFDMUUzQixvQkFBSTRJLEdBQUosQ0FBUTdCLFdBQVk3RSxNQUFNOEcsT0FBTixDQUFjakMsUUFBZCxJQUEwQkEsUUFBMUIsR0FBcUMsQ0FBQ0EsUUFBRCxDQUFqRCxHQUErREEsUUFBdkUsRUFBaUYsaUJBQVM7QUFDdEYsd0JBQUlrQyxNQUFNQyxHQUFOLHFCQUFKLEVBQTBCO0FBQ3RCWjtBQUNBLDRCQUFNYSxxQkFBWUYsTUFBTUUsS0FBbEIsSUFBeUJsSyxTQUFTa0MsSUFBbEMsR0FBTjtBQUNBOEgsOEJBQU1FLEtBQU4sR0FBY0EsS0FBZDtBQUNBLDRCQUFJQSxNQUFNdkssR0FBTixJQUFhLElBQWpCLEVBQXVCO0FBQ25CdUIsK0JBQUcsd0NBQUg7QUFDSCx5QkFGRCxNQUVPLElBQUksUUFBUWlKLElBQVIsQ0FBYUQsTUFBTXZLLEdBQW5CLENBQUosRUFBNkI7QUFDaEM7QUFDQXVCLCtCQUFHLDJCQUFIO0FBQ0g7QUFDRHFJLGdDQUFRVyxNQUFNdkssR0FBZCxJQUFxQjtBQUNqQkosbUNBQU8ySyxNQUFNM0ssS0FESTtBQUVqQkMsc0NBQVUwSyxNQUFNMUssUUFBTixJQUFrQjBLLE1BQU1FO0FBRmpCLHlCQUFyQjtBQUlBLCtCQUFPSixLQUFQO0FBQ0g7QUFDSixpQkFqQkQsQ0FEeUUsRUFtQjNFLENBbkIyRSxDQUFQO0FBbUJqRSxhQW5CNEQsQ0FtQjNELE9BQU0vSixDQUFOLEVBQVM7QUFBQ2lCLG1CQUFHakIsQ0FBSDtBQUFNO0FBQUMsU0FuQjhCLENBbUI3QnlDLElBbkI2QixPQVJILEVBMkJkLFFBM0JjLENBQWQsQ0FBakIsQ0FBTjtBQUFBLEtBQXJCOztBQTZCQSxRQUFNMkgsUUFBUWIsY0FBZDs7QUFFQSxRQUFNYyxRQUFROUosRUFBRSxPQUFGLEVBQVcsSUFBWCxFQUFpQixDQUFDLFFBQUQsRUFBVyxZQUFXO0FBQUE7O0FBQUMsWUFBSTtBQUFDLG1CQUFPLENBQUNmLFFBQVFBLEtBQUt3RixNQUFiLEdBQzNEbEUsSUFBSTRJLEdBQUosQ0FBUWxLLElBQVIsRUFBYyxVQUFDOEQsS0FBRCxFQUFRN0QsS0FBUixFQUFrQjtBQUM1QixvQkFBTUMsTUFBTTJELE9BQU9aLElBQVAsQ0FBWVIsSUFBWixFQUFrQnFCLEtBQWxCLEVBQXlCN0QsS0FBekIsQ0FBWjtBQUNBLG9CQUFNNkssV0FBV3pHLFdBQVdwQixJQUFYLENBQWdCUixJQUFoQixFQUFzQnFCLEtBQXRCLEVBQTZCN0QsS0FBN0IsQ0FBakI7QUFDQSxvQkFBTTJCLFlBQVltQyxhQUFhZCxJQUFiLENBQWtCUixJQUFsQixFQUF3QnFCLEtBQXhCLEVBQStCN0QsS0FBL0IsQ0FBbEI7QUFDQSxvQkFBTThLLEtBQUtoSyxpQkFBTyxFQUFDLE9BQU8sWUFBVztBQUFDLDRCQUFJO0FBQUMsbUNBQU8sQ0FBQ2IsR0FBRCxFQUFPLENBQVAsQ0FBUDtBQUFpQix5QkFBdEIsQ0FBdUIsT0FBTU0sQ0FBTixFQUFTO0FBQUNpQiwrQkFBR2pCLENBQUg7QUFBTTtBQUFDLHFCQUFwRCxDQUFxRHlDLElBQXJELFFBQVIsRUFBeUUsWUFBWSxZQUFXO0FBQUMsNEJBQUk7QUFBQyxtQ0FBTyxDQUFDUixLQUFLdUksU0FBTCxDQUFlNUYsSUFBZixDQUFvQjNDLElBQXBCLEVBQTBCcUIsS0FBMUIsRUFBaUM3RCxLQUFqQyxFQUF3Q0MsR0FBeEMsQ0FBRCxFQUFnRCxDQUFoRCxDQUFQO0FBQTBELHlCQUEvRCxDQUFnRSxPQUFNTSxDQUFOLEVBQVM7QUFBQ2lCLCtCQUFHakIsQ0FBSDtBQUFNO0FBQUMscUJBQTdGLENBQThGeUMsSUFBOUYsUUFBckYsRUFBK0wsYUFBYXRCLFdBQVcsWUFBVztBQUFDLDRCQUFJO0FBQUE7O0FBQUMsbUNBQU87QUFDelAsOENBQWNtSjtBQUQyTyxxREFFeFBsSixTQUZ3UCxFQUU1T0EsU0FGNE8seUJBR3pQLFdBSHlQLEVBRzVPYSxLQUFLd0ksU0FBTCxDQUFlL0ssR0FBZixDQUg0TyxVQUl6UCxDQUp5UCxDQUFQO0FBSS9PLHlCQUowTyxDQUl6TyxPQUFNTSxDQUFOLEVBQVM7QUFBQ2lCLCtCQUFHakIsQ0FBSDtBQUFNO0FBQUMscUJBSjRNLENBSTNNeUMsSUFKMk0sUUFBWCxDQUE1TSxFQUl5QixpQkFBaUIsWUFBVztBQUFDLDRCQUFJO0FBQUMsbUNBQU8sQ0FBQ1IsS0FBS3lJLFNBQUwsQ0FBZTlGLElBQWYsQ0FBb0IzQyxJQUFwQixFQUEwQnZDLEdBQTFCLENBQUQsRUFBa0MsQ0FBbEMsQ0FBUDtBQUE0Qyx5QkFBakQsQ0FBa0QsT0FBTU0sQ0FBTixFQUFTO0FBQUNpQiwrQkFBR2pCLENBQUg7QUFBTTtBQUFDLHFCQUEvRSxDQUFnRnlDLElBQWhGLFFBSjFDLEVBSXNJLFlBQVksQ0FBQyxZQUFXO0FBQUMsNEJBQUk7QUFBQyxtQ0FBTyxDQUFDVyxjQUFjLFVBQWYsRUFBNEIsQ0FBNUIsQ0FBUDtBQUFzQyx5QkFBM0MsQ0FBNEMsT0FBTXBELENBQU4sRUFBUztBQUFDaUIsK0JBQUdqQixDQUFIO0FBQU07QUFBQyxxQkFBekUsQ0FBMEV5QyxJQUExRSxXQUF1RmxDLEVBQUUsSUFBRixFQUFRLElBQVIsRUFBY0Esc0JBQVksRUFBQyxRQUFRLGtCQUFULEVBQTZCLGFBQWEsWUFBVztBQUFDLGdDQUFJO0FBQUMsdUNBQU8sQ0FBQ2IsR0FBRCxFQUFPLENBQVAsQ0FBUDtBQUFpQiw2QkFBdEIsQ0FBdUIsT0FBTU0sQ0FBTixFQUFTO0FBQUNpQixtQ0FBR2pCLENBQUg7QUFBTTtBQUFDLHlCQUFwRCxDQUFxRHlDLElBQXJELFFBQTFDLEVBQTJHLFlBQVksWUFBVztBQUFDLGdDQUFJO0FBQUMsdUNBQU8sQ0FBQzZILFFBQUQsRUFBWSxDQUFaLENBQVA7QUFBc0IsNkJBQTNCLENBQTRCLE9BQU10SyxDQUFOLEVBQVM7QUFBQ2lCLG1DQUFHakIsQ0FBSDtBQUFNO0FBQUMseUJBQXpELENBQTBEeUMsSUFBMUQsUUFBdkgsRUFBNkwsWUFBWSxJQUF6TSxFQUErTSxrQkFBL00sRUFBaU9hLE9BQU8vQixVQUFVVSxJQUFWLEVBQWdCLGFBQWhCLENBQXhPLEVBQXdRLG9CQUFvQix3QkFBUzBJLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUFFbkosc0NBQVVRLElBQVYsRUFBZ0IsYUFBaEIsRUFBK0IySSxHQUEvQjtBQUFxQyx5QkFBdFYsRUFBWixDQUFkLENBQXZGLEdBQTZjLFlBQVc7QUFBQyw0QkFBSTtBQUFDLG1DQUFPLENBQUN4SCxjQUFjLE9BQWYsRUFBeUIsQ0FBekIsQ0FBUDtBQUFtQyx5QkFBeEMsQ0FBeUMsT0FBTXBELENBQU4sRUFBUztBQUFDaUIsK0JBQUdqQixDQUFIO0FBQU07QUFBQyxxQkFBdEUsQ0FBdUV5QyxJQUF2RSxXQUFvRmxDLEVBQUUsSUFBRixFQUFRLElBQVIsRUFBY0EsbUJBQVMsRUFBQyxRQUFRLGVBQVQsRUFBMEIsYUFBYSxZQUFXO0FBQUMsZ0NBQUk7QUFBQyx1Q0FBTyxDQUFDYixHQUFELEVBQU8sQ0FBUCxDQUFQO0FBQWlCLDZCQUF0QixDQUF1QixPQUFNTSxDQUFOLEVBQVM7QUFBQ2lCLG1DQUFHakIsQ0FBSDtBQUFNO0FBQUMseUJBQXBELENBQXFEeUMsSUFBckQsUUFBdkMsRUFBd0csWUFBWSxZQUFXO0FBQUMsZ0NBQUk7QUFBQyx1Q0FBTyxDQUFDNkgsUUFBRCxFQUFZLENBQVosQ0FBUDtBQUFzQiw2QkFBM0IsQ0FBNEIsT0FBTXRLLENBQU4sRUFBUztBQUFDaUIsbUNBQUdqQixDQUFIO0FBQU07QUFBQyx5QkFBekQsQ0FBMER5QyxJQUExRCxRQUFwSCxFQUEwTCxZQUFZLElBQXRNLEVBQTRNLGtCQUE1TSxFQUE4TmEsT0FBTy9CLFVBQVVVLElBQVYsRUFBZ0IsWUFBaEIsQ0FBck8sRUFBb1Esb0JBQW9CLHdCQUFTMEksR0FBVCxFQUFjQyxHQUFkLEVBQW1CO0FBQUVuSixzQ0FBVVEsSUFBVixFQUFnQixZQUFoQixFQUE4QjJJLEdBQTlCO0FBQW9DLHlCQUFqVixFQUFULENBQWQsQ0FBcEYsR0FBa2MvSyxTQUFoNUIsRUFBMjVCLG9CQUEzNUIsRUFBaTdCLFlBQVc7QUFBQTs7QUFBQyw0QkFBSTtBQUFDLG1DQUFPLENBQUNpQixJQUFJNEksR0FBSixDQUFRNUksSUFBSUUsTUFBSixDQUFXLEVBQVgsRUFBZW1DLE1BQWYsRUFBdUJtRyxPQUF2QixDQUFSLEVBQXlDLFVBQUM5RSxJQUFELEVBQU85RSxHQUFQLEVBQWU7QUFDOXBDLG9DQUFJbUwsV0FBSjtBQUNBLG9DQUFJL0osSUFBSTZJLFFBQUosQ0FBYW5GLElBQWIsS0FBc0JBLEtBQUtqRixRQUEvQixFQUF5QztBQUNyQyx3Q0FBSSxPQUFPaUYsS0FBS2pGLFFBQVosS0FBeUIsVUFBN0IsRUFBeUM7QUFDckNzTCw2Q0FBS3JHLEtBQUtqRixRQUFMLENBQWNrRCxJQUFkLENBQW1CUixJQUFuQixFQUF5QnFCLEtBQXpCLEVBQWdDN0QsS0FBaEMsQ0FBTDtBQUNBO0FBQ0EsK0RBQWU7QUFDWG9MLGlEQUFLLHVCQUFVQSxFQUFWLENBQUw7QUFDSDtBQUNKLHFDQU5ELE1BTU87QUFDSEEsNkNBQUtyRyxLQUFLakYsUUFBVjtBQUNIO0FBQ0osaUNBVkQsTUFVTyxJQUFJK0QsTUFBTTVELEdBQU4sTUFBZUcsU0FBbkIsRUFBOEI7QUFDakNnTCx5Q0FBS3ZILE1BQU01RCxHQUFOLENBQUw7QUFDSCxpQ0FGTSxNQUVBO0FBQ0gsd0NBQUlRLE9BQU1vRCxLQUFWO0FBQUEsd0NBQ0l3SCxPQUFPcEwsSUFBSXFMLEtBQUosQ0FBVSxHQUFWLENBRFg7QUFBQSx3Q0FFSXRFLElBQUksQ0FGUjtBQUdBLDJDQUFPdkcsUUFBTyxJQUFQLElBQWV1RyxJQUFJcUUsS0FBSzlGLE1BQS9CLEVBQXVDO0FBQ25DOUUsK0NBQU1BLEtBQUk0SyxLQUFLckUsR0FBTCxDQUFKLENBQU47QUFDSDtBQUNEb0UseUNBQU1wRSxLQUFLQSxNQUFNcUUsS0FBSzlGLE1BQWpCLEdBQTJCOUUsSUFBM0IsR0FBaUMsSUFBdEM7QUFDSDtBQUNELHVDQUFPSyxFQUFFLElBQUYsRUFBUSxFQUFDLFNBQVMsWUFBVztBQUFDLDRDQUFJO0FBQUMsbURBQU8sQ0FBQyxPQUFPc0ssRUFBUCxLQUFjLFFBQWQsSUFBMEIsT0FBT0EsRUFBUCxLQUFjLFFBQXhDLEdBQzlDQSxFQUQ4QyxHQUN6Q2hMLFNBRHdDLEVBRS9DLENBRitDLENBQVA7QUFFckMseUNBRmdDLENBRS9CLE9BQU1HLENBQU4sRUFBUztBQUFDaUIsK0NBQUdqQixDQUFIO0FBQU07QUFBQyxxQ0FGRSxDQUVEeUMsSUFGQyxRQUFWLEVBQVIsRUFFOEIsWUFBVztBQUFDLHdDQUFJO0FBQUMsK0NBQU8sQ0FBQyxPQUFPb0ksRUFBUCxLQUFjLFNBQWQsR0FBMEJHLE9BQU9ILEVBQVAsQ0FBMUIsR0FBdUNBLEVBQXhDLEVBQTZDLENBQTdDLENBQVA7QUFBdUQscUNBQTVELENBQTZELE9BQU03SyxDQUFOLEVBQVM7QUFBQ2lCLDJDQUFHakIsQ0FBSDtBQUFNO0FBQUMsaUNBQTFGLENBQTJGeUMsSUFBM0YsUUFGOUIsQ0FBUDtBQUdILDZCQTFCeW1DLENBQUQsRUEwQnBtQyxDQTFCb21DLENBQVA7QUEwQjFsQyx5QkExQnFsQyxDQTBCcGxDLE9BQU16QyxDQUFOLEVBQVM7QUFBQ2lCLCtCQUFHakIsQ0FBSDtBQUFNO0FBQUMscUJBMUJ1akMsQ0EwQnRqQ3lDLElBMUJzakMsUUFBajdCLEVBMEJ6SCxnQkExQnlILENBSmxKLEVBOEI0QyxrQkE5QjVDLEVBQVAsQ0FBWDs7QUFnQ0Esb0JBQUk0RyxjQUFjdEYsYUFBYW9CLE9BQWIsQ0FBcUJ6RixHQUFyQixJQUE0QixDQUFDLENBQS9DLEVBQWtEO0FBQzlDLDJCQUFPLENBQ0g2SyxFQURHLEVBRUhoSyxFQUFFLElBQUYsRUFBUSxJQUFSLEVBQWNBLEVBQUUsSUFBRixFQUFRLEVBQUMsV0FBVyxZQUFXO0FBQUMsZ0NBQUk7QUFBQyx1Q0FBTyxDQUFDNkksT0FBRCxFQUFXLENBQVgsQ0FBUDtBQUFxQiw2QkFBMUIsQ0FBMkIsT0FBTXBKLENBQU4sRUFBUztBQUFDaUIsbUNBQUdqQixDQUFIO0FBQU07QUFBQyx5QkFBeEQsQ0FBeUR5QyxJQUF6RCxRQUFaLEVBQVIsRUFBMEYsWUFBVztBQUFDLDRCQUFJO0FBQUMsbUNBQU8sQ0FBQ3FCLE9BQU9yQixJQUFQLENBQVlSLElBQVosRUFBa0JxQixLQUFsQixFQUF5QjdELEtBQXpCLENBQUQsRUFBbUMsQ0FBbkMsQ0FBUDtBQUE2Qyx5QkFBbEQsQ0FBbUQsT0FBTU8sQ0FBTixFQUFTO0FBQUNpQiwrQkFBR2pCLENBQUg7QUFBTTtBQUFDLHFCQUFoRixDQUFpRnlDLElBQWpGLFFBQTFGLENBQWQsRUFBc00sVUFBdE0sRUFBa04sWUFBVztBQUFDLDRCQUFJO0FBQUMsbUNBQU8sQ0FBSS9DLEdBQUosY0FBbUIsQ0FBbkIsQ0FBUDtBQUE2Qix5QkFBbEMsQ0FBbUMsT0FBTU0sQ0FBTixFQUFTO0FBQUNpQiwrQkFBR2pCLENBQUg7QUFBTTtBQUFDLHFCQUFoRSxDQUFpRXlDLElBQWpFLFFBQWxOLENBRkcsQ0FBUDtBQUlILGlCQUxELE1BS087QUFDSCwyQkFBTzhILEVBQVA7QUFDSDtBQUNKLGFBNUNELENBRDJELEdBOEMzRGhLLEVBQUUsSUFBRixFQUFRLElBQVIsRUFBY0EsRUFBRSxJQUFGLEVBQVEsRUFBQyxXQUFXLFlBQVc7QUFBQyx3QkFBSTtBQUFDLCtCQUFPLENBQUM2SSxPQUFELEVBQVcsQ0FBWCxDQUFQO0FBQXFCLHFCQUExQixDQUEyQixPQUFNcEosQ0FBTixFQUFTO0FBQUNpQiwyQkFBR2pCLENBQUg7QUFBTTtBQUFDLGlCQUF4RCxDQUF5RHlDLElBQXpELENBQThELElBQTlELENBQVosRUFBUixFQUEwRixDQUFDLG9CQUFELEVBQXVCLFlBQVc7QUFBQyxvQkFBSTtBQUFDLDJCQUFPLENBQUNtQixjQUFELEVBQWtCLENBQWxCLENBQVA7QUFBNEIsaUJBQWpDLENBQWtDLE9BQU01RCxDQUFOLEVBQVM7QUFBQ2lCLHVCQUFHakIsQ0FBSDtBQUFNO0FBQUMsYUFBL0QsQ0FBZ0V5QyxJQUFoRSxDQUFxRSxJQUFyRSxDQUF2QixFQUFtRyxnQkFBbkcsQ0FBMUYsRUFBZ04sV0FBaE4sQ0FBZCxFQUE0TyxJQUE1TyxFQUFrUCxlQUFsUCxDQTlDMEQsRUErQzVELENBL0M0RCxDQUFQO0FBK0NsRCxTQS9DNkMsQ0ErQzVDLE9BQU16QyxDQUFOLEVBQVM7QUFBQ2lCLGVBQUdqQixDQUFIO0FBQU07QUFBQyxLQS9DZSxDQStDZHlDLElBL0NjLENBK0NULElBL0NTLENBQVgsRUErQ1MsSUEvQ1QsQ0FBakIsQ0FBZDs7QUFpREEsUUFBTXdJO0FBQ0YsMkJBQW1CO0FBRGpCLHNDQUVEN0osU0FGQyxFQUVXQSxTQUZYLHlDQUdJd0IsSUFISixFQUdhQSxTQUFTLFNBSHRCLGlCQUFOOztBQU1BLFFBQU0rQyxRQUFRcEYsRUFBRSxPQUFGLEVBQVcsSUFBWCxFQUFpQixDQUFDLFFBQUQsRUFBVyxZQUFXO0FBQUMsWUFBSTtBQUFDLG1CQUFPLENBQUM2SixLQUFELEVBQVMsQ0FBVCxDQUFQO0FBQW1CLFNBQXhCLENBQXlCLE9BQU1wSyxDQUFOLEVBQVM7QUFBQ2lCLGVBQUdqQixDQUFIO0FBQU07QUFBQyxLQUF0RCxDQUF1RHlDLElBQXZELENBQTRELElBQTVELENBQVgsRUFBOEUsUUFBOUUsRUFBd0YsWUFBVztBQUFDLFlBQUk7QUFBQyxtQkFBTyxDQUFDNEgsS0FBRCxFQUFTLENBQVQsQ0FBUDtBQUFtQixTQUF4QixDQUF5QixPQUFNckssQ0FBTixFQUFTO0FBQUNpQixlQUFHakIsQ0FBSDtBQUFNO0FBQUMsS0FBdEQsQ0FBdUR5QyxJQUF2RCxDQUE0RCxJQUE1RCxDQUF4RixFQUEySixJQUEzSixDQUFqQixFQUFtTCxTQUFuTCxFQUE4TCxJQUE5TCxFQUFvTSxZQUFXO0FBQUMsWUFBSTtBQUFDLG1CQUFPLENBQUM7QUFBQSx1QkFBT1IsS0FBSzBELEtBQUwsR0FBYXVGLEdBQXBCO0FBQUEsYUFBRCxFQUEyQixDQUEzQixDQUFQO0FBQXFDLFNBQTFDLENBQTJDLE9BQU1sTCxDQUFOLEVBQVM7QUFBQ2lCLGVBQUdqQixDQUFIO0FBQU07QUFBQyxLQUF4RSxDQUF5RXlDLElBQXpFLENBQThFLElBQTlFLENBQXBNLENBQWQ7O0FBRUEsV0FBT2xDLEVBQUUsS0FBRixFQUFTLEVBQUMsU0FBUyxZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDOEgsS0FBRCxFQUFTLENBQVQsQ0FBUDtBQUFtQixhQUF4QixDQUF5QixPQUFNckksQ0FBTixFQUFTO0FBQUNpQixtQkFBR2pCLENBQUg7QUFBTTtBQUFDLFNBQXRELENBQXVEeUMsSUFBdkQsQ0FBNEQsSUFBNUQsQ0FBVixFQUFULEVBQXVGLENBQUMsWUFBVztBQUFDLFlBQUk7QUFBQyxtQkFBTyxDQUFDdUIsU0FBRCxFQUFhLENBQWIsQ0FBUDtBQUF1QixTQUE1QixDQUE2QixPQUFNaEUsQ0FBTixFQUFTO0FBQUNpQixlQUFHakIsQ0FBSDtBQUFNO0FBQUMsS0FBMUQsQ0FBMkR5QyxJQUEzRCxDQUFnRSxJQUFoRSxJQUF3RWxDLEVBQUUsS0FBRixFQUFTLEVBQUMsU0FBUyxZQUFXO0FBQUMsZ0JBQUk7QUFBQyx1QkFBTyxDQUFDLEVBQUM0SyxjQUFjbEosS0FBS0ssR0FBTCxDQUFTLFVBQVQsSUFBdUIsSUFBdEMsRUFBRCxFQUErQyxDQUEvQyxDQUFQO0FBQXlELGFBQTlELENBQStELE9BQU10QyxDQUFOLEVBQVM7QUFBQ2lCLG1CQUFHakIsQ0FBSDtBQUFNO0FBQUMsU0FBNUYsQ0FBNkZ5QyxJQUE3RixDQUFrRyxJQUFsRyxDQUFWLEVBQVQsRUFBNkhsQyxFQUFFLE9BQUYsRUFBVyxJQUFYLEVBQWlCLENBQUMsZ0JBQUQsRUFBbUIsWUFBVztBQUFDLFlBQUk7QUFBQyxtQkFBTyxDQUFDZ0osY0FBRCxFQUFrQixDQUFsQixDQUFQO0FBQTRCLFNBQWpDLENBQWtDLE9BQU12SixDQUFOLEVBQVM7QUFBQ2lCLGVBQUdqQixDQUFIO0FBQU07QUFBQyxLQUEvRCxDQUFnRXlDLElBQWhFLENBQXFFLElBQXJFLENBQW5CLEVBQStGLFlBQS9GLENBQWpCLEVBQStILFNBQS9ILENBQTdILEVBQXdRLFNBQXhRLEVBQW1SLElBQW5SLEVBQXlSLFlBQVc7QUFBQyxZQUFJO0FBQUMsbUJBQU8sQ0FBQztBQUFBLHVCQUFPUixLQUFLK0QsTUFBTCxHQUFja0YsR0FBckI7QUFBQSxhQUFELEVBQTRCLENBQTVCLENBQVA7QUFBc0MsU0FBM0MsQ0FBNEMsT0FBTWxMLENBQU4sRUFBUztBQUFDaUIsZUFBR2pCLENBQUg7QUFBTTtBQUFDLEtBQXpFLENBQTBFeUMsSUFBMUUsQ0FBK0UsSUFBL0UsQ0FBelIsQ0FBeEUsR0FBeWI1QyxTQUExYixFQUFxYyxRQUFyYyxFQUErYyxZQUFXO0FBQUMsWUFBSTtBQUFDLG1CQUFPLENBQUNtRSxZQUM5akJ6RCxFQUFFLEtBQUYsRUFBUyxFQUFDLFNBQVMsWUFBVztBQUFDLHdCQUFJO0FBQUMsK0JBQU8sQ0FBQyxPQUFPeUQsU0FBUCxLQUFxQixRQUFyQixJQUFpQyxPQUFPQSxTQUFQLEtBQXFCLFFBQXRELEdBQ3BDLEVBQUNvSCxXQUFjcEgsU0FBZCxPQUFELEVBRG9DLEdBQ0puRSxTQURHLEVBRXJDLENBRnFDLENBQVA7QUFFM0IscUJBRnNCLENBRXJCLE9BQU1HLENBQU4sRUFBUztBQUFDaUIsMkJBQUdqQixDQUFIO0FBQU07QUFBQyxpQkFGUixDQUVTeUMsSUFGVCxDQUVjLElBRmQsQ0FBVixFQUFULEVBRXlDLFlBQVc7QUFBQyxvQkFBSTtBQUFDLDJCQUFPLENBQUNrRCxLQUFELEVBQVMsQ0FBVCxDQUFQO0FBQW1CLGlCQUF4QixDQUF5QixPQUFNM0YsQ0FBTixFQUFTO0FBQUNpQix1QkFBR2pCLENBQUg7QUFBTTtBQUFDLGFBQXRELENBQXVEeUMsSUFBdkQsQ0FBNEQsSUFBNUQsQ0FGekMsRUFFNEcsVUFGNUcsRUFFd0gsSUFGeEgsRUFFOEgsWUFBVztBQUFDLG9CQUFJO0FBQUMsMkJBQU8sQ0FBQztBQUFBLCtCQUFPUixLQUFLNkQsTUFBTCxHQUFjb0YsR0FBckI7QUFBQSxxQkFBRCxFQUE0QixDQUE1QixDQUFQO0FBQXNDLGlCQUEzQyxDQUE0QyxPQUFNbEwsQ0FBTixFQUFTO0FBQUNpQix1QkFBR2pCLENBQUg7QUFBTTtBQUFDLGFBQXpFLENBQTBFeUMsSUFBMUUsQ0FBK0UsSUFBL0UsQ0FGOUgsQ0FEOGpCLEdBSTlqQmtELEtBSjZqQixFQUsvakIsQ0FMK2pCLENBQVA7QUFLcmpCLFNBTGdqQixDQUsvaUIsT0FBTTNGLENBQU4sRUFBUztBQUFDaUIsZUFBR2pCLENBQUg7QUFBTTtBQUFDLEtBTGtoQixDQUtqaEJ5QyxJQUxpaEIsQ0FLNWdCLElBTDRnQixDQUEvYyxFQUt0RCxJQUxzRCxDQUF2RixFQUt3Q3RCLFdBQVcsWUFBVztBQUFDLFlBQUk7QUFBQyxtQkFBTyxDQUFDOEosWUFBRCxFQUFnQixDQUFoQixDQUFQO0FBQTBCLFNBQS9CLENBQWdDLE9BQU1qTCxDQUFOLEVBQVM7QUFBQ2lCLGVBQUdqQixDQUFIO0FBQU07QUFBQyxLQUE3RCxDQUE4RHlDLElBQTlELENBQW1FLElBQW5FLENBQVgsQ0FMeEMsQ0FBUDtBQU1DLEM7O0FBM0hEOzs7O0FBQW1DOzs7O0FBQTZCOzs7O0FBQXdCOztBQUFpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F6SDs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTtJQUNxQjRJLFE7Ozs7Ozs7Ozs7OzRCQUNGO0FBQUU7QUFBa0I7Ozs7OztrQkFEbEJBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ0hOLFVBQVNuTCxHQUFULEVBQWNDLElBQWQsRUFBb0JDLE1BQXBCLEVBQTRCQyxPQUE1QixFQUFxQzs7QUFFcERGLFdBQVNBLE9BQU9HLEdBQWhCO0FBQ0FKLFVBQVFBLE1BQU0sRUFBZDtBQUNBRSxhQUFXQSxTQUFTLEVBQXBCO0FBQ0EsTUFBSUcsSUFBSUosS0FBS0ssSUFBTCxDQUFVRCxDQUFsQjtBQUFBLE1BQXFCRSxLQUFLTixLQUFLSyxJQUFMLENBQVVDLEVBQXBDO0FBQUEsTUFBd0NDLEtBQUtQLEtBQUtLLElBQUwsQ0FBVUUsRUFBdkQ7QUFBQSxNQUEyREMsVUFBVSxRQUFRLEtBQUtBLE9BQWIsSUFBd0IsRUFBN0Y7QUFBQSxNQUFpR0MsVUFBVSxFQUEzRztBQUFBLE1BQStHQyxXQUFXLEVBQTFIO0FBQUEsTUFDQUMsTUFBTVgsS0FBS1ksS0FEWDtBQUFBLE1BQ2tCQyxTQUFTRixJQUFJRSxNQUQvQjtBQUFBLE1BQ3VDQyxLQUFLSCxJQUFJSSxLQURoRDtBQUFBLE1BQ3VEQyxhQUFhTCxJQUFJTSxTQUR4RTtBQUFBLE1BRUFDLE1BQU1QLElBQUlRLE9BRlY7QUFBQSxNQUVtQkMsWUFBWUYsSUFBSUcsUUFGbkM7QUFBQSxNQUU2Q0MsWUFBWUosSUFBSUssUUFGN0Q7QUFBQSxNQUdBQyxvQkFBb0JiLElBQUljLGdCQUh4QjtBQUFBLE1BRzBDQyx5QkFBeUJmLElBQUlnQixxQkFIdkU7QUFBQSxNQUlBQyxrQkFBa0JqQixJQUFJa0IsY0FKdEI7QUFBQSxNQUtBQyxPQUFPLEtBQUt6QyxJQUxaO0FBQUEsTUFLa0IwQyxRQUFRaEMsR0FMMUI7QUFBQSxNQUsrQmlDLFVBQVVGLFFBQVFBLEtBQUtFLE9BTHREO0FBQUEsTUFLK0RDLFNBQVMsQ0FBQy9CLFdBQVcsRUFBWixFQUFnQmdDLE1BTHhGO0FBTUEsU0FBTzlCLEVBQUUsSUFBRixlQUFZLFlBQVc7QUFBQyxRQUFJO0FBQUMsYUFBTyxDQUFDMEIsS0FBS0ssR0FBTCxFQUFELEVBQWMsQ0FBZCxDQUFQO0FBQXdCLEtBQTdCLENBQThCLE9BQU10QyxDQUFOLEVBQVM7QUFBQ2lCLFNBQUdqQixDQUFIO0FBQU07QUFBQyxHQUEzRCxDQUE0RHlDLElBQTVELENBQWlFLElBQWpFLENBQVosR0FBcUYsWUFBVztBQUFDLFFBQUk7QUFBQyxhQUFPLENBQUNSLEtBQUtLLEdBQUwsQ0FBUyxVQUFULENBQUQsRUFBd0IsQ0FBeEIsQ0FBUDtBQUFrQyxLQUF2QyxDQUF3QyxPQUFNdEMsQ0FBTixFQUFTO0FBQUNpQixTQUFHakIsQ0FBSDtBQUFNO0FBQUMsR0FBckUsQ0FBc0V5QyxJQUF0RSxDQUEyRSxJQUEzRSxDQUFyRixDQUFQO0FBQ0MsQzs7Ozs7Ozs7O0FDYkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQ2pCUTBILE87Ozs7QUFDUjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFHSyxpQkFBTzVLLFFBQVAsRTs7Ozs7Ozs7Ozs2QkFDTUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDTEksVUFBU1csR0FBVCxFQUFjQyxJQUFkLEVBQW9CQyxNQUFwQixFQUE0QkMsT0FBNUIsRUFBcUM7O0FBRXBERixXQUFTQSxPQUFPRyxHQUFoQjtBQUNBSixVQUFRQSxNQUFNLEVBQWQ7QUFDQUUsYUFBV0EsU0FBUyxFQUFwQjtBQUNBLE1BQUlHLElBQUlKLEtBQUtLLElBQUwsQ0FBVUQsQ0FBbEI7QUFBQSxNQUFxQkUsS0FBS04sS0FBS0ssSUFBTCxDQUFVQyxFQUFwQztBQUFBLE1BQXdDQyxLQUFLUCxLQUFLSyxJQUFMLENBQVVFLEVBQXZEO0FBQUEsTUFBMkRDLFVBQVUsUUFBUSxLQUFLQSxPQUFiLElBQXdCLEVBQTdGO0FBQUEsTUFBaUdDLFVBQVUsRUFBM0c7QUFBQSxNQUErR0MsV0FBVyxFQUExSDtBQUFBLE1BQ0FDLE1BQU1YLEtBQUtZLEtBRFg7QUFBQSxNQUNrQkMsU0FBU0YsSUFBSUUsTUFEL0I7QUFBQSxNQUN1Q0MsS0FBS0gsSUFBSUksS0FEaEQ7QUFBQSxNQUN1REMsYUFBYUwsSUFBSU0sU0FEeEU7QUFBQSxNQUVBQyxNQUFNUCxJQUFJUSxPQUZWO0FBQUEsTUFFbUJDLFlBQVlGLElBQUlHLFFBRm5DO0FBQUEsTUFFNkNDLFlBQVlKLElBQUlLLFFBRjdEO0FBQUEsTUFHQUMsb0JBQW9CYixJQUFJYyxnQkFIeEI7QUFBQSxNQUcwQ0MseUJBQXlCZixJQUFJZ0IscUJBSHZFO0FBQUEsTUFJQUMsa0JBQWtCakIsSUFBSWtCLGNBSnRCO0FBQUEsTUFLQUMsT0FBTyxLQUFLekMsSUFMWjtBQUFBLE1BS2tCMEMsUUFBUWhDLEdBTDFCO0FBQUEsTUFLK0JpQyxVQUFVRixRQUFRQSxLQUFLRSxPQUx0RDtBQUFBLE1BSytEQyxTQUFTLENBQUMvQixXQUFXLEVBQVosRUFBZ0JnQyxNQUx4Rjs7QUFPQSxNQUFJYyxTQUFTLEVBQUNtSSxHQUFHLEtBQUosRUFBV0MsR0FBRyxLQUFkLEVBQWI7QUFDQSxNQUFJQyxRQUFRLENBQUMsRUFBQ0YsR0FBRyxLQUFKLEVBQVdDLEdBQUcsS0FBZCxFQUFELEVBQXVCLEVBQUNELEdBQUcsT0FBSixFQUFhQyxHQUFHLEtBQWhCLEVBQXZCLEVBQStDLEVBQUNELEdBQUcsS0FBSixFQUFXQyxHQUFHLEtBQWQsRUFBL0MsRUFBcUUsRUFBQ0QsR0FBRyxNQUFKLEVBQVlDLEdBQUcsS0FBZixFQUFyRSxDQUFaOztBQUVBLFNBQU9oTCxFQUFFLEtBQUYsRUFBUyxJQUFULEVBQWVBLG1CQUFTLEVBQUMsVUFBVSxZQUFXO0FBQUMsVUFBSTtBQUFDLGVBQU8sQ0FBQzRDLE1BQUQsRUFBUyxDQUFULENBQVA7QUFBbUIsT0FBeEIsQ0FBeUIsT0FBTW5ELENBQU4sRUFBUztBQUFDaUIsV0FBR2pCLENBQUg7QUFBTTtBQUFDLEtBQXRELENBQXVEeUMsSUFBdkQsQ0FBNEQsSUFBNUQsQ0FBWCxFQUE4RSxRQUFRLFlBQVc7QUFBQyxVQUFJO0FBQUMsZUFBTyxDQUFDK0ksS0FBRCxFQUFRLENBQVIsQ0FBUDtBQUFrQixPQUF2QixDQUF3QixPQUFNeEwsQ0FBTixFQUFTO0FBQUNpQixXQUFHakIsQ0FBSDtBQUFNO0FBQUMsS0FBckQsQ0FBc0R5QyxJQUF0RCxDQUEyRCxJQUEzRCxDQUF0RixFQUF3SixhQUFhLFlBQVc7QUFBQyxVQUFJO0FBQUMsZUFBTyxDQUFDLEdBQUQsRUFBTSxDQUFOLENBQVA7QUFBZ0IsT0FBckIsQ0FBc0IsT0FBTXpDLENBQU4sRUFBUztBQUFDaUIsV0FBR2pCLENBQUg7QUFBTTtBQUFDLEtBQW5ELENBQW9EeUMsSUFBcEQsQ0FBeUQsSUFBekQsQ0FBckssRUFBcU8sWUFBWSxJQUFqUCxFQUF1UCxZQUFZLElBQW5RLEVBQVQsQ0FBZixDQUFQO0FBQ0MsQzs7QUFqQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1nSixJQUFJLHlFQUFWO0FBQ0EsSUFBTUMsUUFBUUQsRUFBRVgsSUFBRixHQUFTcEIsR0FBVCxDQUFhK0IsQ0FBYixDQUFkOzs7Ozs7Ozs7Ozs7O21DQUdlO0FBQ1AsaUtBQXNDQyxZQUF0QztBQUNIOzs7Ozs7Ozs7Ozs7OztBQ1RMLGtCQUFrQixXQUFXLHVDQUF1Qyw0ZkFBNGYsK0lBQStJLGNBQWMseUhBQXlILDJCQUEyQiw2UUFBNlEsZUFBZSxFQUFFLDRGQUE0RixHQUFHLDJXQUEyVyxlQUFlLHFEQUFxRCx1REFBdUQsNlBBQTZQLGFBQWEsbUtBQW1LLHVEQUF1RCxxQ0FBcUMseUNBQXlDLHlEQUF5RCxHQUFHLEVBQUUseUJBQXlCLE9BQU8sbUVBQW1FLDJJQUEySSxvSkFBb0osRUFBRSx3S0FBd0ssRUFBRSxFQUFFLEVBQUUsOERBQThELDJJQUEySSxnSUFBZ0ksRUFBRSx5SkFBeUosRUFBRSxFQUFFLDJJQUEySSxnSUFBZ0ksRUFBRSxFQUFFLEVBQUUsaUVBQWlFLDRJQUE0SSxFQUFFLEVBQUUsb0VBQW9FLDRJQUE0SSxFQUFFLEVBQUUsOERBQThELDRJQUE0SSxFQUFFLGlLQUFpSyxFQUFFLDRJQUE0SSxFQUFFLDRJQUE0SSxFQUFFLEVBQUUsa0VBQWtFLDJJQUEySSwwSUFBMEksRUFBRSw4SkFBOEosRUFBRSw0SUFBNEksRUFBRSw4SkFBOEosRUFBRSxFQUFFLEVBQUUsbUVBQW1FLDRJQUE0SSxFQUFFLDRJQUE0SSxFQUFFLEVBQUUsNERBQTRELDJJQUEySSwwSUFBMEksRUFBRSxFQUFFLGdLQUFnSywwSUFBMEksRUFBRSxFQUFFLDJJQUEySSxzSEFBc0gsRUFBRSxFQUFFLDJJQUEySSxzSEFBc0gsRUFBRSxFQUFFLHFMQUFxTCxzSEFBc0gsRUFBRSxFQUFFLEVBQUUsNERBQTRELDJJQUEySSxpSEFBaUgsRUFBRSxpSEFBaUgsRUFBRSxFQUFFLEVBQUUsOERBQThELDRJQUE0SSxFQUFFLGlLQUFpSyxFQUFFLDRJQUE0SSxFQUFFLEVBQUUsaUVBQWlFLDRJQUE0SSxFQUFFLHNMQUFzTCxFQUFFLEVBQUUsa0VBQWtFLDRJQUE0SSxFQUFFLDJJQUEySSxvSkFBb0osRUFBRSxFQUFFLEVBQUUsaUVBQWlFLDRJQUE0SSxFQUFFLEVBQUUsOERBQThELDRJQUE0SSxFQUFFLEVBQUUsK0RBQStELDJJQUEySSxnSUFBZ0ksRUFBRSxnSUFBZ0ksRUFBRSxFQUFFLEVBQUUsOERBQThELDRJQUE0SSxFQUFFLEVBQUUsa0VBQWtFLDRJQUE0SSxFQUFFLEVBQUUsOERBQThELDJJQUEySSwySEFBMkgsRUFBRSxzSEFBc0gsRUFBRSxFQUFFLEVBQUUsNkRBQTZELHdOQUF3TixFQUFFLEVBQUUsaUVBQWlFLDRJQUE0SSxFQUFFLEVBQUUsaUJBQWlCLCtMQUErTCxnSkFBZ0osNlBBQTZQLDZGQUE2RixHQUFHLGVBQWUsRSIsImZpbGUiOiJzdGF0aWMvY2h1bmsvMDMzZjkxYjY1ZDExOTIxY2NkYjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9jb2x1bW4udmR0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVDb2x1bW4gZXh0ZW5kcyBJbnRhY3Qge1xuICAgIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIHRlbXBsYXRlOyB9XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgIHRlbXBsYXRlKGRhdGEsIGluZGV4KSB7IH0sXG4gICAgICAgICAgICBrZXk6ICcnLFxuICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGdyb3VwczogdW5kZWZpbmVkLFxuXG4gICAgICAgICAgICAvLyBwYXNzZWQgYnkgcGFyZW50XG4gICAgICAgICAgICAkcGFyZW50OiB1bmRlZmluZWQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycsIGUpO1xuICAgIH1cblxuICAgIG9uRHJhZ1N0YXJ0KGUpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdkcmFnU3RhcnQnLCBlKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3RhYmxlL2NvbHVtbi5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuY29uc3Qge1xuICAgIHdpZHRoLCB0aXRsZSwga2V5LCBcbiAgICBzb3J0YWJsZSwgZ3JvdXBzLCAkcGFyZW50XG59ID0gc2VsZi5nZXQoKTtcbmNvbnN0IHtzb3J0LCByZXNpemFibGV9ID0gJHBhcmVudC5nZXQoKTtcblxucmV0dXJuIGgoJ3RoJywgeyd3aWR0aCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt3aWR0aCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndGl0bGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdGl0bGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYub25DbGljayBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtyZXNpemFibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIHsnZXYtbW91c2Vkb3duJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYub25EcmFnU3RhcnQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIG51bGwsICdrLXJlc2l6ZScpIDogdW5kZWZpbmVkLCBoKCdkaXYnLCBudWxsLCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFncm91cHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0aXRsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnYy1lbGxpcHNpcycpIDogdW5kZWZpbmVkLCAnXFxuICAgICAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZG8ge1xuICAgICAgICAgICAgaWYgKHNvcnRhYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IGtleSA9PT0gc29ydC5rZXkgPyBzb3J0LnR5cGUgOiAnJztcbiAgICAgICAgICAgICAgICBoKCdkaXYnLCBudWxsLCBoKCdpJywgbnVsbCwgbnVsbCwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2staWNvbic6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBbYGljb24tJHt0eXBlfWBdOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ljb24tc29ydGFibGUnOiAhdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSksIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3snay1zb3J0JzogdHJ1ZSwgW2BrLSR7dHlwZX1gXTogdHlwZX0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiAgICAnXSwgJ2stdGgnKV0sIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3snay1zb3J0YWJsZSc6IHNvcnRhYmxlfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3RhYmxlL2NvbHVtbi52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL2NvbHVtbic7XG5cbmxldCBzY3JvbGxCYXJXaWR0aCA9IHVuZGVmaW5lZDtcblxuY29uc3QgTUlOX1dJRFRIID0gNDA7XG5jb25zdCBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZSBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gdGVtcGxhdGU7IH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICBzY2hlbWU6IHt9LFxuICAgICAgICAgICAgY2hlY2tUeXBlOiAnY2hlY2tib3gnLCAvLyByYWRpbyB8IG5vbmUgXG4gICAgICAgICAgICByb3dLZXkodmFsdWUsIGluZGV4KSB7IHJldHVybiBpbmRleDsgfSxcbiAgICAgICAgICAgIHJvd0NsYXNzTmFtZSh2YWx1ZSwgaW5kZXgpIHsgIH0sIC8vIGFkZCBjbGFzc05hbWUgZm9yIHRyXG4gICAgICAgICAgICBjaGVja2VkS2V5czogW10sIC8vIGZvciBjaGVja2JveFxuICAgICAgICAgICAgY2hlY2tlZEtleTogdW5kZWZpbmVkLCAvLyBmb3IgcmFkaW9cbiAgICAgICAgICAgIHJvd0NoZWNrYWJsZTogdHJ1ZSwgLy8gY2xpY2sgcm93IHRvIGNoZWNrXG4gICAgICAgICAgICByb3dFeHBhbmRhYmxlOiB0cnVlLCAvLyBjbGljayByb3cgdG8gZXhwYW5kXG4gICAgICAgICAgICBub0RhdGFUZW1wbGF0ZTogJy8o44SSb+OEkikvfn4g5rKh5pyJ5om+5Yiw5Lqy6KaB55qE5pWw5o2u5ZOmficsXG4gICAgICAgICAgICBkaXNhYmxlUm93KGRhdGEsIGluZGV4KSB7IHJldHVybiBmYWxzZSB9LFxuICAgICAgICAgICAgc29ydDoge30sXG4gICAgICAgICAgICBncm91cHM6IHt9LFxuICAgICAgICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGV4cGFuZDogdW5kZWZpbmVkLCAvLyBleHBhbmQgdGVtcGxhdGUgY2FsbGJhY2tcbiAgICAgICAgICAgIGV4cGFuZGVkS2V5czogW10sIFxuICAgICAgICAgICAgdHlwZTogJ2RlZmF1bHQnLCAvLyBkZWZhdWx0IGJvcmRlclxuICAgICAgICAgICAgZml4SGVhZGVyOiBmYWxzZSxcblxuICAgICAgICAgICAgX3BhZGRpbmc6IDAsXG4gICAgICAgICAgICBfZGlzYWJsZWRBbW91bnQ6IDAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICByb3dDaGVja2FibGU6IEJvb2xlYW4sXG4gICAgICAgIHJvd0V4cGFuZGFibGU6IEJvb2xlYW4sXG4gICAgICAgIHJlc2l6YWJsZTogQm9vbGVhbixcbiAgICAgICAgZml4SGVhZGVyOiBCb29sZWFuLFxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICAvLyBrZWVwIHRoZSBldmVudCBjb25zaXN0ZW50XG4gICAgICAgIHRoaXMub24oJyRjaGFuZ2U6Y2hlY2tlZEtleXMnLCAoYywgbmV3VmFsdWUsIG9sZFZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJyRjaGFuZ2U6Y2hlY2tlZCcsIGMsIG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uKCckY2hhbmdlOmNoZWNrZWRLZXknLCAoYywgbmV3VmFsdWUsIG9sZFZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJyRjaGFuZ2U6Y2hlY2tlZCcsIGMsIFtuZXdWYWx1ZV0sIFtvbGRWYWx1ZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY2FsY3VsYXRlIHBhZGRpbmcgb2YgaGVhZGVyIHdoZW4gc29tZSBwcm9wcyBoYXZlIGNoYW5nZWRcbiAgICAgICAgWydkYXRhJywgJ2ZpeEhlYWRlciddLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uKGAkY2hhbmdlZDoke2l0ZW19YCwgdGhpcy5fY2FsY0hlYWRlclBhZGRpbmcpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdXBkYXRlIGRpc2FibGVkIGFtb3VudCB3aGVuIHNvbWUgcHJvcHMgaGF2ZSBjaGFuZ2VkXG4gICAgICAgIFsnZGF0YScsICdkaXNhYmxlUm93J10uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMub24oYCRjaGFuZ2U6JHtpdGVtfWAsIHRoaXMuX3VwZGF0ZURpc2FibGVkQW1vdW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZURpc2FibGVkQW1vdW50KCk7XG5cbiAgICAgICAgdGhpcy5fbW92ZSA9IHRoaXMuX21vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fZHJhZ0VuZCA9IHRoaXMuX2RyYWdFbmQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIGlmIChzY3JvbGxCYXJXaWR0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzY3JvbGxCYXJXaWR0aCA9IGdldFNjcm9sbGJhcldpZHRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2FsY0hlYWRlclBhZGRpbmcoKTtcbiAgICB9XG5cbiAgICBpc0NoZWNrQWxsKCkge1xuICAgICAgICBjb25zdCBjaGVja2VkS2V5cyA9IHRoaXMuZ2V0KCdjaGVja2VkS2V5cycpO1xuICAgICAgICBjb25zdCBkYXRhTGVuZ3RoID0gdGhpcy5nZXQoJ2RhdGEnKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGRpc2FibGVkQW1vdW50ID0gdGhpcy5nZXQoXCJfZGlzYWJsZWRBbW91bnRcIik7XG4gICAgICAgIGNvbnN0IGFtb3VudCA9IGRhdGFMZW5ndGggLSBkaXNhYmxlZEFtb3VudDtcbiAgICAgICAgcmV0dXJuIGFtb3VudCAmJiBjaGVja2VkS2V5cy5sZW5ndGggPT09IGFtb3VudDsgXG4gICAgfVxuXG4gICAgaXNDaGVja2VkKGtleSkge1xuICAgICAgICBjb25zdCB7Y2hlY2tUeXBlLCBjaGVja2VkS2V5LCBjaGVja2VkS2V5c30gPSB0aGlzLmdldCgpO1xuICAgICAgICBpZiAoY2hlY2tUeXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICByZXR1cm4gfmNoZWNrZWRLZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGVja1R5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVja2VkS2V5ID09PSBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY2hlY2tBbGwoKSB7XG4gICAgICAgIGNvbnN0IHJvd0tleSA9IHRoaXMuZ2V0KCdyb3dLZXknKTtcbiAgICAgICAgY29uc3QgZGlzYWJsZVJvdyA9IHRoaXMuZ2V0KCdkaXNhYmxlUm93Jyk7XG4gICAgICAgIGNvbnN0IGNoZWNrZWRLZXlzID0gW107XG4gICAgICAgIHRoaXMuZ2V0KCdkYXRhJykuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRpc2FibGVSb3cuY2FsbCh0aGlzLCB2YWx1ZSwgaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZEtleXMucHVzaChyb3dLZXkuY2FsbCh0aGlzLCB2YWx1ZSwgaW5kZXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0KCdjaGVja2VkS2V5cycsIGNoZWNrZWRLZXlzKTtcbiAgICB9XG5cbiAgICB1bmNoZWNrQWxsKCkge1xuICAgICAgICB0aGlzLnNldCgnY2hlY2tlZEtleXMnLCBbXSk7XG4gICAgfVxuXG4gICAgY2hlY2tSb3coa2V5KSB7XG4gICAgICAgIHRoaXMuX2NoZWNrVW5jaGVja1JvdyhrZXksIHRydWUsIGZhbHNlKTtcbiAgICB9XG5cbiAgICB1bmNoZWNrUm93KGtleSkge1xuICAgICAgICB0aGlzLl9jaGVja1VuY2hlY2tSb3coa2V5LCBmYWxzZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHNocmlua1JvdyhrZXkpIHtcbiAgICAgICAgdGhpcy5fZXhwYW5kU2hyaW5rUm93KGtleSwgZmFsc2UsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBleHBhbmRSb3coa2V5KSB7XG4gICAgICAgIHRoaXMuX2V4cGFuZFNocmlua1JvdyhrZXksIHRydWUsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAYnJpZWYgZ2V0IHRoZSBjaGVja2VkIGRhdGFcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICBnZXRDaGVja2VkRGF0YSgpIHtcbiAgICAgICAgY29uc3Qgcm93S2V5ID0gdGhpcy5nZXQoJ3Jvd0tleScpO1xuICAgICAgICBjb25zdCBjaGVja1R5cGUgPSB0aGlzLmdldCgnY2hlY2tUeXBlJyk7XG4gICAgICAgIGlmIChjaGVja1R5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWRLZXlzID0gdGhpcy5nZXQoJ2NoZWNrZWRLZXlzJyk7XG4gICAgICAgICAgICBjb25zdCBjaGVja2VkS2V5c01hcCA9IHt9O1xuICAgICAgICAgICAgY2hlY2tlZEtleXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRLZXlzTWFwW2l0ZW1dID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdkYXRhJykuZmlsdGVyKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSByb3dLZXkuY2FsbCh0aGlzLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGVja2VkS2V5c01hcFtrZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hlY2tUeXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2VkS2V5ID0gdGhpcy5nZXQoJ2NoZWNrZWRLZXknKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgnZGF0YScpLmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvd0tleS5jYWxsKHRoaXMsIHZhbHVlLCBpbmRleCkgPT09IGNoZWNrZWRLZXk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jYWxjSGVhZGVyUGFkZGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdmaXhIZWFkZXInKSkge1xuICAgICAgICAgICAgY29uc3QgdGFibGVIZWlnaHQgPSB0aGlzLnRhYmxlLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IHRoaXMuc2Nyb2xsLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IHRoaXMuaGVhZGVyLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdfcGFkZGluZycsIHRhYmxlSGVpZ2h0IC0gaGVhZGVySGVpZ2h0ID4gY29udGFpbmVySGVpZ2h0ID8gc2Nyb2xsQmFyV2lkdGggOiAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF91cGRhdGVEaXNhYmxlZEFtb3VudCgpIHtcbiAgICAgICAgbGV0IGRpc2FibGVkQW1vdW50ID0gMDtcbiAgICAgICAgY29uc3QgZGlzYWJsZVJvdyA9IHRoaXMuZ2V0KCdkaXNhYmxlUm93Jyk7XG4gICAgICAgIHRoaXMuZ2V0KCdkYXRhJykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChkaXNhYmxlUm93LmNhbGwodGhpcywgaXRlbSwgaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWRBbW91bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0KCdfZGlzYWJsZWRBbW91bnQnLCBkaXNhYmxlZEFtb3VudCk7XG4gICAgfVxuXG4gICAgX3RvZ2dsZUNoZWNrQWxsKGMsIGNoZWNrZWQpIHtcbiAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tBbGwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudW5jaGVja0FsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2NsaWNrUm93KHZhbHVlLCBpbmRleCwga2V5LCBlKSB7XG4gICAgICAgIC8vIGlmIGlzIGZyb20gY2hlY2tib3ggb3IgcmFkaW8gdGhlbiBkbyBub3RoaW5nXG4gICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlUm93JykuY2FsbCh0aGlzLCB2YWx1ZSwgaW5kZXgpKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdyb3dDaGVja2FibGUnKSkge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tVbmNoZWNrUm93KGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nZXQoJ3Jvd0V4cGFuZGFibGUnKSkge1xuICAgICAgICAgICAgdGhpcy5fZXhwYW5kU2hyaW5rUm93KGtleSk7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2NoZWNrVW5jaGVja1JvdyhrZXksIGlzQ2hlY2sgPSBmYWxzZSwgaXNUb2dnbGUgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrVHlwZSA9IHRoaXMuZ2V0KCdjaGVja1R5cGUnKTtcbiAgICAgICAgaWYgKGNoZWNrVHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tlZEtleXMgPSB0aGlzLmdldCgnY2hlY2tlZEtleXMnKS5zbGljZSgwKTtcbiAgICAgICAgICAgIGNvbnN0IGkgPSBjaGVja2VkS2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgICAgICBpZiAoKCFpc0NoZWNrIHx8IGlzVG9nZ2xlKSAmJiBpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkS2V5cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoJ2NoZWNrZWRLZXlzJywgY2hlY2tlZEtleXMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0NoZWNrIHx8IGlzVG9nZ2xlKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZEtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KCdjaGVja2VkS2V5cycsIGNoZWNrZWRLZXlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjaGVja1R5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCdjaGVja2VkS2V5Jywga2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9leHBhbmRTaHJpbmtSb3coa2V5LCBpc0V4cGFuZCA9IGZhbHNlLCBpc1RvZ2dsZSA9IHRydWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdldCgnZXhwYW5kJykgIT09ICdmdW5jdGlvbicpIHJldHVybjtcblxuICAgICAgICBjb25zdCBleHBhbmRlZEtleXMgPSB0aGlzLmdldCgnZXhwYW5kZWRLZXlzJykuc2xpY2UoMCk7XG4gICAgICAgIGNvbnN0IGkgPSBleHBhbmRlZEtleXMuaW5kZXhPZihrZXkpO1xuICAgICAgICBpZiAoKCFpc0V4cGFuZCB8fCBpc1RvZ2dsZSkgJiYgaSA+IC0xKSB7XG4gICAgICAgICAgICBleHBhbmRlZEtleXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgdGhpcy5zZXQoJ2V4cGFuZGVkS2V5cycsIGV4cGFuZGVkS2V5cyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNFeHBhbmQgfHwgaXNUb2dnbGUpIHtcbiAgICAgICAgICAgIGV4cGFuZGVkS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICB0aGlzLnNldCgnZXhwYW5kZWRLZXlzJywgZXhwYW5kZWRLZXlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zb3J0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3Qgc29ydCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZ2V0KCdzb3J0JykpO1xuICAgICAgICBzb3J0LmtleSA9IGtleTtcbiAgICAgICAgc29ydC50eXBlID0gc29ydC50eXBlID09PSAnZGVzYycgPyAnYXNjJyA6ICdkZXNjJztcbiAgICAgICAgdGhpcy5zZXQoJ3NvcnQnLCBzb3J0KTtcbiAgICB9XG5cbiAgICBfZHJhZ1N0YXJ0KGUpIHtcbiAgICAgICAgLy8gbGVmdCBrZXlcbiAgICAgICAgaWYgKGUud2hpY2ggIT09IDEpIHJldHVybjtcblxuICAgICAgICB0aGlzLl9yZXNpemluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lcldpZHRoID0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICB0aGlzLl94ID0gZS5jbGllbnRYO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHByZXZUaCA9IGN1cnJlbnRUaC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgIHRoaXMuX2N1cnJlbnRUaHMgPSBbY3VycmVudFRoXTtcbiAgICAgICAgdGhpcy5fcHJldlRocyA9IFtwcmV2VGhdO1xuICAgICAgICB0aGlzLl90YWJsZXMgPSBbdGhpcy50YWJsZV07XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdmaXhIZWFkZXInKSkge1xuICAgICAgICAgICAgY29uc3QgdGhzID0gdGhpcy50YWJsZS5jaGlsZHJlblswXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGgnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpeFRocyA9IGN1cnJlbnRUaC5wYXJlbnROb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzbGljZS5jYWxsKGZpeFRocykuaW5kZXhPZihjdXJyZW50VGgpO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFRocy5wdXNoKHRoc1tpbmRleF0pO1xuICAgICAgICAgICAgdGhpcy5fcHJldlRocy5wdXNoKHRoc1tpbmRleCAtIDFdKTtcbiAgICAgICAgICAgIC8vIHRoaXMuX3RhYmxlcy5wdXNoKHRoaXMuaGVhZGVyLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgIC8vIGlmIGZpeEhlYWRlciB3ZSBzaG91bGQgY2hhbmdlIHRoZSB3aWR0aCBvZiBoZWFkZXIgYW5kIHNjcm9sbFxuICAgICAgICAgICAgdGhpcy5fdGFibGVzID0gW3RoaXMuaGVhZGVyLCB0aGlzLnNjcm9sbF07XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9tb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX2RyYWdFbmQpO1xuICAgIH1cblxuICAgIF9tb3ZlKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Jlc2l6aW5nKSB7XG4gICAgICAgICAgICBjb25zdCBkZWxYID0gZS5jbGllbnRYIC0gdGhpcy5feDtcbiAgICAgICAgICAgIGNvbnN0IHByZXZXaWR0aCA9IHRoaXMuX3ByZXZUaHNbMF0ub2Zmc2V0V2lkdGggKyBkZWxYO1xuICAgICAgICAgICAgY29uc3QgdGFibGVXaWR0aCA9IHRoaXMuX3RhYmxlc1swXS5vZmZzZXRXaWR0aCArIGRlbFg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChwcmV2V2lkdGggPCBNSU5fV0lEVEgpIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5fcHJldlRocy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUud2lkdGggPSBwcmV2V2lkdGggKyAncHgnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9jb250YWluZXJXaWR0aCA+PSB0YWJsZVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGFibGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RhYmxlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLndpZHRoID0gdGFibGVXaWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3ggPSBlLmNsaWVudFg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZHJhZ0VuZChlKSB7XG4gICAgICAgIGlmICh0aGlzLl9yZXNpemluZykge1xuICAgICAgICAgICAgdGhpcy5fcmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX21vdmUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX2RyYWdFbmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2Rlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2RyYWdFbmQoKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7VGFibGUsIENvbHVtbiBhcyBUYWJsZUNvbHVtbn07XG5cbi8vIHJlZmVyZW5jZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMzM4MjUxNi9nZXR0aW5nLXNjcm9sbC1iYXItd2lkdGgtdXNpbmctamF2YXNjcmlwdFxuZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7XG4gICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdXRlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBvdXRlci5zdHlsZS53aWR0aCA9IFwiMTAwcHhcIjtcbiAgICBvdXRlci5zdHlsZS5tc092ZXJmbG93U3R5bGUgPSBcInNjcm9sbGJhclwiOyAvLyBuZWVkZWQgZm9yIFdpbkpTIGFwcHNcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuXG4gICAgdmFyIHdpZHRoTm9TY3JvbGwgPSBvdXRlci5vZmZzZXRXaWR0aDtcbiAgICAvLyBmb3JjZSBzY3JvbGxiYXJzXG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xuXG4gICAgLy8gYWRkIGlubmVyZGl2XG4gICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbm5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuICAgIHZhciB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcblxuICAgIC8vIHJlbW92ZSBkaXZzXG4gICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgICByZXR1cm4gd2lkdGhOb1Njcm9sbCAtIHdpZHRoV2l0aFNjcm9sbDtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90YWJsZS9pbmRleC5qcyIsImltcG9ydCBDaGVja2JveCBmcm9tICcuLi9jaGVja2JveCc7aW1wb3J0IFJhZGlvIGZyb20gJy4uL3JhZGlvJztpbXBvcnQgUm93IGZyb20gJy4vcm93JztpbXBvcnQge25vcm1hbGl6ZX0gZnJvbSAnaW50YWN0JztpbXBvcnQgQ29sdW1uIGZyb20gJy4vY29sdW1uJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cblxuXG5cbmNvbnN0IHtcbiAgICBjaGVja1R5cGUsIHNjaGVtZSwgY2hlY2tlZEtleXMsIGRhdGEsIHJvd0tleSwgXG4gICAgY2xhc3NOYW1lLCBmaXhIZWFkZXIsIG5vRGF0YVRlbXBsYXRlLCBkaXNhYmxlUm93LFxuICAgIGdyb3VwcywgcmVzaXphYmxlLCBleHBhbmQsIGV4cGFuZGVkS2V5cywgdHlwZSxcbiAgICBzdHlsZSwgcm93Q2xhc3NOYW1lLCBjaGlsZHJlbiwgc29ydFxufSA9IHNlbGYuZ2V0KCk7XG5cbmxldCBjb2xTcGFuID0gY2hlY2tUeXBlID09PSAnY2hlY2tib3gnIHx8IGNoZWNrVHlwZSA9PT0gJ3JhZGlvJyA/IDEgOiAwO1xuY29uc3QgZXhwYW5kYWJsZSA9IHR5cGVvZiBleHBhbmQgPT09ICdmdW5jdGlvbic7XG5jb25zdCBfc2NoZW1lID0ge307XG5cbmNvbnN0IHRoZWFkQ3JlYXRvciA9ICgpID0+IGgoJ3RoZWFkJywgbnVsbCwgaCgndHInLCBudWxsLCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoZWNrVHlwZSA9PT0gJ2NoZWNrYm94JyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgndGgnLCBudWxsLCBoKENoZWNrYm94LCB7J3ZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuaXNDaGVja0FsbCgpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX3RvZ2dsZUNoZWNrQWxsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KSwgJ2stdGgtY2hlY2snKSA6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGVja1R5cGUgPT09ICdyYWRpbycgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ3RoJywgbnVsbCwgbnVsbCwgJ2stdGgtY2hlY2snKSA6IHVuZGVmaW5lZCwgJ1xcbiAgICAgICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW19fdS5tYXAoc2NoZW1lLCAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb2xTcGFuKys7XG5cbiAgICAgICAgICAgIGlmICghX191LmlzT2JqZWN0KGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHt0aXRsZTogaXRlbX07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBoKENvbHVtbiwgey4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtpdGVtIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrZXknOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBba2V5IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICckcGFyZW50JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2l0ZW0uc29ydGFibGUgPyBzZWxmLl9zb3J0LmJpbmQoc2VsZiwga2V5LCBpdGVtKSA6IHVuZGVmaW5lZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtZHJhZ1N0YXJ0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX2RyYWdTdGFydCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzfSlcbiAgICAgICAgfSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiAgICAgICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWy8vIGZvciB1c2luZyBUYWJsZUNvbHVtbiBhcyBjaGlsZHJlblxuICAgICAgICAgICAgX191Lm1hcChjaGlsZHJlbiA/IChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXSkgOiBjaGlsZHJlbiwgdk5vZGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2Tm9kZS50YWcgPT09IENvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICBjb2xTcGFuKys7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BzID0gey4uLnZOb2RlLnByb3BzLCAkcGFyZW50OiBzZWxmfTtcbiAgICAgICAgICAgICAgICAgICAgdk5vZGUucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLmtleSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZSgna2V5IGZvciBUYWJsZUNvbHVtbiBtdXN0IGJlIHNwZWNpZmllZC4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgvXlxcZCskLy50ZXN0KHByb3BzLmtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF2b2lkIGRpZ2l0YWwga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICBfZSgnZG9uXFwndCB1c2UgZGlnaXRzIGFzIGtleS4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfc2NoZW1lW3Byb3BzLmtleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogcHJvcHMudGVtcGxhdGUgfHwgcHJvcHMuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZOb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pIFxuICAgICAgICBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnXFxuICAgICddKSlcblxuY29uc3QgdGhlYWQgPSB0aGVhZENyZWF0b3IoKTtcblxuY29uc3QgdGJvZHkgPSBoKCd0Ym9keScsIG51bGwsIFsnXFxuICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkYXRhICYmIGRhdGEubGVuZ3RoID8gXG4gICAgICAgIF9fdS5tYXAoZGF0YSwgKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gcm93S2V5LmNhbGwoc2VsZiwgdmFsdWUsIGluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IGRpc2FibGVkID0gZGlzYWJsZVJvdy5jYWxsKHNlbGYsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSByb3dDbGFzc05hbWUuY2FsbChzZWxmLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgdHIgPSBoKFJvdywgeydrZXknOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBba2V5IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9jbGlja1Jvdy5iaW5kKHNlbGYsIHZhbHVlLCBpbmRleCwga2V5KSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2xhc3NOYW1lJzogX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICAnay1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAnay1jaGVja2VkJzogc2VsZi5pc0NoZWNrZWQoa2V5KSwgXG4gICAgICAgICAgICAgICAgfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgJ2V2LSRkZXN0cm95ZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5zaHJpbmtSb3cuYmluZChzZWxmLCBrZXkpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hlY2tUeXBlID09PSAnY2hlY2tib3gnIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCd0ZCcsIG51bGwsIGgoQ2hlY2tib3gsIHsnbmFtZSc6ICdrLXRhYmxlLWNoZWNrYm94JywgJ3RydWVWYWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtrZXkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Rpc2FibGVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXMsIHZhbHVlOiBfZ2V0TW9kZWwoc2VsZiwgJ2NoZWNrZWRLZXlzJyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oX19jLCBfX24pIHsgX3NldE1vZGVsKHNlbGYsICdjaGVja2VkS2V5cycsIF9fbikgfX0pKSA6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGVja1R5cGUgPT09ICdyYWRpbycgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ3RkJywgbnVsbCwgaChSYWRpbywgeyduYW1lJzogJ2stdGFibGUtcmFkaW8nLCAndHJ1ZVZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2tleSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpcywgdmFsdWU6IF9nZXRNb2RlbChzZWxmLCAnY2hlY2tlZEtleScpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKF9fYywgX19uKSB7IF9zZXRNb2RlbChzZWxmLCAnY2hlY2tlZEtleScsIF9fbikgfX0pKSA6IHVuZGVmaW5lZCwgJ1xcbiAgICAgICAgICAgICAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbX191Lm1hcChfX3UuZXh0ZW5kKHt9LCBzY2hlbWUsIF9zY2hlbWUpLCAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9fdS5pc09iamVjdChpdGVtKSAmJiBpdGVtLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0udGVtcGxhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZCA9IGl0ZW0udGVtcGxhdGUuY2FsbChzZWxmLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciBJbnRhY3QtVnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZCA9IG5vcm1hbGl6ZSh0ZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZCA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZCA9IHZhbHVlW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0gdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cyA9IGtleS5zcGxpdCgnLicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG9iaiAhPSBudWxsICYmIGkgPCBrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IG9ialtrZXlzW2krK11dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGQgPSAoaSAmJiBpID09PSBrZXlzLmxlbmd0aCkgPyBvYmogOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoKCd0ZCcsIHsndGl0bGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHlwZW9mIHRkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdGQgPT09ICdudW1iZXInID8gXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZCA6IHVuZGVmaW5lZCBcbiAgICAgICAgICAgICAgICAgICAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0eXBlb2YgdGQgPT09ICdib29sZWFuJyA/IFN0cmluZyh0ZCkgOiB0ZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKVxuICAgICAgICAgICAgICAgIH0pIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgICAgICAgICAnXSwgJ19jb250ZXh0JzogdGhpc30pO1xuXG4gICAgICAgICAgICBpZiAoZXhwYW5kYWJsZSAmJiBleHBhbmRlZEtleXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICB0cixcbiAgICAgICAgICAgICAgICAgICAgaCgndHInLCBudWxsLCBoKCd0ZCcsIHsnY29sc3Bhbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjb2xTcGFuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZXhwYW5kLmNhbGwoc2VsZiwgdmFsdWUsIGluZGV4KSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgJ2stZXhwYW5kJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Ake2tleX0uZXhwYW5kYCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSA6XG4gICAgICAgIGgoJ3RyJywgbnVsbCwgaCgndGQnLCB7J2NvbHNwYW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY29sU3BhbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgWydcXG4gICAgICAgICAgICAgICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW25vRGF0YVRlbXBsYXRlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgICAgICAgICAnXSwgJ2stbm8tZGF0YScpLCBudWxsLCAndGFibGVfbm9fZGF0YScpXG4gICAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiddKVxuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2stdGFibGUtd3JhcHBlcic6IHRydWUsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSxcbiAgICBbYGstJHt0eXBlfWBdOiB0eXBlICE9PSAnZGVmYXVsdCcsXG59O1xuXG5jb25zdCB0YWJsZSA9IGgoJ3RhYmxlJywgbnVsbCwgWydcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RoZWFkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Rib2R5IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4nXSwgJ2stdGFibGUnLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZG9tID0+IHNlbGYudGFibGUgPSBkb20gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSlcblxucmV0dXJuIGgoJ2RpdicsIHsnc3R5bGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc3R5bGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZml4SGVhZGVyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3twYWRkaW5nUmlnaHQ6IHNlbGYuZ2V0KCdfcGFkZGluZycpICsgJ3B4J30gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGgoJ3RhYmxlJywgbnVsbCwgWydcXG4gICAgICAgICAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdGhlYWRDcmVhdG9yKCkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiAgICAgICAgJ10sICdrLXRhYmxlJyksICdrLWZpeGVkJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RvbSA9PiBzZWxmLmhlYWRlciA9IGRvbSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSA6IHVuZGVmaW5lZCwgJ1xcbiAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZml4SGVhZGVyID8gXG4gICAgICAgIGgoJ2RpdicsIHsnc3R5bGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHlwZW9mIGZpeEhlYWRlciA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGZpeEhlYWRlciA9PT0gJ3N0cmluZycgP1xuICAgICAgICAgICAgICAgIHttYXhIZWlnaHQ6IGAke2ZpeEhlYWRlcn1weGB9IDogdW5kZWZpbmVkXG4gICAgICAgICAgICBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RhYmxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrLXNjcm9sbCcsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkb20gPT4gc2VsZi5zY3JvbGwgPSBkb20gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkgOlxuICAgICAgICB0YWJsZVxuICAgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4nXSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2xhc3NOYW1lT2JqIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdGFibGUvaW5kZXgudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vcm93LnZkdCc7XG5cbi8vIGZvciB0ciAkZGVzdHJveWVkIGV2ZW50XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZVJvdyBleHRlbmRzIEludGFjdCB7XG4gICAgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gdGVtcGxhdGU7IH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdGFibGUvcm93LmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5yZXR1cm4gaCgndHInLCB7Li4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuZ2V0KCkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLmdldCgnY2hpbGRyZW4nKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdGFibGUvcm93LnZkdCIsInZhciBtYXAgPSB7XG5cdFwiLi9kZW1vcy9iYXNpYy9pbmRleC5qc1wiOiBcIi4vc2l0ZS9jb21wb25lbnRzL3RhYmxlL2RlbW9zL2Jhc2ljL2luZGV4LmpzXCJcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc2l0ZS9jb21wb25lbnRzL3RhYmxlIHJlY3Vyc2l2ZSBkZW1vcy4qaW5kZXguanMkXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvdGFibGUgZGVtb3MuKmluZGV4LmpzJFxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL2NvbXBvbmVudHMvdGFibGUgcmVjdXJzaXZlIGRlbW9zLippbmRleC5qcyRcbi8vIG1vZHVsZSBjaHVua3MgPSAxNyIsImV4cG9ydCB7ZGVmYXVsdCBhcyBkYXRhfSBmcm9tICcuL2luZGV4Lmpzb24nO1xuaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy90YWJsZS9kZW1vcy9iYXNpYy9pbmRleC5qcyIsImltcG9ydCBUYWJsZSBmcm9tICdrcGMvY29tcG9uZW50cy90YWJsZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cbnZhciBzY2hlbWUgPSB7YTogJ+ihqOWktDEnLCBiOiAn6KGo5aS0Mid9O1xudmFyIGRhdGEyID0gW3thOiAn5ZOI5ZOIMScsIGI6ICflk4jlk4gyJ30sIHthOiAn6KGo5aS05Zu65a6a5ZWmJywgYjogJ+WTiOWTiDInfSwge2E6ICflvoDkuIvmi4knLCBiOiAn5ZOI5ZOIMid9LCB7YTogJ+aIkeaYr+W6lemDqCcsIGI6ICflk4jlk4gyJ31dO1xuXG5yZXR1cm4gaCgnZGl2JywgbnVsbCwgaChUYWJsZSwgeydzY2hlbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2NoZW1lXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2RhdGEnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGF0YTJdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZml4SGVhZGVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWzEwMF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvdGFibGUvZGVtb3MvYmFzaWMvaW5kZXgudmR0IiwiaW1wb3J0IEFydGljbGUgZnJvbSAnfi9zcmMvY29tcG9uZW50cy9hcnRpY2xlJztcbmltcG9ydCBkYXRhIGZyb20gJy4vaW5kZXguanNvbic7XG5cbmNvbnN0IHIgPSByZXF1aXJlLmNvbnRleHQoJy4vJywgdHJ1ZSwgL2RlbW9zLippbmRleC5qcyQvKTtcbmNvbnN0IGRlbW9zID0gci5rZXlzKCkubWFwKHIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEFydGljbGUge1xuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4gey4uLnN1cGVyLmRlZmF1bHRzKCksIC4uLmRhdGEsIGRlbW9zfTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL3RhYmxlL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXR0aW5nXCI6e1widGl0bGVcIjpcIuihqOagvFwiLFwiY2F0ZWdvcnlcIjpcIue7hOS7tlwiLFwib3JkZXJcIjoxfSxcImNhdGFsb2dzXCI6W10sXCJjb250ZW50c1wiOlwiPGgxIGlkPSdoZWFkZXItJUU4JUExJUE4JUU2JUEwJUJDJUU1JUIxJTlFJUU2JTgwJUE3JTIwVGFibGUnPuihqOagvOWxnuaApyBUYWJsZTwvaDE+PGRpdiBjbGFzcz1cXFwiay10YWJsZS13cmFwcGVyIGstYm9yZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwiay10YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPjx0cj5cXG48dGg+5bGe5oCnPC90aD5cXG48dGg+6K+05piOPC90aD5cXG48dGg+57G75Z6LPC90aD5cXG48dGg+6buY6K6k5YC8PC90aD5cXG48L3RyPlxcbjwvdGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5Pjx0cj5cXG48dGQ+ZGF0YTwvdGQ+XFxuPHRkPuihqOagvOaVsOaNrjwvdGQ+XFxuPHRkPjxjb2RlPkFycmF5PC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPltdPC9jb2RlPjwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPnNjaGVtZTwvdGQ+XFxuPHRkPuihqOWktOS/oeaBrzwvdGQ+XFxuPHRkPjxjb2RlPk9iamVjdDwvY29kZT48L3RkPlxcbjx0ZD48Y29kZT57fTwvY29kZT48L3RkPlxcbjwvdHI+XFxuPHRyPlxcbjx0ZD5jaGVja1R5cGU8L3RkPlxcbjx0ZD7moYbnmoTnsbvlnos6IOWNlemAiSByYWRpbyAsIOWkjemAiSBjaGVja2JveCAsICDmsqHmnIkgbm9uZTwvdGQ+XFxuPHRkPjxjb2RlPlN0cmluZzwvY29kZT48L3RkPlxcbjx0ZD48Y29kZT4mcXVvdDtjaGVja2JveCZxdW90OzwvY29kZT48L3RkPlxcbjwvdHI+XFxuPHRyPlxcbjx0ZD5ub0RhdGFUZW1wbGF0ZTwvdGQ+XFxuPHRkPuW9k+ayoeacieaVsOaNrueahOaXtuWAmeWxleekuuS/oeaBrzwvdGQ+XFxuPHRkPjxjb2RlPlN0cmluZzwvY29kZT48L3RkPlxcbjx0ZD48Y29kZT4mcXVvdDsvKOOEkm/jhJIpL35+IOayoeacieaJvuWIsOS6suimgeeahOaVsOaNruWTpn4mcXVvdDs8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+Zml4SGVhZGVyPC90ZD5cXG48dGQ+6KGo5aS05Zu65a6aPC90ZD5cXG48dGQ+PGNvZGU+Qm9vbGVhbjwvY29kZT48L3RkPlxcbjx0ZD48Y29kZT5mYWxzZTwvY29kZT48L3RkPlxcbjwvdHI+XFxuPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgIDwvZGl2PjxwPnwgcm93S2V5IHwg6K6+572u6KGM55qEa2V5IHwgPGNvZGU+RnVuY3Rpb248L2NvZGU+IHwgPGNvZGU+ZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7ICByZXR1cm4gaW5kZXg7IH08L2NvZGU+IHx8IHJvd0NsYXNzTmFtZSB8IOiuvue9ruihjOeahGNsYXNzIHwgPGNvZGU+RnVuY3Rpb248L2NvZGU+IHwgPGNvZGU+ZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7ICB9PC9jb2RlPiB8fCBjaGVja2VkS2V5cyB8IOWTquihjOiiq+mAieS4re+8iOmSiOWvueWkmumAie+8iSB8IDxjb2RlPkFycmF5PC9jb2RlPiB8IDxjb2RlPltdPC9jb2RlPiB8fCBjaGVja2VkS2V5IHwg5ZOq6KGM6KKr6YCJ5Lit77yI6ZKI5a+55Y2V6YCJ77yJIHwgPGNvZGU+5Lu75L2VPC9jb2RlPiB8IDxjb2RlPnVuZGVmaW5lZDwvY29kZT4gfHwgcm93Q2hlY2thYmxlIHwg5piv5ZCm5pW06KGM6YCJ5LitIHwgPGNvZGU+Qm9vbGVhbjwvY29kZT4gfCA8Y29kZT50cnVlPC9jb2RlPiB8fCByb3dFeHBhbmRhYmxlIHwg5piv5ZCm54K55Ye75pW06KGM5bGV5byAIHwgPGNvZGU+Qm9vbGVhbjwvY29kZT4gfCA8Y29kZT50cnVlPC9jb2RlPiB8fCBkaXNhYmxlUm93IHwg56aB55So5p+Q5LiA6KGMIHwgPGNvZGU+RnVuY3Rpb248L2NvZGU+IHwgPGNvZGU+ZnVuY3Rpb24oZGF0YSwgaW5kZXgpIHsgcmV0dXJuIGZhbHNlIH08L2NvZGU+IHx8IHNvcnQgfCDmjpLluo8gfCA8Y29kZT5PYmplY3Q8L2NvZGU+IHwgPGNvZGU+e308L2NvZGU+IHx8IGdyb3VwcyB8IOWIhue7hCB8IDxjb2RlPk9iamVjdDwvY29kZT4gfCA8Y29kZT57fTwvY29kZT4gfHwgcmVzaXphYmxlIHwg5piv5ZCm5Y+v5Lul6KGo5aS05ouW5YqoIHwgPGNvZGU+Qm9vbGVhbjwvY29kZT4gfCA8Y29kZT5mYWxzZTwvY29kZT4gfHwgZXhwYW5kIHwg5bGV5byA5p2h5Lu2IHwgPGNvZGU+RnVuY3Rpb248L2NvZGU+IHwgPGNvZGU+dW5kZWZpbmVkPC9jb2RlPiB8fCBleHBhbmRlZEtleXMgfCDlk6rooYzlsZXlvIAgfCA8Y29kZT5BcnJheTwvY29kZT4gfCA8Y29kZT5bXTwvY29kZT4gfHwgdHlwZSB8IOexu+WeiyB8IDxjb2RlPlN0cmluZzwvY29kZT4gfCA8Y29kZT4mcXVvdDtkZWZhdWx0JnF1b3Q7PC9jb2RlPiB8fCBfcGFkZGluZyB8IHBhZGRpbmcgfCA8Y29kZT5OdW1iZXI8L2NvZGU+IHwgPGNvZGU+MDwvY29kZT4gfHwgX2Rpc2FibGVkQW1vdW50IHwgZGlzYWJsZWRBbW91bnQgfCA8Y29kZT5OdW1iZXI8L2NvZGU+IHwgPGNvZGU+MDwvY29kZT4gfDwvcD5cXG5cIixcImNvZGVzXCI6W3tcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XFxufVwifV0sXCJpbmRleFwiOjkzLFwic2lkZUJhcnNcIjp7XCLnu4Tku7ZcIjpbe1widGl0bGVcIjpcIumdouWMheWxkVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9icmVhZGNydW1iL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiQnJlYWRjcnVtYlwiLFwicGF0aFwiOlwiI2hlYWRlci1CcmVhZGNydW1iXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1CcmVhZGNydW1iJz5CcmVhZGNydW1iPC9oMj5cIixcInRleHRcIjpcIkJyZWFkY3J1bWJcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCJCcmVhZGNydW1iSXRlbVwiLFwicGF0aFwiOlwiI2hlYWRlci1CcmVhZGNydW1iSXRlbVwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItQnJlYWRjcnVtYkl0ZW0nPkJyZWFkY3J1bWJJdGVtPC9oMj5cIixcInRleHRcIjpcIkJyZWFkY3J1bWJJdGVtXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIuaMiemSrlwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9idXR0b24vaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJCdXR0b25cIixcInBhdGhcIjpcIiNoZWFkZXItQnV0dG9uXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1CdXR0b24nPkJ1dHRvbjwvaDI+XCIsXCJ0ZXh0XCI6XCJCdXR0b25cIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCJCdXR0b25Hcm91cFwiLFwicGF0aFwiOlwiI2hlYWRlci1CdXR0b25Hcm91cFwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItQnV0dG9uR3JvdXAnPkJ1dHRvbkdyb3VwPC9oMj5cIixcInRleHRcIjpcIkJ1dHRvbkdyb3VwXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLmlrnms5VcIixcInBhdGhcIjpcIiNoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTUnPuaWueazlTwvaDE+XCIsXCJ0ZXh0XCI6XCLmlrnms5VcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJCdXR0b25cIixcInBhdGhcIjpcIiNoZWFkZXItQnV0dG9uXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1CdXR0b24nPkJ1dHRvbjwvaDI+XCIsXCJ0ZXh0XCI6XCJCdXR0b25cIixcImNoaWxkcmVuXCI6W119XX1dfSx7XCJ0aXRsZVwiOlwi5aSN6YCJ5qGGXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2NoZWNrYm94L2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLml6XmnJ/pgInmi6lcIixcInBhdGhcIjpcImNvbXBvbmVudHMvZGF0ZXBpY2tlci9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5by556qXXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2RpYWxvZy9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuaJqeWxleeCuVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTYlODklQTklRTUlQjElOTUlRTclODIlQjlcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNiU4OSVBOSVFNSVCMSU5NSVFNyU4MiVCOSc+5omp5bGV54K5PC9oMT5cIixcInRleHRcIjpcIuaJqeWxleeCuVwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuaWueazlVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTVcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NSc+5pa55rOVPC9oMT5cIixcInRleHRcIjpcIuaWueazlVwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuS6i+S7tlwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjZcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNic+5LqL5Lu2PC9oMT5cIixcInRleHRcIjpcIuS6i+S7tlwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5LiL5ouJ6I+c5Y2VXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2Ryb3Bkb3duL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiRHJvcGRvd25cIixcInBhdGhcIjpcIiNoZWFkZXItRHJvcGRvd25cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLURyb3Bkb3duJz5Ecm9wZG93bjwvaDI+XCIsXCJ0ZXh0XCI6XCJEcm9wZG93blwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIkRyb3Bkb3duSXRlbVwiLFwicGF0aFwiOlwiI2hlYWRlci1Ecm9wZG93bkl0ZW1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLURyb3Bkb3duSXRlbSc+RHJvcGRvd25JdGVtPC9oMj5cIixcInRleHRcIjpcIkRyb3Bkb3duSXRlbVwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuS6i+S7tlwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjZcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNic+5LqL5Lu2PC9oMj5cIixcInRleHRcIjpcIuS6i+S7tlwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIkRyb3Bkb3duSXRlbVwiLFwicGF0aFwiOlwiI2hlYWRlci1Ecm9wZG93bkl0ZW1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLURyb3Bkb3duSXRlbSc+RHJvcGRvd25JdGVtPC9oMj5cIixcInRleHRcIjpcIkRyb3Bkb3duSXRlbVwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLlj6/nvJbovpHmlofmnKxcIixcInBhdGhcIjpcImNvbXBvbmVudHMvZWRpdGFibGUvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLkuovku7ZcIixcInBhdGhcIjpcIiNoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjYnPuS6i+S7tjwvaDE+XCIsXCJ0ZXh0XCI6XCLkuovku7ZcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuihqOWNlVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9mb3JtL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiRm9ybUl0ZW1cIixcInBhdGhcIjpcIiNoZWFkZXItRm9ybUl0ZW1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUZvcm1JdGVtJz5Gb3JtSXRlbTwvaDI+XCIsXCJ0ZXh0XCI6XCJGb3JtSXRlbVwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5omp5bGV54K5XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNiU4OSVBOSVFNSVCMSU5NSVFNyU4MiVCOVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU2JTg5JUE5JUU1JUIxJTk1JUU3JTgyJUI5Jz7mianlsZXngrk8L2gxPlwiLFwidGV4dFwiOlwi5omp5bGV54K5XCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiRm9ybUl0ZW1cIixcInBhdGhcIjpcIiNoZWFkZXItRm9ybUl0ZW1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUZvcm1JdGVtJz5Gb3JtSXRlbTwvaDI+XCIsXCJ0ZXh0XCI6XCJGb3JtSXRlbVwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5LqL5Lu2XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNlwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2Jz7kuovku7Y8L2gxPlwiLFwidGV4dFwiOlwi5LqL5Lu2XCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiRm9ybVwiLFwicGF0aFwiOlwiI2hlYWRlci1Gb3JtXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Gb3JtJz5Gb3JtPC9oMj5cIixcInRleHRcIjpcIkZvcm1cIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuaWueazlVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTVcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NSc+5pa55rOVPC9oMT5cIixcInRleHRcIjpcIuaWueazlVwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkZvcm1cIixcInBhdGhcIjpcIiNoZWFkZXItRm9ybVwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItRm9ybSc+Rm9ybTwvaDI+XCIsXCJ0ZXh0XCI6XCJGb3JtXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLpnZnmgIHmlrnms5VcIixcInBhdGhcIjpcIiNoZWFkZXItJUU5JTlEJTk5JUU2JTgwJTgxJUU2JTk2JUI5JUU2JUIzJTk1XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTklOUQlOTklRTYlODAlODElRTYlOTYlQjklRTYlQjMlOTUnPumdmeaAgeaWueazlTwvaDE+XCIsXCJ0ZXh0XCI6XCLpnZnmgIHmlrnms5VcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJGb3JtXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUZvcm1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUZvcm0nPkZvcm08L2gyPlwiLFwidGV4dFwiOlwiRm9ybVwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLmoIXmoLxcIixcInBhdGhcIjpcImNvbXBvbmVudHMvZ3JpZC9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIlJvd1wiLFwicGF0aFwiOlwiI2hlYWRlci1Sb3dcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLVJvdyc+Um93PC9oMj5cIixcInRleHRcIjpcIlJvd1wiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIkNvbFwiLFwicGF0aFwiOlwiI2hlYWRlci1Db2xcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUNvbCc+Q29sPC9oMj5cIixcInRleHRcIjpcIkNvbFwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLovpPlhaXmoYZcIixcInBhdGhcIjpcImNvbXBvbmVudHMvaW5wdXQvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLmianlsZXngrlcIixcInBhdGhcIjpcIiNoZWFkZXItJUU2JTg5JUE5JUU1JUIxJTk1JUU3JTgyJUI5XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTYlODklQTklRTUlQjElOTUlRTclODIlQjknPuaJqeWxleeCuTwvaDE+XCIsXCJ0ZXh0XCI6XCLmianlsZXngrlcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLkuovku7ZcIixcInBhdGhcIjpcIiNoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjYnPuS6i+S7tjwvaDE+XCIsXCJ0ZXh0XCI6XCLkuovku7ZcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuWFqOWxgOaPkOekulwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9tZXNzYWdlL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi6Z2Z5oCB5pa55rOVXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFOSU5RCU5OSVFNiU4MCU4MSVFNiU5NiVCOSVFNiVCMyU5NVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU5JTlEJTk5JUU2JTgwJTgxJUU2JTk2JUI5JUU2JUIzJTk1Jz7pnZnmgIHmlrnms5U8L2gxPlwiLFwidGV4dFwiOlwi6Z2Z5oCB5pa55rOVXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLliIbpobVcIixcInBhdGhcIjpcImNvbXBvbmVudHMvcGFnaW5hdGlvbi9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuaWueazlVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTVcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NSc+5pa55rOVPC9oMT5cIixcInRleHRcIjpcIuaWueazlVwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIlBhZ2luYXRpb25cIixcInBhdGhcIjpcIiNoZWFkZXItUGFnaW5hdGlvblwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItUGFnaW5hdGlvbic+UGFnaW5hdGlvbjwvaDI+XCIsXCJ0ZXh0XCI6XCJQYWdpbmF0aW9uXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIui/m+W6puadoVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9wcm9ncmVzcy9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5Y2V6YCJ5qGGXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3JhZGlvL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLpgInmi6nmoYZcIixcInBhdGhcIjpcImNvbXBvbmVudHMvc2VsZWN0L2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiU2VsZWN0XCIsXCJwYXRoXCI6XCIjaGVhZGVyLVNlbGVjdFwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItU2VsZWN0Jz5TZWxlY3Q8L2gyPlwiLFwidGV4dFwiOlwiU2VsZWN0XCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwiT3B0aW9uXCIsXCJwYXRoXCI6XCIjaGVhZGVyLU9wdGlvblwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItT3B0aW9uJz5PcHRpb248L2gyPlwiLFwidGV4dFwiOlwiT3B0aW9uXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIua7keWdl1wiLFwicGF0aFwiOlwiY29tcG9uZW50cy9zbGlkZXIvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuaVsOWtl+i+k+WFpeahhlwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9zcGlubmVyL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLmraXpqqTmnaFcIixcInBhdGhcIjpcImNvbXBvbmVudHMvc3RlcHMvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJTdGVwc1wiLFwicGF0aFwiOlwiI2hlYWRlci1TdGVwc1wiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItU3RlcHMnPlN0ZXBzPC9oMj5cIixcInRleHRcIjpcIlN0ZXBzXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwiU3RlcFwiLFwicGF0aFwiOlwiI2hlYWRlci1TdGVwXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1TdGVwJz5TdGVwPC9oMj5cIixcInRleHRcIjpcIlN0ZXBcIixcImNoaWxkcmVuXCI6W119XX1dfSx7XCJ0aXRsZVwiOlwi6KGo5qC8XCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3RhYmxlL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi6KGo5qC85bGe5oCnIFRhYmxlXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFOCVBMSVBOCVFNiVBMCVCQyVFNSVCMSU5RSVFNiU4MCVBNyUyMFRhYmxlXCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTglQTElQTglRTYlQTAlQkMlRTUlQjElOUUlRTYlODAlQTclMjBUYWJsZSc+6KGo5qC85bGe5oCnIFRhYmxlPC9oMT5cIixcInRleHRcIjpcIuihqOagvOWxnuaApyBUYWJsZVwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi56m/5qKt5qGGXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3RyYW5zZmVyL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19XX0sXCJoaWdobGlnaHRlZFwiOlt7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganNcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gSW50YWN0IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2ludGFjdCc8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gdGVtcGxhdGUgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nLi9pbmRleC52ZHQnPC9zcGFuPjtcXG5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmRlZmF1bHQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWNsYXNzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5jbGFzczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXh0ZW5kczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtdGl0bGVcXFwiPkludGFjdDwvc3Bhbj4gPC9zcGFuPntcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPnN0YXRpYzwvc3Bhbj4gdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59PC9jb2RlPjwvcHJlPlwifV19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvdGFibGUvaW5kZXguanNvblxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL2NvbXBvbmVudHMvdGFibGUvaW5kZXguanNvblxuLy8gbW9kdWxlIGNodW5rcyA9IDE3IDEwMiJdLCJzb3VyY2VSb290IjoiIn0=