webpackJsonp([33],{

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/slider/demos/step/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example.index-83 .k-slider {\n  margin-bottom: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./site/components/slider/demos/step/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/slider/demos/step/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/slider/demos/step/index.vdt");

var _index3 = _interopRequireDefault(_index2);

__webpack_require__("./site/components/slider/demos/step/index.styl");

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

/***/ "./site/components/slider/demos/step/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/slider/demos/step/index.styl");
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
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/slider/demos/step/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/slider/demos/step/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./site/components/slider/demos/step/index.vdt":
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

  return h('div', null, [h(_slider2.default, { 'step': function () {
      try {
        return [5][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': null, '_context': this, value: _getModel(self, 'value1'), 'ev-$change:value': function ev$changeValue(__c, __n) {
      _setModel(self, 'value1', __n);
    } }), h(_slider2.default, { 'min': function () {
      try {
        return [50][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'max': function () {
      try {
        return [500][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'step': function () {
      try {
        return [0.1][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': null, '_context': this, value: _getModel(self, 'value2'), 'ev-$change:value': function ev$changeValue(__c, __n) {
      _setModel(self, 'value2', __n);
    } })]);
};

var _slider = __webpack_require__("./components/slider/index.js");

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvc2xpZGVyL2RlbW9zL3N0ZXAvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvc2xpZGVyL2RlbW9zL3N0ZXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL3NsaWRlci9kZW1vcy9zdGVwL2luZGV4LnN0eWw/ZGUzMyIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvc2xpZGVyL2RlbW9zL3N0ZXAvaW5kZXgudmR0Il0sIm5hbWVzIjpbImRlZmF1bHQiLCJ0ZW1wbGF0ZSIsIm9iaiIsIl9WZHQiLCJibG9ja3MiLCIkY2FsbGVlIiwiVmR0IiwiaCIsIm1pc3MiLCJoYyIsImh1Iiwid2lkZ2V0cyIsIl9ibG9ja3MiLCJfX2Jsb2NrcyIsIl9fdSIsInV0aWxzIiwiZXh0ZW5kIiwiX2UiLCJlcnJvciIsIl9jbGFzc05hbWUiLCJjbGFzc05hbWUiLCJfX28iLCJPcHRpb25zIiwiX2dldE1vZGVsIiwiZ2V0TW9kZWwiLCJfc2V0TW9kZWwiLCJzZXRNb2RlbCIsIl9zZXRDaGVja2JveE1vZGVsIiwic2V0Q2hlY2tib3hNb2RlbCIsIl9kZXRlY3RDaGVja2JveENoZWNrZWQiLCJkZXRlY3RDaGVja2JveENoZWNrZWQiLCJfc2V0U2VsZWN0TW9kZWwiLCJzZXRTZWxlY3RNb2RlbCIsInNlbGYiLCJkYXRhIiwic2NvcGUiLCJBbmltYXRlIiwicGFyZW50IiwiX3N1cGVyIiwiZSIsImNhbGwiLCJ2YWx1ZSIsIl9fYyIsIl9fbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7QUFHQTtBQUNBLHNEQUF1RCx3QkFBd0IsR0FBRzs7QUFFbEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQ1BRQSxPOzs7O0FBQ1I7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBR0ssaUJBQU9DLFFBQVAsRTs7Ozs7Ozs7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Q3RCLFdBQUdzQixDQUFIO0FBQU07QUFBQyxLQUFwRCxDQUFxREMsSUFBckQsQ0FBMEQsSUFBMUQsQ0FBeEosRUFBeU4sWUFBWSxJQUFyTyxFQUEyTyxZQUFZLElBQXZQLEVBQTZQQyxPQUFPbEIsVUFBVVUsSUFBVixFQUFnQixRQUFoQixDQUFwUSxFQUErUixvQkFBb0Isd0JBQVNTLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUFFbEIsZ0JBQVVRLElBQVYsRUFBZ0IsUUFBaEIsRUFBMEJVLEdBQTFCO0FBQWdDLEtBQXhXLEVBQVYsQ0FBdE8sQ0FBZixDQUFQO0FBQ0MsQzs7QUFmRCIsImZpbGUiOiJzdGF0aWMvY2h1bmsvMGU3NzZkNGVmMmEzYzdmYWI3Y2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5leGFtcGxlLmluZGV4LTgzIC5rLXNsaWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL3NpdGUvY29tcG9uZW50cy9zbGlkZXIvZGVtb3Mvc3RlcC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL3NpdGUvY29tcG9uZW50cy9zbGlkZXIvZGVtb3Mvc3RlcC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIgMzMiLCJleHBvcnQge2RlZmF1bHQgYXMgZGF0YX0gZnJvbSAnLi9pbmRleC5qc29uJztcbmltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7IFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL3NsaWRlci9kZW1vcy9zdGVwL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL3NsaWRlci9kZW1vcy9zdGVwL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9jb21wb25lbnRzL3NsaWRlci9kZW1vcy9zdGVwL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiAzMyIsImltcG9ydCBTbGlkZXIgZnJvbSAna3BjL2NvbXBvbmVudHMvc2xpZGVyJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5yZXR1cm4gaCgnZGl2JywgbnVsbCwgW2goU2xpZGVyLCB7J3N0ZXAnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbNSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzLCB2YWx1ZTogX2dldE1vZGVsKHNlbGYsICd2YWx1ZTEnKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbihfX2MsIF9fbikgeyBfc2V0TW9kZWwoc2VsZiwgJ3ZhbHVlMScsIF9fbikgfX0pLCBoKFNsaWRlciwgeydtaW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbNTAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ21heCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFs1MDAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3N0ZXAnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbMC4xIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXMsIHZhbHVlOiBfZ2V0TW9kZWwoc2VsZiwgJ3ZhbHVlMicpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKF9fYywgX19uKSB7IF9zZXRNb2RlbChzZWxmLCAndmFsdWUyJywgX19uKSB9fSldKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy9zbGlkZXIvZGVtb3Mvc3RlcC9pbmRleC52ZHQiXSwic291cmNlUm9vdCI6IiJ9