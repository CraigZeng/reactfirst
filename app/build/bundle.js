webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(76);


/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(77);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(107);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(241);

	var _store = __webpack_require__(267);

	var _store2 = _interopRequireDefault(_store);

	var _R = __webpack_require__(275);

	var _R2 = _interopRequireDefault(_R);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reduxState = {};
	var store = (0, _store2.default)(reduxState);

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_R2.default, null)
	), document.getElementById('app'));

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(242);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(245);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(77);

	var _storeShape = __webpack_require__(243);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(244);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return _react.Children.only(children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;

	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;

	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(77);

	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },

/***/ 244:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports.__esModule = true;
	exports["default"] = connect;

	var _react = __webpack_require__(77);

	var _storeShape = __webpack_require__(243);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(246);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(247);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(244);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(261);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(265);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(266);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = undefined;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }

	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (process.env.NODE_ENV !== 'production') {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }

	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }

	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;

	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;

	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },

/***/ 246:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(248);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getPrototype = __webpack_require__(262),
	    isHostObject = __webpack_require__(263),
	    isObjectLike = __webpack_require__(264);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;

/***/ },

/***/ 262:
/***/ function(module, exports) {

	"use strict";

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}

	module.exports = getPrototype;

/***/ },

/***/ 263:
/***/ function(module, exports) {

	'use strict';

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;

/***/ },

/***/ 264:
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}

	module.exports = isObjectLike;

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(248);

	var _reduxThunk = __webpack_require__(268);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxLogger = __webpack_require__(269);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reducers = __webpack_require__(270);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var loggerMiddleware = (0, _reduxLogger2.default)();

	var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, loggerMiddleware)(_redux.createStore);

	function configureStore(initialState) {
	  var store = createStoreWithMiddleware(_reducers2.default, initialState);
	  return store;
	}

/***/ },

/***/ 268:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = thunkMiddleware;
	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;

	  return function (next) {
	    return function (action) {
	      if (typeof action === 'function') {
	        return action(dispatch, getState);
	      }

	      return next(action);
	    };
	  };
	}

/***/ },

/***/ 269:
/***/ function(module, exports) {

	"use strict";

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	function _typeof(obj) {
	  return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	}

	var repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};
	var pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};
	var formatTime = function formatTime(time) {
	  return "@ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};

	// Use the new performance api to get better precision if available
	var timer = typeof performance !== "undefined" && typeof performance.now === "function" ? performance : Date;

	/**
	 * parse the level option of createLogger
	 *
	 * @property {string | function | object} level - console[level]
	 * @property {object} action
	 * @property {array} payload
	 * @property {string} type
	 */

	function getLogLevel(level, action, payload, type) {
	  switch (typeof level === "undefined" ? "undefined" : _typeof(level)) {
	    case "object":
	      return typeof level[type] === "function" ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
	    case "function":
	      return level(action);
	    default:
	      return level;
	  }
	}

	/**
	 * Creates logger with followed options
	 *
	 * @namespace
	 * @property {object} options - options for logger
	 * @property {string | function | object} options.level - console[level]
	 * @property {boolean} options.duration - print duration of each action?
	 * @property {boolean} options.timestamp - print timestamp with each action?
	 * @property {object} options.colors - custom colors
	 * @property {object} options.logger - implementation of the `console` API
	 * @property {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @property {boolean} options.collapsed - is group collapsed?
	 * @property {boolean} options.predicate - condition which resolves logger behavior
	 * @property {function} options.stateTransformer - transform state before print
	 * @property {function} options.actionTransformer - transform action before print
	 * @property {function} options.errorTransformer - transform error before print
	 */

	function createLogger() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var _options$level = options.level;
	  var level = _options$level === undefined ? "log" : _options$level;
	  var _options$logger = options.logger;
	  var logger = _options$logger === undefined ? console : _options$logger;
	  var _options$logErrors = options.logErrors;
	  var logErrors = _options$logErrors === undefined ? true : _options$logErrors;
	  var collapsed = options.collapsed;
	  var predicate = options.predicate;
	  var _options$duration = options.duration;
	  var duration = _options$duration === undefined ? false : _options$duration;
	  var _options$timestamp = options.timestamp;
	  var timestamp = _options$timestamp === undefined ? true : _options$timestamp;
	  var transformer = options.transformer;
	  var _options$stateTransfo = options.stateTransformer;
	  var // deprecated
	  stateTransformer = _options$stateTransfo === undefined ? function (state) {
	    return state;
	  } : _options$stateTransfo;
	  var _options$actionTransf = options.actionTransformer;
	  var actionTransformer = _options$actionTransf === undefined ? function (actn) {
	    return actn;
	  } : _options$actionTransf;
	  var _options$errorTransfo = options.errorTransformer;
	  var errorTransformer = _options$errorTransfo === undefined ? function (error) {
	    return error;
	  } : _options$errorTransfo;
	  var _options$colors = options.colors;
	  var colors = _options$colors === undefined ? {
	    title: function title() {
	      return "#000000";
	    },
	    prevState: function prevState() {
	      return "#9E9E9E";
	    },
	    action: function action() {
	      return "#03A9F4";
	    },
	    nextState: function nextState() {
	      return "#4CAF50";
	    },
	    error: function error() {
	      return "#F20404";
	    }
	  } : _options$colors;

	  // exit if console undefined

	  if (typeof logger === "undefined") {
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }

	  if (transformer) {
	    console.error("Option 'transformer' is deprecated, use stateTransformer instead");
	  }

	  var logBuffer = [];
	  function printBuffer() {
	    logBuffer.forEach(function (logEntry, key) {
	      var started = logEntry.started;
	      var startedTime = logEntry.startedTime;
	      var action = logEntry.action;
	      var prevState = logEntry.prevState;
	      var error = logEntry.error;
	      var took = logEntry.took;
	      var nextState = logEntry.nextState;

	      var nextEntry = logBuffer[key + 1];
	      if (nextEntry) {
	        nextState = nextEntry.prevState;
	        took = nextEntry.started - started;
	      }
	      // message
	      var formattedAction = actionTransformer(action);
	      var isCollapsed = typeof collapsed === "function" ? collapsed(function () {
	        return nextState;
	      }, action) : collapsed;

	      var formattedTime = formatTime(startedTime);
	      var titleCSS = colors.title ? "color: " + colors.title(formattedAction) + ";" : null;
	      var title = "action " + (timestamp ? formattedTime : "") + " " + formattedAction.type + " " + (duration ? "(in " + took.toFixed(2) + " ms)" : "");

	      // render
	      try {
	        if (isCollapsed) {
	          if (colors.title) logger.groupCollapsed("%c " + title, titleCSS);else logger.groupCollapsed(title);
	        } else {
	          if (colors.title) logger.group("%c " + title, titleCSS);else logger.group(title);
	        }
	      } catch (e) {
	        logger.log(title);
	      }

	      var prevStateLevel = getLogLevel(level, formattedAction, [prevState], "prevState");
	      var actionLevel = getLogLevel(level, formattedAction, [formattedAction], "action");
	      var errorLevel = getLogLevel(level, formattedAction, [error, prevState], "error");
	      var nextStateLevel = getLogLevel(level, formattedAction, [nextState], "nextState");

	      if (prevStateLevel) {
	        if (colors.prevState) logger[prevStateLevel]("%c prev state", "color: " + colors.prevState(prevState) + "; font-weight: bold", prevState);else logger[prevStateLevel]("prev state", prevState);
	      }

	      if (actionLevel) {
	        if (colors.action) logger[actionLevel]("%c action", "color: " + colors.action(formattedAction) + "; font-weight: bold", formattedAction);else logger[actionLevel]("action", formattedAction);
	      }

	      if (error && errorLevel) {
	        if (colors.error) logger[errorLevel]("%c error", "color: " + colors.error(error, prevState) + "; font-weight: bold", error);else logger[errorLevel]("error", error);
	      }

	      if (nextStateLevel) {
	        if (colors.nextState) logger[nextStateLevel]("%c next state", "color: " + colors.nextState(nextState) + "; font-weight: bold", nextState);else logger[nextStateLevel]("next state", nextState);
	      }

	      try {
	        logger.groupEnd();
	      } catch (e) {
	        logger.log("—— log end ——");
	      }
	    });
	    logBuffer.length = 0;
	  }

	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // exit early if predicate function returns false
	        if (typeof predicate === "function" && !predicate(getState, action)) {
	          return next(action);
	        }

	        var logEntry = {};
	        logBuffer.push(logEntry);

	        logEntry.started = timer.now();
	        logEntry.startedTime = new Date();
	        logEntry.prevState = stateTransformer(getState());
	        logEntry.action = action;

	        var returnedValue = undefined;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            logEntry.error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }

	        logEntry.took = timer.now() - logEntry.started;
	        logEntry.nextState = stateTransformer(getState());

	        printBuffer();

	        if (logEntry.error) throw logEntry.error;
	        return returnedValue;
	      };
	    };
	  };
	}

	module.exports = createLogger;

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(248);

	var _search = __webpack_require__(271);

	var _search2 = _interopRequireDefault(_search);

	var _page = __webpack_require__(274);

	var _page2 = _interopRequireDefault(_page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var searchApp = (0, _redux.combineReducers)({
	  page: _page2.default,
	  params: _search2.default
	});

	exports.default = searchApp;

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reduxUndo = __webpack_require__(272);

	var _reduxUndo2 = _interopRequireDefault(_reduxUndo);

	var _actions = __webpack_require__(273);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initedState = {
	  address: 'test',
	  name: ''
	};

	function search() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initedState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.SEARCH_COMPANY:
	      return Object.assign({}, state, {
	        name: action.text
	      });
	    default:
	      return state;
	  }
	}

	var undoSearch = (0, _reduxUndo2.default)(search, {
	  filter: (0, _reduxUndo.distinctState)()
	});

	exports.default = undoSearch;

/***/ },

/***/ 272:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports.parseActions = parseActions;
	exports.default = undoable;
	exports.distinctState = distinctState;
	exports.includeAction = includeAction;
	exports.ifAction = ifAction;
	exports.excludeAction = excludeAction;

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	// debug output
	var __DEBUG__ = undefined;
	function debug() {
	  if (__DEBUG__) {
	    var _console;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    if (!console.group) {
	      args.unshift('%credux-undo', 'font-style: italic');
	    }
	    (_console = console).log.apply(_console, args);
	  }
	}
	function debugStart(action, state) {
	  if (__DEBUG__) {
	    var args = ['action', action.type];
	    if (console.group) {
	      var _console2;

	      args.unshift('%credux-undo', 'font-style: italic');
	      (_console2 = console).groupCollapsed.apply(_console2, args);
	      console.log('received', { state: state, action: action });
	    } else {
	      debug.apply(undefined, args);
	    }
	  }
	}
	function debugEnd() {
	  if (__DEBUG__) {
	    return console.groupEnd && console.groupEnd();
	  }
	}
	// /debug output

	// action types
	var ActionTypes = exports.ActionTypes = {
	  UNDO: '@@redux-undo/UNDO',
	  REDO: '@@redux-undo/REDO',
	  JUMP_TO_FUTURE: '@@redux-undo/JUMP_TO_FUTURE',
	  JUMP_TO_PAST: '@@redux-undo/JUMP_TO_PAST'
	};
	// /action types

	// action creators to change the state
	var ActionCreators = exports.ActionCreators = {
	  undo: function undo() {
	    return { type: ActionTypes.UNDO };
	  },
	  redo: function redo() {
	    return { type: ActionTypes.REDO };
	  },
	  jumpToFuture: function jumpToFuture(index) {
	    return { type: ActionTypes.JUMP_TO_FUTURE, index: index };
	  },
	  jumpToPast: function jumpToPast(index) {
	    return { type: ActionTypes.JUMP_TO_PAST, index: index };
	  }
	};
	// /action creators

	// length: get length of history
	function length(history) {
	  var past = history.past;
	  var future = history.future;

	  return past.length + 1 + future.length;
	}
	// /length

	// insert: insert `state` into history, which means adding the current state
	//         into `past`, setting the new `state` as `present` and erasing
	//         the `future`.
	function insert(history, state, limit) {
	  debug('insert', { state: state, history: history, free: limit - length(history) });

	  var past = history.past;
	  var present = history.present;

	  var historyOverflow = limit && length(history) >= limit;

	  if (present === undefined) {
	    // init history
	    return {
	      past: [],
	      present: state,
	      future: []
	    };
	  }

	  return {
	    past: [].concat(_toConsumableArray(past.slice(historyOverflow ? 1 : 0)), [present]),
	    present: state,
	    future: []
	  };
	}
	// /insert

	// undo: go back to the previous point in history
	function undo(history) {
	  debug('undo', { history: history });

	  var past = history.past;
	  var present = history.present;
	  var future = history.future;

	  if (past.length <= 0) return history;

	  return {
	    past: past.slice(0, past.length - 1), // remove last element from past
	    present: past[past.length - 1], // set element as new present
	    future: [present].concat(_toConsumableArray(future))
	  };
	}
	// /undo

	// redo: go to the next point in history
	function redo(history) {
	  debug('redo', { history: history });

	  var past = history.past;
	  var present = history.present;
	  var future = history.future;

	  if (future.length <= 0) return history;

	  return {
	    future: future.slice(1, future.length), // remove element from future
	    present: future[0], // set element as new present
	    past: [].concat(_toConsumableArray(past), [present // old present state is in the past now
	    ])
	  };
	}
	// /redo

	// jumpToFuture: jump to requested index in future history
	function jumpToFuture(history, index) {
	  if (index === 0) return redo(history);

	  var past = history.past;
	  var present = history.present;
	  var future = history.future;

	  return {
	    future: future.slice(index + 1),
	    present: future[index],
	    past: past.concat([present]).concat(future.slice(0, index))
	  };
	}
	// /jumpToFuture

	// jumpToPast: jump to requested index in past history
	function jumpToPast(history, index) {
	  if (index === history.past.length - 1) return undo(history);

	  var past = history.past;
	  var present = history.present;
	  var future = history.future;

	  return {
	    future: past.slice(index + 1).concat([present]).concat(future),
	    present: past[index],
	    past: past.slice(0, index)
	  };
	}
	// /jumpToPast

	// wrapState: for backwards compatibility to 0.4
	function wrapState(state) {
	  return _extends({}, state, {
	    history: state
	  });
	}
	// /wrapState

	// updateState
	function updateState(state, history) {
	  return wrapState(_extends({}, state, history));
	}
	// /updateState

	// createHistory
	function createHistory(state) {
	  return {
	    past: [],
	    present: state,
	    future: []
	  };
	}
	// /createHistory

	// parseActions
	function parseActions(rawActions) {
	  var defaultValue = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	  if (Array.isArray(rawActions)) {
	    return rawActions;
	  } else if (typeof rawActions === 'string') {
	    return [rawActions];
	  }
	  return defaultValue;
	}
	// /parseActions

	// redux-undo higher order reducer
	function undoable(reducer) {
	  var rawConfig = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  __DEBUG__ = rawConfig.debug;

	  var config = {
	    initialState: rawConfig.initialState,
	    initTypes: parseActions(rawConfig.initTypes, ['@@redux/INIT', '@@INIT']),
	    limit: rawConfig.limit,
	    filter: rawConfig.filter || function () {
	      return true;
	    },
	    undoType: rawConfig.undoType || ActionTypes.UNDO,
	    redoType: rawConfig.redoType || ActionTypes.REDO,
	    jumpToPastType: rawConfig.jumpToPastType || ActionTypes.JUMP_TO_PAST,
	    jumpToFutureType: rawConfig.jumpToFutureType || ActionTypes.JUMP_TO_FUTURE
	  };
	  config.history = rawConfig.initialHistory || createHistory(config.initialState);

	  if (config.initTypes.length === 0) {
	    console.warn('redux-undo: supply at least one action type in initTypes to ensure initial state');
	  }

	  return function (state, action) {
	    debugStart(action, state);
	    var res = undefined;
	    switch (action.type) {
	      case config.undoType:
	        res = undo(state);
	        debug('after undo', res);
	        debugEnd();
	        return res ? updateState(state, res) : state;

	      case config.redoType:
	        res = redo(state);
	        debug('after redo', res);
	        debugEnd();
	        return res ? updateState(state, res) : state;

	      case config.jumpToPastType:
	        res = jumpToPast(state, action.index);
	        debug('after jumpToPast', res);
	        debugEnd();
	        return res ? updateState(state, res) : state;

	      case config.jumpToFutureType:
	        res = jumpToFuture(state, action.index);
	        debug('after jumpToFuture', res);
	        debugEnd();
	        return res ? updateState(state, res) : state;

	      default:
	        res = reducer(state && state.present, action);

	        if (config.initTypes.some(function (actionType) {
	          return actionType === action.type;
	        })) {
	          debug('reset history due to init action');
	          debugEnd();
	          return wrapState(_extends({}, state, createHistory(res)));
	        }

	        if (config.filter && typeof config.filter === 'function') {
	          if (!config.filter(action, res, state && state.present)) {
	            debug('filter prevented action, not storing it');
	            debugEnd();
	            return wrapState(_extends({}, state, {
	              present: res
	            }));
	          }
	        }

	        var history = state && state.present !== undefined ? state : config.history;
	        var updatedHistory = insert(history, res, config.limit);
	        debug('after insert', { history: updatedHistory, free: config.limit - length(updatedHistory) });
	        debugEnd();

	        return wrapState(_extends({}, state, updatedHistory));
	    }
	  };
	}
	// /redux-undo

	// distinctState helper
	function distinctState() {
	  return function (action, currentState, previousState) {
	    return currentState !== previousState;
	  };
	}
	// /distinctState

	// includeAction helper
	function includeAction(rawActions) {
	  var actions = parseActions(rawActions);
	  return function (action) {
	    return actions.indexOf(action.type) >= 0;
	  };
	}
	// /includeAction

	// deprecated ifAction helper
	function ifAction(rawActions) {
	  console.error('Deprecation Warning: Please change `ifAction` to `includeAction`');
	  return includeAction(rawActions);
	}
	// /ifAction

	// excludeAction helper
	function excludeAction() {
	  var rawActions = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

	  var actions = parseActions(rawActions);
	  return function (action) {
	    return actions.indexOf(action.type) < 0;
	  };
	}
	// /excludeAction

/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SEARCH_REDO = exports.SEARCH_UNDO = exports.SEARCH_PAGEGENERATE = exports.SEARCH_COMPANY = undefined;
	exports.searchCompany = searchCompany;
	exports.searchPagegenerate = searchPagegenerate;
	exports.fetchCompanyList = fetchCompanyList;
	exports.undoSearch = undoSearch;
	exports.redoSearch = redoSearch;

	var _reduxUndo = __webpack_require__(272);

	var SEARCH_COMPANY = exports.SEARCH_COMPANY = 'SEARCH_COMPANY';
	var SEARCH_PAGEGENERATE = exports.SEARCH_PAGEGENERATE = 'SEARCH_PAGEGENERATE';
	var SEARCH_UNDO = exports.SEARCH_UNDO = 'SEARCH_UNDO';
	var SEARCH_REDO = exports.SEARCH_REDO = 'SEARCH_REDO';

	function searchCompany(query) {
	  return {
	    type: SEARCH_COMPANY,
	    text: query
	  };
	}

	function searchPagegenerate(page) {
	  return {
	    type: SEARCH_PAGEGENERATE,
	    page: page
	  };
	}

	function fetchList(query) {
	  return function (dispatch) {
	    return new Promise(function (resolve) {
	      setTimeout(function () {
	        resolve(dispatch(searchCompany(query)));
	      }, 3000);
	    });
	  };
	}

	function fetchCompanyList(query) {
	  return function (dispatch) {
	    dispatch(fetchList(query));
	  };
	}

	function undoSearch() {
	  return function (dispatch) {
	    dispatch(_reduxUndo.ActionCreators.undo());
	  };
	}

	function redoSearch() {
	  return function (dispatch) {
	    dispatch(_reduxUndo.ActionCreators.redo());
	  };
	}

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _actions = __webpack_require__(273);

	function page() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.SEARCH_PAGEGENERATE:
	      return action.page;
	    default:
	      return state;
	  }
	}

	exports.default = page;

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(77);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(276);

	var _routes = __webpack_require__(335);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var R = function (_Component) {
	  _inherits(R, _Component);

	  function R() {
	    _classCallCheck(this, R);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(R).apply(this, arguments));
	  }

	  _createClass(R, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      console.log('-----');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: _routes2.default });
	    }
	  }]);

	  return R;
	}(_react.Component);

	exports.default = R;

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(77);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(276);

	var _Layout = __webpack_require__(336);

	var _Layout2 = _interopRequireDefault(_Layout);

	var _home = __webpack_require__(337);

	var _home2 = _interopRequireDefault(_home);

	var _search = __webpack_require__(338);

	var _search2 = _interopRequireDefault(_search);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	if (false) {
	  require.ensure = function (a, b) {
	    b(require);
	  };
	}

	/* eslint-disable */
	// const routes = {
	//   path: '/',
	//   component: LayoutView,
	//   indexRoute: { component: Search },
	//   childRoutes: [
	//     {
	//       path: '/about',
	//       getComponent: (location, callback) => {
	//         require.ensure([], (require) => {
	//           callback(null, require('./views/about').default);
	//         });
	//       },
	//     },
	//     {
	//       path: '/home',
	//       component: Home,
	//     },
	//     {
	//       path: '/search',
	//       component: Search,
	//     },
	//   ],
	// };
	/* eslint-enable */

	var routes = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _Layout2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _search2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _home2.default }),
	  _react2.default.createElement(_reactRouter.Route, {
	    path: '/about',
	    getComponent: function getComponent(location, callback) {
	      __webpack_require__.e/* nsure */(2, function (require) {
	        callback(null, __webpack_require__(342).default);
	      });
	    }
	  }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/search', component: _search2.default })
	);

	exports.default = routes;

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(77);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(276);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Layout(_ref) {
	  var children = _ref.children;

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { className: 'nav' },
	      _react2.default.createElement(
	        'ul',
	        null,
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/home' },
	            'Home'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/about' },
	            'About'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/search' },
	            'Search'
	          )
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'content' },
	      children
	    )
	  );
	}

	Layout.propTypes = {
	  children: _react.PropTypes.object.isRequired
	};

	exports.default = Layout;

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(77);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_Component) {
	  _inherits(Home, _Component);

	  function Home() {
	    _classCallCheck(this, Home);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
	  }

	  _createClass(Home, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.context.router.setRouteLeaveHook(this.props.route, function () {
	        return 'Your work is not saved! Are you sure you want to leave?';
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'Hello, world,t!'
	      );
	    }
	  }]);

	  return Home;
	}(_react.Component);

	Home.propTypes = {
	  route: _react.PropTypes.object.isRequired
	};

	Home.contextTypes = {
	  router: _react.PropTypes.object
	};

	exports.default = Home;

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(241);

	var _actions = __webpack_require__(273);

	var _search = __webpack_require__(339);

	var _search2 = _interopRequireDefault(_search);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    name: state.params.present.name,
	    canUndo: state.params.past.length > 0,
	    canRedo: state.params.future.length > 0
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    onSearchkk: function onSearchkk(text) {
	      dispatch((0, _actions.fetchCompanyList)(text));
	    },
	    undo: function undo() {
	      dispatch((0, _actions.undoSearch)());
	    },
	    redo: function redo() {
	      dispatch((0, _actions.redoSearch)());
	    }
	  };
	};

	var SearchContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_search2.default);

	exports.default = SearchContainer;

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(77);

	var _react2 = _interopRequireDefault(_react);

	var _SearchBox = __webpack_require__(340);

	var _SearchBox2 = _interopRequireDefault(_SearchBox);

	var _ListBox = __webpack_require__(341);

	var _ListBox2 = _interopRequireDefault(_ListBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Search = function (_Component) {
	  _inherits(Search, _Component);

	  function Search(props) {
	    _classCallCheck(this, Search);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Search).call(this, props));

	    _this.onSearch = _this.search.bind(_this);
	    _this.undo = _this.undo.bind(_this);
	    _this.redo = _this.redo.bind(_this);
	    return _this;
	  }

	  _createClass(Search, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'search',
	    value: function search(_ref) {
	      var queryText = _ref.queryText;

	      this.props.onSearchkk(queryText);
	    }
	  }, {
	    key: 'undo',
	    value: function undo() {
	      this.props.undo();
	    }
	  }, {
	    key: 'redo',
	    value: function redo() {
	      this.props.redo();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'search-container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'search-box-container' },
	          _react2.default.createElement(_SearchBox2.default, { onSearch: this.onSearch }),
	          _react2.default.createElement(_ListBox2.default, this.props)
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.undo, disabled: !this.props.canUndo },
	          'undo'
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.redo, disabled: !this.props.canRedo },
	          'redo'
	        )
	      );
	    }
	  }]);

	  return Search;
	}(_react.Component);

	Search.propTypes = {
	  onSearchkk: _react.PropTypes.func.isRequired,
	  canRedo: _react.PropTypes.bool.isRequired,
	  canUndo: _react.PropTypes.bool.isRequired,
	  redo: _react.PropTypes.func.isRequired,
	  undo: _react.PropTypes.func.isRequired
	};

	exports.default = Search;

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(77);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchBox = function (_Component) {
	  _inherits(SearchBox, _Component);

	  function SearchBox(props) {
	    _classCallCheck(this, SearchBox);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBox).call(this, props));

	    _this.doSearch = _this.search.bind(_this);
	    return _this;
	  }

	  _createClass(SearchBox, [{
	    key: "search",
	    value: function search() {
	      var params = { queryText: this.refs.query.value.trim() };
	      this.props.onSearch(params);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "search-form" },
	        _react2.default.createElement("input", { type: "text", name: "query", ref: "query" }),
	        _react2.default.createElement(
	          "button",
	          { className: "search-btn", onClick: this.doSearch },
	          "搜索"
	        )
	      );
	    }
	  }]);

	  return SearchBox;
	}(_react.Component);

	SearchBox.propTypes = {
	  onSearch: _react.PropTypes.func.isRequired
	};

	exports.default = SearchBox;

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(77);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ListBox = function (_Component) {
	  _inherits(ListBox, _Component);

	  function ListBox() {
	    _classCallCheck(this, ListBox);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ListBox).apply(this, arguments));
	  }

	  _createClass(ListBox, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {}
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "list-container" },
	        this.props.name
	      );
	    }
	  }]);

	  return ListBox;
	}(_react.Component);

	ListBox.propTypes = {
	  name: _react.PropTypes.string
	};

	exports.default = ListBox;

/***/ }

});