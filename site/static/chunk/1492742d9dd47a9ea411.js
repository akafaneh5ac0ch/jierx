webpackJsonp([190],{

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/checkbox/demos/basic/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example.index-11 .k-checkbox {\n  margin-right: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./site/components/checkbox/demos/basic/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/checkbox/demos/basic/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/checkbox/demos/basic/index.vdt");

var _index3 = _interopRequireDefault(_index2);

__webpack_require__("./site/components/checkbox/demos/basic/index.styl");

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

/***/ "./site/components/checkbox/demos/basic/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/checkbox/demos/basic/index.styl");
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
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/checkbox/demos/basic/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/checkbox/demos/basic/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./site/components/checkbox/demos/basic/index.vdt":
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

  return h('div', null, [h(_checkbox2.default, { 'children': 'checkbox', '_context': this }), h(_checkbox2.default, { 'disabled': function () {
      try {
        return [true][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': 'disabled checkbox', '_context': this }), h(_checkbox2.default, { 'value': function () {
      try {
        return [true][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'disabled': function () {
      try {
        return [true][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': 'disabled checked checkbox', '_context': this })]);
};

var _checkbox = __webpack_require__("./components/checkbox/index.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvY2hlY2tib3gvZGVtb3MvYmFzaWMvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvY2hlY2tib3gvZGVtb3MvYmFzaWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2NoZWNrYm94L2RlbW9zL2Jhc2ljL2luZGV4LnN0eWw/YjMyNyIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvY2hlY2tib3gvZGVtb3MvYmFzaWMvaW5kZXgudmR0Il0sIm5hbWVzIjpbImRlZmF1bHQiLCJ0ZW1wbGF0ZSIsIm9iaiIsIl9WZHQiLCJibG9ja3MiLCIkY2FsbGVlIiwiVmR0IiwiaCIsIm1pc3MiLCJoYyIsImh1Iiwid2lkZ2V0cyIsIl9ibG9ja3MiLCJfX2Jsb2NrcyIsIl9fdSIsInV0aWxzIiwiZXh0ZW5kIiwiX2UiLCJlcnJvciIsIl9jbGFzc05hbWUiLCJjbGFzc05hbWUiLCJfX28iLCJPcHRpb25zIiwiX2dldE1vZGVsIiwiZ2V0TW9kZWwiLCJfc2V0TW9kZWwiLCJzZXRNb2RlbCIsIl9zZXRDaGVja2JveE1vZGVsIiwic2V0Q2hlY2tib3hNb2RlbCIsIl9kZXRlY3RDaGVja2JveENoZWNrZWQiLCJkZXRlY3RDaGVja2JveENoZWNrZWQiLCJfc2V0U2VsZWN0TW9kZWwiLCJzZXRTZWxlY3RNb2RlbCIsInNlbGYiLCJkYXRhIiwic2NvcGUiLCJBbmltYXRlIiwicGFyZW50IiwiX3N1cGVyIiwiZSIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQSx3REFBeUQsdUJBQXVCLEdBQUc7O0FBRW5GOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0NQUUEsTzs7OztBQUNSOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUdLLGlCQUFPQyxRQUFQLEU7Ozs7Ozs7Ozs7NkJBQ01BLFE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7Ozs7Ozs7O2tCQ3hCZSxVQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0JDLE1BQXBCLEVBQTRCQyxPQUE1QixFQUFxQzs7QUFFcERGLFdBQVNBLE9BQU9HLEdBQWhCO0FBQ0FKLFVBQVFBLE1BQU0sRUFBZDtBQUNBRSxhQUFXQSxTQUFTLEVBQXBCO0FBQ0EsTUFBSUcsSUFBSUosS0FBS0ssSUFBTCxDQUFVRCxDQUFsQjtBQUFBLE1BQXFCRSxLQUFLTixLQUFLSyxJQUFMLENBQVVDLEVBQXBDO0FBQUEsTUFBd0NDLEtBQUtQLEtBQUtLLElBQUwsQ0FBVUUsRUFBdkQ7QUFBQSxNQUEyREMsVUFBVSxRQUFRLEtBQUtBLE9BQWIsSUFBd0IsRUFBN0Y7QUFBQSxNQUFpR0MsVUFBVSxFQUEzRztBQUFBLE1BQStHQyxXQUFXLEVBQTFIO0FBQUEsTUFDQUMsTUFBTVgsS0FBS1ksS0FEWDtBQUFBLE1BQ2tCQyxTQUFTRixJQUFJRSxNQUQvQjtBQUFBLE1BQ3VDQyxLQUFLSCxJQUFJSSxLQURoRDtBQUFBLE1BQ3VEQyxhQUFhTCxJQUFJTSxTQUR4RTtBQUFBLE1BRUFDLE1BQU1QLElBQUlRLE9BRlY7QUFBQSxNQUVtQkMsWUFBWUYsSUFBSUcsUUFGbkM7QUFBQSxNQUU2Q0MsWUFBWUosSUFBSUssUUFGN0Q7QUFBQSxNQUdBQyxvQkFBb0JiLElBQUljLGdCQUh4QjtBQUFBLE1BRzBDQyx5QkFBeUJmLElBQUlnQixxQkFIdkU7QUFBQSxNQUlBQyxrQkFBa0JqQixJQUFJa0IsY0FKdEI7QUFBQSxNQUtBQyxPQUFPLEtBQUtDLElBTFo7QUFBQSxNQUtrQkMsUUFBUWpDLEdBTDFCO0FBQUEsTUFLK0JrQyxVQUFVSCxRQUFRQSxLQUFLRyxPQUx0RDtBQUFBLE1BSytEQyxTQUFTLENBQUNoQyxXQUFXLEVBQVosRUFBZ0JpQyxNQUx4Rjs7QUFRQSxTQUFPL0IsRUFBRSxLQUFGLEVBQVMsSUFBVCxFQUFlLENBQUNBLHNCQUFZLEVBQUMsWUFBWSxVQUFiLEVBQXlCLFlBQVksSUFBckMsRUFBWixDQUFELEVBQTBEQSxzQkFBWSxFQUFDLFlBQVksWUFBVztBQUFDLFVBQUk7QUFBQyxlQUFPLENBQUMsSUFBRCxFQUFPLENBQVAsQ0FBUDtBQUFpQixPQUF0QixDQUF1QixPQUFNZ0MsQ0FBTixFQUFTO0FBQUN0QixXQUFHc0IsQ0FBSDtBQUFNO0FBQUMsS0FBcEQsQ0FBcURDLElBQXJELENBQTBELElBQTFELENBQWIsRUFBOEUsWUFBWSxtQkFBMUYsRUFBK0csWUFBWSxJQUEzSCxFQUFaLENBQTFELEVBQXlNakMsc0JBQVksRUFBQyxTQUFTLFlBQVc7QUFBQyxVQUFJO0FBQUMsZUFBTyxDQUFDLElBQUQsRUFBUSxDQUFSLENBQVA7QUFBa0IsT0FBdkIsQ0FBd0IsT0FBTWdDLENBQU4sRUFBUztBQUFDdEIsV0FBR3NCLENBQUg7QUFBTTtBQUFDLEtBQXJELENBQXNEQyxJQUF0RCxDQUEyRCxJQUEzRCxDQUFWLEVBQTRFLFlBQVksWUFBVztBQUFDLFVBQUk7QUFBQyxlQUFPLENBQUMsSUFBRCxFQUFPLENBQVAsQ0FBUDtBQUFpQixPQUF0QixDQUF1QixPQUFNRCxDQUFOLEVBQVM7QUFBQ3RCLFdBQUdzQixDQUFIO0FBQU07QUFBQyxLQUFwRCxDQUFxREMsSUFBckQsQ0FBMEQsSUFBMUQsQ0FBeEYsRUFBeUosWUFBWSwyQkFBckssRUFBa00sWUFBWSxJQUE5TSxFQUFaLENBQXpNLENBQWYsQ0FBUDtBQUNDLEM7O0FBZkQiLCJmaWxlIjoic3RhdGljL2NodW5rLzE0OTI3NDJkOWRkNDdhOWVhNDExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZXhhbXBsZS5pbmRleC0xMSAuay1jaGVja2JveCB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXI/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vc2l0ZS9jb21wb25lbnRzL2NoZWNrYm94L2RlbW9zL2Jhc2ljL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vc2l0ZS9jb21wb25lbnRzL2NoZWNrYm94L2RlbW9zL2Jhc2ljL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxNDEgMTkwIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGRhdGF9IGZyb20gJy4vaW5kZXguanNvbic7XG5pbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnOyBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy9jaGVja2JveC9kZW1vcy9iYXNpYy9pbmRleC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvY29tcG9uZW50cy9jaGVja2JveC9kZW1vcy9iYXNpYy9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9jaGVja2JveC9kZW1vcy9iYXNpYy9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMTQxIDE5MCIsImltcG9ydCBDaGVja2JveCBmcm9tICdrcGMvY29tcG9uZW50cy9jaGVja2JveCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxucmV0dXJuIGgoJ2RpdicsIG51bGwsIFtoKENoZWNrYm94LCB7J2NoaWxkcmVuJzogJ2NoZWNrYm94JywgJ19jb250ZXh0JzogdGhpc30pLCBoKENoZWNrYm94LCB7J2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RydWVdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiAnZGlzYWJsZWQgY2hlY2tib3gnLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoQ2hlY2tib3gsIHsndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6ICdkaXNhYmxlZCBjaGVja2VkIGNoZWNrYm94JywgJ19jb250ZXh0JzogdGhpc30pXSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvY2hlY2tib3gvZGVtb3MvYmFzaWMvaW5kZXgudmR0Il0sInNvdXJjZVJvb3QiOiIifQ==