webpackJsonp([1],{

/***/ 1064:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _AppService = __webpack_require__(219);

var _AppService2 = _interopRequireDefault(_AppService);

var _Reducers = __webpack_require__(1065);

var _Reducers2 = _interopRequireDefault(_Reducers);

var _Layout = __webpack_require__(1068);

var _Layout2 = _interopRequireDefault(_Layout);

__webpack_require__(1076);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _AppService2.default({
  container: _Layout2.default,
  reducers: _Reducers2.default,
  DOMNode: document.getElementById('root')
}).init();

/***/ }),

/***/ 1065:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(51);

var _reduxForm = __webpack_require__(31);

var _SignInReducer = __webpack_require__(1066);

var _SignInReducer2 = _interopRequireDefault(_SignInReducer);

var _RegistrationReducer = __webpack_require__(1067);

var _RegistrationReducer2 = _interopRequireDefault(_RegistrationReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  form: _reduxForm.reducer,
  signIn: _SignInReducer2.default,
  registration: _RegistrationReducer2.default
});

exports.default = rootReducer;

/***/ }),

/***/ 1066:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _realt = __webpack_require__(22);

var _lodash = __webpack_require__(16);

var _lodash2 = _interopRequireDefault(_lodash);

var _StatusConstants = __webpack_require__(23);

var _SignInActions = __webpack_require__(485);

var _SignInActions2 = _interopRequireDefault(_SignInActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignInReducer = function () {
  function SignInReducer() {
    _classCallCheck(this, SignInReducer);

    this.bindHandler(this.handleSignInCallback, _SignInActions2.default.signInCallback);
  }

  _createClass(SignInReducer, [{
    key: 'handleSignInCallback',
    value: function handleSignInCallback(state, _ref) {
      var status = _ref.status,
          response = _ref.response,
          message = _ref.message;

      return _lodash2.default.assign({}, state, { status: status, message: message }, response ? { errors: response.message } : {});
    }
  }, {
    key: 'initialState',
    get: function get() {
      return {
        message: '',
        errors: '',
        status: _StatusConstants.STATUS_DEFAULT
      };
    }
  }]);

  return SignInReducer;
}();

exports.default = (0, _realt.createReducer)(SignInReducer);

/***/ }),

/***/ 1067:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _realt = __webpack_require__(22);

var _lodash = __webpack_require__(16);

var _lodash2 = _interopRequireDefault(_lodash);

var _StatusConstants = __webpack_require__(23);

var _RegistrationActions = __webpack_require__(487);

var _RegistrationActions2 = _interopRequireDefault(_RegistrationActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignInReducer = function () {
  function SignInReducer() {
    _classCallCheck(this, SignInReducer);

    this.bindAction(_RegistrationActions2.default.registrationCallback, this.handleRegistration);
  }

  _createClass(SignInReducer, [{
    key: 'handleRegistration',
    value: function handleRegistration(state, _ref) {
      var status = _ref.status,
          response = _ref.response,
          message = _ref.message;

      return _lodash2.default.assign({}, state, { status: status, message: message }, response ? { errors: response.message } : {});
    }
  }, {
    key: 'initialState',
    get: function get() {
      return {
        message: '',
        errors: '',
        status: _StatusConstants.STATUS_DEFAULT
      };
    }
  }]);

  return SignInReducer;
}();

exports.default = (0, _realt.createReducer)(SignInReducer);

/***/ }),

/***/ 1068:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(16);
var react_1 = __webpack_require__(0);
var react_addons_css_transition_group_1 = __webpack_require__(95);
var Controls_1 = __webpack_require__(14);
var SignIn_1 = __webpack_require__(1069);
var Registration_1 = __webpack_require__(1074);

var AuthorizationLayout = function (_react_1$Component) {
  _inherits(AuthorizationLayout, _react_1$Component);

  function AuthorizationLayout() {
    _classCallCheck(this, AuthorizationLayout);

    var _this = _possibleConstructorReturn(this, (AuthorizationLayout.__proto__ || Object.getPrototypeOf(AuthorizationLayout)).call(this));

    _this.state = {
      isSignIn: true
    };
    _this.onToggleView = function () {
      return lodash_1.default.debounce(_this.setState({ isSignIn: !_this.state.isSignIn }), 700);
    };
    return _this;
  }

  _createClass(AuthorizationLayout, [{
    key: "render",
    value: function render() {
      var isSignIn = this.state.isSignIn;

      return React.createElement(
        "div",
        { className: "authorization-layout" },
        React.createElement(
          "div",
          { className: "authorization-content-wrap" },
          React.createElement("img", { alt: "sorry...", src: "http://localhost:8090/contents/sign-in.png" }),
          React.createElement(
            Controls_1.Button,
            { bsStyle: "primary", className: "toggled-view", onClick: this.onToggleView },
            isSignIn ? [React.createElement(
              "i",
              { className: "material-icons", key: "reqistration" },
              "person_add"
            ), React.createElement(
              "span",
              null,
              "Registration"
            )] : [React.createElement(
              "i",
              { className: "material-icons", key: "signIn" },
              "person"
            ), React.createElement(
              "span",
              null,
              "Sign in"
            )]
          ),
          React.createElement(
            react_addons_css_transition_group_1.default,
            { transitionName: "authorization", transitionEnterTimeout: 400, transitionLeaveTimeout: 300 },
            isSignIn && React.createElement(SignIn_1.default, null),
            !isSignIn && React.createElement(Registration_1.default, null)
          )
        )
      );
    }
  }]);

  return AuthorizationLayout;
}(react_1.Component);

exports.default = AuthorizationLayout;

/***/ }),

/***/ 1069:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var prop_types_1 = __webpack_require__(1);
var ConnectDecorators_1 = __webpack_require__(36);
var SigInForm_1 = __webpack_require__(1070);
var ValidationConstants_1 = __webpack_require__(488);
var SignInActions_1 = __webpack_require__(485);

var SignIn = function (_react_1$Component) {
    _inherits(SignIn, _react_1$Component);

    function SignIn(props) {
        _classCallCheck(this, SignIn);

        var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this));

        _this.signIn = function (data) {
            return props.actions.signIn(data);
        };
        return _this;
    }

    _createClass(SignIn, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "authorization-form sign-in-form" },
                React.createElement(SigInForm_1.default, _extends({}, this.props, { onSubmit: this.signIn }))
            );
        }
    }]);

    return SignIn;
}(react_1.Component);

SignIn.propTypes = {
    actions: prop_types_1.default.object
};
exports.default = ConnectDecorators_1.compose(ConnectDecorators_1.connectToStore({ name: 'signIn', actions: SignInActions_1.default }), ConnectDecorators_1.connectToForm({ name: 'signIn', validation: ValidationConstants_1.signInValidation }))(SignIn);

/***/ }),

/***/ 1070:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var prop_types_1 = __webpack_require__(1);
var Form_1 = __webpack_require__(75);
var Controls_1 = __webpack_require__(14);
var SignInConstants_1 = __webpack_require__(218);
var SignInForm = function SignInForm(_a) {
    var status = _a.status,
        props = __rest(_a, ["status"]);
    return React.createElement(
        Form_1.Form,
        props,
        React.createElement(Form_1.Input, { name: "email", label: "Email", icon: "email", maxLength: SignInConstants_1.FIELD_MAX_LENGTH }),
        React.createElement(Form_1.Input, { name: "password", label: "Password", type: "password", icon: "lock", maxLength: SignInConstants_1.FIELD_MAX_LENGTH }),
        React.createElement(
            Controls_1.ButtonsGroup,
            null,
            React.createElement(
                Controls_1.ButtonLoader,
                { status: status },
                "sign in"
            )
        )
    );
};
SignInForm.propTypes = {
    status: prop_types_1.default.string
};
exports.default = SignInForm;

/***/ }),

/***/ 1071:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = undefined;
exports.combine = combine;

var _lodash = __webpack_require__(16);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function combine() {
  for (var _len = arguments.length, validations = Array(_len), _key = 0; _key < _len; _key++) {
    validations[_key] = arguments[_key];
  }

  return function (values) {
    return _lodash2.default.transform(validations, function (result, validation) {
      return _lodash2.default.merge(result, validation(values));
    });
  };
}

var validate = exports.validate = function validate(name) {
  for (var _len2 = arguments.length, rules = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    rules[_key2 - 1] = arguments[_key2];
  }

  return function (values) {
    return _lodash2.default.transform(rules, function (result, rule) {
      return _lodash2.default.assign(result, rule(name, _lodash2.default.get(values, name), values));
    });
  };
};

/***/ }),

/***/ 1072:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.beforeSameDate = exports.beforeDate = exports.afterSameDate = exports.afterDate = exports.kpp = exports.inn = exports.numberInterval = exports.weekDay = exports.date = exports.maskedInputDate = exports.alfaNumber = exports.alfa = exports.number = exports.maxLength = exports.minLength = exports.maxCount = exports.login = exports.email = exports.requiredIfNot = exports.requiredIf = exports.required = undefined;

var _lodash = __webpack_require__(16);

var _lodash2 = _interopRequireDefault(_lodash);

var _ValidationConstants = __webpack_require__(1073);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errorMessage = function errorMessage(isInvalid, name, message) {
  return isInvalid ? _lodash2.default.set({}, name, message) : {};
};
var valueGet = function valueGet(values, valueOrPath) {
  return _lodash2.default.isString(valueOrPath) ? _lodash2.default.get(values, valueOrPath) : valueOrPath;
};

var required = function required(name, value) {
  return errorMessage(_lodash2.default.isString(value) ? !_lodash2.default.trim(value, ' ') : !value && !_lodash2.default.isNumber(value), name, 'Пожалуйста, заполните это поле');
};

var requiredIf = function requiredIf(preconditionOrPath) {
  return function (name, value, values) {
    var precondition = valueGet(values, preconditionOrPath);

    if (!precondition) return null;

    return errorMessage(_lodash2.default.isEmpty(value) && !_lodash2.default.isNumber(value), name, 'Пожалуйста, заполните это поле');
  };
};

var requiredIfNot = function requiredIfNot(preconditionOrPath) {
  return function (name, value, values) {
    var precondition = valueGet(values, preconditionOrPath);

    if (precondition) return null;

    return errorMessage(_lodash2.default.isEmpty(value) && !_lodash2.default.isNumber(value), name, 'Пожалуйста, заполните это поле');
  };
};

var maxCount = function maxCount(count) {
  return function (name, values) {
    return errorMessage(values && values.length > count, name, { _error: '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E - ' + count });
  };
};

var minLength = function minLength(length) {
  return function (name, value) {
    return errorMessage(value && value.length < length, name, '\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u043F\u043E\u043B\u044F ' + length + ' \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432');
  };
};

var maxLength = function maxLength(length) {
  return function (name, value) {
    return errorMessage(value && value.length > length, name, '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u043F\u043E\u043B\u044F ' + length + ' \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432');
  };
};

var alfaNumber = function alfaNumber(name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (_lodash2.default.isEmpty(value)) return true;

  var val = value.replace(/[a-z\s0-9\sа-я\s-]+/ig, '');

  return errorMessage(val.length, name, _ValidationConstants.ERROR_MESSAGES.incorrectFormat);
};

var number = function number(name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (_lodash2.default.isEmpty(value)) return true;

  var val = value.replace(/[0-9\s]/ig, '');

  return errorMessage(val.length, name, _ValidationConstants.ERROR_MESSAGES.incorrectFormat);
};

var alfa = function alfa(name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (_lodash2.default.isEmpty(value)) return true;

  var val = value.replace(/[а-я\sa-z\s_\-"]+/ig, '');

  return errorMessage(val.length, name, _ValidationConstants.ERROR_MESSAGES.incorrectFormat);
};

var email = function email(name, value) {
  if (_lodash2.default.isEmpty(value)) return true;

  var re = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;

  return errorMessage(!re.test(value), name, _ValidationConstants.ERROR_MESSAGES.incorrectFormat);
};

var login = function login(name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var val = value.replace(/[a-z\sа-я\s0-9\s-\s@\s,\s."]+/ig, '');

  return errorMessage(val.length, name, _ValidationConstants.ERROR_MESSAGES.incorrectFormat);
};

var maskedInputDate = function maskedInputDate(minDateOrPath, maxDateOrPath) {
  return function (name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var values = arguments[2];

    var minDate = valueGet(values, minDateOrPath);
    var maxDate = valueGet(values, maxDateOrPath);

    if (!value) return true;

    if (!value.isValid() || !(minDate.isBefore(value) && maxDate.isAfter(value))) {
      return errorMessage(true, name, _ValidationConstants.ERROR_MESSAGES.incorrectValue);
    }

    return errorMessage(false);
  };
};

var afterDate = function afterDate(dateOrPath, message) {
  return function (name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var values = arguments[2];

    var date = valueGet(values, dateOrPath);

    if (!value || !date) return true;

    if (!value.isValid() || !value.isAfter(date)) {
      return errorMessage(true, name, message || _ValidationConstants.ERROR_MESSAGES.incorrectValue);
    }

    return errorMessage(false);
  };
};

var afterSameDate = function afterSameDate(dateOrPath, message) {
  return function (name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var values = arguments[2];

    var date = valueGet(values, dateOrPath);

    if (!value || !date) return true;

    if (!value.isValid() || !value.isAfter(date) && !value.isSame(date, 'day')) {
      return errorMessage(true, name, message || _ValidationConstants.ERROR_MESSAGES.incorrectValue);
    }

    return errorMessage(false);
  };
};

var beforeDate = function beforeDate(dateOrPath, message) {
  return function (name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var values = arguments[2];

    var date = valueGet(values, dateOrPath);

    if (!value || !date) return true;

    if (!value.isValid() || !value.isBefore(date) || value.isSame(date, 'day')) {
      return errorMessage(true, name, message || _ValidationConstants.ERROR_MESSAGES.incorrectValue);
    }

    return errorMessage(false);
  };
};

var beforeSameDate = function beforeSameDate(dateOrPath, message) {
  return function (name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var values = arguments[2];

    var date = valueGet(values, dateOrPath);

    if (!value || !date) return true;

    if (!value.isValid() || !value.isBefore(date) && !value.isSame(date, 'day')) {
      return errorMessage(true, name, message || _ValidationConstants.ERROR_MESSAGES.incorrectValue);
    }

    return errorMessage(false);
  };
};

var date = function date(name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!value) return true;

  if (!value.isValid()) {
    return errorMessage(true, name, _ValidationConstants.ERROR_MESSAGES.incorrectFormat);
  }

  return errorMessage(false);
};

var weekDay = function weekDay(weekDays) {
  return function (value) {
    return value && _lodash2.default.includes(weekDays, value.day()) && 'На этот день уже создан шаблон';
  };
};

var numberInterval = function numberInterval() {
  var minOrPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var maxOrPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return function (name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var values = arguments[2];

    var min = valueGet(values, minOrPath);
    var max = valueGet(values, maxOrPath);

    if (value < min || value > max) {
      return errorMessage(true, name, _ValidationConstants.ERROR_MESSAGES.incorrectValue);
    }

    return errorMessage(false);
  };
};

var inn = function inn(name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!value) return errorMessage(false);

  if (value.length === 0) {
    return errorMessage(false);
  }

  if (value.length !== 10 && value.length !== 12) {
    return errorMessage(true, name, 'Длина поля должна составлять 10 или 12 символов');
  }

  var coefficients = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8];

  var calculateControlNumber = function calculateControlNumber(digits, length) {
    var result = 0;

    _lodash2.default.take(digits, length).forEach(function (digit, index) {
      result += digit * _lodash2.default.takeRight(coefficients, length)[index];
    });

    return result % 11 % 10;
  };

  var validControlNumber = function validControlNumber(digits, length) {
    switch (length) {
      case 10:
        return calculateControlNumber(digits, 9) === digits[9];
      case 12:
        return calculateControlNumber(digits, 10) === digits[10] && calculateControlNumber(digits, 11) === digits[11];
      default:
        return false;
    }
  };

  var digits = _lodash2.default.split(value, '').map(function (digit) {
    return parseInt(digit, 10);
  });

  if (!validControlNumber(digits, value.length)) {
    return errorMessage(true, name, 'Контрольное число не совпадает с рассчитанным');
  }

  return errorMessage(false);
};

var kpp = function kpp(name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!value) return errorMessage(false);

  if (value.length !== 0 && value.length !== 9) {
    return errorMessage(true, name, 'Длина поля должна составлять 9 символов');
  }

  return errorMessage(false);
};

exports.required = required;
exports.requiredIf = requiredIf;
exports.requiredIfNot = requiredIfNot;
exports.email = email;
exports.login = login;
exports.maxCount = maxCount;
exports.minLength = minLength;
exports.maxLength = maxLength;
exports.number = number;
exports.alfa = alfa;
exports.alfaNumber = alfaNumber;
exports.maskedInputDate = maskedInputDate;
exports.date = date;
exports.weekDay = weekDay;
exports.numberInterval = numberInterval;
exports.inn = inn;
exports.kpp = kpp;
exports.afterDate = afterDate;
exports.afterSameDate = afterSameDate;
exports.beforeDate = beforeDate;
exports.beforeSameDate = beforeSameDate;

/***/ }),

/***/ 1073:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ERROR_MESSAGES = {
  incorrectFormat: 'Некорректный формат',
  incorrectValue: 'Некорректное значение'
};

exports.ERROR_MESSAGES = ERROR_MESSAGES;

/***/ }),

/***/ 1074:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var prop_types_1 = __webpack_require__(1);
var ConnectDecorators_1 = __webpack_require__(36);
var RegistrationForm_1 = __webpack_require__(1075);
var ValidationConstants_1 = __webpack_require__(488);
var RegistrationActions_1 = __webpack_require__(487);

var SignIn = function (_react_1$Component) {
    _inherits(SignIn, _react_1$Component);

    function SignIn(props) {
        _classCallCheck(this, SignIn);

        var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this));

        _this.registration = function (data) {
            return props.actions.registration(data);
        };
        return _this;
    }

    _createClass(SignIn, [{
        key: "render",
        value: function render() {
            console.log(this.props);
            return React.createElement(
                "div",
                { className: "authorization-form registration-form" },
                React.createElement(RegistrationForm_1.default, _extends({}, this.props, { onSubmit: this.registration }))
            );
        }
    }]);

    return SignIn;
}(react_1.Component);

SignIn.propTypes = {
    actions: prop_types_1.default.object
};
exports.default = ConnectDecorators_1.compose(ConnectDecorators_1.connectToStore({ name: 'registration', actions: RegistrationActions_1.default }), ConnectDecorators_1.connectToForm({ name: 'registration', validation: ValidationConstants_1.registrationValidation }))(SignIn);

/***/ }),

/***/ 1075:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var prop_types_1 = __webpack_require__(1);
var Form_1 = __webpack_require__(75);
var Controls_1 = __webpack_require__(14);
var SignInConstants_1 = __webpack_require__(218);
var RegistrationForm = function RegistrationForm(_a) {
    var status = _a.status,
        props = __rest(_a, ["status"]);
    return React.createElement(
        Form_1.Form,
        props,
        React.createElement(Form_1.Input, { name: "email", label: "Email*", icon: "email", maxLength: SignInConstants_1.FIELD_MAX_LENGTH }),
        React.createElement(Form_1.Input, { name: "displayName", label: "Login", icon: "face", maxLength: SignInConstants_1.FIELD_MAX_LENGTH }),
        React.createElement(Form_1.Input, { name: "password", label: "Password*", icon: "lock", maxLength: SignInConstants_1.FIELD_MAX_LENGTH }),
        React.createElement(
            Controls_1.ButtonsGroup,
            null,
            React.createElement(
                Controls_1.ButtonLoader,
                { status: status, bsSize: "lg" },
                "registration"
            )
        )
    );
};
RegistrationForm.propTypes = {
    status: prop_types_1.default.string
};
exports.default = RegistrationForm;

/***/ }),

/***/ 1076:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FIELD_MAX_LENGTH = exports.FIELD_MAX_LENGTH = 50;

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _realt = __webpack_require__(22);

var _WindowService = __webpack_require__(185);

var _WindowService2 = _interopRequireDefault(_WindowService);

var _SessionService = __webpack_require__(186);

var _SessionService2 = _interopRequireDefault(_SessionService);

var _StatusConstants = __webpack_require__(23);

var _AccountSource = __webpack_require__(486);

var _AccountSource2 = _interopRequireDefault(_AccountSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AccountSignInActions = function () {
  function AccountSignInActions() {
    _classCallCheck(this, AccountSignInActions);

    this.generate('signInCallback');
  }

  _createClass(AccountSignInActions, [{
    key: 'signIn',
    value: function signIn(query) {
      var _this = this;

      return function (dispatch) {
        _AccountSource2.default.signIn(query).loading(function (result) {
          return dispatch(_this.signInCallback(result));
        }).then(function (result) {
          _SessionService2.default.signIn(result.response.token);
          dispatch(_this.signInCallback(result));

          setTimeout(function () {
            return _WindowService2.default.redirect('/Dashboard');
          }, _StatusConstants.DELAY);
        }).catch(function (result) {
          dispatch(_this.signInCallback(result));

          setTimeout(function () {
            return dispatch(_this.signInCallback({ status: _StatusConstants.STATUS_DEFAULT }));
          }, _StatusConstants.DELAY);
        });
      };
    }
  }]);

  return AccountSignInActions;
}();

exports.default = (0, _realt.createActions)(AccountSignInActions);

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AjaxService = __webpack_require__(115);

var _AjaxService2 = _interopRequireDefault(_AjaxService);

var _UrlConstants = __webpack_require__(116);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  signIn: function signIn(query) {
    return _AjaxService2.default.postRequest(_UrlConstants.USER_URL + 'auth', query);
  },
  registration: function registration(query) {
    return _AjaxService2.default.postRequest(_UrlConstants.USER_URL + 'reg', query);
  }
};

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _realt = __webpack_require__(22);

var _WindowService = __webpack_require__(185);

var _WindowService2 = _interopRequireDefault(_WindowService);

var _SessionService = __webpack_require__(186);

var _SessionService2 = _interopRequireDefault(_SessionService);

var _StatusConstants = __webpack_require__(23);

var _AccountSource = __webpack_require__(486);

var _AccountSource2 = _interopRequireDefault(_AccountSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AccountRegistrationActions = function () {
  function AccountRegistrationActions() {
    _classCallCheck(this, AccountRegistrationActions);

    this.generate('registrationCallback');
  }

  _createClass(AccountRegistrationActions, [{
    key: 'registration',
    value: function registration(query) {
      var _this = this;

      return function (dispatch) {
        _AccountSource2.default.registration(query).loading(function (result) {
          return dispatch(_this.registrationCallback(result));
        }).then(function (result) {
          _SessionService2.default.signIn(result.response.token);
          dispatch(_this.registrationCallback(result));

          setTimeout(function () {
            return _WindowService2.default.redirect('/Dashboard');
          }, _StatusConstants.DELAY);
        }).catch(function (result) {
          dispatch(_this.registrationCallback(result));

          setTimeout(function () {
            return dispatch(_this.registrationCallback({ status: _StatusConstants.STATUS_DEFAULT }));
          }, _StatusConstants.DELAY);
        });
      };
    }
  }]);

  return AccountRegistrationActions;
}();

exports.default = (0, _realt.createActions)(AccountRegistrationActions);

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrationValidation = exports.signInValidation = undefined;

var _ValidationService = __webpack_require__(1071);

var _ValidationRules = __webpack_require__(1072);

var _SignInConstants = __webpack_require__(218);

var signInValidation = (0, _ValidationService.combine)((0, _ValidationService.validate)('email', _ValidationRules.required, (0, _ValidationRules.maxLength)(_SignInConstants.FIELD_MAX_LENGTH), _ValidationRules.email), (0, _ValidationService.validate)('password', _ValidationRules.required, (0, _ValidationRules.maxLength)(_SignInConstants.FIELD_MAX_LENGTH), _ValidationRules.alfaNumber));

var registrationValidation = (0, _ValidationService.combine)((0, _ValidationService.validate)('email', _ValidationRules.required, (0, _ValidationRules.maxLength)(_SignInConstants.FIELD_MAX_LENGTH), _ValidationRules.email), (0, _ValidationService.validate)('login', _ValidationRules.required, (0, _ValidationRules.maxLength)(_SignInConstants.FIELD_MAX_LENGTH), _ValidationRules.alfaNumber), (0, _ValidationService.validate)('password', _ValidationRules.required, (0, _ValidationRules.maxLength)(_SignInConstants.FIELD_MAX_LENGTH), _ValidationRules.alfaNumber), (0, _ValidationService.validate)('repeatPassword', _ValidationRules.required, (0, _ValidationRules.maxLength)(_SignInConstants.FIELD_MAX_LENGTH), _ValidationRules.alfaNumber));

exports.signInValidation = signInValidation;
exports.registrationValidation = registrationValidation;

/***/ })

},[1064]);