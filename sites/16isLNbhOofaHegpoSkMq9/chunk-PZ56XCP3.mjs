import { a as xu, b as Ie, c as O } from "./chunk-ELYU6EKT.mjs";
var Pt = {};
xu(Pt, {
  Children: () => In,
  Component: () => me,
  Fragment: () => ni,
  Profiler: () => eC,
  PureComponent: () => tC,
  StrictMode: () => nC,
  Suspense: () => Go,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => rC,
  cloneElement: () => yn,
  createContext: () => be,
  createElement: () => Aa,
  createFactory: () => iC,
  createRef: () => Im,
  default: () => b,
  forwardRef: () => je,
  isValidElement: () => jt,
  lazy: () => oC,
  memo: () => sC,
  startTransition: () => zi,
  unstable_act: () => aC,
  useCallback: () => fe,
  useContext: () => D,
  useDebugValue: () => lC,
  useDeferredValue: () => cC,
  useEffect: () => H,
  useId: () => ri,
  useImperativeHandle: () => uC,
  useInsertionEffect: () => qe,
  useLayoutEffect: () => ct,
  useMemo: () => oe,
  useReducer: () => fC,
  useRef: () => A,
  useState: () => Rt,
  useSyncExternalStore: () => dC,
  useTransition: () => hC,
  version: () => pC,
});
var b = {},
  Yo = Symbol.for("react.element"),
  $k = Symbol.for("react.portal"),
  zk = Symbol.for("react.fragment"),
  Nk = Symbol.for("react.strict_mode"),
  Hk = Symbol.for("react.profiler"),
  jk = Symbol.for("react.provider"),
  Wk = Symbol.for("react.context"),
  Uk = Symbol.for("react.forward_ref"),
  Xk = Symbol.for("react.suspense"),
  Yk = Symbol.for("react.memo"),
  Gk = Symbol.for("react.lazy"),
  xm = Symbol.iterator;
function Kk(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xm && e[xm]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var km = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Cm = Object.assign,
  Tm = {};
function $i(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Tm),
    (this.updater = n || km);
}
$i.prototype.isReactComponent = {};
$i.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
$i.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Em() {}
Em.prototype = $i.prototype;
function wu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Tm),
    (this.updater = n || km);
}
var ku = (wu.prototype = new Em());
ku.constructor = wu;
Cm(ku, $i.prototype);
ku.isPureReactComponent = !0;
var Sm = Array.isArray,
  Rm = Object.prototype.hasOwnProperty,
  Cu = { current: null },
  Pm = { key: !0, ref: !0, __self: !0, __source: !0 };
function _m(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Rm.call(t, r) && !Pm.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Yo,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Cu.current,
  };
}
function qk(e, t) {
  return {
    $$typeof: Yo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Tu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yo;
}
function Qk(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var wm = /\/+/g;
function Su(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Qk("" + e.key)
    : t.toString(36);
}
function Oa(e, t, n, r, i) {
  var o = typeof e;
  (o !== "undefined" && o !== "boolean") || (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Yo:
          case $k:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Su(s, 0) : r),
      Sm(i)
        ? ((n = ""),
          e != null && (n = e.replace(wm, "$&/") + "/"),
          Oa(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (Tu(i) &&
            (i = qk(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(wm, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Sm(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + Su(o, a);
      s += Oa(o, t, n, l, i);
    }
  else if (((l = Kk(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + Su(o, a++)), (s += Oa(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Ma(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Oa(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Zk(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status !== 0 && e._status !== -1) ||
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status !== 0 && e._status !== -1) ||
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var bt = { current: null },
  Da = { transition: null },
  Jk = {
    ReactCurrentDispatcher: bt,
    ReactCurrentBatchConfig: Da,
    ReactCurrentOwner: Cu,
  };
b.Children = {
  map: Ma,
  forEach: function (e, t, n) {
    Ma(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ma(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ma(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Tu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
b.Component = $i;
b.Fragment = zk;
b.Profiler = Hk;
b.PureComponent = wu;
b.StrictMode = Nk;
b.Suspense = Xk;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jk;
b.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Cm({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Cu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Rm.call(t, l) &&
        !Pm.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Yo, type: e.type, key: i, ref: o, props: r, _owner: s };
};
b.createContext = function (e) {
  return (
    (e = {
      $$typeof: Wk,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: jk, _context: e }),
    (e.Consumer = e)
  );
};
b.createElement = _m;
b.createFactory = function (e) {
  var t = _m.bind(null, e);
  return (t.type = e), t;
};
b.createRef = function () {
  return { current: null };
};
b.forwardRef = function (e) {
  return { $$typeof: Uk, render: e };
};
b.isValidElement = Tu;
b.lazy = function (e) {
  return { $$typeof: Gk, _payload: { _status: -1, _result: e }, _init: Zk };
};
b.memo = function (e, t) {
  return { $$typeof: Yk, type: e, compare: t === void 0 ? null : t };
};
b.startTransition = function (e) {
  var t = Da.transition;
  Da.transition = {};
  try {
    e();
  } finally {
    Da.transition = t;
  }
};
b.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
b.useCallback = function (e, t) {
  return bt.current.useCallback(e, t);
};
b.useContext = function (e) {
  return bt.current.useContext(e);
};
b.useDebugValue = function () {};
b.useDeferredValue = function (e) {
  return bt.current.useDeferredValue(e);
};
b.useEffect = function (e, t) {
  return bt.current.useEffect(e, t);
};
b.useId = function () {
  return bt.current.useId();
};
b.useImperativeHandle = function (e, t, n) {
  return bt.current.useImperativeHandle(e, t, n);
};
b.useInsertionEffect = function (e, t) {
  return bt.current.useInsertionEffect(e, t);
};
b.useLayoutEffect = function (e, t) {
  return bt.current.useLayoutEffect(e, t);
};
b.useMemo = function (e, t) {
  return bt.current.useMemo(e, t);
};
b.useReducer = function (e, t, n) {
  return bt.current.useReducer(e, t, n);
};
b.useRef = function (e) {
  return bt.current.useRef(e);
};
b.useState = function (e) {
  return bt.current.useState(e);
};
b.useSyncExternalStore = function (e, t, n) {
  return bt.current.useSyncExternalStore(e, t, n);
};
b.useTransition = function () {
  return bt.current.useTransition();
};
b.version = "18.2.0";
var In = b.Children,
  me = b.Component,
  ni = b.Fragment,
  eC = b.Profiler,
  tC = b.PureComponent,
  nC = b.StrictMode,
  Go = b.Suspense,
  rC = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yn = b.cloneElement,
  be = b.createContext,
  Aa = b.createElement,
  iC = b.createFactory,
  Im = b.createRef,
  je = b.forwardRef,
  jt = b.isValidElement,
  oC = b.lazy,
  sC = b.memo,
  zi = b.startTransition,
  aC = b.unstable_act,
  fe = b.useCallback,
  D = b.useContext,
  lC = b.useDebugValue,
  cC = b.useDeferredValue,
  H = b.useEffect,
  ri = b.useId,
  uC = b.useImperativeHandle,
  qe = b.useInsertionEffect,
  ct = b.useLayoutEffect,
  oe = b.useMemo,
  fC = b.useReducer,
  A = b.useRef,
  Rt = b.useState,
  dC = b.useSyncExternalStore,
  hC = b.useTransition,
  pC = b.version;
var mC = "default" in Pt ? b : Pt,
  Ni = {},
  vC = mC,
  gC = Symbol.for("react.element"),
  yC = Symbol.for("react.fragment"),
  bC = Object.prototype.hasOwnProperty,
  xC = vC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  SC = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fm(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) bC.call(t, r) && !SC.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: gC,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: xC.current,
  };
}
Ni.Fragment = yC;
Ni.jsx = Fm;
Ni.jsxs = Fm;
var Fe = Ni.Fragment,
  C = Ni.jsx,
  se = Ni.jsxs;
var wC = Object.create,
  rf = Object.defineProperty,
  kC = Object.getOwnPropertyDescriptor,
  Zv = Object.getOwnPropertyNames,
  CC = Object.getPrototypeOf,
  TC = Object.prototype.hasOwnProperty,
  EC = (e, t, n) =>
    t in e
      ? rf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  an = (e, t) =>
    function () {
      return t || (0, e[Zv(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  RC = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of Zv(t))
        !TC.call(e, i) &&
          i !== n &&
          rf(e, i, {
            get: () => t[i],
            enumerable: !(r = kC(t, i)) || r.enumerable,
          });
    return e;
  },
  An = (e, t, n) => (
    (n = e != null ? wC(CC(e)) : {}),
    RC(
      t || !e || !e.__esModule
        ? rf(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  R = (e, t, n) => (EC(e, typeof t != "symbol" ? t + "" : t, n), n),
  of = (e, t, n) => {
    if (!t.has(e)) throw TypeError("Cannot " + n);
  },
  fi = (e, t, n) => (
    of(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  Ki = (e, t, n) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  sf = (e, t, n, r) => (
    of(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  Ft = (e, t, n) => (of(e, t, "access private method"), n),
  PC = an({
    "../../../node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      function t(n) {
        var r = {};
        return function (i) {
          return r[i] === void 0 && (r[i] = n(i)), r[i];
        };
      }
      e.default = t;
    },
  }),
  _C = an({
    "../../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js"(
      e
    ) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      function t(o) {
        return o && typeof o == "object" && "default" in o ? o.default : o;
      }
      var n = t(PC()),
        r =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        i = n(function (o) {
          return (
            r.test(o) ||
            (o.charCodeAt(0) === 111 &&
              o.charCodeAt(1) === 110 &&
              o.charCodeAt(2) < 91)
          );
        });
      e.default = i;
    },
  }),
  Jn = be({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  ls = be({}),
  qi = be(null),
  Za = typeof document < "u",
  Cr = Za ? ct : H,
  af = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  IC = "framerAppearId",
  Ja = "data-" + af(IC),
  el = { skipAnimations: !1, useManualTiming: !1 },
  tl = be({}),
  os = be({}),
  rt = (e) => e,
  Qi = rt,
  Wt = rt,
  Jv = be({ strict: !1 }),
  Lm = class {
    constructor() {
      (this.order = []), (this.scheduled = new Set());
    }
    add(e) {
      if (!this.scheduled.has(e))
        return this.scheduled.add(e), this.order.push(e), !0;
    }
    remove(e) {
      let t = this.order.indexOf(e);
      t !== -1 && (this.order.splice(t, 1), this.scheduled.delete(e));
    }
    clear() {
      (this.order.length = 0), this.scheduled.clear();
    }
  };
function FC(e) {
  let t = new Lm(),
    n = new Lm(),
    r = 0,
    i = !1,
    o = !1,
    s = new WeakSet(),
    a = {
      schedule: (l, c = !1, u = !1) => {
        let f = u && i,
          d = f ? t : n;
        return c && s.add(l), d.add(l) && f && i && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), s.delete(l);
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let c = 0; c < r; c++) {
            let u = t.order[c];
            s.has(u) && (a.schedule(u), e()), u(l);
          }
        (i = !1), o && ((o = !1), a.process(l));
      },
    };
  return a;
}
var Qo = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  LC = 40;
function eg(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = Qo.reduce((f, d) => ((f[d] = FC(() => (n = !0))), f), {}),
    s = (f) => {
      o[f].process(i);
    },
    a = () => {
      let f = el.useManualTiming ? i.timestamp : performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, LC), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        Qo.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(a));
    },
    l = () => {
      (n = !0), (r = !0), i.isProcessing || e(a);
    };
  return {
    schedule: Qo.reduce((f, d) => {
      let m = o[d];
      return (f[d] = (y, g = !1, x = !1) => (n || l(), m.schedule(y, g, x))), f;
    }, {}),
    cancel: (f) => Qo.forEach((d) => o[d].cancel(f)),
    state: i,
    steps: o,
  };
}
var { schedule: lf, cancel: E4 } = eg(queueMicrotask, !1);
function Hi(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
var Mm = !1;
function MC(e, t, n, r, i) {
  let { visualElement: o } = D(ls),
    s = D(Jv),
    a = D(qi),
    l = D(Jn).reducedMotion,
    c = A();
  (r = r || s.renderer),
    !c.current &&
      r &&
      (c.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  let u = c.current,
    f = D(tl);
  u &&
    !u.projection &&
    i &&
    (u.type === "html" || u.type === "svg") &&
    DC(c.current, n, i, f),
    qe(() => {
      u && u.update(n, a);
    });
  let d = A(!!(n[Ja] && !O.HandoffComplete));
  return (
    Cr(() => {
      u &&
        (u.updateFeatures(),
        lf.render(u.render),
        d.current && u.animationState && u.animationState.animateChanges());
    }),
    H(() => {
      u &&
        (!d.current && u.animationState && u.animationState.animateChanges(),
        d.current && ((d.current = !1), Mm || ((Mm = !0), queueMicrotask(OC))));
    }),
    u
  );
}
function OC() {
  O.HandoffComplete = !0;
}
function DC(e, t, n, r) {
  let {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : tg(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (a && Hi(a)),
      visualElement: e,
      scheduleRender: () => e.scheduleRender(),
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: c,
    });
}
function tg(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : tg(e.parent);
}
function AC(e, t, n) {
  return fe(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Hi(n) && (n.current = r));
    },
    [t]
  );
}
function ss(e) {
  return typeof e == "string" || Array.isArray(e);
}
function nl(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
var cf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  uf = ["initial", ...cf];
function rl(e) {
  return nl(e.animate) || uf.some((t) => ss(e[t]));
}
function ng(e) {
  return !!(rl(e) || e.variants);
}
function VC(e, t) {
  if (rl(e)) {
    let { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ss(n) ? n : void 0,
      animate: ss(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function BC(e) {
  let { initial: t, animate: n } = VC(e, D(ls));
  return oe(() => ({ initial: t, animate: n }), [Om(t), Om(n)]);
}
function Om(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
var Dm = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Xi = {};
for (let e in Dm) Xi[e] = { isEnabled: (t) => Dm[e].some((n) => !!t[n]) };
function $C(e) {
  for (let t in e) Xi[t] = { ...Xi[t], ...e[t] };
}
var ff = Symbol.for("motionComponentSymbol");
function rg({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && $C(e);
  function o(a, l) {
    let c,
      u = { ...D(Jn), ...a, layoutId: zC(a) },
      { isStatic: f } = u,
      d = BC(a),
      m = r(a, f);
    if (!f && Za) {
      NC(u, e);
      let y = HC(u);
      (c = y.MeasureLayout),
        (d.visualElement = MC(i, m, u, t, y.ProjectionNode));
    }
    return se(ls.Provider, {
      value: d,
      children: [
        c && d.visualElement
          ? C(c, { visualElement: d.visualElement, ...u })
          : null,
        n(i, a, AC(m, d.visualElement, l), m, f, d.visualElement),
      ],
    });
  }
  let s = je(o);
  return (s[ff] = i), s;
}
function zC({ layoutId: e }) {
  let t = D(os).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function NC(e, t) {
  let n = D(Jv).strict;
}
function HC(e) {
  let { drag: t, layout: n } = Xi;
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout:
      t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
var Wa = {};
function df(e) {
  Object.assign(Wa, e);
}
var Ce = (e) => !!(e && e.getVelocity),
  cs = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  di = new Set(cs),
  jC = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  WC = cs.length;
function ig(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let s = 0; s < WC; s++) {
    let a = cs[s];
    if (e[a] !== void 0) {
      let l = jC[a] || a;
      o += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
var er = (e, t, n) => (n > t ? t : n < e ? e : n),
  Jo = (e) => Math.round(e * 1e5) / 1e5,
  hf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  UC =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  XC =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function us(e) {
  return typeof e == "string";
}
var fs = (e) => ({
    test: (t) => us(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  br = fs("deg"),
  Fn = fs("%"),
  U = fs("px"),
  YC = fs("vh"),
  GC = fs("vw"),
  Am = {
    ...Fn,
    parse: (e) => Fn.parse(e) / 100,
    transform: (e) => Fn.transform(e * 100),
  },
  KC = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
  ]);
function Yi(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    KC.has(e)
  );
}
var og = (e) => !Yi(e);
function sg(e) {
  e && (og = (t) => (t.startsWith("on") ? !Yi(t) : e(t)));
}
try {
  sg(_C().default);
} catch {}
function ag(e, t, n) {
  let r = {};
  for (let i in e)
    (i === "values" && typeof e.values == "object") ||
      ((og(i) ||
        (n === !0 && Yi(i)) ||
        (!t && !Yi(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
var $u = (e) => Array.isArray(e),
  qC = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  QC = (e) => ($u(e) ? e[e.length - 1] || 0 : e);
function ut(e) {
  let t = Ce(e) ? e.get() : e;
  return qC(t) ? t.toValue() : t;
}
function Vm(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((n, r) => {
      (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
    }),
    t
  );
}
function pf(e, t, n, r) {
  if (typeof t == "function") {
    let [i, o] = Vm(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    let [i, o] = Vm(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function rr(e) {
  let t = A(null);
  return t.current === null && (t.current = e()), t.current;
}
function ZC(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  let s = { latestValues: JC(r, i, o, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
var il = (e) => (t, n) => {
  let r = D(ls),
    i = D(qi),
    o = () => ZC(e, t, r, i);
  return n ? o() : rr(o);
};
function JC(e, t, n, r) {
  let i = {},
    o = r(e, {});
  for (let d in o) i[d] = ut(o[d]);
  let { initial: s, animate: a } = e,
    l = rl(e),
    c = ng(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || s === !1;
  let f = u ? a : s;
  return (
    f &&
      typeof f != "boolean" &&
      !nl(f) &&
      (Array.isArray(f) ? f : [f]).forEach((m) => {
        let y = pf(e, m);
        if (!y) return;
        let { transitionEnd: g, transition: x, ...p } = y;
        for (let h in p) {
          let v = p[h];
          if (Array.isArray(v)) {
            let S = u ? v.length - 1 : 0;
            v = v[S];
          }
          v !== null && (i[h] = v);
        }
        for (let h in g) i[h] = g[h];
      }),
    i
  );
}
var {
    schedule: Y,
    cancel: _t,
    state: Me,
    steps: $a,
  } = eg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : rt, !0),
  lg = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function ol(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
var cg = (e) => (t) => lg(t) && e(t, ol(t));
function Zn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Ln(e, t, n, r) {
  return Zn(e, t, cg(n), r);
}
var eT = (e, t) => (n) => t(e(n)),
  Mn = (...e) => e.reduce(eT);
function ug(e) {
  let t = null;
  return () => {
    let n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
var Bm = ug("dragHorizontal"),
  $m = ug("dragVertical");
function fg(e) {
  let t = !1;
  if (e === "y") t = $m();
  else if (e === "x") t = Bm();
  else {
    let n = Bm(),
      r = $m();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function mf() {
  let e = fg(!0);
  return e ? (e(), !1) : !0;
}
var Zi = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  es = { ...Zi, transform: (e) => er(0, 1, e) },
  Va = { ...Zi, default: 1 },
  vf = (e, t) => (n) =>
    !!(
      (us(n) && XC.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  dg = (e, t, n) => (r) => {
    if (!us(r)) return r;
    let [i, o, s, a] = r.match(hf);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  tT = (e) => er(0, 255, e),
  Eu = { ...Zi, transform: (e) => Math.round(tT(e)) },
  li = {
    test: vf("rgb", "red"),
    parse: dg("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Eu.transform(e) +
      ", " +
      Eu.transform(t) +
      ", " +
      Eu.transform(n) +
      ", " +
      Jo(es.transform(r)) +
      ")",
  };
function nT(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var zu = { test: vf("#"), parse: nT, transform: li.transform },
  ji = {
    test: vf("hsl", "hue"),
    parse: dg("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Fn.transform(Jo(t)) +
      ", " +
      Fn.transform(Jo(n)) +
      ", " +
      Jo(es.transform(r)) +
      ")",
  },
  nt = {
    test: (e) => li.test(e) || zu.test(e) || ji.test(e),
    parse: (e) =>
      li.test(e) ? li.parse(e) : ji.test(e) ? ji.parse(e) : zu.parse(e),
    transform: (e) =>
      us(e) ? e : e.hasOwnProperty("red") ? li.transform(e) : ji.transform(e),
  };
function rT(e) {
  var t, n;
  return (
    isNaN(e) &&
    us(e) &&
    (((t = e.match(hf)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(UC)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
var hg = "number",
  pg = "color",
  iT = "var",
  oT = "var(",
  zm = "${}",
  sT =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function as(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    o = 0,
    a = t
      .replace(
        sT,
        (l) => (
          nt.test(l)
            ? (r.color.push(o), i.push(pg), n.push(nt.parse(l)))
            : l.startsWith(oT)
            ? (r.var.push(o), i.push(iT), n.push(l))
            : (r.number.push(o), i.push(hg), n.push(parseFloat(l))),
          ++o,
          zm
        )
      )
      .split(zm);
  return { values: n, split: a, indexes: r, types: i };
}
function mg(e) {
  return as(e).values;
}
function vg(e) {
  let { split: t, types: n } = as(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        let a = n[s];
        a === hg
          ? (o += Jo(i[s]))
          : a === pg
          ? (o += nt.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
var aT = (e) => (typeof e == "number" ? 0 : e);
function lT(e) {
  let t = mg(e);
  return vg(e)(t.map(aT));
}
var tr = { test: rT, parse: mg, createTransformer: vg, getAnimatableNone: lT },
  On = (e) => e * 1e3,
  Dn = (e) => e / 1e3;
function gf(e, t) {
  return t ? e * (1e3 / t) : 0;
}
var cT = 5;
function gg(e, t, n) {
  let r = Math.max(t - cT, 0);
  return gf(n - e(r), t - r);
}
var Ru = 0.001,
  uT = 0.01,
  Nm = 10,
  fT = 0.05,
  dT = 1;
function hT({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  Qi(e <= On(Nm), "Spring duration must be 10 seconds or less");
  let s = 1 - t;
  (s = er(fT, dT, s)),
    (e = er(uT, Nm, Dn(e))),
    s < 1
      ? ((i = (c) => {
          let u = c * s,
            f = u * e,
            d = u - n,
            m = Nu(c, s),
            y = Math.exp(-f);
          return Ru - (d / m) * y;
        }),
        (o = (c) => {
          let f = c * s * e,
            d = f * n + n,
            m = Math.pow(s, 2) * Math.pow(c, 2) * e,
            y = Math.exp(-f),
            g = Nu(Math.pow(c, 2), s);
          return ((-i(c) + Ru > 0 ? -1 : 1) * ((d - m) * y)) / g;
        }))
      : ((i = (c) => {
          let u = Math.exp(-c * e),
            f = (c - n) * e + 1;
          return -Ru + u * f;
        }),
        (o = (c) => {
          let u = Math.exp(-c * e),
            f = (n - c) * (e * e);
          return u * f;
        }));
  let a = 5 / e,
    l = mT(i, o, a);
  if (((e = On(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    let c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: s * 2 * Math.sqrt(r * c), duration: e };
  }
}
var pT = 12;
function mT(e, t, n) {
  let r = n;
  for (let i = 1; i < pT; i++) r = r - e(r) / t(r);
  return r;
}
function Nu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var vT = ["duration", "bounce"],
  gT = ["stiffness", "damping", "mass"];
function Hm(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function yT(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Hm(e, gT) && Hm(e, vT)) {
    let n = hT(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function ds({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  let i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: c,
      duration: u,
      velocity: f,
      isResolvedFromDuration: d,
    } = yT({ ...r, velocity: -Dn(r.velocity || 0) }),
    m = f || 0,
    y = l / (2 * Math.sqrt(a * c)),
    g = o - i,
    x = Dn(Math.sqrt(a / c)),
    p = Math.abs(g) < 5;
  n || (n = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5);
  let h;
  if (y < 1) {
    let v = Nu(x, y);
    h = (S) => {
      let k = Math.exp(-y * x * S);
      return (
        o - k * (((m + y * x * g) / v) * Math.sin(v * S) + g * Math.cos(v * S))
      );
    };
  } else if (y === 1) h = (v) => o - Math.exp(-x * v) * (g + (m + x * g) * v);
  else {
    let v = x * Math.sqrt(y * y - 1);
    h = (S) => {
      let k = Math.exp(-y * x * S),
        w = Math.min(v * S, 300);
      return (
        o - (k * ((m + y * x * g) * Math.sinh(w) + v * g * Math.cosh(w))) / v
      );
    };
  }
  return {
    calculatedDuration: (d && u) || null,
    next: (v) => {
      let S = h(v);
      if (d) s.done = v >= u;
      else {
        let k = m;
        v !== 0 && (y < 1 ? (k = gg(h, v, S)) : (k = 0));
        let w = Math.abs(k) <= n,
          T = Math.abs(o - S) <= t;
        s.done = w && T;
      }
      return (s.value = s.done ? o : S), s;
    },
  };
}
var yg = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  bT = 1e-7,
  xT = 12;
function ST(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = yg(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > bT && ++a < xT);
  return s;
}
function Ji(e, t, n, r) {
  if (e === t && n === r) return rt;
  let i = (o) => ST(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : yg(i(o), t, r));
}
var bg = Ji(0.42, 0, 1, 1),
  xg = Ji(0, 0, 0.58, 1),
  yf = Ji(0.42, 0, 0.58, 1),
  bf = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  xf = (e) => (t) => 1 - e(1 - t),
  sl = (e) => 1 - Math.sin(Math.acos(e)),
  Sf = xf(sl),
  Sg = bf(sl),
  wf = Ji(0.33, 1.53, 0.69, 0.99),
  al = xf(wf),
  wg = bf(al),
  kg = (e) =>
    (e *= 2) < 1 ? 0.5 * al(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  kr = (e, t, n) => {
    let r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  xe = (e, t, n) => e + (t - e) * n;
function Pu(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function wT({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    let a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Pu(l, a, e + 1 / 3)), (o = Pu(l, a, e)), (s = Pu(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function Ua(e, t) {
  return (n) => (n > 0 ? t : e);
}
var _u = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  kT = [zu, li, ji],
  CT = (e) => kT.find((t) => t.test(e));
function jm(e) {
  let t = CT(e);
  if (
    (Qi(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return t === ji && (n = wT(n)), n;
}
var Wm = (e, t) => {
    let n = jm(e),
      r = jm(t);
    if (!n || !r) return Ua(e, t);
    let i = { ...n };
    return (o) => (
      (i.red = _u(n.red, r.red, o)),
      (i.green = _u(n.green, r.green, o)),
      (i.blue = _u(n.blue, r.blue, o)),
      (i.alpha = xe(n.alpha, r.alpha, o)),
      li.transform(i)
    );
  },
  Cg = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Tg = Cg("--"),
  TT = Cg("var(--"),
  kf = (e) => (TT(e) ? ET.test(e.split("/*")[0].trim()) : !1),
  ET =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Hu = new Set(["none", "hidden"]);
function RT(e, t) {
  return Hu.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function PT(e, t) {
  return (n) => xe(e, t, n);
}
function Cf(e) {
  return typeof e == "number"
    ? PT
    : typeof e == "string"
    ? kf(e)
      ? Ua
      : nt.test(e)
      ? Wm
      : FT
    : Array.isArray(e)
    ? Eg
    : typeof e == "object"
    ? nt.test(e)
      ? Wm
      : _T
    : Ua;
}
function Eg(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((o, s) => Cf(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function _T(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Cf(e[i])(e[i], t[i]));
  return (i) => {
    for (let o in r) n[o] = r[o](i);
    return n;
  };
}
function IT(e, t) {
  var n;
  let r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    let s = t.types[o],
      a = e.indexes[s][i[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[o] = l), i[s]++;
  }
  return r;
}
var FT = (e, t) => {
  let n = tr.createTransformer(t),
    r = as(e),
    i = as(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Hu.has(e) && !i.values.length) || (Hu.has(t) && !r.values.length)
      ? RT(e, t)
      : Mn(Eg(IT(r, i), i.values), n)
    : (Qi(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
      ),
      Ua(e, t));
};
function Tf(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? xe(e, t, n)
    : Cf(e)(e, t);
}
function LT(e, t, n) {
  let r = [],
    i = n || Tf,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      let l = Array.isArray(t) ? t[s] || rt : t;
      a = Mn(l, a);
    }
    r.push(a);
  }
  return r;
}
function eo(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let o = e.length;
  if (
    (Wt(o === t.length, "Both input and output ranges must be the same length"),
    o === 1)
  )
    return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = LT(t, r, i),
    a = s.length,
    l = (c) => {
      let u = 0;
      if (a > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++);
      let f = kr(e[u], e[u + 1], c);
      return s[u](f);
    };
  return n ? (c) => l(er(e[0], e[o - 1], c)) : l;
}
var MT = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Um = (e) => e === Zi || e === U,
  Xm = (e, t) => parseFloat(e.split(", ")[t]),
  Ym =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      let i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Xm(i[1], t);
      {
        let o = r.match(/^matrix\((.+)\)$/u);
        return o ? Xm(o[1], e) : 0;
      }
    },
  OT = new Set(["x", "y", "z"]),
  DT = cs.filter((e) => !OT.has(e));
function AT(e) {
  let t = [];
  return (
    DT.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
var Gi = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Ym(4, 13),
  y: Ym(5, 14),
};
Gi.translateX = Gi.x;
Gi.translateY = Gi.y;
var ci = new Set(),
  ju = !1,
  Wu = !1;
function Rg() {
  if (Wu) {
    let e = Array.from(ci).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      let i = AT(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        let i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && O.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Wu = !1), (ju = !1), ci.forEach((e) => e.complete()), ci.clear();
}
function Pg() {
  ci.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Wu = !0);
  });
}
function VT() {
  Pg(), Rg();
}
var Ef = class {
  constructor(e, t, n, r, i, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = t),
      (this.name = n),
      (this.motionValue = r),
      (this.element = i),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (ci.add(this), ju || ((ju = !0), Y.read(Pg), Y.resolveKeyframes(Rg)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
    for (let i = 0; i < e.length; i++)
      if (e[i] === null)
        if (i === 0) {
          let o = r?.get(),
            s = e[e.length - 1];
          if (o !== void 0) e[0] = o;
          else if (n && t) {
            let a = n.readValue(t, s);
            a != null && (e[0] = a);
          }
          e[0] === void 0 && (e[0] = s), r && o === void 0 && r.set(e[0]);
        } else e[i] = e[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      ci.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), ci.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
};
function Gm({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  let f = e[0],
    d = { done: !1, value: f },
    m = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
    y = (E) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - E) < Math.abs(l - E)
        ? a
        : l,
    g = n * t,
    x = f + g,
    p = s === void 0 ? x : s(x);
  p !== x && (g = p - f);
  let h = (E) => -g * Math.exp(-E / r),
    v = (E) => p + h(E),
    S = (E) => {
      let F = h(E),
        I = v(E);
      (d.done = Math.abs(F) <= c), (d.value = d.done ? p : I);
    },
    k,
    w,
    T = (E) => {
      m(d.value) &&
        ((k = E),
        (w = ds({
          keyframes: [d.value, y(d.value)],
          velocity: gg(v, E, d.value),
          damping: i,
          stiffness: o,
          restDelta: c,
          restSpeed: u,
        })));
    };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (E) => {
        let F = !1;
        return (
          !w && k === void 0 && ((F = !0), S(E), T(E)),
          k !== void 0 && E >= k ? w.next(E - k) : (!F && S(E), d)
        );
      },
    }
  );
}
var _g = (e) => Array.isArray(e) && typeof e[0] != "number",
  Km = {
    linear: rt,
    easeIn: bg,
    easeInOut: yf,
    easeOut: xg,
    circIn: sl,
    circInOut: Sg,
    circOut: Sf,
    backIn: al,
    backInOut: wg,
    backOut: wf,
    anticipate: kg,
  },
  qm = (e) => {
    if (Array.isArray(e)) {
      Wt(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values."
      );
      let [t, n, r, i] = e;
      return Ji(t, n, r, i);
    } else if (typeof e == "string")
      return Wt(Km[e] !== void 0, `Invalid easing type '${e}'`), Km[e];
    return e;
  };
function Ig(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = kr(0, t, r);
    e.push(xe(n, 1, i));
  }
}
function Rf(e) {
  let t = [0];
  return Ig(t, e.length - 1), t;
}
function BT(e, t) {
  return e.map((n) => n * t);
}
function $T(e, t) {
  return e.map(() => t || yf).splice(0, e.length - 1);
}
function Xa({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  let i = _g(r) ? r.map(qm) : qm(r),
    o = { done: !1, value: t[0] },
    s = BT(n && n.length === t.length ? n : Rf(t), e),
    a = eo(s, t, { ease: Array.isArray(i) ? i : $T(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
var Ya = { current: !1 },
  Qm = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (tr.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function zT(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function NT(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  let o = e[e.length - 1],
    s = Qm(i, t),
    a = Qm(o, t);
  return (
    Qi(
      s === a,
      `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`
    ),
    !s || !a ? !1 : zT(e) || (n === "spring" && r)
  );
}
var HT = (e) => e !== null;
function ll(e, { repeat: t, repeatType: n = "loop" }, r) {
  let i = e.filter(HT),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
var Fg = class {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: n = "keyframes",
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: o = "loop",
      ...s
    }) {
      (this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.options = {
          autoplay: e,
          delay: t,
          type: n,
          repeat: r,
          repeatDelay: i,
          repeatType: o,
          ...s,
        }),
        this.updateFinishedPromise();
    }
    get resolved() {
      return (
        !this._resolved && !this.hasAttemptedResolve && VT(), this._resolved
      );
    }
    onKeyframesResolved(e, t) {
      this.hasAttemptedResolve = !0;
      let {
        name: n,
        type: r,
        velocity: i,
        delay: o,
        onComplete: s,
        onUpdate: a,
        isGenerator: l,
      } = this.options;
      if (!l && !NT(e, n, r, i))
        if (Ya.current || !o) {
          a?.(ll(e, this.options, t)), s?.(), this.resolveFinishedPromise();
          return;
        } else this.options.duration = 0;
      let c = this.initPlayback(e, t);
      c !== !1 &&
        ((this._resolved = { keyframes: e, finalKeyframe: t, ...c }),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(e, t) {
      return this.currentFinishedPromise.then(e, t);
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((e) => {
        this.resolveFinishedPromise = e;
      });
    }
  },
  Uu = 2e4;
function Lg(e) {
  let t = 0,
    n = 50,
    r = e.next(t);
  for (; !r.done && t < Uu; ) (t += n), (r = e.next(t));
  return t >= Uu ? 1 / 0 : t;
}
var za;
function jT() {
  za = void 0;
}
var wr = {
    now: () => (
      za === void 0 &&
        wr.set(
          Me.isProcessing || el.useManualTiming
            ? Me.timestamp
            : performance.now()
        ),
      za
    ),
    set: (e) => {
      (za = e), queueMicrotask(jT);
    },
  },
  WT = (e) => {
    let t = ({ timestamp: n }) => e(n);
    return {
      start: () => Y.update(t, !0),
      stop: () => _t(t),
      now: () => (Me.isProcessing ? Me.timestamp : wr.now()),
    };
  },
  UT = { decay: Gm, inertia: Gm, tween: Xa, keyframes: Xa, spring: ds },
  XT = (e) => e / 100,
  cl = class extends Fg {
    constructor({ KeyframeResolver: e = Ef, ...t }) {
      super(t),
        (this.holdTime = null),
        (this.startTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = "running"),
        (this.state = "idle"),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === "idle")
          )
            return;
          this.teardown();
          let { onStop: s } = this.options;
          s && s();
        });
      let { name: n, motionValue: r, keyframes: i } = this.options,
        o = (s, a) => this.onKeyframesResolved(s, a);
      n && r && r.owner
        ? (this.resolver = r.owner.resolveKeyframes(i, o, n, r))
        : (this.resolver = new e(i, o, n, r)),
        this.resolver.scheduleResolve();
    }
    initPlayback(e) {
      let {
          type: t = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: o = 0,
        } = this.options,
        s = UT[t] || Xa,
        a,
        l;
      s !== Xa &&
        typeof e[0] != "number" &&
        ((a = Mn(XT, Tf(e[0], e[1]))), (e = [0, 100]));
      let c = s({ ...this.options, keyframes: e });
      i === "mirror" &&
        (l = s({ ...this.options, keyframes: [...e].reverse(), velocity: -o })),
        c.calculatedDuration === null && (c.calculatedDuration = Lg(c));
      let { calculatedDuration: u } = c,
        f = u + r,
        d = f * (n + 1) - r;
      return {
        generator: c,
        mirroredGenerator: l,
        mapPercentToKeyframes: a,
        calculatedDuration: u,
        resolvedDuration: f,
        totalDuration: d,
      };
    }
    onPostResolved() {
      let { autoplay: e = !0 } = this.options;
      this.play(),
        this.pendingPlayState === "paused" || !e
          ? this.pause()
          : (this.state = this.pendingPlayState);
    }
    tick(e, t = !1) {
      let { resolved: n } = this;
      if (!n) {
        let { keyframes: T } = this.options;
        return { done: !0, value: T[T.length - 1] };
      }
      let {
        finalKeyframe: r,
        generator: i,
        mirroredGenerator: o,
        mapPercentToKeyframes: s,
        keyframes: a,
        calculatedDuration: l,
        totalDuration: c,
        resolvedDuration: u,
      } = n;
      if (this.startTime === null) return i.next(0);
      let {
        delay: f,
        repeat: d,
        repeatType: m,
        repeatDelay: y,
        onUpdate: g,
      } = this.options;
      this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - c / this.speed, this.startTime)),
        t
          ? (this.currentTime = e)
          : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(e - this.startTime) * this.speed);
      let x = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
        p = this.speed >= 0 ? x < 0 : x > c;
      (this.currentTime = Math.max(x, 0)),
        this.state === "finished" &&
          this.holdTime === null &&
          (this.currentTime = c);
      let h = this.currentTime,
        v = i;
      if (d) {
        let T = Math.min(this.currentTime, c) / u,
          E = Math.floor(T),
          F = T % 1;
        !F && T >= 1 && (F = 1),
          F === 1 && E--,
          (E = Math.min(E, d + 1)),
          !!(E % 2) &&
            (m === "reverse"
              ? ((F = 1 - F), y && (F -= y / u))
              : m === "mirror" && (v = o)),
          (h = er(0, 1, F) * u);
      }
      let S = p ? { done: !1, value: a[0] } : v.next(h);
      s && (S.value = s(S.value));
      let { done: k } = S;
      !p &&
        l !== null &&
        (k = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
      let w =
        this.holdTime === null &&
        (this.state === "finished" || (this.state === "running" && k));
      return (
        w && r !== void 0 && (S.value = ll(a, this.options, r)),
        g && g(S.value),
        w && this.finish(),
        S
      );
    }
    get duration() {
      let { resolved: e } = this;
      return e ? Dn(e.calculatedDuration) : 0;
    }
    get time() {
      return Dn(this.currentTime);
    }
    set time(e) {
      (e = On(e)),
        (this.currentTime = e),
        this.holdTime !== null || this.speed === 0
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.speed);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      (this.playbackSpeed = e), t && (this.time = Dn(this.currentTime));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      ) {
        this.pendingPlayState = "running";
        return;
      }
      if (this.isStopped) return;
      let { driver: e = WT, onPlay: t } = this.options;
      this.driver || (this.driver = e((r) => this.tick(r))), t && t();
      let n = this.driver.now();
      this.holdTime !== null
        ? (this.startTime = n - this.holdTime)
        : (!this.startTime || this.state === "finished") &&
          (this.startTime = n),
        this.state === "finished" && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = "running"),
        this.driver.start();
    }
    pause() {
      var e;
      if (!this._resolved) {
        this.pendingPlayState = "paused";
        return;
      }
      (this.state = "paused"),
        (this.holdTime =
          (e = this.currentTime) !== null && e !== void 0 ? e : 0);
    }
    complete() {
      this.state !== "running" && this.play(),
        (this.pendingPlayState = this.state = "finished"),
        (this.holdTime = null);
    }
    finish() {
      this.teardown(), (this.state = "finished");
      let { onComplete: e } = this.options;
      e && e();
    }
    cancel() {
      this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise();
    }
    teardown() {
      (this.state = "idle"),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel();
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(e) {
      return (this.startTime = 0), this.tick(e, !0);
    }
  };
function Pf(e) {
  return new cl(e);
}
var Mg = (e) => /^0[^.\s]+$/u.test(e);
function YT(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Mg(e)
    : !0;
}
var Og = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  GT = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function KT(e) {
  let t = GT.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
var qT = 4;
function Dg(e, t, n = 1) {
  Wt(
    n <= qT,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
  );
  let [r, i] = KT(e);
  if (!r) return;
  let o = O.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    let s = o.trim();
    return Og(s) ? parseFloat(s) : s;
  }
  return kf(i) ? Dg(i, t, n + 1) : i;
}
var Ag = (e) => (t) => t.test(e),
  QT = { test: (e) => e === "auto", parse: (e) => e },
  Vg = [Zi, U, Fn, br, GC, YC, QT],
  Zm = (e) => Vg.find(Ag(e)),
  ZT = new Set(["brightness", "contrast", "saturate", "opacity"]);
function JT(e) {
  let [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  let [r] = n.match(hf) || [];
  if (!r) return e;
  let i = n.replace(r, ""),
    o = ZT.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
var eE = /\b([a-z-]*)\(.*?\)/gu,
  Xu = {
    ...tr,
    getAnimatableNone: (e) => {
      let t = e.match(eE);
      return t ? t.map(JT).join(" ") : e;
    },
  },
  Jm = { ...Zi, transform: Math.round },
  Bg = {
    borderWidth: U,
    borderTopWidth: U,
    borderRightWidth: U,
    borderBottomWidth: U,
    borderLeftWidth: U,
    borderRadius: U,
    radius: U,
    borderTopLeftRadius: U,
    borderTopRightRadius: U,
    borderBottomRightRadius: U,
    borderBottomLeftRadius: U,
    width: U,
    maxWidth: U,
    height: U,
    maxHeight: U,
    size: U,
    top: U,
    right: U,
    bottom: U,
    left: U,
    padding: U,
    paddingTop: U,
    paddingRight: U,
    paddingBottom: U,
    paddingLeft: U,
    margin: U,
    marginTop: U,
    marginRight: U,
    marginBottom: U,
    marginLeft: U,
    rotate: br,
    rotateX: br,
    rotateY: br,
    rotateZ: br,
    scale: Va,
    scaleX: Va,
    scaleY: Va,
    scaleZ: Va,
    skew: br,
    skewX: br,
    skewY: br,
    distance: U,
    translateX: U,
    translateY: U,
    translateZ: U,
    x: U,
    y: U,
    z: U,
    perspective: U,
    transformPerspective: U,
    opacity: es,
    originX: Am,
    originY: Am,
    originZ: U,
    zIndex: Jm,
    backgroundPositionX: U,
    backgroundPositionY: U,
    fillOpacity: es,
    strokeOpacity: es,
    numOctaves: Jm,
  },
  tE = {
    ...Bg,
    color: nt,
    backgroundColor: nt,
    outlineColor: nt,
    fill: nt,
    stroke: nt,
    borderColor: nt,
    borderTopColor: nt,
    borderRightColor: nt,
    borderBottomColor: nt,
    borderLeftColor: nt,
    filter: Xu,
    WebkitFilter: Xu,
  },
  _f = (e) => tE[e];
function $g(e, t) {
  let n = _f(e);
  return (
    n !== Xu && (n = tr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
var nE = new Set(["auto", "none", "0"]);
function rE(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    let o = e[r];
    typeof o == "string" && !nE.has(o) && as(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (let o of t) e[o] = $g(n, i);
}
var zg = class extends Ef {
  constructor(e, t, n, r) {
    super(e, t, n, r, r?.owner, !0);
  }
  readKeyframes() {
    let { unresolvedKeyframes: e, element: t, name: n } = this;
    if (!t.current) return;
    super.readKeyframes();
    for (let a = 0; a < e.length; a++) {
      let l = e[a];
      if (typeof l == "string" && ((l = l.trim()), kf(l))) {
        let c = Dg(l, t.current);
        c !== void 0 && (e[a] = c),
          a === e.length - 1 && (this.finalKeyframe = l);
      }
    }
    if ((this.resolveNoneKeyframes(), !MT.has(n) || e.length !== 2)) return;
    let [r, i] = e,
      o = Zm(r),
      s = Zm(i);
    if (o !== s)
      if (Um(o) && Um(s))
        for (let a = 0; a < e.length; a++) {
          let l = e[a];
          typeof l == "string" && (e[a] = parseFloat(l));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    let { unresolvedKeyframes: e, name: t } = this,
      n = [];
    for (let r = 0; r < e.length; r++) YT(e[r]) && n.push(r);
    n.length && rE(e, n, t);
  }
  measureInitialState() {
    let { element: e, unresolvedKeyframes: t, name: n } = this;
    if (!e.current) return;
    n === "height" && (this.suspendedScrollY = O.pageYOffset),
      (this.measuredOrigin = Gi[n](
        e.measureViewportBox(),
        O.getComputedStyle(e.current)
      )),
      (t[0] = this.measuredOrigin);
    let r = t[t.length - 1];
    r !== void 0 && e.getValue(n, r).jump(r, !1);
  }
  measureEndState() {
    var e;
    let { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t.current) return;
    let i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    let o = r.length - 1,
      s = r[o];
    (r[o] = Gi[n](t.measureViewportBox(), O.getComputedStyle(t.current))),
      s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
      !((e = this.removedTransforms) === null || e === void 0) &&
        e.length &&
        this.removedTransforms.forEach(([a, l]) => {
          t.getValue(a).set(l);
        }),
      this.resolveNoneKeyframes();
  }
};
function Ng(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var Hg = (e) => Array.isArray(e) && typeof e[0] == "number";
function jg(e) {
  return !!(
    !e ||
    (typeof e == "string" && e in If) ||
    Hg(e) ||
    (Array.isArray(e) && e.every(jg))
  );
}
var Zo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  If = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Zo([0, 0.65, 0.55, 1]),
    circOut: Zo([0.55, 0, 1, 0.45]),
    backIn: Zo([0.31, 0.01, 0.66, -0.59]),
    backOut: Zo([0.33, 1.53, 0.69, 0.99]),
  };
function iE(e) {
  return Wg(e) || If.easeOut;
}
function Wg(e) {
  if (e) return Hg(e) ? Zo(e) : Array.isArray(e) ? e.map(iE) : If[e];
}
function oE(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  let c = { [t]: n };
  l && (c.offset = l);
  let u = Wg(a);
  return (
    Array.isArray(u) && (c.easing = u),
    e.animate(c, {
      delay: r,
      duration: i,
      easing: Array.isArray(u) ? "linear" : u,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
var sE = Ng(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  aE = new Set(["opacity", "clipPath", "filter", "transform"]),
  Ga = 10,
  lE = 2e4;
function cE(e) {
  return e.type === "spring" || e.name === "backgroundColor" || !jg(e.ease);
}
function uE(e, t) {
  let n = new cl({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 }),
    r = { done: !1, value: e[0] },
    i = [],
    o = 0;
  for (; !r.done && o < lE; ) (r = n.sample(o)), i.push(r.value), (o += Ga);
  return { times: void 0, keyframes: i, duration: o - Ga, ease: "linear" };
}
var Yu = class extends Fg {
  constructor(e) {
    super(e);
    let { name: t, motionValue: n, keyframes: r } = this.options;
    (this.resolver = new zg(r, (i, o) => this.onKeyframesResolved(i, o), t, n)),
      this.resolver.scheduleResolve();
  }
  initPlayback(e, t) {
    var n;
    let {
      duration: r = 300,
      times: i,
      ease: o,
      type: s,
      motionValue: a,
      name: l,
    } = this.options;
    if (!(!((n = a.owner) === null || n === void 0) && n.current)) return !1;
    if (cE(this.options)) {
      let { onComplete: u, onUpdate: f, motionValue: d, ...m } = this.options,
        y = uE(e, m);
      (e = y.keyframes),
        e.length === 1 && (e[1] = e[0]),
        (r = y.duration),
        (i = y.times),
        (o = y.ease),
        (s = "keyframes");
    }
    let c = oE(a.owner.current, l, e, {
      ...this.options,
      duration: r,
      times: i,
      ease: o,
    });
    return (
      (c.startTime = wr.now()),
      this.pendingTimeline
        ? ((c.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            let { onComplete: u } = this.options;
            a.set(ll(e, this.options, t)),
              u && u(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: c, duration: r, times: i, type: s, ease: o, keyframes: e }
    );
  }
  get duration() {
    let { resolved: e } = this;
    if (!e) return 0;
    let { duration: t } = e;
    return Dn(t);
  }
  get time() {
    let { resolved: e } = this;
    if (!e) return 0;
    let { animation: t } = e;
    return Dn(t.currentTime || 0);
  }
  set time(e) {
    let { resolved: t } = this;
    if (!t) return;
    let { animation: n } = t;
    n.currentTime = On(e);
  }
  get speed() {
    let { resolved: e } = this;
    if (!e) return 1;
    let { animation: t } = e;
    return t.playbackRate;
  }
  set speed(e) {
    let { resolved: t } = this;
    if (!t) return;
    let { animation: n } = t;
    n.playbackRate = e;
  }
  get state() {
    let { resolved: e } = this;
    if (!e) return "idle";
    let { animation: t } = e;
    return t.playState;
  }
  attachTimeline(e) {
    if (!this._resolved) this.pendingTimeline = e;
    else {
      let { resolved: t } = this;
      if (!t) return rt;
      let { animation: n } = t;
      (n.timeline = e), (n.onfinish = null);
    }
    return rt;
  }
  play() {
    if (this.isStopped) return;
    let { resolved: e } = this;
    if (!e) return;
    let { animation: t } = e;
    t.playState === "finished" && this.updateFinishedPromise(), t.play();
  }
  pause() {
    let { resolved: e } = this;
    if (!e) return;
    let { animation: t } = e;
    t.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    let { resolved: e } = this;
    if (!e) return;
    let {
      animation: t,
      keyframes: n,
      duration: r,
      type: i,
      ease: o,
      times: s,
    } = e;
    if (!(t.playState === "idle" || t.playState === "finished")) {
      if (this.time) {
        let { motionValue: a, onUpdate: l, onComplete: c, ...u } = this.options,
          f = new cl({
            ...u,
            keyframes: n,
            duration: r,
            type: i,
            ease: o,
            times: s,
            isGenerator: !0,
          }),
          d = On(this.time);
        a.setWithVelocity(f.sample(d - Ga).value, f.sample(d).value, Ga);
      }
      this.cancel();
    }
  }
  complete() {
    let { resolved: e } = this;
    e && e.animation.finish();
  }
  cancel() {
    let { resolved: e } = this;
    e && e.animation.cancel();
  }
  static supports(e) {
    let {
      motionValue: t,
      name: n,
      repeatDelay: r,
      repeatType: i,
      damping: o,
      type: s,
    } = e;
    return (
      sE() &&
      n &&
      aE.has(n) &&
      t &&
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate &&
      !r &&
      i !== "mirror" &&
      o !== 0 &&
      s !== "inertia"
    );
  }
};
function Ff(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ul(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function fE([...e], t, n) {
  let r = t < 0 ? e.length + t : t;
  if (r >= 0 && r < e.length) {
    let i = n < 0 ? e.length + n : n,
      [o] = e.splice(t, 1);
    e.splice(i, 0, o);
  }
  return e;
}
var Lf = class {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return Ff(this.subscriptions, e), () => ul(this.subscriptions, e);
    }
    notify(e, t, n) {
      let r = this.subscriptions.length;
      if (r)
        if (r === 1) this.subscriptions[0](e, t, n);
        else
          for (let i = 0; i < r; i++) {
            let o = this.subscriptions[i];
            o && o(e, t, n);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  },
  ev = 30,
  dE = (e) => !isNaN(parseFloat(e)),
  ts = { current: void 0 },
  fl = class {
    constructor(e, t = {}) {
      (this.version = "11.2.12"),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (n, r = !0) => {
          let i = wr.now();
          this.updatedAt !== i && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(n),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            r &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current);
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner);
    }
    setCurrent(e) {
      (this.current = e),
        (this.updatedAt = wr.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = dE(this.current));
    }
    setPrevFrameValue(e = this.current) {
      (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(e) {
      return this.on("change", e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new Lf());
      let n = this.events[e].add(t);
      return e === "change"
        ? () => {
            n(),
              Y.read(() => {
                this.events.change.getSize() || this.stop();
              });
          }
        : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      (this.passiveEffect = e), (this.stopPassiveEffect = t);
    }
    set(e, t = !0) {
      !t || !this.passiveEffect
        ? this.updateAndNotify(e, t)
        : this.passiveEffect(e, this.updateAndNotify);
    }
    setWithVelocity(e, t, n) {
      this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n);
    }
    jump(e, t = !0) {
      this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
      return ts.current && ts.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = wr.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > ev
      )
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, ev);
      return gf(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          (this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify();
        }).then(() => {
          this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation();
        })
      );
    }
    stop() {
      this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
  };
function Oe(e, t) {
  return new fl(e, t);
}
function dl(e, t, n) {
  let r = e.getProps();
  return pf(r, t, n !== void 0 ? n : r.custom, e);
}
var hE = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  pE = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  mE = { type: "keyframes", duration: 0.8 },
  vE = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  gE = (e, { keyframes: t }) =>
    t.length > 2
      ? mE
      : di.has(e)
      ? e.startsWith("scale")
        ? pE(t[1])
        : hE
      : vE;
function yE({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
function Mf(e, t) {
  return e[t] || e.default || e;
}
function bE(e, t) {
  let n,
    r = () => {
      let { currentTime: i } = t,
        s = (i === null ? 0 : i.value) / 100;
      n !== s && e(s), (n = s);
    };
  return Y.update(r, !0), () => _t(r);
}
var xE = Ng(() => O.ScrollTimeline !== void 0),
  Of = class {
    constructor(e) {
      (this.stop = () => this.runAll("stop")),
        (this.animations = e.filter(Boolean));
    }
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t);
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++)
        this.animations[n][e] = t;
    }
    attachTimeline(e) {
      let t = this.animations.map((n) => {
        if (xE() && n.attachTimeline) n.attachTimeline(e);
        else
          return (
            n.pause(),
            bE((r) => {
              n.time = n.duration * r;
            }, e)
          );
      });
      return () => {
        t.forEach((n, r) => {
          n && n(), this.animations[r].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(e) {
      this.setAll("time", e);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(e) {
      this.setAll("speed", e);
    }
    get duration() {
      let e = 0;
      for (let t = 0; t < this.animations.length; t++)
        e = Math.max(e, this.animations[t].duration);
      return e;
    }
    runAll(e) {
      this.animations.forEach((t) => t[e]());
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  },
  Df =
    (e, t, n, r = {}, i, o) =>
    (s) => {
      let a = Mf(r, e) || {},
        l = a.delay || r.delay || 0,
        { elapsed: c = 0 } = r;
      c = c - On(l);
      let u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: (d) => {
          t.set(d), a.onUpdate && a.onUpdate(d);
        },
        onComplete: () => {
          s(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: o ? void 0 : i,
      };
      yE(a) || (u = { ...u, ...gE(e, u) }),
        u.duration && (u.duration = On(u.duration)),
        u.repeatDelay && (u.repeatDelay = On(u.repeatDelay)),
        u.from !== void 0 && (u.keyframes[0] = u.from);
      let f = !1;
      if (
        ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
          ((u.duration = 0), u.delay === 0 && (f = !0)),
        (Ya.current || el.skipAnimations) &&
          ((f = !0), (u.duration = 0), (u.delay = 0)),
        f && !o && t.get() !== void 0)
      ) {
        let d = ll(u.keyframes, a);
        if (d !== void 0)
          return (
            Y.update(() => {
              u.onUpdate(d), u.onComplete();
            }),
            new Of([])
          );
      }
      return !o && Yu.supports(u) ? new Yu(u) : new cl(u);
    };
function Ka(e) {
  return !!(Ce(e) && e.add);
}
function SE(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Oe(n));
}
function Af(e, t) {
  let n = dl(e, t),
    { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (let s in o) {
    let a = QC(o[s]);
    SE(e, s, a);
  }
}
function Ug(e) {
  return e.getProps()[Ja];
}
function wE({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Vf(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t,
    c = e.getValue("willChange");
  r && (s = r);
  let u = [],
    f = i && e.animationState && e.animationState.getState()[i];
  for (let d in l) {
    let m = e.getValue(
        d,
        (o = e.latestValues[d]) !== null && o !== void 0 ? o : null
      ),
      y = l[d];
    if (y === void 0 || (f && wE(f, d))) continue;
    let g = { delay: n, elapsed: 0, ...Mf(s || {}, d) },
      x = !1;
    if (O.HandoffAppearAnimations) {
      let h = Ug(e);
      if (h) {
        let v = O.HandoffAppearAnimations(h, d, m, Y);
        v !== null && ((g.elapsed = v), (x = !0));
      }
    }
    m.start(
      Df(d, m, y, e.shouldReduceMotion && di.has(d) ? { type: !1 } : g, e, x)
    );
    let p = m.animation;
    p && (Ka(c) && (c.add(d), p.then(() => c.remove(d))), u.push(p));
  }
  return (
    a &&
      Promise.all(u).then(() => {
        Y.update(() => {
          a && Af(e, a);
        });
      }),
    u
  );
}
function Gu(e, t, n = {}) {
  var r;
  let i = dl(
      e,
      t,
      n.type === "exit"
        ? (r = e.presenceContext) === null || r === void 0
          ? void 0
          : r.custom
        : void 0
    ),
    { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  let s = i ? () => Promise.all(Vf(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            let {
              delayChildren: u = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = o;
            return kE(e, t, u + c, f, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    let [c, u] = l === "beforeChildren" ? [s, a] : [a, s];
    return c().then(() => u());
  } else return Promise.all([s(), a(n.delay)]);
}
function kE(e, t, n = 0, r = 0, i = 1, o) {
  let s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(CE)
      .forEach((c, u) => {
        c.notify("AnimationStart", t),
          s.push(
            Gu(c, t, { ...o, delay: n + l(u) }).then(() =>
              c.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function CE(e, t) {
  return e.sortNodePosition(t);
}
function Bf(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((o) => Gu(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Gu(e, t, n);
  else {
    let i = typeof t == "function" ? dl(e, t, n.custom) : t;
    r = Promise.all(Vf(e, i, n));
  }
  return r.then(() => {
    Y.postRender(() => {
      e.notify("AnimationComplete", t);
    });
  });
}
function Xg(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
var TE = [...cf].reverse(),
  EE = cf.length;
function RE(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Bf(e, n, r)));
}
function PE(e) {
  let t = RE(e),
    n = tv(),
    r = !0,
    i = (l) => (c, u) => {
      var f;
      let d = dl(
        e,
        u,
        l === "exit"
          ? (f = e.presenceContext) === null || f === void 0
            ? void 0
            : f.custom
          : void 0
      );
      if (d) {
        let { transition: m, transitionEnd: y, ...g } = d;
        c = { ...c, ...g, ...y };
      }
      return c;
    };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    let c = e.getProps(),
      u = e.getVariantContext(!0) || {},
      f = [],
      d = new Set(),
      m = {},
      y = 1 / 0;
    for (let x = 0; x < EE; x++) {
      let p = TE[x],
        h = n[p],
        v = c[p] !== void 0 ? c[p] : u[p],
        S = ss(v),
        k = p === l ? h.isActive : null;
      k === !1 && (y = x);
      let w = v === u[p] && v !== c[p] && S;
      if (
        (w && r && e.manuallyAnimateOnMount && (w = !1),
        (h.protectedKeys = { ...m }),
        (!h.isActive && k === null) ||
          (!v && !h.prevProp) ||
          nl(v) ||
          typeof v == "boolean")
      )
        continue;
      let E =
          _E(h.prevProp, v) ||
          (p === l && h.isActive && !w && S) ||
          (x > y && S),
        F = !1,
        I = Array.isArray(v) ? v : [v],
        z = I.reduce(i(p), {});
      k === !1 && (z = {});
      let { prevResolvedValues: $ = {} } = h,
        re = { ...$, ...z },
        J = (V) => {
          (E = !0),
            d.has(V) && ((F = !0), d.delete(V)),
            (h.needsAnimating[V] = !0);
          let X = e.getValue(V);
          X && (X.liveStyle = !1);
        };
      for (let V in re) {
        let X = z[V],
          Z = $[V];
        if (m.hasOwnProperty(V)) continue;
        let ee = !1;
        $u(X) && $u(Z) ? (ee = !Xg(X, Z)) : (ee = X !== Z),
          ee
            ? X != null
              ? J(V)
              : d.add(V)
            : X !== void 0 && d.has(V)
            ? J(V)
            : (h.protectedKeys[V] = !0);
      }
      (h.prevProp = v),
        (h.prevResolvedValues = z),
        h.isActive && (m = { ...m, ...z }),
        r && e.blockInitialAnimation && (E = !1),
        E &&
          (!w || F) &&
          f.push(...I.map((V) => ({ animation: V, options: { type: p } })));
    }
    if (d.size) {
      let x = {};
      d.forEach((p) => {
        let h = e.getBaseTarget(p),
          v = e.getValue(p);
        v && (v.liveStyle = !0), (x[p] = h ?? null);
      }),
        f.push({ animation: x });
    }
    let g = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (g = !1),
      (r = !1),
      g ? t(f) : Promise.resolve()
    );
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c) return Promise.resolve();
    (u = e.variantChildren) === null ||
      u === void 0 ||
      u.forEach((d) => {
        var m;
        return (m = d.animationState) === null || m === void 0
          ? void 0
          : m.setActive(l, c);
      }),
      (n[l].isActive = c);
    let f = s(l);
    for (let d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      (n = tv()), (r = !0);
    },
  };
}
function _E(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Xg(t, e) : !1;
}
function ii(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function tv() {
  return {
    animate: ii(!0),
    whileInView: ii(),
    whileHover: ii(),
    whileTap: ii(),
    whileDrag: ii(),
    whileFocus: ii(),
    exit: ii(),
  };
}
var Tr = class {
    constructor(e) {
      (this.isMounted = !1), (this.node = e);
    }
    update() {}
  },
  IE = class extends Tr {
    constructor(e) {
      super(e), e.animationState || (e.animationState = PE(e));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      nl(e) && (this.unmountControls = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var e;
      this.node.animationState.reset(),
        (e = this.unmountControls) === null || e === void 0 || e.call(this);
    }
  },
  FE = 0,
  LE = class extends Tr {
    constructor() {
      super(...arguments), (this.id = FE++);
    }
    update() {
      if (!this.node.presenceContext) return;
      let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
        { isPresent: n } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || e === n) return;
      let r = this.node.animationState.setActive("exit", !e);
      t && !e && r.then(() => t(this.id));
    }
    mount() {
      let { register: e } = this.node.presenceContext || {};
      e && (this.unmount = e(this.id));
    }
    unmount() {}
  },
  $f = { animation: { Feature: IE }, exit: { Feature: LE } },
  Ku = (e, t) => Math.abs(e - t);
function Yg(e, t) {
  let n = Ku(e.x, t.x),
    r = Ku(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
function It(e) {
  return e.max - e.min;
}
function qu(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function nv(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = xe(t.min, t.max, e.origin)),
    (e.scale = It(n) / It(t)),
    (qu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = xe(n.min, n.max, e.origin) - e.originPoint),
    (qu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function ns(e, t, n, r) {
  nv(e.x, t.x, n.x, r ? r.originX : void 0),
    nv(e.y, t.y, n.y, r ? r.originY : void 0);
}
function rv(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + It(t));
}
function ME(e, t, n) {
  rv(e.x, t.x, n.x), rv(e.y, t.y, n.y);
}
function iv(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + It(t));
}
function rs(e, t, n) {
  iv(e.x, t.x, n.x), iv(e.y, t.y, n.y);
}
var ov = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Wi = () => ({ x: ov(), y: ov() }),
  sv = () => ({ min: 0, max: 0 }),
  Le = () => ({ x: sv(), y: sv() });
function zf() {
  let e = D(qi);
  if (e === null) return [!0, null];
  let { isPresent: t, onExitComplete: n, register: r } = e,
    i = ri();
  return H(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
var OE = (e, t) => e.depth - t.depth,
  Gg = class {
    constructor() {
      (this.children = []), (this.isDirty = !1);
    }
    add(e) {
      Ff(this.children, e), (this.isDirty = !0);
    }
    remove(e) {
      ul(this.children, e), (this.isDirty = !0);
    }
    forEach(e) {
      this.isDirty && this.children.sort(OE),
        (this.isDirty = !1),
        this.children.forEach(e);
    }
  };
function Kg(e, t) {
  let n = wr.now(),
    r = ({ timestamp: i }) => {
      let o = i - n;
      o >= t && (_t(r), e(o - t));
    };
  return Y.read(r, !0), () => _t(r);
}
var nr = new WeakMap(),
  qa = { current: null },
  Nf = { current: !1 };
function qg() {
  if (((Nf.current = !0), !!Za))
    if (O.matchMedia) {
      let e = O.matchMedia("(prefers-reduced-motion)"),
        t = () => (qa.current = e.matches);
      e.addListener(t), t();
    } else qa.current = !1;
}
function DE(e, t, n) {
  let { willChange: r } = t;
  for (let i in t) {
    let o = t[i],
      s = n[i];
    if (Ce(o)) e.addValue(i, o), Ka(r) && r.add(i);
    else if (Ce(s)) e.addValue(i, Oe(o, { owner: e })), Ka(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        let a = e.getValue(i);
        a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o);
      } else {
        let a = e.getStaticValue(i);
        e.addValue(i, Oe(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (let i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
var AE = [...Vg, nt, tr],
  VE = (e) => AE.find(Ag(e)),
  av = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  BE = uf.length,
  Qg = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        blockInitialAnimation: i,
        visualState: o,
      },
      s = {}
    ) {
      (this.resolveKeyframes = (f, d, m, y) =>
        new this.KeyframeResolver(f, d, m, y, this)),
        (this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = Ef),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
        }),
        (this.scheduleRender = () => Y.render(this.render, !1, !0));
      let { latestValues: a, renderState: l } = o;
      (this.latestValues = a),
        (this.baseTarget = { ...a }),
        (this.initialValues = t.initial ? { ...a } : {}),
        (this.renderState = l),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.options = s),
        (this.blockInitialAnimation = !!i),
        (this.isControllingVariants = rl(t)),
        (this.isVariantNode = ng(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current));
      let { willChange: c, ...u } = this.scrapeMotionValuesFromProps(
        t,
        {},
        this
      );
      for (let f in u) {
        let d = u[f];
        a[f] !== void 0 && Ce(d) && (d.set(a[f], !1), Ka(c) && c.add(f));
      }
    }
    mount(e) {
      (this.current = e),
        nr.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((t, n) => this.bindToMotionValue(n, t)),
        Nf.current || qg(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === "never"
            ? !1
            : this.reducedMotionConfig === "always"
            ? !0
            : qa.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext);
    }
    unmount() {
      nr.delete(this.current),
        this.projection && this.projection.unmount(),
        _t(this.notifyUpdate),
        _t(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) {
        let t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(e, t) {
      let n = di.has(e),
        r = t.on("change", (o) => {
          (this.latestValues[e] = o),
            this.props.onUpdate && Y.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0);
        }),
        i = t.on("renderRequest", this.scheduleRender);
      this.valueSubscriptions.set(e, () => {
        r(), i(), t.owner && t.stop();
      });
    }
    sortNodePosition(e) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = "animation";
      for (e in Xi) {
        let t = Xi[e];
        if (!t) continue;
        let { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] &&
            r &&
            n(this.props) &&
            (this.features[e] = new r(this)),
          this.features[e])
        ) {
          let i = this.features[e];
          i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.options, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : Le();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      (e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t);
      for (let n = 0; n < av.length; n++) {
        let r = av[n];
        this.propEventSubscriptions[r] &&
          (this.propEventSubscriptions[r](),
          delete this.propEventSubscriptions[r]);
        let i = "on" + r,
          o = e[i];
        o && (this.propEventSubscriptions[r] = this.on(r, o));
      }
      (this.prevMotionValues = DE(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps, this),
        this.prevMotionValues
      )),
        this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
    }
    getVariantContext(e = !1) {
      if (e) return this.parent ? this.parent.getVariantContext() : void 0;
      if (!this.isControllingVariants) {
        let n = this.parent ? this.parent.getVariantContext() || {} : {};
        return (
          this.props.initial !== void 0 && (n.initial = this.props.initial), n
        );
      }
      let t = {};
      for (let n = 0; n < BE; n++) {
        let r = uf[n],
          i = this.props[r];
        (ss(i) || i === !1) && (t[r] = i);
      }
      return t;
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        );
    }
    addValue(e, t) {
      let n = this.values.get(e);
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState);
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = Oe(t === null ? void 0 : t, { owner: this })),
          this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      var n;
      let r =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : (n = this.getBaseTargetFromProps(this.props, e)) !== null &&
            n !== void 0
          ? n
          : this.readValueFromInstance(this.current, e, this.options);
      return (
        r != null &&
          (typeof r == "string" && (Og(r) || Mg(r))
            ? (r = parseFloat(r))
            : !VE(r) && tr.test(t) && (r = $g(e, t)),
          this.setBaseTarget(e, Ce(r) ? r.get() : r)),
        Ce(r) ? r.get() : r
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      var t;
      let { initial: n } = this.props,
        r;
      if (typeof n == "string" || typeof n == "object") {
        let o = pf(
          this.props,
          n,
          (t = this.presenceContext) === null || t === void 0
            ? void 0
            : t.custom
        );
        o && (r = o[e]);
      }
      if (n && r !== void 0) return r;
      let i = this.getBaseTargetFromProps(this.props, e);
      return i !== void 0 && !Ce(i)
        ? i
        : this.initialValues[e] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[e];
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new Lf()), this.events[e].add(t)
      );
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
  };
function Zg(e) {
  function t(r, i = {}) {
    return rg(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  let n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
var $E = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Hf(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!($E.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Jg(e, { layout: t, layoutId: n }) {
  return (
    di.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Wa[e] || e === "opacity"))
  );
}
var zE = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function jf(e, t, n, r) {
  let { style: i, vars: o, transform: s, transformOrigin: a } = e,
    l = !1,
    c = !1,
    u = !0;
  for (let f in t) {
    let d = t[f];
    if (Tg(f)) {
      o[f] = d;
      continue;
    }
    let m = Bg[f],
      y = zE(d, m);
    if (di.has(f)) {
      if (((l = !0), (s[f] = y), !u)) continue;
      d !== (m.default || 0) && (u = !1);
    } else f.startsWith("origin") ? ((c = !0), (a[f] = y)) : (i[f] = y);
  }
  if (
    (t.transform ||
      (l || r
        ? (i.transform = ig(e.transform, n, u, r))
        : i.transform && (i.transform = "none")),
    c)
  ) {
    let { originX: f = "50%", originY: d = "50%", originZ: m = 0 } = a;
    i.transformOrigin = `${f} ${d} ${m}`;
  }
}
var Wf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function ey(e, t, n) {
  for (let r in t) !Ce(t[r]) && !Jg(r, n) && (e[r] = t[r]);
}
function NE({ transformTemplate: e }, t, n) {
  return oe(() => {
    let r = Wf();
    return (
      jf(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function HE(e, t, n) {
  let r = e.style || {},
    i = {};
  return ey(i, r, e), Object.assign(i, NE(e, t, n)), i;
}
function jE(e, t, n) {
  let r = {},
    i = HE(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
function lv(e, t, n) {
  return typeof e == "string" ? e : U.transform(t + n * e);
}
function WE(e, t, n) {
  let r = lv(t, e.x, e.width),
    i = lv(n, e.y, e.height);
  return `${r} ${i}`;
}
var UE = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  XE = { offset: "strokeDashoffset", array: "strokeDasharray" };
function YE(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let o = i ? UE : XE;
  e[o.offset] = U.transform(-r);
  let s = U.transform(t),
    a = U.transform(n);
  e[o.array] = `${s} ${a}`;
}
function Uf(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  u,
  f,
  d
) {
  if ((jf(e, c, u, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  let { attrs: m, style: y, dimensions: g } = e;
  m.transform && (g && (y.transform = m.transform), delete m.transform),
    g &&
      (i !== void 0 || o !== void 0 || y.transform) &&
      (y.transformOrigin = WE(
        g,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (m.x = t),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    s !== void 0 && YE(m, s, a, l, !1);
}
var ty = () => ({ ...Wf(), attrs: {} }),
  Xf = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function GE(e, t, n, r) {
  let i = oe(() => {
    let o = ty();
    return (
      Uf(o, t, { enableHardwareAcceleration: !1 }, Xf(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    let o = {};
    ey(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function KE(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    let l = (Hf(n) ? GE : jE)(r, o, s, n),
      c = ag(r, typeof n == "string", e),
      u = n !== ni ? { ...c, ...l, ref: i } : {},
      { children: f } = r,
      d = oe(() => (Ce(f) ? f.get() : f), [f]);
    return Aa(n, { ...u, children: d });
  };
}
function ny(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (let o in n) e.style.setProperty(o, n[o]);
}
var ry = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function iy(e, t, n, r) {
  ny(e, t, void 0, r);
  for (let i in t.attrs) e.setAttribute(ry.has(i) ? i : af(i), t.attrs[i]);
}
function Yf(e, t, n) {
  var r;
  let { style: i } = e,
    o = {};
  for (let s in i)
    (Ce(i[s]) ||
      (t.style && Ce(t.style[s])) ||
      Jg(s, e) ||
      ((r = n?.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !==
        void 0) &&
      (o[s] = i[s]);
  return o;
}
function oy(e, t, n) {
  let r = Yf(e, t, n);
  for (let i in e)
    if (Ce(e[i]) || Ce(t[i])) {
      let o =
        cs.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
var qE = {
    useVisualState: il({
      scrapeMotionValuesFromProps: oy,
      createRenderState: ty,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        Y.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          Y.render(() => {
            Uf(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Xf(t.tagName),
              e.transformTemplate
            ),
              iy(t, n);
          });
      },
    }),
  },
  QE = {
    useVisualState: il({
      scrapeMotionValuesFromProps: Yf,
      createRenderState: Wf,
    }),
  };
function sy(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Hf(e) ? qE : QE),
    preloadedFeatures: n,
    useRender: KE(t),
    createVisualElement: r,
    Component: e,
  };
}
function cv(e, t) {
  let n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (o, s) => {
      if (o.pointerType === "touch" || mf()) return;
      let a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      let l = a[r];
      l && Y.postRender(() => l(o, s));
    };
  return Ln(e.current, n, i, { passive: !e.getProps()[r] });
}
var ZE = class extends Tr {
    mount() {
      this.unmount = Mn(cv(this.node, !0), cv(this.node, !1));
    }
    unmount() {}
  },
  JE = class extends Tr {
    constructor() {
      super(...arguments), (this.isActive = !1);
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(":focus-visible");
      } catch {
        e = !0;
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = Mn(
        Zn(this.node.current, "focus", () => this.onFocus()),
        Zn(this.node.current, "blur", () => this.onBlur())
      );
    }
    unmount() {}
  },
  ay = (e, t) => (t ? (e === t ? !0 : ay(e, t.parentElement)) : !1);
function Iu(e, t) {
  if (!t) return;
  let n = new PointerEvent("pointer" + e);
  t(n, ol(n));
}
var eR = class extends Tr {
    constructor() {
      super(...arguments),
        (this.removeStartListeners = rt),
        (this.removeEndListeners = rt),
        (this.removeAccessibleListeners = rt),
        (this.startPointerPress = (e, t) => {
          if (this.isPressing) return;
          this.removeEndListeners();
          let n = this.node.getProps(),
            i = Ln(
              O,
              "pointerup",
              (s, a) => {
                if (!this.checkPressEnd()) return;
                let {
                    onTap: l,
                    onTapCancel: c,
                    globalTapTarget: u,
                  } = this.node.getProps(),
                  f = !u && !ay(this.node.current, s.target) ? c : l;
                f && Y.update(() => f(s, a));
              },
              { passive: !(n.onTap || n.onPointerUp) }
            ),
            o = Ln(O, "pointercancel", (s, a) => this.cancelPress(s, a), {
              passive: !(n.onTapCancel || n.onPointerCancel),
            });
          (this.removeEndListeners = Mn(i, o)), this.startPress(e, t);
        }),
        (this.startAccessiblePress = () => {
          let e = (i) => {
              if (i.key !== "Enter" || this.isPressing) return;
              let o = (s) => {
                s.key !== "Enter" ||
                  !this.checkPressEnd() ||
                  Iu("up", (a, l) => {
                    let { onTap: c } = this.node.getProps();
                    c && Y.postRender(() => c(a, l));
                  });
              };
              this.removeEndListeners(),
                (this.removeEndListeners = Zn(this.node.current, "keyup", o)),
                Iu("down", (s, a) => {
                  this.startPress(s, a);
                });
            },
            t = Zn(this.node.current, "keydown", e),
            n = () => {
              this.isPressing && Iu("cancel", (i, o) => this.cancelPress(i, o));
            },
            r = Zn(this.node.current, "blur", n);
          this.removeAccessibleListeners = Mn(t, r);
        });
    }
    startPress(e, t) {
      this.isPressing = !0;
      let { onTapStart: n, whileTap: r } = this.node.getProps();
      r &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !0),
        n && Y.postRender(() => n(e, t));
    }
    checkPressEnd() {
      return (
        this.removeEndListeners(),
        (this.isPressing = !1),
        this.node.getProps().whileTap &&
          this.node.animationState &&
          this.node.animationState.setActive("whileTap", !1),
        !mf()
      );
    }
    cancelPress(e, t) {
      if (!this.checkPressEnd()) return;
      let { onTapCancel: n } = this.node.getProps();
      n && Y.postRender(() => n(e, t));
    }
    mount() {
      let e = this.node.getProps(),
        t = Ln(
          e.globalTapTarget ? O : this.node.current,
          "pointerdown",
          this.startPointerPress,
          { passive: !(e.onTapStart || e.onPointerStart) }
        ),
        n = Zn(this.node.current, "focus", this.startAccessiblePress);
      this.removeStartListeners = Mn(t, n);
    }
    unmount() {
      this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners();
    }
  },
  Qu = new WeakMap(),
  Fu = new WeakMap(),
  tR = (e) => {
    let t = Qu.get(e.target);
    t && t(e);
  },
  nR = (e) => {
    e.forEach(tR);
  };
function rR({ root: e, ...t }) {
  let n = e || document;
  Fu.has(n) || Fu.set(n, {});
  let r = Fu.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(nR, { root: e, ...t })), r[i];
}
function iR(e, t, n) {
  let r = rR(t);
  return (
    Qu.set(e, n),
    r.observe(e),
    () => {
      Qu.delete(e), r.unobserve(e);
    }
  );
}
var oR = { some: 0, all: 1 },
  sR = class extends Tr {
    constructor() {
      super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
      this.unmount();
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = "some", once: i } = e,
        o = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == "number" ? r : oR[r],
        },
        s = (a) => {
          let { isIntersecting: l } = a;
          if (
            this.isInView === l ||
            ((this.isInView = l), i && !l && this.hasEnteredView)
          )
            return;
          l && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive("whileInView", l);
          let { onViewportEnter: c, onViewportLeave: u } = this.node.getProps(),
            f = l ? c : u;
          f && f(a);
        };
      return iR(this.node.current, o, s);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      let { props: e, prevProps: t } = this.node;
      ["amount", "margin", "root"].some(aR(e, t)) && this.startObserver();
    }
    unmount() {}
  };
function aR({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var ly = {
    inView: { Feature: sR },
    tap: { Feature: eR },
    focus: { Feature: JE },
    hover: { Feature: ZE },
  },
  cy = class {
    constructor(
      e,
      t,
      { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {}
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = O),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          let u = Mu(this.lastMoveEventInfo, this.history),
            f = this.startEvent !== null,
            d = Yg(u.offset, { x: 0, y: 0 }) >= 3;
          if (!f && !d) return;
          let { point: m } = u,
            { timestamp: y } = Me;
          this.history.push({ ...m, timestamp: y });
          let { onStart: g, onMove: x } = this.handlers;
          f ||
            (g && g(this.lastMoveEvent, u),
            (this.startEvent = this.lastMoveEvent)),
            x && x(this.lastMoveEvent, u);
        }),
        (this.handlePointerMove = (u, f) => {
          (this.lastMoveEvent = u),
            (this.lastMoveEventInfo = Lu(f, this.transformPagePoint)),
            Y.update(this.updatePoint, !0);
        }),
        (this.handlePointerUp = (u, f) => {
          this.end();
          let { onEnd: d, onSessionEnd: m, resumeAnimation: y } = this.handlers;
          if (
            (this.dragSnapToOrigin && y && y(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          let g = Mu(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Lu(f, this.transformPagePoint),
            this.history
          );
          this.startEvent && d && d(u, g), m && m(u, g);
        }),
        !lg(e))
      )
        return;
      (this.dragSnapToOrigin = i),
        (this.handlers = t),
        (this.transformPagePoint = n),
        (this.contextWindow = r || O);
      let o = ol(e),
        s = Lu(o, this.transformPagePoint),
        { point: a } = s,
        { timestamp: l } = Me;
      this.history = [{ ...a, timestamp: l }];
      let { onSessionStart: c } = t;
      c && c(e, Mu(s, this.history)),
        (this.removeListeners = Mn(
          Ln(this.contextWindow, "pointermove", this.handlePointerMove),
          Ln(this.contextWindow, "pointerup", this.handlePointerUp),
          Ln(this.contextWindow, "pointercancel", this.handlePointerUp)
        ));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      this.removeListeners && this.removeListeners(), _t(this.updatePoint);
    }
  };
function Lu(e, t) {
  return t ? { point: t(e.point) } : e;
}
function uv(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Mu({ point: e }, t) {
  return {
    point: e,
    delta: uv(e, uy(t)),
    offset: uv(e, lR(t)),
    velocity: cR(t, 0.1),
  };
}
function lR(e) {
  return e[0];
}
function uy(e) {
  return e[e.length - 1];
}
function cR(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = uy(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > On(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  let o = Dn(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  let s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function uR(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? xe(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? xe(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function fv(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function fR(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: fv(e.x, n, i), y: fv(e.y, t, r) };
}
function dv(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function dR(e, t) {
  return { x: dv(e.x, t.x), y: dv(e.y, t.y) };
}
function hR(e, t) {
  let n = 0.5,
    r = It(e),
    i = It(t);
  return (
    i > r
      ? (n = kr(t.min, t.max - r, e.min))
      : r > i && (n = kr(e.min, e.max - i, t.min)),
    er(0, 1, n)
  );
}
function pR(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var Zu = 0.35;
function mR(e = Zu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Zu),
    { x: hv(e, "left", "right"), y: hv(e, "top", "bottom") }
  );
}
function hv(e, t, n) {
  return { min: pv(e, t), max: pv(e, n) };
}
function pv(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
function sn(e) {
  return [e("x"), e("y")];
}
function fy({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function vR({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function gR(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ou(e) {
  return e === void 0 || e === 1;
}
function Ju({ scale: e, scaleX: t, scaleY: n }) {
  return !Ou(e) || !Ou(t) || !Ou(n);
}
function oi(e) {
  return (
    Ju(e) ||
    dy(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function dy(e) {
  return mv(e.x) || mv(e.y);
}
function mv(e) {
  return e && e !== "0%";
}
function Qa(e, t, n) {
  let r = e - n,
    i = t * r;
  return n + i;
}
function vv(e, t, n, r, i) {
  return i !== void 0 && (e = Qa(e, i, r)), Qa(e, n, r) + t;
}
function ef(e, t = 0, n = 1, r, i) {
  (e.min = vv(e.min, t, n, r, i)), (e.max = vv(e.max, t, n, r, i));
}
function hy(e, { x: t, y: n }) {
  ef(e.x, t.translate, t.scale, t.originPoint),
    ef(e.y, n.translate, n.scale, n.originPoint);
}
function yR(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    let l = o.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        Ui(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), hy(e, s)),
      r && oi(o.latestValues) && Ui(e, o.latestValues));
  }
  (t.x = gv(t.x)), (t.y = gv(t.y));
}
function gv(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Sr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function yv(e, t, [n, r, i]) {
  let o = t[i] !== void 0 ? t[i] : 0.5,
    s = xe(e.min, e.max, o);
  ef(e, t[n], t[r], s, t.scale);
}
var bR = ["x", "scaleX", "originX"],
  xR = ["y", "scaleY", "originY"];
function Ui(e, t) {
  yv(e.x, t, bR), yv(e.y, t, xR);
}
function py(e, t) {
  return fy(gR(e.getBoundingClientRect(), t));
}
function SR(e, t, n) {
  let r = py(e, n),
    { scroll: i } = t;
  return i && (Sr(r.x, i.offset.x), Sr(r.y, i.offset.y)), r;
}
var my = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  wR = new WeakMap(),
  kR = class {
    constructor(e) {
      (this.openGlobalLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = Le()),
        (this.visualElement = e);
    }
    start(e, { snapToCursor: t = !1 } = {}) {
      let { presenceContext: n } = this.visualElement;
      if (n && n.isPresent === !1) return;
      let r = (c) => {
          let { dragSnapToOrigin: u } = this.getProps();
          u ? this.pauseAnimation() : this.stopAnimation(),
            t && this.snapToCursor(ol(c, "page").point);
        },
        i = (c, u) => {
          let { drag: f, dragPropagation: d, onDragStart: m } = this.getProps();
          if (
            f &&
            !d &&
            (this.openGlobalLock && this.openGlobalLock(),
            (this.openGlobalLock = fg(f)),
            !this.openGlobalLock)
          )
            return;
          (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            sn((g) => {
              let x = this.getAxisMotionValue(g).get() || 0;
              if (Fn.test(x)) {
                let { projection: p } = this.visualElement;
                if (p && p.layout) {
                  let h = p.layout.layoutBox[g];
                  h && (x = It(h) * (parseFloat(x) / 100));
                }
              }
              this.originPoint[g] = x;
            }),
            m && Y.postRender(() => m(c, u));
          let { animationState: y } = this.visualElement;
          y && y.setActive("whileDrag", !0);
        },
        o = (c, u) => {
          let {
            dragPropagation: f,
            dragDirectionLock: d,
            onDirectionLock: m,
            onDrag: y,
          } = this.getProps();
          if (!f && !this.openGlobalLock) return;
          let { offset: g } = u;
          if (d && this.currentDirection === null) {
            (this.currentDirection = CR(g)),
              this.currentDirection !== null && m && m(this.currentDirection);
            return;
          }
          this.updateAxis("x", u.point, g),
            this.updateAxis("y", u.point, g),
            this.visualElement.render(),
            y && y(c, u);
        },
        s = (c, u) => this.stop(c, u),
        a = () =>
          sn((c) => {
            var u;
            return (
              this.getAnimationState(c) === "paused" &&
              ((u = this.getAxisMotionValue(c).animation) === null ||
              u === void 0
                ? void 0
                : u.play())
            );
          }),
        { dragSnapToOrigin: l } = this.getProps();
      this.panSession = new cy(
        e,
        {
          onSessionStart: r,
          onStart: i,
          onMove: o,
          onSessionEnd: s,
          resumeAnimation: a,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: l,
          contextWindow: my(this.visualElement),
        }
      );
    }
    stop(e, t) {
      let n = this.isDragging;
      if ((this.cancel(), !n)) return;
      let { velocity: r } = t;
      this.startAnimation(r);
      let { onDragEnd: i } = this.getProps();
      i && Y.postRender(() => i(e, t));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0);
      let { dragPropagation: n } = this.getProps();
      !n &&
        this.openGlobalLock &&
        (this.openGlobalLock(), (this.openGlobalLock = null)),
        t && t.setActive("whileDrag", !1);
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !Ba(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        o = this.originPoint[e] + n[e];
      this.constraints &&
        this.constraints[e] &&
        (o = uR(o, this.constraints[e], this.elastic[e])),
        i.set(o);
    }
    resolveConstraints() {
      var e;
      let { dragConstraints: t, dragElastic: n } = this.getProps(),
        r =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : (e = this.visualElement.projection) === null || e === void 0
            ? void 0
            : e.layout,
        i = this.constraints;
      t && Hi(t)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : t && r
        ? (this.constraints = fR(r.layoutBox, t))
        : (this.constraints = !1),
        (this.elastic = mR(n)),
        i !== this.constraints &&
          r &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          sn((o) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(o) &&
              (this.constraints[o] = pR(r.layoutBox[o], this.constraints[o]));
          });
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !Hi(e)) return !1;
      let n = e.current;
      Wt(
        n !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
      );
      let { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      let i = SR(n, r.root, this.visualElement.getTransformPagePoint()),
        o = dR(r.layout.layoutBox, i);
      if (t) {
        let s = t(vR(o));
        (this.hasMutatedConstraints = !!s), s && (o = fy(s));
      }
      return o;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: o,
          onDragTransitionEnd: s,
        } = this.getProps(),
        a = this.constraints || {},
        l = sn((c) => {
          if (!Ba(c, t, this.currentDirection)) return;
          let u = (a && a[c]) || {};
          o && (u = { min: 0, max: 0 });
          let f = r ? 200 : 1e6,
            d = r ? 40 : 1e7,
            m = {
              type: "inertia",
              velocity: n ? e[c] : 0,
              bounceStiffness: f,
              bounceDamping: d,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...u,
            };
          return this.startAxisValueAnimation(c, m);
        });
      return Promise.all(l).then(s);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return n.start(Df(e, n, 0, t, this.visualElement));
    }
    stopAnimation() {
      sn((e) => this.getAxisMotionValue(e).stop());
    }
    pauseAnimation() {
      sn((e) => {
        var t;
        return (t = this.getAxisMotionValue(e).animation) === null ||
          t === void 0
          ? void 0
          : t.pause();
      });
    }
    getAnimationState(e) {
      var t;
      return (t = this.getAxisMotionValue(e).animation) === null || t === void 0
        ? void 0
        : t.state;
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`,
        n = this.visualElement.getProps(),
        r = n[t];
      return (
        r ||
        this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
      );
    }
    snapToCursor(e) {
      sn((t) => {
        let { drag: n } = this.getProps();
        if (!Ba(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: o, max: s } = r.layout.layoutBox[t];
          i.set(e[t] - xe(o, s, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!Hi(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      sn((o) => {
        let s = this.getAxisMotionValue(o);
        if (s && this.constraints !== !1) {
          let a = s.get();
          r[o] = hR({ min: a, max: a }, this.constraints[o]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        sn((o) => {
          if (!Ba(o, e, null)) return;
          let s = this.getAxisMotionValue(o),
            { min: a, max: l } = this.constraints[o];
          s.set(xe(a, l, r[o]));
        });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      wR.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = Ln(e, "pointerdown", (a) => {
          let { drag: l, dragListener: c = !0 } = this.getProps();
          l && c && this.start(a);
        }),
        n = () => {
          let { dragConstraints: a } = this.getProps();
          Hi(a) &&
            a.current &&
            (this.constraints = this.resolveRefConstraints());
        },
        { projection: r } = this.visualElement,
        i = r.addEventListener("measure", n);
      r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
        Y.read(n);
      let o = Zn(O, "resize", () => this.scalePositionWithinConstraints()),
        s = r.addEventListener(
          "didUpdate",
          ({ delta: a, hasLayoutChanged: l }) => {
            this.isDragging &&
              l &&
              (sn((c) => {
                let u = this.getAxisMotionValue(c);
                u &&
                  ((this.originPoint[c] += a[c].translate),
                  u.set(u.get() + a[c].translate));
              }),
              this.visualElement.render());
          }
        );
      return () => {
        o(), t(), i(), s && s();
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: o = Zu,
          dragMomentum: s = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: o,
        dragMomentum: s,
      };
    }
  };
function Ba(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function CR(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
var TR = class extends Tr {
    constructor(e) {
      super(e),
        (this.removeGroupControls = rt),
        (this.removeListeners = rt),
        (this.controls = new kR(e));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || rt);
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  },
  bv = (e) => (t, n) => {
    e && Y.postRender(() => e(t, n));
  },
  ER = class extends Tr {
    constructor() {
      super(...arguments), (this.removePointerDownListener = rt);
    }
    onPointerDown(e) {
      this.session = new cy(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: my(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r,
      } = this.node.getProps();
      return {
        onSessionStart: bv(e),
        onStart: bv(t),
        onMove: n,
        onEnd: (i, o) => {
          delete this.session, r && Y.postRender(() => r(i, o));
        },
      };
    }
    mount() {
      this.removePointerDownListener = Ln(
        this.node.current,
        "pointerdown",
        (e) => this.onPointerDown(e)
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  },
  Na = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function xv(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var Ko = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (U.test(e)) e = parseFloat(e);
        else return e;
      let n = xv(e, t.target.x),
        r = xv(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  RR = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = tr.parse(e);
      if (i.length > 5) return r;
      let o = tr.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      let c = xe(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= c),
        typeof i[3 + s] == "number" && (i[3 + s] /= c),
        o(i)
      );
    },
  },
  PR = class extends me {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      df(_R),
        i &&
          (t.group && t.group.add(i),
          n && n.register && r && n.register(i),
          i.root.didUpdate(),
          i.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (Na.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        o = n.projection;
      return (
        o &&
          ((o.isPresent = i),
          r || e.layoutDependency !== t || t === void 0
            ? o.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? o.promote()
              : o.relegate() ||
                Y.postRender(() => {
                  let s = o.getStack();
                  (!s || !s.members.length) && this.safeToRemove();
                }))),
        null
      );
    }
    componentDidUpdate() {
      let { projection: e } = this.props.visualElement;
      e &&
        (e.root.didUpdate(),
        lf.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      r &&
        (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function vy(e) {
  let [t, n] = zf(),
    r = D(os);
  return C(PR, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: D(tl),
    isPresent: t,
    safeToRemove: n,
  });
}
var _R = {
    borderRadius: {
      ...Ko,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Ko,
    borderTopRightRadius: Ko,
    borderBottomLeftRadius: Ko,
    borderBottomRightRadius: Ko,
    boxShadow: RR,
  },
  gy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  IR = gy.length,
  Sv = (e) => (typeof e == "string" ? parseFloat(e) : e),
  wv = (e) => typeof e == "number" || U.test(e);
function FR(e, t, n, r, i, o) {
  i
    ? ((e.opacity = xe(0, n.opacity !== void 0 ? n.opacity : 1, LR(r))),
      (e.opacityExit = xe(t.opacity !== void 0 ? t.opacity : 1, 0, MR(r))))
    : o &&
      (e.opacity = xe(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < IR; s++) {
    let a = `border${gy[s]}Radius`,
      l = kv(t, a),
      c = kv(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || wv(l) === wv(c)
        ? ((e[a] = Math.max(xe(Sv(l), Sv(c), r), 0)),
          (Fn.test(c) || Fn.test(l)) && (e[a] += "%"))
        : (e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = xe(t.rotate || 0, n.rotate || 0, r));
}
function kv(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
var LR = yy(0, 0.5, Sf),
  MR = yy(0.5, 0.95, rt);
function yy(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(kr(e, t, r)));
}
function Cv(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function on(e, t) {
  Cv(e.x, t.x), Cv(e.y, t.y);
}
function Tv(e, t, n, r, i) {
  return (
    (e -= t), (e = Qa(e, 1 / n, r)), i !== void 0 && (e = Qa(e, 1 / i, r)), e
  );
}
function OR(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (Fn.test(t) &&
      ((t = parseFloat(t)), (t = xe(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = xe(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = Tv(e.min, t, n, a, i)),
    (e.max = Tv(e.max, t, n, a, i));
}
function Ev(e, t, [n, r, i], o, s) {
  OR(e, t[n], t[r], t[i], t.scale, o, s);
}
var DR = ["x", "scaleX", "originX"],
  AR = ["y", "scaleY", "originY"];
function Rv(e, t, n, r) {
  Ev(e.x, t, DR, n ? n.x : void 0, r ? r.x : void 0),
    Ev(e.y, t, AR, n ? n.y : void 0, r ? r.y : void 0);
}
function Pv(e) {
  return e.translate === 0 && e.scale === 1;
}
function by(e) {
  return Pv(e.x) && Pv(e.y);
}
function VR(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function xy(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function _v(e) {
  return It(e.x) / It(e.y);
}
var BR = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    Ff(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (ul(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      let t = this.members[this.members.length - 1];
      t && this.promote(t);
    }
  }
  relegate(e) {
    let t = this.members.findIndex((r) => e === r);
    if (t === 0) return !1;
    let n;
    for (let r = t; r >= 0; r--) {
      let i = this.members[r];
      if (i.isPresent !== !1) {
        n = i;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(e, t) {
    let n = this.lead;
    if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
      n.instance && n.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = n),
        t && (e.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((e.snapshot = n.snapshot),
          (e.snapshot.latestValues = n.animationValues || n.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      let { crossfade: r } = e.options;
      r === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      let { options: t, resumingFrom: n } = e;
      t.onExitComplete && t.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};
function Iv(e, t, n) {
  let r = "",
    i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = n?.z || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: c,
      rotate: u,
      rotateX: f,
      rotateY: d,
      skewX: m,
      skewY: y,
    } = n;
    c && (r = `perspective(${c}px) ${r}`),
      u && (r += `rotate(${u}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      m && (r += `skewX(${m}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  let a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
function $R(e) {
  O.MotionDebug && O.MotionDebug.record(e);
}
function Sy(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Gf(e, t, n) {
  let r = Ce(e) ? e : Oe(e);
  return r.start(Df("", r, t, n)), r.animation;
}
var Du = ["", "X", "Y", "Z"],
  zR = { visibility: "hidden" },
  Fv = 1e3,
  NR = 0,
  si = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  };
function Au(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function wy(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return !1;
  let { visualElement: t } = e.options;
  return t
    ? Ug(t)
      ? !0
      : e.parent && !e.parent.hasCheckedOptimisedAppear
      ? wy(e.parent)
      : !1
    : !1;
}
function ky({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t?.()) {
      (this.id = NR++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (si.totalNodes =
              si.resolvedTargetDeltas =
              si.recalculatedProjection =
                0),
            this.nodes.forEach(WR),
            this.nodes.forEach(KR),
            this.nodes.forEach(qR),
            this.nodes.forEach(UR),
            $R(si);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Gg());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Lf()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      let l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Sy(s)), (this.instance = s);
      let { layoutId: l, layout: c, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f,
          d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = Kg(d, 250)),
            Na.hasAnimatedSinceResize &&
              ((Na.hasAnimatedSinceResize = !1), this.nodes.forEach(Mv));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: m,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              let g = this.options.transition || u.getDefaultTransition() || tP,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: p } =
                  u.getProps(),
                h = !this.targetLayout || !xy(this.targetLayout, y) || m,
                v = !d && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                v ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, v);
                let S = { ...Mf(g, "layout"), onPlay: x, onComplete: p };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S);
              } else
                d || Mv(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      let s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        _t(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(QR),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (O.HandoffCancelAllAnimations &&
          wy(this) &&
          O.HandoffCancelAllAnimations(),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        let f = this.path[u];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      let { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      let c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Lv);
        return;
      }
      this.isUpdating || this.nodes.forEach(YR),
        (this.isUpdating = !1),
        this.nodes.forEach(GR),
        this.nodes.forEach(HR),
        this.nodes.forEach(jR),
        this.clearAllSnapshots();
      let a = wr.now();
      (Me.delta = er(0, 1e3 / 60, a - Me.timestamp)),
        (Me.timestamp = a),
        (Me.isProcessing = !0),
        $a.update.process(Me),
        $a.preRender.process(Me),
        $a.render.process(Me),
        (Me.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), lf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(XR), this.sharedNodes.forEach(ZR);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Y.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Y.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      let s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Le()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      let { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      let s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !by(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      s &&
        (a || oi(this.latestValues) || u) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      let a = this.measurePageBox(),
        l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        nP(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: s } = this.options;
      if (!s) return Le();
      let a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (Sr(a.x, l.offset.x), Sr(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      let a = Le();
      on(a, s);
      for (let l = 0; l < this.path.length; l++) {
        let c = this.path[l],
          { scroll: u, options: f } = c;
        if (c !== this.root && u && f.layoutScroll) {
          if (u.isRoot) {
            on(a, s);
            let { scroll: d } = this.root;
            d && (Sr(a.x, -d.offset.x), Sr(a.y, -d.offset.y));
          }
          Sr(a.x, u.offset.x), Sr(a.y, u.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      let l = Le();
      on(l, s);
      for (let c = 0; c < this.path.length; c++) {
        let u = this.path[c];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          Ui(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          oi(u.latestValues) && Ui(l, u.latestValues);
      }
      return oi(this.latestValues) && Ui(l, this.latestValues), l;
    }
    removeTransform(s) {
      let a = Le();
      on(a, s);
      for (let l = 0; l < this.path.length; l++) {
        let c = this.path[l];
        if (!c.instance || !oi(c.latestValues)) continue;
        Ju(c.latestValues) && c.updateSnapshot();
        let u = Le(),
          f = c.measurePageBox();
        on(u, f),
          Rv(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return oi(this.latestValues) && Rv(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Me.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      let l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      let c = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      let { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = Me.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          let m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Le()),
              (this.relativeTargetOrigin = Le()),
              rs(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              on(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Le()), (this.targetWithTransforms = Le())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                ME(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : on(this.target, this.layout.layoutBox),
                hy(this.target, this.targetDelta))
              : on(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            let m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Le()),
                (this.relativeTargetOrigin = Le()),
                rs(this.relativeTargetOrigin, this.target, m.target),
                on(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          si.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Ju(this.parent.latestValues) ||
          dy(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      let a = this.getLead(),
        l = !!this.resumingFrom || this !== a,
        c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === Me.timestamp && (c = !1),
        c)
      )
        return;
      let { layout: u, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || f))
      )
        return;
      on(this.layoutCorrected, this.layout.layoutBox);
      let d = this.treeScale.x,
        m = this.treeScale.y;
      yR(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Le()));
      let { target: y } = a;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = Wi()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Wi()),
        (this.projectionDeltaWithTransform = Wi()));
      let g = this.projectionTransform;
      ns(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = Iv(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== g ||
          this.treeScale.x !== d ||
          this.treeScale.y !== m) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        si.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        let a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      let l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        f = Wi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      let d = Le(),
        m = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        g = m !== y,
        x = this.getStack(),
        p = !x || x.members.length <= 1,
        h = !!(g && !p && this.options.crossfade === !0 && !this.path.some(eP));
      this.animationProgress = 0;
      let v;
      (this.mixTargetDelta = (S) => {
        let k = S / 1e3;
        Ov(f.x, s.x, k),
          Ov(f.y, s.y, k),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (rs(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            JR(this.relativeTarget, this.relativeTargetOrigin, d, k),
            v && VR(this.relativeTarget, v) && (this.isProjectionDirty = !1),
            v || (v = Le()),
            on(v, this.relativeTarget)),
          g &&
            ((this.animationValues = u), FR(u, c, this.latestValues, k, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (_t(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Y.update(() => {
          (Na.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Gf(0, Fv, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Fv),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      let s = this.getLead(),
        { targetWithTransforms: a, target: l, layout: c, latestValues: u } = s;
      if (!(!a || !l || !c)) {
        if (
          this !== s &&
          this.layout &&
          c &&
          Cy(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || Le();
          let f = It(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          let d = It(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        on(a, l),
          Ui(a, u),
          ns(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new BR()),
        this.sharedNodes.get(s).add(a);
      let c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      let s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      let { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      let { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      let { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      let c = this.getStack();
      c && c.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      let s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: s } = this.options;
      if (!s) return;
      let a = !1,
        { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      let c = {};
      l.z && Au("z", s, c, this.animationValues);
      for (let u = 0; u < Du.length; u++)
        Au(`rotate${Du[u]}`, s, c, this.animationValues),
          Au(`skew${Du[u]}`, s, c, this.animationValues);
      s.render();
      for (let u in c)
        s.setStaticValue(u, c[u]),
          this.animationValues && (this.animationValues[u] = c[u]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return zR;
      let c = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = ut(s?.pointerEvents) || ""),
          (c.transform = u ? u(this.latestValues, "") : "none"),
          c
        );
      let f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        let g = {};
        return (
          this.options.layoutId &&
            ((g.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (g.pointerEvents = ut(s?.pointerEvents) || "")),
          this.hasProjected &&
            !oi(this.latestValues) &&
            ((g.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          g
        );
      }
      let d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = Iv(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        u && (c.transform = u(d, c.transform));
      let { x: m, y } = this.projectionDelta;
      (c.transformOrigin = `${m.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (c.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (c.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (let g in Wa) {
        if (d[g] === void 0) continue;
        let { correct: x, applyTo: p } = Wa[g],
          h = c.transform === "none" ? d[g] : x(d[g], f);
        if (p) {
          let v = p.length;
          for (let S = 0; S < v; S++) c[p[S]] = h;
        } else c[g] = h;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents = f === this ? ut(s?.pointerEvents) || "" : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Lv),
        this.root.sharedNodes.clear();
    }
  };
}
function HR(e) {
  e.updateLayout();
}
function jR(e) {
  var t;
  let n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    let { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? sn((f) => {
          let d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = It(d);
          (d.min = r[f].min), (d.max = d.min + m);
        })
      : Cy(o, n.layoutBox, r) &&
        sn((f) => {
          let d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = It(r[f]);
          (d.max = d.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + m));
        });
    let a = Wi();
    ns(a, r, n.layoutBox);
    let l = Wi();
    s ? ns(l, e.applyTransform(i, !0), n.measuredBox) : ns(l, r, n.layoutBox);
    let c = !by(a),
      u = !1;
    if (!e.resumeFrom) {
      let f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        let { snapshot: d, layout: m } = f;
        if (d && m) {
          let y = Le();
          rs(y, n.layoutBox, d.layoutBox);
          let g = Le();
          rs(g, r, m.layoutBox),
            xy(y, g) || (u = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u,
    });
  } else if (e.isLead()) {
    let { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function WR(e) {
  si.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function UR(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function XR(e) {
  e.clearSnapshot();
}
function Lv(e) {
  e.clearMeasurements();
}
function YR(e) {
  e.isLayoutDirty = !1;
}
function GR(e) {
  let { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Mv(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function KR(e) {
  e.resolveTargetDelta();
}
function qR(e) {
  e.calcProjection();
}
function QR(e) {
  e.resetSkewAndRotation();
}
function ZR(e) {
  e.removeLeadSnapshot();
}
function Ov(e, t, n) {
  (e.translate = xe(t.translate, 0, n)),
    (e.scale = xe(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Dv(e, t, n, r) {
  (e.min = xe(t.min, n.min, r)), (e.max = xe(t.max, n.max, r));
}
function JR(e, t, n, r) {
  Dv(e.x, t.x, n.x, r), Dv(e.y, t.y, n.y, r);
}
function eP(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var tP = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Av = (e) =>
    typeof Ie < "u" && Ie.userAgent && Ie.userAgent.toLowerCase().includes(e),
  Vv = Av("applewebkit/") && !Av("chrome/") ? Math.round : rt;
function Bv(e) {
  (e.min = Vv(e.min)), (e.max = Vv(e.max));
}
function nP(e) {
  Bv(e.x), Bv(e.y);
}
function Cy(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !qu(_v(t), _v(n), 0.2))
  );
}
var rP = ky({
    attachResizeListener: (e, t) => Zn(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  ui = { current: void 0 },
  Ty = ky({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!ui.current) {
        let e = new rP({});
        e.mount(O), e.setOptions({ layoutScroll: !0 }), (ui.current = e);
      }
      return ui.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => O.getComputedStyle(e).position === "fixed",
  }),
  Ey = {
    pan: { Feature: ER },
    drag: { Feature: TR, ProjectionNode: Ty, MeasureLayout: vy },
  },
  Ry = class extends Qg {
    constructor() {
      super(...arguments), (this.KeyframeResolver = zg);
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      return e.style ? e.style[t] : void 0;
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      delete t[e], delete n[e];
    }
  };
function iP(e) {
  return O.getComputedStyle(e);
}
var Py = class extends Ry {
    constructor() {
      super(...arguments), (this.type = "html");
    }
    readValueFromInstance(e, t) {
      if (di.has(t)) {
        let n = _f(t);
        return (n && n.default) || 0;
      } else {
        let n = iP(e),
          r = (Tg(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == "string" ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return py(e, t);
    }
    build(e, t, n, r) {
      jf(e, t, n, r.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return Yf(e, t, n);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      Ce(e) &&
        (this.childSubscription = e.on("change", (t) => {
          this.current && (this.current.textContent = `${t}`);
        }));
    }
    renderInstance(e, t, n, r) {
      ny(e, t, n, r);
    }
  },
  _y = class extends Ry {
    constructor() {
      super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (di.has(t)) {
        let n = _f(t);
        return (n && n.default) || 0;
      }
      return (t = ry.has(t) ? t : af(t)), e.getAttribute(t);
    }
    measureInstanceViewportBox() {
      return Le();
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return oy(e, t, n);
    }
    build(e, t, n, r) {
      Uf(e, t, n, this.isSVGTag, r.transformTemplate);
    }
    renderInstance(e, t, n, r) {
      iy(e, t, n, r);
    }
    mount(e) {
      (this.isSVGTag = Xf(e.tagName)), super.mount(e);
    }
  },
  Iy = (e, t) =>
    Hf(e)
      ? new _y(t, { enableHardwareAcceleration: !1 })
      : new Py(t, {
          allowProjection: e !== ni,
          enableHardwareAcceleration: !0,
        }),
  Fy = { layout: { ProjectionNode: Ty, MeasureLayout: vy } },
  oP = { ...$f, ...ly, ...Ey, ...Fy },
  Ut = Zg((e, t) => sy(e, t, oP, Iy));
var sP = Zg(sy);
function Ly() {
  let e = A(!1);
  return (
    Cr(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function hl() {
  let e = Ly(),
    [t, n] = Rt(0),
    r = fe(() => {
      e.current && n(t + 1);
    }, [t]);
  return [fe(() => Y.postRender(r), [r]), t];
}
function My(e) {
  return H(() => () => e(), []);
}
var aP = class extends me {
  getSnapshotBeforeUpdate(e) {
    let t = this.props.childRef.current;
    if (t && e.isPresent && !this.props.isPresent) {
      let n = this.props.sizeRef.current;
      (n.height = t.offsetHeight || 0),
        (n.width = t.offsetWidth || 0),
        (n.top = t.offsetTop),
        (n.left = t.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function lP({ children: e, isPresent: t }) {
  let n = ri(),
    r = A(null),
    i = A({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: o } = D(Jn);
  return (
    qe(() => {
      let { width: s, height: a, top: l, left: c } = i.current;
      if (t || !r.current || !s || !a) return;
      r.current.dataset.motionPopId = n;
      let u = document.createElement("style");
      return (
        o && (u.nonce = o),
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    C(aP, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: yn(e, { ref: r }),
    })
  );
}
var Vu = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  let a = rr(cP),
    l = ri(),
    c = oe(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (u) => {
          a.set(u, !0);
          for (let f of a.values()) if (!f) return;
          r && r();
        },
        register: (u) => (a.set(u, !1), () => a.delete(u)),
      }),
      o ? [Math.random()] : [n]
    );
  return (
    oe(() => {
      a.forEach((u, f) => a.set(f, !1));
    }, [n]),
    H(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === "popLayout" && (e = C(lP, { isPresent: n, children: e })),
    C(qi.Provider, { value: c, children: e })
  );
};
function cP() {
  return new Map();
}
var ai = (e) => e.key || "";
function uP(e, t) {
  e.forEach((n) => {
    let r = ai(n);
    t.set(r, n);
  });
}
function fP(e) {
  let t = [];
  return (
    In.forEach(e, (n) => {
      jt(n) && t.push(n);
    }),
    t
  );
}
var Kf = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: i,
  presenceAffectsLayout: o = !0,
  mode: s = "sync",
}) => {
  Wt(!i, "Replace exitBeforeEnter with mode='wait'");
  let a = D(os).forceRender || hl()[0],
    l = Ly(),
    c = fP(e),
    u = c,
    f = A(new Map()).current,
    d = A(u),
    m = A(new Map()).current,
    y = A(!0);
  if (
    (Cr(() => {
      (y.current = !1), uP(c, m), (d.current = u);
    }),
    My(() => {
      (y.current = !0), m.clear(), f.clear();
    }),
    y.current)
  )
    return C(Fe, {
      children: u.map((h) =>
        C(
          Vu,
          {
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: s,
            children: h,
          },
          ai(h)
        )
      ),
    });
  u = [...u];
  let g = d.current.map(ai),
    x = c.map(ai),
    p = g.length;
  for (let h = 0; h < p; h++) {
    let v = g[h];
    x.indexOf(v) === -1 && !f.has(v) && f.set(v, void 0);
  }
  return (
    s === "wait" && f.size && (u = []),
    f.forEach((h, v) => {
      if (x.indexOf(v) !== -1) return;
      let S = m.get(v);
      if (!S) return;
      let k = g.indexOf(v),
        w = h;
      w ||
        ((w = C(
          Vu,
          {
            isPresent: !1,
            onExitComplete: () => {
              f.delete(v);
              let E = Array.from(m.keys()).filter((F) => !x.includes(F));
              if (
                (E.forEach((F) => m.delete(F)),
                (d.current = c.filter((F) => {
                  let I = ai(F);
                  return I === v || E.includes(I);
                })),
                !f.size)
              ) {
                if (l.current === !1) return;
                a(), r && r();
              }
            },
            custom: t,
            presenceAffectsLayout: o,
            mode: s,
            children: S,
          },
          ai(S)
        )),
        f.set(v, w)),
        u.splice(k, 0, w);
    }),
    (u = u.map((h) => {
      let v = h.key;
      return f.has(v)
        ? h
        : C(
            Vu,
            { isPresent: !0, presenceAffectsLayout: o, mode: s, children: h },
            ai(h)
          );
    })),
    C(Fe, { children: f.size ? u : u.map((h) => yn(h)) })
  );
};
function Oy({ children: e, isValidProp: t, ...n }) {
  t && sg(t), (n = { ...D(Jn), ...n }), (n.isStatic = rr(() => n.isStatic));
  let r = oe(
    () => n,
    [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]
  );
  return C(Jn.Provider, { value: r, children: e });
}
var Dy = be(null),
  dP = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function $v() {
  let e = new Set(),
    t = new WeakMap(),
    n = () => e.forEach(dP);
  return {
    add: (r) => {
      e.add(r), t.set(r, r.addEventListener("willUpdate", n));
    },
    remove: (r) => {
      e.delete(r);
      let i = t.get(r);
      i && (i(), t.delete(r)), n();
    },
    dirty: n,
  };
}
var Ay = (e) => e === !0,
  hP = (e) => Ay(e === !0) || e === "id",
  Vy = ({ children: e, id: t, inherit: n = !0 }) => {
    let r = D(os),
      i = D(Dy),
      [o, s] = hl(),
      a = A(null),
      l = r.id || i;
    a.current === null &&
      (hP(n) && l && (t = t ? l + "-" + t : l),
      (a.current = { id: t, group: (Ay(n) && r.group) || $v() }));
    let c = oe(() => ({ ...a.current, forceRender: o }), [s]);
    return C(os.Provider, { value: c, children: e });
  };
function Vn(e) {
  let t = rr(() => Oe(e)),
    { isStatic: n } = D(Jn);
  if (n) {
    let [, r] = Rt(e);
    H(() => t.on("change", r), []);
  }
  return t;
}
var pP = (e) => e && typeof e == "object" && e.mix,
  mP = (e) => (pP(e) ? e.mix : void 0);
function hs(...e) {
  let t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    o = e[2 + n],
    s = e[3 + n],
    a = eo(i, o, { mixer: mP(o[0]), ...s });
  return t ? a(r) : a;
}
function By(e, t) {
  let n = Vn(t()),
    r = () => n.set(t());
  return (
    r(),
    Cr(() => {
      let i = () => Y.preRender(r, !1, !0),
        o = e.map((s) => s.on("change", i));
      return () => {
        o.forEach((s) => s()), _t(r);
      };
    }),
    n
  );
}
function vP(e) {
  (ts.current = []), e();
  let t = By(ts.current, e);
  return (ts.current = void 0), t;
}
function xt(e, t, n, r) {
  if (typeof e == "function") return vP(e);
  let i = typeof t == "function" ? t : hs(t, n, r);
  return Array.isArray(e) ? zv(e, i) : zv([e], ([o]) => i(o));
}
function zv(e, t) {
  let n = rr(() => []);
  return By(e, () => {
    n.length = 0;
    let r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
var $y = be(null);
function gP(e, t, n, r) {
  if (!r) return e;
  let i = e.findIndex((u) => u.value === t);
  if (i === -1) return e;
  let o = r > 0 ? 1 : -1,
    s = e[i + o];
  if (!s) return e;
  let a = e[i],
    l = s.layout,
    c = xe(l.min, l.max, 0.5);
  return (o === 1 && a.layout.max + n > c) || (o === -1 && a.layout.min + n < c)
    ? fE(e, i, i + o)
    : e;
}
function yP(
  { children: e, as: t = "ul", axis: n = "y", onReorder: r, values: i, ...o },
  s
) {
  let a = rr(() => Ut(t)),
    l = [],
    c = A(!1);
  Wt(!!i, "Reorder.Group must be provided a values prop");
  let u = {
    axis: n,
    registerItem: (f, d) => {
      let m = l.findIndex((y) => f === y.value);
      m !== -1 ? (l[m].layout = d[n]) : l.push({ value: f, layout: d[n] }),
        l.sort(xP);
    },
    updateOrder: (f, d, m) => {
      if (c.current) return;
      let y = gP(l, f, d, m);
      l !== y &&
        ((c.current = !0), r(y.map(bP).filter((g) => i.indexOf(g) !== -1)));
    },
  };
  return (
    H(() => {
      c.current = !1;
    }),
    C(a, {
      ...o,
      ref: s,
      ignoreStrict: !0,
      children: C($y.Provider, { value: u, children: e }),
    })
  );
}
var oB = je(yP);
function bP(e) {
  return e.value;
}
function xP(e, t) {
  return e.layout.min - t.layout.min;
}
function Nv(e, t = 0) {
  return Ce(e) ? e : Vn(t);
}
function SP(
  {
    children: e,
    style: t = {},
    value: n,
    as: r = "li",
    onDrag: i,
    layout: o = !0,
    ...s
  },
  a
) {
  let l = rr(() => Ut(r)),
    c = D($y),
    u = { x: Nv(t.x), y: Nv(t.y) },
    f = xt([u.x, u.y], ([g, x]) => (g || x ? 1 : "unset"));
  Wt(!!c, "Reorder.Item must be a child of Reorder.Group");
  let { axis: d, registerItem: m, updateOrder: y } = c;
  return C(l, {
    drag: d,
    ...s,
    dragSnapToOrigin: !0,
    style: { ...t, x: u.x, y: u.y, zIndex: f },
    layout: o,
    onDrag: (g, x) => {
      let { velocity: p } = x;
      p[d] && y(n, u[d].get(), p[d]), i && i(g, x);
    },
    onLayoutMeasure: (g) => m(n, g),
    ref: a,
    ignoreStrict: !0,
    children: e,
  });
}
var lB = je(SP);
var zy = { renderer: Iy, ...$f, ...ly },
  wP = { ...zy, ...Ey, ...Fy };
function qf(e, t = {}) {
  let { isStatic: n } = D(Jn),
    r = A(null),
    i = Vn(Ce(e) ? e.get() : e),
    o = A(i.get()),
    s = A(() => {}),
    a = () => {
      let c = r.current;
      c && c.time === 0 && c.sample(Me.delta),
        l(),
        (r.current = Pf({
          keyframes: [i.get(), o.current],
          velocity: i.getVelocity(),
          type: "spring",
          restDelta: 0.001,
          restSpeed: 0.01,
          ...t,
          onUpdate: s.current,
        }));
    },
    l = () => {
      r.current && r.current.stop();
    };
  return (
    qe(
      () =>
        i.attach(
          (c, u) =>
            n ? u(c) : ((o.current = c), (s.current = u), Y.update(a), i.get()),
          l
        ),
      [JSON.stringify(t)]
    ),
    Cr(() => {
      if (Ce(e)) return e.on("change", (c) => i.set(parseFloat(c)));
    }, [i]),
    i
  );
}
function Qf(e, t, n) {
  var r;
  if (typeof e == "string") {
    let i = document;
    t &&
      (Wt(!!t.current, "Scope provided, but no element detected."),
      (i = t.current)),
      n
        ? (((r = n[e]) !== null && r !== void 0) ||
            (n[e] = i.querySelectorAll(e)),
          (e = n[e]))
        : (e = i.querySelectorAll(e));
  } else e instanceof Element && (e = [e]);
  return Array.from(e || []);
}
var Ha = new WeakMap(),
  xr;
function kP(e, t) {
  if (t) {
    let { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function CP({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = Ha.get(e)) === null ||
    r === void 0 ||
    r.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return kP(e, n);
        },
      });
    });
}
function TP(e) {
  e.forEach(CP);
}
function EP() {
  typeof ResizeObserver > "u" || (xr = new ResizeObserver(TP));
}
function RP(e, t) {
  xr || EP();
  let n = Qf(e);
  return (
    n.forEach((r) => {
      let i = Ha.get(r);
      i || ((i = new Set()), Ha.set(r, i)), i.add(t), xr?.observe(r);
    }),
    () => {
      n.forEach((r) => {
        let i = Ha.get(r);
        i?.delete(t), i?.size || xr?.unobserve(r);
      });
    }
  );
}
var ja = new Set(),
  is;
function PP() {
  (is = () => {
    let e = { width: O.innerWidth, height: O.innerHeight },
      t = { target: O, size: e, contentSize: e };
    ja.forEach((n) => n(t));
  }),
    O.addEventListener("resize", is);
}
function _P(e) {
  return (
    ja.add(e),
    is || PP(),
    () => {
      ja.delete(e), !ja.size && is && (is = void 0);
    }
  );
}
function IP(e, t) {
  return typeof e == "function" ? _P(e) : RP(e, t);
}
var FP = 50,
  Hv = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  LP = () => ({ time: 0, x: Hv(), y: Hv() }),
  MP = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function jv(e, t, n, r) {
  let i = n[t],
    { length: o, position: s } = MP[t],
    a = i.current,
    l = n.time;
  (i.current = e[`scroll${s}`]),
    (i.scrollLength = e[`scroll${o}`] - e[`client${o}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = kr(0, i.scrollLength, i.current));
  let c = r - l;
  i.velocity = c > FP ? 0 : gf(i.current - a, c);
}
function OP(e, t, n) {
  jv(e, "x", t, n), jv(e, "y", t, n), (t.time = n);
}
function DP(e, t) {
  let n = { x: 0, y: 0 },
    r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      let i = r.getBoundingClientRect();
      r = r.parentElement;
      let o = r.getBoundingClientRect();
      (n.x += i.left - o.left), (n.y += i.top - o.top);
    } else if (r instanceof SVGGraphicsElement) {
      let { x: i, y: o } = r.getBBox();
      (n.x += i), (n.y += o);
      let s = null,
        a = r.parentNode;
      for (; !s; ) a.tagName === "svg" && (s = a), (a = r.parentNode);
      r = s;
    } else break;
  return n;
}
var AP = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  tf = { start: 0, center: 0.5, end: 1 };
function Wv(e, t, n = 0) {
  let r = 0;
  if ((e in tf && (e = tf[e]), typeof e == "string")) {
    let i = parseFloat(e);
    e.endsWith("px")
      ? (r = i)
      : e.endsWith("%")
      ? (e = i / 100)
      : e.endsWith("vw")
      ? (r = (i / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (r = (i / 100) * document.documentElement.clientHeight)
      : (e = i);
  }
  return typeof e == "number" && (r = t * e), n + r;
}
var VP = [0, 0];
function BP(e, t, n, r) {
  let i = Array.isArray(e) ? e : VP,
    o = 0,
    s = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, tf[e] ? e : "0"])),
    (o = Wv(i[0], n, r)),
    (s = Wv(i[1], t)),
    o - s
  );
}
var $P = { x: 0, y: 0 };
function zP(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function NP(e, t, n) {
  let { offset: r = AP.All } = n,
    { target: i = e, axis: o = "y" } = n,
    s = o === "y" ? "height" : "width",
    a = i !== e ? DP(i, e) : $P,
    l = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : zP(i),
    c = { width: e.clientWidth, height: e.clientHeight };
  t[o].offset.length = 0;
  let u = !t[o].interpolate,
    f = r.length;
  for (let d = 0; d < f; d++) {
    let m = BP(r[d], c[s], l[s], a[o]);
    !u && m !== t[o].interpolatorOffsets[d] && (u = !0), (t[o].offset[d] = m);
  }
  u &&
    ((t[o].interpolate = eo(t[o].offset, Rf(r))),
    (t[o].interpolatorOffsets = [...t[o].offset])),
    (t[o].progress = t[o].interpolate(t[o].current));
}
function HP(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      (n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight);
}
function jP(e, t, n, r = {}) {
  return {
    measure: () => HP(e, r.target, n),
    update: (i) => {
      OP(e, n, i), (r.offset || r.target) && NP(e, n, r);
    },
    notify: () => t(n),
  };
}
var qo = new WeakMap(),
  Uv = new WeakMap(),
  Bu = new WeakMap(),
  Xv = (e) => (e === document.documentElement ? O : e);
function to(e, { container: t = document.documentElement, ...n } = {}) {
  let r = Bu.get(t);
  r || ((r = new Set()), Bu.set(t, r));
  let i = LP(),
    o = jP(t, e, i, n);
  if ((r.add(o), !qo.has(t))) {
    let a = () => {
        for (let d of r) d.measure();
      },
      l = () => {
        for (let d of r) d.update(Me.timestamp);
      },
      c = () => {
        for (let d of r) d.notify();
      },
      u = () => {
        Y.read(a, !1, !0), Y.read(l, !1, !0), Y.update(c, !1, !0);
      };
    qo.set(t, u);
    let f = Xv(t);
    O.addEventListener("resize", u, { passive: !0 }),
      t !== document.documentElement && Uv.set(t, IP(t, u)),
      f.addEventListener("scroll", u, { passive: !0 });
  }
  let s = qo.get(t);
  return (
    Y.read(s, !1, !0),
    () => {
      var a;
      _t(s);
      let l = Bu.get(t);
      if (!l || (l.delete(o), l.size)) return;
      let c = qo.get(t);
      qo.delete(t),
        c &&
          (Xv(t).removeEventListener("scroll", c),
          (a = Uv.get(t)) === null || a === void 0 || a(),
          O.removeEventListener("resize", c));
    }
  );
}
function Yv(e, t) {
  Qi(
    !!(!t || t.current),
    `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
  );
}
var WP = () => ({
  scrollX: Oe(0),
  scrollY: Oe(0),
  scrollXProgress: Oe(0),
  scrollYProgress: Oe(0),
});
function Ny({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  let i = rr(WP);
  return (
    (n ? Cr : H)(
      () => (
        Yv("target", t),
        Yv("container", e),
        to(
          ({ x: s, y: a }) => {
            i.scrollX.set(s.current),
              i.scrollXProgress.set(s.progress),
              i.scrollY.set(a.current),
              i.scrollYProgress.set(a.progress);
          },
          {
            ...r,
            container: e?.current || void 0,
            target: t?.current || void 0,
          }
        )
      ),
      [e, t, JSON.stringify(r.offset)]
    ),
    i
  );
}
function Hy() {
  !Nf.current && qg();
  let [e] = Rt(qa.current);
  return e;
}
function hi() {
  let e = Hy(),
    { reducedMotion: t } = D(Jn);
  return t === "never" ? !1 : t === "always" ? !0 : e;
}
function UP(e) {
  e.values.forEach((t) => t.stop());
}
function nf(e, t) {
  [...t].reverse().forEach((r) => {
    let i = e.getVariant(r);
    i && Af(e, i),
      e.variantChildren &&
        e.variantChildren.forEach((o) => {
          nf(o, t);
        });
  });
}
function XP(e, t) {
  if (Array.isArray(t)) return nf(e, t);
  if (typeof t == "string") return nf(e, [t]);
  Af(e, t);
}
function jy() {
  let e = !1,
    t = new Set(),
    n = {
      subscribe(r) {
        return t.add(r), () => void t.delete(r);
      },
      start(r, i) {
        Wt(
          e,
          "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
        );
        let o = [];
        return (
          t.forEach((s) => {
            o.push(Bf(s, r, { transitionOverride: i }));
          }),
          Promise.all(o)
        );
      },
      set(r) {
        return (
          Wt(
            e,
            "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
          ),
          t.forEach((i) => {
            XP(i, r);
          })
        );
      },
      stop() {
        t.forEach((r) => {
          UP(r);
        });
      },
      mount() {
        return (
          (e = !0),
          () => {
            (e = !1), n.stop();
          }
        );
      },
    };
  return n;
}
var Wy = (e, t, n) => {
  let r = t - e;
  return ((((n - e) % r) + r) % r) + e;
};
function YP(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function GP(e) {
  let t = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    n = Sy(e)
      ? new _y(t, { enableHardwareAcceleration: !1 })
      : new Py(t, { enableHardwareAcceleration: !0 });
  n.mount(e), nr.set(e, n);
}
function KP(e, t = 100) {
  let n = ds({ keyframes: [0, t], ...e }),
    r = Math.min(Lg(n), Uu);
  return {
    type: "keyframes",
    ease: (i) => n.next(r * i).value / t,
    duration: Dn(r),
  };
}
function Gv(e, t, n, r) {
  var i;
  return typeof t == "number"
    ? t
    : t.startsWith("-") || t.startsWith("+")
    ? Math.max(0, e + parseFloat(t))
    : t === "<"
    ? n
    : (i = r.get(t)) !== null && i !== void 0
    ? i
    : e;
}
function qP(e, t) {
  return _g(e) ? e[Wy(0, e.length, t)] : e;
}
function QP(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    i.at > t && i.at < n && (ul(e, i), r--);
  }
}
function ZP(e, t, n, r, i, o) {
  QP(e, i, o);
  for (let s = 0; s < t.length; s++)
    e.push({ value: t[s], at: xe(i, o, r[s]), easing: qP(n, s) });
}
function JP(e, t) {
  return e.at === t.at
    ? e.value === null
      ? 1
      : t.value === null
      ? -1
      : 0
    : e.at - t.at;
}
var e_ = "easeInOut";
function t_(e, { defaultTransition: t = {}, ...n } = {}, r) {
  let i = t.duration || 0.3,
    o = new Map(),
    s = new Map(),
    a = {},
    l = new Map(),
    c = 0,
    u = 0,
    f = 0;
  for (let d = 0; d < e.length; d++) {
    let m = e[d];
    if (typeof m == "string") {
      l.set(m, u);
      continue;
    } else if (!Array.isArray(m)) {
      l.set(m.name, Gv(u, m.at, c, l));
      continue;
    }
    let [y, g, x = {}] = m;
    x.at !== void 0 && (u = Gv(u, x.at, c, l));
    let p = 0,
      h = (v, S, k, w = 0, T = 0) => {
        let E = n_(v),
          { delay: F = 0, times: I = Rf(E), type: z = "keyframes", ...$ } = S,
          { ease: re = t.ease || "easeOut", duration: J } = S,
          V = typeof F == "function" ? F(w, T) : F,
          X = E.length;
        if (X <= 2 && z === "spring") {
          let te = 100;
          if (X === 2 && o_(E)) {
            let de = E[1] - E[0];
            te = Math.abs(de);
          }
          let ne = { ...$ };
          J !== void 0 && (ne.duration = On(J));
          let ye = KP(ne, te);
          (re = ye.ease), (J = ye.duration);
        }
        J ?? (J = i);
        let Z = u + V,
          ee = Z + J;
        I.length === 1 && I[0] === 0 && (I[1] = 1);
        let W = I.length - E.length;
        W > 0 && Ig(I, W),
          E.length === 1 && E.unshift(null),
          ZP(k, E, re, I, Z, ee),
          (p = Math.max(V + J, p)),
          (f = Math.max(ee, f));
      };
    if (Ce(y)) {
      let v = Kv(y, s);
      h(g, x, qv("default", v));
    } else {
      let v = Qf(y, r, a),
        S = v.length;
      for (let k = 0; k < S; k++) {
        (g = g), (x = x);
        let w = v[k],
          T = Kv(w, s);
        for (let E in g) h(g[E], r_(x, E), qv(E, T), k, S);
      }
    }
    (c = u), (u += p);
  }
  return (
    s.forEach((d, m) => {
      for (let y in d) {
        let g = d[y];
        g.sort(JP);
        let x = [],
          p = [],
          h = [];
        for (let S = 0; S < g.length; S++) {
          let { at: k, value: w, easing: T } = g[S];
          x.push(w), p.push(kr(0, f, k)), h.push(T || "easeOut");
        }
        p[0] !== 0 && (p.unshift(0), x.unshift(x[0]), h.unshift(e_)),
          p[p.length - 1] !== 1 && (p.push(1), x.push(null)),
          o.has(m) || o.set(m, { keyframes: {}, transition: {} });
        let v = o.get(m);
        (v.keyframes[y] = x),
          (v.transition[y] = { ...t, duration: f, ease: h, times: p, ...n });
      }
    }),
    o
  );
}
function Kv(e, t) {
  return !t.has(e) && t.set(e, {}), t.get(e);
}
function qv(e, t) {
  return t[e] || (t[e] = []), t[e];
}
function n_(e) {
  return Array.isArray(e) ? e : [e];
}
function r_(e, t) {
  return e[t] ? { ...e, ...e[t] } : { ...e };
}
var i_ = (e) => typeof e == "number",
  o_ = (e) => e.every(i_);
function Uy(e, t, n, r) {
  let i = Qf(e, r),
    o = i.length;
  Wt(!!o, "No valid element provided.");
  let s = [];
  for (let a = 0; a < o; a++) {
    let l = i[a];
    nr.has(l) || GP(l);
    let c = nr.get(l),
      u = { ...n };
    typeof u.delay == "function" && (u.delay = u.delay(a, o)),
      s.push(...Vf(c, { ...t, transition: u }, {}));
  }
  return new Of(s);
}
var s_ = (e) => Array.isArray(e) && Array.isArray(e[0]);
function a_(e, t, n) {
  let r = [];
  return (
    t_(e, t, n).forEach(({ keyframes: o, transition: s }, a) => {
      let l;
      Ce(a) ? (l = Gf(a, o.default, s.default)) : (l = Uy(a, o, s)), r.push(l);
    }),
    new Of(r)
  );
}
var Xy = (e) => {
    function t(n, r, i) {
      let o;
      return (
        s_(n)
          ? (o = a_(n, r, e))
          : YP(r)
          ? (o = Uy(n, r, i, e))
          : (o = Gf(n, r, i)),
        e && e.animations.push(o),
        o
      );
    }
    return t;
  },
  no = Xy();
function Yy() {
  let e = rr(jy);
  return Cr(e.mount, []), e;
}
var Gy = Yy;
function Zf(e) {
  return e !== null && typeof e == "object" && ff in e;
}
function Ky(e) {
  if (Zf(e)) return e[ff];
}
function Jf() {
  return l_;
}
function l_(e) {
  ui.current &&
    ((ui.current.isUpdating = !1), ui.current.blockUpdate(), e && e());
}
function qy() {
  let [e, t] = hl(),
    n = Jf(),
    r = A();
  return (
    H(() => {
      Y.postRender(() =>
        Y.postRender(() => {
          t === r.current && (Ya.current = !1);
        })
      );
    }, [t]),
    (i) => {
      n(() => {
        (Ya.current = !0), e(), i(), (r.current = t + 1);
      });
    }
  );
}
function Qy() {
  return fe(() => {
    let t = ui.current;
    t && t.resetTree();
  }, []);
}
var Qv = () => ({});
var SB = il({ scrapeMotionValuesFromProps: Qv, createRenderState: Qv });
var c_ = Qo.reduce((e, t) => ((e[t] = (n) => _t(n)), e), {});
var WI = {};
xu(WI, {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => LI,
  createPortal: () => MI,
  createRoot: () => OI,
  default: () => p1,
  findDOMNode: () => DI,
  flushSync: () => AI,
  hydrate: () => VI,
  hydrateRoot: () => BI,
  render: () => $I,
  unmountComponentAtNode: () => zI,
  unstable_batchedUpdates: () => NI,
  unstable_renderSubtreeIntoContainer: () => HI,
  version: () => jI,
});
var bl = {};
xu(bl, {
  default: () => G,
  unstable_IdlePriority: () => d_,
  unstable_ImmediatePriority: () => h_,
  unstable_LowPriority: () => p_,
  unstable_NormalPriority: () => m_,
  unstable_Profiling: () => v_,
  unstable_UserBlockingPriority: () => g_,
  unstable_cancelCallback: () => y_,
  unstable_continueExecution: () => b_,
  unstable_forceFrameRate: () => x_,
  unstable_getCurrentPriorityLevel: () => S_,
  unstable_getFirstCallbackNode: () => w_,
  unstable_next: () => k_,
  unstable_now: () => f_,
  unstable_pauseExecution: () => C_,
  unstable_requestPaint: () => T_,
  unstable_runWithPriority: () => E_,
  unstable_scheduleCallback: () => R_,
  unstable_shouldYield: () => P_,
  unstable_wrapCallback: () => __,
});
var G = {};
function rd(e, t) {
  var n = e.length;
  e.push(t);
  e: for (; 0 < n; ) {
    var r = (n - 1) >>> 1,
      i = e[r];
    if (!(0 < pl(i, t))) break e;
    (e[r] = t), (e[n] = i), (n = r);
  }
}
function bn(e) {
  return e.length === 0 ? null : e[0];
}
function vl(e) {
  if (e.length === 0) return null;
  var t = e[0],
    n = e.pop();
  if (n !== t) {
    e[0] = n;
    e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
      var s = 2 * (r + 1) - 1,
        a = e[s],
        l = s + 1,
        c = e[l];
      if (0 > pl(a, n))
        l < i && 0 > pl(c, a)
          ? ((e[r] = c), (e[l] = n), (r = l))
          : ((e[r] = a), (e[s] = n), (r = s));
      else {
        if (!(l < i && 0 > pl(c, n))) break e;
        (e[r] = c), (e[l] = n), (r = l);
      }
    }
  }
  return t;
}
function pl(e, t) {
  var n = e.sortIndex - t.sortIndex;
  return n !== 0 ? n : e.id - t.id;
}
typeof performance == "object" && typeof performance.now == "function"
  ? ((Zy = performance),
    (G.unstable_now = function () {
      return Zy.now();
    }))
  : ((ed = Date),
    (Jy = ed.now()),
    (G.unstable_now = function () {
      return ed.now() - Jy;
    }));
var Zy,
  ed,
  Jy,
  Bn = [],
  Er = [],
  u_ = 1,
  ln = null,
  ft = 3,
  gl = !1,
  pi = !1,
  ms = !1,
  n0 = typeof setTimeout == "function" ? setTimeout : null,
  r0 = typeof clearTimeout == "function" ? clearTimeout : null,
  e0 = typeof setImmediate < "u" ? setImmediate : null;
typeof Ie < "u" &&
  Ie.scheduling !== void 0 &&
  Ie.scheduling.isInputPending !== void 0 &&
  Ie.scheduling.isInputPending.bind(Ie.scheduling);
function id(e) {
  for (var t = bn(Er); t !== null; ) {
    if (t.callback === null) vl(Er);
    else {
      if (!(t.startTime <= e)) break;
      vl(Er), (t.sortIndex = t.expirationTime), rd(Bn, t);
    }
    t = bn(Er);
  }
}
function od(e) {
  if (((ms = !1), id(e), !pi))
    if (bn(Bn) !== null) (pi = !0), ad(sd);
    else {
      var t = bn(Er);
      t !== null && ld(od, t.startTime - e);
    }
}
function sd(e, t) {
  (pi = !1), ms && ((ms = !1), r0(vs), (vs = -1)), (gl = !0);
  var n = ft;
  try {
    for (
      id(t), ln = bn(Bn);
      ln !== null && (!(ln.expirationTime > t) || (e && !s0()));

    ) {
      var r = ln.callback;
      if (typeof r == "function") {
        (ln.callback = null), (ft = ln.priorityLevel);
        var i = r(ln.expirationTime <= t);
        (t = G.unstable_now()),
          typeof i == "function" ? (ln.callback = i) : ln === bn(Bn) && vl(Bn),
          id(t);
      } else vl(Bn);
      ln = bn(Bn);
    }
    if (ln !== null) var o = !0;
    else {
      var s = bn(Er);
      s !== null && ld(od, s.startTime - t), (o = !1);
    }
    return o;
  } finally {
    (ln = null), (ft = n), (gl = !1);
  }
}
var yl = !1,
  ml = null,
  vs = -1,
  i0 = 5,
  o0 = -1;
function s0() {
  return !(G.unstable_now() - o0 < i0);
}
function td() {
  if (ml !== null) {
    var e = G.unstable_now();
    o0 = e;
    var t = !0;
    try {
      t = ml(!0, e);
    } finally {
      t ? ps() : ((yl = !1), (ml = null));
    }
  } else yl = !1;
}
var ps;
typeof e0 == "function"
  ? (ps = function () {
      e0(td);
    })
  : typeof MessageChannel < "u"
  ? ((nd = new MessageChannel()),
    (t0 = nd.port2),
    (nd.port1.onmessage = td),
    (ps = function () {
      t0.postMessage(null);
    }))
  : (ps = function () {
      n0(td, 0);
    });
var nd, t0;
function ad(e) {
  (ml = e), yl || ((yl = !0), ps());
}
function ld(e, t) {
  vs = n0(function () {
    e(G.unstable_now());
  }, t);
}
G.unstable_IdlePriority = 5;
G.unstable_ImmediatePriority = 1;
G.unstable_LowPriority = 4;
G.unstable_NormalPriority = 3;
G.unstable_Profiling = null;
G.unstable_UserBlockingPriority = 2;
G.unstable_cancelCallback = function (e) {
  e.callback = null;
};
G.unstable_continueExecution = function () {
  pi || gl || ((pi = !0), ad(sd));
};
G.unstable_forceFrameRate = function (e) {
  0 > e || 125 < e
    ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      )
    : (i0 = 0 < e ? Math.floor(1e3 / e) : 5);
};
G.unstable_getCurrentPriorityLevel = function () {
  return ft;
};
G.unstable_getFirstCallbackNode = function () {
  return bn(Bn);
};
G.unstable_next = function (e) {
  switch (ft) {
    case 1:
    case 2:
    case 3:
      var t = 3;
      break;
    default:
      t = ft;
  }
  var n = ft;
  ft = t;
  try {
    return e();
  } finally {
    ft = n;
  }
};
G.unstable_pauseExecution = function () {};
G.unstable_requestPaint = function () {};
G.unstable_runWithPriority = function (e, t) {
  switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      e = 3;
  }
  var n = ft;
  ft = e;
  try {
    return t();
  } finally {
    ft = n;
  }
};
G.unstable_scheduleCallback = function (e, t, n) {
  var r = G.unstable_now();
  switch (
    (typeof n == "object" && n !== null
      ? ((n = n.delay), (n = typeof n == "number" && 0 < n ? r + n : r))
      : (n = r),
    e)
  ) {
    case 1:
      var i = -1;
      break;
    case 2:
      i = 250;
      break;
    case 5:
      i = 1073741823;
      break;
    case 4:
      i = 1e4;
      break;
    default:
      i = 5e3;
  }
  return (
    (i = n + i),
    (e = {
      id: u_++,
      callback: t,
      priorityLevel: e,
      startTime: n,
      expirationTime: i,
      sortIndex: -1,
    }),
    n > r
      ? ((e.sortIndex = n),
        rd(Er, e),
        bn(Bn) === null &&
          e === bn(Er) &&
          (ms ? (r0(vs), (vs = -1)) : (ms = !0), ld(od, n - r)))
      : ((e.sortIndex = i), rd(Bn, e), pi || gl || ((pi = !0), ad(sd))),
    e
  );
};
G.unstable_shouldYield = s0;
G.unstable_wrapCallback = function (e) {
  var t = ft;
  return function () {
    var n = ft;
    ft = t;
    try {
      return e.apply(this, arguments);
    } finally {
      ft = n;
    }
  };
};
var f_ = G.unstable_now,
  d_ = G.unstable_IdlePriority,
  h_ = G.unstable_ImmediatePriority,
  p_ = G.unstable_LowPriority,
  m_ = G.unstable_NormalPriority,
  v_ = G.unstable_Profiling,
  g_ = G.unstable_UserBlockingPriority,
  y_ = G.unstable_cancelCallback,
  b_ = G.unstable_continueExecution,
  x_ = G.unstable_forceFrameRate,
  S_ = G.unstable_getCurrentPriorityLevel,
  w_ = G.unstable_getFirstCallbackNode,
  k_ = G.unstable_next,
  C_ = G.unstable_pauseExecution,
  T_ = G.unstable_requestPaint,
  E_ = G.unstable_runWithPriority,
  R_ = G.unstable_scheduleCallback,
  P_ = G.unstable_shouldYield,
  __ = G.unstable_wrapCallback;
var I_ = "default" in Pt ? b : Pt,
  F_ = "default" in bl ? G : bl,
  qt = {},
  hb = I_,
  Kt = F_;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var pb = new Set(),
  Bs = {};
function Ri(e, t) {
  Co(e, t), Co(e + "Capture", t);
}
function Co(e, t) {
  for (Bs[e] = t, e = 0; e < t.length; e++) pb.add(t[e]);
}
var cr = !(
    typeof O > "u" ||
    typeof O.document > "u" ||
    typeof O.document.createElement > "u"
  ),
  Fd = Object.prototype.hasOwnProperty,
  L_ =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  a0 = {},
  l0 = {};
function M_(e) {
  return Fd.call(l0, e)
    ? !0
    : Fd.call(a0, e)
    ? !1
    : L_.test(e)
    ? (l0[e] = !0)
    : ((a0[e] = !0), !1);
}
function O_(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function D_(e, t, n, r) {
  if (t === null || typeof t > "u" || O_(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function kt(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var st = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    st[e] = new kt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  st[t] = new kt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  st[e] = new kt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  st[e] = new kt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    st[e] = new kt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  st[e] = new kt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  st[e] = new kt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  st[e] = new kt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  st[e] = new kt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var wh = /[\-:]([a-z])/g;
function kh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(wh, kh);
    st[t] = new kt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(wh, kh);
    st[t] = new kt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(wh, kh);
  st[t] = new kt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  st[e] = new kt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
st.xlinkHref = new kt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  st[e] = new kt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ch(e, t, n, r) {
  var i = st.hasOwnProperty(t) ? st[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (D_(t, n, i, r) && (n = null),
    r || i === null
      ? M_(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? i.type !== 3 && "" : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var hr = hb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xl = Symbol.for("react.element"),
  oo = Symbol.for("react.portal"),
  so = Symbol.for("react.fragment"),
  Th = Symbol.for("react.strict_mode"),
  Ld = Symbol.for("react.profiler"),
  mb = Symbol.for("react.provider"),
  vb = Symbol.for("react.context"),
  Eh = Symbol.for("react.forward_ref"),
  Md = Symbol.for("react.suspense"),
  Od = Symbol.for("react.suspense_list"),
  Rh = Symbol.for("react.memo"),
  Pr = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var gb = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var c0 = Symbol.iterator;
function gs(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (c0 && e[c0]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var cd,
  Pe = Object.assign;
function Ts(e) {
  if (cd === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      cd = (t && t[1]) || "";
    }
  return (
    `
` +
    cd +
    e
  );
}
var ud = !1;
function fd(e, t) {
  if (!e || ud) return "";
  ud = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (ud = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ts(e) : "";
}
function A_(e) {
  switch (e.tag) {
    case 5:
      return Ts(e.type);
    case 16:
      return Ts("Lazy");
    case 13:
      return Ts("Suspense");
    case 19:
      return Ts("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = fd(e.type, !1)), e;
    case 11:
      return (e = fd(e.type.render, !1)), e;
    case 1:
      return (e = fd(e.type, !0)), e;
    default:
      return "";
  }
}
function Dd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case so:
      return "Fragment";
    case oo:
      return "Portal";
    case Ld:
      return "Profiler";
    case Th:
      return "StrictMode";
    case Md:
      return "Suspense";
    case Od:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case vb:
        return (e.displayName || "Context") + ".Consumer";
      case mb:
        return (e._context.displayName || "Context") + ".Provider";
      case Eh:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Rh:
        return (
          (t = e.displayName || null), t !== null ? t : Dd(e.type) || "Memo"
        );
      case Pr:
        (t = e._payload), (e = e._init);
        try {
          return Dd(e(t));
        } catch {}
    }
  return null;
}
function V_(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Dd(t);
    case 8:
      return t === Th ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Hr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function yb(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function B_(e) {
  var t = yb(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Sl(e) {
  e._valueTracker || (e._valueTracker = B_(e));
}
function bb(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = yb(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n && (t.setValue(e), !0)
  );
}
function Kl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ad(e, t) {
  var n = t.checked;
  return Pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function u0(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Hr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function xb(e, t) {
  (t = t.checked), t != null && Ch(e, "checked", t, !1);
}
function Vd(e, t) {
  xb(e, t);
  var n = Hr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Bd(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Bd(e, t.type, Hr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function f0(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Bd(e, t, n) {
  (t === "number" && Kl(e.ownerDocument) === e) ||
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Es = Array.isArray;
function yo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Hr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function $d(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return Pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function d0(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (Es(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Hr(n) };
}
function Sb(e, t) {
  var n = Hr(t.value),
    r = Hr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function h0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function wb(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function zd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? wb(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var wl,
  kb = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        wl = wl || document.createElement("div"),
          wl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = wl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function $s(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _s = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  $_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(_s).forEach(function (e) {
  $_.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_s[t] = _s[e]);
  });
});
function Cb(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (_s.hasOwnProperty(e) && _s[e])
    ? ("" + t).trim()
    : t + "px";
}
function Tb(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Cb(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var z_ = Pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Nd(e, t) {
  if (t) {
    if (z_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function Hd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var jd = null;
function Ph(e) {
  return (
    (e = e.target || e.srcElement || O),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Wd = null,
  bo = null,
  xo = null;
function p0(e) {
  if ((e = ra(e))) {
    if (typeof Wd != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = kc(t)), Wd(e.stateNode, e.type, t));
  }
}
function Eb(e) {
  bo ? (xo ? xo.push(e) : (xo = [e])) : (bo = e);
}
function Rb() {
  if (bo) {
    var e = bo,
      t = xo;
    if (((xo = bo = null), p0(e), t)) for (e = 0; e < t.length; e++) p0(t[e]);
  }
}
function Pb(e, t) {
  return e(t);
}
function _b() {}
var dd = !1;
function Ib(e, t, n) {
  if (dd) return e(t, n);
  dd = !0;
  try {
    return Pb(e, t, n);
  } finally {
    (dd = !1), (bo !== null || xo !== null) && (_b(), Rb());
  }
}
function zs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = kc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var Ud = !1;
if (cr)
  try {
    (ro = {}),
      Object.defineProperty(ro, "passive", {
        get: function () {
          Ud = !0;
        },
      }),
      O.addEventListener("test", ro, ro),
      O.removeEventListener("test", ro, ro);
  } catch {
    Ud = !1;
  }
var ro;
function N_(e, t, n, r, i, o, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var Is = !1,
  ql = null,
  Ql = !1,
  Xd = null,
  H_ = {
    onError: function (e) {
      (Is = !0), (ql = e);
    },
  };
function j_(e, t, n, r, i, o, s, a, l) {
  (Is = !1), (ql = null), N_.apply(H_, arguments);
}
function W_(e, t, n, r, i, o, s, a, l) {
  if ((j_.apply(this, arguments), Is)) {
    if (!Is) throw Error(L(198));
    var c = ql;
    (Is = !1), (ql = null), Ql || ((Ql = !0), (Xd = c));
  }
}
function Pi(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), 4098 & t.flags && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Fb(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function m0(e) {
  if (Pi(e) !== e) throw Error(L(188));
}
function U_(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Pi(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return m0(i), e;
        if (o === r) return m0(i), t;
        o = o.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Lb(e) {
  return (e = U_(e)), e !== null ? Mb(e) : null;
}
function Mb(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Mb(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ob = Kt.unstable_scheduleCallback,
  v0 = Kt.unstable_cancelCallback,
  X_ = Kt.unstable_shouldYield,
  Y_ = Kt.unstable_requestPaint,
  $e = Kt.unstable_now,
  G_ = Kt.unstable_getCurrentPriorityLevel,
  _h = Kt.unstable_ImmediatePriority,
  Db = Kt.unstable_UserBlockingPriority,
  Zl = Kt.unstable_NormalPriority,
  K_ = Kt.unstable_LowPriority,
  Ab = Kt.unstable_IdlePriority,
  bc = null,
  Hn = null;
function q_(e) {
  if (Hn && typeof Hn.onCommitFiberRoot == "function")
    try {
      Hn.onCommitFiberRoot(bc, e, void 0, (128 & e.current.flags) === 128);
    } catch {}
}
var Cn = Math.clz32 ? Math.clz32 : J_,
  Q_ = Math.log,
  Z_ = Math.LN2;
function J_(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Q_(e) / Z_) | 0)) | 0;
}
var kl = 64,
  Cl = 4194304;
function Rs(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return 4194240 & e;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return 130023424 & e;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Jl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = 268435455 & n;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Rs(a)) : ((o &= s), o !== 0 && (r = Rs(o)));
  } else (s = n & ~i), s !== 0 ? (r = Rs(s)) : o !== 0 && (r = Rs(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (4194240 & o) !== 0))
  )
    return t;
  if ((4 & r && (r |= 16 & n), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Cn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function e2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function t2(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Cn(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (a & n && !(a & r)) || (i[s] = e2(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Yd(e) {
  return (
    (e = -1073741825 & e.pendingLanes),
    e !== 0 ? e : 1073741824 & e ? 1073741824 : 0
  );
}
function Vb() {
  var e = kl;
  return (kl <<= 1), !(4194240 & kl) && (kl = 64), e;
}
function hd(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ta(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Cn(t)),
    (e[t] = n);
}
function n2(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Cn(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Ih(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Cn(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var pe = 0;
function Bb(e) {
  return (e &= -e), 1 < e ? (4 < e ? (268435455 & e ? 16 : 536870912) : 4) : 1;
}
var $b,
  Fh,
  zb,
  Nb,
  Hb,
  Gd = !1,
  Tl = [],
  Or = null,
  Dr = null,
  Ar = null,
  Ns = new Map(),
  Hs = new Map(),
  Ir = [],
  r2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function g0(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Or = null;
      break;
    case "dragenter":
    case "dragleave":
      Dr = null;
      break;
    case "mouseover":
    case "mouseout":
      Ar = null;
      break;
    case "pointerover":
    case "pointerout":
      Ns.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hs.delete(t.pointerId);
  }
}
function ys(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ra(t)), t !== null && Fh(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function i2(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Or = ys(Or, e, t, n, r, i)), !0;
    case "dragenter":
      return (Dr = ys(Dr, e, t, n, r, i)), !0;
    case "mouseover":
      return (Ar = ys(Ar, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Ns.set(o, ys(Ns.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Hs.set(o, ys(Hs.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function jb(e) {
  var t = gi(e.target);
  if (t !== null) {
    var n = Pi(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Fb(n)), t !== null)) {
          (e.blockedOn = t),
            Hb(e.priority, function () {
              zb(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function $l(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Kd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null)
      return (t = ra(n)), t !== null && Fh(t), (e.blockedOn = n), !1;
    n = e.nativeEvent;
    var r = new n.constructor(n.type, n);
    (jd = r), n.target.dispatchEvent(r), (jd = null), t.shift();
  }
  return !0;
}
function y0(e, t, n) {
  $l(e) && n.delete(t);
}
function o2() {
  (Gd = !1),
    Or !== null && $l(Or) && (Or = null),
    Dr !== null && $l(Dr) && (Dr = null),
    Ar !== null && $l(Ar) && (Ar = null),
    Ns.forEach(y0),
    Hs.forEach(y0);
}
function bs(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Gd ||
      ((Gd = !0),
      Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority, o2)));
}
function js(e) {
  function t(i) {
    return bs(i, e);
  }
  if (0 < Tl.length) {
    bs(Tl[0], e);
    for (var n = 1; n < Tl.length; n++) {
      var r = Tl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Or !== null && bs(Or, e),
      Dr !== null && bs(Dr, e),
      Ar !== null && bs(Ar, e),
      Ns.forEach(t),
      Hs.forEach(t),
      n = 0;
    n < Ir.length;
    n++
  )
    (r = Ir[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ir.length && ((n = Ir[0]), n.blockedOn === null); )
    jb(n), n.blockedOn === null && Ir.shift();
}
var So = hr.ReactCurrentBatchConfig,
  ec = !0;
function s2(e, t, n, r) {
  var i = pe,
    o = So.transition;
  So.transition = null;
  try {
    (pe = 1), Lh(e, t, n, r);
  } finally {
    (pe = i), (So.transition = o);
  }
}
function a2(e, t, n, r) {
  var i = pe,
    o = So.transition;
  So.transition = null;
  try {
    (pe = 4), Lh(e, t, n, r);
  } finally {
    (pe = i), (So.transition = o);
  }
}
function Lh(e, t, n, r) {
  if (ec) {
    var i = Kd(e, t, n, r);
    if (i === null) xd(e, t, r, tc, n), g0(e, r);
    else if (i2(i, e, t, n, r)) r.stopPropagation();
    else if ((g0(e, r), 4 & t && -1 < r2.indexOf(e))) {
      for (; i !== null; ) {
        var o = ra(i);
        if (
          (o !== null && $b(o),
          (o = Kd(e, t, n, r)),
          o === null && xd(e, t, r, tc, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else xd(e, t, r, null, n);
  }
}
var tc = null;
function Kd(e, t, n, r) {
  if (((tc = null), (e = Ph(r)), (e = gi(e)), e !== null))
    if (((t = Pi(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Fb(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (tc = e), null;
}
function Wb(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (G_()) {
        case _h:
          return 1;
        case Db:
          return 4;
        case Zl:
        case K_:
          return 16;
        case Ab:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Lr = null,
  Mh = null,
  zl = null;
function Ub() {
  if (zl) return zl;
  var e,
    t,
    n = Mh,
    r = n.length,
    i = "value" in Lr ? Lr.value : Lr.textContent,
    o = i.length;
  for (e = 0; e < r && n[e] === i[e]; e++);
  var s = r - e;
  for (t = 1; t <= s && n[r - t] === i[o - t]; t++);
  return (zl = i.slice(e, 1 < t ? 1 - t : void 0));
}
function Nl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function El() {
  return !0;
}
function b0() {
  return !1;
}
function Qt(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? El
        : b0),
      (this.isPropagationStopped = b0),
      this
    );
  }
  return (
    Pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = El));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = El));
      },
      persist: function () {},
      isPersistent: El,
    }),
    t
  );
}
var pd,
  md,
  xs,
  Fo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Oh = Qt(Fo),
  na = Pe({}, Fo, { view: 0, detail: 0 }),
  l2 = Qt(na),
  xc = Pe({}, na, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Dh,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== xs &&
            (xs && e.type === "mousemove"
              ? ((pd = e.screenX - xs.screenX), (md = e.screenY - xs.screenY))
              : (md = pd = 0),
            (xs = e)),
          pd);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : md;
    },
  }),
  x0 = Qt(xc),
  c2 = Pe({}, xc, { dataTransfer: 0 }),
  u2 = Qt(c2),
  f2 = Pe({}, na, { relatedTarget: 0 }),
  vd = Qt(f2),
  d2 = Pe({}, Fo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  h2 = Qt(d2),
  p2 = Pe({}, Fo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : O.clipboardData;
    },
  }),
  m2 = Qt(p2),
  v2 = Pe({}, Fo, { data: 0 }),
  S0 = Qt(v2),
  g2 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  y2 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  b2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function x2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = b2[e]) && !!t[e];
}
function Dh() {
  return x2;
}
var S2 = Pe({}, na, {
    key: function (e) {
      if (e.key) {
        var t = g2[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Nl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? y2[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Dh,
    charCode: function (e) {
      return e.type === "keypress" ? Nl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Nl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  w2 = Qt(S2),
  k2 = Pe({}, xc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  w0 = Qt(k2),
  C2 = Pe({}, na, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Dh,
  }),
  T2 = Qt(C2),
  E2 = Pe({}, Fo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  R2 = Qt(E2),
  P2 = Pe({}, xc, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  _2 = Qt(P2),
  I2 = [9, 13, 27, 32],
  Ah = cr && "CompositionEvent" in O,
  Fs = null;
cr && "documentMode" in document && (Fs = document.documentMode);
var F2 = cr && "TextEvent" in O && !Fs,
  Xb = cr && (!Ah || (Fs && 8 < Fs && 11 >= Fs)),
  k0 = String.fromCharCode(32),
  C0 = !1;
function Yb(e, t) {
  switch (e) {
    case "keyup":
      return I2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Gb(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ao = !1;
function L2(e, t) {
  switch (e) {
    case "compositionend":
      return Gb(t);
    case "keypress":
      return t.which !== 32 ? null : ((C0 = !0), k0);
    case "textInput":
      return (e = t.data), e === k0 && C0 ? null : e;
    default:
      return null;
  }
}
function M2(e, t) {
  if (ao)
    return e === "compositionend" || (!Ah && Yb(e, t))
      ? ((e = Ub()), (zl = Mh = Lr = null), (ao = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Xb && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var O2 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function T0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!O2[e.type] : t === "textarea";
}
function Kb(e, t, n, r) {
  Eb(r),
    (t = nc(t, "onChange")),
    0 < t.length &&
      ((n = new Oh("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ls = null,
  Ws = null;
function D2(e) {
  sx(e, 0);
}
function Sc(e) {
  var t = uo(e);
  if (bb(t)) return e;
}
function A2(e, t) {
  if (e === "change") return t;
}
var qb = !1;
cr &&
  (cr
    ? ((Pl = "oninput" in document),
      Pl ||
        ((gd = document.createElement("div")),
        gd.setAttribute("oninput", "return;"),
        (Pl = typeof gd.oninput == "function")),
      (Rl = Pl))
    : (Rl = !1),
  (qb = Rl && (!document.documentMode || 9 < document.documentMode)));
var Rl, Pl, gd;
function E0() {
  Ls && (Ls.detachEvent("onpropertychange", Qb), (Ws = Ls = null));
}
function Qb(e) {
  if (e.propertyName === "value" && Sc(Ws)) {
    var t = [];
    Kb(t, Ws, e, Ph(e)), Ib(D2, t);
  }
}
function V2(e, t, n) {
  e === "focusin"
    ? (E0(), (Ls = t), (Ws = n), Ls.attachEvent("onpropertychange", Qb))
    : e === "focusout" && E0();
}
function B2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Sc(Ws);
}
function $2(e, t) {
  if (e === "click") return Sc(t);
}
function z2(e, t) {
  if (e === "input" || e === "change") return Sc(t);
}
function N2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var En = typeof Object.is == "function" ? Object.is : N2;
function Us(e, t) {
  if (En(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Fd.call(t, i) || !En(e[i], t[i])) return !1;
  }
  return !0;
}
function R0(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function P0(e, t) {
  var n = R0(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = R0(n);
  }
}
function Zb(e, t) {
  return (
    !(!e || !t) &&
    (e === t ||
      ((!e || e.nodeType !== 3) &&
        (t && t.nodeType === 3
          ? Zb(e, t.parentNode)
          : "contains" in e
          ? e.contains(t)
          : !!e.compareDocumentPosition &&
            !!(16 & e.compareDocumentPosition(t)))))
  );
}
function Jb() {
  for (var e = O, t = Kl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (!n) break;
    (e = t.contentWindow), (t = Kl(e.document));
  }
  return t;
}
function Vh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function H2(e) {
  var t = Jb(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Zb(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Vh(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || O),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = P0(n, o));
        var s = P0(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var j2 = cr && "documentMode" in document && 11 >= document.documentMode,
  lo = null,
  qd = null,
  Ms = null,
  Qd = !1;
function _0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Qd ||
    lo == null ||
    lo !== Kl(r) ||
    ((r = lo),
    "selectionStart" in r && Vh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          O
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ms && Us(Ms, r)) ||
      ((Ms = r),
      (r = nc(qd, "onSelect")),
      0 < r.length &&
        ((t = new Oh("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = lo))));
}
function _l(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var co = {
    animationend: _l("Animation", "AnimationEnd"),
    animationiteration: _l("Animation", "AnimationIteration"),
    animationstart: _l("Animation", "AnimationStart"),
    transitionend: _l("Transition", "TransitionEnd"),
  },
  yd = {},
  ex = {};
cr &&
  ((ex = document.createElement("div").style),
  "AnimationEvent" in O ||
    (delete co.animationend.animation,
    delete co.animationiteration.animation,
    delete co.animationstart.animation),
  "TransitionEvent" in O || delete co.transitionend.transition);
function wc(e) {
  if (yd[e]) return yd[e];
  if (!co[e]) return e;
  var t,
    n = co[e];
  for (t in n) if (n.hasOwnProperty(t) && t in ex) return (yd[e] = n[t]);
  return e;
}
var tx = wc("animationend"),
  nx = wc("animationiteration"),
  rx = wc("animationstart"),
  ix = wc("transitionend"),
  ox = new Map(),
  I0 =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Wr(e, t) {
  ox.set(e, t), Ri(t, [e]);
}
for (Il = 0; Il < I0.length; Il++)
  (Fl = I0[Il]),
    (F0 = Fl.toLowerCase()),
    (L0 = Fl[0].toUpperCase() + Fl.slice(1)),
    Wr(F0, "on" + L0);
var Fl, F0, L0, Il;
Wr(tx, "onAnimationEnd");
Wr(nx, "onAnimationIteration");
Wr(rx, "onAnimationStart");
Wr("dblclick", "onDoubleClick");
Wr("focusin", "onFocus");
Wr("focusout", "onBlur");
Wr(ix, "onTransitionEnd");
Co("onMouseEnter", ["mouseout", "mouseover"]);
Co("onMouseLeave", ["mouseout", "mouseover"]);
Co("onPointerEnter", ["pointerout", "pointerover"]);
Co("onPointerLeave", ["pointerout", "pointerover"]);
Ri(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ri(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ri("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ri(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ri(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ri(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ps =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  W2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ps));
function M0(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), W_(r, t, void 0, e), (e.currentTarget = null);
}
function sx(e, t) {
  t = (4 & t) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          M0(i, a, c), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          M0(i, a, c), (o = l);
        }
    }
  }
  if (Ql) throw ((e = Xd), (Ql = !1), (Xd = null), e);
}
function Se(e, t) {
  var n = t[nh];
  n === void 0 && (n = t[nh] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ax(t, e, 2, !1), n.add(r));
}
function bd(e, t, n) {
  var r = 0;
  t && (r |= 4), ax(n, e, r, t);
}
var Ll = "_reactListening" + Math.random().toString(36).slice(2);
function Xs(e) {
  if (!e[Ll]) {
    (e[Ll] = !0),
      pb.forEach(function (n) {
        n !== "selectionchange" && (W2.has(n) || bd(n, !1, e), bd(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ll] || ((t[Ll] = !0), bd("selectionchange", !1, t));
  }
}
function ax(e, t, n, r) {
  switch (Wb(t)) {
    case 1:
      var i = s2;
      break;
    case 4:
      i = a2;
      break;
    default:
      i = Lh;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ud ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function xd(e, t, n, r, i) {
  var o = r;
  if (!(1 & t) && !(2 & t) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = gi(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Ib(function () {
    var c = o,
      u = Ph(n),
      f = [];
    e: {
      var d = ox.get(e);
      if (d !== void 0) {
        var m = Oh,
          y = e;
        switch (e) {
          case "keypress":
            if (Nl(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = w2;
            break;
          case "focusin":
            (y = "focus"), (m = vd);
            break;
          case "focusout":
            (y = "blur"), (m = vd);
            break;
          case "beforeblur":
          case "afterblur":
            m = vd;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = x0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = u2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = T2;
            break;
          case tx:
          case nx:
          case rx:
            m = h2;
            break;
          case ix:
            m = R2;
            break;
          case "scroll":
            m = l2;
            break;
          case "wheel":
            m = _2;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = m2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = w0;
        }
        var g = (4 & t) !== 0,
          x = !g && e === "scroll",
          p = g ? (d !== null ? d + "Capture" : null) : d;
        g = [];
        for (var h, v = c; v !== null; ) {
          h = v;
          var S = h.stateNode;
          if (
            (h.tag === 5 &&
              S !== null &&
              ((h = S),
              p !== null && ((S = zs(v, p)), S != null && g.push(Ys(v, S, h)))),
            x)
          )
            break;
          v = v.return;
        }
        0 < g.length &&
          ((d = new m(d, y, null, n, u)), f.push({ event: d, listeners: g }));
      }
    }
    if (!(7 & t)) {
      if (
        ((d = e === "mouseover" || e === "pointerover"),
        (m = e === "mouseout" || e === "pointerout"),
        (!d ||
          n === jd ||
          !(y = n.relatedTarget || n.fromElement) ||
          (!gi(y) && !y[ur])) &&
          (m || d) &&
          ((d =
            u.window === u
              ? u
              : (d = u.ownerDocument)
              ? d.defaultView || d.parentWindow
              : O),
          m
            ? ((y = n.relatedTarget || n.toElement),
              (m = c),
              (y = y ? gi(y) : null),
              y !== null &&
                ((x = Pi(y)), y !== x || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((m = null), (y = c)),
          m !== y))
      ) {
        if (
          ((g = x0),
          (S = "onMouseLeave"),
          (p = "onMouseEnter"),
          (v = "mouse"),
          (e !== "pointerout" && e !== "pointerover") ||
            ((g = w0),
            (S = "onPointerLeave"),
            (p = "onPointerEnter"),
            (v = "pointer")),
          (x = m == null ? d : uo(m)),
          (h = y == null ? d : uo(y)),
          (d = new g(S, v + "leave", m, n, u)),
          (d.target = x),
          (d.relatedTarget = h),
          (S = null),
          gi(u) === c &&
            ((g = new g(p, v + "enter", y, n, u)),
            (g.target = h),
            (g.relatedTarget = x),
            (S = g)),
          (x = S),
          m && y)
        )
          e: {
            for (g = m, p = y, v = 0, h = g; h; h = io(h)) v++;
            for (h = 0, S = p; S; S = io(S)) h++;
            for (; 0 < v - h; ) (g = io(g)), v--;
            for (; 0 < h - v; ) (p = io(p)), h--;
            for (; v--; ) {
              if (g === p || (p !== null && g === p.alternate)) break e;
              (g = io(g)), (p = io(p));
            }
            g = null;
          }
        else g = null;
        m !== null && O0(f, d, m, g, !1),
          y !== null && x !== null && O0(f, x, y, g, !0);
      }
      if (
        ((d = c ? uo(c) : O),
        (m = d.nodeName && d.nodeName.toLowerCase()),
        m === "select" || (m === "input" && d.type === "file"))
      )
        var k = A2;
      else if (T0(d))
        if (qb) k = z2;
        else {
          k = B2;
          var w = V2;
        }
      else
        (m = d.nodeName) &&
          m.toLowerCase() === "input" &&
          (d.type === "checkbox" || d.type === "radio") &&
          (k = $2);
      switch (
        (k && (k = k(e, c))
          ? Kb(f, k, n, u)
          : (w && w(e, d, c),
            e === "focusout" &&
              (w = d._wrapperState) &&
              w.controlled &&
              d.type === "number" &&
              Bd(d, "number", d.value)),
        (w = c ? uo(c) : O),
        e)
      ) {
        case "focusin":
          (T0(w) || w.contentEditable === "true") &&
            ((lo = w), (qd = c), (Ms = null));
          break;
        case "focusout":
          Ms = qd = lo = null;
          break;
        case "mousedown":
          Qd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Qd = !1), _0(f, n, u);
          break;
        case "selectionchange":
          if (j2) break;
        case "keydown":
        case "keyup":
          _0(f, n, u);
      }
      var T;
      if (Ah)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        ao
          ? Yb(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (Xb &&
          n.locale !== "ko" &&
          (ao || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && ao && (T = Ub())
            : ((Lr = u),
              (Mh = "value" in Lr ? Lr.value : Lr.textContent),
              (ao = !0))),
        (w = nc(c, E)),
        0 < w.length &&
          ((E = new S0(E, e, null, n, u)),
          f.push({ event: E, listeners: w }),
          T ? (E.data = T) : ((T = Gb(n)), T !== null && (E.data = T)))),
        (T = F2 ? L2(e, n) : M2(e, n)) &&
          ((c = nc(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new S0("onBeforeInput", "beforeinput", null, n, u)),
            f.push({ event: u, listeners: c }),
            (u.data = T)));
    }
    sx(f, t);
  });
}
function Ys(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function nc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = zs(e, n)),
      o != null && r.unshift(Ys(e, o, i)),
      (o = zs(e, t)),
      o != null && r.push(Ys(e, o, i))),
      (e = e.return);
  }
  return r;
}
function io(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function O0(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((l = zs(n, o)), l != null && s.unshift(Ys(n, l, a)))
        : i || ((l = zs(n, o)), l != null && s.push(Ys(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var U2 = /\r\n?/g,
  X2 = /\u0000|\uFFFD/g;
function D0(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      U2,
      `
`
    )
    .replace(X2, "");
}
function Ml(e, t, n) {
  if (((t = D0(t)), D0(e) !== t && n)) throw Error(L(425));
}
function rc() {}
var Zd = null,
  Jd = null;
function eh(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var th = typeof setTimeout == "function" ? setTimeout : void 0,
  Y2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  A0 = typeof Promise == "function" ? Promise : void 0,
  G2 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof A0 < "u"
      ? function (e) {
          return A0.resolve(null).then(e).catch(K2);
        }
      : th;
function K2(e) {
  setTimeout(function () {
    throw e;
  });
}
function Sd(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), js(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  js(t);
}
function Vr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function V0(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Lo = Math.random().toString(36).slice(2),
  Nn = "__reactFiber$" + Lo,
  Gs = "__reactProps$" + Lo,
  ur = "__reactContainer$" + Lo,
  nh = "__reactEvents$" + Lo,
  q2 = "__reactListeners$" + Lo,
  Q2 = "__reactHandles$" + Lo;
function gi(e) {
  var t = e[Nn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ur] || n[Nn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = V0(e); e !== null; ) {
          if ((n = e[Nn])) return n;
          e = V0(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ra(e) {
  return (
    (e = e[Nn] || e[ur]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function uo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function kc(e) {
  return e[Gs] || null;
}
var rh = [],
  fo = -1;
function Ur(e) {
  return { current: e };
}
function we(e) {
  0 > fo || ((e.current = rh[fo]), (rh[fo] = null), fo--);
}
function ve(e, t) {
  fo++, (rh[fo] = e.current), (e.current = t);
}
var jr = {},
  mt = Ur(jr),
  Ot = Ur(!1),
  wi = jr;
function To(e, t) {
  var n = e.type.contextTypes;
  if (!n) return jr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i,
    o = {};
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Dt(e) {
  return (e = e.childContextTypes), e != null;
}
function ic() {
  we(Ot), we(mt);
}
function B0(e, t, n) {
  if (mt.current !== jr) throw Error(L(168));
  ve(mt, t), ve(Ot, n);
}
function lx(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(L(108, V_(e) || "Unknown", i));
  return Pe({}, n, r);
}
function oc(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || jr),
    (wi = mt.current),
    ve(mt, e),
    ve(Ot, Ot.current),
    !0
  );
}
function $0(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = lx(e, t, wi)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      we(Ot),
      we(mt),
      ve(mt, e))
    : we(Ot),
    ve(Ot, n);
}
var or = null,
  Cc = !1,
  wd = !1;
function cx(e) {
  or === null ? (or = [e]) : or.push(e);
}
function Z2(e) {
  (Cc = !0), cx(e);
}
function Xr() {
  if (!wd && or !== null) {
    wd = !0;
    var e = 0,
      t = pe;
    try {
      var n = or;
      for (pe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (or = null), (Cc = !1);
    } catch (i) {
      throw (or !== null && (or = or.slice(e + 1)), Ob(_h, Xr), i);
    } finally {
      (pe = t), (wd = !1);
    }
  }
  return null;
}
var ho = [],
  po = 0,
  sc = null,
  ac = 0,
  cn = [],
  un = 0,
  ki = null,
  sr = 1,
  ar = "";
function mi(e, t) {
  (ho[po++] = ac), (ho[po++] = sc), (sc = e), (ac = t);
}
function ux(e, t, n) {
  (cn[un++] = sr), (cn[un++] = ar), (cn[un++] = ki), (ki = e);
  var r = sr;
  e = ar;
  var i = 32 - Cn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Cn(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (sr = (1 << (32 - Cn(t) + i)) | (n << i) | r),
      (ar = o + e);
  } else (sr = (1 << o) | (n << i) | r), (ar = e);
}
function Bh(e) {
  e.return !== null && (mi(e, 1), ux(e, 1, 0));
}
function $h(e) {
  for (; e === sc; )
    (sc = ho[--po]), (ho[po] = null), (ac = ho[--po]), (ho[po] = null);
  for (; e === ki; )
    (ki = cn[--un]),
      (cn[un] = null),
      (ar = cn[--un]),
      (cn[un] = null),
      (sr = cn[--un]),
      (cn[un] = null);
}
var Gt = null,
  Yt = null,
  Te = !1,
  kn = null;
function fx(e, t) {
  var n = fn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function z0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null && ((e.stateNode = t), (Gt = e), (Yt = Vr(t.firstChild)), !0)
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null && ((e.stateNode = t), (Gt = e), (Yt = null), !0)
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null &&
          ((n = ki !== null ? { id: sr, overflow: ar } : null),
          (e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824,
          }),
          (n = fn(18, null, null, 0)),
          (n.stateNode = t),
          (n.return = e),
          (e.child = n),
          (Gt = e),
          (Yt = null),
          !0)
      );
    default:
      return !1;
  }
}
function ih(e) {
  return (1 & e.mode) !== 0 && (128 & e.flags) === 0;
}
function oh(e) {
  if (Te) {
    var t = Yt;
    if (t) {
      var n = t;
      if (!z0(e, t)) {
        if (ih(e)) throw Error(L(418));
        t = Vr(n.nextSibling);
        var r = Gt;
        t && z0(e, t)
          ? fx(r, n)
          : ((e.flags = (-4097 & e.flags) | 2), (Te = !1), (Gt = e));
      }
    } else {
      if (ih(e)) throw Error(L(418));
      (e.flags = (-4097 & e.flags) | 2), (Te = !1), (Gt = e);
    }
  }
}
function N0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Gt = e;
}
function Ol(e) {
  if (e !== Gt) return !1;
  if (!Te) return N0(e), (Te = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !eh(e.type, e.memoizedProps))),
    t && (t = Yt))
  ) {
    if (ih(e)) throw (dx(), Error(L(418)));
    for (; t; ) fx(e, t), (t = Vr(t.nextSibling));
  }
  if ((N0(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Yt = Vr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Yt = null;
    }
  } else Yt = Gt ? Vr(e.stateNode.nextSibling) : null;
  return !0;
}
function dx() {
  for (var e = Yt; e; ) e = Vr(e.nextSibling);
}
function Eo() {
  (Yt = Gt = null), (Te = !1);
}
function zh(e) {
  kn === null ? (kn = [e]) : kn.push(e);
}
var J2 = hr.ReactCurrentBatchConfig;
function Sn(e, t) {
  if (e && e.defaultProps) {
    (t = Pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var lc = Ur(null),
  cc = null,
  mo = null,
  Nh = null;
function Hh() {
  Nh = mo = cc = null;
}
function jh(e) {
  var t = lc.current;
  we(lc), (e._currentValue = t);
}
function sh(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function wo(e, t) {
  (cc = e),
    (Nh = mo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Mt = !0), (e.firstContext = null));
}
function hn(e) {
  var t = e._currentValue;
  if (Nh !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), mo === null)) {
      if (cc === null) throw Error(L(308));
      (mo = e), (cc.dependencies = { lanes: 0, firstContext: e });
    } else mo = mo.next = e;
  return t;
}
var yi = null;
function Wh(e) {
  yi === null ? (yi = [e]) : yi.push(e);
}
function hx(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Wh(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    fr(e, r)
  );
}
function fr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var _r = !1;
function Uh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function px(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function lr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Br(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), 2 & le)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      fr(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Wh(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    fr(e, n)
  );
}
function Hl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (4194240 & n) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ih(e, n);
  }
}
function H0(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r === null || ((r = r.updateQueue), n !== r))
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  else {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
  }
}
function uc(e, t, n, r) {
  var i = e.updateQueue;
  _r = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), s === null ? (o = c) : (s.next = c), (s = l);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (a = u.lastBaseUpdate),
      a !== s &&
        (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
        (u.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (u = c = l = null), (a = o);
    do {
      var d = a.lane,
        m = a.eventTime;
      if ((r & d) === d) {
        u !== null &&
          (u = u.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            g = a;
          switch (((d = t), (m = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == "function")) {
                f = y.call(m, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (-65537 & y.flags) | 128;
            case 0:
              if (
                ((y = g.payload),
                (d = typeof y == "function" ? y.call(m, f, d) : y),
                d == null)
              )
                break e;
              f = Pe({}, f, d);
              break e;
            case 2:
              _r = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((c = u = m), (l = f)) : (u = u.next = m),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (u === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = u),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Ti |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function j0(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(L(191, i));
        i.call(r);
      }
    }
}
var mx = new hb.Component().refs;
function ah(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Tc = {
  isMounted: function (e) {
    return !!(e = e._reactInternals) && Pi(e) === e;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = wt(),
      i = zr(e),
      o = lr(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Br(e, o, i)),
      t !== null && (Tn(t, e, i, r), Hl(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = wt(),
      i = zr(e),
      o = lr(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Br(e, o, i)),
      t !== null && (Tn(t, e, i, r), Hl(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = wt(),
      r = zr(e),
      i = lr(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Br(e, i, r)),
      t !== null && (Tn(t, e, r, n), Hl(t, e, r));
  },
};
function W0(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : !t.prototype ||
        !t.prototype.isPureReactComponent ||
        !Us(n, r) ||
        !Us(i, o)
  );
}
function vx(e, t, n) {
  var r = !1,
    i = jr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = hn(o))
      : ((i = Dt(t) ? wi : mt.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? To(e, i) : jr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Tc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function U0(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Tc.enqueueReplaceState(t, t.state, null);
}
function lh(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = mx), Uh(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = hn(o))
    : ((o = Dt(t) ? wi : mt.current), (i.context = To(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ah(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Tc.enqueueReplaceState(i, i.state, null),
      uc(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ss(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === mx && (a = i.refs = {}),
              s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Dl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function X0(e) {
  var t = e._init;
  return t(e._payload);
}
function gx(e) {
  function t(p, h) {
    if (e) {
      var v = p.deletions;
      v === null ? ((p.deletions = [h]), (p.flags |= 16)) : v.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = Nr(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, h, v) {
    return (
      (p.index = v),
      e
        ? ((v = p.alternate),
          v !== null
            ? ((v = v.index), v < h ? ((p.flags |= 2), h) : v)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, h, v, S) {
    return h === null || h.tag !== 6
      ? ((h = _d(v, p.mode, S)), (h.return = p), h)
      : ((h = i(h, v)), (h.return = p), h);
  }
  function l(p, h, v, S) {
    var k = v.type;
    return k === so
      ? u(p, h, v.props.children, S, v.key)
      : h !== null &&
        (h.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Pr &&
            X0(k) === h.type))
      ? ((S = i(h, v.props)), (S.ref = Ss(p, h, v)), (S.return = p), S)
      : ((S = Gl(v.type, v.key, v.props, null, p.mode, S)),
        (S.ref = Ss(p, h, v)),
        (S.return = p),
        S);
  }
  function c(p, h, v, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== v.containerInfo ||
      h.stateNode.implementation !== v.implementation
      ? ((h = Id(v, p.mode, S)), (h.return = p), h)
      : ((h = i(h, v.children || [])), (h.return = p), h);
  }
  function u(p, h, v, S, k) {
    return h === null || h.tag !== 7
      ? ((h = Si(v, p.mode, S, k)), (h.return = p), h)
      : ((h = i(h, v)), (h.return = p), h);
  }
  function f(p, h, v) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = _d("" + h, p.mode, v)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case xl:
          return (
            (v = Gl(h.type, h.key, h.props, null, p.mode, v)),
            (v.ref = Ss(p, null, h)),
            (v.return = p),
            v
          );
        case oo:
          return (h = Id(h, p.mode, v)), (h.return = p), h;
        case Pr:
          var S = h._init;
          return f(p, S(h._payload), v);
      }
      if (Es(h) || gs(h))
        return (h = Si(h, p.mode, v, null)), (h.return = p), h;
      Dl(p, h);
    }
    return null;
  }
  function d(p, h, v, S) {
    var k = h !== null ? h.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return k !== null ? null : a(p, h, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case xl:
          return v.key === k ? l(p, h, v, S) : null;
        case oo:
          return v.key === k ? c(p, h, v, S) : null;
        case Pr:
          return (k = v._init), d(p, h, k(v._payload), S);
      }
      if (Es(v) || gs(v)) return k !== null ? null : u(p, h, v, S, null);
      Dl(p, v);
    }
    return null;
  }
  function m(p, h, v, S, k) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (p = p.get(v) || null), a(h, p, "" + S, k);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case xl:
          return (p = p.get(S.key === null ? v : S.key) || null), l(h, p, S, k);
        case oo:
          return (p = p.get(S.key === null ? v : S.key) || null), c(h, p, S, k);
        case Pr:
          var w = S._init;
          return m(p, h, v, w(S._payload), k);
      }
      if (Es(S) || gs(S)) return (p = p.get(v) || null), u(h, p, S, k, null);
      Dl(h, S);
    }
    return null;
  }
  function y(p, h, v, S) {
    for (
      var k = null, w = null, T = h, E = (h = 0), F = null;
      T !== null && E < v.length;
      E++
    ) {
      T.index > E ? ((F = T), (T = null)) : (F = T.sibling);
      var I = d(p, T, v[E], S);
      if (I === null) {
        T === null && (T = F);
        break;
      }
      e && T && I.alternate === null && t(p, T),
        (h = o(I, h, E)),
        w === null ? (k = I) : (w.sibling = I),
        (w = I),
        (T = F);
    }
    if (E === v.length) return n(p, T), Te && mi(p, E), k;
    if (T === null) {
      for (; E < v.length; E++)
        (T = f(p, v[E], S)),
          T !== null &&
            ((h = o(T, h, E)), w === null ? (k = T) : (w.sibling = T), (w = T));
      return Te && mi(p, E), k;
    }
    for (T = r(p, T); E < v.length; E++)
      (F = m(T, p, E, v[E], S)),
        F !== null &&
          (e && F.alternate !== null && T.delete(F.key === null ? E : F.key),
          (h = o(F, h, E)),
          w === null ? (k = F) : (w.sibling = F),
          (w = F));
    return (
      e &&
        T.forEach(function (z) {
          return t(p, z);
        }),
      Te && mi(p, E),
      k
    );
  }
  function g(p, h, v, S) {
    var k = gs(v);
    if (typeof k != "function") throw Error(L(150));
    if (((v = k.call(v)), v == null)) throw Error(L(151));
    for (
      var w = (k = null), T = h, E = (h = 0), F = null, I = v.next();
      T !== null && !I.done;
      E++, I = v.next()
    ) {
      T.index > E ? ((F = T), (T = null)) : (F = T.sibling);
      var z = d(p, T, I.value, S);
      if (z === null) {
        T === null && (T = F);
        break;
      }
      e && T && z.alternate === null && t(p, T),
        (h = o(z, h, E)),
        w === null ? (k = z) : (w.sibling = z),
        (w = z),
        (T = F);
    }
    if (I.done) return n(p, T), Te && mi(p, E), k;
    if (T === null) {
      for (; !I.done; E++, I = v.next())
        (I = f(p, I.value, S)),
          I !== null &&
            ((h = o(I, h, E)), w === null ? (k = I) : (w.sibling = I), (w = I));
      return Te && mi(p, E), k;
    }
    for (T = r(p, T); !I.done; E++, I = v.next())
      (I = m(T, p, E, I.value, S)),
        I !== null &&
          (e && I.alternate !== null && T.delete(I.key === null ? E : I.key),
          (h = o(I, h, E)),
          w === null ? (k = I) : (w.sibling = I),
          (w = I));
    return (
      e &&
        T.forEach(function ($) {
          return t(p, $);
        }),
      Te && mi(p, E),
      k
    );
  }
  function x(p, h, v, S) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === so &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case xl:
          e: {
            for (var k = v.key, w = h; w !== null; ) {
              if (w.key === k) {
                if (((k = v.type), k === so)) {
                  if (w.tag === 7) {
                    n(p, w.sibling),
                      (h = i(w, v.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  w.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Pr &&
                    X0(k) === w.type)
                ) {
                  n(p, w.sibling),
                    (h = i(w, v.props)),
                    (h.ref = Ss(p, w, v)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, w);
                break;
              }
              t(p, w), (w = w.sibling);
            }
            v.type === so
              ? ((h = Si(v.props.children, p.mode, S, v.key)),
                (h.return = p),
                (p = h))
              : ((S = Gl(v.type, v.key, v.props, null, p.mode, S)),
                (S.ref = Ss(p, h, v)),
                (S.return = p),
                (p = S));
          }
          return s(p);
        case oo:
          e: {
            for (w = v.key; h !== null; ) {
              if (h.key === w) {
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === v.containerInfo &&
                  h.stateNode.implementation === v.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, v.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, h);
                break;
              }
              t(p, h), (h = h.sibling);
            }
            (h = Id(v, p.mode, S)), (h.return = p), (p = h);
          }
          return s(p);
        case Pr:
          return (w = v._init), x(p, h, w(v._payload), S);
      }
      if (Es(v)) return y(p, h, v, S);
      if (gs(v)) return g(p, h, v, S);
      Dl(p, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, v)), (h.return = p), (p = h))
          : (n(p, h), (h = _d(v, p.mode, S)), (h.return = p), (p = h)),
        s(p))
      : n(p, h);
  }
  return x;
}
var Ro = gx(!0),
  yx = gx(!1),
  ia = {},
  jn = Ur(ia),
  Ks = Ur(ia),
  qs = Ur(ia);
function bi(e) {
  if (e === ia) throw Error(L(174));
  return e;
}
function Xh(e, t) {
  switch ((ve(qs, t), ve(Ks, e), ve(jn, ia), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : zd(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = zd(t, e));
  }
  we(jn), ve(jn, t);
}
function Po() {
  we(jn), we(Ks), we(qs);
}
function bx(e) {
  bi(qs.current);
  var t = bi(jn.current),
    n = zd(t, e.type);
  t !== n && (ve(Ks, e), ve(jn, n));
}
function Yh(e) {
  Ks.current === e && (we(jn), we(Ks));
}
var Ee = Ur(0);
function fc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (128 & t.flags) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var kd = [];
function Gh() {
  for (var e = 0; e < kd.length; e++)
    kd[e]._workInProgressVersionPrimary = null;
  kd.length = 0;
}
var jl = hr.ReactCurrentDispatcher,
  Cd = hr.ReactCurrentBatchConfig,
  Ci = 0,
  Re = null,
  Ye = null,
  Qe = null,
  dc = !1,
  Os = !1,
  Qs = 0,
  eI = 0;
function dt() {
  throw Error(L(321));
}
function Kh(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!En(e[n], t[n])) return !1;
  return !0;
}
function qh(e, t, n, r, i, o) {
  if (
    ((Ci = o),
    (Re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (jl.current = e === null || e.memoizedState === null ? iI : oI),
    (e = n(r, i)),
    Os)
  ) {
    o = 0;
    do {
      if (((Os = !1), (Qs = 0), 25 <= o)) throw Error(L(301));
      (o += 1),
        (Qe = Ye = null),
        (t.updateQueue = null),
        (jl.current = sI),
        (e = n(r, i));
    } while (Os);
  }
  if (
    ((jl.current = hc),
    (t = Ye !== null && Ye.next !== null),
    (Ci = 0),
    (Qe = Ye = Re = null),
    (dc = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function Qh() {
  var e = Qs !== 0;
  return (Qs = 0), e;
}
function zn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Qe === null ? (Re.memoizedState = Qe = e) : (Qe = Qe.next = e), Qe;
}
function pn() {
  if (Ye === null) {
    var e = Re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ye.next;
  var t = Qe === null ? Re.memoizedState : Qe.next;
  if (t !== null) (Qe = t), (Ye = e);
  else {
    if (e === null) throw Error(L(310));
    (Ye = e),
      (e = {
        memoizedState: Ye.memoizedState,
        baseState: Ye.baseState,
        baseQueue: Ye.baseQueue,
        queue: Ye.queue,
        next: null,
      }),
      Qe === null ? (Re.memoizedState = Qe = e) : (Qe = Qe.next = e);
  }
  return Qe;
}
function Zs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Td(e) {
  var t = pn(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = Ye,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      c = o;
    do {
      var u = c.lane;
      if ((Ci & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (Re.lanes |= u),
          (Ti |= u);
      }
      c = c.next;
    } while (c !== null && c !== o);
    l === null ? (s = r) : (l.next = a),
      En(r, t.memoizedState) || (Mt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Re.lanes |= o), (Ti |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ed(e) {
  var t = pn(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    En(o, t.memoizedState) || (Mt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function xx() {}
function Sx(e, t) {
  var n = Re,
    r = pn(),
    i = t(),
    o = !En(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Mt = !0)),
    (r = r.queue),
    Zh(Cx.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Qe !== null && 1 & Qe.memoizedState.tag))
  ) {
    if (
      ((n.flags |= 2048),
      Js(9, kx.bind(null, n, r, i, t), void 0, null),
      Ze === null)
    )
      throw Error(L(349));
    30 & Ci || wx(n, t, i);
  }
  return i;
}
function wx(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Re.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function kx(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Tx(t) && Ex(e);
}
function Cx(e, t, n) {
  return n(function () {
    Tx(t) && Ex(e);
  });
}
function Tx(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !En(e, n);
  } catch {
    return !0;
  }
}
function Ex(e) {
  var t = fr(e, 1);
  t !== null && Tn(t, e, 1, -1);
}
function Y0(e) {
  var t = zn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = rI.bind(null, Re, e)),
    [t.memoizedState, e]
  );
}
function Js(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Re.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Rx() {
  return pn().memoizedState;
}
function Wl(e, t, n, r) {
  var i = zn();
  (Re.flags |= e),
    (i.memoizedState = Js(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ec(e, t, n, r) {
  var i = pn();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ye !== null) {
    var s = Ye.memoizedState;
    if (((o = s.destroy), r !== null && Kh(r, s.deps))) {
      i.memoizedState = Js(t, n, o, r);
      return;
    }
  }
  (Re.flags |= e), (i.memoizedState = Js(1 | t, n, o, r));
}
function G0(e, t) {
  return Wl(8390656, 8, e, t);
}
function Zh(e, t) {
  return Ec(2048, 8, e, t);
}
function Px(e, t) {
  return Ec(4, 2, e, t);
}
function _x(e, t) {
  return Ec(4, 4, e, t);
}
function Ix(e, t) {
  return typeof t == "function"
    ? ((e = e()),
      t(e),
      function () {
        t(null);
      })
    : t != null
    ? ((e = e()),
      (t.current = e),
      function () {
        t.current = null;
      })
    : void 0;
}
function Fx(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ec(4, 4, Ix.bind(null, t, e), n)
  );
}
function Jh() {}
function Lx(e, t) {
  var n = pn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Kh(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Mx(e, t) {
  var n = pn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Kh(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ox(e, t, n) {
  return 21 & Ci
    ? (En(n, t) || ((n = Vb()), (Re.lanes |= n), (Ti |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Mt = !0)), (e.memoizedState = n));
}
function tI(e, t) {
  var n = pe;
  (pe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Cd.transition;
  Cd.transition = {};
  try {
    e(!1), t();
  } finally {
    (pe = n), (Cd.transition = r);
  }
}
function Dx() {
  return pn().memoizedState;
}
function nI(e, t, n) {
  var r = zr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ax(e))
  )
    Vx(t, n);
  else if (((n = hx(e, t, n, r)), n !== null)) {
    var i = wt();
    Tn(n, e, r, i), Bx(n, t, r);
  }
}
function rI(e, t, n) {
  var r = zr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ax(e)) Vx(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), En(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Wh(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {}
    (n = hx(e, t, i, r)),
      n !== null && ((i = wt()), Tn(n, e, r, i), Bx(n, t, r));
  }
}
function Ax(e) {
  var t = e.alternate;
  return e === Re || (t !== null && t === Re);
}
function Vx(e, t) {
  Os = dc = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Bx(e, t, n) {
  if (4194240 & n) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ih(e, n);
  }
}
var hc = {
    readContext: hn,
    useCallback: dt,
    useContext: dt,
    useEffect: dt,
    useImperativeHandle: dt,
    useInsertionEffect: dt,
    useLayoutEffect: dt,
    useMemo: dt,
    useReducer: dt,
    useRef: dt,
    useState: dt,
    useDebugValue: dt,
    useDeferredValue: dt,
    useTransition: dt,
    useMutableSource: dt,
    useSyncExternalStore: dt,
    useId: dt,
    unstable_isNewReconciler: !1,
  },
  iI = {
    readContext: hn,
    useCallback: function (e, t) {
      return (zn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: hn,
    useEffect: G0,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Wl(4194308, 4, Ix.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Wl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Wl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = zn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = zn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = nI.bind(null, Re, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = zn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Y0,
    useDebugValue: Jh,
    useDeferredValue: function (e) {
      return (zn().memoizedState = e);
    },
    useTransition: function () {
      var e = Y0(!1),
        t = e[0];
      return (e = tI.bind(null, e[1])), (zn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Re,
        i = zn();
      if (Te) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), Ze === null)) throw Error(L(349));
        30 & Ci || wx(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        G0(Cx.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Js(9, kx.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = zn(),
        t = Ze.identifierPrefix;
      if (Te) {
        var n = ar,
          r = sr;
        (n = (r & ~(1 << (32 - Cn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Qs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = eI++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  oI = {
    readContext: hn,
    useCallback: Lx,
    useContext: hn,
    useEffect: Zh,
    useImperativeHandle: Fx,
    useInsertionEffect: Px,
    useLayoutEffect: _x,
    useMemo: Mx,
    useReducer: Td,
    useRef: Rx,
    useState: function () {
      return Td(Zs);
    },
    useDebugValue: Jh,
    useDeferredValue: function (e) {
      var t = pn();
      return Ox(t, Ye.memoizedState, e);
    },
    useTransition: function () {
      var e = Td(Zs)[0],
        t = pn().memoizedState;
      return [e, t];
    },
    useMutableSource: xx,
    useSyncExternalStore: Sx,
    useId: Dx,
    unstable_isNewReconciler: !1,
  },
  sI = {
    readContext: hn,
    useCallback: Lx,
    useContext: hn,
    useEffect: Zh,
    useImperativeHandle: Fx,
    useInsertionEffect: Px,
    useLayoutEffect: _x,
    useMemo: Mx,
    useReducer: Ed,
    useRef: Rx,
    useState: function () {
      return Ed(Zs);
    },
    useDebugValue: Jh,
    useDeferredValue: function (e) {
      var t = pn();
      return Ye === null ? (t.memoizedState = e) : Ox(t, Ye.memoizedState, e);
    },
    useTransition: function () {
      var e = Ed(Zs)[0],
        t = pn().memoizedState;
      return [e, t];
    },
    useMutableSource: xx,
    useSyncExternalStore: Sx,
    useId: Dx,
    unstable_isNewReconciler: !1,
  };
function _o(e, t) {
  try {
    var n = "",
      r = t;
    do (n += A_(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Rd(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ch(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var aI = typeof WeakMap == "function" ? WeakMap : Map;
function $x(e, t, n) {
  (n = lr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      mc || ((mc = !0), (yh = r)), ch(e, t);
    }),
    n
  );
}
function zx(e, t, n) {
  (n = lr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ch(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        ch(e, t),
          typeof r != "function" &&
            ($r === null ? ($r = new Set([this])) : $r.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function K0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new aI();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = SI.bind(null, e, t, n)), t.then(e, e));
}
function q0(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t === null || t.dehydrated !== null)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Q0(e, t, n, r, i) {
  return 1 & e.mode
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = lr(-1, 1)), (t.tag = 2), Br(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var lI = hr.ReactCurrentOwner,
  Mt = !1;
function St(e, t, n, r) {
  t.child = e === null ? yx(t, null, n, r) : Ro(t, e.child, n, r);
}
function Z0(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    wo(t, i),
    (r = qh(e, t, n, r, o, i)),
    (n = Qh()),
    e !== null && !Mt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        dr(e, t, i))
      : (Te && n && Bh(t), (t.flags |= 1), St(e, t, r, i), t.child)
  );
}
function J0(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ap(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Nx(e, t, o, r, i))
      : ((e = Gl(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Us), n(s, r) && e.ref === t.ref)
    )
      return dr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Nr(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Nx(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Us(o, r) && e.ref === t.ref) {
      if (((Mt = !1), (t.pendingProps = r = o), (e.lanes & i) === 0))
        return (t.lanes = e.lanes), dr(e, t, i);
      131072 & e.flags && (Mt = !0);
    }
  }
  return uh(e, t, n, r, i);
}
function Hx(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(1 & t.mode))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ve(go, Xt),
        (Xt |= n);
    else {
      if (!(1073741824 & n))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ve(go, Xt),
          (Xt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ve(go, Xt),
        (Xt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ve(go, Xt),
      (Xt |= r);
  return St(e, t, i, n), t.child;
}
function jx(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function uh(e, t, n, r, i) {
  var o = Dt(n) ? wi : mt.current;
  return (
    (o = To(t, o)),
    wo(t, i),
    (n = qh(e, t, n, r, o, i)),
    (r = Qh()),
    e !== null && !Mt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        dr(e, t, i))
      : (Te && r && Bh(t), (t.flags |= 1), St(e, t, n, i), t.child)
  );
}
function eb(e, t, n, r, i) {
  if (Dt(n)) {
    var o = !0;
    oc(t);
  } else o = !1;
  if ((wo(t, i), t.stateNode === null))
    Ul(e, t), vx(t, n, r), lh(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = hn(c))
      : ((c = Dt(n) ? wi : mt.current), (c = To(t, c)));
    var u = n.getDerivedStateFromProps,
      f =
        typeof u == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && U0(t, s, r, c)),
      (_r = !1);
    var d = t.memoizedState;
    (s.state = d),
      uc(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || Ot.current || _r
        ? (typeof u == "function" && (ah(t, n, u, r), (l = t.memoizedState)),
          (a = _r || W0(t, n, a, r, d, l, c))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = c),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      px(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : Sn(t.type, a)),
      (s.props = c),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = hn(l))
        : ((l = Dt(n) ? wi : mt.current), (l = To(t, l)));
    var m = n.getDerivedStateFromProps;
    (u =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && U0(t, s, r, l)),
      (_r = !1),
      (d = t.memoizedState),
      (s.state = d),
      uc(t, r, s, i);
    var y = t.memoizedState;
    a !== f || d !== y || Ot.current || _r
      ? (typeof m == "function" && (ah(t, n, m, r), (y = t.memoizedState)),
        (c = _r || W0(t, n, c, r, d, y, l) || !1)
          ? (u ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = l),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return fh(e, t, n, r, o, i);
}
function fh(e, t, n, r, i, o) {
  jx(e, t);
  var s = (128 & t.flags) !== 0;
  if (!r && !s) return i && $0(t, n, !1), dr(e, t, o);
  (r = t.stateNode), (lI.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Ro(t, e.child, null, o)), (t.child = Ro(t, null, a, o)))
      : St(e, t, a, o),
    (t.memoizedState = r.state),
    i && $0(t, n, !0),
    t.child
  );
}
function Wx(e) {
  var t = e.stateNode;
  t.pendingContext
    ? B0(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && B0(e, t.context, !1),
    Xh(e, t.containerInfo);
}
function tb(e, t, n, r, i) {
  return Eo(), zh(i), (t.flags |= 256), St(e, t, n, r), t.child;
}
var dh = { dehydrated: null, treeContext: null, retryLane: 0 };
function hh(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ux(e, t, n) {
  var r,
    i = t.pendingProps,
    o = Ee.current,
    s = !1,
    a = (128 & t.flags) !== 0;
  if (
    ((r = a) || (r = (e === null || e.memoizedState !== null) && (2 & o) !== 0),
    r
      ? ((s = !0), (t.flags &= -129))
      : (e !== null && e.memoizedState === null) || (o |= 1),
    ve(Ee, 1 & o),
    e === null)
  )
    return (
      oh(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (1 & t.mode
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = i.children),
          (e = i.fallback),
          s
            ? ((i = t.mode),
              (s = t.child),
              (a = { mode: "hidden", children: a }),
              !(1 & i) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = _c(a, i, 0, null)),
              (e = Si(e, i, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = hh(n)),
              (t.memoizedState = dh),
              e)
            : ep(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((r = o.dehydrated), r !== null)))
    return cI(e, t, a, i, r, o, n);
  if (s) {
    (s = i.fallback), (a = t.mode), (o = e.child), (r = o.sibling);
    var l = { mode: "hidden", children: i.children };
    return (
      !(1 & a) && t.child !== o
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = l),
          (t.deletions = null))
        : ((i = Nr(o, l)), (i.subtreeFlags = 14680064 & o.subtreeFlags)),
      r !== null ? (s = Nr(r, s)) : ((s = Si(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (i.return = t),
      (i.sibling = s),
      (t.child = i),
      (i = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? hh(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = dh),
      i
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (i = Nr(s, { mode: "visible", children: i.children })),
    !(1 & t.mode) && (i.lanes = n),
    (i.return = t),
    (i.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = i),
    (t.memoizedState = null),
    i
  );
}
function ep(e, t) {
  return (
    (t = _c({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Al(e, t, n, r) {
  return (
    r !== null && zh(r),
    Ro(t, e.child, null, n),
    (e = ep(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function cI(e, t, n, r, i, o, s) {
  if (n)
    return 256 & t.flags
      ? ((t.flags &= -257), (r = Rd(Error(L(422)))), Al(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = _c({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Si(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        1 & t.mode && Ro(t, e.child, null, s),
        (t.child.memoizedState = hh(s)),
        (t.memoizedState = dh),
        o);
  if (!(1 & t.mode)) return Al(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(L(419))), (r = Rd(o, r, void 0)), Al(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Mt || a)) {
    if (((r = Ze), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), fr(e, i), Tn(r, e, i, -1));
    }
    return sp(), (r = Rd(Error(L(421)))), Al(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = wI.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Yt = Vr(i.nextSibling)),
      (Gt = t),
      (Te = !0),
      (kn = null),
      e !== null &&
        ((cn[un++] = sr),
        (cn[un++] = ar),
        (cn[un++] = ki),
        (sr = e.id),
        (ar = e.overflow),
        (ki = t)),
      (t = ep(t, r.children)),
      (t.flags |= 4096),
      t);
}
function nb(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), sh(e.return, t, n);
}
function Pd(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Xx(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((St(e, t, r.children, n), (r = Ee.current), 2 & r))
    (r = (1 & r) | 2), (t.flags |= 128);
  else {
    if (e !== null && 128 & e.flags)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && nb(e, n, t);
        else if (e.tag === 19) nb(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ve(Ee, r), !(1 & t.mode))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && fc(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Pd(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && fc(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Pd(t, !0, n, null, o);
        break;
      case "together":
        Pd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ul(e, t) {
  !(1 & t.mode) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function dr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ti |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Nr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Nr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function uI(e, t, n) {
  switch (t.tag) {
    case 3:
      Wx(t), Eo();
      break;
    case 5:
      bx(t);
      break;
    case 1:
      Dt(t.type) && oc(t);
      break;
    case 4:
      Xh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ve(lc, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ve(Ee, 1 & Ee.current), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ux(e, t, n)
          : (ve(Ee, 1 & Ee.current),
            (e = dr(e, t, n)),
            e !== null ? e.sibling : null);
      ve(Ee, 1 & Ee.current);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), 128 & e.flags)) {
        if (r) return Xx(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ve(Ee, Ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Hx(e, t, n);
  }
  return dr(e, t, n);
}
var Yx, ph, Gx, Kx;
Yx = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ph = function () {};
Gx = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), bi(jn.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Ad(e, i)), (r = Ad(e, r)), (o = []);
        break;
      case "select":
        (i = Pe({}, i, { value: void 0 })),
          (r = Pe({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = $d(e, i)), (r = $d(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = rc);
    }
    Nd(n, r);
    var s;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Bs.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = i?.[c]),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(c, l))
            : c === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(c, "" + l)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Bs.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && Se("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(c, l));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Kx = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ws(e, t) {
  if (!Te)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ht(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= 14680064 & i.subtreeFlags),
        (r |= 14680064 & i.flags),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function fI(e, t, n) {
  var r = t.pendingProps;
  switch (($h(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ht(t), null;
    case 1:
      return Dt(t.type) && ic(), ht(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Po(),
        we(Ot),
        we(mt),
        Gh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e !== null && e.child !== null) ||
          (Ol(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
              ((t.flags |= 1024), kn !== null && (Sh(kn), (kn = null)))),
        ph(e, t),
        ht(t),
        null
      );
    case 5:
      Yh(t);
      var i = bi(qs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Gx(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return ht(t), null;
        }
        if (((e = bi(jn.current)), Ol(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Nn] = t), (r[Gs] = o), (e = (1 & t.mode) !== 0), n)) {
            case "dialog":
              Se("cancel", r), Se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Se("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ps.length; i++) Se(Ps[i], r);
              break;
            case "source":
              Se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Se("error", r), Se("load", r);
              break;
            case "details":
              Se("toggle", r);
              break;
            case "input":
              u0(r, o), Se("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Se("invalid", r);
              break;
            case "textarea":
              d0(r, o), Se("invalid", r);
          }
          Nd(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ml(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ml(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Bs.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  Se("scroll", r);
            }
          switch (n) {
            case "input":
              Sl(r), f0(r, o, !0);
              break;
            case "textarea":
              Sl(r), h0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = rc);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = wb(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Nn] = t),
            (e[Gs] = r),
            Yx(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Hd(n, r)), n)) {
              case "dialog":
                Se("cancel", e), Se("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Se("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ps.length; i++) Se(Ps[i], e);
                i = r;
                break;
              case "source":
                Se("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Se("error", e), Se("load", e), (i = r);
                break;
              case "details":
                Se("toggle", e), (i = r);
                break;
              case "input":
                u0(e, r), (i = Ad(e, r)), Se("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Pe({}, r, { value: void 0 })),
                  Se("invalid", e);
                break;
              case "textarea":
                d0(e, r), (i = $d(e, r)), Se("invalid", e);
                break;
              default:
                i = r;
            }
            Nd(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Tb(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && kb(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && $s(e, l)
                    : typeof l == "number" && $s(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Bs.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && Se("scroll", e)
                      : l != null && Ch(e, o, l, s));
              }
            switch (n) {
              case "input":
                Sl(e), f0(e, r, !1);
                break;
              case "textarea":
                Sl(e), h0(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Hr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? yo(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      yo(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = rc);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ht(t), null;
    case 6:
      if (e && t.stateNode != null) Kx(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = bi(qs.current)), bi(jn.current), Ol(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Nn] = t),
            (o = r.nodeValue !== n) && ((e = Gt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ml(r.nodeValue, n, (1 & e.mode) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ml(r.nodeValue, n, (1 & e.mode) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Nn] = t),
            (t.stateNode = r);
      }
      return ht(t), null;
    case 13:
      if (
        (we(Ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Te && Yt !== null && 1 & t.mode && !(128 & t.flags))
          dx(), Eo(), (t.flags |= 98560), (o = !1);
        else if (((o = Ol(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(L(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(L(317));
            o[Nn] = t;
          } else
            Eo(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
          ht(t), (o = !1);
        } else kn !== null && (Sh(kn), (kn = null)), (o = !0);
        if (!o) return 65536 & t.flags ? t : null;
      }
      return 128 & t.flags
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            1 & t.mode &&
              (e === null || 1 & Ee.current ? Ge === 0 && (Ge = 3) : sp())),
          t.updateQueue !== null && (t.flags |= 4),
          ht(t),
          null);
    case 4:
      return (
        Po(), ph(e, t), e === null && Xs(t.stateNode.containerInfo), ht(t), null
      );
    case 10:
      return jh(t.type._context), ht(t), null;
    case 17:
      return Dt(t.type) && ic(), ht(t), null;
    case 19:
      if ((we(Ee), (o = t.memoizedState), o === null)) return ht(t), null;
      if (((r = (128 & t.flags) !== 0), (s = o.rendering), s === null))
        if (r) ws(o, !1);
        else {
          if (Ge !== 0 || (e !== null && 128 & e.flags))
            for (e = t.child; e !== null; ) {
              if (((s = fc(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ws(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ve(Ee, (1 & Ee.current) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            $e() > Io &&
            ((t.flags |= 128), (r = !0), ws(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = fc(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ws(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !Te)
            )
              return ht(t), null;
          } else
            2 * $e() - o.renderingStartTime > Io &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ws(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = $e()),
          (t.sibling = null),
          (n = Ee.current),
          ve(Ee, r ? (1 & n) | 2 : 1 & n),
          t)
        : (ht(t), null);
    case 22:
    case 23:
      return (
        op(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && 1 & t.mode
          ? 1073741824 & Xt && (ht(t), 6 & t.subtreeFlags && (t.flags |= 8192))
          : ht(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function dI(e, t) {
  switch (($h(t), t.tag)) {
    case 1:
      return (
        Dt(t.type) && ic(),
        (e = t.flags),
        65536 & e ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 3:
      return (
        Po(),
        we(Ot),
        we(mt),
        Gh(),
        (e = t.flags),
        65536 & e && !(128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 5:
      return Yh(t), null;
    case 13:
      if (
        (we(Ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        Eo();
      }
      return (
        (e = t.flags), 65536 & e ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 19:
      return we(Ee), null;
    case 4:
      return Po(), null;
    case 10:
      return jh(t.type._context), null;
    case 22:
    case 23:
      return op(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Vl = !1,
  pt = !1,
  hI = typeof WeakSet == "function" ? WeakSet : Set,
  B = null;
function vo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        De(e, t, r);
      }
    else n.current = null;
}
function qx(e, t, n) {
  try {
    n();
  } catch (r) {
    De(e, t, r);
  }
}
var rb = !1;
function pI(e, t) {
  if (((Zd = ec), (e = Jb()), Vh(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || O;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (d = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++c === i && (a = s),
                d === o && ++u === r && (l = s),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = m;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Jd = { focusedElem: e, selectionRange: n }, ec = !1, B = t; B !== null; )
    if (((t = B), (e = t.child), (1028 & t.subtreeFlags) !== 0 && e !== null))
      (e.return = t), (B = e);
    else
      for (; B !== null; ) {
        t = B;
        try {
          var y = t.alternate;
          if (1024 & t.flags)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps,
                    x = y.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Sn(t.type, g),
                      x
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (S) {
          De(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (B = e);
          break;
        }
        B = t.return;
      }
  return (y = rb), (rb = !1), y;
}
function Ds(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && qx(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Rc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function mh(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Qx(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Qx(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Nn], delete t[Gs], delete t[nh], delete t[q2], delete t[Q2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Zx(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ib(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Zx(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (2 & e.flags || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(2 & e.flags)) return e.stateNode;
  }
}
function vh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = rc));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (vh(e, t, n), e = e.sibling; e !== null; ) vh(e, t, n), (e = e.sibling);
}
function gh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (gh(e, t, n), e = e.sibling; e !== null; ) gh(e, t, n), (e = e.sibling);
}
var it = null,
  wn = !1;
function Rr(e, t, n) {
  for (n = n.child; n !== null; ) Jx(e, t, n), (n = n.sibling);
}
function Jx(e, t, n) {
  if (Hn && typeof Hn.onCommitFiberUnmount == "function")
    try {
      Hn.onCommitFiberUnmount(bc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      pt || vo(n, t);
    case 6:
      var r = it,
        i = wn;
      (it = null),
        Rr(e, t, n),
        (it = r),
        (wn = i),
        it !== null &&
          (wn
            ? ((e = it),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : it.removeChild(n.stateNode));
      break;
    case 18:
      it !== null &&
        (wn
          ? ((e = it),
            (n = n.stateNode),
            e.nodeType === 8
              ? Sd(e.parentNode, n)
              : e.nodeType === 1 && Sd(e, n),
            js(e))
          : Sd(it, n.stateNode));
      break;
    case 4:
      (r = it),
        (i = wn),
        (it = n.stateNode.containerInfo),
        (wn = !0),
        Rr(e, t, n),
        (it = r),
        (wn = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (2 & o || 4 & o) && qx(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Rr(e, t, n);
      break;
    case 1:
      if (
        !pt &&
        (vo(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          De(n, t, a);
        }
      Rr(e, t, n);
      break;
    case 21:
      Rr(e, t, n);
      break;
    case 22:
      1 & n.mode
        ? ((pt = (r = pt) || n.memoizedState !== null), Rr(e, t, n), (pt = r))
        : Rr(e, t, n);
      break;
    default:
      Rr(e, t, n);
  }
}
function ob(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new hI()),
      t.forEach(function (r) {
        var i = kI.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function xn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (it = a.stateNode), (wn = !1);
              break e;
            case 3:
              (it = a.stateNode.containerInfo), (wn = !0);
              break e;
            case 4:
              (it = a.stateNode.containerInfo), (wn = !0);
              break e;
          }
          a = a.return;
        }
        if (it === null) throw Error(L(160));
        Jx(o, s, i), (it = null), (wn = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (c) {
        De(i, t, c);
      }
    }
  if (12854 & t.subtreeFlags)
    for (t = t.child; t !== null; ) e1(t, e), (t = t.sibling);
}
function e1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((xn(t, e), $n(e), 4 & r)) {
        try {
          Ds(3, e, e.return), Rc(3, e);
        } catch (g) {
          De(e, e.return, g);
        }
        try {
          Ds(5, e, e.return);
        } catch (g) {
          De(e, e.return, g);
        }
      }
      break;
    case 1:
      xn(t, e), $n(e), 512 & r && n !== null && vo(n, n.return);
      break;
    case 5:
      if (
        (xn(t, e),
        $n(e),
        512 & r && n !== null && vo(n, n.return),
        32 & e.flags)
      ) {
        var i = e.stateNode;
        try {
          $s(i, "");
        } catch (g) {
          De(e, e.return, g);
        }
      }
      if (4 & r && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && xb(i, o),
              Hd(a, s);
            var c = Hd(a, o);
            for (s = 0; s < l.length; s += 2) {
              var u = l[s],
                f = l[s + 1];
              u === "style"
                ? Tb(i, f)
                : u === "dangerouslySetInnerHTML"
                ? kb(i, f)
                : u === "children"
                ? $s(i, f)
                : Ch(i, u, f, c);
            }
            switch (a) {
              case "input":
                Vd(i, o);
                break;
              case "textarea":
                Sb(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var m = o.value;
                m != null
                  ? yo(i, !!o.multiple, m, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? yo(i, !!o.multiple, o.defaultValue, !0)
                      : yo(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Gs] = o;
          } catch (g) {
            De(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((xn(t, e), $n(e), 4 & r)) {
        if (e.stateNode === null) throw Error(L(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (g) {
          De(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (xn(t, e), $n(e), 4 & r && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          js(t.containerInfo);
        } catch (g) {
          De(e, e.return, g);
        }
      break;
    case 4:
      xn(t, e), $n(e);
      break;
    case 13:
      xn(t, e),
        $n(e),
        (i = e.child),
        8192 & i.flags &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (rp = $e())),
        4 & r && ob(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        1 & e.mode ? ((pt = (c = pt) || u), xn(t, e), (pt = c)) : xn(t, e),
        $n(e),
        8192 & r)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && 1 & e.mode)
        )
          for (B = e, u = e.child; u !== null; ) {
            for (f = B = u; B !== null; ) {
              switch (((d = B), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ds(4, d, d.return);
                  break;
                case 1:
                  vo(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      De(r, n, g);
                    }
                  }
                  break;
                case 5:
                  vo(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    ab(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (B = m)) : ab(f);
            }
            u = u.sibling;
          }
        e: for (u = null, f = e; ; ) {
          if (f.tag === 5) {
            if (u === null) {
              u = f;
              try {
                (i = f.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Cb("display", s)));
              } catch (g) {
                De(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (u === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (g) {
                De(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            u === f && (u = null), (f = f.return);
          }
          u === f && (u = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      xn(t, e), $n(e), 4 & r && ob(e);
      break;
    case 21:
      break;
    default:
      xn(t, e), $n(e);
  }
}
function $n(e) {
  var t = e.flags;
  if (2 & t) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Zx(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          32 & r.flags && ($s(i, ""), (r.flags &= -33));
          var o = ib(e);
          gh(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = ib(e);
          vh(e, a, s);
          break;
        default:
          throw Error(L(161));
      }
    } catch (l) {
      De(e, e.return, l);
    }
    e.flags &= -3;
  }
  4096 & t && (e.flags &= -4097);
}
function mI(e, t, n) {
  (B = e), t1(e, t, n);
}
function t1(e, t, n) {
  for (var r = (1 & e.mode) !== 0; B !== null; ) {
    var i = B,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Vl;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || pt;
        a = Vl;
        var c = pt;
        if (((Vl = s), (pt = l) && !c))
          for (B = i; B !== null; )
            (s = B),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? lb(i)
                : l !== null
                ? ((l.return = s), (B = l))
                : lb(i);
        for (; o !== null; ) (B = o), t1(o, t, n), (o = o.sibling);
        (B = i), (Vl = a), (pt = c);
      }
      sb(e, t, n);
    } else
      8772 & i.subtreeFlags && o !== null
        ? ((o.return = i), (B = o))
        : sb(e, t, n);
  }
}
function sb(e) {
  for (; B !== null; ) {
    var t = B;
    if (8772 & t.flags) {
      var n = t.alternate;
      try {
        if (8772 & t.flags)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pt || Rc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (4 & t.flags && !pt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Sn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && j0(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                j0(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && 4 & t.flags) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var f = u.dehydrated;
                    f !== null && js(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        pt || (512 & t.flags && mh(t));
      } catch (d) {
        De(t, t.return, d);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function ab(e) {
  for (; B !== null; ) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function lb(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Rc(4, t);
          } catch (l) {
            De(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              De(t, i, l);
            }
          }
          var o = t.return;
          try {
            mh(t);
          } catch (l) {
            De(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            mh(t);
          } catch (l) {
            De(t, s, l);
          }
      }
    } catch (l) {
      De(t, t.return, l);
    }
    if (t === e) {
      B = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (B = a);
      break;
    }
    B = t.return;
  }
}
var vI = Math.ceil,
  pc = hr.ReactCurrentDispatcher,
  tp = hr.ReactCurrentOwner,
  dn = hr.ReactCurrentBatchConfig,
  le = 0,
  Ze = null,
  We = null,
  ot = 0,
  Xt = 0,
  go = Ur(0),
  Ge = 0,
  ea = null,
  Ti = 0,
  Pc = 0,
  np = 0,
  As = null,
  Lt = null,
  rp = 0,
  Io = 1 / 0,
  ir = null,
  mc = !1,
  yh = null,
  $r = null,
  Bl = !1,
  Mr = null,
  vc = 0,
  Vs = 0,
  bh = null,
  Xl = -1,
  Yl = 0;
function wt() {
  return 6 & le ? $e() : Xl !== -1 ? Xl : (Xl = $e());
}
function zr(e) {
  return 1 & e.mode
    ? 2 & le && ot !== 0
      ? ot & -ot
      : J2.transition !== null
      ? (Yl === 0 && (Yl = Vb()), Yl)
      : ((e = pe),
        e !== 0 || ((e = O.event), (e = e === void 0 ? 16 : Wb(e.type))),
        e)
    : 1;
}
function Tn(e, t, n, r) {
  if (50 < Vs) throw ((Vs = 0), (bh = null), Error(L(185)));
  ta(e, n, r),
    (2 & le && e === Ze) ||
      (e === Ze && (!(2 & le) && (Pc |= n), Ge === 4 && Fr(e, ot)),
      At(e, r),
      n === 1 && le === 0 && !(1 & t.mode) && ((Io = $e() + 500), Cc && Xr()));
}
function At(e, t) {
  var n = e.callbackNode;
  t2(e, t);
  var r = Jl(e, e === Ze ? ot : 0);
  if (r === 0)
    n !== null && v0(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && v0(n), t === 1))
      e.tag === 0 ? Z2(cb.bind(null, e)) : cx(cb.bind(null, e)),
        G2(function () {
          !(6 & le) && Xr();
        }),
        (n = null);
    else {
      switch (Bb(r)) {
        case 1:
          n = _h;
          break;
        case 4:
          n = Db;
          break;
        case 16:
          n = Zl;
          break;
        case 536870912:
          n = Ab;
          break;
        default:
          n = Zl;
      }
      n = c1(n, n1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function n1(e, t) {
  if (((Xl = -1), (Yl = 0), 6 & le)) throw Error(L(327));
  var n = e.callbackNode;
  if (ko() && e.callbackNode !== n) return null;
  var r = Jl(e, e === Ze ? ot : 0);
  if (r === 0) return null;
  if (30 & r || r & e.expiredLanes || t) t = gc(e, r);
  else {
    t = r;
    var i = le;
    le |= 2;
    var o = i1();
    (Ze === e && ot === t) || ((ir = null), (Io = $e() + 500), xi(e, t));
    do
      try {
        bI();
        break;
      } catch (a) {
        r1(e, a);
      }
    while (1);
    Hh(),
      (pc.current = o),
      (le = i),
      We !== null ? (t = 0) : ((Ze = null), (ot = 0), (t = Ge));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Yd(e)), i !== 0 && ((r = i), (t = xh(e, i)))), t === 1)
    )
      throw ((n = ea), xi(e, 0), Fr(e, r), At(e, $e()), n);
    if (t === 6) Fr(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(30 & r) &&
          !gI(i) &&
          ((t = gc(e, r)),
          t === 2 && ((o = Yd(e)), o !== 0 && ((r = o), (t = xh(e, o)))),
          t === 1))
      )
        throw ((n = ea), xi(e, 0), Fr(e, r), At(e, $e()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          vi(e, Lt, ir);
          break;
        case 3:
          if (
            (Fr(e, r), (130023424 & r) === r && ((t = rp + 500 - $e()), 10 < t))
          ) {
            if (Jl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              wt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = th(vi.bind(null, e, Lt, ir), t);
            break;
          }
          vi(e, Lt, ir);
          break;
        case 4:
          if ((Fr(e, r), (4194240 & r) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Cn(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = $e() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * vI(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = th(vi.bind(null, e, Lt, ir), r);
            break;
          }
          vi(e, Lt, ir);
          break;
        case 5:
          vi(e, Lt, ir);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return At(e, $e()), e.callbackNode === n ? n1.bind(null, e) : null;
}
function xh(e, t) {
  var n = As;
  return (
    e.current.memoizedState.isDehydrated && (xi(e, t).flags |= 256),
    (e = gc(e, t)),
    e !== 2 && ((t = Lt), (Lt = n), t !== null && Sh(t)),
    e
  );
}
function Sh(e) {
  Lt === null ? (Lt = e) : Lt.push.apply(Lt, e);
}
function gI(e) {
  for (var t = e; ; ) {
    if (16384 & t.flags) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!En(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), 16384 & t.subtreeFlags && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Fr(e, t) {
  for (
    t &= ~np,
      t &= ~Pc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Cn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function cb(e) {
  if (6 & le) throw Error(L(327));
  ko();
  var t = Jl(e, 0);
  if (!(1 & t)) return At(e, $e()), null;
  var n = gc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Yd(e);
    r !== 0 && ((t = r), (n = xh(e, r)));
  }
  if (n === 1) throw ((n = ea), xi(e, 0), Fr(e, t), At(e, $e()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    vi(e, Lt, ir),
    At(e, $e()),
    null
  );
}
function ip(e, t) {
  var n = le;
  le |= 1;
  try {
    return e(t);
  } finally {
    (le = n), le === 0 && ((Io = $e() + 500), Cc && Xr());
  }
}
function Ei(e) {
  Mr !== null && Mr.tag === 0 && !(6 & le) && ko();
  var t = le;
  le |= 1;
  var n = dn.transition,
    r = pe;
  try {
    if (((dn.transition = null), (pe = 1), e)) return e();
  } finally {
    (pe = r), (dn.transition = n), (le = t), !(6 & le) && Xr();
  }
}
function op() {
  (Xt = go.current), we(go);
}
function xi(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Y2(n)), We !== null))
    for (n = We.return; n !== null; ) {
      var r = n;
      switch (($h(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ic();
          break;
        case 3:
          Po(), we(Ot), we(mt), Gh();
          break;
        case 5:
          Yh(r);
          break;
        case 4:
          Po();
          break;
        case 13:
          we(Ee);
          break;
        case 19:
          we(Ee);
          break;
        case 10:
          jh(r.type._context);
          break;
        case 22:
        case 23:
          op();
      }
      n = n.return;
    }
  if (
    ((Ze = e),
    (We = e = Nr(e.current, null)),
    (ot = Xt = t),
    (Ge = 0),
    (ea = null),
    (np = Pc = Ti = 0),
    (Lt = As = null),
    yi !== null)
  ) {
    for (t = 0; t < yi.length; t++)
      if (((n = yi[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    yi = null;
  }
  return e;
}
function r1(e, t) {
  do {
    var n = We;
    try {
      if ((Hh(), (jl.current = hc), dc)) {
        for (var r = Re.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        dc = !1;
      }
      if (
        ((Ci = 0),
        (Qe = Ye = Re = null),
        (Os = !1),
        (Qs = 0),
        (tp.current = null),
        n === null || n.return === null)
      ) {
        (Ge = 1), (ea = t), (We = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = ot),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            u = a,
            f = u.tag;
          if (!(1 & u.mode) && (f === 0 || f === 11 || f === 15)) {
            var d = u.alternate;
            d
              ? ((u.updateQueue = d.updateQueue),
                (u.memoizedState = d.memoizedState),
                (u.lanes = d.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var m = q0(s);
          if (m !== null) {
            (m.flags &= -257),
              Q0(m, s, a, o, t),
              1 & m.mode && K0(o, c, t),
              (t = m),
              (l = c);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else y.add(l);
            break e;
          }
          if (!(1 & t)) {
            K0(o, c, t), sp();
            break e;
          }
          l = Error(L(426));
        } else if (Te && 1 & a.mode) {
          var x = q0(s);
          if (x !== null) {
            !(65536 & x.flags) && (x.flags |= 256),
              Q0(x, s, a, o, t),
              zh(_o(l, a));
            break e;
          }
        }
        (o = l = _o(l, a)),
          Ge !== 4 && (Ge = 2),
          As === null ? (As = [o]) : As.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = $x(o, l, t);
              H0(o, p);
              break e;
            case 1:
              a = l;
              var h = o.type,
                v = o.stateNode;
              if (
                !(128 & o.flags) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    ($r === null || !$r.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = zx(o, a, t);
                H0(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      s1(n);
    } catch (k) {
      (t = k), We === n && n !== null && (We = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function i1() {
  var e = pc.current;
  return (pc.current = hc), e === null ? hc : e;
}
function sp() {
  (Ge !== 0 && Ge !== 3 && Ge !== 2) || (Ge = 4),
    Ze === null || (!(268435455 & Ti) && !(268435455 & Pc)) || Fr(Ze, ot);
}
function gc(e, t) {
  var n = le;
  le |= 2;
  var r = i1();
  (Ze === e && ot === t) || ((ir = null), xi(e, t));
  do
    try {
      yI();
      break;
    } catch (i) {
      r1(e, i);
    }
  while (1);
  if ((Hh(), (le = n), (pc.current = r), We !== null)) throw Error(L(261));
  return (Ze = null), (ot = 0), Ge;
}
function yI() {
  for (; We !== null; ) o1(We);
}
function bI() {
  for (; We !== null && !X_(); ) o1(We);
}
function o1(e) {
  var t = l1(e.alternate, e, Xt);
  (e.memoizedProps = e.pendingProps),
    t === null ? s1(e) : (We = t),
    (tp.current = null);
}
function s1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), 32768 & t.flags)) {
      if (((n = dI(n, t)), n !== null)) {
        (n.flags &= 32767), (We = n);
        return;
      }
      if (e === null) {
        (Ge = 6), (We = null);
        return;
      }
      (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
    } else if (((n = fI(n, t, Xt)), n !== null)) {
      We = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      We = t;
      return;
    }
    We = t = e;
  } while (t !== null);
  Ge === 0 && (Ge = 5);
}
function vi(e, t, n) {
  var r = pe,
    i = dn.transition;
  try {
    (dn.transition = null), (pe = 1), xI(e, t, n, r);
  } finally {
    (dn.transition = i), (pe = r);
  }
  return null;
}
function xI(e, t, n, r) {
  do ko();
  while (Mr !== null);
  if (6 & le) throw Error(L(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (n2(e, o),
    e === Ze && ((We = Ze = null), (ot = 0)),
    (!(2064 & n.subtreeFlags) && !(2064 & n.flags)) ||
      Bl ||
      ((Bl = !0),
      c1(Zl, function () {
        return ko(), null;
      })),
    (o = (15990 & n.flags) !== 0),
    15990 & n.subtreeFlags || o)
  ) {
    (o = dn.transition), (dn.transition = null);
    var s = pe;
    pe = 1;
    var a = le;
    (le |= 4),
      (tp.current = null),
      pI(e, n),
      e1(n, e),
      H2(Jd),
      (ec = !!Zd),
      (Jd = Zd = null),
      (e.current = n),
      mI(n, e, i),
      Y_(),
      (le = a),
      (pe = s),
      (dn.transition = o);
  } else e.current = n;
  if (
    (Bl && ((Bl = !1), (Mr = e), (vc = i)),
    (o = e.pendingLanes),
    o === 0 && ($r = null),
    q_(n.stateNode, r),
    At(e, $e()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (mc) throw ((mc = !1), (e = yh), (yh = null), e);
  return (
    1 & vc && e.tag !== 0 && ko(),
    (o = e.pendingLanes),
    1 & o ? (e === bh ? Vs++ : ((Vs = 0), (bh = e))) : (Vs = 0),
    Xr(),
    null
  );
}
function ko() {
  if (Mr !== null) {
    var e = Bb(vc),
      t = dn.transition,
      n = pe;
    try {
      if (((dn.transition = null), (pe = 16 > e ? 16 : e), Mr === null))
        var r = !1;
      else {
        if (((e = Mr), (Mr = null), (vc = 0), 6 & le)) throw Error(L(331));
        var i = le;
        for (le |= 4, B = e.current; B !== null; ) {
          var o = B,
            s = o.child;
          if (16 & B.flags) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (B = c; B !== null; ) {
                  var u = B;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ds(8, u, o);
                  }
                  var f = u.child;
                  if (f !== null) (f.return = u), (B = f);
                  else
                    for (; B !== null; ) {
                      u = B;
                      var d = u.sibling,
                        m = u.return;
                      if ((Qx(u), u === c)) {
                        B = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (B = d);
                        break;
                      }
                      B = m;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var x = g.sibling;
                    (g.sibling = null), (g = x);
                  } while (g !== null);
                }
              }
              B = o;
            }
          }
          if (2064 & o.subtreeFlags && s !== null) (s.return = o), (B = s);
          else
            e: for (; B !== null; ) {
              if (((o = B), 2048 & o.flags))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ds(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (B = p);
                break e;
              }
              B = o.return;
            }
        }
        var h = e.current;
        for (B = h; B !== null; ) {
          s = B;
          var v = s.child;
          if (2064 & s.subtreeFlags && v !== null) (v.return = s), (B = v);
          else
            e: for (s = h; B !== null; ) {
              if (((a = B), 2048 & a.flags))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rc(9, a);
                  }
                } catch (k) {
                  De(a, a.return, k);
                }
              if (a === s) {
                B = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (B = S);
                break e;
              }
              B = a.return;
            }
        }
        if (
          ((le = i), Xr(), Hn && typeof Hn.onPostCommitFiberRoot == "function")
        )
          try {
            Hn.onPostCommitFiberRoot(bc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (pe = n), (dn.transition = t);
    }
  }
  return !1;
}
function ub(e, t, n) {
  (t = _o(n, t)),
    (t = $x(e, t, 1)),
    (e = Br(e, t, 1)),
    (t = wt()),
    e !== null && (ta(e, 1, t), At(e, t));
}
function De(e, t, n) {
  if (e.tag === 3) ub(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ub(t, e, n);
        break;
      }
      if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            ($r === null || !$r.has(r)))
        ) {
          (e = _o(n, e)),
            (e = zx(t, e, 1)),
            (t = Br(t, e, 1)),
            (e = wt()),
            t !== null && (ta(t, 1, e), At(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function SI(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = wt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ze === e &&
      (ot & n) === n &&
      (Ge === 4 || (Ge === 3 && (130023424 & ot) === ot && 500 > $e() - rp)
        ? xi(e, 0)
        : (np |= n)),
    At(e, t);
}
function a1(e, t) {
  t === 0 &&
    (1 & e.mode
      ? ((t = Cl), (Cl <<= 1), !(130023424 & Cl) && (Cl = 4194304))
      : (t = 1));
  var n = wt();
  (e = fr(e, t)), e !== null && (ta(e, t, n), At(e, n));
}
function wI(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), a1(e, n);
}
function kI(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), a1(e, n);
}
var l1;
l1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ot.current) Mt = !0;
    else {
      if (!(e.lanes & n) && !(128 & t.flags)) return (Mt = !1), uI(e, t, n);
      Mt = (131072 & e.flags) !== 0;
    }
  else (Mt = !1), Te && 1048576 & t.flags && ux(t, ac, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ul(e, t), (e = t.pendingProps);
      var i = To(t, mt.current);
      wo(t, n), (i = qh(null, t, r, e, i, n));
      var o = Qh();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Dt(r) ? ((o = !0), oc(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Uh(t),
            (i.updater = Tc),
            (t.stateNode = i),
            (i._reactInternals = t),
            lh(t, r, e, n),
            (t = fh(null, t, r, !0, o, n)))
          : ((t.tag = 0), Te && o && Bh(t), St(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ul(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = TI(r)),
          (e = Sn(r, e)),
          i)
        ) {
          case 0:
            t = uh(null, t, r, e, n);
            break e;
          case 1:
            t = eb(null, t, r, e, n);
            break e;
          case 11:
            t = Z0(null, t, r, e, n);
            break e;
          case 14:
            t = J0(null, t, r, Sn(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Sn(r, i)),
        uh(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Sn(r, i)),
        eb(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Wx(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          px(e, t),
          uc(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated)) {
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            256 & t.flags)
          ) {
            (i = _o(Error(L(423)), t)), (t = tb(e, t, r, n, i));
            break e;
          }
          if (r !== i) {
            (i = _o(Error(L(424)), t)), (t = tb(e, t, r, n, i));
            break e;
          }
          for (
            Yt = Vr(t.stateNode.containerInfo.firstChild),
              Gt = t,
              Te = !0,
              kn = null,
              n = yx(t, null, r, n),
              t.child = n;
            n;

          )
            (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
        } else {
          if ((Eo(), r === i)) {
            t = dr(e, t, n);
            break e;
          }
          St(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        bx(t),
        e === null && oh(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        eh(r, i) ? (s = null) : o !== null && eh(r, o) && (t.flags |= 32),
        jx(e, t),
        St(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && oh(t), null;
    case 13:
      return Ux(e, t, n);
    case 4:
      return (
        Xh(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ro(t, null, r, n)) : St(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Sn(r, i)),
        Z0(e, t, r, i, n)
      );
    case 7:
      return St(e, t, t.pendingProps, n), t.child;
    case 8:
      return St(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return St(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          ve(lc, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (En(o.value, s)) {
            if (o.children === i.children && !Ot.current) {
              t = dr(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = lr(-1, n & -n)), (l.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      sh(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(L(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  sh(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        St(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        wo(t, n),
        (i = hn(i)),
        (r = r(i)),
        (t.flags |= 1),
        St(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Sn(r, t.pendingProps)),
        (i = Sn(r.type, i)),
        J0(e, t, r, i, n)
      );
    case 15:
      return Nx(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Sn(r, i)),
        Ul(e, t),
        (t.tag = 1),
        Dt(r) ? ((e = !0), oc(t)) : (e = !1),
        wo(t, n),
        vx(t, r, i),
        lh(t, r, i, n),
        fh(null, t, r, !0, e, n)
      );
    case 19:
      return Xx(e, t, n);
    case 22:
      return Hx(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function c1(e, t) {
  return Ob(e, t);
}
function CI(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function fn(e, t, n, r) {
  return new CI(e, t, n, r);
}
function ap(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function TI(e) {
  if (typeof e == "function") return ap(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Eh)) return 11;
    if (e === Rh) return 14;
  }
  return 2;
}
function Nr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = fn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = 14680064 & e.flags),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Gl(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) ap(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case so:
        return Si(n.children, i, o, t);
      case Th:
        (s = 8), (i |= 8);
        break;
      case Ld:
        return (
          (e = fn(12, n, t, 2 | i)), (e.elementType = Ld), (e.lanes = o), e
        );
      case Md:
        return (e = fn(13, n, t, i)), (e.elementType = Md), (e.lanes = o), e;
      case Od:
        return (e = fn(19, n, t, i)), (e.elementType = Od), (e.lanes = o), e;
      case gb:
        return _c(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case mb:
              s = 10;
              break e;
            case vb:
              s = 9;
              break e;
            case Eh:
              s = 11;
              break e;
            case Rh:
              s = 14;
              break e;
            case Pr:
              (s = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = fn(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Si(e, t, n, r) {
  return (e = fn(7, e, r, t)), (e.lanes = n), e;
}
function _c(e, t, n, r) {
  return (
    (e = fn(22, e, r, t)),
    (e.elementType = gb),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function _d(e, t, n) {
  return (e = fn(6, e, null, t)), (e.lanes = n), e;
}
function Id(e, t, n) {
  return (
    (t = fn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function EI(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = hd(0)),
    (this.expirationTimes = hd(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = hd(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function lp(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new EI(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = fn(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Uh(o),
    e
  );
}
function RI(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: oo,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function u1(e) {
  if (!e) return jr;
  e = e._reactInternals;
  e: {
    if (Pi(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Dt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Dt(n)) return lx(e, n, t);
  }
  return t;
}
function f1(e, t, n, r, i, o, s, a, l) {
  return (
    (e = lp(n, r, !0, e, i, o, s, a, l)),
    (e.context = u1(null)),
    (n = e.current),
    (r = wt()),
    (i = zr(n)),
    (o = lr(r, i)),
    (o.callback = t ?? null),
    Br(n, o, i),
    (e.current.lanes = i),
    ta(e, i, r),
    At(e, r),
    e
  );
}
function Ic(e, t, n, r) {
  var i = t.current,
    o = wt(),
    s = zr(i);
  return (
    (n = u1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = lr(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Br(i, t, s)),
    e !== null && (Tn(e, i, s, o), Hl(e, i, s)),
    s
  );
}
function yc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function fb(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cp(e, t) {
  fb(e, t), (e = e.alternate) && fb(e, t);
}
function PI() {
  return null;
}
var d1 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function up(e) {
  this._internalRoot = e;
}
Fc.prototype.render = up.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Ic(e, t, null, null);
};
Fc.prototype.unmount = up.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ei(function () {
      Ic(null, e, null, null);
    }),
      (t[ur] = null);
  }
};
function Fc(e) {
  this._internalRoot = e;
}
Fc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Nb();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ir.length && t !== 0 && t < Ir[n].priority; n++);
    Ir.splice(n, 0, e), n === 0 && jb(e);
  }
};
function fp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Lc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function db() {}
function _I(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = yc(s);
        o.call(c);
      };
    }
    var s = f1(t, r, e, 0, null, !1, !1, "", db);
    return (
      (e._reactRootContainer = s),
      (e[ur] = s.current),
      Xs(e.nodeType === 8 ? e.parentNode : e),
      Ei(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = yc(l);
      a.call(c);
    };
  }
  var l = lp(e, 0, !1, null, null, !1, !1, "", db);
  return (
    (e._reactRootContainer = l),
    (e[ur] = l.current),
    Xs(e.nodeType === 8 ? e.parentNode : e),
    Ei(function () {
      Ic(t, l, n, r);
    }),
    l
  );
}
function Mc(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = yc(s);
        a.call(l);
      };
    }
    Ic(t, s, e, i);
  } else s = _I(n, t, e, i, r);
  return yc(s);
}
$b = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rs(t.pendingLanes);
        n !== 0 &&
          (Ih(t, 1 | n), At(t, $e()), !(6 & le) && ((Io = $e() + 500), Xr()));
      }
      break;
    case 13:
      Ei(function () {
        var r = fr(e, 1);
        if (r !== null) {
          var i = wt();
          Tn(r, e, 1, i);
        }
      }),
        cp(e, 1);
  }
};
Fh = function (e) {
  if (e.tag === 13) {
    var t = fr(e, 134217728);
    if (t !== null) {
      var n = wt();
      Tn(t, e, 134217728, n);
    }
    cp(e, 134217728);
  }
};
zb = function (e) {
  if (e.tag === 13) {
    var t = zr(e),
      n = fr(e, t);
    if (n !== null) {
      var r = wt();
      Tn(n, e, t, r);
    }
    cp(e, t);
  }
};
Nb = function () {
  return pe;
};
Hb = function (e, t) {
  var n = pe;
  try {
    return (pe = e), t();
  } finally {
    pe = n;
  }
};
Wd = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Vd(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = kc(r);
            if (!i) throw Error(L(90));
            bb(r), Vd(r, i);
          }
        }
      }
      break;
    case "textarea":
      Sb(e, n);
      break;
    case "select":
      (t = n.value), t != null && yo(e, !!n.multiple, t, !1);
  }
};
Pb = ip;
_b = Ei;
var II = { usingClientEntryPoint: !1, Events: [ra, uo, kc, Eb, Rb, ip] },
  ks = {
    findFiberByHostInstance: gi,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  FI = {
    bundleType: ks.bundleType,
    version: ks.version,
    rendererPackageName: ks.rendererPackageName,
    rendererConfig: ks.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: hr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Lb(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ks.findFiberByHostInstance || PI,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
  ((Cs = __REACT_DEVTOOLS_GLOBAL_HOOK__), !Cs.isDisabled && Cs.supportsFiber)
)
  try {
    (bc = Cs.inject(FI)), (Hn = Cs);
  } catch {}
var Cs;
qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = II;
qt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!fp(t)) throw Error(L(200));
  return RI(e, t, null, n);
};
qt.createRoot = function (e, t) {
  if (!fp(e)) throw Error(L(299));
  var n = !1,
    r = "",
    i = d1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = lp(e, 1, !1, null, null, n, !1, r, i)),
    (e[ur] = t.current),
    Xs(e.nodeType === 8 ? e.parentNode : e),
    new up(t)
  );
};
qt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = Lb(t)), (e = e === null ? null : e.stateNode), e;
};
qt.flushSync = function (e) {
  return Ei(e);
};
qt.hydrate = function (e, t, n) {
  if (!Lc(t)) throw Error(L(200));
  return Mc(null, e, t, !0, n);
};
qt.hydrateRoot = function (e, t, n) {
  if (!fp(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = d1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = f1(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[ur] = t.current),
    Xs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Fc(t);
};
qt.render = function (e, t, n) {
  if (!Lc(t)) throw Error(L(200));
  return Mc(null, e, t, !1, n);
};
qt.unmountComponentAtNode = function (e) {
  if (!Lc(e)) throw Error(L(40));
  return (
    !!e._reactRootContainer &&
    (Ei(function () {
      Mc(null, null, e, !1, function () {
        (e._reactRootContainer = null), (e[ur] = null);
      });
    }),
    !0)
  );
};
qt.unstable_batchedUpdates = ip;
qt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Lc(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return Mc(e, t, n, !1, r);
};
qt.version = "18.2.0-next-9e3b772b8-20220608";
function h1() {
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function"
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h1);
    } catch (e) {
      console.error(e);
    }
}
h1();
var Zt = qt,
  p1 = Zt,
  LI = Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  MI = Zt.createPortal,
  OI = Zt.createRoot,
  DI = Zt.findDOMNode,
  AI = Zt.flushSync,
  VI = Zt.hydrate,
  BI = Zt.hydrateRoot,
  $I = Zt.render,
  zI = Zt.unmountComponentAtNode,
  NI = Zt.unstable_batchedUpdates,
  HI = Zt.unstable_renderSubtreeIntoContainer,
  jI = Zt.version;
var UI = an({
    "../../../node_modules/hsluv/dist/hsluv.cjs"(e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Hsluv = void 0);
      var t = class {
        constructor() {
          (this.hex = "#000000"),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0);
        }
        static fromLinear(n) {
          return n <= 0.0031308
            ? 12.92 * n
            : 1.055 * Math.pow(n, 1 / 2.4) - 0.055;
        }
        static toLinear(n) {
          return n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92;
        }
        static yToL(n) {
          return n <= t.epsilon
            ? (n / t.refY) * t.kappa
            : 116 * Math.pow(n / t.refY, 1 / 3) - 16;
        }
        static lToY(n) {
          return n <= 8
            ? (t.refY * n) / t.kappa
            : t.refY * Math.pow((n + 16) / 116, 3);
        }
        static rgbChannelToHex(n) {
          let r = Math.round(n * 255),
            i = r % 16,
            o = ((r - i) / 16) | 0;
          return t.hexChars.charAt(o) + t.hexChars.charAt(i);
        }
        static hexToRgbChannel(n, r) {
          let i = t.hexChars.indexOf(n.charAt(r)),
            o = t.hexChars.indexOf(n.charAt(r + 1));
          return (i * 16 + o) / 255;
        }
        static distanceFromOriginAngle(n, r, i) {
          let o = r / (Math.sin(i) - n * Math.cos(i));
          return o < 0 ? 1 / 0 : o;
        }
        static distanceFromOrigin(n, r) {
          return Math.abs(r) / Math.sqrt(Math.pow(n, 2) + 1);
        }
        static min6(n, r, i, o, s, a) {
          return Math.min(
            n,
            Math.min(r, Math.min(i, Math.min(o, Math.min(s, a))))
          );
        }
        rgbToHex() {
          (this.hex = "#"),
            (this.hex += t.rgbChannelToHex(this.rgb_r)),
            (this.hex += t.rgbChannelToHex(this.rgb_g)),
            (this.hex += t.rgbChannelToHex(this.rgb_b));
        }
        hexToRgb() {
          (this.hex = this.hex.toLowerCase()),
            (this.rgb_r = t.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = t.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = t.hexToRgbChannel(this.hex, 5));
        }
        xyzToRgb() {
          (this.rgb_r = t.fromLinear(
            t.m_r0 * this.xyz_x + t.m_r1 * this.xyz_y + t.m_r2 * this.xyz_z
          )),
            (this.rgb_g = t.fromLinear(
              t.m_g0 * this.xyz_x + t.m_g1 * this.xyz_y + t.m_g2 * this.xyz_z
            )),
            (this.rgb_b = t.fromLinear(
              t.m_b0 * this.xyz_x + t.m_b1 * this.xyz_y + t.m_b2 * this.xyz_z
            ));
        }
        rgbToXyz() {
          let n = t.toLinear(this.rgb_r),
            r = t.toLinear(this.rgb_g),
            i = t.toLinear(this.rgb_b);
          (this.xyz_x =
            0.41239079926595 * n + 0.35758433938387 * r + 0.18048078840183 * i),
            (this.xyz_y =
              0.21263900587151 * n +
              0.71516867876775 * r +
              0.072192315360733 * i),
            (this.xyz_z =
              0.019330818715591 * n +
              0.11919477979462 * r +
              0.95053215224966 * i);
        }
        xyzToLuv() {
          let n = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            r = 4 * this.xyz_x,
            i = 9 * this.xyz_y;
          n !== 0 ? ((r /= n), (i /= n)) : ((r = NaN), (i = NaN)),
            (this.luv_l = t.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (r - t.refU)),
                (this.luv_v = 13 * this.luv_l * (i - t.refV)));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            (this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0);
            return;
          }
          let n = this.luv_u / (13 * this.luv_l) + t.refU,
            r = this.luv_v / (13 * this.luv_l) + t.refV;
          (this.xyz_y = t.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * n) / ((n - 4) * r - n * r)),
            (this.xyz_z =
              (9 * this.xyz_y - 15 * r * this.xyz_y - r * this.xyz_x) /
              (3 * r));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(
              this.luv_u * this.luv_u + this.luv_v * this.luv_v
            )),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let n = Math.atan2(this.luv_v, this.luv_u);
            (this.lch_h = (n * 180) / Math.PI),
              this.lch_h < 0 && (this.lch_h = 360 + this.lch_h);
          }
        }
        lchToLuv() {
          let n = (this.lch_h / 180) * Math.PI;
          (this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(n) * this.lch_c),
            (this.luv_v = Math.sin(n) * this.lch_c);
        }
        calculateBoundingLines(n) {
          let r = Math.pow(n + 16, 3) / 1560896,
            i = r > t.epsilon ? r : n / t.kappa,
            o = i * (284517 * t.m_r0 - 94839 * t.m_r2),
            s = i * (838422 * t.m_r2 + 769860 * t.m_r1 + 731718 * t.m_r0),
            a = i * (632260 * t.m_r2 - 126452 * t.m_r1),
            l = i * (284517 * t.m_g0 - 94839 * t.m_g2),
            c = i * (838422 * t.m_g2 + 769860 * t.m_g1 + 731718 * t.m_g0),
            u = i * (632260 * t.m_g2 - 126452 * t.m_g1),
            f = i * (284517 * t.m_b0 - 94839 * t.m_b2),
            d = i * (838422 * t.m_b2 + 769860 * t.m_b1 + 731718 * t.m_b0),
            m = i * (632260 * t.m_b2 - 126452 * t.m_b1);
          (this.r0s = o / a),
            (this.r0i = (s * n) / a),
            (this.r1s = o / (a + 126452)),
            (this.r1i = ((s - 769860) * n) / (a + 126452)),
            (this.g0s = l / u),
            (this.g0i = (c * n) / u),
            (this.g1s = l / (u + 126452)),
            (this.g1i = ((c - 769860) * n) / (u + 126452)),
            (this.b0s = f / m),
            (this.b0i = (d * n) / m),
            (this.b1s = f / (m + 126452)),
            (this.b1i = ((d - 769860) * n) / (m + 126452));
        }
        calcMaxChromaHpluv() {
          let n = t.distanceFromOrigin(this.r0s, this.r0i),
            r = t.distanceFromOrigin(this.r1s, this.r1i),
            i = t.distanceFromOrigin(this.g0s, this.g0i),
            o = t.distanceFromOrigin(this.g1s, this.g1i),
            s = t.distanceFromOrigin(this.b0s, this.b0i),
            a = t.distanceFromOrigin(this.b1s, this.b1i);
          return t.min6(n, r, i, o, s, a);
        }
        calcMaxChromaHsluv(n) {
          let r = (n / 360) * Math.PI * 2,
            i = t.distanceFromOriginAngle(this.r0s, this.r0i, r),
            o = t.distanceFromOriginAngle(this.r1s, this.r1i, r),
            s = t.distanceFromOriginAngle(this.g0s, this.g0i, r),
            a = t.distanceFromOriginAngle(this.g1s, this.g1i, r),
            l = t.distanceFromOriginAngle(this.b0s, this.b0i, r),
            c = t.distanceFromOriginAngle(this.b1s, this.b1i, r);
          return t.min6(i, o, s, a, l, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) (this.lch_l = 100), (this.lch_c = 0);
          else if (this.hsluv_l < 1e-8) (this.lch_l = 0), (this.lch_c = 0);
          else {
            (this.lch_l = this.hsluv_l),
              this.calculateBoundingLines(this.hsluv_l);
            let n = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (n / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999) (this.hsluv_s = 0), (this.hsluv_l = 100);
          else if (this.lch_l < 1e-8) (this.hsluv_s = 0), (this.hsluv_l = 0);
          else {
            this.calculateBoundingLines(this.lch_l);
            let n = this.calcMaxChromaHsluv(this.lch_h);
            (this.hsluv_s = (this.lch_c / n) * 100),
              (this.hsluv_l = this.lch_l);
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) (this.lch_l = 100), (this.lch_c = 0);
          else if (this.hpluv_l < 1e-8) (this.lch_l = 0), (this.lch_c = 0);
          else {
            (this.lch_l = this.hpluv_l),
              this.calculateBoundingLines(this.hpluv_l);
            let n = this.calcMaxChromaHpluv();
            this.lch_c = (n / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999) (this.hpluv_p = 0), (this.hpluv_l = 100);
          else if (this.lch_l < 1e-8) (this.hpluv_p = 0), (this.hpluv_l = 0);
          else {
            this.calculateBoundingLines(this.lch_l);
            let n = this.calcMaxChromaHpluv();
            (this.hpluv_p = (this.lch_c / n) * 100),
              (this.hpluv_l = this.lch_l);
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb();
        }
        hpluvToRgb() {
          this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb();
        }
        hsluvToHex() {
          this.hsluvToRgb(), this.rgbToHex();
        }
        hpluvToHex() {
          this.hpluvToRgb(), this.rgbToHex();
        }
        rgbToHsluv() {
          this.rgbToXyz(),
            this.xyzToLuv(),
            this.luvToLch(),
            this.lchToHpluv(),
            this.lchToHsluv();
        }
        rgbToHpluv() {
          this.rgbToXyz(),
            this.xyzToLuv(),
            this.luvToLch(),
            this.lchToHpluv(),
            this.lchToHpluv();
        }
        hexToHsluv() {
          this.hexToRgb(), this.rgbToHsluv();
        }
        hexToHpluv() {
          this.hexToRgb(), this.rgbToHpluv();
        }
      };
      (e.Hsluv = t),
        (t.hexChars = "0123456789abcdef"),
        (t.refY = 1),
        (t.refU = 0.19783000664283),
        (t.refV = 0.46831999493879),
        (t.kappa = 903.2962962),
        (t.epsilon = 0.0088564516),
        (t.m_r0 = 3.240969941904521),
        (t.m_r1 = -1.537383177570093),
        (t.m_r2 = -0.498610760293),
        (t.m_g0 = -0.96924363628087),
        (t.m_g1 = 1.87596750150772),
        (t.m_g2 = 0.041555057407175),
        (t.m_b0 = 0.055630079696993),
        (t.m_b1 = -0.20397695888897),
        (t.m_b2 = 1.056971514242878);
    },
  }),
  XI = an({
    "../../../node_modules/eventemitter3/index.js"(e, t) {
      "use strict";
      var n = Object.prototype.hasOwnProperty,
        r = "~";
      function i() {}
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
      function o(c, u, f) {
        (this.fn = c), (this.context = u), (this.once = f || !1);
      }
      function s(c, u, f, d, m) {
        if (typeof f != "function")
          throw new TypeError("The listener must be a function");
        var y = new o(f, d || c, m),
          g = r ? r + u : u;
        return (
          c._events[g]
            ? c._events[g].fn
              ? (c._events[g] = [c._events[g], y])
              : c._events[g].push(y)
            : ((c._events[g] = y), c._eventsCount++),
          c
        );
      }
      function a(c, u) {
        --c._eventsCount === 0 ? (c._events = new i()) : delete c._events[u];
      }
      function l() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      (l.prototype.eventNames = function () {
        var u = [],
          f,
          d;
        if (this._eventsCount === 0) return u;
        for (d in (f = this._events))
          n.call(f, d) && u.push(r ? d.slice(1) : d);
        return Object.getOwnPropertySymbols
          ? u.concat(Object.getOwnPropertySymbols(f))
          : u;
      }),
        (l.prototype.listeners = function (u) {
          var f = r ? r + u : u,
            d = this._events[f];
          if (!d) return [];
          if (d.fn) return [d.fn];
          for (var m = 0, y = d.length, g = new Array(y); m < y; m++)
            g[m] = d[m].fn;
          return g;
        }),
        (l.prototype.listenerCount = function (u) {
          var f = r ? r + u : u,
            d = this._events[f];
          return d ? (d.fn ? 1 : d.length) : 0;
        }),
        (l.prototype.emit = function (u, f, d, m, y, g) {
          var x = r ? r + u : u;
          if (!this._events[x]) return !1;
          var p = this._events[x],
            h = arguments.length,
            v,
            S;
          if (p.fn) {
            switch ((p.once && this.removeListener(u, p.fn, void 0, !0), h)) {
              case 1:
                return p.fn.call(p.context), !0;
              case 2:
                return p.fn.call(p.context, f), !0;
              case 3:
                return p.fn.call(p.context, f, d), !0;
              case 4:
                return p.fn.call(p.context, f, d, m), !0;
              case 5:
                return p.fn.call(p.context, f, d, m, y), !0;
              case 6:
                return p.fn.call(p.context, f, d, m, y, g), !0;
            }
            for (S = 1, v = new Array(h - 1); S < h; S++)
              v[S - 1] = arguments[S];
            p.fn.apply(p.context, v);
          } else {
            var k = p.length,
              w;
            for (S = 0; S < k; S++)
              switch (
                (p[S].once && this.removeListener(u, p[S].fn, void 0, !0), h)
              ) {
                case 1:
                  p[S].fn.call(p[S].context);
                  break;
                case 2:
                  p[S].fn.call(p[S].context, f);
                  break;
                case 3:
                  p[S].fn.call(p[S].context, f, d);
                  break;
                case 4:
                  p[S].fn.call(p[S].context, f, d, m);
                  break;
                default:
                  if (!v)
                    for (w = 1, v = new Array(h - 1); w < h; w++)
                      v[w - 1] = arguments[w];
                  p[S].fn.apply(p[S].context, v);
              }
          }
          return !0;
        }),
        (l.prototype.on = function (u, f, d) {
          return s(this, u, f, d, !1);
        }),
        (l.prototype.once = function (u, f, d) {
          return s(this, u, f, d, !0);
        }),
        (l.prototype.removeListener = function (u, f, d, m) {
          var y = r ? r + u : u;
          if (!this._events[y]) return this;
          if (!f) return a(this, y), this;
          var g = this._events[y];
          if (g.fn)
            g.fn === f &&
              (!m || g.once) &&
              (!d || g.context === d) &&
              a(this, y);
          else {
            for (var x = 0, p = [], h = g.length; x < h; x++)
              (g[x].fn !== f ||
                (m && !g[x].once) ||
                (d && g[x].context !== d)) &&
                p.push(g[x]);
            p.length
              ? (this._events[y] = p.length === 1 ? p[0] : p)
              : a(this, y);
          }
          return this;
        }),
        (l.prototype.removeAllListeners = function (u) {
          var f;
          return (
            u
              ? ((f = r ? r + u : u), this._events[f] && a(this, f))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (l.prototype.off = l.prototype.removeListener),
        (l.prototype.addListener = l.prototype.on),
        (l.prefixed = r),
        (l.EventEmitter = l),
        typeof t < "u" && (t.exports = l);
    },
  }),
  Wp = an({
    "../../../node_modules/process/browser.js"(e, t) {
      var n = (t.exports = {}),
        r,
        i;
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function s() {
        throw new Error("clearTimeout has not been defined");
      }
      (function () {
        try {
          typeof setTimeout == "function" ? (r = setTimeout) : (r = o);
        } catch {
          r = o;
        }
        try {
          typeof clearTimeout == "function" ? (i = clearTimeout) : (i = s);
        } catch {
          i = s;
        }
      })();
      function a(p) {
        if (r === setTimeout) return setTimeout(p, 0);
        if ((r === o || !r) && setTimeout)
          return (r = setTimeout), setTimeout(p, 0);
        try {
          return r(p, 0);
        } catch {
          try {
            return r.call(null, p, 0);
          } catch {
            return r.call(this, p, 0);
          }
        }
      }
      function l(p) {
        if (i === clearTimeout) return clearTimeout(p);
        if ((i === s || !i) && clearTimeout)
          return (i = clearTimeout), clearTimeout(p);
        try {
          return i(p);
        } catch {
          try {
            return i.call(null, p);
          } catch {
            return i.call(this, p);
          }
        }
      }
      var c = [],
        u = !1,
        f,
        d = -1;
      function m() {
        !u ||
          !f ||
          ((u = !1), f.length ? (c = f.concat(c)) : (d = -1), c.length && y());
      }
      function y() {
        if (!u) {
          var p = a(m);
          u = !0;
          for (var h = c.length; h; ) {
            for (f = c, c = []; ++d < h; ) f && f[d].run();
            (d = -1), (h = c.length);
          }
          (f = null), (u = !1), l(p);
        }
      }
      n.nextTick = function (p) {
        var h = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var v = 1; v < arguments.length; v++) h[v - 1] = arguments[v];
        c.push(new g(p, h)), c.length === 1 && !u && a(y);
      };
      function g(p, h) {
        (this.fun = p), (this.array = h);
      }
      (g.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
        (n.title = "browser"),
        (n.browser = !0),
        (n.env = {}),
        (n.argv = []),
        (n.version = ""),
        (n.versions = {});
      function x() {}
      (n.on = x),
        (n.addListener = x),
        (n.once = x),
        (n.off = x),
        (n.removeListener = x),
        (n.removeAllListeners = x),
        (n.emit = x),
        (n.prependListener = x),
        (n.prependOnceListener = x),
        (n.listeners = function (p) {
          return [];
        }),
        (n.binding = function (p) {
          throw new Error("process.binding is not supported");
        }),
        (n.cwd = function () {
          return "/";
        }),
        (n.chdir = function (p) {
          throw new Error("process.chdir is not supported");
        }),
        (n.umask = function () {
          return 0;
        });
    },
  }),
  YI = an({
    "../../../node_modules/@juggle/resize-observer/lib/exports/resize-observer.umd.js"(
      e,
      t
    ) {
      (function (n, r) {
        typeof e == "object" && typeof t < "u"
          ? r(e)
          : typeof define == "function" && define.amd
          ? define(["exports"], r)
          : ((n = typeof globalThis < "u" ? globalThis : n || self),
            r((n.ResizeObserver = {})));
      })(e, function (n) {
        "use strict";
        var r = [],
          i = function () {
            return r.some(function (P) {
              return P.activeTargets.length > 0;
            });
          },
          o = function () {
            return r.some(function (P) {
              return P.skippedTargets.length > 0;
            });
          },
          s = "ResizeObserver loop completed with undelivered notifications.",
          a = function () {
            var P;
            typeof ErrorEvent == "function"
              ? (P = new ErrorEvent("error", { message: s }))
              : ((P = document.createEvent("Event")),
                P.initEvent("error", !1, !1),
                (P.message = s)),
              O.dispatchEvent(P);
          },
          l;
        (function (P) {
          (P.BORDER_BOX = "border-box"),
            (P.CONTENT_BOX = "content-box"),
            (P.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
        })(l || (l = {}));
        var c = function (P) {
            return Object.freeze(P);
          },
          u = (function () {
            function P(_, M) {
              (this.inlineSize = _), (this.blockSize = M), c(this);
            }
            return P;
          })(),
          f = (function () {
            function P(_, M, N, ae) {
              return (
                (this.x = _),
                (this.y = M),
                (this.width = N),
                (this.height = ae),
                (this.top = this.y),
                (this.left = this.x),
                (this.bottom = this.top + this.height),
                (this.right = this.left + this.width),
                c(this)
              );
            }
            return (
              (P.prototype.toJSON = function () {
                var _ = this,
                  M = _.x,
                  N = _.y,
                  ae = _.top,
                  yt = _.right,
                  tt = _.bottom,
                  Be = _.left,
                  Qn = _.width,
                  Ht = _.height;
                return {
                  x: M,
                  y: N,
                  top: ae,
                  right: yt,
                  bottom: tt,
                  left: Be,
                  width: Qn,
                  height: Ht,
                };
              }),
              (P.fromRect = function (_) {
                return new P(_.x, _.y, _.width, _.height);
              }),
              P
            );
          })(),
          d = function (P) {
            return P instanceof SVGElement && "getBBox" in P;
          },
          m = function (P) {
            if (d(P)) {
              var _ = P.getBBox(),
                M = _.width,
                N = _.height;
              return !M && !N;
            }
            var ae = P,
              yt = ae.offsetWidth,
              tt = ae.offsetHeight;
            return !(yt || tt || P.getClientRects().length);
          },
          y = function (P) {
            var _, M;
            if (P instanceof Element) return !0;
            var N =
              (M =
                (_ = P) === null || _ === void 0 ? void 0 : _.ownerDocument) ===
                null || M === void 0
                ? void 0
                : M.defaultView;
            return !!(N && P instanceof N.Element);
          },
          g = function (P) {
            switch (P.tagName) {
              case "INPUT":
                if (P.type !== "image") break;
              case "VIDEO":
              case "AUDIO":
              case "EMBED":
              case "OBJECT":
              case "CANVAS":
              case "IFRAME":
              case "IMG":
                return !0;
            }
            return !1;
          },
          x = typeof O < "u" ? O : {},
          p = new WeakMap(),
          h = /auto|scroll/,
          v = /^tb|vertical/,
          S = /msie|trident/i.test(x.navigator && x.navigator.userAgent),
          k = function (P) {
            return parseFloat(P || "0");
          },
          w = function (P, _, M) {
            return (
              P === void 0 && (P = 0),
              _ === void 0 && (_ = 0),
              M === void 0 && (M = !1),
              new u((M ? _ : P) || 0, (M ? P : _) || 0)
            );
          },
          T = c({
            devicePixelContentBoxSize: w(),
            borderBoxSize: w(),
            contentBoxSize: w(),
            contentRect: new f(0, 0, 0, 0),
          }),
          E = function (P, _) {
            if ((_ === void 0 && (_ = !1), p.has(P) && !_)) return p.get(P);
            if (m(P)) return p.set(P, T), T;
            var M = getComputedStyle(P),
              N = d(P) && P.ownerSVGElement && P.getBBox(),
              ae = !S && M.boxSizing === "border-box",
              yt = v.test(M.writingMode || ""),
              tt = !N && h.test(M.overflowY || ""),
              Be = !N && h.test(M.overflowX || ""),
              Qn = N ? 0 : k(M.paddingTop),
              Ht = N ? 0 : k(M.paddingRight),
              ti = N ? 0 : k(M.paddingBottom),
              Bi = N ? 0 : k(M.paddingLeft),
              Fk = N ? 0 : k(M.borderTopWidth),
              Lk = N ? 0 : k(M.borderRightWidth),
              Mk = N ? 0 : k(M.borderBottomWidth),
              Ok = N ? 0 : k(M.borderLeftWidth),
              mm = Bi + Ht,
              vm = Qn + ti,
              yu = Ok + Lk,
              bu = Fk + Mk,
              gm = Be ? P.offsetHeight - bu - P.clientHeight : 0,
              ym = tt ? P.offsetWidth - yu - P.clientWidth : 0,
              Dk = ae ? mm + yu : 0,
              Ak = ae ? vm + bu : 0,
              Fa = N ? N.width : k(M.width) - Dk - ym,
              La = N ? N.height : k(M.height) - Ak - gm,
              Vk = Fa + mm + ym + yu,
              Bk = La + vm + gm + bu,
              bm = c({
                devicePixelContentBoxSize: w(
                  Math.round(Fa * devicePixelRatio),
                  Math.round(La * devicePixelRatio),
                  yt
                ),
                borderBoxSize: w(Vk, Bk, yt),
                contentBoxSize: w(Fa, La, yt),
                contentRect: new f(Bi, Qn, Fa, La),
              });
            return p.set(P, bm), bm;
          },
          F = function (P, _, M) {
            var N = E(P, M),
              ae = N.borderBoxSize,
              yt = N.contentBoxSize,
              tt = N.devicePixelContentBoxSize;
            switch (_) {
              case l.DEVICE_PIXEL_CONTENT_BOX:
                return tt;
              case l.BORDER_BOX:
                return ae;
              default:
                return yt;
            }
          },
          I = (function () {
            function P(_) {
              var M = E(_);
              (this.target = _),
                (this.contentRect = M.contentRect),
                (this.borderBoxSize = c([M.borderBoxSize])),
                (this.contentBoxSize = c([M.contentBoxSize])),
                (this.devicePixelContentBoxSize = c([
                  M.devicePixelContentBoxSize,
                ]));
            }
            return P;
          })(),
          z = function (P) {
            if (m(P)) return 1 / 0;
            for (var _ = 0, M = P.parentNode; M; ) (_ += 1), (M = M.parentNode);
            return _;
          },
          $ = function () {
            var P = 1 / 0,
              _ = [];
            r.forEach(function (tt) {
              if (tt.activeTargets.length !== 0) {
                var Be = [];
                tt.activeTargets.forEach(function (Ht) {
                  var ti = new I(Ht.target),
                    Bi = z(Ht.target);
                  Be.push(ti),
                    (Ht.lastReportedSize = F(Ht.target, Ht.observedBox)),
                    Bi < P && (P = Bi);
                }),
                  _.push(function () {
                    tt.callback.call(tt.observer, Be, tt.observer);
                  }),
                  tt.activeTargets.splice(0, tt.activeTargets.length);
              }
            });
            for (var M = 0, N = _; M < N.length; M++) {
              var ae = N[M];
              ae();
            }
            return P;
          },
          re = function (P) {
            r.forEach(function (M) {
              M.activeTargets.splice(0, M.activeTargets.length),
                M.skippedTargets.splice(0, M.skippedTargets.length),
                M.observationTargets.forEach(function (ae) {
                  ae.isActive() &&
                    (z(ae.target) > P
                      ? M.activeTargets.push(ae)
                      : M.skippedTargets.push(ae));
                });
            });
          },
          J = function () {
            var P = 0;
            for (re(P); i(); ) (P = $()), re(P);
            return o() && a(), P > 0;
          },
          V,
          X = [],
          Z = function () {
            return X.splice(0).forEach(function (P) {
              return P();
            });
          },
          ee = function (P) {
            if (!V) {
              var _ = 0,
                M = document.createTextNode(""),
                N = { characterData: !0 };
              new MutationObserver(function () {
                return Z();
              }).observe(M, N),
                (V = function () {
                  M.textContent = "" + (_ ? _-- : _++);
                });
            }
            X.push(P), V();
          },
          W = function (P) {
            ee(function () {
              requestAnimationFrame(P);
            });
          },
          te = 0,
          ne = function () {
            return !!te;
          },
          ye = 250,
          de = {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0,
          },
          Q = [
            "resize",
            "load",
            "transitionend",
            "animationend",
            "animationstart",
            "animationiteration",
            "keyup",
            "keydown",
            "mouseup",
            "mousedown",
            "mouseover",
            "mouseout",
            "blur",
            "focus",
          ],
          gt = function (P) {
            return P === void 0 && (P = 0), Date.now() + P;
          },
          Ve = !1,
          Xe = (function () {
            function P() {
              var _ = this;
              (this.stopped = !0),
                (this.listener = function () {
                  return _.schedule();
                });
            }
            return (
              (P.prototype.run = function (_) {
                var M = this;
                if ((_ === void 0 && (_ = ye), !Ve)) {
                  Ve = !0;
                  var N = gt(_);
                  W(function () {
                    var ae = !1;
                    try {
                      ae = J();
                    } finally {
                      if (((Ve = !1), (_ = N - gt()), !ne())) return;
                      ae ? M.run(1e3) : _ > 0 ? M.run(_) : M.start();
                    }
                  });
                }
              }),
              (P.prototype.schedule = function () {
                this.stop(), this.run();
              }),
              (P.prototype.observe = function () {
                var _ = this,
                  M = function () {
                    return _.observer && _.observer.observe(document.body, de);
                  };
                document.body ? M() : x.addEventListener("DOMContentLoaded", M);
              }),
              (P.prototype.start = function () {
                var _ = this;
                this.stopped &&
                  ((this.stopped = !1),
                  (this.observer = new MutationObserver(this.listener)),
                  this.observe(),
                  Q.forEach(function (M) {
                    return x.addEventListener(M, _.listener, !0);
                  }));
              }),
              (P.prototype.stop = function () {
                var _ = this;
                this.stopped ||
                  (this.observer && this.observer.disconnect(),
                  Q.forEach(function (M) {
                    return x.removeEventListener(M, _.listener, !0);
                  }),
                  (this.stopped = !0));
              }),
              P
            );
          })(),
          lt = new Xe(),
          yr = function (P) {
            !te && P > 0 && lt.start(), (te += P), !te && lt.stop();
          },
          ue = function (P) {
            return !d(P) && !g(P) && getComputedStyle(P).display === "inline";
          },
          qn = (function () {
            function P(_, M) {
              (this.target = _),
                (this.observedBox = M || l.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
            }
            return (
              (P.prototype.isActive = function () {
                var _ = F(this.target, this.observedBox, !0);
                return (
                  ue(this.target) && (this.lastReportedSize = _),
                  this.lastReportedSize.inlineSize !== _.inlineSize ||
                    this.lastReportedSize.blockSize !== _.blockSize
                );
              }),
              P
            );
          })(),
          zt = (function () {
            function P(_, M) {
              (this.activeTargets = []),
                (this.skippedTargets = []),
                (this.observationTargets = []),
                (this.observer = _),
                (this.callback = M);
            }
            return P;
          })(),
          _n = new WeakMap(),
          gn = function (P, _) {
            for (var M = 0; M < P.length; M += 1)
              if (P[M].target === _) return M;
            return -1;
          },
          Nt = (function () {
            function P() {}
            return (
              (P.connect = function (_, M) {
                var N = new zt(_, M);
                _n.set(_, N);
              }),
              (P.observe = function (_, M, N) {
                var ae = _n.get(_),
                  yt = ae.observationTargets.length === 0;
                gn(ae.observationTargets, M) < 0 &&
                  (yt && r.push(ae),
                  ae.observationTargets.push(new qn(M, N && N.box)),
                  yr(1),
                  lt.schedule());
              }),
              (P.unobserve = function (_, M) {
                var N = _n.get(_),
                  ae = gn(N.observationTargets, M),
                  yt = N.observationTargets.length === 1;
                ae >= 0 &&
                  (yt && r.splice(r.indexOf(N), 1),
                  N.observationTargets.splice(ae, 1),
                  yr(-1));
              }),
              (P.disconnect = function (_) {
                var M = this,
                  N = _n.get(_);
                N.observationTargets.slice().forEach(function (ae) {
                  return M.unobserve(_, ae.target);
                }),
                  N.activeTargets.splice(0, N.activeTargets.length);
              }),
              P
            );
          })(),
          Vi = (function () {
            function P(_) {
              if (arguments.length === 0)
                throw new TypeError(
                  "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (typeof _ != "function")
                throw new TypeError(
                  "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
                );
              Nt.connect(this, _);
            }
            return (
              (P.prototype.observe = function (_, M) {
                if (arguments.length === 0)
                  throw new TypeError(
                    "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                  );
                if (!y(_))
                  throw new TypeError(
                    "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                  );
                Nt.observe(this, _, M);
              }),
              (P.prototype.unobserve = function (_) {
                if (arguments.length === 0)
                  throw new TypeError(
                    "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                  );
                if (!y(_))
                  throw new TypeError(
                    "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                  );
                Nt.unobserve(this, _);
              }),
              (P.prototype.disconnect = function () {
                Nt.disconnect(this);
              }),
              (P.toString = function () {
                return "function ResizeObserver () { [polyfill code] }";
              }),
              P
            );
          })();
        (n.ResizeObserver = Vi),
          (n.ResizeObserverEntry = I),
          (n.ResizeObserverSize = u),
          Object.defineProperty(n, "__esModule", { value: !0 });
      });
    },
  }),
  GI = an({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
      e
    ) {
      "use strict";
      var t = typeof Symbol == "function" && Symbol.for,
        n = t ? Symbol.for("react.element") : 60103,
        r = t ? Symbol.for("react.portal") : 60106,
        i = t ? Symbol.for("react.fragment") : 60107,
        o = t ? Symbol.for("react.strict_mode") : 60108,
        s = t ? Symbol.for("react.profiler") : 60114,
        a = t ? Symbol.for("react.provider") : 60109,
        l = t ? Symbol.for("react.context") : 60110,
        c = t ? Symbol.for("react.async_mode") : 60111,
        u = t ? Symbol.for("react.concurrent_mode") : 60111,
        f = t ? Symbol.for("react.forward_ref") : 60112,
        d = t ? Symbol.for("react.suspense") : 60113,
        m = t ? Symbol.for("react.suspense_list") : 60120,
        y = t ? Symbol.for("react.memo") : 60115,
        g = t ? Symbol.for("react.lazy") : 60116,
        x = t ? Symbol.for("react.block") : 60121,
        p = t ? Symbol.for("react.fundamental") : 60117,
        h = t ? Symbol.for("react.responder") : 60118,
        v = t ? Symbol.for("react.scope") : 60119;
      function S(w) {
        if (typeof w == "object" && w !== null) {
          var T = w.$$typeof;
          switch (T) {
            case n:
              switch (((w = w.type), w)) {
                case c:
                case u:
                case i:
                case s:
                case o:
                case d:
                  return w;
                default:
                  switch (((w = w && w.$$typeof), w)) {
                    case l:
                    case f:
                    case g:
                    case y:
                    case a:
                      return w;
                    default:
                      return T;
                  }
              }
            case r:
              return T;
          }
        }
      }
      function k(w) {
        return S(w) === u;
      }
      (e.AsyncMode = c),
        (e.ConcurrentMode = u),
        (e.ContextConsumer = l),
        (e.ContextProvider = a),
        (e.Element = n),
        (e.ForwardRef = f),
        (e.Fragment = i),
        (e.Lazy = g),
        (e.Memo = y),
        (e.Portal = r),
        (e.Profiler = s),
        (e.StrictMode = o),
        (e.Suspense = d),
        (e.isAsyncMode = function (w) {
          return k(w) || S(w) === c;
        }),
        (e.isConcurrentMode = k),
        (e.isContextConsumer = function (w) {
          return S(w) === l;
        }),
        (e.isContextProvider = function (w) {
          return S(w) === a;
        }),
        (e.isElement = function (w) {
          return typeof w == "object" && w !== null && w.$$typeof === n;
        }),
        (e.isForwardRef = function (w) {
          return S(w) === f;
        }),
        (e.isFragment = function (w) {
          return S(w) === i;
        }),
        (e.isLazy = function (w) {
          return S(w) === g;
        }),
        (e.isMemo = function (w) {
          return S(w) === y;
        }),
        (e.isPortal = function (w) {
          return S(w) === r;
        }),
        (e.isProfiler = function (w) {
          return S(w) === s;
        }),
        (e.isStrictMode = function (w) {
          return S(w) === o;
        }),
        (e.isSuspense = function (w) {
          return S(w) === d;
        }),
        (e.isValidElementType = function (w) {
          return (
            typeof w == "string" ||
            typeof w == "function" ||
            w === i ||
            w === u ||
            w === s ||
            w === o ||
            w === d ||
            w === m ||
            (typeof w == "object" &&
              w !== null &&
              (w.$$typeof === g ||
                w.$$typeof === y ||
                w.$$typeof === a ||
                w.$$typeof === l ||
                w.$$typeof === f ||
                w.$$typeof === p ||
                w.$$typeof === h ||
                w.$$typeof === v ||
                w.$$typeof === x))
          );
        }),
        (e.typeOf = S);
    },
  }),
  KI = an({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(
      e,
      t
    ) {
      "use strict";
      t.exports = GI();
    },
  }),
  su = an({
    "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(
      e,
      t
    ) {
      "use strict";
      var n = KI(),
        r = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        o = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        a = {};
      (a[n.ForwardRef] = o), (a[n.Memo] = s);
      function l(x) {
        return n.isMemo(x) ? s : a[x.$$typeof] || r;
      }
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        m = Object.getPrototypeOf,
        y = Object.prototype;
      function g(x, p, h) {
        if (typeof p != "string") {
          if (y) {
            var v = m(p);
            v && v !== y && g(x, v, h);
          }
          var S = u(p);
          f && (S = S.concat(f(p)));
          for (var k = l(x), w = l(p), T = 0; T < S.length; ++T) {
            var E = S[T];
            if (!i[E] && !(h && h[E]) && !(w && w[E]) && !(k && k[E])) {
              var F = d(p, E);
              try {
                c(x, E, F);
              } catch {}
            }
          }
        }
        return x;
      }
      t.exports = g;
    },
  }),
  qI = an({
    "../../../node_modules/archy/index.js"(e, t) {
      t.exports = function n(r, i, o) {
        i === void 0 && (i = ""), o || (o = {});
        var s = function (u) {
          var f = {
            "\u2502": "|",
            "\u2514": "`",
            "\u251C": "+",
            "\u2500": "-",
            "\u252C": "-",
          };
          return o.unicode === !1 ? f[u] : u;
        };
        typeof r == "string" && (r = { label: r });
        var a = r.nodes || [],
          l = (r.label || "").split(`
`),
          c =
            `
` +
            i +
            (a.length ? s("\u2502") : " ") +
            " ";
        return (
          i +
          l.join(c) +
          `
` +
          a
            .map(function (u, f) {
              var d = f === a.length - 1,
                m = u.nodes && u.nodes.length,
                y = i + (d ? " " : s("\u2502")) + " ";
              return (
                i +
                s(d ? "\u2514" : "\u251C") +
                s("\u2500") +
                s(m ? "\u252C" : "\u2500") +
                " " +
                n(u, y, o).slice(i.length + 2)
              );
            })
            .join("")
        );
      };
    },
  }),
  QI = an({
    "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(
      e,
      t
    ) {
      (function () {
        function n(p, h) {
          document.addEventListener
            ? p.addEventListener("scroll", h, !1)
            : p.attachEvent("scroll", h);
        }
        function r(p) {
          document.body
            ? p()
            : document.addEventListener
            ? document.addEventListener("DOMContentLoaded", function h() {
                document.removeEventListener("DOMContentLoaded", h), p();
              })
            : document.attachEvent("onreadystatechange", function h() {
                (document.readyState == "interactive" ||
                  document.readyState == "complete") &&
                  (document.detachEvent("onreadystatechange", h), p());
              });
        }
        function i(p) {
          (this.a = document.createElement("div")),
            this.a.setAttribute("aria-hidden", "true"),
            this.a.appendChild(document.createTextNode(p)),
            (this.b = document.createElement("span")),
            (this.c = document.createElement("span")),
            (this.h = document.createElement("span")),
            (this.f = document.createElement("span")),
            (this.g = -1),
            (this.b.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.c.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.f.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.h.style.cssText =
              "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
            this.b.appendChild(this.h),
            this.c.appendChild(this.f),
            this.a.appendChild(this.b),
            this.a.appendChild(this.c);
        }
        function o(p, h) {
          p.a.style.cssText =
            "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
            h +
            ";";
        }
        function s(p) {
          var h = p.a.offsetWidth,
            v = h + 100;
          return (
            (p.f.style.width = v + "px"),
            (p.c.scrollLeft = v),
            (p.b.scrollLeft = p.b.scrollWidth + 100),
            p.g !== h ? ((p.g = h), !0) : !1
          );
        }
        function a(p, h) {
          function v() {
            var k = S;
            s(k) && k.a.parentNode && h(k.g);
          }
          var S = p;
          n(p.b, v), n(p.c, v), s(p);
        }
        function l(p, h) {
          var v = h || {};
          (this.family = p),
            (this.style = v.style || "normal"),
            (this.weight = v.weight || "normal"),
            (this.stretch = v.stretch || "normal");
        }
        var c = null,
          u = null,
          f = null,
          d = null;
        function m() {
          if (u === null)
            if (y() && /Apple/.test(O.navigator.vendor)) {
              var p = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                O.navigator.userAgent
              );
              u = !!p && 603 > parseInt(p[1], 10);
            } else u = !1;
          return u;
        }
        function y() {
          return d === null && (d = !!document.fonts), d;
        }
        function g() {
          if (f === null) {
            var p = document.createElement("div");
            try {
              p.style.font = "condensed 100px sans-serif";
            } catch {}
            f = p.style.font !== "";
          }
          return f;
        }
        function x(p, h) {
          return [p.style, p.weight, g() ? p.stretch : "", "100px", h].join(
            " "
          );
        }
        (l.prototype.load = function (p, h) {
          var v = this,
            S = p || "BESbswy",
            k = 0,
            w = h || 3e3,
            T = new Date().getTime();
          return new Promise(function (E, F) {
            if (y() && !m()) {
              var I = new Promise(function ($, re) {
                  function J() {
                    new Date().getTime() - T >= w
                      ? re(Error("" + w + "ms timeout exceeded"))
                      : document.fonts
                          .load(x(v, '"' + v.family + '"'), S)
                          .then(function (V) {
                            1 <= V.length ? $() : setTimeout(J, 25);
                          }, re);
                  }
                  J();
                }),
                z = new Promise(function ($, re) {
                  k = setTimeout(function () {
                    re(Error("" + w + "ms timeout exceeded"));
                  }, w);
                });
              Promise.race([z, I]).then(function () {
                clearTimeout(k), E(v);
              }, F);
            } else
              r(function () {
                function $() {
                  var Q;
                  (Q =
                    (Z != -1 && ee != -1) ||
                    (Z != -1 && W != -1) ||
                    (ee != -1 && W != -1)) &&
                    ((Q = Z != ee && Z != W && ee != W) ||
                      (c === null &&
                        ((Q = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                          O.navigator.userAgent
                        )),
                        (c =
                          !!Q &&
                          (536 > parseInt(Q[1], 10) ||
                            (parseInt(Q[1], 10) === 536 &&
                              11 >= parseInt(Q[2], 10))))),
                      (Q =
                        c &&
                        ((Z == te && ee == te && W == te) ||
                          (Z == ne && ee == ne && W == ne) ||
                          (Z == ye && ee == ye && W == ye)))),
                    (Q = !Q)),
                    Q &&
                      (de.parentNode && de.parentNode.removeChild(de),
                      clearTimeout(k),
                      E(v));
                }
                function re() {
                  if (new Date().getTime() - T >= w)
                    de.parentNode && de.parentNode.removeChild(de),
                      F(Error("" + w + "ms timeout exceeded"));
                  else {
                    var Q = document.hidden;
                    (Q === !0 || Q === void 0) &&
                      ((Z = J.a.offsetWidth),
                      (ee = V.a.offsetWidth),
                      (W = X.a.offsetWidth),
                      $()),
                      (k = setTimeout(re, 50));
                  }
                }
                var J = new i(S),
                  V = new i(S),
                  X = new i(S),
                  Z = -1,
                  ee = -1,
                  W = -1,
                  te = -1,
                  ne = -1,
                  ye = -1,
                  de = document.createElement("div");
                (de.dir = "ltr"),
                  o(J, x(v, "sans-serif")),
                  o(V, x(v, "serif")),
                  o(X, x(v, "monospace")),
                  de.appendChild(J.a),
                  de.appendChild(V.a),
                  de.appendChild(X.a),
                  document.body.appendChild(de),
                  (te = J.a.offsetWidth),
                  (ne = V.a.offsetWidth),
                  (ye = X.a.offsetWidth),
                  re(),
                  a(J, function (Q) {
                    (Z = Q), $();
                  }),
                  o(J, x(v, '"' + v.family + '",sans-serif')),
                  a(V, function (Q) {
                    (ee = Q), $();
                  }),
                  o(V, x(v, '"' + v.family + '",serif')),
                  a(X, function (Q) {
                    (W = Q), $();
                  }),
                  o(X, x(v, '"' + v.family + '",monospace'));
              });
          });
        }),
          typeof t == "object"
            ? (t.exports = l)
            : ((O.FontFaceObserver = l),
              (O.FontFaceObserver.prototype.load = l.prototype.load));
      })();
    },
  });
function Lp(e, t) {
  let n = { style: t };
  return b.isValidElement(e) ? b.cloneElement(e, n) : b.createElement(e, n);
}
var ZI = class extends Error {},
  jS = class extends Error {},
  JI = class extends me {
    constructor(e) {
      super(e),
        (this.state = { error: void 0, forceUpdateKey: e.forceUpdateKey });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      if (e.forceUpdateKey !== t.forceUpdateKey) {
        let n = { forceUpdateKey: e.forceUpdateKey };
        return t.error && (n.error = void 0), n;
      }
      return null;
    }
    render() {
      if (this.state.error === void 0) return this.props.children;
      if (!(this.state.error instanceof ZI)) {
        let n = new jS();
        throw ((n.cause = this.state.error), n);
      }
      let { notFoundPage: e, defaultPageStyle: t } = this.props;
      if (!e) throw this.state.error;
      return Lp(e, t);
    }
  },
  eF = ":([a-z]\\w*)",
  Li = new RegExp(eF, "gi");
function WS(e, t) {
  return e.replace(Li, (n, r) => {
    let i = t[r];
    return typeof i != "string" || i.length === 0 ? n : encodeURIComponent(i);
  });
}
function US(e, t) {
  if (!e.startsWith("/") || !t.startsWith("/"))
    throw new Error("from/to paths are expected to be absolute");
  let [n] = m1(e),
    [r, i] = m1(t),
    o = tF(n, r);
  return (
    o === "" && (o = "."),
    !o.startsWith(".") && !o.startsWith("/") && (o = "./" + o),
    o + "/" + i
  );
}
function m1(e) {
  let t = e.lastIndexOf("/");
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
var dp = 46,
  Ao = 47,
  Zr = (e, t) => e.charCodeAt(t),
  v1 = (e, t) => e.lastIndexOf(t),
  Bo = (e, t, n) => e.slice(t, n);
function tF(e, t) {
  if (e === t || ((e = "/" + y1(e)), (t = "/" + y1(t)), e === t)) return "";
  let n = 1,
    r = e.length,
    i = r - n,
    o = 1,
    s = t.length - o,
    a = i < s ? i : s,
    l = -1,
    c = 0;
  for (; c < a; c++) {
    let f = Zr(e, n + c);
    if (f !== Zr(t, o + c)) break;
    f === Ao && (l = c);
  }
  if (c === a)
    if (s > a) {
      if (Zr(t, o + c) === Ao) return Bo(t, o + c + 1);
      if (c === 0) return Bo(t, o + c);
    } else i > a && (Zr(e, n + c) === Ao ? (l = c) : c === 0 && (l = 0));
  let u = "";
  for (c = n + l + 1; c <= r; ++c)
    (c === r || Zr(e, c) === Ao) && (u += u.length === 0 ? ".." : "/..");
  return `${u}${Bo(t, o + l)}`;
}
var nF = !1,
  Oc = "/",
  g1 = (e) => e === Ao;
function y1(e) {
  let t = "",
    n = 0,
    r = -1,
    i = 0,
    o = 0;
  for (let s = 0; s <= e.length; ++s) {
    if (s < e.length) o = Zr(e, s);
    else {
      if (g1(o)) break;
      o = Ao;
    }
    if (g1(o)) {
      if (!(r === s - 1 || i === 1))
        if (i === 2) {
          if (
            t.length < 2 ||
            n !== 2 ||
            Zr(t, t.length - 1) !== dp ||
            Zr(t, t.length - 2) !== dp
          ) {
            if (t.length > 2) {
              let a = v1(t, Oc);
              a === -1
                ? ((t = ""), (n = 0))
                : ((t = Bo(t, 0, a)), (n = t.length - 1 - v1(t, Oc))),
                (r = s),
                (i = 0);
              continue;
            } else if (t.length !== 0) {
              (t = ""), (n = 0), (r = s), (i = 0);
              continue;
            }
          }
          nF && ((t += t.length > 0 ? `${Oc}..` : ".."), (n = 2));
        } else
          t.length > 0
            ? (t += `${Oc}${Bo(e, r + 1, s)}`)
            : (t = Bo(e, r + 1, s)),
            (n = s - r - 1);
      (r = s), (i = 0);
    } else o === dp && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function XS(e) {
  let t = typeof O < "u" ? O.location.search : "";
  return t ? rF(t, e) : e;
}
function rF(e, t) {
  let n = t.indexOf("#"),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? "" : t.substring(n),
    o = r.indexOf("?");
  if (o === -1) return r + e + i;
  let s = new URLSearchParams(e),
    a = r.substring(o + 1),
    l = new URLSearchParams(a);
  for (let [c, u] of s) l.has(c) || l.append(c, u);
  return r.substring(0, o + 1) + l.toString() + i;
}
function Qc(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function la(e) {
  return typeof e == "string";
}
var iF = "preload";
function YS(e) {
  return typeof e == "object" && e !== null && !b.isValidElement(e) && iF in e;
}
function D$(e) {
  let t = b.lazy(e),
    n,
    r,
    i = b.forwardRef(function (s, a) {
      return b.createElement(r ?? t, a ? { ref: a, ...s } : s);
    });
  return (
    (i.preload = () => (n || (n = e().then((o) => ((r = o.default), r))), n)), i
  );
}
function au(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function oF(e) {
  return /bot|-google|google-|yandex|ia_archiver/iu.test(e);
}
function GS(e) {
  if ("scheduler" in O) {
    if ("yield" in scheduler) return scheduler.yield(e);
    if ("postTask" in scheduler) return scheduler.postTask(() => {}, e);
  }
  return e?.priority === "user-blocking"
    ? Promise.resolve()
    : new Promise((t) => {
        setTimeout(t);
      });
}
async function sF(e, t) {
  return await GS(t), e();
}
function aF(e, t = !0) {
  return new Promise((n) => {
    t && setTimeout(n, 100),
      requestAnimationFrame(() => {
        sF(n, e);
      });
  });
}
function KS(e, t, n) {
  ct(() => {
    (async () => {
      await aF(n, !1), e();
    })();
  }, t);
}
async function lF(e, t, n, r, i, o, s) {
  var a, l, c;
  let u = e,
    f = !1,
    d = { ...o },
    m = Array.from(u.matchAll(Li)),
    y = await Promise.all(
      m.map(async (h) => {
        var v;
        let S = h?.[0],
          k = h?.[1];
        if (!S || !k)
          throw new Error(
            "Failed to replace path variables: unexpected regex match group"
          );
        let w = o[k];
        if (!w || !la(w))
          throw new Error(`No slug found for path variable ${k}`);
        let T = await ((v = s?.[i]) === null || v === void 0
          ? void 0
          : v.call(s));
        if (!T || !t) return w;
        let E = await T.getRecordIdBySlug(w, t);
        if (!E) return w;
        let F = await T.getSlugByRecordId(E, n);
        if (!F) {
          f = !0;
          let I = await T.getSlugByRecordId(E, r);
          return I && (d[k] = I), I ?? w;
        }
        return (d[k] = F), F;
      })
    ),
    g = 0,
    x = "",
    p = !1;
  for (let h = 0; h < m.length; h++) {
    let v = m[h],
      S = y[h];
    !v ||
      !S ||
      ((x += u.substring(g, v.index)),
      (g =
        ((a = v.index) !== null && a !== void 0 ? a : 0) +
        ((c = (l = v[0]) === null || l === void 0 ? void 0 : l.length) !==
          null && c !== void 0
          ? c
          : 0)),
      (x += y[h]),
      (p = !0));
  }
  return p && (u = x), { path: u, pathVariables: d, isMissingInLocale: f };
}
async function cF({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: o,
  preserveQueryParams: s,
}) {
  let { path: a } = r,
    l = { path: a, pathVariables: i, isMissingInLocale: !1 };
  if (!a) return l;
  if (i && r.collectionId)
    try {
      l = await lF(a, e, t, n, r.collectionId, i, o);
    } catch {}
  return (
    t.slug && (l.path = "/" + t.slug + l.path),
    s && l.path && (l.path = XS(l.path)),
    l
  );
}
function uF(e, t, { global: n, routes: r }) {
  var i;
  return ((i = r[e]) === null || i === void 0 ? void 0 : i[t]) || n;
}
var fF = { global: void 0, routes: {} },
  qS = b.createContext(fF);
function $$({ children: e, value: t }) {
  return C(qS.Provider, { value: t, children: e });
}
function dF() {
  return b.useContext(qS);
}
var hp = 10,
  hF = 1e4;
function pF(e) {
  let t = hp,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < hF; ) (n = e.next(t)), r.push(n.value), (t += hp);
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(",")})`, duration: t - hp }
  );
}
var gr = (e) => `--view-transition-${e}`;
function Mp(e) {
  return [parseFloat(e), e.endsWith("px") ? "px" : "%"];
}
function QS(e) {
  let { innerWidth: t, innerHeight: n } = O,
    [r, i] = Mp(e.x),
    [o, s] = Mp(e.y);
  return {
    x: i === "px" ? r : t * (r / 100),
    y: s === "px" ? o : n * (o / 100),
  };
}
var mF = {
    makeKeyframe: (e, t, n) => {
      let r = 0;
      return (
        ((n === "exit" &&
          e.angularDirection === "clockwise" &&
          t === "start") ||
          (n === "exit" &&
            e.angularDirection === "counter-clockwise" &&
            t === "end") ||
          (n === "enter" &&
            e.angularDirection === "counter-clockwise" &&
            t === "start") ||
          (n === "enter" &&
            e.angularDirection === "clockwise" &&
            t === "end")) &&
          (r = (e.sweepAngle / 360) * 100),
        `${gr("conic-offset")}: ${r}%;`
      );
    },
    makeStyles: (e, t) => {
      let n = `var(${gr("conic-offset")})`,
        r =
          (t === "exit" && e.angularDirection === "clockwise") ||
          (t === "enter" && e.angularDirection === "counter-clockwise"),
        i = r ? "transparent" : "black",
        o = r ? "black" : "transparent",
        s = "conic-gradient(from ";
      return (
        (s += `${e.angle}deg at ${e.x} ${e.y}, `),
        (s += `${i} 0%, ${i} ${n}, `),
        (s += `${o} ${n}, ${o} 100%)`),
        `mask-image: ${s}; -webkit-mask-image: ${s};`
      );
    },
    makePropertyRules: () => `
        @property ${gr("conic-offset")} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
  },
  vF = {
    makeKeyframe: (e, t) => {
      let { x: n, y: r } = QS(e);
      return t === "start"
        ? `clip-path: circle(0 at ${n}px ${r}px);`
        : `clip-path: circle(${Math.hypot(
            Math.max(n, O.innerWidth - n),
            Math.max(r, O.innerHeight - r)
          )}px at ${n}px ${r}px);`;
    },
  },
  gF = {
    makeKeyframe: (e, t) => {
      let { x: n, y: r } = QS(e),
        i = O.innerHeight - r,
        o = O.innerWidth - n;
      return t === "start"
        ? `clip-path: inset(${r}px ${o}px ${i}px ${n}px round ${e.round}px);`
        : "clip-path: inset(0 round 0);";
    },
  },
  yF = {
    makeKeyframe: (e, t, n) => {
      let [, r] = Mp(e.width),
        i = `0${r}`;
      return (
        ((t === "start" && n === "exit") || (t === "end" && n === "enter")) &&
          (i = e.width),
        `${gr("blinds-width")}: ${i};`
      );
    },
    makeStyles: (e, t) => {
      let n = `var(${gr("blinds-width")})`,
        r = t === "exit" ? "transparent" : "black",
        i = t === "exit" ? "black" : "transparent",
        o = "repeating-linear-gradient(";
      return (
        (o += e.angle + 90 + "deg, "),
        (o += `${r} 0px, ${r} ${n}, `),
        (o += `${i} ${n}, ${i} ${e.width})`),
        `mask-image: ${o}; -webkit-mask-image: ${o};`
      );
    },
    makePropertyRules: () => `
            @property ${gr("blinds-width")} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
  },
  bF = {
    makeKeyframe: (e, t, n) => {
      let r =
        (t === "start" && n === "exit") || (t === "end" && n === "enter")
          ? 1
          : 0;
      return `${gr("wipe-offset")}: ${r};`;
    },
    makeStyles: (e, t) => {
      let n = `var(${gr("wipe-offset")})`,
        r = t === "exit" ? "transparent" : "black",
        i = t === "exit" ? "black" : "transparent",
        o = "linear-gradient(";
      return (
        (o += e.angle + 90 + "deg, "),
        (o += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
        (o += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
        `mask-image: ${o}; -webkit-mask-image: ${o};`
      );
    },
    makePropertyRules: () => `
            @property ${gr("wipe-offset")} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
  },
  xF = { circle: vF, conic: mF, inset: gF, blinds: yF, wipe: bF },
  SF = {
    opacity: 1,
    x: "0px",
    y: "0px",
    scale: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
  };
function b1(e, t, n, r) {
  var i;
  let o = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (
    e.mask &&
      (o +=
        ((i = r?.makeKeyframe) === null || i === void 0
          ? void 0
          : i.call(r, e.mask, t, n)) || ""),
    o
  );
}
function wF(e) {
  return e ? xF[e] : void 0;
}
function x1(e, { transition: t, ...n }) {
  var r;
  let i = "view-transition-" + e,
    o = { duration: "0s", easing: "linear" };
  if (t.type === "tween")
    (o.duration = t.duration + "s"),
      (o.easing = `cubic-bezier(${t.ease.join(",")})`);
  else if (t.type === "spring") {
    let { easing: c, duration: u } = pF(
      ds({
        keyframes: [0, 1],
        stiffness: t.stiffness,
        damping: t.damping,
        mass: t.mass,
        restDelta: 0.001,
        restSpeed: 1e-4,
      })
    );
    (o.duration = u + "ms"), (o.easing = c);
  }
  let s = wF((r = n?.mask) === null || r === void 0 ? void 0 : r.type),
    a = b1(n, "start", e, s),
    l = b1({ ...SF, mask: n.mask }, "end", e, s);
  return (
    e === "exit" && ([a, l] = [l, a]),
    `
        ${n.mask && s?.makePropertyRules ? s.makePropertyRules(n.mask) : ""}

        @keyframes ${i} {
            0% {
                ${a}
            }

            100% {
                ${l}
            }
        }

        ::view-transition-${e === "enter" ? "new" : "old"}(root) {
            animation-name: ${i};
            animation-duration: ${o.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${o.easing};
            animation-fill-mode: both;
            ${n.mask && s?.makeStyles ? s.makeStyles(n.mask, e) : ""}
        }
    `
  );
}
var ZS = "view-transition-styles",
  kF = {
    x: "0px",
    y: "0px",
    scale: 1,
    opacity: 1,
    rotate3d: !1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
    transition: {
      type: "tween",
      delay: 0,
      duration: 0.2,
      ease: [0.27, 0, 0.51, 1],
      stiffness: 400,
      damping: 30,
      mass: 1,
    },
  };
function CF({ exit: e = kF, enter: t }) {
  let n = document.createElement("style");
  n.id = ZS;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  (e.mask ||
    t.mask ||
    e.opacity ||
    t.opacity ||
    e.transition.delay ||
    t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += x1("exit", e)),
    (r += x1("enter", t)),
    (n.textContent = r),
    document.head.appendChild(n);
}
function TF() {
  Y.render(() => {
    let e = document.getElementById(ZS);
    e && document.head.removeChild(e);
  });
}
function EF() {
  return !!document.startViewTransition;
}
function RF(e, t) {
  if (!EF()) return void e();
  CF(t);
  let n = document.startViewTransition(e);
  return (
    Promise.all([n.ready, n.finished])
      .then(TF)
      .catch(() => {}),
    n
  );
}
function JS() {
  let e = dF(),
    t = A(void 0);
  return (
    H(() => {
      t.current && (t.current(), (t.current = void 0));
    }),
    fe(
      (n, r, i) => {
        let o = uF(n, r, e);
        if (o) {
          let s = new Promise((l) => {
            t.current = l;
          });
          return RF(async () => {
            i(), await s;
          }, o);
        } else return i();
      },
      [e]
    )
  );
}
function S1(
  e,
  t,
  {
    currentRoutePath: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: o,
    localeId: s,
    preserveQueryParams: a,
  }
) {
  let { path: l } = t;
  if (l)
    try {
      let c = Up(t, {
        currentRoutePath: n,
        currentPathVariables: r,
        hash: i,
        pathVariables: o,
        preserveQueryParams: a,
      });
      ew({ routeId: e, hash: i, pathVariables: o, localeId: s }, c);
    } catch {}
}
function PF(e, t) {
  O.history.replaceState(e, "", t);
}
function ew(e, t) {
  O.history.pushState(e, "", t);
}
function _F({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: r,
}) {
  b.useLayoutEffect(() => {
    e ||
      (performance.mark("framer-history-set-initial-state"),
      PF({ routeId: t, pathVariables: n, localeId: r }));
  }, []);
}
function IF(e, t) {
  let n = JS(),
    r = b.useRef(void 0),
    i = b.useCallback(
      ({ state: s }) => {
        var a, l, c;
        if (!Qc(s)) return;
        let { routeId: u, hash: f, pathVariables: d, localeId: m } = s;
        if (!la(u)) return;
        let y = () => {
            t(
              u,
              la(m) ? m : void 0,
              la(f) ? f : void 0,
              Qc(d) ? d : void 0,
              !1,
              !0
            );
          },
          g = n(e.current, u, y);
        g
          ? g.updateCallbackDone
              .then(
                (a = r.current) === null || a === void 0 ? void 0 : a.resolve
              )
              .catch(
                (l = r.current) === null || l === void 0 ? void 0 : l.reject
              )
          : (c = r.current) === null || c === void 0 || c.resolve();
      },
      [e, t, n]
    ),
    o = fe((s) => {
      s.navigationType === "traverse" &&
        s.intercept({
          async handler() {
            await new Promise((a, l) => {
              r.current = { resolve: a, reject: l };
            });
          },
          scroll: "after-transition",
        });
    }, []);
  b.useEffect(() => {
    var s;
    return (
      O.addEventListener("popstate", i),
      (s = O.navigation) === null ||
        s === void 0 ||
        s.addEventListener("navigate", o),
      () => {
        var a;
        O.removeEventListener("popstate", i),
          (a = O.navigation) === null ||
            a === void 0 ||
            a.removeEventListener("navigate", o);
      }
    );
  }, [i, o]);
}
function FF(e, t, n) {
  let r = au(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(Li, (o, s) => {
    var a;
    return String((a = i[s]) !== null && a !== void 0 ? a : o);
  });
}
function Up(
  e,
  {
    currentRoutePath: t,
    currentPathVariables: n,
    hash: r,
    pathVariables: i,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: a,
  }
) {
  var l;
  let c = t ?? "/";
  n && (c = c.replace(Li, (y, g) => String(n[g] || y)));
  let f = (l = e?.path) !== null && l !== void 0 ? l : "/";
  i && (f = f.replace(Li, (y, g) => String(i[g] || y)));
  let d = FF(r, e, o),
    m = c === f && d;
  return (
    s && (f = US(c, f)), (a || m) && (f = XS(f)), d && (f = `${f}#${d}`), f
  );
}
async function LF(e, t, n) {
  if (!e.path || !t) return !1;
  let i = `${n.slug ? `/${n.slug}` : ""}${WS(e.path, t)}`;
  return (await fetch(i, { method: "HEAD", redirect: "manual" })).type ===
    "opaqueredirect"
    ? ((O.location.href = O.location.origin + i), !0)
    : !1;
}
async function MF(e) {
  let t = await cF(e);
  if (t) {
    try {
      localStorage.setItem("preferredLocale", e.nextLocale.code);
    } catch {}
    try {
      if (typeof t.path != "string")
        throw new Error("Expected result.path to be a string");
      if (
        t.isMissingInLocale &&
        (await LF(e.route, t.pathVariables, e.nextLocale))
      )
        return;
      ew(
        {
          routeId: e.routeId,
          pathVariables: t.pathVariables,
          localeId: e.nextLocale.id,
          paginationInfo: O.history.state.paginationInfo,
        },
        t.path
      );
    } catch {}
    return t;
  }
}
function pr(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (r) {
    console.warn(`Could not measure ${e}`, r);
  }
}
var Rn = !1;
function N$() {
  (Rn = !0), performance.mark("framer-hydration-start");
}
var w1 = !1,
  k1 = !1,
  C1 = !1;
function OF() {
  let e = "framer-hydration-router";
  qe(() => {
    w1 || !Rn || ((w1 = !0), performance.mark(`${e}-insertion-effect`));
  }, []),
    ct(() => {
      k1 || !Rn || ((k1 = !0), performance.mark(`${e}-layout-effect`));
    }, []),
    H(() => {
      C1 || !Rn || ((C1 = !0), performance.mark(`${e}-effect`));
    }, []);
}
var T1 = !1,
  E1 = !1,
  R1 = !1;
function DF() {
  let e = "framer-hydration-",
    t = `${e}layout-effects-end`,
    n = `${e}effects-end`,
    r = `${e}browser-render-start`,
    i = `${e}render-end`;
  return (
    qe(() => {
      T1 ||
        !Rn ||
        ((T1 = !0),
        performance.mark(i),
        pr(`${e}render`, `${e}start`, i),
        performance.mark(`${e}insertion-effects-start`));
    }, []),
    ct(() => {
      E1 ||
        !Rn ||
        ((E1 = !0),
        performance.mark(`${e}layout-effects-start`),
        requestAnimationFrame(() => {
          var o, s, a;
          performance.mark(r),
            pr(
              `${e}uho`,
              (s =
                (o = performance.getEntriesByName(n)[0]) === null ||
                o === void 0
                  ? void 0
                  : o.name) !== null && s !== void 0
                ? s
                : (a = performance.getEntriesByName(t)[0]) === null ||
                  a === void 0
                ? void 0
                : a.name,
              r
            );
        }));
    }, []),
    H(() => {
      var o;
      if (R1 || !Rn) return;
      R1 = !0;
      let s = `${e}effects-start`;
      performance.mark(s),
        ((o = performance.getEntriesByName(r)[0]) === null || o === void 0
          ? void 0
          : o.name) ||
          (pr(`${e}commit`, t, s), performance.mark(`${e}effects-sync`));
    }, []),
    null
  );
}
var P1 = !1,
  _1 = !1,
  I1 = !1,
  F1 = !1;
function AF() {
  let e = "framer-hydration-",
    t = `${e}layout-effects-end`,
    n = `${e}effects-end`,
    r = `${e}browser-render-start`,
    i = `${e}start`,
    o = `${e}insertion-effects-end`,
    s = `${e}first-paint`,
    a = `${e}browser-raf-end`;
  return (
    qe(() => {
      P1 ||
        !Rn ||
        ((P1 = !0),
        performance.mark(o),
        pr(`${e}insertion-effects`, `${e}insertion-effects-start`, o));
    }, []),
    ct(() => {
      _1 ||
        !Rn ||
        ((_1 = !0),
        performance.mark(t),
        pr(`${e}layout-effects`, `${e}layout-effects-start`, t),
        requestAnimationFrame(() => {
          performance.mark(a), pr(`${e}raf`, r, a);
        }));
    }, []),
    H(() => {
      var l, c, u;
      I1 ||
        !Rn ||
        ((I1 = !0),
        performance.mark(n),
        pr(
          `${e}effects`,
          (c =
            (l = performance.getEntriesByName(s)[0]) === null || l === void 0
              ? void 0
              : l.name) !== null && c !== void 0
            ? c
            : (u = performance.getEntriesByName(`${e}effects-start`)[0]) ===
                null || u === void 0
            ? void 0
            : u.name,
          n
        ));
    }, []),
    KS(
      () => {
        F1 ||
          !Rn ||
          ((F1 = !0),
          performance.mark(s),
          pr(`${e}time-to-first-paint`, i, s),
          pr(`${e}browser-render`, a, s));
      },
      [],
      { priority: "user-blocking" }
    ),
    null
  );
}
function VF() {
  return DF(), null;
}
function BF() {
  return AF(), null;
}
var L1 = { Start: VF, End: BF },
  ca = [
    "mousedown",
    "mouseup",
    "touchcancel",
    "touchend",
    "touchstart",
    "auxclick",
    "dblclick",
    "pointercancel",
    "pointerdown",
    "pointerup",
    "dragend",
    "dragstart",
    "drop",
    "compositionend",
    "compositionstart",
    "keydown",
    "keypress",
    "keyup",
    "input",
    "textInput",
    "copy",
    "cut",
    "paste",
    "click",
    "change",
    "contextmenu",
    "reset",
  ],
  tw = (e) => {
    var t, n;
    !(
      (n = (t = e.target) === null || t === void 0 ? void 0 : t.closest) ===
        null || n === void 0
    ) &&
      n.call(t, "#main") &&
      (e.stopPropagation(),
      performance.mark("framer-react-event-handling-prevented"));
  },
  nw = !1;
function H$() {
  if (!ca) return;
  (nw = !0), performance.mark("framer-react-event-handling-start");
  let e = { capture: !0 };
  ca.forEach((t) => document.body.addEventListener(t, tw, e));
}
function $F() {
  return (
    KS(
      () => {
        if (!nw || !ca) return;
        let e = { capture: !0 };
        ca.forEach((t) => document.body.removeEventListener(t, tw, e)),
          (ca = void 0),
          performance.mark("framer-react-event-handling-end");
      },
      [],
      { priority: "user-blocking" }
    ),
    null
  );
}
function zF(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((i) => n[i] === r[i]);
}
function rw(e) {
  return b.useCallback((t) => e[t], [e]);
}
var Xp = (() => b.createContext({}))();
function NF({ api: e, children: t }) {
  return C(Xp.Provider, { value: e, children: t });
}
function ka() {
  return b.useContext(Xp);
}
function HF({ routes: e, children: t }) {
  let n = rw(e);
  return C(Xp.Provider, { value: { getRoute: n }, children: t });
}
var jF = class extends me {
    constructor() {
      super(...arguments), (this.state = { error: void 0 });
    }
    static getDerivedStateFromError(e) {
      return (
        console.error("Derived error in SuspenseErrorBoundary", e), { error: e }
      );
    }
    componentDidCatch(e, t) {
      var n;
      console.error("Caught error in SuspenseErrorBoundary", e, t),
        (n = O.__framer_events) === null ||
          n === void 0 ||
          n.push([
            "published_site_load_recoverable_error",
            { message: String(e), componentStack: t?.componentStack },
          ]);
    }
    render() {
      if (this.state.error === void 0) return this.props.children;
      if (this.state.error instanceof jS) throw this.state.error.cause;
      return C(Go, { children: this.props.fallbackChildren });
    }
  },
  WF = (() => (typeof O < "u" ? new Promise(() => {}) : null))();
function UF() {
  if (typeof O > "u") return null;
  throw WF;
}
function XF({ children: e }) {
  return C(jF, {
    fallbackChildren: e,
    children: C(Go, { fallback: C(UF, {}), children: e }),
  });
}
var M1 = "default";
function YF() {
  let [e, t] = b.useState(0);
  return [e, b.useCallback(() => t((n) => n + 1), [])];
}
var GF = async () => {},
  KF = { activeLocale: null, locales: [], setLocale: GF },
  iw = b.createContext(KF);
function qF() {
  return b.useContext(iw);
}
function QF(e) {
  let t = `start-${e}`,
    n = `end-${e}`,
    r = A(void 0);
  return (
    H(() => {
      r.current && (r.current(), (r.current = void 0));
    }),
    fe(() => {
      let i = new Promise((o) => {
        r.current = o;
      });
      performance.mark(t),
        i
          .then(() => {
            performance.mark(n), performance.measure(e, t, n);
          })
          .catch(() => {});
    }, [e, t, n])
  );
}
function O1(e, t, n) {
  let r = e && document.getElementById(e);
  if (r) {
    eL(r, t);
    return;
  }
  n || O.scrollTo(0, 0);
}
function ZF(e) {
  let t = A([]);
  return (
    ct(() => {
      var n;
      !((n = t.current) === null || n === void 0) &&
        n.length &&
        (t.current.forEach((r) => r()), (t.current = []));
    }, [e]),
    fe((n) => {
      t.current.push(n);
    }, [])
  );
}
function JF({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: i,
  collectionUtils: o,
  routes: s,
  initialLocaleId: a,
  locales: l = [],
  preserveQueryParams: c = !1,
}) {
  OF(),
    _F({
      disabled: t,
      routeId: r,
      initialPathVariables: n,
      initialLocaleId: a,
    });
  let u = JS(),
    f = QF("route-change"),
    d = A(r),
    m = A(n),
    y = A(a),
    g = y.current,
    x = oe(() => {
      var V;
      return (V = l.find(({ id: X }) => (g ? X === g : X === M1))) !== null &&
        V !== void 0
        ? V
        : null;
    }, [g, l]),
    [p, h] = YF(),
    v = oe(
      () => ({
        activeLocale: x,
        locales: l,
        setLocale: async (V) => {
          let X;
          la(V) ? (X = V) : Qc(V) && (X = V.id);
          let Z = l.find(({ id: ne }) => ne === M1),
            ee = l.find(({ id: ne }) => ne === X);
          if (!ee) return;
          let W = d.current,
            te = s[W];
          if (te)
            try {
              let ne = await MF({
                currentLocale: x,
                nextLocale: ee,
                route: te,
                routeId: W,
                defaultLocale: Z,
                pathVariables: m.current,
                collectionUtils: o,
                preserveQueryParams: c,
              });
              if (!ne) return;
              (m.current = ne.pathVariables),
                (y.current = ee.id),
                u(d.current, W, () => zi(h)),
                f();
            } catch {}
        },
      }),
      [x, o, h, l, f, c, s, u]
    ),
    S = ZF(p),
    k = fe(
      (V, X, Z, ee, W = !1, te = !1) => {
        (d.current = V),
          (m.current = ee),
          (y.current = X),
          S(() => {
            O1(Z, W, te);
          }),
          zi(h),
          f();
      },
      [h, f, S]
    );
  IF(d, k);
  let w = fe(
      (V, X, Z, ee) => {
        var W, te;
        let ne = s[V];
        if (Z) {
          let Q = new Set(),
            gt = (W = ne?.path) !== null && W !== void 0 ? W : "/";
          for (let Ve of gt.matchAll(Li)) {
            let Xe = Ve[1];
            if (Xe === void 0)
              throw new Error(
                "A matching path variable should not be undefined"
              );
            Q.add(Xe);
          }
          Z = Object.fromEntries(Object.entries(Z).filter(([Ve]) => Q.has(Ve)));
        }
        let ye = au(ne, X);
        if (
          zF(
            { routeId: d.current, pathVariables: m.current },
            { routeId: V, pathVariables: Z }
          )
        ) {
          if (
            ((te = O.history.state) === null || te === void 0
              ? void 0
              : te.hash) !== X &&
            !t
          ) {
            let Q = s[V];
            Q &&
              S1(V, Q, {
                currentRoutePath: Q.path,
                currentPathVariables: m.current,
                pathVariables: Z,
                hash: X,
                localeId: y.current,
                preserveQueryParams: c,
              });
          }
          O1(ye, ee, !1);
          return;
        }
        if (!ne) return;
        if (!t) {
          let Q = s[d.current];
          S1(V, ne, {
            currentRoutePath: Q?.path,
            currentPathVariables: m.current,
            hash: X,
            pathVariables: Z,
            localeId: y.current,
            preserveQueryParams: c,
          });
        }
        let de = () => k(V, y.current, ye, Z, ee, !1);
        u(d.current, V, de);
      },
      [s, t, k, u, c]
    ),
    T = rw(s),
    E = d.current,
    F = m.current,
    I = oe(
      () => ({
        navigate: w,
        getRoute: T,
        currentRouteId: E,
        currentPathVariables: F,
        routes: s,
        collectionUtils: o,
        preserveQueryParams: c,
      }),
      [w, T, E, F, s, o, c]
    ),
    z = s[d.current];
  if (!z) throw new Error(`Router cannot find route for ${d.current}`);
  let $ = !x || !z.includedLocales || z.includedLocales.includes(x.id),
    re = z.path && F ? WS(z.path, F) : z.path,
    J = String(g) + re;
  return C(NF, {
    api: I,
    children: C(iw.Provider, {
      value: v,
      children: se(XF, {
        children: [
          C(JI, {
            notFoundPage: i,
            defaultPageStyle: e,
            forceUpdateKey: p,
            children: se(
              ni,
              {
                children: [C(L1.Start, {}), $ ? Lp(z.page, e) : i && Lp(i, e)],
              },
              J
            ),
          }),
          C($F, {}),
          C(L1.End, {}),
        ],
      }),
    }),
  });
}
function eL(e, t) {
  let n = t
    ? { behavior: "smooth", block: "start", inline: "nearest" }
    : void 0;
  e.scrollIntoView(n);
}
var Dc, pp, D1;
function tL(e) {
  if (D1 !== e) {
    Dc = {};
    for (let [t, { path: n }] of Object.entries(e))
      n && (Dc[n] = { path: n, depth: nL(n), routeId: t });
    (pp = Object.values(Dc)),
      pp.sort(({ depth: t }, { depth: n }) => n - t),
      (D1 = e);
  }
  return [Dc, pp];
}
function ow(e, t, n = !0, r = []) {
  let [i, o] = tL(e),
    s,
    a,
    l = t;
  if (r.length > 0) {
    let d = l.split("/").find(Boolean);
    if (
      (d &&
        ((s = r.find(({ slug: m }) => m === d)),
        s && ((a = s.id), (l = l.substring(s.slug.length + 1)))),
      !a)
    ) {
      let m = r.find(({ slug: y }) => y === "");
      m && (a = m.id);
    }
  }
  let c = i[l];
  if (c) {
    let d = A1(l, c.path);
    if (d.isMatch)
      return {
        routeId: c.routeId,
        localeId: a,
        pathVariables: d.pathVariables,
      };
  }
  for (let { path: d, routeId: m } of o) {
    let y = A1(l, d);
    if (y.isMatch)
      return { routeId: m, localeId: a, pathVariables: y.pathVariables };
  }
  if (!n) throw new Error("No exact match found for path");
  let u = i["/"];
  if (u) return { routeId: u.routeId, localeId: a };
  let f = Object.keys(e)[0];
  if (!f) throw new Error("Router should not have undefined routes");
  return { routeId: f, localeId: a };
}
function nL(e) {
  let t = e.replace(/^\/|\/$/gu, "");
  return t === "" ? 0 : t.split("/").length;
}
function A1(e, t) {
  let n = [],
    i = rL(t).replace(Li, (c, u) => (n.push(u), "([^/]+)")),
    o = new RegExp(i + "$"),
    s = e.match(o);
  if (!s) return { isMatch: !1 };
  if (s.length === 1) return { isMatch: !0 };
  let a = {},
    l = s.slice(1);
  for (let c = 0; c < n.length; ++c) {
    let u = n[c];
    if (u === void 0) continue;
    let f = l[c],
      d = a[u];
    if (d) {
      if (d !== f) return { isMatch: !1 };
      continue;
    }
    if (f === void 0)
      throw new Error("Path variable values cannot be undefined");
    a[u] = f;
  }
  return { isMatch: !0, pathVariables: a };
}
function rL(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, "\\$&").replace(/-/gu, "\\x2d");
}
var iL = "page";
function V1(e) {
  return Qc(e) && iL in e && e.page !== void 0;
}
var oL = (() => b.createContext(void 0))();
function lu() {
  var e;
  let t = ka(),
    n = D(oL),
    r = n ?? t.currentRouteId;
  if (!r) return;
  let i = (e = t.getRoute) === null || e === void 0 ? void 0 : e.call(t, r);
  if (i)
    return { ...i, id: r, pathVariables: n ? void 0 : t.currentPathVariables };
}
function sL(e) {
  var t;
  let n = ka();
  if (e)
    return (t = n.getRoute) === null || t === void 0 ? void 0 : t.call(n, e);
}
var Yp = (() => typeof O < "u" && !oF(Ie.userAgent))();
function aL(e, t = !0) {
  let { getRoute: n } = ka();
  H(() => {
    if (!(!n || !t || !Yp)) for (let r of e) sw(n(r));
  }, [e, n, t]);
}
async function sw(e) {
  if (!Yp || !e) return;
  let t = e.page;
  if (!(!t || !YS(t))) {
    await GS();
    try {
      await t.preload();
    } catch {}
  }
}
function oz(e, t) {
  var n;
  let r = lu(),
    i = (n = sL(t)) !== null && n !== void 0 ? n : r;
  return b.useMemo(() => (i ? au(i, e) : e), [e, i]);
}
var B1 = new Set();
function fa(e, ...t) {
  B1.has(e) || (B1.add(e), console.warn(e, ...t));
}
function lL(e, t, n) {
  let r = n ? `, use ${n} instead` : "",
    i = `Deprecation warning: ${e} will be removed in version ${t}${r}.`;
  fa(i);
}
var aw = class {
    constructor() {
      R(this, "observers", new Set()), R(this, "transactions", {});
    }
    add(e) {
      this.observers.add(e);
      let t = !1;
      return () => {
        t || ((t = !0), this.remove(e));
      };
    }
    remove(e) {
      this.observers.delete(e);
    }
    notify(e, t) {
      if (t) {
        let n = this.transactions[t] || e;
        (n.value = e.value), (this.transactions[t] = n);
      } else this.callObservers(e);
    }
    finishTransaction(e) {
      let t = this.transactions[e];
      return delete this.transactions[e], this.callObservers(t, e);
    }
    callObservers(e, t) {
      let n = [];
      return (
        new Set(this.observers).forEach((r) => {
          typeof r == "function" ? r(e, t) : (r.update(e, t), n.push(r.finish));
        }),
        n
      );
    }
  },
  Ke = (() => {
    function e(t) {
      return (
        lL(
          "Animatable()",
          "2.0.0",
          "the new animation API (https://www.framer.com/api/animation/)"
        ),
        Pn(t) ? t : new uL(t)
      );
    }
    return (
      (e.transaction = (t) => {
        let n = Math.random(),
          r = new Set();
        t((s, a) => {
          s.set(a, n), r.add(s);
        }, n);
        let o = [];
        r.forEach((s) => {
          o.push(...s.finishTransaction(n));
        }),
          o.forEach((s) => {
            s(n);
          });
      }),
      (e.getNumber = (t, n = 0) => e.get(t, n)),
      (e.get = (t, n) => (t == null ? n : Pn(t) ? t.get() : t)),
      (e.objectToValues = (t) => {
        if (!t) return t;
        let n = {};
        for (let r in t) {
          let i = t[r];
          Pn(i) ? (n[r] = i.get()) : (n[r] = i);
        }
        return n;
      }),
      e
    );
  })(),
  $1 = "onUpdate",
  z1 = "finishTransaction";
function Pn(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    $1 in e &&
    e[$1] instanceof Function &&
    z1 in e &&
    e[z1] instanceof Function
  );
}
function cL(e, t) {
  return {
    interpolate(n, r) {
      let i = n.get(),
        o = r.get(),
        s = Ke(i);
      return (a) => {
        let l = t.interpolate(i, o)(a);
        return s.set(l), s;
      };
    },
    difference(n, r) {
      let i = n.get();
      return t.difference(i, r.get());
    },
  };
}
var uL = class {
  constructor(e) {
    (this.value = e), R(this, "observers", new aw());
  }
  static interpolationFor(e, t) {
    if (Pn(e)) return cL(e, t);
  }
  get() {
    return this.value;
  }
  set(e, t) {
    let n = this.value;
    Pn(e) && (e = e.get()), (this.value = e);
    let r = { value: e, oldValue: n };
    this.observers.notify(r, t);
  }
  finishTransaction(e) {
    return this.observers.finishTransaction(e);
  }
  onUpdate(e) {
    return this.observers.add(e);
  }
};
function Ac(e, t) {
  let r = 10 ** Math.round(Math.abs(t));
  return Math.round(e * r) / r;
}
function N1(e, t) {
  return t === 0
    ? Math.round(e)
    : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function en(e, t) {
  return { x: e, y: t };
}
((e) => {
  (e.add = (...i) =>
    i.reduce((o, s) => ({ x: o.x + s.x, y: o.y + s.y }), { x: 0, y: 0 })),
    (e.subtract = (i, o) => ({ x: i.x - o.x, y: i.y - o.y })),
    (e.multiply = (i, o) => ({ x: i.x * o, y: i.y * o })),
    (e.divide = (i, o) => ({ x: i.x / o, y: i.y / o })),
    (e.absolute = (i) => ({ x: Math.abs(i.x), y: Math.abs(i.y) })),
    (e.reverse = (i) => ({ x: i.x * -1, y: i.y * -1 })),
    (e.pixelAligned = (i, o = { x: 0, y: 0 }) => ({
      x: N1(i.x, o.x),
      y: N1(i.y, o.y),
    })),
    (e.distance = (i, o) => {
      let s = Math.abs(i.x - o.x),
        a = Math.abs(i.y - o.y);
      return Math.sqrt(s * s + a * a);
    }),
    (e.angle = (i, o) =>
      (Math.atan2(o.y - i.y, o.x - i.x) * 180) / Math.PI - 90),
    (e.angleFromX = (i, o) =>
      (Math.atan2(o.y - i.y, o.x - i.x) * 180) / Math.PI),
    (e.isEqual = (i, o) => i.x === o.x && i.y === o.y),
    (e.rotationNormalizer = () => {
      let i;
      return (o) => {
        typeof i != "number" && (i = o);
        let s = i - o,
          a = Math.abs(s) + 180,
          l = Math.floor(a / 360);
        return s < 180 && (o -= l * 360), s > 180 && (o += l * 360), (i = o), o;
      };
    });
  function t(i, o) {
    return { x: (i.x + o.x) / 2, y: (i.y + o.y) / 2 };
  }
  e.center = t;
  function n(i) {
    let o = 0,
      s = 0;
    i.forEach((c) => {
      (o += c.x), (s += c.y);
    });
    let a = o / i.length,
      l = s / i.length;
    return { x: a, y: l };
  }
  e.centroid = n;
  function r(i) {
    let o = e.centroid(i),
      s = new Map();
    for (let a = 0; a < i.length; a++) {
      let l = i[a];
      s.set(l, Math.atan2(l.x - o.x, l.y - o.y));
    }
    return i.sort((a, l) => s.get(a) - s.get(l));
  }
  e.sortClockwise = r;
})(en || (en = {}));
var Op = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32",
};
function Yr(e, t, n, r = !1) {
  let [i, o] = t,
    [s, a] = n,
    l = o - i;
  if (l === 0) return (a + s) / 2;
  let c = a - s;
  if (c === 0) return s;
  let u = s + ((e - i) / l) * c;
  if (r === !0)
    if (s < a) {
      if (u < s) return s;
      if (u > a) return a;
    } else {
      if (u > s) return s;
      if (u < a) return a;
    }
  return u;
}
function $o(e) {
  return !isNaN(e) && isFinite(e);
}
function Gr(e) {
  let t = Dp(e);
  return t !== void 0 ? (e.includes("%") ? t / 100 : t) : 0;
}
function Dp(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
var fL = (() => UI().Hsluv)(),
  Vt = new fL();
function dL(e, t, n) {
  return (
    (Vt.rgb_r = e / 255),
    (Vt.rgb_g = t / 255),
    (Vt.rgb_b = n / 255),
    Vt.rgbToHsluv(),
    { h: Vt.hsluv_h, s: Vt.hsluv_s, l: Vt.hsluv_l }
  );
}
function hL(e, t, n, r = 1) {
  return (
    (Vt.hsluv_h = e),
    (Vt.hsluv_s = t),
    (Vt.hsluv_l = n),
    Vt.hsluvToRgb(),
    { r: Vt.rgb_r * 255, g: Vt.rgb_g * 255, b: Vt.rgb_b * 255, a: r }
  );
}
function Vc(e, t, n, r) {
  let i = Math.round(e),
    o = Math.round(t * 100),
    s = Math.round(n * 100);
  return r === void 0 || r === 1
    ? "hsv(" + i + ", " + o + "%, " + s + "%)"
    : "hsva(" + i + ", " + o + "%, " + s + "%, " + r + ")";
}
function pL(e, t, n) {
  return {
    r: $o(e) ? Et(e, 255) * 255 : 0,
    g: $o(t) ? Et(t, 255) * 255 : 0,
    b: $o(n) ? Et(n, 255) * 255 : 0,
  };
}
function H1(e, t, n, r) {
  let i = [
    vp(Math.round(e).toString(16)),
    vp(Math.round(t).toString(16)),
    vp(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join("");
}
function Gp(e, t, n) {
  let r,
    i,
    o = Et(e, 255),
    s = Et(t, 255),
    a = Et(n, 255),
    l = Math.max(o, s, a),
    c = Math.min(o, s, a),
    u = (i = r = (l + c) / 2);
  if (l === c) u = i = 0;
  else {
    let f = l - c;
    switch (((i = r > 0.5 ? f / (2 - l - c) : f / (l + c)), l)) {
      case o:
        u = (s - a) / f + (s < a ? 6 : 0);
        break;
      case s:
        u = (a - o) / f + 2;
        break;
      case a:
        u = (o - s) / f + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function mp(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function mL(e, t, n) {
  let r, i, o;
  if (
    ((e = Et(e, 360)), (t = Et(t * 100, 100)), (n = Et(n * 100, 100)), t === 0)
  )
    r = i = o = n;
  else {
    let s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - s;
    (r = mp(a, s, e + 1 / 3)), (i = mp(a, s, e)), (o = mp(a, s, e - 1 / 3));
  }
  return { r: r * 255, g: i * 255, b: o * 255 };
}
function j1(e, t, n) {
  (e = Et(e, 255)), (t = Et(t, 255)), (n = Et(n, 255));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    o = r - i,
    s,
    a = r === 0 ? 0 : o / r,
    l = r;
  if (r === i) s = 0;
  else {
    switch (r) {
      case e:
        s = (t - n) / o + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / o + 2;
        break;
      case n:
        s = (e - t) / o + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: a, v: l };
}
function vL(e, t, n) {
  (e = Et(e, 360) * 6), (t = Et(t * 100, 100)), (n = Et(n * 100, 100));
  let r = Math.floor(e),
    i = e - r,
    o = n * (1 - t),
    s = n * (1 - i * t),
    a = n * (1 - (1 - i) * t),
    l = r % 6,
    c = [n, s, o, o, a, n][l],
    u = [a, n, n, s, o, o][l],
    f = [o, o, a, n, n, s][l];
  return { r: c * 255, g: u * 255, b: f * 255 };
}
function Et(e, t) {
  let n, r;
  if (
    (typeof t == "string" ? (n = parseFloat(t)) : (n = t), typeof e == "string")
  ) {
    gL(e) && (e = "100%");
    let i = yL(e);
    (r = Math.min(n, Math.max(0, parseFloat(e)))),
      i && (r = Math.floor(r * n) / 100);
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function gL(e) {
  return typeof e == "string" && e.includes(".") && parseFloat(e) === 1;
}
function yL(e) {
  return typeof e == "string" && e.includes("%");
}
function vp(e) {
  return e.length === 1 ? "0" + e : "" + e;
}
var Wn = (() => {
  let e = "[-\\+]?\\d+%?",
    n = "(?:" + "[-\\+]?\\d*\\.\\d+%?" + ")|(?:" + e + ")",
    r = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?",
    i =
      "[\\s|\\(]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")\\s*\\)?";
  return {
    rgb: new RegExp("rgb" + r),
    rgba: new RegExp("rgba" + i),
    hsl: new RegExp("hsl" + r),
    hsla: new RegExp("hsla" + i),
    hsv: new RegExp("hsv" + r),
    hsva: new RegExp("hsva" + i),
    hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
    hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
    hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
    hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
  };
})();
function Kp(e) {
  if (e.includes("gradient(") || e.includes("var(")) return !1;
  let t = /^[\s,#]+/u,
    n = e.replace(t, "").trimEnd().toLowerCase(),
    r = Op[n];
  if ((r && (n = r), n === "transparent"))
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let i;
  return (i = Wn.rgb.exec(n))
    ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: 1,
        format: "rgb",
      }
    : (i = Wn.rgba.exec(n))
    ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "rgb",
      }
    : (i = Wn.hsl.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: Gr(i[2] ?? ""),
        l: Gr(i[3] ?? ""),
        a: 1,
        format: "hsl",
      }
    : (i = Wn.hsla.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: Gr(i[2] ?? ""),
        l: Gr(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "hsl",
      }
    : (i = Wn.hsv.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: Gr(i[2] ?? ""),
        v: Gr(i[3] ?? ""),
        a: 1,
        format: "hsv",
      }
    : (i = Wn.hsva.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: Gr(i[2] ?? ""),
        v: Gr(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "hsv",
      }
    : (i = Wn.hex8.exec(n))
    ? {
        r: Jt(i[1] ?? ""),
        g: Jt(i[2] ?? ""),
        b: Jt(i[3] ?? ""),
        a: W1(i[4] ?? ""),
        format: r ? "name" : "hex",
      }
    : (i = Wn.hex6.exec(n))
    ? {
        r: Jt(i[1] ?? ""),
        g: Jt(i[2] ?? ""),
        b: Jt(i[3] ?? ""),
        a: 1,
        format: r ? "name" : "hex",
      }
    : (i = Wn.hex4.exec(n))
    ? {
        r: Jt(`${i[1]}${i[1]}`),
        g: Jt(`${i[2]}${i[2]}`),
        b: Jt(`${i[3]}${i[3]}`),
        a: W1(i[4] + "" + i[4]),
        format: r ? "name" : "hex",
      }
    : (i = Wn.hex3.exec(n))
    ? {
        r: Jt(`${i[1]}${i[1]}`),
        g: Jt(`${i[2]}${i[2]}`),
        b: Jt(`${i[3]}${i[3]}`),
        a: 1,
        format: r ? "name" : "hex",
      }
    : !1;
}
function Jt(e) {
  return parseInt(e, 16);
}
function W1(e) {
  return Jt(e) / 255;
}
var U1 = new Map(),
  j = (() => {
    function e(o, s, a, l) {
      if (typeof o == "string") {
        let u = U1.get(o);
        return (
          u ||
          ((u = t(o)),
          u === void 0 ? { ...e("black"), isValid: !1 } : (U1.set(o, u), u))
        );
      }
      let c = t(o, s, a, l);
      return c !== void 0 ? c : { ...e("black"), isValid: !1 };
    }
    function t(o, s, a, l) {
      if (o === "") return;
      let c = bL(o, s, a, l);
      if (c) {
        let u = {
          r: c.r,
          g: c.g,
          b: c.b,
          a: c.a,
          h: c.h,
          s: c.s,
          l: c.l,
          initialValue: typeof o == "string" && c.format !== "hsv" ? o : void 0,
          roundA: Math.round(100 * c.a) / 100,
          format: c.format,
          mix: e.mix,
          toValue: () => e.toRgbString(u),
        };
        return u;
      } else return;
    }
    let n = {
      isRGB(o) {
        return o === "rgb" || o === "rgba";
      },
      isHSL(o) {
        return o === "hsl" || o === "hsla";
      },
    };
    (e.inspect = (o, s) =>
      o.format === "hsl"
        ? `<${o.constructor.name} h:${o.h} s:${o.s} l:${o.l} a:${o.a}>`
        : o.format === "hex" || o.format === "name"
        ? `<${o.constructor.name} "${s}">`
        : `<${o.constructor.name} r:${o.r} g:${o.g} b:${o.b} a:${o.a}>`),
      (e.isColor = (o) =>
        typeof o == "string" ? e.isColorString(o) : e.isColorObject(o)),
      (e.isColorString = (o) => (typeof o == "string" ? Kp(o) !== !1 : !1)),
      (e.isColorObject = (o) =>
        o &&
        typeof o != "string" &&
        typeof o.r == "number" &&
        typeof o.g == "number" &&
        typeof o.b == "number" &&
        typeof o.h == "number" &&
        typeof o.s == "number" &&
        typeof o.l == "number" &&
        typeof o.a == "number" &&
        typeof o.roundA == "number" &&
        typeof o.format == "string"),
      (e.toString = (o) => e.toRgbString(o)),
      (e.toHex = (o, s = !1) => H1(o.r, o.g, o.b, s)),
      (e.toHexString = (o, s = !1) => `#${e.toHex(o, s)}`),
      (e.toRgbString = (o) =>
        o.a === 1
          ? "rgb(" +
            Math.round(o.r) +
            ", " +
            Math.round(o.g) +
            ", " +
            Math.round(o.b) +
            ")"
          : "rgba(" +
            Math.round(o.r) +
            ", " +
            Math.round(o.g) +
            ", " +
            Math.round(o.b) +
            ", " +
            o.roundA +
            ")"),
      (e.toHusl = (o) => ({ ...dL(o.r, o.g, o.b), a: o.roundA })),
      (e.toHslString = (o) => {
        let s = e.toHsl(o),
          a = Math.round(s.h),
          l = Math.round(s.s * 100),
          c = Math.round(s.l * 100);
        return o.a === 1
          ? "hsl(" + a + ", " + l + "%, " + c + "%)"
          : "hsla(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")";
      }),
      (e.toHsv = (o) => {
        let s = j1(o.r, o.g, o.b);
        return { h: s.h * 360, s: s.s, v: s.v, a: o.a };
      }),
      (e.toHsvString = (o) => {
        let s = j1(o.r, o.g, o.b),
          a = Math.round(s.h * 360),
          l = Math.round(s.s * 100),
          c = Math.round(s.v * 100);
        return o.a === 1
          ? "hsv(" + a + ", " + l + "%, " + c + "%)"
          : "hsva(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")";
      }),
      (e.toName = (o) => {
        if (o.a === 0) return "transparent";
        if (o.a < 1) return !1;
        let s = H1(o.r, o.g, o.b, !0);
        for (let a of Object.keys(Op)) if (Op[a] === s) return a;
        return !1;
      }),
      (e.toHsl = (o) => ({ h: Math.round(o.h), s: o.s, l: o.l, a: o.a })),
      (e.toRgb = (o) => ({
        r: Math.round(o.r),
        g: Math.round(o.g),
        b: Math.round(o.b),
        a: o.a,
      })),
      (e.brighten = (o, s = 10) => {
        let a = e.toRgb(o);
        return (
          (a.r = Math.max(
            0,
            Math.min(255, a.r - Math.round(255 * -(s / 100)))
          )),
          (a.g = Math.max(
            0,
            Math.min(255, a.g - Math.round(255 * -(s / 100)))
          )),
          (a.b = Math.max(
            0,
            Math.min(255, a.b - Math.round(255 * -(s / 100)))
          )),
          e(a)
        );
      }),
      (e.lighten = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.l += s / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a);
      }),
      (e.darken = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.l -= s / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a);
      }),
      (e.saturate = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.s += s / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a);
      }),
      (e.desaturate = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.s -= s / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a);
      }),
      (e.grayscale = (o) => e.desaturate(o, 100)),
      (e.hueRotate = (o, s) => {
        let a = e.toHsl(o);
        return (a.h += s), (a.h = a.h > 360 ? a.h - 360 : a.h), e(a);
      }),
      (e.alpha = (o, s = 1) => e({ r: o.r, g: o.g, b: o.b, a: s })),
      (e.transparent = (o) => e.alpha(o, 0)),
      (e.multiplyAlpha = (o, s = 1) =>
        e({ r: o.r, g: o.g, b: o.b, a: o.a * s })),
      (e.interpolate = (o, s, a = "rgb") => {
        if (!e.isColorObject(o) || !e.isColorObject(s))
          throw new TypeError(
            "Both arguments for Color.interpolate must be Color objects"
          );
        return (l) => e.mixAsColor(o, s, l, !1, a);
      }),
      (e.mix = (o, s, { model: a = "rgb" } = {}) => {
        let l = typeof o == "string" ? e(o) : o,
          c = e.interpolate(l, s, a);
        return (u) => e.toRgbString(c(u));
      }),
      (e.mixAsColor = (o, s, a = 0.5, l = !1, c = "rgb") => {
        let u = null;
        if (n.isRGB(c))
          u = e({
            r: Yr(a, [0, 1], [o.r, s.r], l),
            g: Yr(a, [0, 1], [o.g, s.g], l),
            b: Yr(a, [0, 1], [o.b, s.b], l),
            a: Yr(a, [0, 1], [o.a, s.a], l),
          });
        else {
          let f, d;
          n.isHSL(c)
            ? ((f = e.toHsl(o)), (d = e.toHsl(s)))
            : ((f = e.toHusl(o)), (d = e.toHusl(s))),
            f.s === 0 ? (f.h = d.h) : d.s === 0 && (d.h = f.h);
          let m = f.h,
            y = d.h,
            g = y - m;
          g > 180 ? (g = y - 360 - m) : g < -180 && (g = y + 360 - m);
          let x = {
            h: Yr(a, [0, 1], [m, m + g], l),
            s: Yr(a, [0, 1], [f.s, d.s], l),
            l: Yr(a, [0, 1], [f.l, d.l], l),
            a: Yr(a, [0, 1], [o.a, s.a], l),
          };
          n.isHSL(c) ? (u = e(x)) : (u = e(hL(x.h, x.s, x.l, x.a)));
        }
        return u;
      }),
      (e.random = (o = 1) => {
        function s() {
          return Math.floor(Math.random() * 255);
        }
        return e("rgba(" + s() + ", " + s() + ", " + s() + ", " + o + ")");
      }),
      (e.grey = (o = 0.5, s = 1) => (
        (o = Math.floor(o * 255)),
        e("rgba(" + o + ", " + o + ", " + o + ", " + s + ")")
      )),
      (e.gray = e.grey),
      (e.rgbToHsl = (o, s, a) => Gp(o, s, a)),
      (e.isValidColorProperty = (o, s) =>
        !!(
          (o.toLowerCase().slice(-5) === "color" ||
            o === "fill" ||
            o === "stroke") &&
          typeof s == "string" &&
          e.isColorString(s)
        )),
      (e.difference = (o, s) => {
        let a = (o.r + s.r) / 2,
          l = o.r - s.r,
          c = o.g - s.g,
          u = o.b - s.b,
          f = Math.pow(l, 2),
          d = Math.pow(c, 2),
          m = Math.pow(u, 2);
        return Math.sqrt(2 * f + 4 * d + 3 * m + (a * (f - m)) / 256);
      }),
      (e.equal = (o, s, a = 0.1) =>
        !(
          Math.abs(o.r - s.r) >= a ||
          Math.abs(o.g - s.g) >= a ||
          Math.abs(o.b - s.b) >= a ||
          Math.abs(o.a - s.a) * 256 >= a
        ));
    let r = eo([0, 255], [0, 1]);
    function i(o) {
      o = r(o);
      let s = Math.abs(o);
      return s < 0.04045
        ? o / 12.92
        : (Math.sign(o) || 1) * Math.pow((s + 0.055) / 1.055, 2.4);
    }
    return (
      (e.luminance = (o) => {
        let { r: s, g: a, b: l } = e.toRgb(o);
        return 0.2126 * i(s) + 0.7152 * i(a) + 0.0722 * i(l);
      }),
      (e.contrast = (o, s) => {
        let a = e.luminance(o),
          l = e.luminance(s);
        return (Math.max(a, l) + 0.05) / (Math.min(a, l) + 0.05);
      }),
      e
    );
  })();
function bL(e, t, n, r = 1) {
  let i;
  return (
    typeof e == "number" &&
    !Number.isNaN(e) &&
    typeof t == "number" &&
    !Number.isNaN(t) &&
    typeof n == "number" &&
    !Number.isNaN(n)
      ? (i = Ap({ r: e, g: t, b: n, a: r }))
      : typeof e == "string"
      ? (i = xL(e))
      : typeof e == "object" &&
        (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b")
          ? (i = Ap(e))
          : (i = lw(e))),
    i
  );
}
function xL(e) {
  let t = Kp(e);
  if (t) return t.format === "hsl" ? lw(t) : t.format === "hsv" ? SL(t) : Ap(t);
}
function SL(e) {
  let t = vL(e.h, e.s, e.v);
  return {
    ...Gp(t.r, t.g, t.b),
    ...t,
    format: "rgb",
    a: e.a !== void 0 ? cw(e.a) : 1,
  };
}
function Ap(e) {
  let t = pL(e.r, e.g, e.b);
  return {
    ...Gp(t.r, t.g, t.b),
    ...t,
    format: "rgb",
    a: e.a !== void 0 ? cw(e.a) : 1,
  };
}
function lw(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    o = { h: 0, s: 0, l: 0 };
  return (
    (t = $o(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = $o(e.s) ? e.s : 1),
    typeof e.s == "string" && (n = Dp(e.s)),
    (r = $o(e.l) ? e.l : 0.5),
    typeof e.l == "string" && (r = Dp(e.l)),
    (i = mL(t, n, r)),
    (o = { h: t, s: n, l: r }),
    { ...i, ...o, a: e.a === void 0 ? 1 : e.a, format: "hsl" }
  );
}
function cw(e) {
  return (
    (e = parseFloat(e)), e < 0 && (e = 0), (isNaN(e) || e > 1) && (e = 1), e
  );
}
var X1 = (e) => e instanceof fl;
var wL = (() => XI().EventEmitter)(),
  kL = class {
    constructor() {
      R(this, "_emitter", new wL());
    }
    eventNames() {
      return this._emitter.eventNames();
    }
    eventListeners() {
      let e = {};
      for (let t of this._emitter.eventNames())
        e[t] = this._emitter.listeners(t);
      return e;
    }
    on(e, t) {
      this.addEventListener(e, t, !1, !1, this);
    }
    off(e, t) {
      this.removeEventListeners(e, t);
    }
    once(e, t) {
      this.addEventListener(e, t, !0, !1, this);
    }
    unique(e, t) {
      this.addEventListener(e, t, !1, !0, this);
    }
    addEventListener(e, t, n, r, i) {
      if (r) {
        for (let o of this._emitter.eventNames())
          if (t === this._emitter.listeners(o)) return;
      }
      n === !0
        ? this._emitter.once(e, t, i)
        : this._emitter.addListener(e, t, i);
    }
    removeEventListeners(e, t) {
      e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
    }
    removeAllEventListeners() {
      this._emitter.removeAllListeners();
    }
    countEventListeners(e, t) {
      if (e) return this._emitter.listeners(e).length;
      {
        let n = 0;
        for (let r of this._emitter.eventNames())
          n += this._emitter.listeners(r).length;
        return n;
      }
    }
    emit(e, ...t) {
      this._emitter.emit(e, ...t);
    }
  },
  CL = {
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => !1,
    ResizeObserver: void 0,
    onpointerdown: !1,
    onpointermove: !1,
    onpointerup: !1,
    ontouchstart: !1,
    ontouchmove: !1,
    ontouchend: !1,
    onmousedown: !1,
    onmousemove: !1,
    onmouseup: !1,
    devicePixelRatio: 1,
    scrollX: 0,
    scrollY: 0,
    location: { href: "" },
    setTimeout: () => 0,
    clearTimeout: () => {},
    setInterval: () => 0,
    clearInterval: () => {},
    requestAnimationFrame: () => 0,
    cancelAnimationFrame: () => {},
    getSelection: () => null,
    matchMedia: (e) => ({
      matches: !1,
      media: e,
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => !1,
    }),
    innerHeight: 0,
    innerWidth: 0,
    SVGSVGElement: {},
    open: function (e, t, n) {},
  },
  Bt = typeof O > "u" ? CL : O,
  TL = (e) => {
    setTimeout(e, 1 / 60);
  },
  EL = (() => Bt.requestAnimationFrame || TL)(),
  Y1 = (e) => EL(e),
  oa = (() => 1 / 60)(),
  RL = class extends kL {
    constructor(e = !1) {
      super(),
        R(this, "_started", !1),
        R(this, "_frame", 0),
        R(this, "_frameTasks", []),
        R(this, "tick", () => {
          this._started &&
            (Y1(this.tick),
            this.emit("update", this._frame, oa),
            this.emit("render", this._frame, oa),
            this._processFrameTasks(),
            this._frame++);
        }),
        e && this.start();
    }
    addFrameTask(e) {
      this._frameTasks.push(e);
    }
    _processFrameTasks() {
      var e;
      let t = this._frameTasks,
        n = t.length;
      if (n !== 0) {
        for (let r = 0; r < n; r++) (e = t[r]) == null || e.call(t);
        t.length = 0;
      }
    }
    static set TimeStep(e) {
      oa = e;
    }
    static get TimeStep() {
      return oa;
    }
    start() {
      return this._started
        ? this
        : ((this._frame = 0), (this._started = !0), Y1(this.tick), this);
    }
    stop() {
      return (this._started = !1), this;
    }
    get frame() {
      return this._frame;
    }
    get time() {
      return this._frame * oa;
    }
  },
  uw = new RL(),
  Zc = { target: "PREVIEW", zoom: 1 };
var ie = {
  canvas: "CANVAS",
  export: "EXPORT",
  thumbnail: "THUMBNAIL",
  preview: "PREVIEW",
  current: () => Zc.target,
  hasRestrictions: () => {
    let e = Zc.target;
    return e === "CANVAS" || e === "EXPORT";
  },
};
var Bc = (e) => ({
  correct: (t, { delta: n, treeScale: r }) => {
    if ((typeof t == "string" && (t = parseFloat(t)), t === 0)) return "0px";
    let i = t;
    return (
      n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
      i + "px"
    );
  },
});
df({
  borderTopWidth: Bc("y"),
  borderLeftWidth: Bc("x"),
  borderRightWidth: Bc("x"),
  borderBottomWidth: Bc("y"),
});
function he(e, ...t) {
  var n, r;
  if (e) return;
  let i = Error("Assertion Error" + (t.length > 0 ? ": " + t.join(" ") : ""));
  if (i.stack)
    try {
      let o = i.stack.split(`
`);
      (n = o[1]) != null && n.includes("assert")
        ? (o.splice(1, 1),
          (i.stack = o.join(`
`)))
        : (r = o[0]) != null &&
          r.includes("assert") &&
          (o.splice(0, 1),
          (i.stack = o.join(`
`)));
    } catch {}
  throw i;
}
function Tt(e, t) {
  throw (
    t ||
    new Error(
      e ? `Unexpected value: ${e}` : "Application entered invalid state"
    )
  );
}
var zo = b.createContext({
  getLayoutId: (e) => null,
  persistLayoutIdCache: () => {},
  top: !1,
  enabled: !0,
});
function PL({ children: e }) {
  if (D(zo).top) return C(Fe, { children: e });
  let n = A({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = A({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
    }),
    i = A(new Set()).current,
    o = fe(({ id: l, name: c, duplicatedFrom: u }) => {
      if (!l) return null;
      let f = c ? "byName" : "byId",
        d = n.current[f][l];
      if (d) return d;
      let m = c || l;
      if (
        !u &&
        !i.has(m) &&
        (!n.current.byLayoutId[m] || n.current.byLayoutId[m] === m)
      )
        return (
          n.current.count[f][m] === void 0 &&
            ((n.current.count[f][m] = 0),
            (n.current.byLayoutId[m] = m),
            (r.current[f][l] = m)),
          i.add(m),
          m
        );
      let y;
      if (u?.length)
        for (let w = u.length - 1; w >= 0; w--) {
          let T = u[w];
          he(!!T, "duplicatedId must be defined");
          let E = n.current[f][T],
            F = n.current.byLastId[T];
          if (F && !y) {
            let $ = n.current.byLayoutId[F],
              re = !$ || $ === c;
            F && !i.has(F) && (!c || re) && (y = [F, T]);
          }
          let I = E ? n.current.byLayoutId[E] : void 0,
            z = !I || I === c;
          if (E && !i.has(E) && (!c || z))
            return (
              (r.current[f][l] = E), (r.current.byLastId[T] = E), i.add(E), E
            );
        }
      let g = n.current.byLastId[l];
      if (g && !i.has(g)) return i.add(g), (r.current.byId[l] = g), g;
      if (y) {
        let [w, T] = y;
        return (r.current[f][l] = w), (r.current.byLastId[T] = w), i.add(w), w;
      }
      let x = n.current.byPossibleId[l];
      if (x && !i.has(x)) return i.add(x), (r.current.byId[l] = x), x;
      let p = u?.[0],
        h = c || p || l,
        v = (n.current.count[f][h] ?? -1) + 1,
        { layoutId: S, value: k } = _L(h, v, i);
      if (
        ((n.current.count[f][h] = k), (r.current[f][l] = S), u?.length && !c)
      ) {
        let w = u[u.length - 1];
        if ((w && (r.current.byLastId[w] = S), u.length > 1))
          for (let T = 0; T < u.length - 1; T++) {
            let E = u[T];
            E !== void 0 &&
              (r.current.byPossibleId[E] || (r.current.byPossibleId[E] = S));
          }
      }
      return (r.current.byLayoutId[S] = m), i.add(S), S;
    }, []),
    s = fe(() => {
      (n.current = {
        byId: { ...n.current.byId, ...r.current.byId },
        byLastId: { ...n.current.byLastId, ...r.current.byLastId },
        byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
        byName: { ...n.current.byName, ...r.current.byName },
        byLastName: { ...n.current.byLastName, ...r.current.byLastName },
        byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
        count: { ...n.current.count, byName: {} },
      }),
        (r.current = {
          byId: {},
          byName: {},
          byLastId: {},
          byPossibleId: {},
          byLastName: {},
          byLayoutId: {},
        }),
        i.clear();
    }, []),
    a = A({
      getLayoutId: o,
      persistLayoutIdCache: s,
      top: !0,
      enabled: !0,
    }).current;
  return C(zo.Provider, { value: a, children: e });
}
function _L(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) r++, (i = `${e}-${r}`);
  return { layoutId: i, value: r };
}
function IL({ enabled: e = !0, ...t }) {
  let n = D(zo),
    r = oe(() => ({ ...n, enabled: e }), [e]);
  return C(zo.Provider, { ...t, value: r });
}
function nn(e) {
  let t = A(null);
  return t.current === null && (t.current = e()), t.current;
}
var FL = {
    background: void 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: "1.4em",
    textOverflow: "ellipsis",
    overflow: "hidden",
    minHeight: 0,
    width: "100%",
    height: "100%",
  },
  LL = (() => ({
    ...FL,
    border: "1px solid rgba(149, 149, 149, 0.15)",
    borderRadius: 6,
    fontSize: "12px",
    backgroundColor: "rgba(149, 149, 149, 0.1)",
    color: "#a5a5a5",
  }))(),
  fw = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    flexShrink: 0,
    padding: "0 10px",
  },
  ML = (() => ({ ...fw, fontWeight: 500 }))(),
  OL = (() => ({
    ...fw,
    whiteSpace: "pre",
    maxHeight:
      "calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))",
    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
  }))();
function hz(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${DL(n)}` : "Error",
    i = t instanceof Error ? t.message : "" + t;
  return se("div", {
    style: LL,
    children: [
      C("div", { className: "text", style: ML, children: r }),
      i && C("div", { className: "text", style: OL, children: i }),
    ],
  });
}
function DL(e) {
  return e.startsWith("./") ? e.replace("./", "") : e;
}
function q(e) {
  return typeof e == "number" && isFinite(e);
}
function AL(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Wc(e) {
  return typeof e != "string" && typeof e != "number";
}
function Uc(e) {
  return e !== null && typeof e < "u" && typeof e != "boolean" && !AL(e);
}
function VL(e) {
  return e * (Math.PI / 180);
}
var mn = (() => {
    function e(t, n) {
      return { a: t, b: n };
    }
    return (
      (e.offset = (t, n) => {
        let r = en.angleFromX(t.a, t.b),
          i = VL(r),
          o = n * Math.sin(i),
          s = n * Math.cos(i);
        return e(
          { x: t.a.x + o, y: t.a.y - s },
          { x: t.b.x + o, y: t.b.y - s }
        );
      }),
      (e.intersection = (t, n, r) => {
        let i = t.a.x,
          o = t.a.y,
          s = t.b.x,
          a = t.b.y,
          l = n.a.x,
          c = n.a.y,
          u = n.b.x,
          f = n.b.y,
          d = (u - l) * (c - o) - (f - c) * (l - i),
          m = (u - l) * (a - o) - (f - c) * (s - i),
          y = (s - i) * (c - o) - (a - o) * (l - i);
        if ((d === 0 && m === 0) || m === 0) return null;
        let g = d / m,
          x = y / m;
        return r && (g < 0 || g > 1 || x < 0 || x > 1)
          ? null
          : { x: i + g * (s - i), y: o + g * (a - o) };
      }),
      (e.intersectionAngle = (t, n) => {
        let r = t.b.x - t.a.x,
          i = t.b.y - t.a.y,
          o = n.b.x - n.a.x,
          s = n.b.y - n.a.y;
        return Math.atan2(r * s - i * o, r * o + i * s) * (180 / Math.PI);
      }),
      (e.isOrthogonal = (t) => t.a.x === t.b.x || t.a.y === t.b.y),
      (e.perpendicular = (t, n) => {
        let r = t.a.x - t.b.x,
          i = t.a.y - t.b.y,
          o = en(n.x - i, n.y + r);
        return e(o, n);
      }),
      (e.projectPoint = (t, n) => {
        let r = e.perpendicular(t, n);
        return e.intersection(t, r);
      }),
      (e.pointAtPercentDistance = (t, n) => {
        let r = e.distance(t),
          i = (n * r) / r;
        return {
          x: i * t.b.x + (1 - i) * t.a.x,
          y: i * t.b.y + (1 - i) * t.a.y,
        };
      }),
      (e.distance = (t) => en.distance(t.a, t.b)),
      e
    );
  })(),
  K = {
    equals: function (e, t) {
      return e === t
        ? !0
        : !e || !t
        ? !1
        : e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height;
    },
    atOrigin: (e) => ({ ...e, x: 0, y: 0 }),
    fromTwoPoints: (e, t) => ({
      x: Math.min(e.x, t.x),
      y: Math.min(e.y, t.y),
      width: Math.abs(e.x - t.x),
      height: Math.abs(e.y - t.y),
    }),
    fromRect: (e) => ({
      x: e.left,
      y: e.top,
      width: e.right - e.left,
      height: e.bottom - e.top,
    }),
    multiply: (e, t) => ({
      x: e.x * t,
      y: e.y * t,
      width: e.width * t,
      height: e.height * t,
    }),
    divide: (e, t) => K.multiply(e, 1 / t),
    offset: (e, t) => {
      let n = typeof t.x == "number" ? t.x : 0,
        r = typeof t.y == "number" ? t.y : 0;
      return { ...e, x: e.x + n, y: e.y + r };
    },
    inflate: (e, t) => {
      if (t === 0) return e;
      let n = 2 * t;
      return {
        x: e.x - t,
        y: e.y - t,
        width: e.width + n,
        height: e.height + n,
      };
    },
    pixelAligned: (e) => {
      let t = Math.round(e.x),
        n = Math.round(e.y),
        r = Math.round(e.x + e.width),
        i = Math.round(e.y + e.height),
        o = Math.max(r - t, 0),
        s = Math.max(i - n, 0);
      return { x: t, y: n, width: o, height: s };
    },
    halfPixelAligned: (e) => {
      let t = Math.round(e.x * 2) / 2,
        n = Math.round(e.y * 2) / 2,
        r = Math.round((e.x + e.width) * 2) / 2,
        i = Math.round((e.y + e.height) * 2) / 2,
        o = Math.max(r - t, 1),
        s = Math.max(i - n, 1);
      return { x: t, y: n, width: o, height: s };
    },
    round: (e, t = 0) => {
      let n = Ac(e.x, t),
        r = Ac(e.y, t),
        i = Ac(e.width, t),
        o = Ac(e.height, t);
      return { x: n, y: r, width: i, height: o };
    },
    roundToOutside: (e) => {
      let t = Math.floor(e.x),
        n = Math.floor(e.y),
        r = Math.ceil(e.x + e.width),
        i = Math.ceil(e.y + e.height),
        o = Math.max(r - t, 0),
        s = Math.max(i - n, 0);
      return { x: t, y: n, width: o, height: s };
    },
    minX: (e) => e.x,
    maxX: (e) => e.x + e.width,
    minY: (e) => e.y,
    maxY: (e) => e.y + e.height,
    positions: (e) => ({
      minX: e.x,
      midX: e.x + e.width / 2,
      maxX: K.maxX(e),
      minY: e.y,
      midY: e.y + e.height / 2,
      maxY: K.maxY(e),
    }),
    center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
    boundingRectFromPoints: (e) => {
      let t = 1 / 0,
        n = -1 / 0,
        r = 1 / 0,
        i = -1 / 0;
      for (let o = 0; o < e.length; o++) {
        let s = e[o];
        (t = Math.min(t, s.x)),
          (n = Math.max(n, s.x)),
          (r = Math.min(r, s.y)),
          (i = Math.max(i, s.y));
      }
      return { x: t, y: r, width: n - t, height: i - r };
    },
    fromPoints: (e) => {
      let [t, n, r, i] = e,
        { x: o, y: s } = t,
        a = en.distance(t, n),
        l = en.distance(t, i);
      return { x: o, y: s, width: a, height: l };
    },
    merge: (...e) => {
      let t = { x: Math.min(...e.map(K.minX)), y: Math.min(...e.map(K.minY)) },
        n = { x: Math.max(...e.map(K.maxX)), y: Math.max(...e.map(K.maxY)) };
      return K.fromTwoPoints(t, n);
    },
    intersection: (e, t) => {
      let n = Math.max(e.x, t.x),
        r = Math.min(e.x + e.width, t.x + t.width),
        i = Math.max(e.y, t.y),
        o = Math.min(e.y + e.height, t.y + t.height);
      return { x: n, y: i, width: r - n, height: o - i };
    },
    points: (e) => [
      { x: K.minX(e), y: K.minY(e) },
      { x: K.minX(e), y: K.maxY(e) },
      { x: K.maxX(e), y: K.minY(e) },
      { x: K.maxX(e), y: K.maxY(e) },
    ],
    pointsAtOrigin: (e) => [
      { x: 0, y: 0 },
      { x: e.width, y: 0 },
      { x: e.width, y: e.height },
      { x: 0, y: e.height },
    ],
    transform: (e, t) => {
      let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
        { x: i, y: o } = t.transformPoint({ x: e.x + e.width, y: e.y }),
        { x: s, y: a } = t.transformPoint({
          x: e.x + e.width,
          y: e.y + e.height,
        }),
        { x: l, y: c } = t.transformPoint({ x: e.x, y: e.y + e.height }),
        u = Math.min(n, i, s, l),
        f = Math.max(n, i, s, l) - u,
        d = Math.min(r, o, a, c),
        m = Math.max(r, o, a, c) - d;
      return { x: u, y: d, width: f, height: m };
    },
    containsPoint: (e, t) =>
      !(
        t.x < K.minX(e) ||
        t.x > K.maxX(e) ||
        t.y < K.minY(e) ||
        t.y > K.maxY(e) ||
        isNaN(e.x) ||
        isNaN(e.y)
      ),
    containsRect: (e, t) => {
      for (let n of K.points(t)) if (!K.containsPoint(e, n)) return !1;
      return !0;
    },
    toCSS: (e) => ({
      display: "block",
      transform: `translate(${e.x}px, ${e.y}px)`,
      width: `${e.width}px`,
      height: `${e.height}px`,
    }),
    inset: (e, t) => ({
      x: e.x + t,
      y: e.y + t,
      width: Math.max(0, e.width - 2 * t),
      height: Math.max(0, e.height - 2 * t),
    }),
    intersects: (e, t) =>
      !(
        t.x >= K.maxX(e) ||
        K.maxX(t) <= e.x ||
        t.y >= K.maxY(e) ||
        K.maxY(t) <= e.y
      ),
    overlapHorizontally: (e, t) => {
      let n = K.maxX(e),
        r = K.maxX(t);
      return n > t.x && r > e.x;
    },
    overlapVertically: (e, t) => {
      let n = K.maxY(e),
        r = K.maxY(t);
      return n > t.y && r > e.y;
    },
    doesNotIntersect: (e, t) => t.find((n) => K.intersects(n, e)) === void 0,
    isEqual: (e, t) => K.equals(e, t),
    cornerPoints: (e) => {
      let t = e.x,
        n = e.x + e.width,
        r = e.y,
        i = e.y + e.height;
      return [
        { x: t, y: r },
        { x: n, y: r },
        { x: n, y: i },
        { x: t, y: i },
      ];
    },
    midPoints: (e) => {
      let t = e.x,
        n = e.x + e.width / 2,
        r = e.x + e.width,
        i = e.y,
        o = e.y + e.height / 2,
        s = e.y + e.height;
      return [
        { x: n, y: i },
        { x: r, y: o },
        { x: n, y: s },
        { x: t, y: o },
      ];
    },
    pointDistance: (e, t) => {
      let n = 0,
        r = 0;
      return (
        t.x < e.x ? (n = e.x - t.x) : t.x > K.maxX(e) && (n = t.x - K.maxX(e)),
        t.y < e.y ? (r = e.y - t.y) : t.y > K.maxY(e) && (r = t.y - K.maxY(e)),
        en.distance({ x: n, y: r }, { x: 0, y: 0 })
      );
    },
    fromAny: (e, t = { x: 0, y: 0, width: 0, height: 0 }) => ({
      x: e.x || t.x,
      y: e.y || t.y,
      width: e.width || t.width,
      height: e.height || t.height,
    }),
    delta: (e, t) => {
      let n = { x: K.minX(e), y: K.minY(e) },
        r = { x: K.minX(t), y: K.minY(t) };
      return { x: n.x - r.x, y: n.y - r.y };
    },
    withMinSize: (e, t) => {
      let { width: n, height: r } = t,
        i = e.width - n,
        o = e.height - r;
      return {
        width: Math.max(e.width, n),
        height: Math.max(e.height, r),
        x: e.width < n ? e.x + i / 2 : e.x,
        y: e.height < r ? e.y + o / 2 : e.y,
      };
    },
    anyPointsOutsideRect: (e, t) => {
      let n = K.minX(e),
        r = K.minY(e),
        i = K.maxX(e),
        o = K.maxY(e);
      for (let s of t) if (s.x < n || s.x > i || s.y < r || s.y > o) return !0;
      return !1;
    },
    edges: (e) => {
      let [t, n, r, i] = K.cornerPoints(e);
      return [mn(t, n), mn(n, r), mn(r, i), mn(i, t)];
    },
    rebaseRectOnto: (e, t, n, r) => {
      let i = { ...e };
      switch (n) {
        case "bottom":
        case "top":
          switch (r) {
            case "start":
              i.x = t.x;
              break;
            case "center":
              i.x = t.x + t.width / 2 - e.width / 2;
              break;
            case "end":
              i.x = t.x + t.width - e.width;
              break;
            default:
              Tt(r);
          }
          break;
        case "left":
          i.x = t.x - e.width;
          break;
        case "right":
          i.x = t.x + t.width;
          break;
        default:
          Tt(n);
      }
      switch (n) {
        case "left":
        case "right":
          switch (r) {
            case "start":
              i.y = t.y;
              break;
            case "center":
              i.y = t.y + t.height / 2 - e.height / 2;
              break;
            case "end":
              i.y = t.y + t.height - e.height;
              break;
            default:
              Tt(r);
          }
          break;
        case "top":
          i.y = t.y - e.height;
          break;
        case "bottom":
          i.y = t.y + t.height;
          break;
        default:
          Tt(n);
      }
      return i;
    },
  };
var dw = {
  quickfix: (e) => (
    (e.widthType === 2 || e.heightType === 2) && (e.aspectRatio = null),
    q(e.aspectRatio) &&
      (e.left && e.right && (e.widthType = 0),
      e.top && e.bottom && (e.heightType = 0),
      e.left && e.right && e.top && e.bottom && (e.bottom = !1),
      e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
    e.left &&
      e.right &&
      ((e.fixedSize || e.widthType === 2 || q(e.maxWidth)) && (e.right = !1),
      (e.widthType = 0)),
    e.top &&
      e.bottom &&
      ((e.fixedSize || e.heightType === 2 || q(e.maxHeight)) && (e.bottom = !1),
      (e.heightType = 0)),
    e
  ),
};
function Jc(e) {
  if (typeof e == "string") {
    let t = e.trim();
    if (t === "auto") return 2;
    if (t.endsWith("fr")) return 3;
    if (t.endsWith("%")) return 1;
    if (t.endsWith("vw") || t.endsWith("vh")) return 4;
  }
  return 0;
}
var hw = {
    fromProperties: (e) => {
      let {
          left: t,
          right: n,
          top: r,
          bottom: i,
          width: o,
          height: s,
          centerX: a,
          centerY: l,
          aspectRatio: c,
          autoSize: u,
        } = e,
        f = dw.quickfix({
          left: q(t) || Pn(t),
          right: q(n) || Pn(n),
          top: q(r) || Pn(r),
          bottom: q(i) || Pn(i),
          widthType: Jc(o),
          heightType: Jc(s),
          aspectRatio: c || null,
          fixedSize: u === !0,
        }),
        d = null,
        m = null,
        y = 0,
        g = 0;
      if (f.widthType !== 0 && typeof o == "string") {
        let h = parseFloat(o);
        o.endsWith("fr")
          ? ((y = 3), (d = h))
          : o === "auto"
          ? (y = 2)
          : ((y = 1), (d = h / 100));
      } else o !== void 0 && typeof o != "string" && (d = Ke.getNumber(o));
      if (f.heightType !== 0 && typeof s == "string") {
        let h = parseFloat(s);
        s.endsWith("fr")
          ? ((g = 3), (m = h))
          : s === "auto"
          ? (g = 2)
          : ((g = 1), (m = parseFloat(s) / 100));
      } else s !== void 0 && typeof s != "string" && (m = Ke.getNumber(s));
      let x = 0.5,
        p = 0.5;
      return (
        a && (x = parseFloat(a) / 100),
        l && (p = parseFloat(l) / 100),
        {
          left: f.left ? Ke.getNumber(t) : null,
          right: f.right ? Ke.getNumber(n) : null,
          top: f.top ? Ke.getNumber(r) : null,
          bottom: f.bottom ? Ke.getNumber(i) : null,
          widthType: y,
          heightType: g,
          width: d,
          height: m,
          aspectRatio: f.aspectRatio || null,
          centerAnchorX: x,
          centerAnchorY: p,
        }
      );
    },
    toSize: (e, t, n, r) => {
      let i = null,
        o = null,
        s = t?.sizing ? Ke.getNumber(t?.sizing.width) : null,
        a = t?.sizing ? Ke.getNumber(t?.sizing.height) : null,
        l = G1(e.left, e.right);
      if (s && q(l)) i = s - l;
      else if (n && e.widthType === 2) i = n.width;
      else if (q(e.width))
        switch (e.widthType) {
          case 0:
            i = e.width;
            break;
          case 3:
            i = r
              ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) *
                e.width
              : null;
            break;
          case 1:
          case 4:
            s && (i = s * e.width);
            break;
          case 2:
            break;
          default:
            Tt(e.widthType);
        }
      let c = G1(e.top, e.bottom);
      if (a && q(c)) o = a - c;
      else if (n && e.heightType === 2) o = n.height;
      else if (q(e.height))
        switch (e.heightType) {
          case 0:
            o = e.height;
            break;
          case 3:
            o = r
              ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) *
                e.height
              : null;
            break;
          case 1:
          case 4:
            a && (o = a * e.height);
            break;
          case 2:
            break;
          default:
            Tt(e.heightType);
        }
      return HL(i, o, e, { height: a ?? 0, width: s ?? 0 }, t?.viewport);
    },
    toRect: (e, t = null, n = null, r = !1, i = null) => {
      let o = e.left || 0,
        s = e.top || 0,
        { width: a, height: l } = hw.toSize(e, t, n, i),
        c = t?.positioning ?? null,
        u = c ? Ke.getNumber(c.width) : null,
        f = c ? Ke.getNumber(c.height) : null;
      e.left !== null
        ? (o = e.left)
        : u && e.right !== null
        ? (o = u - e.right - a)
        : u && (o = e.centerAnchorX * u - a / 2),
        e.top !== null
          ? (s = e.top)
          : f && e.bottom !== null
          ? (s = f - e.bottom - l)
          : f && (s = e.centerAnchorY * f - l / 2);
      let d = { x: o, y: s, width: a, height: l };
      return r ? K.pixelAligned(d) : d;
    },
  },
  BL = 200,
  $L = 200;
function eu(e, t, n, r) {
  if (typeof t == "string") {
    if (t.endsWith("%") && n)
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * n.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith("vh") && r)
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * r.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    return parseFloat(t);
  }
  return t;
}
function zL(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(eu("minHeight", t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(eu("maxHeight", t.maxHeight, n, r), e)),
    e
  );
}
function NL(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(eu("minWidth", t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(eu("maxWidth", t.maxWidth, n, r), e)),
    e
  );
}
function HL(e, t, n, r, i) {
  let o = NL(q(e) ? e : BL, n, r, i),
    s = zL(q(t) ? t : $L, n, r, i);
  return (
    q(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (q(n.left) && q(n.right)
        ? (s = o / n.aspectRatio)
        : q(n.top) && q(n.bottom)
        ? (o = s * n.aspectRatio)
        : n.widthType !== 0
        ? (s = o / n.aspectRatio)
        : (o = s * n.aspectRatio)),
    { width: o, height: s }
  );
}
function G1(e, t) {
  return !q(e) || !q(t) ? null : e + t;
}
function jL(e) {
  return (
    typeof e.right == "string" ||
    typeof e.bottom == "string" ||
    (typeof e.left == "string" && (!e.center || e.center === "y")) ||
    (typeof e.top == "string" && (!e.center || e.center === "x"))
  );
}
function Ca(e) {
  return !e._constraints || jL(e) ? !1 : e._constraints.enabled;
}
function WL(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    q(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    q(n) && q(r) ? { width: n, height: r } : null
  );
}
function UL(e) {
  let t = WL(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return q(n) && q(r) ? { x: n, y: r, ...t } : null;
}
function da(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Ca(e) || r) return UL(e);
  let i = XL(e),
    o = YL(t),
    s = o ? { sizing: o, positioning: o, viewport: null } : null;
  return hw.toRect(i, s, null, n, null);
}
function XL(e) {
  let {
      left: t,
      right: n,
      top: r,
      bottom: i,
      center: o,
      _constraints: s,
      size: a,
    } = e,
    { width: l, height: c } = e;
  l === void 0 && (l = a), c === void 0 && (c = a);
  let { aspectRatio: u, autoSize: f } = s,
    d = dw.quickfix({
      left: q(t),
      right: q(n),
      top: q(r),
      bottom: q(i),
      widthType: Jc(l),
      heightType: Jc(c),
      aspectRatio: u || null,
      fixedSize: f === !0,
    }),
    m = null,
    y = null,
    g = 0,
    x = 0;
  if (d.widthType !== 0 && typeof l == "string") {
    let v = parseFloat(l);
    l.endsWith("fr")
      ? ((g = 3), (m = v))
      : l === "auto"
      ? (g = 2)
      : ((g = 1), (m = v / 100));
  } else l !== void 0 && typeof l != "string" && (m = l);
  if (d.heightType !== 0 && typeof c == "string") {
    let v = parseFloat(c);
    c.endsWith("fr")
      ? ((x = 3), (y = v))
      : c === "auto"
      ? (x = 2)
      : ((x = 1), (y = parseFloat(c) / 100));
  } else c !== void 0 && typeof c != "string" && (y = c);
  let p = 0.5,
    h = 0.5;
  return (
    (o === !0 || o === "x") &&
      ((d.left = !1), typeof t == "string" && (p = parseFloat(t) / 100)),
    (o === !0 || o === "y") &&
      ((d.top = !1), typeof r == "string" && (h = parseFloat(r) / 100)),
    {
      left: d.left ? t : null,
      right: d.right ? n : null,
      top: d.top ? r : null,
      bottom: d.bottom ? i : null,
      widthType: g,
      heightType: x,
      width: m,
      height: y,
      aspectRatio: d.aspectRatio || null,
      centerAnchorX: p,
      centerAnchorY: h,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
var pw = b.createContext({ parentSize: 0 });
function YL(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Ta() {
  return b.useContext(pw).parentSize;
}
function mw(e) {
  return typeof e == "object";
}
var GL = (e) => {
  let t = Ta(),
    { parentSize: n, children: r } = e,
    i = b.useMemo(() => ({ parentSize: n }), [KL(n), qL(n)]);
  return t === 1
    ? r
      ? C(Fe, { children: r })
      : null
    : C(pw.Provider, { value: i, children: r });
};
function KL(e) {
  return mw(e) ? e.width : e;
}
function qL(e) {
  return mw(e) ? e.height : e;
}
function QL(e, t) {
  return C(GL, { parentSize: t, children: e });
}
function ZL(e) {
  let t = Ta();
  return da(e, t, !0);
}
function vw({ width: e, height: t }) {
  return (
    e === "auto" || e === "min-content" || t === "auto" || t === "min-content"
  );
}
var JL = ((e) => (
    (e.Boolean = "boolean"),
    (e.Number = "number"),
    (e.String = "string"),
    (e.RichText = "richtext"),
    (e.FusedNumber = "fusednumber"),
    (e.Enum = "enum"),
    (e.SegmentedEnum = "segmentedenum"),
    (e.Color = "color"),
    (e.Image = "image"),
    (e.ResponsiveImage = "responsiveimage"),
    (e.File = "file"),
    (e.ComponentInstance = "componentinstance"),
    (e.Array = "array"),
    (e.EventHandler = "eventhandler"),
    (e.Transition = "transition"),
    (e.BoxShadow = "boxshadow"),
    (e.Link = "link"),
    (e.Date = "date"),
    (e.Object = "object"),
    (e.Font = "font"),
    (e.PageScope = "pagescope"),
    (e.ScrollSectionRef = "scrollsectionref"),
    (e.CustomCursor = "customcursor"),
    (e.Border = "border"),
    (e.Cursor = "cursor"),
    (e.Padding = "padding"),
    (e.BorderRadius = "borderradius"),
    (e.CollectionReference = "collectionreference"),
    e
  ))(JL || {}),
  gp;
function eM() {
  if (gp !== void 0) return gp;
  let e = document.createElement("div");
  Object.assign(e.style, {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    rowGap: "1px",
  }),
    e.appendChild(document.createElement("div")),
    e.appendChild(document.createElement("div")),
    document.body.appendChild(e);
  let t = e.scrollHeight === 1;
  return e.parentNode && e.parentNode.removeChild(e), (gp = t), t;
}
var Mi = "flexbox-gap-not-supported",
  K1 = !1;
function yz() {
  K1 || ((K1 = !0), !eM() && document.body.classList.add(Mi));
}
var tM = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
  nM = `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
  rM = `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
  iM = `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
  oM = `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
  sM = `
a[data-framer-page-link-current],
a[data-framer-page-link-current] span:not([data-text-fill]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
  aM = `
a[data-framer-page-link-current]:hover,
a[data-framer-page-link-current]:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
  lM = `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
  cM = `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
  uM = `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
  fM = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
  dM = `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
}
`,
  hM = `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
  pM = `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
  mM = `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
  vM = `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "\u2022";
}
`,
  gM = [
    '[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }',
    dM,
    fM,
    tM,
    nM,
    rM,
    iM,
    oM,
    sM,
    aM,
    lM,
    cM,
    uM,
    hM,
    pM,
    mM,
    vM,
  ],
  yM = [
    `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
    `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, none));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
        }
    `,
    `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
    `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
        }
    `,
    `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
        }
    `,
    `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
        }
    `,
    `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
    `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
    `
        .framer-text[data-text-fill] {
            display: inline-block;
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
    `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-code-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-letter-spacing, 0);
            line-height: var(--framer-line-height, 1.2em);
        }
    `,
    `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
    `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-link-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
            text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
        }
    `,
    `
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `,
    `
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `,
    `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
        }
    `,
    `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        .framer-image.framer-text {
            display: block;
            max-width: 100%;
            height: auto;
        }
    `,
    `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
        }
    `,
    `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
    `
        ul.framer-text,
        ol.framer-text {
            display: table;
            width: 100%;
        }
    `,
    `
        li.framer-text {
            display: table-row;
            counter-increment: list-item;
            list-style: none;
        }
    `,
    `
        ol.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: counter(list-item, var(--list-style-type)) ".";
            white-space: nowrap;
        }
    `,
    `
        ul.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: "\u2022";
        }
    `,
    `
        .framer-text-module[style*="aspect-ratio"] > :first-child {
            width: 100%;
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] {
                position: relative;
            }
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / calc(var(--aspect-ratio)));
            }
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] > :first-child {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }
        }
    `,
  ],
  bM = new Set(),
  yp;
function gw(e, t, n = bM) {
  if (!(!e || n.has(e) || typeof document > "u")) {
    if ((n.add(e), !t)) {
      if (!yp) {
        let r = document.createElement("style");
        if (
          (r.setAttribute("type", "text/css"),
          r.setAttribute("data-framer-css", "true"),
          !document.head)
        ) {
          console.warn(
            "not injecting CSS: the document is missing a <head> element"
          );
          return;
        }
        if ((document.head.appendChild(r), r.sheet)) yp = r.sheet;
        else {
          console.warn(
            "not injecting CSS: injected <style> element does not have a sheet",
            r
          );
          return;
        }
      }
      t = yp;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
var xM = ["[data-framer-component-type] { position: absolute; }"],
  SM = `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
  wM = `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
  kM = `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
  CM = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    text-decoration: var(--text-decoration);
    line-height: var(--line-height);
}`,
  TM = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration);
    --line-height: var(--framer-line-height);
}`,
  EM = `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration));
}`,
  RM = `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`,
  PM = `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`,
  _M = [
    '[data-framer-component-type="Text"] { cursor: inherit; }',
    "[data-framer-component-text-autosized] * { white-space: pre; }",
    SM,
    wM,
    kM,
    CM,
    TM,
    EM,
    RM,
    PM,
  ],
  IM = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`,
  FM = (() => [
    `[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`,
    `.${Mi} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`,
  ])(),
  LM = (() => `
.${Mi} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)(),
  MM = (() => `
.${Mi}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${Mi}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)(),
  OM = (() => `
.${Mi}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${Mi}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)(),
  DM = (() => [IM, LM, ...FM, MM, OM])(),
  AM = [
    `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
  ],
  VM = [
    '[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }',
    '[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }',
  ],
  BM = [
    '[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }',
    '[data-framer-component-type="NativeScroll"] > * { position: relative; }',
    '[data-framer-component-type="NativeScroll"].direction-both { overflow-x: scroll; overflow-y: scroll; }',
    '[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: scroll; }',
    '[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: scroll; overflow-y: hidden; }',
    '[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }',
    '[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }',
    '[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }',
  ],
  $M = [
    '[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }',
  ],
  zM = [
    '[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }',
  ],
  NM = [
    '[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }',
  ],
  HM = [
    '[data-framer-cursor="pointer"] { cursor: pointer; }',
    '[data-framer-cursor="grab"] { cursor: grab; }',
    '[data-framer-cursor="grab"]:active { cursor: grabbing; }',
  ],
  jM = [
    '[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }',
    "[data-framer-generated] * { pointer-events: unset }",
  ],
  WM = [
    `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
  ],
  UM = [
    '[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }',
    '[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }',
  ],
  XM = (e) => (e ? jM : []),
  YM = [".svgContainer svg { display: block; }"],
  yw = (e) => [
    ...xM,
    ..._M,
    ...yM,
    ...gM,
    ...DM,
    ...AM,
    ...VM,
    ...BM,
    ...zM,
    ...$M,
    ...NM,
    ...HM,
    ...XM(e),
    ...YM,
    ...WM,
    ...UM,
  ],
  GM = yw(!1),
  KM = yw(!0),
  q1 = !1;
function Ea() {
  if (q1) return;
  q1 = !0;
  let e = ie.current() === ie.preview ? KM : GM;
  for (let t of e) gw(t, void 0, void 0);
}
function No(e) {
  return typeof e == "function";
}
function bw(e) {
  return typeof e == "boolean";
}
function ke(e) {
  return typeof e == "string";
}
function rn(e) {
  return Number.isFinite(e);
}
function qp(e) {
  return Array.isArray(e);
}
function Ae(e) {
  return e !== null && typeof e == "object" && !qp(e);
}
function $t(e) {
  return typeof e > "u";
}
function ze(e) {
  return e === null;
}
function Ho(e) {
  return e == null;
}
function xw(e) {
  return e instanceof Date && !isNaN(e.getTime());
}
function qM(e) {
  return Ae(e) || No(e);
}
var Q1 = "optional";
function QM(e) {
  return !!e && Q1 in e && e[Q1] === !0;
}
function ZM(e) {
  try {
    switch (e.type) {
      case "string":
      case "collectionreference":
      case "color":
      case "date":
      case "link":
      case "boxshadow":
      case "padding":
      case "borderradius":
        return ke(e.defaultValue) ? e.defaultValue : void 0;
      case "boolean":
        return bw(e.defaultValue) ? e.defaultValue : void 0;
      case "enum":
        return $t(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
          ? e.defaultValue
          : void 0;
      case "fusednumber":
      case "number":
        return rn(e.defaultValue) ? e.defaultValue : void 0;
      case "transition":
        return Ae(e.defaultValue) ? e.defaultValue : void 0;
      case "border":
        return Ae(e.defaultValue) ? e.defaultValue : void 0;
      case "font":
        return Ae(e.defaultValue) ? e.defaultValue : void 0;
      case "object": {
        let t = Ae(e.defaultValue) ? e.defaultValue : {};
        return Ae(e.controls) && Sw(t, e.controls), t;
      }
      case "array":
        return qp(e.defaultValue) ? e.defaultValue : void 0;
      case "file":
      case "image":
      case "richtext":
      case "pagescope":
      case "eventhandler":
      case "segmentedenum":
      case "responsiveimage":
      case "componentinstance":
      case "scrollsectionref":
      case "customcursor":
      case "cursor":
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function Sw(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!$t(i) || QM(r)) continue;
    let o = ZM(r);
    $t(o) || (e[n] = o);
  }
}
function JM(e) {
  if (Ae(e.defaultProps)) return e.defaultProps;
  let t = {};
  return (e.defaultProps = t), t;
}
function eO(e, t) {
  if (!qM(e)) return;
  let n = JM(e);
  Sw(n, t);
}
function bz(e, t) {
  Object.assign(e, { propertyControls: t }), eO(e, t);
}
function ww(e) {
  return e.propertyControls;
}
var Ue = (e) => e;
function tO(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
var nO =
    /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/,
  rO = tO(
    (e) =>
      nO.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
  ),
  kw = b.createContext(void 0),
  Ez = (() => kw.Provider)(),
  iO = () => b.useContext(kw) ?? {},
  oO = An(Wp(), 1),
  Xn = typeof Ie < "u" ? Ie : void 0,
  Di = () => typeof document == "object";
var sO = () =>
    Xn && /Chrome/.test(Xn.userAgent) && /Google Inc/.test(Xn.vendor) && !cO(),
  aO = () =>
    Xn && /Safari/.test(Xn.userAgent) && /Apple Computer/.test(Xn.vendor);
var lO = () => Xn && /FramerX/.test(Xn.userAgent),
  cO = () => Xn && /Edg\//.test(Xn.userAgent);
var Cw = () => oO.default.env.NODE_ENV === "test";
var Z1 = (e) => () => {
    fa(e);
  },
  uO = () => () => {},
  fO = {
    useImageSource(e) {
      return e.src ?? "";
    },
    useImageElement(e, t, n) {
      let r = new Image();
      return (
        (r.src = et.useImageSource(e, t, n)),
        e.srcSet && (r.srcset = e.srcSet),
        r
      );
    },
    canRenderOptimizedCanvasImage() {
      return !1;
    },
  },
  dO = !1,
  hO = {
    get(e, t, n) {
      return Reflect.has(e, t)
        ? Reflect.get(e, t, n)
        : ["getLogger"].includes(String(t))
        ? uO()
        : Z1(
            dO
              ? `${String(t)} is not available in this version of Framer.`
              : `${String(
                  t
                )} is only available inside of Framer. https://www.framer.com/`
          );
    },
  },
  et = new Proxy(fO, hO);
function pO(e, t, n = 1) {
  let { width: r, height: i } = t,
    o = e.pixelWidth ?? e.intrinsicWidth ?? 0,
    s = e.pixelHeight ?? e.intrinsicHeight ?? 0;
  if (r < 1 || i < 1 || o < 1 || s < 1) return;
  (r *= n), (i *= n);
  let a = r / i,
    l = o / s;
  switch (e.fit) {
    case "fill":
      return l > a ? s / i : o / r;
    case "fit":
    case "stretch":
      return Math.max(o / r, s / i);
  }
}
function J1(e, t) {
  return t && Math.max(1, e) > t ? "pixelated" : "auto";
}
var eS = {
    position: "absolute",
    borderRadius: "inherit",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  mO = {
    backgroundSize: "16px 16px",
    backgroundImage:
      "repeating-linear-gradient(45deg, rgba(180, 180, 180, 0.8) 0, rgba(180, 180, 180, 0.8) 1px, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.2) 50%)",
    border: "1px solid #c4c4c4",
  };
function vO(e) {
  switch (e) {
    case "fit":
      return "contain";
    case "stretch":
      return "fill";
    default:
      return "cover";
  }
}
function Tw(e, t) {
  let n = e ?? "center",
    r = t ?? "center";
  return n === "center" && r === "center" ? "center" : n + " " + r;
}
function gO(e, t) {
  if (!t) return "auto";
  let n = ie.current() === ie.canvas ? Bt.devicePixelRatio : 1,
    r = pO(e, t, n);
  return ie.current() === ie.canvas ? J1(1, r) : J1(Zc.zoom, r);
}
function Qp(e, t) {
  return {
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: "inherit",
    objectPosition: Tw(e.positionX, e.positionY),
    objectFit: vO(e.fit),
    imageRendering: gO(e, t),
  };
}
function yO({ image: e, containerSize: t, nodeId: n, alt: r }) {
  let i = et.useImageSource(e, t, n),
    o = Qp(e, t),
    [s, a] = b.useState(),
    l = b.useRef(null),
    c = iO();
  return (
    b.useEffect(() => {
      if (!c.imgSizesWorkaroundEnabled) return;
      let u = l.current;
      if (!u || Cw() || !e.sizes || !u.closest("[data-framer-name]")) return;
      let d = u.clientWidth,
        m = Number(e.sizes.replace("px", ""));
      (!isNaN(m) && d < m) || a(d + "px");
    }, [e.sizes]),
    C("img", {
      ref: l,
      decoding: "async",
      loading: e.loading,
      sizes: s ?? e.sizes,
      srcSet: e.srcSet,
      src: i,
      alt: r ?? e.alt,
      style: o,
    })
  );
}
function bO({ image: e, containerSize: t, nodeId: n }) {
  let r = b.useRef(null),
    i = et.useImageElement(e, t, n),
    o = Qp(e, t);
  return (
    b.useLayoutEffect(() => {
      let s = r.current;
      if (s !== null)
        return (
          s.appendChild(i),
          () => {
            s.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, o),
    C("div", {
      ref: r,
      style: { display: "contents", borderRadius: "inherit" },
    })
  );
}
function xO({ nodeId: e, image: t, containerSize: n }) {
  let r = b.useRef(null),
    i = et.useImageSource(t, n, e);
  return (
    b.useLayoutEffect(() => {
      let o = r.current;
      if (o === null) return;
      let s = Qp(t, n);
      et.renderOptimizedCanvasImage(o, i, s, e);
    }, [e, t, i, n]),
    C("div", {
      ref: r,
      style: { display: "contents", borderRadius: "inherit" },
    })
  );
}
function Ew({ layoutId: e, image: t, ...n }) {
  e && (e = e + "-background");
  let r = { ...eS, ...mO },
    i = null;
  if (ke(t.src))
    if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) {
      let o = rn(t.backgroundSize) ? t.backgroundSize : 1,
        s = {
          width: Math.round(o * t.pixelWidth),
          height: Math.round(o * t.pixelHeight),
        },
        a = et.useImageSource(t, s);
      (r.backgroundImage = `url(${a})`),
        (r.backgroundRepeat = "repeat"),
        (r.backgroundPosition = Tw(t.positionX, t.positionY)),
        t.pixelWidth &&
          (r.backgroundSize = `${(o * (t.pixelWidth / 2)).toFixed(2)}px auto`),
        (r.border = 0),
        (i = null);
    } else
      ie.current() !== ie.canvas
        ? (i = C(yO, { image: t, ...n }))
        : et.canRenderOptimizedCanvasImage(et.useImageSource(t))
        ? (i = C(xO, { image: t, ...n }))
        : (i = C(bO, { image: t, ...n }));
  return C(Ut.div, {
    layoutId: e,
    style: i ? eS : r,
    "data-framer-background-image-wrapper": !0,
    children: i,
  });
}
var SO = "src",
  _i = {
    isImageObject: function (e) {
      return !e || typeof e == "string" ? !1 : SO in e;
    },
  };
function wO(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    o = n ?? i,
    s = r && o ? r[o] : void 0;
  return s && typeof s == "string" && (e = { ...e, src: s }), e;
}
function kO(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !_i.isImageObject(t)) return;
  let r = null;
  if (
    (ke(n) ? (r = { alt: "", src: n }) : (r = Ke.get(t, null)),
    !!_i.isImageObject(r))
  )
    return wO(r, e);
}
function CO(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: o } = e;
  if (!r) return;
  let s, a, l, c;
  if (
    (typeof r == "number"
      ? (s = a = l = c = r)
      : ((s = r.top || 0),
        (a = r.bottom || 0),
        (l = r.left || 0),
        (c = r.right || 0)),
    !(s === 0 && a === 0 && l === 0 && c === 0))
  ) {
    if (n && s === a && s === l && s === c) {
      t.border = `${s}px ${i} ${o}`;
      return;
    }
    (t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${s}px`),
      (t.borderBottomWidth = `${a}px`),
      (t.borderLeftWidth = `${l}px`),
      (t.borderRightWidth = `${c}px`);
  }
}
function TO(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: "inherit",
    pointerEvents: "none",
  };
  return e.border
    ? ((n.border = e.border), C(Ut.div, { style: n }))
    : (CO(e, n, !1),
      C(Ut.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function cu(e) {
  return e && e !== "search" && e !== "slot" && e !== "template"
    ? Ut[e]
    : Ut.div;
}
var EO = sO();
function Rw(e) {
  let t = {};
  return (
    !EO ||
      ie.current() !== ie.canvas ||
      ((e === !0 || e === "x") && (t["data-framer-layout-hint-center-x"] = !0),
      (e === !0 || e === "y") && (t["data-framer-layout-hint-center-y"] = !0)),
    t
  );
}
function Zp(e) {
  return e.replace(/^id_/, "").replace(/\\/g, "");
}
function RO(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return n
    ? ((t = b.Children.map(t, (r) =>
        b.isValidElement(r) ? b.cloneElement(r, { _forwardedOverrides: n }) : r
      )),
      { props: e, children: t })
    : { props: e, children: t };
}
function uu(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === "x"
      ? `translateX(-50%) ${n}`
      : e === "y"
      ? `translateY(-50%) ${n}`
      : n || "none";
}
function Ra(e, { specificLayoutId: t, postfix: n } = {}) {
  let {
      name: r,
      layoutIdKey: i,
      duplicatedFrom: o,
      __fromCodeComponentNode: s = !1,
      drag: a,
    } = e,
    { getLayoutId: l, enabled: c } = D(zo);
  return oe(() => {
    if (!c) return e.layoutId;
    let u = t || e.layoutId;
    if (!u && (a || !i || s)) return;
    let f = u || l({ id: i, name: r, duplicatedFrom: o });
    if (f) return n ? `${f}-${n}` : f;
  }, [c]);
}
var Pw = typeof document < "u" ? ct : H,
  Uo = b.createContext(!1);
function fu() {
  let [e, t] = b.useState(0);
  return b.useCallback(() => t((n) => n + 1), []);
}
var PO = (() => YI().ResizeObserver)();
var _O = class {
    constructor() {
      R(this, "sharedResizeObserver"), R(this, "callbacks", new WeakMap());
      let e = Bt.ResizeObserver ?? PO;
      this.sharedResizeObserver = new e(this.updateResizedElements.bind(this));
    }
    updateResizedElements(e) {
      for (let t of e) {
        let n = this.callbacks.get(t.target);
        n && n(t.contentRect);
      }
    }
    observeElementWithCallback(e, t) {
      this.sharedResizeObserver.observe(e), this.callbacks.set(e, t);
    }
    unobserve(e) {
      this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e);
    }
  },
  $c = (() => (Di() ? new _O() : void 0))();
function IO(e) {
  let t = fu();
  H(() => {
    let n = e?.current;
    if (n)
      return (
        $c?.observeElementWithCallback(e.current, t),
        () => {
          $c?.unobserve(n);
        }
      );
  }, [e, t]);
}
var FO = "data-framer-size-compatibility-wrapper";
function LO(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(FO)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(_w)
    .map(Iw);
}
function _w(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function Iw(e) {
  if (
    !(e instanceof HTMLElement) ||
    e.children.length === 0 ||
    e.style.display !== "contents"
  )
    return e;
  let t = [...e.children].find(_w);
  return t ? Iw(t) : e;
}
function du(e, t, n = () => [], r = {}) {
  let { id: i, visible: o, _needsMeasure: s } = e,
    { skipHook: a = !1 } = r,
    l = !!D(Uo),
    c = ie.current() === ie.canvas;
  Pw(() => {
    !c ||
      l ||
      a ||
      (t.current &&
        i &&
        o &&
        s &&
        et.queueMeasureRequest(Zp(i), t.current, n(t.current)));
  });
}
function MO(e) {
  let t = e.closest("[data-framer-component-container]");
  t && et.queueMeasureRequest(Zp(t.id), t, LO(t));
}
var Oi = Object.keys;
function ha(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function tS(e) {
  return ha(e, "equals") ? typeof e.equals == "function" : !1;
}
function Jp(e, t) {
  return e === t ? !0 : e !== e && t !== t;
}
function OO(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!Jp(e[r], t[r])) return !1;
  return !0;
}
function DO(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!hu(e[r], t[r], !0)) return !1;
  return !0;
}
function AO(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Jp(r, t.get(n))) return !1;
  return !0;
}
function VO(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!hu(r, t.get(n), !0)) return !1;
  return !0;
}
function BO(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function $O(e, t) {
  let n = Oi(e);
  if (n.length !== Oi(t).length) return !1;
  for (let r of n) {
    if (!ha(t, r)) return !1;
    if (!(r === "_owner" && ha(e, "$$typeof") && e.$$typeof) && !Jp(e[r], t[r]))
      return !1;
  }
  return !0;
}
function zO(e, t) {
  let n = Oi(e);
  if (n.length !== Oi(t).length) return !1;
  for (let r of n) {
    if (!ha(t, r)) return !1;
    if (
      !(r === "_owner" && ha(e, "$$typeof") && e.$$typeof) &&
      !hu(e[r], t[r], !0)
    )
      return !1;
  }
  return !0;
}
function hu(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== "object") return !1;
  let o = Array.isArray(e),
    s = Array.isArray(t);
  if (o && s) return n ? DO(e, t) : OO(e, t);
  if (o !== s) return !1;
  let a = e instanceof Map,
    l = t instanceof Map;
  if (a && l) return n ? VO(e, t) : AO(e, t);
  if (a !== l) return !1;
  let c = e instanceof Set,
    u = t instanceof Set;
  if (c && u) return BO(e, t);
  if (c !== u) return !1;
  let f = e instanceof Date,
    d = t instanceof Date;
  if (f && d) return e.getTime() === t.getTime();
  if (f !== d) return !1;
  let m = e instanceof RegExp,
    y = t instanceof RegExp;
  return m && y
    ? e.toString() === t.toString()
    : m !== y
    ? !1
    : tS(e) && tS(t)
    ? e.equals(t)
    : n
    ? zO(e, t)
    : $O(e, t);
}
function He(e, t, n = !0) {
  try {
    return hu(e, t, n);
  } catch (r) {
    if (r instanceof Error && /stack|recursion/iu.exec(r.message))
      return (
        console.warn(
          "Warning: isEqual does not handle circular references.",
          r.name,
          r.message
        ),
        !1
      );
    throw r;
  }
}
var Fw = "0.000001px",
  bp = (() => ` translateZ(${Fw})`)(),
  Lw = (() => lO() || aO() || Cw())();
function NO(e) {
  e.willChange = "transform";
  let t = ie.current() === ie.canvas;
  Lw && t && (e.translateZ = Fw);
}
function em(e) {
  (e.willChange = "transform"), HO(e, !0);
}
function HO(e, t) {
  let n = ie.current() === ie.canvas;
  if (!Lw || !n) return;
  let r = (ke(e.transform) && e.transform) || "";
  t
    ? r.includes(bp) || (e.transform = r + bp)
    : (e.transform = r.replace(bp, ""));
}
function Mw(e, t, n, r = !0) {
  if (!e) return;
  let i = Ue(e.style),
    o = n || i[t],
    s = () => {
      i[t] = o;
    };
  (i[t] = null), r ? Promise.resolve().then(s) : setTimeout(s, 0);
}
var Xc = (() => {
  class e extends me {
    constructor() {
      super(...arguments),
        R(this, "layerElement", null),
        R(this, "setLayerElement", (n) => {
          this.layerElement = n;
        });
    }
    static applyWillChange(n, r, i) {
      n.willChangeTransform && (i ? NO(r) : em(r));
    }
    shouldComponentUpdate(n, r) {
      return n._needsMeasure || this.state !== r || !He(this.props, n);
    }
    componentDidUpdate(n) {
      Ue(this.props).clip &&
        Ue(this.props).radius === 0 &&
        Ue(n).radius !== 0 &&
        Mw(this.layerElement, "overflow", "hidden", !1);
    }
  }
  return R(e, "defaultProps", {}), e;
})();
function jO(e, t) {
  if (e.size < t) return;
  let r = Math.round(Math.random());
  for (let i of e.keys()) (++r & 1) !== 1 && e.delete(i);
}
function WO(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  jO(t, e);
  let o = r(n);
  return t.set(n, o), o;
}
var Ow = (e) => {
    let t = 0,
      n,
      r;
    if (e.length === 0) return t;
    for (n = 0; n < e.length; n++)
      (r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0);
    return t;
  },
  tm = {
    hueRotate: (e, t) => j.toHslString(j.hueRotate(j(e), t)),
    setAlpha: (e, t) => j.toRgbString(j.alpha(j(e), t)),
    getAlpha: (e) => {
      let t = Kp(e);
      return t ? t.a : 1;
    },
    multiplyAlpha: (e, t) => j.toRgbString(j.multiplyAlpha(j(e), t)),
    toHex: (e) => j.toHexString(j(e)).toUpperCase(),
    toRgb: (e) => j.toRgb(j(e)),
    toRgbString: (e) => j.toRgbString(j(e)),
    toHSV: (e) => j.toHsv(j(e)),
    toHSL: (e) => j.toHsl(j(e)),
    toHslString: (e) => j.toHslString(j(e)),
    toHsvString: (e) => j.toHsvString(j(e)),
    hsvToHSLString: (e) => j.toHslString(j(Vc(e.h, e.s, e.v, e.a))),
    hsvToHex: (e) => j.toHexString(j(Vc(e.h, e.s, e.v, e.a))).toUpperCase(),
    hsvToRgbString: (e) => j.toRgbString(j(Vc(e.h, e.s, e.v, e.a))),
    hsvToString: (e) => Vc(e.h, e.s, e.v),
    rgbaToString: (e) => j.toRgbString(j(e)),
    rgbToHexString: (e) => j.toHexString(j(e)),
    hslToString: (e) => j.toHslString(j(e)),
    hslToRgbString: (e) => j.toRgbString(j(e)),
    toColorPickerSquare: (e) => j.toRgbString(j({ h: e, s: 1, l: 0.5, a: 1 })),
    isValid: (e) => j(e).isValid !== !1,
    equals: (e, t) => (
      typeof e == "string" && (e = j(e)),
      typeof t == "string" && (t = j(t)),
      j.equal(e, t)
    ),
    toHexOrRgbaString: (e) => {
      let t = j(e);
      return t.a !== 1 ? j.toRgbString(t) : j.toHexString(t);
    },
  },
  UO = /var\(.+\)/,
  XO = new Map();
function YO(e, t) {
  let n = [e, t];
  return UO.test(e) ? e : WO(1e3, XO, n, () => tm.multiplyAlpha(e, t));
}
function Pa(e, t = 1) {
  let n;
  return (
    "stops" in e
      ? (n = e.stops)
      : (n = [
          { value: e.start, position: 0 },
          { value: e.end, position: 1 },
        ]),
    t === 1 ? n : n.map((r) => ({ ...r, value: YO(r.value, t) }))
  );
}
function Dw(e, t) {
  let n = 0;
  return (
    Pa(e, t).forEach((r) => {
      n ^= Ow(r.value) ^ r.position;
    }),
    n
  );
}
var GO = ["stops"];
function Aw(e) {
  return e && GO.every((t) => t in e);
}
var KO = ["start", "end"];
function Vw(e) {
  return e && KO.every((t) => t in e);
}
var qO = ["angle", "alpha"],
  pa = {
    isLinearGradient: (e) => e && qO.every((t) => t in e) && (Vw(e) || Aw(e)),
    hash: (e) => e.angle ^ Dw(e, e.alpha),
    toCSS: (e, t) => {
      let n = Pa(e, e.alpha),
        r = t !== void 0 ? t : e.angle,
        i = n.map((o) => `${o.value} ${o.position * 100}%`);
      return `linear-gradient(${r}deg, ${i.join(", ")})`;
    },
  },
  QO = [
    "widthFactor",
    "heightFactor",
    "centerAnchorX",
    "centerAnchorY",
    "alpha",
  ],
  ma = {
    isRadialGradient: (e) => e && QO.every((t) => t in e) && (Vw(e) || Aw(e)),
    hash: (e) =>
      e.centerAnchorX ^
      e.centerAnchorY ^
      e.widthFactor ^
      e.heightFactor ^
      Dw(e, e.alpha),
    toCSS: (e) => {
      let {
          alpha: t,
          widthFactor: n,
          heightFactor: r,
          centerAnchorX: i,
          centerAnchorY: o,
        } = e,
        s = Pa(e, t),
        a = s.map((l, c) => {
          let u = s[c + 1],
            f =
              l.position === 1 && u?.position === 1
                ? l.position - 1e-4
                : l.position;
          return `${l.value} ${f * 100}%`;
        });
      return `radial-gradient(${n * 100}% ${r * 100}% at ${i * 100}% ${
        o * 100
      }%, ${a.join(", ")})`;
    },
  };
function ZO({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == "string" || X1(t)
      ? (n.backgroundColor = t)
      : j.isColorObject(e) &&
        (n.backgroundColor = e.initialValue || j.toRgbString(e))
    : e &&
      ((e = Ke.get(e, null)),
      typeof e == "string" || X1(e)
        ? (n.background = e)
        : pa.isLinearGradient(e)
        ? (n.background = pa.toCSS(e))
        : ma.isRadialGradient(e)
        ? (n.background = ma.toCSS(e))
        : j.isColorObject(e) &&
          (n.backgroundColor = e.initialValue || j.toRgbString(e)));
}
function ce(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function JO(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function eD(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function tD(e) {
  if (!e) return {};
  let t = {};
  return (
    e.preserve3d === !0
      ? (t.transformStyle = "preserve-3d")
      : e.preserve3d === !1 && (t.transformStyle = "flat"),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = "visible")
      : e.backfaceVisible === !1 && (t.backfaceVisibility = "hidden"),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 &&
      (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = "50%"), (t.top = "50%"))
        : e.center === "x"
        ? (t.left = "50%")
        : e.center === "y" && (t.top = "50%")),
    ce(e, "size", t),
    ce(e, "width", t),
    ce(e, "height", t),
    ce(e, "minWidth", t),
    ce(e, "minHeight", t),
    ce(e, "top", t),
    ce(e, "right", t),
    ce(e, "bottom", t),
    ce(e, "left", t),
    ce(e, "position", t),
    ce(e, "overflow", t),
    ce(e, "opacity", t),
    (!e._border || !e._border.borderWidth) && ce(e, "border", t),
    ce(e, "borderRadius", t),
    ce(e, "radius", t, "borderRadius"),
    ce(e, "color", t),
    ce(e, "shadow", t, "boxShadow"),
    ce(e, "x", t),
    ce(e, "y", t),
    ce(e, "z", t),
    ce(e, "rotate", t),
    ce(e, "rotateX", t),
    ce(e, "rotateY", t),
    ce(e, "rotateZ", t),
    ce(e, "scale", t),
    ce(e, "scaleX", t),
    ce(e, "scaleY", t),
    ce(e, "skew", t),
    ce(e, "skewX", t),
    ce(e, "skewY", t),
    ce(e, "originX", t),
    ce(e, "originY", t),
    ce(e, "originZ", t),
    ZO(e, t),
    t
  );
}
function nD(e) {
  for (let t in e)
    if (
      t === "drag" ||
      t.startsWith("while") ||
      (typeof Ue(e)[t] == "function" &&
        t.startsWith("on") &&
        !t.includes("Animation"))
    )
      return !0;
  return !1;
}
var nS = [
    "onClick",
    "onDoubleClick",
    "onMouse",
    "onMouseDown",
    "onMouseUp",
    "onTapDown",
    "onTap",
    "onTapUp",
    "onPointer",
    "onPointerDown",
    "onPointerUp",
    "onTouch",
    "onTouchDown",
    "onTouchUp",
  ],
  rD = (() => new Set([...nS, ...nS.map((e) => `${e}Capture`)]))();
function iD(e) {
  if (e.drag) return "grab";
  for (let t in e) if (rD.has(t)) return "pointer";
}
var xp = "overflow";
function oD(e) {
  return rS(e) ? !0 : e.style ? !!rS(e.style) : !1;
}
function rS(e) {
  return xp in e && (e[xp] === "scroll" || e[xp] === "auto");
}
function Bw(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: o,
      height: s,
      center: a,
      _constraints: l,
      size: c,
      widthType: u,
      heightType: f,
      positionFixed: d,
      positionAbsolute: m,
    } = e,
    y = ut(e.minWidth),
    g = ut(e.minHeight),
    x = ut(e.maxWidth),
    p = ut(e.maxHeight);
  return {
    top: ut(n),
    left: ut(t),
    bottom: ut(r),
    right: ut(i),
    width: ut(o),
    height: ut(s),
    size: ut(c),
    center: a,
    _constraints: l,
    widthType: u,
    heightType: f,
    positionFixed: d,
    positionAbsolute: m,
    minWidth: y,
    minHeight: g,
    maxWidth: x,
    maxHeight: p,
  };
}
var iS = { x: 0, y: 0, width: 200, height: 200 };
function sD(e) {
  b.useInsertionEffect(() => {
    Ea();
  }, []);
  let t = !!D(Uo),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: o } = e,
    s = Bw(e),
    a = ZL(s),
    l = {
      display: "block",
      flex: n?.flex ?? "0 0 auto",
      userSelect: ie.current() !== ie.preview ? "none" : void 0,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor =
      e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);
  let c = !nD(e) && !e.__fromCanvasComponent && !oD(e),
    u = e.style ? !("pointerEvents" in e.style) : !0;
  c && u && (l.pointerEvents = "none");
  let d = b.Children.count(e.children) > 0 &&
      b.Children.toArray(e.children).every(
        (p) => typeof p == "string" || typeof p == "number"
      ) && {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      },
    m = tD(e);
  o === void 0 &&
    !i &&
    (JO(m) || (l.width = iS.width), eD(m) || (l.height = iS.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight);
  let y = {};
  Ca(s) &&
    a &&
    !vw(e) &&
    (y = {
      left: a.x,
      top: a.y,
      width: a.width,
      height: a.height,
      right: void 0,
      bottom: void 0,
    }),
    Object.assign(l, d, r, m, y, n),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    Xc.applyWillChange(e, l, !0);
  let g = l;
  l.transform || (g = { x: 0, y: 0, ...l });
  let x = ie.current() === ie.canvas;
  return (
    e.positionSticky
      ? (!x || t) &&
        ((g.position = "sticky"),
        (g.willChange = "transform"),
        (g.zIndex = 1),
        (g.top = e.positionStickyTop),
        (g.right = e.positionStickyRight),
        (g.bottom = e.positionStickyBottom),
        (g.left = e.positionStickyLeft))
      : x &&
        (e.positionFixed || e.positionAbsolute) &&
        (g.position = "absolute"),
    "rotate" in g && g.rotate === void 0 && delete g.rotate,
    [g, a]
  );
}
var aD = new Set([
  "width",
  "height",
  "opacity",
  "overflow",
  "radius",
  "background",
  "color",
  "x",
  "y",
  "z",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scaleX",
  "scaleY",
  "skew",
  "skewX",
  "skewY",
  "originX",
  "originY",
  "originZ",
]);
function lD(e) {
  let t = {};
  for (let n in e)
    (Yi(n) || rO(n)) && !aD.has(n)
      ? (t[n] = Ue(e)[n])
      : (n === "positionTransition" || n === "layoutTransition") &&
        ((t.layout = !0),
        typeof Ue(e)[n] != "boolean" &&
          !e.transition &&
          (t.transition = Ue(e)[n]));
  return t;
}
function cD(e) {
  return "data-framer-name" in e;
}
var uD = je(function (t, n) {
    let { name: r, center: i, border: o, _border: s, __portal: a } = t,
      { props: l, children: c } = RO(t),
      u = lD(l),
      f = Ra(t),
      d = iD(t),
      m = A(null),
      y = n ?? m,
      g = {
        "data-framer-component-type": t.componentType ?? "Frame",
        "data-framer-cursor": d,
        "data-framer-highlight": d === "pointer" ? !0 : void 0,
        "data-layoutid": f,
        "data-framer-offset-parent-id": Ue(t)["data-framer-offset-parent-id"],
      };
    !cD(t) && r && (Ue(g)["data-framer-name"] = r);
    let [x, p] = sD(l),
      h = Bw(l),
      v = vw(h);
    i && !(p && !v && Ca(h))
      ? (u.transformTemplate || (u.transformTemplate = uu(i)),
        Object.assign(g, Rw(i)))
      : u.transformTemplate || (u.transformTemplate = void 0),
      du(t, y);
    let S = kO(t),
      k = !!D(Uo),
      w = fD(l, h, p, k),
      T = QL(
        se(Fe, {
          children: [
            S
              ? C(Ew, {
                  alt: t.alt ?? "",
                  image: S,
                  containerSize: p ?? void 0,
                  nodeId: t.id && Zp(t.id),
                  layoutId: f,
                })
              : null,
            c,
            C(TO, { ...s, border: o, layoutId: f }),
          ],
        }),
        w
      ),
      E = cu(t.as),
      { size: F, radius: I, shadow: z } = x;
    return (
      F !== void 0 &&
        (delete x.size,
        x.height === void 0 && (x.height = F),
        x.width === void 0 && (x.width = F)),
      I !== void 0 && (delete x.radius, (x.borderRadius = I)),
      z !== void 0 && (delete x.shadow, (x.boxShadow = z)),
      se(E, { ...g, ...u, layoutId: f, style: x, ref: y, children: [T, a] })
    );
  }),
  Yc = je(function (t, n) {
    let { visible: r = !0 } = t;
    return r ? C(uD, { ...t, ref: n }) : null;
  });
function fD(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: o = 0, heightType: s = 0, width: a, height: l } = t;
  return n && !i
    ? n
    : o === 0 && s === 0 && typeof a == "number" && typeof l == "number"
    ? { width: a, height: l }
    : i || e.positionFixed || e.positionAbsolute
    ? 2
    : 0;
}
var nm = "__LAYOUT_TREE_ROOT",
  $w = b.createContext({
    schedulePromoteTree: () => {},
    scheduleProjectionDidUpdate: () => {},
    initLead: () => {},
  }),
  dD = class extends me {
    constructor() {
      super(...arguments),
        R(this, "shouldAnimate", !1),
        R(this, "transition"),
        R(this, "lead"),
        R(this, "follow"),
        R(this, "scheduledPromotion", !1),
        R(this, "scheduledDidUpdate", !1),
        R(this, "scheduleProjectionDidUpdate", () => {
          this.scheduledDidUpdate = !0;
        }),
        R(this, "schedulePromoteTree", (e, t, n) => {
          (this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0);
        }),
        R(this, "initLead", (e, t) => {
          (this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0);
        }),
        R(this, "sharedLayoutContext", {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        });
    }
    getSnapshotBeforeUpdate() {
      var e;
      if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
      let t =
        !!((e = this.lead) != null && e.layoutMaybeMutated) &&
        !this.shouldAnimate;
      return (
        this.lead.projectionNodes.forEach((n) => {
          var r;
          n?.promote({
            needsReset: t,
            transition: this.shouldAnimate ? this.transition : void 0,
            preserveFollowOpacity:
              n.options.layoutId === nm &&
              !((r = this.follow) != null && r.isExiting),
          });
        }),
        this.shouldAnimate
          ? (this.follow.layoutMaybeMutated = !0)
          : this.scheduleProjectionDidUpdate(),
        (this.lead.layoutMaybeMutated = !1),
        (this.transition = void 0),
        (this.scheduledPromotion = !1),
        null
      );
    }
    componentDidUpdate() {
      var e, t;
      if (!this.lead) return null;
      this.scheduledDidUpdate &&
        ((t = (e = this.lead.rootProjectionNode) == null ? void 0 : e.root) ==
          null || t.didUpdate(),
        (this.scheduledDidUpdate = !1));
    }
    render() {
      return C($w.Provider, {
        value: this.sharedLayoutContext,
        children: this.props.children,
      });
    }
  },
  hD = { width: "100%", height: "100%", backgroundColor: "none" };
function pD(e) {
  return C(Ut.div, { layoutId: nm, style: hD, children: e.children });
}
var mD = class {
    constructor(e) {
      R(this, "sharedIntersectionObserver"),
        R(this, "callbacks", new WeakMap()),
        document &&
          (this.sharedIntersectionObserver = new IntersectionObserver(
            this.resizeObserverCallback.bind(this),
            e
          ));
    }
    resizeObserverCallback(e, t) {
      for (let n of e) {
        let r = this.callbacks.get(n.target);
        r && r([n], t);
      }
    }
    observeElementWithCallback(e, t) {
      this.sharedIntersectionObserver &&
        (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
    }
    unobserve(e) {
      this.sharedIntersectionObserver &&
        (this.sharedIntersectionObserver.unobserve(e),
        this.callbacks.delete(e));
    }
    get root() {
      var e;
      return (e = this.sharedIntersectionObserver) == null ? void 0 : e.root;
    }
  },
  vD = b.createContext(new Map());
function gD(e, t, n) {
  if (typeof IntersectionObserver > "u") return;
  let r = nn(() => `${n.rootMargin}`),
    i = b.useContext(vD),
    { enabled: o } = n;
  b.useEffect(() => {
    var s;
    let a = e.current;
    if (!o || !a) return;
    let l = i.get(r);
    if (!l || l.root !== ((s = n.root) == null ? void 0 : s.current)) {
      let { root: c, ...u } = n;
      (l = new mD({ ...u, root: c?.current })), i.set(r, l);
    }
    return l.observeElementWithCallback(a, t), () => l?.unobserve(a);
  }, [o]);
}
var yD = new Array(100).fill(void 0).map((e, t) => t * 0.01),
  bD = b.createContext(null);
function xD(e, t, n) {
  let r = b.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    {
      enabled: i,
      animateOnce: o,
      threshold: s,
      rootMargin: a = "0px 0px 0px 0px",
    } = n,
    l = b.useCallback(
      ([c]) => {
        if (!c) return;
        let { isInView: u, hasAnimatedOnce: f } = r.current,
          d = wD(c, s?.y ?? 0);
        if (d && !u) {
          if (o && f) return;
          (r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0);
          return;
        }
        if (!d && u) {
          if (((r.current.isInView = !1), o)) return;
          t(!1);
          return;
        }
      },
      [o, s?.y, t]
    );
  gD(e, l, { threshold: yD, rootMargin: a, enabled: i ?? !0 });
}
function SD(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, Bt.innerHeight);
}
function wD(
  { boundingClientRect: e, intersectionRect: t, isIntersecting: n },
  r
) {
  return e.height === 0 ? n : n && SD(t, e) >= r;
}
var qz = An(su(), 1);
var Zz = An(su(), 1);
var oS = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  mr = Symbol("private"),
  Sp = (() => {
    function e(t = {}, n = !1, r = !0) {
      let i = {
          [mr]: {
            makeAnimatables: n,
            observeAnimatables: r,
            observers: new aw(),
            reset() {
              for (let s in o)
                if (oS(o, s)) {
                  let a = oS(t, s) ? Ue(t)[s] : void 0;
                  a !== void 0 ? (o[s] = a) : delete o[s];
                }
            },
            transactions: new Set(),
          },
        },
        o = new Proxy(i, CD);
      return Object.assign(o, t), o;
    }
    return (
      (e.resetObject = (t) => t[mr].reset()),
      (e.addObserver = (t, n) => t[mr].observers.add(n)),
      e
    );
  })(),
  kD = class {
    constructor() {
      R(this, "set", (e, t, n, r) => {
        if (t === mr) return !1;
        let i = e[mr],
          o,
          s;
        if (
          (Pn(n) ? ((o = n), (s = o.get())) : (s = n),
          i.makeAnimatables &&
            typeof n != "function" &&
            typeof n != "object" &&
            !o &&
            (o = Ke(n)),
          i.observeAnimatables && o)
        ) {
          let u = i.transactions;
          o.onUpdate({
            update: (f, d) => {
              d && u.add(d), i.observers.notify({ value: r }, d);
            },
            finish: (f) => {
              u.delete(f) && i.observers.finishTransaction(f);
            },
          });
        }
        let a = !1,
          l = !0,
          c = Ue(e)[t];
        if (c !== void 0) {
          Pn(c)
            ? ((l = c.get() !== s), c.set(s))
            : ((l = c !== s), (Ue(e)[t] = s));
          let u = s !== null && typeof s == "object";
          (Array.isArray(s) || u) && (l = !0), (a = !0);
        } else o && (n = o), (a = Reflect.set(e, t, n));
        return l && i.observers.notify({ value: r }), a;
      }),
        R(this, "get", (e, t, n) => {
          if (t === mr) return Ue(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == "function" ? r.bind(n) : r;
        });
    }
    deleteProperty(e, t) {
      let n = Reflect.deleteProperty(e, t);
      return e[mr].observers.notify({ value: e }), n;
    }
    ownKeys(e) {
      let t = Reflect.ownKeys(e),
        n = t.indexOf(mr);
      return n !== -1 && t.splice(n, 1), t;
    }
    getOwnPropertyDescriptor(e, t) {
      if (t !== mr) return Reflect.getOwnPropertyDescriptor(e, t);
    }
  },
  CD = new kD();
var TD = "opacity";
function ED(e) {
  return TD in e;
}
function RD(e, t) {
  if (!ED(e)) return;
  let n = Ke.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function PD(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map(
      (r) => `drop-shadow(${r.x}px ${r.y}px ${r.blur}px ${r.color})`
    );
    t.push(...n);
  }
  return t;
}
function zw(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows
    .map((r) => `${r.x}px ${r.y}px ${r.blur}px ${r.color}`)
    .join(", ");
  n && (t.textShadow = n);
}
function _D(e, t) {
  let n = [];
  q(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    q(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    q(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    q(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    q(e.invert) && n.push(`invert(${e.invert / 100})`),
    q(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    q(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    q(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...PD(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(" "));
}
function ID(e, t) {
  q(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function rm(e, t) {
  ID(e, t), _D(e, t);
}
var FD = class extends me {
    constructor() {
      super(...arguments),
        R(this, "layoutMaybeMutated"),
        R(this, "projectionNodes", new Map()),
        R(this, "rootProjectionNode"),
        R(this, "isExiting"),
        R(
          this,
          "shouldPreserveFollowOpacity",
          (e) => e.options.layoutId === nm && !this.props.isExiting
        ),
        R(this, "switchLayoutGroupContext", {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        });
    }
    componentDidMount() {
      this.props.isLead &&
        this.props.sharedLayoutContext.initLead(
          this,
          !!this.props.animatesLayout
        );
    }
    shouldComponentUpdate(e) {
      let {
        isLead: t,
        isExiting: n,
        isOverlayed: r,
        animatesLayout: i,
        transition: o,
        sharedLayoutContext: s,
      } = e;
      if (((this.isExiting = n), t === void 0)) return !0;
      let a = !this.props.isLead && !!t,
        l = this.props.isExiting && !n,
        c = a || l,
        u = !!this.props.isLead && !t,
        f = this.props.isOverlayed !== r;
      return (
        (c || u) && this.projectionNodes.forEach((d) => d?.willUpdate()),
        c
          ? s.schedulePromoteTree(this, o, !!i)
          : f && s.scheduleProjectionDidUpdate(),
        !!c && !!i
      );
    }
    addChild(e) {
      let t = e.options.layoutId;
      t && (this.projectionNodes.set(t, e), this.setRootChild(e));
    }
    setRootChild(e) {
      if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
      this.rootProjectionNode =
        this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
    }
    removeChild(e) {
      let t = e.options.layoutId;
      t && this.projectionNodes.delete(t);
    }
    render() {
      return C(tl.Provider, {
        value: this.switchLayoutGroupContext,
        children: this.props.children,
      });
    }
  },
  LD = (e) => {
    let t = b.useContext($w);
    return C(FD, { ...e, sharedLayoutContext: t });
  },
  MD = b.createContext(!0);
function OD() {
  return new Map();
}
function DD() {
  return nn(OD);
}
var Nw = be({ register: () => {}, deregister: () => {} }),
  AD = ({ isCurrent: e, isOverlayed: t, children: n }) => {
    let r = DD(),
      i = fe(
        (a) => {
          if (r.has(a)) {
            console.warn("NavigationTargetWrapper: already registered");
            return;
          }
          r.set(a, void 0);
        },
        [r]
      ),
      o = fe(
        (a) => {
          let l = r.get(a);
          l?.(), r.delete(a);
        },
        [r]
      ),
      s = A({ register: i, deregister: o }).current;
    return (
      H(
        () => (
          r.forEach((a, l) => {
            let c = l(e, t);
            r.set(l, No(c) ? c : void 0);
          }),
          () => {
            r.forEach((a, l) => {
              a && (a(), r.set(l, void 0));
            });
          }
        ),
        [e, t, r]
      ),
      C(Nw.Provider, { value: s, children: n })
    );
  };
function VD(e, t = []) {
  let { register: n, deregister: r } = D(Nw);
  H(() => {
    if (e) return n(e), () => r(e);
  }, [n, r, ...t]);
}
var wp = b.memo(function ({
  isLayeredContainer: t,
  isCurrent: n,
  isPrevious: r,
  isOverlayed: i = !1,
  visible: o,
  transitionProps: s,
  children: a,
  backdropColor: l,
  onTapBackdrop: c,
  backfaceVisible: u,
  exitBackfaceVisible: f,
  animation: d,
  exitAnimation: m,
  instant: y,
  initialProps: g,
  exitProps: x,
  position: p = { top: 0, right: 0, bottom: 0, left: 0 },
  withMagicMotion: h,
  index: v,
  areMagicMotionLayersPresent: S,
  id: k,
  isInitial: w,
}) {
  let T = Gy(),
    E = D(qi),
    { persistLayoutIdCache: F } = D(zo),
    I = A({
      wasCurrent: void 0,
      wasPrevious: !1,
      wasBeingRemoved: !1,
      wasReset: !0,
      origins: sS({}, g, s),
    }),
    z = A(null),
    $ = E !== null && !E.isPresent;
  n && I.current.wasCurrent === void 0 && F(),
    H(() => {
      if (t || !T) return;
      if ($) {
        I.current = { ...I.current, wasBeingRemoved: $ };
        return;
      }
      let { wasPrevious: de, wasCurrent: Q } = I.current,
        gt = (n && !Q) || (!$ && I.current.wasBeingRemoved && n),
        Ve = r && !de,
        Xe = sS(I.current.origins, g, s),
        lt = I.current.wasReset;
      gt || Ve
        ? (T.stop(), T.start({ zIndex: v, ...Xe, ...s }), (lt = !1))
        : lt === !1 &&
          (T.stop(), T.set({ zIndex: v, ...Ii, opacity: 0 }), (lt = !0)),
        (I.current = {
          wasCurrent: !!n,
          wasPrevious: !!r,
          wasBeingRemoved: !1,
          wasReset: lt,
          origins: Xe,
        });
    }, [n, r, $]);
  let re = y ? { type: !1 } : "velocity" in d ? { ...d, velocity: 0 } : d,
    J = y ? { type: !1 } : m || d,
    V = { ...p };
  (V.left === void 0 || V.right === void 0) && (V.width = "auto"),
    (V.top === void 0 || V.bottom === void 0) && (V.height = "auto");
  let Z = (aS(s) || aS(g)) && (t || n || r) ? 1200 : void 0,
    ee = { ...Ii, ...I.current.origins },
    W = t
      ? {
          initial: { ...ee, ...g },
          animate: { ...ee, ...s, transition: re },
          exit: { ...ee, ...x, transition: d },
        }
      : { animate: T, exit: { ...ee, ...x, transition: J } },
    te = !($ || S === !1),
    ne = !!n && te;
  return se(Yc, {
    "data-framer-component-type": "NavigationContainerWrapper",
    width: "100%",
    height: "100%",
    style: {
      position: "absolute",
      transformStyle: "flat",
      backgroundColor: "transparent",
      overflow: "hidden",
      zIndex: t || $ || (n && h) ? v : void 0,
      pointerEvents: void 0,
      visibility: o ? "visible" : "hidden",
      perspective: Z,
    },
    children: [
      t &&
        C(Yc, {
          width: "100%",
          height: "100%",
          "data-framer-component-type": "NavigationContainerBackdrop",
          transition: d,
          initial: { opacity: y && o ? 1 : 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          backgroundColor: l || "transparent",
          onTap: $ ? void 0 : c,
        }),
      C(Yc, {
        ...V,
        ...W,
        transition: {
          default: re,
          originX: { type: !1 },
          originY: { type: !1 },
          originZ: { type: !1 },
        },
        backgroundColor: "transparent",
        backfaceVisible: $ ? f : u,
        "data-framer-component-type": "NavigationContainer",
        "data-framer-is-current-navigation-target": !!n,
        style: {
          pointerEvents: void 0,
          opacity: (n && w) || t || (n && h) ? 1 : 0,
        },
        "data-is-present": te ? void 0 : !1,
        ref: z,
        children: C(bD.Provider, {
          value: z,
          children: C(MD.Provider, {
            value: ne,
            children: C(AD, {
              isCurrent: ne,
              isOverlayed: i,
              children: C(LD, {
                isLead: n,
                animatesLayout: !!h,
                transition: re,
                isExiting: !te,
                isOverlayed: i,
                id: k,
                children: a,
              }),
            }),
          }),
        }),
      }),
    ],
  });
},
BD);
function BD(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function sS(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (q(t.originX) && (r.originX = t.originX),
      q(t.originY) && (r.originY = t.originY),
      q(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (q(n.originX) && (r.originX = n.originX),
      q(n.originY) && (r.originY = n.originY),
      q(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function aS(e) {
  var t, n, r;
  if (!e || !("rotateX" in e || "rotateY" in e || "z" in e)) return !1;
  let o = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    s =
      ((t = e?.transition) == null ? void 0 : t.rotateX.from) !== 0 ||
      ((n = e?.transition) == null ? void 0 : n.rotateY.from) !== 0 ||
      ((r = e?.transition) == null ? void 0 : r.z.from) !== 0;
  return o || s;
}
var Ii = {
    x: 0,
    y: 0,
    z: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    skew: 0,
    skewX: 0,
    skewY: 0,
    originX: 0.5,
    originY: 0.5,
    originZ: 0,
    opacity: 1,
  },
  $D = class {
    constructor() {
      R(this, "warning", () => {
        fa(
          "The Navigator API is only available inside of Framer: https://www.framer.com/"
        );
      }),
        R(this, "goBack", () => this.warning()),
        R(this, "instant", () => this.warning()),
        R(this, "fade", () => this.warning()),
        R(this, "push", () => this.warning()),
        R(this, "modal", () => this.warning()),
        R(this, "overlay", () => this.warning()),
        R(this, "flip", () => this.warning()),
        R(this, "customTransition", () => this.warning()),
        R(this, "magicMotion", () => this.warning());
    }
  },
  zD = new $D(),
  ND = be(zD),
  Je = {
    Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
    PushLeft: { exit: { x: "-30%" }, enter: { x: "100%" } },
    PushRight: { exit: { x: "30%" }, enter: { x: "-100%" } },
    PushUp: { exit: { y: "-30%" }, enter: { y: "100%" } },
    PushDown: { exit: { y: "30%" }, enter: { y: "-100%" } },
    Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
    Modal: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { center: !0 },
      enter: { opacity: 0, scale: 1.2 },
    },
    OverlayLeft: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { right: 0, top: 0, bottom: 0 },
      enter: { x: "100%" },
    },
    OverlayRight: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { left: 0, top: 0, bottom: 0 },
      enter: { x: "-100%" },
    },
    OverlayUp: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { bottom: 0, left: 0, right: 0 },
      enter: { y: "100%" },
    },
    OverlayDown: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { top: 0, left: 0, right: 0 },
      enter: { y: "-100%" },
    },
    FlipLeft: {
      backfaceVisible: !1,
      exit: { rotateY: -180 },
      enter: { rotateY: 180 },
    },
    FlipRight: {
      backfaceVisible: !1,
      exit: { rotateY: 180 },
      enter: { rotateY: -180 },
    },
    FlipUp: {
      backfaceVisible: !1,
      exit: { rotateX: 180 },
      enter: { rotateX: -180 },
    },
    FlipDown: {
      backfaceVisible: !1,
      exit: { rotateX: -180 },
      enter: { rotateX: 180 },
    },
    MagicMotion: { withMagicMotion: !0 },
  };
function HD(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "right") {
    case "right":
      return Je.PushLeft;
    case "left":
      return Je.PushRight;
    case "bottom":
      return Je.PushUp;
    case "top":
      return Je.PushDown;
  }
}
function jD(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
      return Je.OverlayLeft;
    case "left":
      return Je.OverlayRight;
    case "bottom":
      return Je.OverlayUp;
    case "top":
      return Je.OverlayDown;
  }
}
function WD(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
      return Je.FlipLeft;
    case "left":
      return Je.FlipRight;
    case "bottom":
      return Je.FlipUp;
    case "top":
      return Je.FlipDown;
  }
}
var UD = () => ({
  current: -1,
  previous: -1,
  currentOverlay: -1,
  previousOverlay: -1,
  visualIndex: 0,
  overlayItemId: 0,
  historyItemId: 0,
  history: [],
  overlayStack: [],
  containers: {},
  containerIndex: {},
  containerVisualIndex: {},
  containerIsRemoved: {},
  transitionForContainer: {},
  previousTransition: null,
});
function lS(e, t) {
  switch (t.type) {
    case "addOverlay":
      return YD(e, t.transition, t.component);
    case "removeOverlay":
      return GD(e);
    case "add":
      return Hw(e, t.key, t.transition, t.component);
    case "remove":
      return jw(e);
    case "update":
      return XD(e, t.key, t.component);
    case "back":
      return KD(e);
    case "forward":
      return qD(e);
    default:
      return;
  }
}
function XD(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function YD(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    o = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: o,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, o.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function GD(e) {
  return {
    ...e,
    overlayStack: [],
    currentOverlay: -1,
    previousOverlay: e.currentOverlay,
  };
}
function Hw(e, t, n, r) {
  e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0));
  let i = e.history[e.history.length - 1],
    o = i && i.key === t;
  if (((e.overlayStack = []), o && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (o) return;
  let s = e.containerVisualIndex[t],
    a = e.containerIsRemoved[t],
    l = i?.key && n.withMagicMotion ? eA(t, s, a, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: l ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let c = e.current + 1,
    u = e.current;
  for (let y in e.containerIndex)
    e.containerIndex[y] === c && (e.containerIndex[y] = JD(y, e.history));
  e.containerIndex[t] = c;
  let { containerVisualIndex: f, containerIsRemoved: d } = QD(e, t, l),
    m = Ww(c, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: c,
    previous: u,
    containerVisualIndex: f,
    containerIsRemoved: d,
    transitionForContainer: m,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function KD(e) {
  let t = { ...e.containers },
    n = jw(e);
  if (n) return (n.containers = t), n;
}
function qD(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    o = [...e.history],
    s = Hw(e, n, r, i);
  if (s) return (s.history = o), s;
}
function jw(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  he(r, "The navigation history must have at least one component"),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((d) => d.key !== n.key) && delete e.containers[n.key];
  let o = e.current - 1,
    s = e.current,
    {
      containerIsRemoved: a,
      containerVisualIndex: l,
      previousTransition: c,
      visualIndex: u,
    } = ZD(e, r, n),
    f = Ww(o, s, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: o,
    previous: s,
    containerIsRemoved: a,
    containerVisualIndex: l,
    previousTransition: c,
    visualIndex: u,
    transitionForContainer: f,
  };
}
function QD(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n)
    (r.containerVisualIndex[t] = e.history.length - 1),
      (r.containerIsRemoved[t] = !1);
  else {
    let i = e.containerVisualIndex[t];
    for (let [o, s] of Object.entries(e.containerVisualIndex))
      i !== void 0 && s > i && (r.containerIsRemoved[o] = !0);
  }
  return r;
}
function ZD(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    o = e.previousTransition === null ? null : { ...e.previousTransition },
    s = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: o,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let a = e.containerVisualIndex[t.key],
    l = e.containerVisualIndex[n.key],
    c =
      (a !== void 0 && l !== void 0 && a <= l) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    c
      ? ((s.containerIsRemoved[n.key] = !0),
        (s.containerVisualIndex[t.key] =
          u !== void 0 ? u : e.history.length - 1))
      : ((s.visualIndex = e.visualIndex + 1),
        (s.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion &&
      (s.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    s
  );
}
function JD(e, t) {
  var n;
  for (let r = t.length; r > t.length; r--)
    if (((n = t[r]) == null ? void 0 : n.key) === e) return r;
  return -1;
}
function Ww(e, t, n, r, i) {
  let o = { ...i };
  for (let [s, a] of Object.entries(r)) {
    let l = tA(a, { current: e, previous: t, history: n });
    l && (o[s] = l);
  }
  return o;
}
function eA(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
    ? !1
    : r.slice(t, r.length).findIndex((s) => s.key === e) > -1
    ? !0
    : !(r.slice(0, t - 1).findIndex((s) => s.key === e) > -1);
}
function tA(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let o = i[e];
      return zc("enter", o?.transition.enter, o?.transition.animation);
    }
    if (e === r && n > r) {
      let o = i[e + 1];
      return zc("exit", o?.transition.exit, o?.transition.animation);
    }
    if (e === n && n < r) {
      let o = i[e + 1];
      return zc("enter", o?.transition.exit, o?.transition.animation);
    }
    if (e === r && n < r) {
      let o = i[e];
      return zc("exit", o?.transition.enter, o?.transition.animation);
    }
  }
}
var nA = Oi(Ii);
function zc(e, t, n) {
  let r = {},
    i = {};
  return (
    nA.forEach((o) => {
      (r[o] = Ii[o]), (i[o] = { ...n, from: Ii[o] });
    }),
    t &&
      Object.keys(t).forEach((o) => {
        if (t[o] === void 0) return;
        let s = t[o],
          a = typeof t[o] == "string" ? `${Ue(Ii)[o]}%` : Ue(Ii)[o];
        (Ue(r)[o] = e === "enter" ? a : s),
          (i[o] = { ...n, from: e === "enter" ? s : a, velocity: 0 });
      }),
    { ...r, transition: { ...i } }
  );
}
var rA = b.createContext(void 0);
var Uw = b.createContext(void 0),
  iA = (() => {
    var e, t, n, r, i, o, s, a, l;
    return (
      (t = class extends me {
        constructor(c) {
          var u;
          super(c),
            Ki(this, n),
            Ki(this, i),
            Ki(this, a),
            Ki(this, e, null),
            R(this, "state", UD()),
            Ki(this, s, (x) => {
              if (!this.props.enabled && this.state.history.length > 0) return;
              let p = lS(this.state, x);
              if (!p) return;
              let { skipLayoutAnimation: h } = this.props,
                v = p.history[p.current],
                S =
                  (x.type === "add" && x.transition.withMagicMotion) ||
                  (x.type === "forward" && v?.transition.withMagicMotion) ||
                  (x.type === "remove" && !!p.previousTransition),
                k = () => {
                  var w;
                  this.setState(p),
                    v?.key &&
                      ((w = this.context) == null || w.call(this, v.key));
                };
              h && !S ? h(k) : k();
            }),
            R(this, "goBack", () => {
              var x;
              if (!Ft(this, i, o).call(this))
                return (
                  sf(
                    this,
                    e,
                    ((x = globalThis.event) == null ? void 0 : x.timeStamp) ||
                      null
                  ),
                  this.state.currentOverlay !== -1
                    ? fi(this, s).call(this, { type: "removeOverlay" })
                    : fi(this, s).call(this, { type: "remove" })
                );
            });
          let f = this.props.children;
          if (!f || !Uc(f) || !Wc(f)) return;
          let d = { ...Je.Instant },
            y = {
              type: "add",
              key:
                ((u = f.key) == null ? void 0 : u.toString()) ||
                `stack-${this.state.historyItemId + 1}`,
              transition: d,
              component: f,
            },
            g = lS(this.state, y);
          g && (this.state = g);
        }
        componentDidMount() {
          var c;
          let u = this.state.history[this.state.current];
          u && ((c = this.context) == null || c.call(this, u.key));
        }
        UNSAFE_componentWillReceiveProps(c) {
          var u;
          let f = c.children;
          if (!Uc(f) || !Wc(f)) return;
          let d = (u = f.key) == null ? void 0 : u.toString();
          d &&
            (this.state.history.length === 0
              ? Ft(this, a, l).call(this, f, Je.Instant)
              : fi(this, s).call(this, {
                  type: "update",
                  key: d,
                  component: f,
                }));
        }
        componentWillUnmount() {
          var c, u;
          (u = (c = this.props).resetProjection) == null || u.call(c);
        }
        instant(c) {
          Ft(this, a, l).call(this, c, Je.Instant, void 0);
        }
        fade(c, u) {
          Ft(this, a, l).call(this, c, Je.Fade, u);
        }
        push(c, u) {
          Ft(this, a, l).call(this, c, HD(u), u);
        }
        modal(c, u) {
          Ft(this, a, l).call(this, c, Je.Modal, u);
        }
        overlay(c, u) {
          Ft(this, a, l).call(this, c, jD(u), u);
        }
        flip(c, u) {
          Ft(this, a, l).call(this, c, WD(u), u);
        }
        magicMotion(c, u) {
          Ft(this, a, l).call(this, c, Je.MagicMotion, u);
        }
        customTransition(c, u) {
          Ft(this, a, l).call(this, c, u);
        }
        render() {
          var c, u, f, d, m;
          let y = Ft(this, n, r).call(this, { overCurrentContext: !1 }),
            g = Ft(this, n, r).call(this, { overCurrentContext: !0 }),
            x = oA(g),
            p = g.current > -1,
            h = this.state.history.length === 1,
            v = [];
          for (let [k, w] of Object.entries(this.state.containers)) {
            let T = this.state.containerIndex[k];
            he(T !== void 0, "Container's index must be registered");
            let E = this.state.containerVisualIndex[k];
            he(E !== void 0, "Container's visual index must be registered");
            let F = this.state.containerIsRemoved[k],
              I = this.state.history[T],
              z = this.state.transitionForContainer[k],
              $ = T === this.state.current,
              re = T === this.state.previous,
              J = $ ? !1 : F,
              V =
                ((c = I?.transition) == null ? void 0 : c.withMagicMotion) ||
                ($ && !!this.state.previousTransition);
            v.push(
              C(
                wp,
                {
                  id: k,
                  index: E,
                  isInitial: h,
                  isCurrent: $,
                  isPrevious: re,
                  isOverlayed: p,
                  visible: $ || re,
                  position: (u = I?.transition) == null ? void 0 : u.position,
                  instant: uS(T, y),
                  transitionProps: z,
                  animation: cS(T, y),
                  backfaceVisible: dA(T, y),
                  exitAnimation:
                    (f = I?.transition) == null ? void 0 : f.animation,
                  exitBackfaceVisible:
                    (d = I?.transition) == null ? void 0 : d.backfaceVisible,
                  exitProps: (m = I?.transition) == null ? void 0 : m.enter,
                  withMagicMotion: V,
                  areMagicMotionLayersPresent: J ? !1 : void 0,
                  children: C(pD, {
                    children: fS({ component: w, transition: I?.transition }),
                  }),
                },
                k
              )
            );
          }
          let S = this.state.overlayStack.map((k, w) =>
            C(
              wp,
              {
                isLayeredContainer: !0,
                isCurrent: w === this.state.currentOverlay,
                position: k.transition.position,
                initialProps: fA(w, g),
                transitionProps: hA(w, g),
                instant: uS(w, g, !0),
                animation: cS(w, g),
                exitProps: k.transition.enter,
                visible: pA(w, g),
                backdropColor: cA(k.transition),
                backfaceVisible: uA(w, g),
                onTapBackdrop: mA(k.transition, this.goBack),
                index: this.state.current + 1 + w,
                children: fS({
                  component: k.component,
                  transition: k.transition,
                }),
              },
              k.key
            )
          );
          return C(Yc, {
            "data-framer-component-type": "NavigationRoot",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "relative",
            style: {
              overflow: "hidden",
              backgroundColor: "unset",
              pointerEvents: void 0,
              ...this.props.style,
            },
            children: C(ND.Provider, {
              value: this,
              children: se(Uw.Provider, {
                value: h,
                children: [
                  C(wp, {
                    isLayeredContainer: !0,
                    position: void 0,
                    initialProps: {},
                    instant: !1,
                    transitionProps: sA(x),
                    animation: aA(x),
                    backfaceVisible: lA(x),
                    visible: !0,
                    backdropColor: void 0,
                    onTapBackdrop: void 0,
                    index: 0,
                    children: C(PL, {
                      children: C(dD, {
                        children: C(Kf, {
                          presenceAffectsLayout: !1,
                          children: v,
                        }),
                      }),
                    }),
                  }),
                  C(Kf, { children: S }),
                ],
              }),
            }),
          });
        }
      }),
      (e = new WeakMap()),
      (n = new WeakSet()),
      (r = function (c) {
        let {
          current: u,
          previous: f,
          currentOverlay: d,
          previousOverlay: m,
        } = this.state;
        return c.overCurrentContext
          ? { current: d, previous: m, history: this.state.overlayStack }
          : { current: u, previous: f, history: this.state.history };
      }),
      (i = new WeakSet()),
      (o = function () {
        return globalThis.event
          ? fi(this, e) === globalThis.event.timeStamp
          : !1;
      }),
      (s = new WeakMap()),
      (a = new WeakSet()),
      (l = function (c, u, f) {
        var d, m;
        if (
          Ft(this, i, o).call(this) ||
          (sf(
            this,
            e,
            ((d = globalThis.event) == null ? void 0 : d.timeStamp) || null
          ),
          !c || !Uc(c) || !Wc(c))
        )
          return;
        let y = { ...u, ...f };
        if (!!y.overCurrentContext)
          return fi(this, s).call(this, {
            type: "addOverlay",
            transition: y,
            component: c,
          });
        let x =
          ((m = c.key) == null ? void 0 : m.toString()) ||
          `stack-${this.state.historyItemId + 1}`;
        fi(this, s).call(this, {
          type: "add",
          key: x,
          transition: y,
          component: c,
        });
      }),
      R(t, "defaultProps", { enabled: !0 }),
      R(t, "contextType", rA),
      t
    );
  })(),
  Xw = { stiffness: 500, damping: 50, restDelta: 1, type: "spring" };
function oA(e) {
  let t, n;
  return (
    e.current !== -1 ? (t = e.history[e.current]) : (n = e.history[e.previous]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function sA({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function aA({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
    ? t.transition.animation
    : Xw;
}
function lA({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function cA(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return "rgba(4,4,15,.4)";
}
function uA(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let i = r[e];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  } else if (e < n) {
    let i = r[e + 1];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  } else {
    let i = r[e];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  }
}
function fA(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function dA(e, t) {
  var n, r, i, o;
  let { current: s, previous: a, history: l } = t;
  return (e === a && s > a) || (e === s && s < a)
    ? (r = (n = l[e + 1]) == null ? void 0 : n.transition) == null
      ? void 0
      : r.backfaceVisible
    : (o = (i = l[e]) == null ? void 0 : i.transition) == null
    ? void 0
    : o.backfaceVisible;
}
function hA(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let i = r[e + 1];
      if (i && i.transition) return i.transition.exit;
    } else {
      let i = r[e];
      if (i && i.transition) return i.transition.enter;
    }
}
function cS(e, t) {
  let { current: n, previous: r, history: i } = t,
    o = r > n ? r : n;
  if (e < o) {
    let s = i[e + 1];
    if (s && s.transition.animation) return s.transition.animation;
  } else if (e !== o) {
    let s = i[e];
    if (s && s.transition.animation) return s.transition.animation;
  } else {
    let s = i[e];
    if (s?.transition.animation) return s.transition.animation;
  }
  return Xw;
}
function uS(e, t, n) {
  let { current: r, previous: i, history: o } = t;
  return !!((n && o.length > 1) || (e !== i && e !== r) || r === i);
}
function pA(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function fS(e) {
  return b.Children.map(e.component, (n) => {
    var r;
    if (!Uc(n) || !Wc(n) || !n.props) return n;
    let i = { style: n.props.style ?? {} },
      o = (r = e?.transition) == null ? void 0 : r.position,
      s = !o || (o.left !== void 0 && o.right !== void 0),
      a = !o || (o.top !== void 0 && o.bottom !== void 0),
      l = "style" in n.props ? Ae(n.props.style) : !0;
    return (
      s &&
        ("width" in n.props && (i.width = "100%"),
        l && (i.style.width = "100%")),
      a &&
        ("height" in n.props && (i.height = "100%"),
        l && (i.style.height = "100%")),
      b.cloneElement(n, i)
    );
  });
}
function mA(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function vA(e) {
  let t = Qy(),
    n = Jf();
  return (
    b.useInsertionEffect(() => {
      Ea();
    }, []),
    C(iA, {
      ...e,
      resetProjection: t,
      skipLayoutAnimation: n,
      children: e.children,
    })
  );
}
var p6 = An(su(), 1);
var b6 = An(Wp(), 1);
function tu(...e) {
  return e.filter(Boolean).join(" ");
}
var gA = (() => {
    function e(t = {}) {
      let n = Sp(t, !1, !1);
      return e.addData(n), n;
    }
    return (
      (e._stores = []),
      (e.addData = (t) => {
        e._stores.push(t);
      }),
      (e.reset = () => {
        e._stores.forEach((t) => Sp.resetObject(t));
      }),
      (e.addObserver = (t, n) => Sp.addObserver(t, n)),
      e
    );
  })(),
  kp = gA;
var yA = { update: 0 },
  bA = b.createContext({ update: NaN });
var xA = class extends me {
    constructor() {
      super(...arguments),
        R(this, "observers", []),
        R(this, "state", yA),
        R(this, "taskAdded", !1),
        R(this, "frameTask", () => {
          this.setState({ update: this.state.update + 1 }),
            (this.taskAdded = !1);
        }),
        R(this, "observer", () => {
          this.taskAdded ||
            ((this.taskAdded = !0), uw.addFrameTask(this.frameTask));
        });
    }
    componentWillUnmount() {
      this.observers.map((e) => e()), kp.reset();
    }
    render() {
      let { children: e } = this.props;
      return (
        this.observers.map((t) => t()),
        (this.observers = []),
        kp._stores.forEach((t) => {
          let n = kp.addObserver(t, this.observer);
          this.observers.push(n);
        }),
        C(bA.Provider, { value: { ...this.state }, children: e })
      );
    }
  },
  U6 = An(su(), 1);
var Yw = "__framer__",
  SA = (() => Yw.length)();
function wA(e) {
  if (e.startsWith(Yw)) return e.substr(SA);
}
var Yn = [
    "opacity",
    "x",
    "y",
    "scale",
    "rotate",
    "rotateX",
    "rotateY",
    "skewX",
    "skewY",
    "transformPerspective",
  ],
  nu = (e) => ({
    x: Oe(e?.x ?? 0),
    y: Oe(e?.y ?? 0),
    opacity: Oe(e?.opacity ?? 1),
    scale: Oe(e?.scale ?? 1),
    rotate: Oe(e?.rotate ?? 0),
    rotateX: Oe(e?.rotateX ?? 0),
    rotateY: Oe(e?.rotateY ?? 0),
    skewX: Oe(e?.skewX ?? 0),
    skewY: Oe(e?.skewY ?? 0),
    transformPerspective: Oe(e?.transformPerspective ?? 0),
  }),
  Ne = {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    skewX: 0,
    skewY: 0,
    transformPerspective: 0,
  };
function Gw(e) {
  return e in Ne;
}
function Kw(e, t) {
  let n = nn(() => ({ values: nu(t ? e : void 0) }));
  return (
    b.useEffect(() => {
      if (!t)
        for (let r of Yn) {
          let i = Ne[r];
          $t(i) || n.values[r].set(i);
        }
    }, [n, t]),
    n
  );
}
var kA = new Set([
    "loopEffectEnabled",
    "loopTransition",
    "loop",
    "loopRepeatType",
    "loopRepeatDelay",
  ]),
  CA = () => {
    let e = A();
    return (
      H(
        () => () => {
          clearTimeout(e.current);
        },
        []
      ),
      async (t) =>
        new Promise((n) => {
          e.current = setTimeout(() => {
            n(!0);
          }, t * 1e3);
        })
    );
  };
function TA({
  loopEffectEnabled: e,
  loopRepeatDelay: t,
  loopTransition: n,
  loopRepeatType: r,
  loop: i,
}) {
  let o = hi(),
    s = nn(() => ({ values: nu() })),
    a = b.useRef(!1),
    l = CA(),
    c = async () => {
      if (!i) return;
      let d = n || void 0,
        m = a.current && r === "mirror",
        y = m ? Ne : i,
        g = m ? i : Ne;
      return (
        (a.current = !a.current),
        Promise.all(
          Yn.map((x) => {
            if (!(o && x !== "opacity"))
              return (
                s.values[x].set(g[x] ?? Ne[x]),
                new Promise((p) => {
                  let h = { ...d, onComplete: () => p() };
                  no(s.values[x], y[x] ?? g[x], h);
                })
              );
          })
        )
      );
    },
    u = async () => {
      e && (await c(), await l(t ?? 0), await u());
    },
    f = fe(() => {
      Yn.forEach((d) => {
        s.values[d].stop();
      }),
        Yn.forEach((d) => {
          s.values[d].set(Ne[d]);
        }),
        (a.current = !1);
    }, [s]);
  return b.useEffect(() => (e && i ? u() : f(), () => f()), [e]), s;
}
function EA(e, t, n, r, i) {
  let o = n / 100 - 1,
    s = i ? (t - r) * o : 0,
    a = -e * o;
  return s + a;
}
var RA = new Set([
  "speed",
  "adjustPosition",
  "offset",
  "parallaxTransformEnabled",
]);
function PA(e, t, n) {
  let {
      speed: r = 100,
      offset: i = 0,
      adjustPosition: o = !1,
      parallaxTransformEnabled: s,
    } = e,
    a = b.useRef(null),
    l = hi(),
    c = b.useCallback(
      (y) => (a.current === null || r === 100 ? 0 : EA(y, a.current, r, i, o)),
      [a, r, i, o]
    );
  b.useLayoutEffect(() => {
    Y.read(() => {
      var y, g;
      a.current =
        ((g = (y = t.current) == null ? void 0 : y.getBoundingClientRect()) ==
        null
          ? void 0
          : g.top) ?? 0;
    }),
      Y.update(() => {
        f.set(c(u.get())), o && d.set(n ?? "initial");
      });
  }, [t, a, o]);
  let { scrollY: u } = Ny(),
    f = xt(u, c),
    d = Vn(o && a.current === null ? "hidden" : n),
    m = Vn(0);
  return {
    values: { y: l || !s ? m : f },
    style: s ? { visibility: d } : void 0,
  };
}
function _A(e) {
  if (!(ke(e) || !Ae(e))) return e?.transition;
}
async function Cp(e, t, n, r, i, o) {
  let s = _A(e);
  return Promise.all(
    Yn.map(
      (a) =>
        new Promise((l) => {
          if (n && a !== "opacity") return l();
          let c = t.values[a];
          c.stop();
          let u = Ae(e) ? e?.[a] ?? Ne[a] : Ne[a];
          if ((Ce(u) && (u = u.get()), !rn(u))) return l();
          let f = nr.get(r.current);
          f && f.setBaseTarget(a, u);
          let d =
            ke(i) && !c?.hasAnimated && Bt.HandoffAppearAnimations
              ? { elapsed: Bt.HandoffAppearAnimations(i, a, c, Y) }
              : void 0;
          o
            ? c.set(u)
            : no(c, u, {
                ...s,
                velocity: 0,
                elapsed: 0,
                ...d,
                onComplete: () => l(),
              });
        })
    )
  );
}
var IA = new Set(["presenceInitial", "presenceAnimate", "presenceExit"]);
function FA(
  {
    initial: e,
    animate: t,
    exit: n,
    presenceInitial: r,
    presenceAnimate: i,
    presenceExit: o,
  },
  s,
  a,
  l,
  c
) {
  let u = r ?? e,
    f = i ?? t,
    d = o ?? n,
    m = A(!1),
    y = A(f),
    [g, x] = zf(),
    p = A(!1),
    h = nn(() => {
      let S = u ?? l;
      if (!Ae(S)) return { values: nu() };
      let k = {};
      for (let w in S) {
        let T = Ae(S) ? S[w] : void 0;
        rn(T) && (k[w] = T);
      }
      return { values: nu(k) };
    });
  ct(() => {
    if (m.current && f) return;
    let S = nr.get(s.current);
    if (S) {
      m.current = !0;
      for (let k in h.values) {
        if (!Gw(k)) continue;
        let w = l?.[k];
        S.setBaseTarget(k, rn(w) ? w : Ne[k]);
      }
    }
  }, [f]);
  let v = hi();
  return (
    ct(() => {
      if (!a) {
        x?.();
        return;
      }
      if (g !== p.current)
        (p.current = g),
          g
            ? u && f && Cp(f, h, v, s, c)
            : d
            ? Cp(d, h, v, s, c).then(() => x())
            : x();
      else {
        if (!!He(f, y.current) || !f) return;
        (y.current = f), Cp(f, h, v, s, c, !0);
      }
    }),
    h
  );
}
function LA(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; )
    (n += r.offsetTop), (r = r.offsetParent);
  return n;
}
var MA = 1;
function qw(e, t = 0, n) {
  var r;
  let i = [],
    o = [];
  for (let s = e.length; s >= 0; s--) {
    let { ref: a, offset: l } = e[s] ?? {};
    if (!a || !a.current) continue;
    let u = LA(a.current, document.documentElement) - MA - (l ?? 0) - t,
      f = ((r = a.current) == null ? void 0 : r.clientHeight) ?? 0,
      d = i[i.length - 1],
      m = Math.max(u + f, 0);
    i.push(u),
      o.unshift(
        Math.max(u, 0),
        d === void 0 ? m : Math.min(m, Math.max(d - 1, 0))
      ),
      n?.(s);
  }
  return o;
}
function OA(e, t = 0) {
  return e < t ? "up" : "down";
}
var DA = 4;
function AA(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: o = !0, enabled: s = !0 } = n;
  b.useEffect(() => {
    if (!r || !s) return;
    let a,
      l = 0,
      c,
      u;
    return to(({ y: f }) => {
      if ((!o && u === i) || f.current > f.scrollLength || f.current < 0)
        return;
      let d = OA(f.current, a);
      a = f.current;
      let m = d !== c;
      if (((c = d), m)) l = f.current;
      else {
        if (Math.abs(f.current - l) < DA) return;
        let g = d === r ? i : void 0;
        g !== u && t(g), (u = g);
      }
    });
  }, [r, o, i, s, t]);
}
var VA = new Set([
    "threshold",
    "animateOnce",
    "opacity",
    "targetOpacity",
    "x",
    "y",
    "scale",
    "transition",
    "rotate",
    "rotateX",
    "rotateY",
    "perspective",
    "enter",
    "exit",
    "animate",
    "styleAppearEffectEnabled",
    "targets",
    "scrollDirection",
  ]),
  BA = ["animate", "animate"],
  dS = { inputRange: [], outputRange: [] };
function $A(e, t, n) {
  let r = qw(e, t),
    i = [...BA],
    o = r[0];
  if (!rn(o)) return dS;
  if ((o > 1 && (r.unshift(0, o - 1), i.unshift("initial", "initial")), n)) {
    let s = r.length - 1,
      a = r[s];
    if (!rn(a)) return dS;
    r.push(a + 1), i.push("exit");
  }
  return { inputRange: r, outputRange: i };
}
function Tp(e) {
  return {
    x: e?.x ?? Ne.x,
    y: e?.y ?? Ne.y,
    scale: e?.scale ?? Ne.scale,
    opacity: e?.opacity ?? Ne.opacity,
    transformPerspective: e?.transformPerspective ?? Ne.transformPerspective,
    rotate: e?.rotate ?? Ne.rotate,
    rotateX: e?.rotateX ?? Ne.rotateX,
    rotateY: e?.rotateY ?? Ne.rotateY,
    skewX: e?.skewX ?? Ne.skewX,
    skewY: e?.skewY ?? Ne.skewY,
    transition: e?.transition ?? void 0,
  };
}
function zA({
  opacity: e,
  targetOpacity: t,
  perspective: n,
  enter: r,
  exit: i,
  animate: o,
  ...s
}) {
  return b.useMemo(
    () => ({
      initial: r ?? Tp({ ...s, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: o ?? Tp({ opacity: t }),
      exit: i ?? Tp(),
    }),
    [o, s, r, i, e, t, n]
  );
}
function NA(e, t) {
  let n = hi(),
    r = zA(e),
    i = e.styleAppearEffectEnabled,
    o = Kw(i ? r.initial : r.animate, i),
    s = b.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    a = b.useRef(),
    l = b.useCallback(async ({ transition: d, ...m }, y) => {
      let g = d ?? r.animate.transition ?? e.transition;
      await a.current,
        (a.current = Promise.all(
          Yn.map((x) => {
            y && o.values[x].set(r.initial[x] ?? Ne[x]);
            let p = m[x] ?? Ne[x],
              h = nr.get(t.current);
            return (
              h && typeof p != "object" && h.setBaseTarget(x, p),
              new Promise((v) => {
                if (n && x !== "opacity") rn(p) && o.values[x].set(p), v();
                else {
                  let S = {
                    restDelta: x === "scale" ? 0.001 : void 0,
                    ...g,
                    onComplete: () => v(),
                  };
                  no(o.values[x], p, S);
                }
              })
            );
          })
        ));
    }, []),
    c = e.animateOnce && s.current.lastAppearState === !0,
    u = !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !c;
  xD(
    t,
    (d) => {
      let { isPlaying: m, lastAppearState: y } = s.current;
      if (m) {
        s.current.scheduledAppearState = d;
        return;
      }
      (s.current.scheduledAppearState = void 0),
        (s.current.lastAppearState = d),
        y !== d && l(d ? r.animate : r.exit, d);
    },
    { enabled: u, animateOnce: !!e.animateOnce, threshold: { y: e.threshold } }
  );
  let f = e.targets && i && !e.scrollDirection;
  return (
    b.useEffect(() => {
      if (!f) return;
      let d = { initial: !0 },
        m = "initial";
      return to(({ y }) => {
        let { targets: g } = e;
        if (!g || !g[0] || (g[0].ref && !g[0].ref.current)) return;
        let { inputRange: x, outputRange: p } = $A(
          g,
          (e.threshold ?? 0) * y.containerLength,
          !!e.exit
        );
        if (x.length === 0 || x.length !== p.length) return;
        let h = hs(y.current, x, p);
        if ((e.animateOnce && d[h]) || ((d[h] = !0), m === h)) return;
        m = h;
        let v = Ue(r)[h];
        v && l(v);
      });
    }, [f]),
    AA(e.scrollDirection, (d) => l(d ?? r.animate), {
      enabled: i,
      repeat: !e.animateOnce,
    }),
    o
  );
}
var HA = new Set([
    "transformViewportThreshold",
    "styleTransformEffectEnabled",
    "transformTargets",
    "spring",
    "transformTrigger",
  ]),
  jA = (e, t) => {
    var n;
    let r = (n = e?.[0]) == null ? void 0 : n.target;
    return t ? { opacity: r?.opacity ?? 1 } : r;
  },
  Qw = () => ({
    opacity: [],
    x: [],
    y: [],
    scale: [],
    rotate: [],
    rotateX: [],
    rotateY: [],
    skewX: [],
    skewY: [],
    transformPerspective: [],
  });
function WA(e, t) {
  let n = b.useRef({});
  b.useEffect(() => {
    if (t !== void 0)
      for (let r of Oi(e)) {
        let i = e[r];
        i.attach((o, s) => {
          let a = n.current[r];
          if (
            (a && a.stop(),
            (n.current[r] = Pf({
              keyframes: [i.get(), o],
              velocity: i.getVelocity(),
              ...t,
              restDelta: 0.001,
              onUpdate: s,
            })),
            !Me.isProcessing)
          ) {
            let l = performance.now() - Me.timestamp;
            l < 40 && (n.current[r].time = l / 1e3);
          }
          return i.get();
        });
      }
  }, [JSON.stringify(t)]);
}
function UA(e, t) {
  let n = Qw();
  return {
    inputRange: qw(e, t, (i) => {
      var o, s, a;
      let l = (o = e[i - 1]) == null ? void 0 : o.target,
        c = (s = e[i]) == null ? void 0 : s.target;
      for (let u of Yn)
        (a = n[u]) == null || a.unshift(l?.[u] ?? 0, c?.[u] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function XA(e) {
  var t;
  let n = Qw();
  for (let { target: r } of e)
    for (let i of Yn) (t = n[i]) == null || t.push(r[i]);
  return n;
}
var hS = [0, 1];
function YA(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  o
) {
  let s = hi(),
    a = Kw(jA(n, s), t);
  return (
    b.useLayoutEffect(() => {
      if (!(!t || !n))
        if (e !== "onScrollTarget") {
          let l = XA(n);
          return to(
            ({ y: c }) => {
              for (let u of Yn)
                (s && u !== "opacity") ||
                  (hS.length === l[u].length &&
                    l[u][0] !== void 0 &&
                    a.values[u].set(hs(c.progress, hS, l[u])));
            },
            e === "onInView"
              ? {
                  target: o.current ?? void 0,
                  offset: ["start end", "end end"],
                }
              : void 0
          );
        } else
          return to(({ y: l }) => {
            if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
            let { inputRange: c, effectKeyOutputRange: u } = UA(
              n,
              i * l.containerLength
            );
            if (c.length !== 0)
              for (let f of Yn)
                (s && f !== "opacity") ||
                  (c.length === u[f].length &&
                    u[f][0] !== void 0 &&
                    a.values[f].set(hs(l.current, c, u[f])));
          });
    }, [s, e, o, i, t, a, n]),
    WA(a.values, r),
    a
  );
}
var Zw = {
    parallax: RA,
    styleAppear: VA,
    styleTransform: HA,
    loop: kA,
    presence: IA,
  },
  GA = Oi(Zw);
function pS(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function KA(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
  };
  for (let n in e) {
    let r = wA(n);
    if (r)
      for (let i of GA) {
        let o = Zw[i];
        if (o?.has(r)) {
          t[i][r] = Ue(e)[n];
          break;
        }
      }
    else t.forwardedProps[n] = Ue(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = pS(
      "parallaxTransformEnabled",
      "speed",
      t.parallax
    )),
    (t.styleAppear.styleAppearEffectEnabled = pS(
      "styleAppearEffectEnabled",
      "animateOnce",
      t.styleAppear
    )),
    t
  );
}
var Kr = (e) => e.reduce((t, n) => (t += n), 0),
  mS = (e) => e.reduce((t, n) => (t = t * n), 1),
  qA = "current";
function QA(e) {
  return Ae(e) && qA in e;
}
function ZA(e, t) {
  if (!e || !Ae(e)) return t;
  for (let n in e) {
    let r = e[n];
    !Ce(r) || !Gw(n) || (rn(r.get()) && t[n].push(r));
  }
}
function sa(e) {
  return ke(e) || Array.isArray(e);
}
var JA = (e) =>
  b.forwardRef((t, n) => {
    if (t.__withFX)
      return C(e, {
        ...t,
        animate: void 0,
        initial: void 0,
        exit: void 0,
        ref: n,
      });
    if (ie.current() === ie.canvas) {
      let de = sa(t.animate) ? t.animate : void 0,
        Q = sa(t.initial) ? t.initial : void 0;
      return C(e, { ...t, animate: de, initial: Q, exit: void 0, ref: n });
    }
    let r = b.useRef(null),
      i = n ?? r,
      {
        parallax: o = {},
        styleAppear: s = {},
        styleTransform: a = {},
        presence: l = {},
        loop: c = {},
        forwardedProps: u,
      } = KA(t),
      {
        __targetOpacity: f,
        __perspectiveFX: d,
        __smartComponentFX: m = !1,
      } = t,
      y = Vn(f ?? 1),
      { values: g } = FA(l, i, m, t.style, t[Ja]),
      { values: x, style: p } = PA(o, i),
      { values: h } = YA(a, i),
      { values: v } = NA(s, i),
      { values: S } = TA(c),
      k = b.useMemo(
        () => ({
          scale: [v.scale, S.scale, g.scale, h.scale],
          opacity: [v.opacity, S.opacity, g.opacity, y, h.opacity],
          x: [v.x, S.x, g.x, h.x],
          y: [v.y, S.y, x.y, g.y, h.y],
          rotate: [v.rotate, S.rotate, g.rotate, h.rotate],
          rotateX: [v.rotateX, S.rotateX, g.rotateX, h.rotateX],
          rotateY: [v.rotateY, S.rotateY, g.rotateY, h.rotateY],
          skewX: [v.skewX, S.skewX, g.skewX, h.skewX],
          skewY: [v.skewY, S.skewY, g.skewY, h.skewY],
          transformPerspective: [
            h.transformPerspective,
            v.transformPerspective,
          ],
        }),
        [y, h, x, v, S, g]
      );
    ZA(t.style, k);
    let w = xt(k.scale, mS),
      T = xt(k.opacity, mS),
      E = xt(k.x, Kr),
      F = xt(k.y, Kr),
      I = xt(k.rotate, Kr),
      z = xt(k.rotateX, Kr),
      $ = xt(k.rotateY, Kr),
      re = xt(k.skewX, Kr),
      J = xt(k.skewY, Kr),
      V = xt(k.transformPerspective, Kr),
      { drag: X, dragConstraints: Z } = u;
    IO(X && QA(Z) ? Z : void 0);
    let ee = {
      opacity: T,
      scale: w,
      x: E,
      y: F,
      rotate: I,
      rotateX: z,
      rotateY: $,
      skewX: re,
      skewY: J,
    };
    $t(d) && (ee.transformPerspective = V);
    let W = sa(t.animate) ? t.animate : void 0,
      te = sa(t.initial) ? t.initial : void 0,
      ne = sa(t.exit) ? t.exit : void 0,
      ye = m && !l.presenceInitial ? { initial: te, animate: W, exit: ne } : {};
    return C(e, {
      ...u,
      ...ye,
      __withFX: !0,
      style: { ...t.style, ...p, ...ee },
      values: g,
      ref: i,
    });
  });
var rN = JA;
function Vp(e, t) {
  No(e) ? e(t) : Jw(e) && (e.current = t);
}
function Jw(e) {
  return Ae(e) && "current" in e;
}
function vS(e, t) {
  return {
    get current() {
      return e.current;
    },
    set current(n) {
      (e.current = n), t(n);
    },
  };
}
function eV(...e) {
  return (t) => e.forEach((n) => Vp(n, t));
}
function im(e) {
  let t = nn(() => tV(e));
  return t.useSetup(e), t.cloneAsElement;
}
function tV(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = gS(t);
  let n = (s, a) => {
      if (!t.forwardedRef && t.forwardedRef === s) {
        t.ref = a;
        return;
      }
      let l = !1;
      t.childRef !== a && ((t.childRef = a), (l = !0)),
        t.forwardedRef !== s && ((t.forwardedRef = s), (l = !0)),
        l && (t.ref = gS(t));
    },
    r = !1;
  function i(s, a) {
    if (r)
      throw new ReferenceError(
        "useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle."
      );
    return (
      (r = !0),
      In.count(s) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      In.map(s, (l) => {
        if (jt(l)) {
          let c = "ref" in l ? l.ref : void 0;
          n(t.forwardedRef, c);
          let u = t.ref !== c ? { ...a, ref: t.ref } : a;
          return yn(l, u);
        }
        return l;
      })
    );
  }
  let o = function (a, l) {
    return C(Fe, { children: i(a, l) });
  };
  return (
    (o.cloneAsArray = i),
    {
      useSetup: (s) => {
        (r = !1), n(s, t.childRef);
      },
      cloneAsElement: o,
    }
  );
}
function gS(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (r) => {
    Vp(n, r), Vp(t, r);
  };
}
var ek = b.createContext({});
function cN() {
  return b.useContext(ek);
}
var uN = b.forwardRef(({ width: e, children: t, ...n }, r) => {
    let i = b.useMemo(() => ({ width: e }), [e]),
      o = im(r);
    return C(ek.Provider, { value: i, children: o(t, n) });
  }),
  nV = (e) =>
    b.forwardRef((t, n) => {
      let r = Ra(t);
      return C(e, {
        layoutId: r,
        ...t,
        layoutIdKey: void 0,
        duplicatedFrom: void 0,
        ref: n,
      });
    }),
  rV = class extends me {
    constructor() {
      super(...arguments), R(this, "state", { hasError: !1 });
    }
    static getDerivedStateFromError() {
      return (
        console.error(
          "Error in component (see previous error log). This component has been hidden."
        ),
        { hasError: !0 }
      );
    }
    render() {
      let { children: e } = this.props,
        { hasError: t } = this.state;
      return t ? null : e;
    }
  },
  iV = b.forwardRef(({ children: e, layoutId: t, ...n }, r) => {
    let i = nn(() => (t ? `${t}-container` : void 0));
    return C(Ut.div, {
      layoutId: i,
      ...n,
      ref: r,
      children: C(Uo.Provider, {
        value: !0,
        children: C(IL, {
          enabled: !1,
          children: C(Vy, {
            id: t ?? "",
            inherit: "id",
            children: C(rV, {
              children: b.Children.map(e, (o) =>
                b.isValidElement(o) ? b.cloneElement(o, { layoutId: t }) : o
              ),
            }),
          }),
        }),
      }),
    });
  }),
  vN = nV(iV),
  oV = b.createContext(void 0),
  sV = (() => {
    var e;
    if (!Di()) return new Set();
    let t =
      (e = document.querySelector("style[data-framer-css-ssr-minified]")) ==
      null
        ? void 0
        : e.getAttribute("data-framer-components");
    return t ? new Set(t.split(" ")) : new Set();
  })(),
  tk = "data-framer-css-ssr",
  aV = (e, t, n) =>
    b.forwardRef((r, i) => {
      let { sheet: o, cache: s } = b.useContext(oV) ?? {};
      if (!Di()) {
        let a = Array.isArray(t)
          ? t.join(`
`)
          : t;
        return se(Fe, {
          children: [
            C("style", {
              [tk]: !0,
              "data-framer-component": n,
              dangerouslySetInnerHTML: { __html: a },
            }),
            C(e, { ...r, ref: i }),
          ],
        });
      }
      return (
        b.useInsertionEffect(() => {
          if (n && sV.has(n)) return;
          (Array.isArray(t)
            ? t
            : t.split(`
`)
          ).forEach((l) => l && gw(l, o, s));
        }, []),
        C(e, { ...r, ref: i })
      );
    }),
  om = b.createContext({
    onRegisterCursors: () => () => {},
    registerCursors: () => {},
  }),
  ru = "framer-cursor-none",
  Bp = "framer-pointer-events-none",
  lV = b.memo(function ({ children: t }) {
    let n = nn(() => {
        let i = new Set(),
          o = {};
        return {
          onRegisterCursors: (s) => (s(o), i.add(s), () => i.delete(s)),
          registerCursors: (s) => {
            let a = {};
            for (let l in s) {
              let c = o[l] ?? s[l];
              c && (a[l] = c);
            }
            o = a;
            for (let l of i) l(o);
          },
        };
      }),
      r = hi();
    return se(om.Provider, { value: n, children: [t, !r && C(pV, {})] });
  }),
  cV = (() =>
    aV(lV, [
      `.${ru}, .${ru} * { cursor: none !important; }`,
      `.${Bp}, .${Bp} * { pointer-events: none !important; }`,
    ]))(),
  uV = (() => ({
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 12 + 1,
    pointerEvents: "none",
  }))();
function fV(e) {
  return !(!e || e.placement || e.alignment);
}
function Nc(e) {
  switch (e) {
    case "start":
      return "0%";
    case "center":
      return "-50%";
    case "end":
      return "-100%";
    default:
      Tt(e);
  }
}
function dV(e, t = "center") {
  switch (e) {
    case "top":
      return `${Nc(t)}, -100%`;
    case "right":
      return `0%, ${Nc(t)}`;
    case "bottom":
      return `${Nc(t)}, 0%`;
    case "left":
      return `-100%, ${Nc(t)}`;
    default:
      return "-50%, -50%";
  }
}
var yS = "data-framer-portal-id";
function bS(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let r = n.getAttribute("data-framer-cursor");
    if (r) return r;
    if (n.hasAttribute(yS)) {
      let i = n.getAttribute(yS);
      (n = n.parentElement), i && (n = document.getElementById(i) ?? n);
    } else n = n.parentElement;
  }
}
function hV(e) {
  for (let t in e) return !1;
  return !0;
}
var pV = b.memo(function () {
  let { onRegisterCursors: t } = D(om),
    n = Vn(0),
    r = Vn(0),
    i = Vn(0),
    o = b.useRef(null),
    s = b.useRef({ cursors: {}, cursorHash: void 0 }),
    a = fu(),
    l = !hV(s.current.cursors);
  b.useEffect(() => {
    let w = 0,
      T = 0;
    function E() {
      n.set(w), r.set(T), no(i, 1, { type: "tween", duration: 0.2 });
    }
    function F($) {
      $.pointerType !== "touch" &&
        ((w = $.clientX), (T = $.clientY), Y.update(E));
    }
    let I = () => {
      if (!l) return;
      let $ = bS(w, T);
      $ !== s.current.cursorHash &&
        ((s.current.cursorHash = $), Y.update(() => a()));
    };
    Y.read(I, !0);
    function z($) {
      if ($.target === o.current || !o.current) return;
      let re = new PointerEvent($.type, {
        bubbles: !0,
        cancelable: $.cancelable,
        pointerType: $.pointerType,
        pointerId: $.pointerId,
        composed: $.composed,
        isPrimary: $.isPrimary,
        buttons: $.buttons,
        button: $.button,
      });
      Y.update(() => {
        var J;
        (J = o.current) == null || J.dispatchEvent(re);
      });
    }
    return (
      Bt.addEventListener("pointermove", F),
      document.addEventListener("pointerdown", z),
      document.addEventListener("pointerup", z),
      () => {
        Bt.removeEventListener("pointermove", F),
          document.removeEventListener("pointerdown", z),
          document.removeEventListener("pointerup", z),
          _t(I);
      }
    );
  }, [i, n, r, l, a]),
    b.useEffect(() => {
      function w() {
        no(i, 0, { type: "tween", duration: 0.2 });
      }
      return (
        document.addEventListener("mouseleave", w),
        Bt.addEventListener("blur", w),
        () => {
          document.removeEventListener("mouseleave", w),
            Bt.removeEventListener("blur", w);
        }
      );
    }, [i]),
    b.useLayoutEffect(() => {
      function w(E) {
        (s.current.cursors = E),
          (s.current.cursorHash = bS(n.get(), r.get())),
          a();
      }
      let T = t(w);
      return () => {
        T(), document.body.classList.toggle(ru, !1);
      };
    }, [n, r, t, a]);
  let { cursors: c, cursorHash: u } = s.current,
    f = u ? c[u] : null,
    d = fV(f);
  b.useLayoutEffect(() => {
    document.body.classList.toggle(ru, d);
  }, [d]);
  let m = f?.component,
    y = f?.transition ?? { duration: 0 },
    g = qf(n, y),
    x = qf(r, y),
    p = xt(() => {
      var w;
      return g.get() + (((w = f?.offset) == null ? void 0 : w.x) ?? 0);
    }),
    h = xt(() => {
      var w;
      return x.get() + (((w = f?.offset) == null ? void 0 : w.y) ?? 0);
    }),
    v = f?.alignment,
    S = f?.placement,
    k = b.useCallback((w, T) => `translate(${dV(S, v)}) ${T}`, [v, S]);
  return !f || !m
    ? null
    : C(m, {
        transformTemplate: k,
        style: { ...uV, x: p, y: h, opacity: i },
        globalTapTarget: !0,
        variant: f?.variant,
        ref: o,
        className: Bp,
      });
});
function wN(e) {
  let { registerCursors: t } = D(om),
    n = nn(() => e);
  b.useLayoutEffect(() => {
    t(n);
  }, [n, t]);
}
var mV = b.createContext(void 0),
  sm = class {
    constructor(e) {
      (this.resolver = e), R(this, "status");
    }
    static is(e) {
      return e instanceof sm;
    }
    preload() {
      if (this.status) {
        let t = this.status;
        return t.type !== "pending" ? void 0 : t.promise;
      }
      let e = this.resolver().then(
        (t) => {
          this.status = { type: "fulfilled", value: t };
        },
        (t) => {
          this.status = { type: "rejected", error: t };
        }
      );
      return (this.status = { type: "pending", promise: e }), e;
    }
    read() {
      let e = this.status;
      if (!e) throw new Error("Need to call preload() before read()");
      switch (e.type) {
        case "pending":
          throw new Error("Need to wait for preload() to resolve");
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.error;
        default:
          Tt(e);
      }
    }
  };
function am(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
    ? e === t
      ? null
      : am(e.parentElement, t)
    : null;
}
var xS = "element",
  vV = "collection",
  gV = "collectionItemId",
  yV = "pathVariables",
  nk = "framer/page-link,";
function rk(e) {
  return ke(e) && e.startsWith(`data:${nk}`);
}
function lm(e) {
  if (rk(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(nk.length),
        r = t.searchParams,
        i = r.has(xS) ? r.get(xS) : void 0,
        o,
        s = r.get(vV),
        a = r.get(gV),
        l = r.get(yV);
      if (s && a && l) {
        let c = Object.fromEntries(new URLSearchParams(l).entries());
        o = { collection: s, collectionItemId: a, pathVariables: c };
      }
      return {
        target: n === "none" ? null : n,
        element: i === "none" ? void 0 : i,
        collectionItem: o,
      };
    } catch {
      return;
    }
}
function bV(e, t, n) {
  var r;
  let i = t.getAttribute("data-framer-page-link-target"),
    o,
    s;
  if (i) {
    o = t.getAttribute("data-framer-page-link-element") ?? void 0;
    let l = t.getAttribute("data-framer-page-link-path-variables");
    l && (s = Object.fromEntries(new URLSearchParams(l).entries()));
  } else {
    let l = t.getAttribute("href");
    if (!l) return !1;
    let c = lm(l);
    if (!c || !c.target) return !1;
    (i = c.target),
      (o = c.element ?? void 0),
      (s = (r = c.collectionItem) == null ? void 0 : r.pathVariables);
  }
  let a = o ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return e(i, o, Object.assign({}, n, s), a), !0;
}
var xV = 500,
  SV = 0.9,
  wV = 1.7,
  kV = 4,
  CV = 1 / 0,
  Mo = new WeakMap(),
  Hc = new Set(),
  Oo = new Map();
function TV() {
  var e;
  let t = Ie.connection || Ie.mozConnection || Ie.webkitConnection || {},
    n = Ie.deviceMemory && Ie.deviceMemory > wV,
    r,
    i,
    o;
  function s() {
    (r = t.effectiveType || ""),
      (i = t.saveData || r.includes("2g")),
      (o = r === "3g" || n ? kV : CV);
  }
  (e = t.addEventListener) == null || e.call(t, "change", s), s();
  let a = new IntersectionObserver(u, { threshold: SV }),
    l = 0;
  async function c(f, d) {
    if (i) return;
    let m = Oo.get(f);
    if (!m?.size || Hc.has(f)) return;
    ++l, Hc.add(f);
    let y = sw(f).catch(() => {});
    a.unobserve(d), Mo.delete(d);
    for (let g of m) a.unobserve(g), Mo.delete(g);
    m.clear(), Oo.delete(f), await y, --l;
  }
  function u(f) {
    var d;
    for (let m of f) {
      let y = m.target,
        g = Mo.get(y);
      if (!g || Hc.has(g)) {
        a.unobserve(y), Mo.delete(y);
        continue;
      }
      let x = Oo.get(g),
        p = ((d = Oo.get(g)) == null ? void 0 : d.size) ?? 0;
      if (m.isIntersecting) {
        if (l >= o) continue;
        x ? x.add(y) : Oo.set(g, new Set([y])),
          setTimeout(c.bind(void 0, g, y), xV);
      } else x && x.delete(y), p <= 1 && Oo.delete(g);
    }
  }
  return (f, d) => {
    if (!Hc.has(f))
      return (
        Mo.set(d, f),
        a.observe(d),
        () => {
          Mo.delete(d), a.unobserve(d);
        }
      );
  };
}
var EV = !Yp || typeof IntersectionObserver > "u" ? null : TV(),
  Ep = {},
  jc = new WeakMap();
function RV(e, t, n) {
  var r, i;
  let o =
    (i = (r = jc?.get(n ?? Ep)) == null ? void 0 : r.get(e.collectionId)) ==
    null
      ? void 0
      : i.get(e.collectionItemId);
  if (o) return o;
  let s = jc.get(n ?? Ep) ?? new Map();
  jc.set(n ?? Ep, s);
  let a = s.get(e.collectionId) ?? new Map();
  s.set(e.collectionId, a);
  let l = new sm(async () => {
    try {
      let c = t[e.collectionId];
      if (!c)
        throw new Error(
          `Key not found in collection utils for collection id: "${e.collectionId}`
        );
      let u = await c();
      if (!u) throw new Error("Collection does not contain utility functions");
      return await u.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    } catch (c) {
      console.warn(
        `Failed to resolve slug: ${
          c instanceof Error ? c.message : "Unknown error"
        }`
      );
      return;
    }
  });
  return a.set(e.collectionItemId, l), l;
}
var PV = "webPageId";
function SS(e) {
  return !!(e && typeof e == "object" && PV in e);
}
function _V(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function $p(e) {
  if (!rk(e)) return e;
  let t = lm(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: _V(i) };
}
var ik = /:([a-z]\w*)/gi,
  IV = be(void 0);
function ok() {
  var e;
  let t = D(IV),
    n = (e = lu()) == null ? void 0 : e.pathVariables;
  return t || n;
}
function sk(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let o = Object.assign({}, i, r);
    for (let [, s] of e.path.matchAll(ik))
      if (!s || e.pathVariables[s] !== o[s]) return !1;
  }
  return !0;
}
function cm(e) {
  return e === void 0
    ? !1
    : !!(e.startsWith("#") || e.startsWith("/") || e.startsWith("."));
}
function FV(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function um(e, t) {
  return e !== void 0 ? (e ? "_blank" : void 0) : t ? void 0 : "_blank";
}
function wS(e, t = void 0) {
  let n = cm(e),
    r = um(t, n);
  return {
    href: FV(e, n) ? e : `https://${e}`,
    target: r,
    rel: n ? void 0 : "noopener",
  };
}
function ak(e, t, n, r, i) {
  return async (o) => {
    var s, a;
    if (o.metaKey) return;
    let l = am(o.target);
    if (!l || l.getAttribute("target") === "_blank") return;
    o.preventDefault();
    let c = (s = e.getRoute) == null ? void 0 : s.call(e, t);
    c && YS(c?.page) && (await c.page.preload()),
      (a = e.navigate) == null || a.call(e, t, n, r, i);
  };
}
function LV(e, t, n, r) {
  let i = [];
  function o(a) {
    if (!a || !n) return;
    let l = {};
    for (let c in a) {
      let u = a[c];
      he(u, "unresolvedSlug should be defined");
      let f = RV(u, n, r),
        d = f.preload();
      if (d) i.push(d);
      else {
        let m = f.read();
        m && (l[c] = m);
      }
    }
    return l;
  }
  let s = { path: o(e), hash: o(t) };
  if (i.length) throw Promise.allSettled(i);
  return s;
}
function MV(e, t, n, r, i, o) {
  let s = cm(e);
  if (!n.routes || !n.getRoute || !r || !s) return wS(e, t);
  try {
    let [a, l] = e.split("#", 2);
    he(a !== void 0, "A href must have a defined pathname.");
    let [c] = a.split("?", 2);
    he(c !== void 0, "A href must have a defined pathname.");
    let { routeId: u, pathVariables: f } = ow(n.routes, c),
      d = n.getRoute(u);
    if (d) {
      let m = Object.assign({}, i, f),
        y = Up(d, {
          currentRoutePath: r.path,
          currentPathVariables: r.pathVariables,
          hash: l || void 0,
          pathVariables: m,
          preserveQueryParams: n.preserveQueryParams,
        }),
        g = um(t, !0);
      return { href: y, target: g, onClick: ak(n, u, l || void 0, m, o) };
    }
  } catch {}
  return wS(e, t);
}
function OV(e, t, n) {
  var r;
  if (ke(e)) {
    let o = cm(e);
    if (!t.routes || !t.getRoute || !n || !o) return;
    let [s] = e.split("#", 2);
    if (s === void 0) return;
    let [a] = s.split("?", 2);
    if (a === void 0) return;
    let { routeId: l } = ow(t.routes, a);
    return t.getRoute(l);
  }
  let { webPageId: i } = e;
  return (r = t.getRoute) == null ? void 0 : r.call(t, i);
}
var PN = je(
  ({ children: e, href: t, openInNewTab: n, smoothScroll: r, ...i }, o) => {
    let s = ka(),
      a = lu(),
      l = ok(),
      { activeLocale: c } = qF(),
      u = A(null),
      f = oe(() => {
        let y,
          g = (p) => {
            var h;
            if (p === null) {
              y?.(), (y = void 0);
              return;
            }
            let v = SS(t) ? t : $p(t);
            if (!v) return;
            let S = OV(v, s, a);
            S && (y = (h = EV) == null ? void 0 : h(S, p));
          },
          x = jt(e) && "ref" in e;
        return x && Jw(e.ref)
          ? vS(e.ref, g)
          : x && No(e.ref)
          ? eV(e.ref, g)
          : vS(u, g);
      }, [t, s, a, e]),
      d = im(o),
      m = oe(() => {
        var y;
        if (!t) return {};
        let g = SS(t) ? t : $p(t);
        if (!g) return {};
        if (ke(g)) return MV(g, n, s, a, l, r);
        let {
            webPageId: x,
            hash: p,
            pathVariables: h,
            hashVariables: v,
            unresolvedHashSlugs: S,
            unresolvedPathSlugs: k,
          } = g,
          w = LV(k, S, s.collectionUtils, c),
          T = { ...l, ...h, ...w?.path },
          E = { ...l, ...v, ...w?.hash },
          F = um(n, !0),
          I = (y = s.getRoute) == null ? void 0 : y.call(s, x),
          z = Up(I, {
            currentRoutePath: a?.path,
            currentPathVariables: a?.pathVariables,
            hash: p,
            pathVariables: T,
            hashVariables: E,
            preserveQueryParams: s.preserveQueryParams,
          }),
          $ = z.split("#", 2)[1];
        return {
          href: z,
          target: F,
          onClick: ak(s, x, $, T, r),
          "data-framer-page-link-current": (a && sk(a, g, l)) || void 0,
        };
      }, [t, s, c, l, n, a, r]);
    return d(e, { ...i, ...m, ref: f });
  }
);
var DV = b.createContext(void 0);
function MN({
  RootComponent: e,
  isWebsite: t,
  routeId: n,
  framerSiteId: r,
  pathVariables: i,
  routes: o,
  collectionUtils: s,
  notFoundPage: a,
  isReducedMotion: l = !1,
  includeDataObserver: c = !1,
  localeId: u,
  locales: f,
  preserveQueryParams: d,
}) {
  if (
    (b.useEffect(() => {
      t || uw.start();
    }, []),
    t)
  )
    return C(Oy, {
      reducedMotion: l ? "user" : "never",
      children: C(cV, {
        children: C(DV.Provider, {
          value: r,
          children: C(JF, {
            initialRoute: n,
            initialPathVariables: i,
            initialLocaleId: u,
            routes: o,
            collectionUtils: s,
            notFoundPage: a,
            locales: f,
            defaultPageStyle: { minHeight: "100vh", width: "auto" },
            preserveQueryParams: d,
          }),
        }),
      }),
    });
  {
    let m = c ? xA : b.Fragment;
    return C(m, {
      children: C(HF, {
        routes: o,
        children: C(vA, {
          children: b.isValidElement(e) ? e : b.createElement(e, { key: n }),
        }),
      }),
    });
  }
}
function AV(e, t, n) {
  let r = In.map(e, (i) => (jt(i) ? yn(i, t) : i));
  return n ? r : C(Fe, { children: r });
}
var lk = b.createContext(void 0),
  kS = "ssr-variant";
function CS(e, t, n, r, i, o, s, a) {
  let l = b.Children.toArray(t),
    c = l[0];
  if (l.length !== 1 || !b.isValidElement(c))
    return (
      console.warn(
        "PropertyOverrides: expected exactly one React element for a child",
        t
      ),
      s(t, n)
    );
  let u = [],
    f = [];
  for (let [x] of Object.entries(r)) {
    if (x === i) continue;
    let p = e[x];
    if (!p || !BV(c.props, p)) {
      f.push(x);
      continue;
    }
    let h = TS([x], o);
    h.length && u.push({ variants: h, propOverrides: p });
  }
  if (u.length === 0) return s(c, n);
  let d = [i, ...f],
    m = TS(d, o);
  m.length && u.unshift({ variants: m });
  let y = `.${kS} { display: contents }`,
    g = [];
  for (let { variants: x, propOverrides: p } of u) {
    if (a && !x.includes(a)) continue;
    let h = x.join("+"),
      v = C(
        lk.Provider,
        { value: new Set(x), children: s(c, p ? { ...n, ...p } : n) },
        h
      ),
      S = VV(x, o, r);
    S.length
      ? (he(u.length > 1, "Must branch out when there are hiddenClassNames"),
        (v = C("div", { className: `${kS} ${S.join(" ")}`, children: v }, h)))
      : he(u.length === 1, "Cannot branch out when hiddenClassNames is empty"),
      g.push(v);
  }
  return (
    he(
      !a || g.length === 1,
      "Must render exactly one branch when activeVariantId is given"
    ),
    se(Fe, {
      children: [!o && !Di() && C("style", { [tk]: !0, children: y }), g],
    })
  );
}
function VV(e, t, n) {
  let r = [];
  for (let [i, o] of Object.entries(n)) {
    let s = t && !t.has(i);
    if (e.includes(i) || s) continue;
    let a = o.split("-")[2];
    r.push(`hidden-${a}`);
  }
  return r;
}
function TS(e, t) {
  return t ? e.filter((n) => t.has(n)) : e;
}
function BV(e, t) {
  for (let n of Object.keys(t)) if (!He(e[n], t[n], !0)) return !0;
  return !1;
}
function $V(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
var zV = () => () => {},
  NV = () => !0,
  HV = () => !1,
  VN = b.forwardRef(function (
    { breakpoint: t, overrides: n, children: r, ...i },
    o
  ) {
    let s = im(o),
      a = b.useContext(lk),
      l = b.useSyncExternalStore(zV, HV, NV),
      c = nn(() => (l ? (Di() ? 1 : 2) : 0)),
      u = b.useContext(mV);
    if (!u)
      return (
        console.warn("PropertyOverrides is missing GeneratedComponentContext"),
        s(r, i)
      );
    let { primaryVariantId: f, variantClassNames: d } = u;
    switch (c) {
      case 0:
        return s(r, $V(t, i, n));
      case 1:
        return CS(n, r, i, d, f, a, s, t);
      case 2:
        return CS(n, r, i, d, f, a, AV, void 0);
      default:
        Tt(c);
    }
  });
var jV = An(qI(), 1);
function WV(e) {
  return {
    trace(...t) {
      var n;
      return (n = et.getLogger(e)) == null ? void 0 : n.trace(...t);
    },
    debug(...t) {
      var n;
      return (n = et.getLogger(e)) == null ? void 0 : n.debug(...t);
    },
    info(...t) {
      var n;
      return (n = et.getLogger(e)) == null ? void 0 : n.info(...t);
    },
    warn(...t) {
      var n;
      return (n = et.getLogger(e)) == null ? void 0 : n.warn(...t);
    },
    error(...t) {
      var n;
      return (n = et.getLogger(e)) == null ? void 0 : n.error(...t);
    },
  };
}
function UV(e) {
  return qp(e) && e.every(Ae);
}
function ck(e) {
  return Ae(e) && No(e.read) && No(e.preload);
}
function XV(e) {
  return UV(e) || ck(e);
}
function YV(e) {
  return Ae(e) && Ae(e.schema);
}
function fm(e) {
  return Ae(e) && Ae(e.collectionByLocaleId);
}
async function ES(e, t) {
  return ck(e) ? (await e.preload(t), e.read(t)) : e;
}
var GV = class {
    constructor(e, t) {
      (this.collection = e),
        (this.locale = t),
        R(this, "schema"),
        R(this, "indexes", []);
      let n = ww(e);
      he(n, "Collection does not have properties");
      let r = { id: { type: "string", isNullable: !1 } },
        i = Object.entries(n);
      for (let [o, s] of i) s && (r[o] = { type: s.type, isNullable: !0 });
      this.schema = r;
    }
    getDatabaseItem(e, t) {
      let n = {};
      for (let r in this.schema) {
        let i = e[r];
        if (Ho(i)) continue;
        let o = this.schema[r];
        $t(o) || (n[r] = { type: o.type, value: i });
      }
      return { pointer: t, data: n };
    }
    async resolveRichText(e) {
      if (sm.is(e)) {
        let t = e.preload();
        return t && (await t), e.read();
      }
      return e;
    }
    async scanItems() {
      return (await ES(this.collection, this.locale)).map((t, n) => {
        let r = String(n);
        return this.getDatabaseItem(t, r);
      });
    }
    async resolveItems(e) {
      let t = await ES(this.collection, this.locale);
      return e.map((n) => {
        let r = Number(n),
          i = t[r];
        return he(i, "Can't find collection item"), this.getDatabaseItem(i, n);
      });
    }
    compareItems(e, t) {
      return Number(e.pointer) - Number(t.pointer);
    }
  },
  vn = {
    equal(e, t, n) {
      return e?.type !== t?.type ? !1 : aa(e, t, n) === 0;
    },
    lessThan(e, t, n) {
      return e?.type !== t?.type ? !1 : aa(e, t, n) < 0;
    },
    lessThanOrEqual(e, t, n) {
      return e?.type !== t?.type ? !1 : aa(e, t, n) <= 0;
    },
    greaterThan(e, t, n) {
      return e?.type !== t?.type ? !1 : aa(e, t, n) > 0;
    },
    greaterThanOrEqual(e, t, n) {
      return e?.type !== t?.type ? !1 : aa(e, t, n) >= 0;
    },
    stringify(e) {
      if (e === null) return "null";
      switch (e.type) {
        case "boolean":
        case "number":
          return String(e.value);
        case "string":
          return `'${e.value}'`;
        case "enum":
          return `'${e.value}' /* Enum */`;
        case "color":
          return `'${e.value}' /* Color */`;
        case "date":
          return `'${e.value}' /* Date */`;
        case "richtext":
          return "RichText";
        case "responsiveimage":
          return "ResponsiveImage";
        case "file":
          return "File";
        case "link":
          return ke(e.value) ? `'${e.value}' /* Link */` : "Link";
        default:
          Tt(e);
      }
    },
  };
function aa(e, t, n) {
  if (ze(e) || ze(t)) return he(e === t), 0;
  switch (e.type) {
    case "boolean":
      return (
        he(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "color":
      return (
        he(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "date": {
      he(e.type === t.type);
      let r = new Date(e.value),
        i = new Date(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "enum":
      return (
        he(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "file":
      return (
        he(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "responsiveimage": {
      he(e.type === t.type);
      let r = JSON.stringify(e.value),
        i = JSON.stringify(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "link": {
      he(e.type === t.type);
      let r = JSON.stringify(e.value),
        i = JSON.stringify(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "number":
      return (
        he(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "richtext": {
      he(e.type === t.type);
      let r = e.value,
        i = t.value;
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "string": {
      he(e.type === t.type);
      let r = e.value,
        i = t.value;
      return (
        n.type === 0 &&
          ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
        r < i ? -1 : r > i ? 1 : 0
      );
    }
    default:
      Tt(e);
  }
}
var zp = "index",
  Ct = class {
    static from(e, t) {
      return Un(e, t, void 0);
    }
  },
  at = class extends Ct {
    constructor(e, t) {
      super(),
        (this.schema = e),
        (this.name = t),
        R(this, "definition"),
        t === zp
          ? (this.definition = { type: "number", isNullable: !1 })
          : (this.definition = e[t] ?? null);
    }
    stringify() {
      return this.name;
    }
    equals(e) {
      return (
        e instanceof at &&
        He(this.definition, e.definition) &&
        He(e.name, this.name)
      );
    }
    evaluate(e) {
      let t = this.name;
      if ($t(e) || t === zp) throw new Error(`Can't evaluate identifier: ${t}`);
      return e.data[t] ?? null;
    }
    canEvaluate() {
      return !1;
    }
  },
  _e = class extends Ct {
    constructor(e, t) {
      super(), (this.definition = e), (this.value = t);
    }
    stringify() {
      return vn.stringify(this.value);
    }
    static fromNull() {
      return new _e(null, null);
    }
    static fromBoolean(e) {
      return new _e(
        { type: "boolean", isNullable: ze(e) },
        ze(e) ? null : { type: "boolean", value: e }
      );
    }
    static fromDate(e) {
      return new _e(
        { type: "date", isNullable: ze(e) },
        ze(e) ? null : { type: "date", value: e.toISOString() }
      );
    }
    static fromEnum(e) {
      return new _e(
        { type: "enum", isNullable: ze(e) },
        ze(e) ? null : { type: "enum", value: e }
      );
    }
    static fromNumber(e) {
      return new _e(
        { type: "number", isNullable: ze(e) },
        ze(e) ? null : { type: "number", value: e }
      );
    }
    static fromString(e) {
      return new _e(
        { type: "string", isNullable: ze(e) },
        ze(e) ? null : { type: "string", value: e }
      );
    }
    equals(e) {
      return (
        e instanceof _e &&
        He(this.definition, e.definition) &&
        He(e.value, this.value)
      );
    }
    evaluate() {
      return this.value;
    }
    canEvaluate() {
      return !0;
    }
  },
  _a = class extends Ct {
    constructor(e) {
      super(),
        (this.argumentExpressions = e),
        R(this, "collation", { type: 0 });
    }
    getArgumentExpression(e) {
      let t = this.argumentExpressions[e];
      if ($t(t)) throw new Error("Missing argument in function call");
      return t;
    }
    equals(e) {
      return (
        e instanceof _a &&
        He(this.constructor, e.constructor) &&
        He(this.argumentExpressions, e.argumentExpressions)
      );
    }
    canEvaluate() {
      return this.argumentExpressions.every((e) => e.canEvaluate());
    }
  },
  pu = class extends _a {
    constructor() {
      super(...arguments),
        R(this, "definition", pu.getDefinition()),
        R(this, "sourceExpression", this.getArgumentExpression(0)),
        R(this, "targetExpression", this.getArgumentExpression(1));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `CONTAINS(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (ze(e) || e.type !== "string" || ze(t) || t.type !== "string")
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.includes(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: "boolean", value: this.getValue(t, n) };
    }
  },
  mu = class extends _a {
    constructor() {
      super(...arguments),
        R(this, "definition", mu.getDefinition()),
        R(this, "sourceExpression", this.getArgumentExpression(0)),
        R(this, "targetExpression", this.getArgumentExpression(1));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `STARTS_WITH(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (ze(e) || e.type !== "string" || ze(t) || t.type !== "string")
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.startsWith(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: "boolean", value: this.getValue(t, n) };
    }
  },
  vu = class extends _a {
    constructor() {
      super(...arguments),
        R(this, "definition", vu.getDefinition()),
        R(this, "sourceExpression", this.getArgumentExpression(0)),
        R(this, "targetExpression", this.getArgumentExpression(1));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `ENDS_WITH(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (ze(e) || e.type !== "string" || ze(t) || t.type !== "string")
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.endsWith(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: "boolean", value: this.getValue(t, n) };
    }
  },
  iu = class extends Ct {
    constructor(e, t, n) {
      super(),
        (this.valueExpression = e),
        (this.conditions = t),
        (this.elseExpression = n),
        R(this, "definition"),
        R(this, "collation", { type: 0 });
      let r = [];
      for (let { thenExpression: i } of t) r.push(i.definition);
      n && r.push(n.definition), (this.definition = iu.getDefinition(r));
    }
    static getDefinition(e) {
      let t = null,
        n = !1;
      for (let r of e) {
        if ((t ?? (t = r), t && r && t.type !== r.type))
          throw new Error("Incompatible types in CASE expression");
        n || (n = r?.isNullable ?? !0);
      }
      return t ? { type: t.type, isNullable: n } : null;
    }
    stringify() {
      let e = "CASE";
      this.valueExpression && (e += ` ${this.valueExpression.stringify()}`);
      for (let { whenExpression: t, thenExpression: n } of this.conditions)
        e += ` WHEN ${t.stringify()} THEN ${n.stringify()}`;
      return (
        this.elseExpression &&
          (e += ` ELSE ${this.elseExpression.stringify()}`),
        (e += " END"),
        e
      );
    }
    equals(e) {
      return (
        e instanceof iu &&
        He(this.valueExpression, e.valueExpression) &&
        He(this.conditions, e.conditions) &&
        He(this.elseExpression, e.elseExpression)
      );
    }
    evaluate(e) {
      var t, n;
      let r =
        ((t = this.valueExpression) == null ? void 0 : t.evaluate(e)) ?? null;
      for (let { whenExpression: i, thenExpression: o } of this.conditions) {
        let s = i.evaluate(e);
        if (this.valueExpression ? vn.equal(s, r, this.collation) : Ai(s))
          return o.evaluate(e);
      }
      return (
        ((n = this.elseExpression) == null ? void 0 : n.evaluate(e)) ?? null
      );
    }
    canEvaluate() {
      let e = [];
      this.valueExpression && e.push(this.valueExpression);
      for (let t of this.conditions)
        e.push(t.whenExpression), e.push(t.thenExpression);
      return (
        this.elseExpression && e.push(this.elseExpression),
        e.every((t) => t.canEvaluate())
      );
    }
  },
  KV = class {
    constructor(e, t) {
      (this.whenExpression = e), (this.thenExpression = t);
    }
  },
  uk = class extends Ct {
    constructor(e) {
      super(), (this.valueExpression = e);
    }
    equals(e) {
      return (
        e instanceof uk &&
        He(this.constructor, e.constructor) &&
        He(this.valueExpression, e.valueExpression)
      );
    }
    canEvaluate() {
      return this.valueExpression.canEvaluate();
    }
  },
  va = class extends uk {
    constructor() {
      super(...arguments), R(this, "definition", va.getDefinition());
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `NOT ${this.valueExpression.stringify()}`;
    }
    evaluate(e) {
      let t = this.valueExpression.evaluate(e);
      return { type: "boolean", value: !Ai(t) };
    }
  },
  ga = class extends Ct {
    constructor(e) {
      super(),
        (this.operandExpressions = e),
        R(this, "definition", ga.getDefinition());
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return this.operandExpressions.map((e) => e.stringify()).join(" AND ");
    }
    equals(e) {
      return (
        e instanceof ga &&
        He(this.constructor, e.constructor) &&
        He(this.operandExpressions, e.operandExpressions)
      );
    }
    canEvaluate() {
      return this.operandExpressions.every((e) => e.canEvaluate());
    }
  },
  Fi = class extends ga {
    constructor() {
      super(...arguments), R(this, "operator", "AND");
    }
    evaluate(e) {
      return {
        type: "boolean",
        value: this.operandExpressions.every((n) => {
          let r = n.evaluate(e);
          return Ai(r);
        }),
      };
    }
  },
  ua = class extends ga {
    constructor() {
      super(...arguments), R(this, "operator", "OR");
    }
    evaluate(e) {
      return {
        type: "boolean",
        value: this.operandExpressions.some((n) => {
          let r = n.evaluate(e);
          return Ai(r);
        }),
      };
    }
  },
  Gn = class extends Ct {
    constructor(e, t) {
      super(),
        (this.leftExpression = e),
        (this.rightExpression = t),
        R(this, "definition", Gn.getDefinition()),
        R(this, "collation", { type: 0 });
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `${this.leftExpression.stringify()} ${
        this.operator
      } ${this.rightExpression.stringify()}`;
    }
    equals(e) {
      return (
        e instanceof Gn &&
        He(this.constructor, e.constructor) &&
        He(this.leftExpression, e.leftExpression) &&
        He(this.rightExpression, e.rightExpression)
      );
    }
    canEvaluate() {
      return (
        this.leftExpression.canEvaluate() && this.rightExpression.canEvaluate()
      );
    }
  },
  jo = class extends Gn {
    constructor() {
      super(...arguments), R(this, "operator", "=");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: vn.equal(t, n, this.collation) };
    }
  },
  Wo = class extends Gn {
    constructor() {
      super(...arguments), R(this, "operator", "!=");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: !vn.equal(t, n, this.collation) };
    }
  },
  ya = class extends Gn {
    constructor() {
      super(...arguments), R(this, "operator", "<");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: vn.lessThan(t, n, this.collation) };
    }
  },
  ba = class extends Gn {
    constructor() {
      super(...arguments), R(this, "operator", "<=");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return {
        type: "boolean",
        value: vn.lessThanOrEqual(t, n, this.collation),
      };
    }
  },
  xa = class extends Gn {
    constructor() {
      super(...arguments), R(this, "operator", ">");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: vn.greaterThan(t, n, this.collation) };
    }
  },
  Sa = class extends Gn {
    constructor() {
      super(...arguments), R(this, "operator", ">=");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return {
        type: "boolean",
        value: vn.greaterThanOrEqual(t, n, this.collation),
      };
    }
  },
  Ia = class extends Ct {
    constructor(e) {
      super(), (this.valueExpression = e);
    }
    stringify() {
      return `CAST(${this.valueExpression.stringify()} AS ${this.dataType})`;
    }
    equals(e) {
      return (
        e instanceof Ia &&
        He(this.constructor, e.constructor) &&
        He(this.valueExpression, e.valueExpression)
      );
    }
    canEvaluate() {
      return this.valueExpression.canEvaluate();
    }
  },
  gu = class extends Ia {
    constructor() {
      super(...arguments),
        R(this, "dataType", "BOOLEAN"),
        R(this, "definition", gu.getDefinition());
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    evaluate(e) {
      let t = this.valueExpression.evaluate(e);
      return { type: "boolean", value: Ai(t) };
    }
  };
function Ai(e) {
  switch (e?.type) {
    case "boolean":
    case "number":
    case "string":
      return !!e.value;
  }
  return !1;
}
var dm = class extends Ia {
  constructor() {
    super(...arguments),
      R(this, "dataType", "DATE"),
      R(this, "definition", dm.getDefinition());
  }
  static getDefinition() {
    return { type: "date", isNullable: !0 };
  }
  evaluate(e) {
    let t = this.valueExpression.evaluate(e),
      n = fk(t);
    return ze(n) ? null : { type: "date", value: n.toISOString() };
  }
};
function fk(e) {
  switch (e?.type) {
    case "date":
    case "number":
    case "string": {
      let t = new Date(e.value);
      return xw(t) ? t : null;
    }
  }
  return null;
}
var hm = class extends Ia {
  constructor() {
    super(...arguments),
      R(this, "dataType", "NUMBER"),
      R(this, "definition", hm.getDefinition());
  }
  static getDefinition() {
    return { type: "number", isNullable: !0 };
  }
  evaluate(e) {
    let t = this.valueExpression.evaluate(e),
      n = dk(t);
    return ze(n) ? null : { type: "number", value: n };
  }
};
function dk(e) {
  switch (e?.type) {
    case "number":
    case "string": {
      let t = Number(e.value);
      return Number.isFinite(t) ? t : null;
    }
  }
  return null;
}
var pm = class extends Ia {
  constructor() {
    super(...arguments),
      R(this, "dataType", "STRING"),
      R(this, "definition", pm.getDefinition());
  }
  static getDefinition() {
    return { type: "string", isNullable: !0 };
  }
  evaluate(e) {
    let t = this.valueExpression.evaluate(e),
      n = hk(t);
    return ze(n) ? null : { type: "string", value: n };
  }
};
function hk(e) {
  switch (e?.type) {
    case "string":
    case "number":
      return String(e.value);
  }
  return null;
}
function Un(e, t, n) {
  let r = qV(e, t, n),
    i = r instanceof _e;
  if (r.canEvaluate() && !i) {
    let o = r.evaluate();
    return new _e(r.definition, o);
  }
  return r;
}
function qV(e, t, n) {
  switch (e.type) {
    case "Identifier":
      return QV(e, t);
    case "LiteralValue":
      return ZV(e, n);
    case "FunctionCall":
      return e3(e, t);
    case "Case":
      return t3(e, t, n);
    case "UnaryOperation":
      return n3(e, t);
    case "BinaryOperation":
      return r3(e, t);
    case "TypeCast":
      return d3(e, t);
    default:
      throw new Error(`Unsupported expression: ${JSON.stringify(e)}`);
  }
}
function QV(e, t) {
  return new at(t, e.name);
}
function ZV(e, t) {
  var n;
  let r = JV(e.value);
  switch (t?.type) {
    case "boolean": {
      let i = Ai(r.value);
      return _e.fromBoolean(i);
    }
    case "date": {
      let i = fk(r.value);
      return _e.fromDate(i);
    }
    case "enum":
      return ((n = r.value) == null ? void 0 : n.type) === "string"
        ? _e.fromEnum(r.value.value)
        : r;
    case "number": {
      let i = dk(r.value);
      return _e.fromNumber(i);
    }
    case "string": {
      let i = hk(r.value);
      return _e.fromString(i);
    }
  }
  return r;
}
function JV(e) {
  return bw(e)
    ? _e.fromBoolean(e)
    : xw(e)
    ? _e.fromDate(e)
    : rn(e)
    ? _e.fromNumber(e)
    : ke(e)
    ? _e.fromString(e)
    : _e.fromNull();
}
function e3(e, t) {
  let n = e.arguments.map((r) => Un(r, t, void 0));
  switch (e.functionName) {
    case "CONTAINS":
      return new pu(n);
    case "STARTS_WITH":
      return new mu(n);
    case "ENDS_WITH":
      return new vu(n);
    default:
      throw new Error(`Unsupported function name: ${e.functionName}`);
  }
}
function t3(e, t, n) {
  let r = e.value && Un(e.value, t, void 0),
    i = e.value && wa(e.value, t),
    o = e.conditions.map((a) => {
      let l = Un(a.when, t, i),
        c = Un(a.then, t, n);
      return new KV(l, c);
    }),
    s = e.else && Un(e.else, t, n);
  return new iu(r, o, s);
}
function n3(e, t) {
  let n = Un(e.value, t, void 0);
  switch (e.operator) {
    case "not":
      return Np(n);
    default:
      throw new Error(`Unsupported unary operator: ${e.operator}`);
  }
}
function Np(e) {
  var t;
  if (e instanceof va) {
    let n = e.valueExpression;
    return ((t = n.definition) == null ? void 0 : t.type) === "boolean"
      ? n
      : new gu(n);
  }
  if (e instanceof jo) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Wo(n, r);
  }
  if (e instanceof Wo) {
    let { leftExpression: n, rightExpression: r } = e;
    return new jo(n, r);
  }
  if (e instanceof ya) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Sa(n, r);
  }
  if (e instanceof ba) {
    let { leftExpression: n, rightExpression: r } = e;
    return new xa(n, r);
  }
  if (e instanceof xa) {
    let { leftExpression: n, rightExpression: r } = e;
    return new ba(n, r);
  }
  if (e instanceof Sa) {
    let { leftExpression: n, rightExpression: r } = e;
    return new ya(n, r);
  }
  if (e instanceof Fi) {
    let { operandExpressions: n } = e,
      r = n.map(Np);
    return new ua(r);
  }
  if (e instanceof Fi) {
    let { operandExpressions: n } = e,
      r = n.map(Np);
    return new Fi(r);
  }
  return new va(e);
}
function r3(e, t) {
  let n =
      e.operator !== "and" && e.operator !== "or"
        ? wa(e.left, t) || wa(e.right, t)
        : void 0,
    r = Un(e.left, t, n),
    i = Un(e.right, t, n);
  switch (e.operator) {
    case "and":
      return i3(r, i);
    case "or":
      return o3(r, i);
    case "==":
      return s3(r, i);
    case "!=":
      return a3(r, i);
    case "<":
      return l3(r, i);
    case "<=":
      return c3(r, i);
    case ">":
      return u3(r, i);
    case ">=":
      return f3(r, i);
    default:
      throw new Error(`Unsupported binary operator: ${e.operator}`);
  }
}
function i3(e, t) {
  let n = [];
  return (
    e instanceof Fi ? n.push(...e.operandExpressions) : n.push(e),
    t instanceof Fi ? n.push(...t.operandExpressions) : n.push(t),
    new Fi(n)
  );
}
function o3(e, t) {
  let n = [];
  return (
    e instanceof ua ? n.push(...e.operandExpressions) : n.push(e),
    t instanceof ua ? n.push(...t.operandExpressions) : n.push(t),
    new ua(n)
  );
}
function s3(e, t) {
  let n = e instanceof at;
  return t instanceof at && !n ? new jo(t, e) : new jo(e, t);
}
function a3(e, t) {
  let n = e instanceof at;
  return t instanceof at && !n ? new Wo(t, e) : new Wo(e, t);
}
function l3(e, t) {
  let n = e instanceof at;
  return t instanceof at && !n ? new xa(t, e) : new ya(e, t);
}
function c3(e, t) {
  let n = e instanceof at;
  return t instanceof at && !n ? new Sa(t, e) : new ba(e, t);
}
function u3(e, t) {
  let n = e instanceof at;
  return t instanceof at && !n ? new ya(t, e) : new xa(e, t);
}
function f3(e, t) {
  let n = e instanceof at;
  return t instanceof at && !n ? new ba(t, e) : new Sa(e, t);
}
function d3(e, t) {
  let n = Un(e.value, t, void 0);
  switch (e.dataType) {
    case "BOOLEAN":
      return h3(n);
    case "DATE":
      return p3(n);
    case "NUMBER":
      return m3(n);
    case "STRING":
      return v3(n);
    default:
      throw new Error(`Unsupported data type: ${e.dataType}`);
  }
}
function h3(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "boolean"
    ? e
    : new gu(e);
}
function p3(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "date"
    ? e
    : new dm(e);
}
function m3(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "number"
    ? e
    : new hm(e);
}
function v3(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "string"
    ? e
    : new pm(e);
}
function wa(e, t) {
  switch (e.type) {
    case "Identifier":
      return g3(e, t);
    case "LiteralValue":
      return;
    case "FunctionCall":
      return y3(e);
    case "Case":
      return b3(e, t);
    case "UnaryOperation":
      return x3(e);
    case "BinaryOperation":
      return S3(e);
    case "TypeCast":
      return w3(e);
    default:
      throw new Error(`Unsupported expression: ${JSON.stringify(e)}`);
  }
}
function g3(e, t) {
  return t[e.name];
}
function y3(e) {
  switch (e.functionName) {
    case "CONTAINS":
      return pu.getDefinition();
    case "STARTS_WITH":
      return mu.getDefinition();
    case "ENDS_WITH":
      return vu.getDefinition();
    default:
      throw new Error(`Unsupported function name: ${e.functionName}`);
  }
}
function b3(e, t) {
  let n = [];
  for (let r of e.conditions) {
    let i = wa(r.then, t);
    $t(i) || n.push(i);
  }
  if (e.else) {
    let r = wa(e.else, t);
    $t(r) || n.push(r);
  }
  return iu.getDefinition(n) ?? void 0;
}
function x3(e) {
  switch (e.operator) {
    case "not":
      return va.getDefinition();
    default:
      throw new Error(`Unsupported unary operator: ${e.operator}`);
  }
}
function S3(e) {
  switch (e.operator) {
    case "and":
    case "or":
      return ga.getDefinition();
    case "==":
    case "!=":
    case "<":
    case "<=":
    case ">":
    case ">=":
      return Gn.getDefinition();
    default:
      throw new Error(`Unsupported binary operator: ${e.operator}`);
  }
}
function w3(e) {
  switch (e.dataType) {
    case "BOOLEAN":
      return gu.getDefinition();
    case "DATE":
      return dm.getDefinition();
    case "NUMBER":
      return hm.getDefinition();
    case "STRING":
      return pm.getDefinition();
    default:
      throw new Error(`Unsupported data type: ${e.dataType}`);
  }
}
function Jr(e, t) {
  return `(self: ${e}ms${t ? `, total: ${t}ms` : ""})`;
}
function Kn(e) {
  return `(items: ${e})`;
}
var ei = class {
    constructor() {
      R(this, "executionTime", 0), R(this, "itemCount", 0);
    }
    async execute() {
      let e = performance.now(),
        t = await this._execute();
      return (
        (this.executionTime = performance.now() - e),
        (this.itemCount = t.length),
        t
      );
    }
  },
  pk = class extends ei {
    constructor(e) {
      super(), (this.collection = e);
    }
    inspect() {
      return {
        label: `ScanCollectionPlan ${Jr(this.executionTime)} ${Kn(
          this.itemCount
        )}`,
      };
    }
    async _execute() {
      return this.collection.scanItems();
    }
  },
  vr = class extends ei {
    constructor(e, t) {
      super(), (this.index = e), (this.query = t);
    }
    inspect() {
      let e = [],
        t = (n) => {
          switch (n.type) {
            case "All":
              return n.type;
            case "Equals":
            case "NotEquals":
            case "LessThan":
            case "GreaterThan":
            case "Contains":
            case "StartsWith":
            case "EndsWith":
              return `${n.type} ${vn.stringify(n.value)}`;
            default:
              Tt(n);
          }
        };
      for (let n = 0; n < this.index.fields.length; n++) {
        let r = this.index.fields[n],
          i = this.query[n];
        !r ||
          r.type !== "Identifier" ||
          !i ||
          i.type === "All" ||
          e.push(`${r.name} ${t(i)}`);
      }
      return {
        label: `LookupIndexPlan(${e.join(", ")}) ${Jr(this.executionTime)} ${Kn(
          this.itemCount
        )}`,
      };
    }
    async _execute() {
      return this.index.lookupItems(this.query);
    }
  },
  k3 = class extends ei {
    constructor(e) {
      super(), (this.childPlans = e);
    }
    inspect() {
      let e = Math.max(...this.childPlans.map((t) => t.executionTime ?? 0));
      return {
        label: `UnionPlan ${Jr(
          this.executionTime - e,
          this.executionTime
        )} ${Kn(this.itemCount)}`,
        nodes: this.childPlans.map((t) => t.inspect()),
      };
    }
    async _execute() {
      let e = await Promise.all(
          this.childPlans.map(async (n) => {
            let r = await n.execute();
            return new ou(r);
          })
        ),
        t;
      for (let n of e) t ? (t = t.union(n)) : (t = n);
      return t?.items() ?? [];
    }
  },
  C3 = class extends ei {
    constructor(e) {
      super(), (this.childPlans = e);
    }
    inspect() {
      let e = Math.max(...this.childPlans.map((t) => t.executionTime ?? 0));
      return {
        label: `IntersectionPlan ${Jr(
          this.executionTime - e,
          this.executionTime
        )} ${Kn(this.itemCount)} ${Kn(this.itemCount)}`,
        nodes: this.childPlans.map((t) => t.inspect()),
      };
    }
    async _execute() {
      let e = await Promise.all(
          this.childPlans.map(async (n) => {
            let r = await n.execute();
            return new ou(r);
          })
        ),
        t;
      for (let n of e) t ? (t = t.intersection(n)) : (t = n);
      return t?.items() ?? [];
    }
  },
  T3 = class extends ei {
    constructor(e, t, n, r) {
      super(),
        (this.childPlan = e),
        (this.collection = t),
        (this.richTextResolver = n),
        (this.select = r);
    }
    inspect() {
      return {
        label: `ResolveItemsPlan ${Jr(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${Kn(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      let e = await this.childPlan.execute(),
        t = e.map((n) => n.pointer);
      for (let n of e)
        for (let r of this.select) {
          if (r.type !== "Identifier") continue;
          let i = n.data[r.name];
          i?.type === "richtext" && this.richTextResolver.resolve(i.value);
        }
      return this.collection.resolveItems(t);
    }
  },
  E3 = class extends ei {
    constructor(e, t) {
      super(), (this.childPlan = e), (this.filterExpression = t);
    }
    inspect() {
      return {
        label: `FilterItemsPlan(${this.filterExpression.stringify()}) ${Jr(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${Kn(this.itemCount)} ${Kn(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      return (await this.childPlan.execute()).filter((t) => {
        let n = this.filterExpression.evaluate(t);
        return Ai(n);
      });
    }
  },
  R3 = class extends ei {
    constructor(e, t, n) {
      super(),
        (this.childPlan = e),
        (this.orderExpressions = t),
        (this.collection = n);
    }
    inspect() {
      return {
        label: `SortItemsPlan(${this.orderExpressions
          .map(
            (t) => `${t.expression.stringify()} ${t.direction.toUpperCase()}`
          )
          .join(", ")}) ${Jr(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${Kn(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      return (await this.childPlan.execute()).sort((t, n) => {
        for (let { expression: r, direction: i, collation: o } of this
          .orderExpressions) {
          let s = i === "asc";
          if (r instanceof at && r.name === zp) {
            let c = this.collection.compareItems(t, n);
            return s ? c : -c;
          }
          let a = r.evaluate(t),
            l = r.evaluate(n);
          if (!vn.equal(a, l, o)) {
            if (vn.lessThan(a, l, o) || Ho(a)) return s ? -1 : 1;
            if (vn.greaterThan(a, l, o) || Ho(l)) return s ? 1 : -1;
            throw new Error("Invalid comparison result.");
          }
        }
        return this.collection.compareItems(t, n);
      });
    }
  },
  P3 = class {
    constructor(e, t, n) {
      (this.expression = e), (this.direction = t), (this.collation = n);
    }
  },
  _3 = class extends ei {
    constructor(e, t, n) {
      super(),
        (this.childPlan = e),
        (this.offsetExpression = t),
        (this.limitExpression = n);
    }
    inspect() {
      var e, t;
      return {
        label: `SliceItemsPlan(LIMIT ${
          ((e = this.limitExpression) == null ? void 0 : e.stringify()) ??
          "Infinity"
        }, OFFSET ${
          ((t = this.offsetExpression) == null ? void 0 : t.stringify()) ?? "0"
        }) ${Jr(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${Kn(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    getOffset() {
      var e;
      let t = (e = this.offsetExpression) == null ? void 0 : e.evaluate();
      if (!(Ho(t) || t.type !== "number")) return t.value;
    }
    getLimit() {
      var e;
      let t = (e = this.limitExpression) == null ? void 0 : e.evaluate();
      if (!(Ho(t) || t.type !== "number")) return t.value;
    }
    async _execute() {
      let e = await this.childPlan.execute(),
        t = this.getOffset() ?? 0,
        n = this.getLimit() ?? 1 / 0;
      return e.slice(t, t + n);
    }
  },
  ou = class extends Map {
    constructor(e = []) {
      super();
      for (let t of e) this.set(t.pointer, t);
    }
    union(e) {
      let t = new ou();
      for (let [n, r] of this) t.set(n, r);
      for (let [n, r] of e) t.set(n, r);
      return t;
    }
    intersection(e) {
      let t = new ou();
      for (let [n, r] of this) e.has(n) && t.set(n, r);
      return t;
    }
    items() {
      return [...this.values()];
    }
  },
  I3 = class {
    constructor(e) {
      (this.collection = e), R(this, "cache", new Map());
    }
    resolve(e) {
      let t = this.cache.get(e);
      if (t) return t;
      let n = this.collection.resolveRichText(e);
      return this.cache.set(e, n), n;
    }
  };
function F3(e, t) {
  var n;
  if (fm(e)) {
    let r = ww(e),
      i = (n = r?.[t.name]) == null ? void 0 : n.title;
    if (i) return `"${t.name}" /* ${i} */`;
  }
  return `"${t.name}"`;
}
function L3(e) {
  return typeof e.value == "string" ? `'${e.value}'` : e.value;
}
function M3(e, t) {
  return `${t.functionName}(${t.arguments.map((n) => tn(e, n)).join(", ")})`;
}
function O3(e, t) {
  let n = "CASE";
  t.value && (n += ` ${tn(e, t.value)}`);
  for (let r of t.conditions)
    n += ` WHEN ${tn(e, r.when)} THEN ${tn(e, r.then)}`;
  return t.else && (n += ` ELSE ${t.else}`), (n += " END"), n;
}
function D3(e, t) {
  let n = tn(e, t.value);
  return `${t.operator.toUpperCase()} ${n}`;
}
function A3(e, t) {
  let n = tn(e, t.left),
    r = tn(e, t.right),
    i = t.operator.toUpperCase();
  return `${n} ${i} ${r}`;
}
function V3(e, t) {
  return `CAST(${tn(e, t.value)} as ${t.dataType})`;
}
function tn(e, t) {
  switch (t.type) {
    case "Identifier":
      return F3(e, t);
    case "LiteralValue":
      return L3(t);
    case "FunctionCall":
      return M3(e, t);
    case "Case":
      return O3(e, t);
    case "UnaryOperation":
      return D3(e, t);
    case "BinaryOperation":
      return A3(e, t);
    case "TypeCast":
      return V3(e, t);
    default:
      Tt(t);
  }
}
function B3(e) {
  let t = "";
  return (
    e.split(/\s+/u).forEach((r) => {
      r !== "" &&
        (["SELECT", "FROM", "WHERE", "ORDER", "LIMIT", "OFFSET"].includes(r)
          ? (t += `
${r}`)
          : ["AND", "OR"].includes(r)
          ? (t += `
	${r}`)
          : (t += ` ${r}`));
    }),
    t.trim()
  );
}
function $3(e) {
  let t = "";
  return (
    (t += `SELECT ${e.select
      .map((n) => {
        let r = tn(e.from.data, n);
        return n.alias ? `${r} AS ${n.alias}` : r;
      })
      .join(", ")}`),
    fm(e.from.data)
      ? (t += ` FROM ${e.from.data.displayName}`)
      : (t += ` FROM ${e.from.data.displayName}`),
    e.where && (t += ` WHERE ${tn(e.from.data, e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy
        .map((n) => `${tn(e.from.data, n)} ${n.direction ?? "asc"}`)
        .join(", ")}`),
    e.limit && (t += ` LIMIT ${tn(e.from.data, e.limit)}`),
    e.offset && (t += ` OFFSET ${tn(e.from.data, e.offset)}`),
    B3(t)
  );
}
var z3 = WV("query-engine");
function N3({ data: e }, t) {
  if (XV(e)) return new GV(e, t);
  if (YV(e)) return e;
  if (fm(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  Tt(e, "Unsupported collection type");
}
var BN = class {
  async query(e, t) {
    let n = N3(e.from, t),
      r = new I3(n),
      i = this.createQueryPlan(n, r, e),
      o = await this.executeQueryPlan(n, r, e, i);
    return (
      z3.debug(`Query:
${$3(e)}

${(0, jV.default)(i.inspect())}`),
      o
    );
  }
  createQueryPlan(e, t, n) {
    var r;
    let i = new pk(e);
    if (n.where) {
      let l = Ct.from(n.where, e.schema);
      i = Hp(e, l);
    }
    let o =
      (r = n.orderBy) == null
        ? void 0
        : r.map(
            (l) =>
              new P3(Ct.from(l, e.schema), l.direction ?? "asc", { type: 0 })
          );
    i = new R3(i, o ?? [], e);
    let s;
    n.offset && (s = Ct.from(n.offset, e.schema));
    let a;
    return (
      n.limit && (a = Ct.from(n.limit, e.schema)),
      (s || a) && (i = new _3(i, s, a)),
      n.select.length > 0 && (i = new T3(i, e, t, n.select)),
      i
    );
  }
  async executeQueryPlan(e, t, n, r) {
    let i = await r.execute();
    return Promise.all(
      i.map(async (o) => {
        let s = {};
        for (let a of n.select) {
          let l = Ct.from(a, e.schema),
            c = H3(a),
            u = l.evaluate(o);
          s[c] = await j3(t, u);
        }
        return s;
      })
    );
  }
};
function H3(e) {
  if (e.alias) return e.alias;
  if (e.type === "Identifier") return e.name;
  throw new Error("Can't serialize expression");
}
async function j3(e, t) {
  return Ho(t) ? null : t.type === "richtext" ? e.resolve(t.value) : t.value;
}
function Hp(e, t) {
  if (t instanceof Fi) {
    let n = t.operandExpressions.map((r) => Hp(e, r));
    return new C3(n);
  }
  if (t instanceof ua) {
    let n = t.operandExpressions.map((r) => Hp(e, r));
    return new k3(n);
  }
  return W3(e, t) ?? X3(e, t);
}
function W3(e, t) {
  var n, r;
  if (t instanceof Gn) return Rp(e, t);
  if (t instanceof _a) return U3(e, t);
  if (
    t instanceof at &&
    ((n = t.definition) == null ? void 0 : n.type) === "boolean"
  ) {
    let i = _e.fromBoolean(!0),
      o = new jo(t, i);
    return Rp(e, o);
  }
  if (
    t instanceof va &&
    t.valueExpression instanceof at &&
    ((r = t.valueExpression.definition) == null ? void 0 : r.type) === "boolean"
  ) {
    let i = _e.fromBoolean(!0),
      o = new Wo(t.valueExpression, i);
    return Rp(e, o);
  }
}
function Rp(e, t) {
  let n = t.leftExpression,
    r = t.rightExpression;
  if (r instanceof _e)
    for (let i of e.indexes) {
      let o = i.fields[0];
      if ($t(o)) continue;
      let s = Ct.from(o, e.schema);
      if (!n.equals(s)) continue;
      let a = new Array(i.fields.length - 1).fill({ type: "All" });
      if (t instanceof jo && i.supportedLookupTypes.includes("Equals"))
        return new vr(i, [{ type: "Equals", value: r.evaluate() }, ...a]);
      if (t instanceof Wo && i.supportedLookupTypes.includes("NotEquals"))
        return new vr(i, [{ type: "NotEquals", value: r.evaluate() }, ...a]);
      if (t instanceof ya && i.supportedLookupTypes.includes("LessThan"))
        return new vr(i, [
          { type: "LessThan", value: r.evaluate(), inclusive: !1 },
          ...a,
        ]);
      if (t instanceof ba && i.supportedLookupTypes.includes("LessThan"))
        return new vr(i, [
          { type: "LessThan", value: r.evaluate(), inclusive: !0 },
          ...a,
        ]);
      if (t instanceof xa && i.supportedLookupTypes.includes("GreaterThan"))
        return new vr(i, [
          { type: "GreaterThan", value: r.evaluate(), inclusive: !1 },
          ...a,
        ]);
      if (t instanceof Sa && i.supportedLookupTypes.includes("GreaterThan"))
        return new vr(i, [
          { type: "GreaterThan", value: r.evaluate(), inclusive: !0 },
          ...a,
        ]);
    }
}
function U3(e, t) {
  if (t.argumentExpressions.length !== 2) return;
  let n = t.argumentExpressions[0],
    r = t.argumentExpressions[1];
  if (!$t(n) && !$t(r) && r instanceof _e)
    for (let i of e.indexes) {
      let o = i.fields[0];
      if ($t(o)) continue;
      let s = Ct.from(o, e.schema);
      if (!n.equals(s)) continue;
      let a = new Array(i.fields.length - 1).fill({ type: "All" });
      if (t instanceof pu && i.supportedLookupTypes.includes("Contains"))
        return new vr(i, [{ type: "Contains", value: r.evaluate() }, ...a]);
      if (t instanceof mu && i.supportedLookupTypes.includes("StartsWith"))
        return new vr(i, [{ type: "StartsWith", value: r.evaluate() }, ...a]);
      if (t instanceof vu && i.supportedLookupTypes.includes("EndsWith"))
        return new vr(i, [{ type: "EndsWith", value: r.evaluate() }, ...a]);
    }
}
function X3(e, t) {
  let n = new pk(e);
  return new E3(n, t);
}
var Y3 = class {
    constructor() {
      R(this, "entries", new Map());
    }
    set(e, t, n, r) {
      let i = this.entries.get(e);
      switch (t) {
        case "transformTemplate": {
          he(
            typeof n == "string",
            `transformTemplate must be a string, received: ${n}`
          ),
            i
              ? (i.transformTemplate = n)
              : this.entries.set(e, { transformTemplate: n });
          break;
        }
        case "initial":
        case "animate": {
          he(
            typeof n == "object",
            `${t} must be a valid object, received: ${n}`
          ),
            i
              ? ((i[t] = n), i.variantHash || (i.variantHash = r))
              : this.entries.set(e, { [t]: n, variantHash: r });
          break;
        }
        default:
          break;
      }
    }
    clear() {
      this.entries.clear();
    }
    toObject() {
      return Object.fromEntries(this.entries);
    }
  },
  $N = new Y3();
var zN = "__Appear_Animation_Transform__";
var NN = "data-framer-appear-id",
  HN = "data-framer-appear-animation";
function Pp(e, t) {
  e.forEach((n) => clearTimeout(n)),
    e.clear(),
    t.forEach((n) => n && n("Callback cancelled by variant change")),
    t.clear();
}
function RS() {
  return new Set();
}
function WN(e) {
  let t = nn(RS),
    n = nn(RS);
  return (
    VD(() => () => Pp(n, t)),
    b.useEffect(() => () => Pp(n, t), [t, n]),
    b.useEffect(() => {
      Pp(n, t);
    }, [e, t, n]),
    b.useRef({
      activeVariantCallback:
        (r) =>
        (...i) =>
          new Promise((o, s) => {
            t.add(s), r(...i).then(o);
          }).catch(() => {}),
      delay: async (r, i) => {
        await new Promise((o) => n.add(globalThis.setTimeout(() => o(!0), i))),
          r();
      },
    }).current
  );
}
function G3(e, t, n) {
  return b.useCallback(
    (r) => {
      var i, o, s;
      return n
        ? e
          ? t
            ? Object.assign(
                {},
                (i = n[e]) == null ? void 0 : i[r],
                (o = n[t]) == null ? void 0 : o[r]
              )
            : ((s = n[e]) == null ? void 0 : s[r]) || {}
          : {}
        : {};
    },
    [e, t, n]
  );
}
function K3(e) {
  for (let [t, n] of Object.entries(e)) if (Bt.matchMedia(n).matches) return t;
}
function q3(e) {
  var t;
  for (let { hash: n, mediaQuery: r } of e) {
    if (!r) continue;
    if (Bt.matchMedia(r).matches) return n;
  }
  return (t = e[0]) == null ? void 0 : t.hash;
}
function YN(e, t, n = !0) {
  let r = D(Uw),
    i = A(Di() ? K3(t) ?? e : e),
    o = A(n && r ? e : i.current),
    s = fu(),
    a = qy(),
    l = fe(
      (c) => {
        (c !== i.current || c !== o.current) &&
          a(() => {
            (i.current = o.current = c),
              zi(() => {
                s();
              });
          });
      },
      [a, s]
    );
  return (
    Pw(() => {
      !n || r !== !0 || l(i.current);
    }, []),
    H(() => {
      let c = [];
      for (let [u, f] of Object.entries(t)) {
        let d = Bt.matchMedia(f),
          m = (y) => {
            y.matches && l(u);
          };
        Q3(d, m), c.push([d, m]);
      }
      return () => c.forEach(([u, f]) => Z3(u, f));
    }, [t, l]),
    [i.current, o.current]
  );
}
function Q3(e, t) {
  e.addEventListener ? e.addEventListener("change", t) : e.addListener(t);
}
function Z3(e, t) {
  e.removeEventListener
    ? e.removeEventListener("change", t)
    : e.removeListener(t);
}
function GN(e) {
  var t, n;
  let r = q3(e);
  if (r)
    for (let i of document.querySelectorAll(".hidden-" + r))
      (t = i.parentNode) == null || t.removeChild(i);
  for (let i of document.querySelectorAll(".ssr-variant:empty"))
    (n = i.parentNode) == null || n.removeChild(i);
}
function mk() {
  return ie.current() === ie.canvas;
}
function J3(e, t) {
  return `${e}-${t}`;
}
function e5(e, t) {
  let r = e.indexOf(t) + 1;
  r >= e.length && (r = 0);
  let i = e[r];
  return he(i !== void 0, "nextVariant should be defined"), i;
}
function t5(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function PS(e, t, n) {
  let { hover: r, pressed: i } = e || {};
  if (i && n) return "pressed";
  if (r && t) return "hover";
}
function n5(e, t) {
  let n = t[e];
  return n || `framer-v-${e}`;
}
function _S(e, t, n) {
  return e && n.has(e) ? e : t;
}
var r5 = Symbol("cycle");
function i8({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: o = {},
  variantClassNames: s = {},
}) {
  let a = fu(),
    l = nn(() => new Set(i)),
    c = b.useRef({
      isHovered: !1,
      isPressed: !1,
      hasPressedVariants: !0,
      baseVariant: _S(e, t, l),
      lastVariant: e,
      gestureVariant: void 0,
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    u = b.useCallback(
      (S) => {
        let {
            isHovered: k,
            isPressed: w,
            enabledGestures: T,
            defaultVariant: E,
          } = c.current,
          F = _S(S, E, l),
          I = PS(T?.[F], k, w),
          z = I ? J3(F, I) : void 0;
        return [F, z];
      },
      [l]
    ),
    f = b.useCallback(
      ({ isHovered: S, isPressed: k }) => {
        S !== void 0 && (c.current.isHovered = S),
          k !== void 0 && (c.current.isPressed = k);
        let {
            baseVariant: w,
            gestureVariant: T,
            defaultVariant: E,
          } = c.current,
          [F, I] = u(w);
        (F !== w || I !== T) &&
          ((c.current.baseVariant = F || E),
          (c.current.gestureVariant = I),
          a());
      },
      [u, a]
    ),
    d = b.useCallback(
      (S) => {
        let {
            defaultVariant: k,
            cycleOrder: w,
            baseVariant: T,
            gestureVariant: E,
          } = c.current,
          F = S === r5 ? e5(w || [], T || k) : S,
          [I, z] = u(F);
        (I !== T || z !== E) &&
          ((c.current.baseVariant = I || k),
          (c.current.gestureVariant = z),
          a());
      },
      [u, a]
    );
  if (e !== c.current.lastVariant) {
    let [S, k] = u(e);
    (c.current.lastVariant = S),
      (S !== c.current.baseVariant || k !== c.current.gestureVariant) &&
        ((c.current.baseVariant = S), (c.current.gestureVariant = k));
  }
  let {
      baseVariant: m,
      gestureVariant: y,
      defaultVariant: g,
      enabledGestures: x,
      isHovered: p,
      isPressed: h,
    } = c.current,
    v = G3(c.current.baseVariant, c.current.gestureVariant, o);
  return b.useMemo(() => {
    let S = [];
    m !== g && S.push(m), y && S.push(y);
    let k = x?.[m],
      w = {
        onMouseEnter: () => f({ isHovered: !0 }),
        onMouseLeave: () => f({ isHovered: !1 }),
      };
    return (
      k?.pressed &&
        Object.assign(w, {
          onTapStart: () => f({ isPressed: !0 }),
          onTapCancel: () => f({ isPressed: !1 }),
          onTap: () => f({ isPressed: !1 }),
        }),
      {
        variants: S,
        baseVariant: m,
        gestureVariant: y,
        transition: t5(c.current.transitions, m),
        setVariant: d,
        setGestureState: f,
        addVariantProps: v,
        gestureHandlers: w,
        classNames: tu(n5(m, s), PS(k, p, h)),
      }
    );
  }, [m, y, p, h, v, d, g, x, f, s]);
}
var i5 = b.createContext(void 0),
  o5 = () => b.useContext(i5);
var s5 = {
    Arial: {
      Regular: { selector: "Arial", weight: void 0 },
      Black: { selector: "Arial-Black", weight: void 0 },
      Narrow: { selector: "Arial Narrow", weight: void 0 },
      "Rounded Bold": { selector: "Arial Rounded MT Bold", weight: void 0 },
    },
    Avenir: {
      Book: { selector: "Avenir", weight: void 0 },
      Light: { selector: "Avenir-Light", weight: void 0 },
      Medium: { selector: "Avenir-Medium", weight: void 0 },
      Heavy: { selector: "Avenir-Heavy", weight: void 0 },
      Black: { selector: "Avenir-Black", weight: void 0 },
    },
    "Avenir Next": {
      Regular: { selector: "Avenir Next", weight: void 0 },
      "Ultra Light": { selector: "AvenirNext-UltraLight", weight: void 0 },
      Medium: { selector: "AvenirNext-Medium", weight: void 0 },
      "Demi Bold": { selector: "AvenirNext-DemiBold", weight: void 0 },
      Heavy: { selector: "AvenirNext-Heavy", weight: void 0 },
    },
    "Avenir Next Condensed": {
      Regular: { selector: "Avenir Next Condensed", weight: void 0 },
      "Ultra Light": {
        selector: "AvenirNextCondensed-UltraLight",
        weight: void 0,
      },
      Medium: { selector: "AvenirNextCondensed-Medium", weight: void 0 },
      "Demi Bold": { selector: "AvenirNextCondensed-DemiBold", weight: void 0 },
      Heavy: { selector: "AvenirNextCondensed-Heavy", weight: void 0 },
    },
    Baskerville: {
      Regular: { selector: "Baskerville", weight: void 0 },
      "Semi Bold": { selector: "Baskerville-SemiBold", weight: void 0 },
    },
    "Bodoni 72": {
      Book: { selector: "Bodoni 72", weight: void 0 },
      Oldstyle: { selector: "Bodoni 72 Oldstyle", weight: void 0 },
      Smallcaps: { selector: "Bodoni 72 Smallcaps", weight: void 0 },
    },
    Courier: { Regular: { selector: "Courier", weight: void 0 } },
    "Courier New": { Regular: { selector: "Courier New", weight: void 0 } },
    Futura: {
      Medium: { selector: "Futura", weight: void 0 },
      Condensed: { selector: "Futura-CondensedMedium", weight: void 0 },
      "Condensed ExtraBold": {
        selector: "Futura-CondensedExtraBold",
        weight: void 0,
      },
    },
    Georgia: { Regular: { selector: "Georgia", weight: void 0 } },
    "Gill Sans": {
      Regular: { selector: "Gill Sans", weight: void 0 },
      Light: { selector: "GillSans-Light", weight: void 0 },
      SemiBold: { selector: "GillSans-SemiBold", weight: void 0 },
      UltraBold: { selector: "GillSans-UltraBold", weight: void 0 },
    },
    Helvetica: {
      Regular: { selector: "Helvetica", weight: void 0 },
      Light: { selector: "Helvetica-Light", weight: void 0 },
      Bold: { selector: "Helvetica-Bold", weight: void 0 },
      Oblique: { selector: "Helvetica-Oblique", weight: void 0 },
      "Light Oblique": { selector: "Helvetica-LightOblique", weight: void 0 },
      "Bold Oblique": { selector: "Helvetica-BoldOblique", weight: void 0 },
    },
    "Helvetica Neue": {
      Regular: { selector: "Helvetica Neue", weight: void 0 },
      UltraLight: { selector: "HelveticaNeue-UltraLight", weight: void 0 },
      Thin: { selector: "HelveticaNeue-Thin", weight: void 0 },
      Light: { selector: "HelveticaNeue-Light", weight: void 0 },
      Medium: { selector: "HelveticaNeue-Medium", weight: void 0 },
      Bold: { selector: "HelveticaNeue-Bold", weight: void 0 },
      Italic: { selector: "HelveticaNeue-Italic", weight: void 0 },
      "UltraLight Italic": {
        selector: "HelveticaNeue-UltraLightItalic",
        weight: void 0,
      },
      "Thin Italic": { selector: "HelveticaNeue-ThinItalic", weight: void 0 },
      "Light Italic": { selector: "HelveticaNeue-LightItalic", weight: void 0 },
      "Medium Italic": {
        selector: "HelveticaNeue-MediumItalic",
        weight: void 0,
      },
      "Bold Italic": { selector: "HelveticaNeue-BoldItalic", weight: void 0 },
      "Condensed Bold": {
        selector: "HelveticaNeue-CondensedBold",
        weight: void 0,
      },
      "Condensed Black": {
        selector: "HelveticaNeue-CondensedBlack",
        weight: void 0,
      },
    },
    "Hoefler Text": { Regular: { selector: "Hoefler Text", weight: void 0 } },
    Impact: { Regular: { selector: "Impact", weight: void 0 } },
    "Lucida Grande": { Regular: { selector: "Lucida Grande", weight: void 0 } },
    Menlo: { Regular: { selector: "Menlo", weight: void 0 } },
    Monaco: { Regular: { selector: "Monaco", weight: void 0 } },
    Optima: {
      Regular: { selector: "Optima", weight: void 0 },
      ExtraBlack: { selector: "Optima-ExtraBlack", weight: void 0 },
    },
    Palatino: { Regular: { selector: "Palatino", weight: void 0 } },
    "SF Pro Display": {
      Regular: { selector: "__SF-UI-Display-Regular__", weight: 400 },
      Ultralight: { selector: "__SF-UI-Display-Ultralight__", weight: 100 },
      Thin: { selector: "__SF-UI-Display-Thin__", weight: 200 },
      Light: { selector: "__SF-UI-Display-Light__", weight: 300 },
      Medium: { selector: "__SF-UI-Display-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Display-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Display-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Display-Heavy__", weight: 800 },
      Black: { selector: "__SF-UI-Display-Black__", weight: 900 },
      Italic: { selector: "__SF-UI-Display-Italic__", weight: 400 },
      "Ultralight Italic": {
        selector: "__SF-UI-Display-Ultralight-Italic__",
        weight: 100,
      },
      "Thin Italic": { selector: "__SF-UI-Display-Thin-Italic__", weight: 200 },
      "Light Italic": {
        selector: "__SF-UI-Display-Light-Italic__",
        weight: 300,
      },
      "Medium Italic": {
        selector: "__SF-UI-Display-Medium-Italic__",
        weight: 500,
      },
      "Semibold Italic": {
        selector: "__SF-UI-Display-Semibold-Italic__",
        weight: 600,
      },
      "Bold Italic": { selector: "__SF-UI-Display-Bold-Italic__", weight: 700 },
      "Heavy Italic": {
        selector: "__SF-UI-Display-Heavy-Italic__",
        weight: 800,
      },
      "Black Italic": {
        selector: "__SF-UI-Display-Black-Italic__",
        weight: 900,
      },
    },
    "SF Pro Display Condensed": {
      Regular: { selector: "__SF-UI-Display-Condensed-Regular__", weight: 400 },
      Ultralight: {
        selector: "__SF-UI-Display-Condensed-Ultralight__",
        weight: 100,
      },
      Thin: { selector: "__SF-UI-Display-Condensed-Thin__", weight: 200 },
      Light: { selector: "__SF-UI-Display-Condensed-Light__", weight: 300 },
      Medium: { selector: "__SF-UI-Display-Condensed-Medium__", weight: 500 },
      Semibold: {
        selector: "__SF-UI-Display-Condensed-Semibold__",
        weight: 600,
      },
      Bold: { selector: "__SF-UI-Display-Condensed-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Display-Condensed-Heavy__", weight: 800 },
      Black: { selector: "__SF-UI-Display-Condensed-Black__", weight: 900 },
    },
    "SF Pro Text": {
      Regular: { selector: "__SF-UI-Text-Regular__", weight: 400 },
      Light: { selector: "__SF-UI-Text-Light__", weight: 200 },
      Medium: { selector: "__SF-UI-Text-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Text-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Text-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Text-Heavy__", weight: 800 },
      Italic: { selector: "__SF-UI-Text-Italic__", weight: 400 },
      "Light Italic": { selector: "__SF-UI-Text-Light-Italic__", weight: 200 },
      "Medium Italic": {
        selector: "__SF-UI-Text-Medium-Italic__",
        weight: 500,
      },
      "Semibold Italic": {
        selector: "__SF-UI-Text-Semibold-Italic__",
        weight: 600,
      },
      "Bold Italic": { selector: "__SF-UI-Text-Bold-Italic__", weight: 700 },
      "Heavy Italic": { selector: "__SF-UI-Text-Heavy-Italic__", weight: 800 },
    },
    "SF Pro Text Condensed": {
      Regular: { selector: "__SF-UI-Text-Condensed-Regular__", weight: 400 },
      Light: { selector: "__SF-UI-Text-Condensed-Light__", weight: 200 },
      Medium: { selector: "__SF-UI-Text-Condensed-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Text-Condensed-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Text-Condensed-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Text-Condensed-Heavy__", weight: 800 },
    },
    Tahoma: { Regular: { selector: "Tahoma", weight: void 0 } },
    Times: { Regular: { selector: "Times", weight: void 0 } },
    "Times New Roman": {
      Regular: { selector: "Times New Roman", weight: void 0 },
    },
    Trebuchet: { Regular: { selector: "Trebuchet MS", weight: void 0 } },
    Verdana: { Regular: { selector: "Verdana", weight: void 0 } },
  },
  a5 = {
    "__SF-Compact-Display-Regular__":
      "SFCompactDisplay-Regular|.SFCompactDisplay-Regular",
    "__SF-Compact-Display-Ultralight__":
      "SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight",
    "__SF-Compact-Display-Thin__":
      "SFCompactDisplay-Thin|.SFCompactDisplay-Thin",
    "__SF-Compact-Display-Light__":
      "SFCompactDisplay-Light|.SFCompactDisplay-Light",
    "__SF-Compact-Display-Medium__":
      "SFCompactDisplay-Medium|.SFCompactDisplay-Medium",
    "__SF-Compact-Display-Semibold__":
      "SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold",
    "__SF-Compact-Display-Heavy__":
      "SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy",
    "__SF-Compact-Display-Black__":
      "SFCompactDisplay-Black|.SFCompactDisplay-Black",
    "__SF-Compact-Display-Bold__":
      "SFCompactDisplay-Bold|.SFCompactDisplay-Bold",
    "__SF-UI-Text-Regular__":
      ".SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText",
    "__SF-UI-Text-Light__":
      ".SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light",
    "__SF-UI-Text-Medium__":
      ".SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium",
    "__SF-UI-Text-Semibold__":
      ".SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold",
    "__SF-UI-Text-Bold__":
      ".SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold",
    "__SF-UI-Text-Heavy__": ".SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy",
    "__SF-UI-Text-Italic__":
      ".SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic",
    "__SF-UI-Text-Light-Italic__":
      ".SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic",
    "__SF-UI-Text-Medium-Italic__":
      ".SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic",
    "__SF-UI-Text-Semibold-Italic__":
      ".SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic",
    "__SF-UI-Text-Bold-Italic__":
      ".SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic",
    "__SF-UI-Text-Heavy-Italic__":
      ".SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic",
    "__SF-Compact-Text-Regular__":
      "SFCompactText-Regular|.SFCompactText-Regular",
    "__SF-Compact-Text-Light__": "SFCompactText-Light|.SFCompactText-Light",
    "__SF-Compact-Text-Medium__": "SFCompactText-Medium|.SFCompactText-Medium",
    "__SF-Compact-Text-Semibold__":
      "SFCompactText-Semibold|.SFCompactText-Semibold",
    "__SF-Compact-Text-Bold__": "SFCompactText-Bold|.SFCompactText-Bold",
    "__SF-Compact-Text-Heavy__": "SFCompactText-Heavy|.SFCompactText-Heavy",
    "__SF-Compact-Text-Italic__": "SFCompactText-Italic|.SFCompactText-Italic",
    "__SF-Compact-Text-Light-Italic__":
      "SFCompactText-LightItalic|.SFCompactText-LightItalic",
    "__SF-Compact-Text-Medium-Italic__":
      "SFCompactText-MediumItalic|.SFCompactText-MediumItalic",
    "__SF-Compact-Text-Semibold-Italic__":
      "SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic",
    "__SF-Compact-Text-Bold-Italic__":
      "SFCompactText-BoldItalic|.SFCompactText-BoldItalic",
    "__SF-Compact-Text-Heavy-Italic__":
      "SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic",
    "__SF-UI-Display-Condensed-Regular__":
      ".SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular",
    "__SF-UI-Display-Condensed-Ultralight__":
      ".SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight",
    "__SF-UI-Display-Condensed-Thin__":
      ".SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin",
    "__SF-UI-Display-Condensed-Light__":
      ".SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light",
    "__SF-UI-Display-Condensed-Medium__":
      ".SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium",
    "__SF-UI-Display-Condensed-Semibold__":
      ".SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold",
    "__SF-UI-Display-Condensed-Bold__":
      ".SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold",
    "__SF-UI-Display-Condensed-Heavy__":
      ".SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy",
    "__SF-UI-Display-Condensed-Black__":
      ".SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black",
    "__SF-UI-Display-Regular__":
      ".SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay",
    "__SF-UI-Display-Ultralight__":
      ".SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight",
    "__SF-UI-Display-Thin__":
      ".SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin",
    "__SF-UI-Display-Light__":
      ".SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light",
    "__SF-UI-Display-Medium__":
      ".SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium",
    "__SF-UI-Display-Semibold__":
      ".SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold",
    "__SF-UI-Display-Bold__":
      ".SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold",
    "__SF-UI-Display-Heavy__":
      ".SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy",
    "__SF-UI-Display-Black__":
      ".SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black",
    "__SF-UI-Display-Italic__":
      ".SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic",
    "__SF-UI-Display-Ultralight-Italic__":
      ".SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic",
    "__SF-UI-Display-Thin-Italic__":
      ".SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic",
    "__SF-UI-Display-Light-Italic__":
      ".SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic",
    "__SF-UI-Display-Medium-Italic__":
      ".SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic",
    "__SF-UI-Display-Semibold-Italic__":
      ".SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic",
    "__SF-UI-Display-Bold-Italic__":
      ".SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic",
    "__SF-UI-Display-Heavy-Italic__":
      ".SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic",
    "__SF-UI-Display-Black-Italic__":
      ".SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic",
    "__SF-UI-Text-Condensed-Regular__":
      ".SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular",
    "__SF-UI-Text-Condensed-Light__":
      ".SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light",
    "__SF-UI-Text-Condensed-Medium__":
      ".SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium",
    "__SF-UI-Text-Condensed-Semibold__":
      ".SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold",
    "__SF-UI-Text-Condensed-Bold__":
      ".SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold",
    "__SF-UI-Text-Condensed-Heavy__":
      ".SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy",
    "__SF-Compact-Rounded-Regular__":
      "SFCompactRounded-Regular|.SFCompactRounded-Regular",
    "__SF-Compact-Rounded-Ultralight__":
      "SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight",
    "__SF-Compact-Rounded-Thin__":
      "SFCompactRounded-Thin|.SFCompactRounded-Thin",
    "__SF-Compact-Rounded-Light__":
      "SFCompactRounded-Light|.SFCompactRounded-Light",
    "__SF-Compact-Rounded-Medium__":
      "SFCompactRounded-Medium|.SFCompactRounded-Medium",
    "__SF-Compact-Rounded-Semibold__":
      "SFCompactRounded-Semibold|.SFCompactRounded-Semibold",
    "__SF-Compact-Rounded-Bold__":
      "SFCompactRounded-Bold|.SFCompactRounded-Bold",
    "__SF-Compact-Rounded-Heavy__":
      "SFCompactRounded-Heavy|.SFCompactRounded-Heavy",
    "__SF-Compact-Rounded-Black__":
      "SFCompactRounded-Black|.SFCompactRounded-Black",
  },
  IS = s5;
var l5 = "System Default",
  c5 = class {
    constructor() {
      R(this, "name", "local"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map()),
        R(this, "fontAliasBySelector", new Map()),
        R(this, "fontAliases", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    createFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.addFontFamily(t), t;
    }
    addFontFamily(e) {
      this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
    }
    importFonts() {
      let e = [];
      for (let r of Object.keys(IS)) {
        let i = IS[r];
        if (!i) continue;
        let o = this.createFontFamily(r);
        for (let s of Object.keys(i)) {
          let a = i[s];
          if (!a) continue;
          let { selector: l, weight: c } = a,
            u = { variant: s, selector: l, weight: c, family: o };
          o.fonts.push(u);
        }
        e.push(...o.fonts);
      }
      for (let [r, i] of Object.entries(a5)) this.addFontAlias(r, i);
      let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
      this.addFontFamily(t);
      for (let [r, i] of n) this.addFontAlias(r, i);
      return e.push(...t.fonts), e;
    }
    addFontAlias(e, t) {
      this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e);
    }
    getSystemFontFamily() {
      let e =
          "system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif",
        t = { name: l5, fonts: [], source: this.name },
        n = new Map(),
        r = [400, 100, 200, 300, 500, 600, 700, 800, 900],
        i = ["normal", "italic"];
      for (let o of i)
        for (let s of r) {
          let a = u5(s, o),
            l = `__SystemDefault-${s}-${o}__`,
            c = { variant: a, selector: l, style: o, weight: s, family: t };
          t.fonts.push(c), n.set(l, e);
        }
      return { fontFamily: t, aliases: n };
    }
    getFontAliasBySelector(e) {
      return this.fontAliasBySelector.get(e) || null;
    }
    getFontSelectorByAlias(e) {
      return this.fontAliases.get(e) || null;
    }
    isFontFamilyAlias(e) {
      return !!(e && /^__.*__$/u.exec(e));
    }
  },
  FS = {
    100: "Thin",
    200: "Extra Light",
    300: "Light",
    400: "Normal",
    500: "Medium",
    600: "Semi Bold",
    700: "Bold",
    800: "Extra Bold",
    900: "Black",
  };
function u5(e, t) {
  let n = t === "normal" ? "Regular" : "Italic";
  return e === 400 ? n : t !== "normal" ? `${FS[e]} ${n}` : `${FS[e]}`;
}
var f5 = An(Wp(), 1),
  Vo = "CUSTOM;";
function d5(e, t) {
  if (!t) return e.substring(0, e.lastIndexOf("."));
  let n =
      t.font.preferredFamily === ""
        ? t.font.fontFamily
        : t.font.preferredFamily,
    r =
      t.font.preferredSubFamily === ""
        ? t.font.fontSubFamily
        : t.font.preferredSubFamily;
  return `${n} ${r}`;
}
var h5 = class {
  constructor() {
    R(this, "name", "custom"),
      R(this, "fontFamilies", []),
      R(this, "byFamilyName", new Map()),
      R(this, "assetsByFamily", new Map());
  }
  importFonts(e) {
    var t;
    (this.fontFamilies.length = 0),
      this.byFamilyName.clear(),
      this.assetsByFamily.clear();
    let n = [];
    for (let r of e) {
      if (!this.isValidCustomFontAsset(r)) continue;
      let i = d5(r.name, r.properties),
        o = this.createFontFamily(i),
        s = {
          family: o,
          selector: `${Vo}${i}`,
          variant: this.inferVariantName(i),
          postscriptName:
            (t = r.properties) == null ? void 0 : t.font.postscriptName,
          file: r.url,
        };
      o.fonts.push(s),
        (o.owner = r.ownerType === "team" ? "team" : "project"),
        this.assetsByFamily.set(i, r),
        n.push(...o.fonts);
    }
    return n;
  }
  isValidCustomFontAsset(e) {
    var t;
    return !e.mimeType.startsWith("font/") ||
      ((t = e.properties) == null ? void 0 : t.kind) !== "font" ||
      !e.properties.font
      ? !1
      : "fontFamily" in e.properties.font;
  }
  inferVariantName(e) {
    let t = [
        "thin",
        "ultra light",
        "extra light",
        "light",
        "normal",
        "medium",
        "semi bold",
        "bold",
        "extra bold",
        "black",
      ],
      n = [...t.map((s) => `${s} italic`), ...t],
      r = e.toLowerCase(),
      i = [...r.split(" "), ...r.split("-"), ...r.split("_")],
      o = n.find((s) => i.includes(s) || i.includes(s.replace(/\s+/g, "")));
    return o ? o.replace(/^\w|\s\w/g, (s) => s.toUpperCase()) : "Regular";
  }
  createFontFamily(e) {
    let t = this.byFamilyName.get(e);
    if (t) return t;
    let n = { source: this.name, name: e, fonts: [] };
    return this.addFontFamily(n), n;
  }
  addFontFamily(e) {
    this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
  }
  parseSelector(e) {
    if (!e.startsWith(Vo)) return null;
    let t = e.split(Vo);
    return t[1] === void 0 ? null : { source: "custom", name: t[1] };
  }
  getFontBySelector(e, t = !0) {
    let n = this.parseSelector(e);
    if (!n || (!t && !this.byFamilyName.get(n.name))) return;
    let r = this.getFontFamilyByName(n.name).fonts;
    return (
      r.find((o) => {
        var s;
        return (s = o.file) == null ? void 0 : s.endsWith(".woff2");
      }) || r[0]
    );
  }
  getFontFamilyByName(e) {
    let t = this.byFamilyName.get(e);
    if (t) return t;
    let n = { source: "custom", name: e, fonts: [] };
    return (
      n.fonts.push({
        selector: `${Vo}${e}`,
        variant: this.inferVariantName(e),
        family: n,
      }),
      n
    );
  }
};
function vk(e, t, n) {
  if (t.length === 0) return {};
  let r = n(e);
  if (!r) return {};
  let { weight: i, style: o } = r,
    s = new Map(),
    a = new Map();
  t.forEach((f) => {
    let d = ke(f) ? f : f.name.toLocaleLowerCase(),
      m = n(d);
    m &&
      (s.set(`${m.weight}-${m.style}`, d),
      !(m.weight <= i) && (a.has(m.style) || a.set(m.style, d)));
  });
  let l = a.get(o),
    c = a.get("italic") ?? a.get("oblique");
  r.weight <= 300
    ? ((l = s.get(`400-${o}`) ?? l),
      (c = s.get("400-italic") ?? s.get("400-oblique") ?? c))
    : r.weight <= 500
    ? ((l = s.get(`700-${o}`) ?? l),
      (c = s.get("700-italic") ?? s.get("700-oblique") ?? c))
    : ((l = s.get(`900-${o}`) ?? l),
      (c = s.get("900-italic") ?? s.get("900-oblique") ?? c));
  let u = s.get(`${i}-italic`) ?? s.get(`${i}-oblique`);
  return { variantBold: l, variantItalic: u, variantBoldItalic: c };
}
var p5 = ["display", "sans", "serif", "slab", "handwritten", "script"];
function m5(e) {
  return e
    .split(",")
    .map((t) => t.trim().toLowerCase())
    .filter(v5);
}
function v5(e) {
  return p5.includes(e);
}
var Gc = "FS;",
  gk = {
    thin: 100,
    hairline: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    ultra: 800,
    black: 900,
    heavy: 900,
  },
  yk = Object.keys(gk),
  g5 = (() => new RegExp(`^(?:${[...yk, "italic"].join("|")})`, "u"))(),
  qr = class {
    constructor() {
      R(this, "name", "fontshare"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    static parseVariant(e) {
      let t = e.split(" "),
        n = yk.find((s) => t.includes(s)),
        r = e.includes("italic") ? "italic" : "normal";
      return {
        weight: (n && gk[n]) || 400,
        style: r === "italic" ? r : "normal",
      };
    }
    parseSelector(e) {
      if (!e.startsWith(Gc)) return null;
      let t = e.split("-");
      if (t.length !== 2) return null;
      let [n, r] = t;
      return !n || !r
        ? null
        : { name: n.replace(Gc, ""), variant: r, source: this.name };
    }
    static createSelector(e, t) {
      return `${Gc}${e}-${t}`;
    }
    addFontFamily(e) {
      this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
    }
    importFonts(e) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let t = [];
      for (let n of e) {
        let r = n.font_styles.filter((i) => {
          let o = i.name.toLowerCase();
          return !(!g5.exec(o) || o.endsWith("wide"));
        });
        for (let i of r) {
          let { name: o } = n,
            s = i.name.toLowerCase(),
            a = this.getFontFamilyByName(o);
          a ||
            ((a = { name: o, fonts: [], source: this.name }),
            this.addFontFamily(a));
          let l = qr.createSelector(o, s),
            c = qr.parseVariant(s) || { weight: void 0, style: void 0 },
            { weight: u, style: f } = c,
            {
              variantBold: d,
              variantBoldItalic: m,
              variantItalic: y,
            } = vk(s, r, qr.parseVariant),
            g = {
              family: a,
              variant: s,
              selector: l,
              selectorBold: d ? qr.createSelector(o, d) : void 0,
              selectorBoldItalic: m ? qr.createSelector(o, m) : void 0,
              selectorItalic: y ? qr.createSelector(o, y) : void 0,
              weight: u,
              style: f,
              file: i.file,
              category: y5(n.category),
            };
          a.fonts.push(g), t.push(g);
        }
      }
      return t;
    }
  };
function y5(e) {
  let t = {
      serif: "serif",
      sans: "sans-serif",
      slab: "slab",
      display: "display",
      handwritten: "handwriting",
      script: "handwriting",
    },
    n = m5(e)[0];
  return n && t[n];
}
var b5 = "Inter",
  x5 = {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    "": 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
    Black: 900,
  },
  LS = class {
    constructor() {
      R(this, "name", "framer"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    addFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t;
    }
    static getDraftFontPropertiesBySelector(e) {
      if (!e.startsWith(b5)) return null;
      let t = e.split("-"),
        [n, r = ""] = t;
      if (!n) return null;
      let i = r.includes("Italic") ? "italic" : "normal",
        o = r.replace("Italic", ""),
        s = (o && x5[o]) || 400;
      return {
        family: n,
        style: i,
        weight: s,
        source: "framer",
        variant: void 0,
        category: "sans-serif",
      };
    }
    importFonts(e) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let t = [];
      return (
        e.forEach((n) => {
          let { familyName: r, ...i } = n,
            o = this.getFontFamilyByName(r);
          o || (o = this.addFontFamily(r));
          let s = { ...i, family: o };
          o.fonts.push(s), t.push(s);
        }),
        t
      );
    }
  },
  Kc = "GF;",
  Qr = class {
    constructor() {
      R(this, "name", "google"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    static parseVariant(e) {
      if (e === "regular") return { style: "normal", weight: 400 };
      let t = /(\d*)(normal|italic)?/.exec(e);
      if (!t) return null;
      let n = parseInt(t[1] || "400"),
        r = t[2] === "italic" ? "italic" : "normal";
      return { weight: n, style: r };
    }
    parseSelector(e) {
      if (!e.startsWith(Kc)) return null;
      let t = e.split("-");
      if (t.length !== 2) return null;
      let [n, r] = t;
      return !n || !r
        ? null
        : { name: n.replace(Kc, ""), variant: r, source: this.name };
    }
    static createSelector(e, t) {
      return `${Kc}${e}-${t}`;
    }
    addFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t;
    }
    importFonts(e) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let t = [];
      return (
        e.forEach((n) => {
          n.variants.forEach((r) => {
            var i;
            let o = n.family,
              s = this.getFontFamilyByName(o);
            s || (s = this.addFontFamily(o));
            let a = Qr.parseVariant(r) ?? {},
              { weight: l, style: c } = a,
              u = Qr.createSelector(o, r),
              {
                variantBold: f,
                variantItalic: d,
                variantBoldItalic: m,
              } = vk(r, n.variants, Qr.parseVariant),
              y = {
                family: s,
                variant: r,
                selector: u,
                selectorBold: f ? Qr.createSelector(o, f) : void 0,
                selectorBoldItalic: m ? Qr.createSelector(o, m) : void 0,
                selectorItalic: d ? Qr.createSelector(o, d) : void 0,
                weight: l,
                style: c,
                category: S5(n.category),
                file:
                  (i = n.files[r]) == null
                    ? void 0
                    : i.replace("http://", "https://"),
              };
            s.fonts.push(y), t.push(y);
          });
        }),
        t
      );
    }
  };
function S5(e) {
  let t = {
    serif: "serif",
    "sans-serif": "sans-serif",
    display: "display",
    handwriting: "handwriting",
    monospace: "monospace",
  };
  if (e) return t[e];
}
var w5 = An(QI(), 1),
  MS = 5e3,
  k5 = 3,
  bk = class extends Error {
    constructor(e) {
      super(e), (this.name = "FontLoadingError");
    }
  },
  _p = new Map(),
  Ip = new Map(),
  C5 = (e, t) => xk(e, t);
async function xk(e, t, n = 0) {
  let { family: r, url: i, stretch: o, unicodeRange: s } = e,
    a = e.weight || 500,
    l = e.style || "normal",
    c = `${r}-${l}-${a}-${i}`;
  if (!_p.has(c) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: ke(a) ? a : a?.toString(),
        style: l,
        stretch: o,
        unicodeRange: s,
      }),
      f = u
        .load()
        .then(() => (t.fonts.add(u), Sk(r, l, a)))
        .catch((d) => {
          if (d.name !== "NetworkError") throw d;
          if (n < k5) return xk(e, t, n + 1);
          throw new bk(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify(
              {
                family: r,
                style: l,
                weight: a,
                url: i,
                stretch: o,
                unicodeRange: s,
              }
            )}`
          );
        });
    _p.set(c, f);
  }
  await _p.get(c);
}
async function Sk(e, t, n) {
  let r = `${e}-${t}-${n}`;
  if (!Ip.has(r)) {
    let o = new w5.default(e, { style: t, weight: n }).load(null, MS);
    Ip.set(r, o);
  }
  try {
    await Ip.get(r);
  } catch {
    throw new bk(
      `Failed to check if font is ready (${MS}ms timeout exceeded): ${JSON.stringify(
        { family: e, style: t, weight: n }
      )}`
    );
  }
}
var T5 = class {
    constructor() {
      R(this, "enabled", !1),
        R(this, "bySelector", new Map()),
        R(this, "getGoogleFontsListPromise"),
        R(this, "getFontshareFontsListPromise"),
        R(this, "loadedSelectors", new Set()),
        R(this, "googleFamilyNames", new Set()),
        R(this, "local"),
        R(this, "google"),
        R(this, "fontshare"),
        R(this, "framer"),
        R(this, "custom"),
        (this.local = new c5()),
        (this.google = new Qr()),
        (this.fontshare = new qr()),
        (this.framer = new LS()),
        (this.custom = new h5()),
        (this.bySelector = new Map()),
        this.importLocalFonts();
    }
    addFont(e) {
      this.bySelector.set(e.selector, e);
    }
    getAvailableFonts() {
      return Array.from(this.bySelector.values());
    }
    importLocalFonts() {
      for (let e of this.local.importFonts()) this.addFont(e), this.loadFont(e);
    }
    async importGoogleFonts() {
      if (!this.getGoogleFontsListPromise) {
        this.getGoogleFontsListPromise = et.fetchGoogleFontsList();
        let e = await this.getGoogleFontsListPromise;
        for (let t of this.google.importFonts(e))
          this.googleFamilyNames.add(t.family.name.toLowerCase()),
            this.addFont(t);
      }
      return this.getGoogleFontsListPromise;
    }
    async importFontshareFonts() {
      if (!this.getFontshareFontsListPromise) {
        this.getFontshareFontsListPromise = et.fetchFontshareFontsList();
        let e = await this.getFontshareFontsListPromise;
        for (let t of this.fontshare.importFonts(e))
          this.googleFamilyNames.has(t.family.name.toLowerCase()) ||
            this.addFont(t);
      }
      return this.getFontshareFontsListPromise;
    }
    importFramerFonts(e) {
      this.framer.importFonts(e).forEach((t) => {
        this.addFont(t);
      });
    }
    importCustomFonts(e) {
      this.bySelector.forEach((t, n) => {
        n.startsWith(Vo) && this.bySelector.delete(n);
      });
      for (let t of this.custom.importFonts(e)) this.addFont(t);
    }
    getFontFamily(e) {
      return this[e.source].getFontFamilyByName(e.name);
    }
    getFontBySelector(e, t = !0) {
      if (e)
        return e.startsWith(Vo)
          ? this.custom.getFontBySelector(e, t)
          : this.bySelector.get(e);
    }
    getDraftPropertiesBySelector(e) {
      let t = this.getFontBySelector(e);
      if (t)
        return {
          style: t.style,
          weight: t.weight,
          variant: t.variant,
          family: t.family.name,
          source: t.family.source,
          category: t.category,
        };
      let n = this.google.parseSelector(e);
      if (n) {
        let o = Qr.parseVariant(n.variant);
        if (o)
          return {
            style: o.style,
            weight: o.weight,
            variant: n.variant,
            family: n.name,
            source: "google",
            category: void 0,
          };
      }
      let r = this.fontshare.parseSelector(e);
      if (r) {
        let o = qr.parseVariant(r.variant);
        if (o)
          return {
            style: o.style,
            weight: o.weight,
            variant: r.variant,
            family: r.name,
            source: "fontshare",
            category: void 0,
          };
      }
      let i = LS.getDraftFontPropertiesBySelector(e);
      return i || null;
    }
    isSelectorLoaded(e) {
      return this.loadedSelectors.has(e);
    }
    async loadFont(e) {
      if (this.isSelectorLoaded(e.selector)) return 0;
      let t = e.family.source;
      switch (t) {
        case "local":
          return this.loadedSelectors.add(e.selector), 1;
        case "framer":
          return (
            f5.default.env.NODE_ENV !== "test" &&
              (await Sk(e.family.name, e.style, e.weight)),
            this.loadedSelectors.add(e.selector),
            1
          );
        case "google":
        case "fontshare":
        case "custom":
          return e.file
            ? (await C5(
                {
                  family: e.family.name,
                  url: e.file,
                  weight: e.weight,
                  style: e.style,
                },
                document
              ),
              this.loadedSelectors.add(e.selector),
              1)
            : Promise.reject(`Unable to load font: ${e.selector}`);
        default:
          Tt(t);
      }
    }
    async loadFontsFromSelectors(e) {
      if (!this.enabled) return [];
      let t = e.some((i) => i.startsWith(Kc)),
        n = e.some((i) => i.startsWith(Gc));
      if (t || n) {
        try {
          await this.importGoogleFonts();
        } catch (i) {
          fa("Failed to load Google fonts:", i);
        }
        try {
          await this.importFontshareFonts();
        } catch (i) {
          fa("Failed to load Fontshare fonts:", i);
        }
      }
      let r = e.map((i) => this.bySelector.get(i)).filter((i) => !!i);
      return Promise.allSettled(r.map((i) => this.loadFont(i)));
    }
    async loadFonts(e) {
      return {
        newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
          (r) => r.status === "fulfilled" && r.value === 1
        ).length,
      };
    }
    async loadMissingFonts(e, t) {
      let n = e.filter((i) => !qc.isSelectorLoaded(i));
      if (n.length === 0) return;
      await qc.loadWebFontsFromSelectors(n),
        n.every((i) => qc.isSelectorLoaded(i)) && t && t();
    }
    async loadWebFontsFromSelectors(e) {
      return this.loadFontsFromSelectors(e);
    }
    get defaultFont() {
      let e = this.getFontBySelector("Inter");
      return he(e, "Can\u2019t find Inter font"), e;
    }
  },
  qc = new T5();
Promise.allSettled =
  Promise.allSettled ||
  ((e) =>
    Promise.all(
      e.map((t) =>
        t
          .then((n) => ({ status: "fulfilled", value: n }))
          .catch((n) => ({ status: "rejected", reason: n }))
      )
    ));
var wk = ((e) => (
    (e.Padding = "--framer-input-padding"),
    (e.BorderRadiusTopLeft = "--framer-input-border-radius-top-left"),
    (e.BorderRadiusTopRight = "--framer-input-border-radius-top-right"),
    (e.BorderRadiusBottomRight = "--framer-input-border-radius-bottom-right"),
    (e.BorderRadiusBottomLeft = "--framer-input-border-radius-bottom-left"),
    (e.BorderColor = "--framer-input-border-color"),
    (e.BorderTopWidth = "--framer-input-border-top-width"),
    (e.BorderRightWidth = "--framer-input-border-right-width"),
    (e.BorderBottomWidth = "--framer-input-border-bottom-width"),
    (e.BorderLeftWidth = "--framer-input-border-left-width"),
    (e.BorderStyle = "--framer-input-border-style"),
    (e.Background = "--framer-input-background"),
    (e.FontFamily = "--framer-input-font-family"),
    (e.FontWeight = "--framer-input-font-weight"),
    (e.FontSize = "--framer-input-font-size"),
    (e.FontColor = "--framer-input-font-color"),
    (e.FontLetterSpacing = "--framer-input-font-letter-spacing"),
    (e.FontTextAlignment = "--framer-input-font-text-alignment"),
    (e.FontLineHeight = "--framer-input-font-line-height"),
    (e.PlaceholderColor = "--framer-input-placeholder-color"),
    (e.BoxShadow = "--framer-input-box-shadow"),
    (e.FocusedBorderColor = "--framer-input-focused-border-color"),
    (e.FocusedBorderWidth = "--framer-input-focused-border-width"),
    (e.FocusedBorderStyle = "--framer-input-focused-border-style"),
    (e.FocusedBackground = "--framer-input-focused-background"),
    (e.FocusedBoxShadow = "--framer-input-focused-box-shadow"),
    (e.FocusedTransition = "--framer-input-focused-transition"),
    (e.BooleanCheckedBackground = "--framer-input-boolean-checked-background"),
    (e.BooleanCheckedBorderColor =
      "--framer-input-boolean-checked-border-color"),
    (e.BooleanCheckedBorderWidth =
      "--framer-input-boolean-checked-border-width"),
    (e.BooleanCheckedBorderStyle =
      "--framer-input-boolean-checked-border-style"),
    (e.BooleanCheckedBoxShadow = "--framer-input-boolean-checked-box-shadow"),
    (e.BooleanCheckedTransition = "--framer-input-boolean-checked-transition"),
    (e.InvalidTextColor = "--framer-input-invalid-text-color"),
    (e.IconBackgroundImage = "--framer-input-icon-image"),
    (e.IconMaskImage = "--framer-input-icon-mask-image"),
    (e.IconColor = "--framer-input-icon-color"),
    (e.WrapperHeight = "--framer-input-wrapper-height"),
    e
  ))(wk || {}),
  ge = wk,
  OS = "framer-form-input",
  E5 = "framer-form-input-wrapper";
function R5(e) {
  return typeof e == "number"
    ? e
    : e.startsWith("--")
    ? vt.variable(e)
    : e === ""
    ? '""'
    : e;
}
function vt(e, t) {
  let n = " ";
  for (let r in t) {
    let i = t[r];
    n += `${r.replace(/([A-Z])/gu, "-$1").toLowerCase()}: ${R5(i)}; `;
  }
  return e + " {" + n + "}";
}
((e) => {
  function t(...n) {
    let r = n[n.length - 1],
      i = r.startsWith("--") ? `var(${r})` : r;
    for (let o = n.length - 2; o >= 0; o--) i = `var(${n[o]}, ${i})`;
    return i;
  }
  e.variable = t;
})(vt || (vt = {}));
var v8 = [
  vt(`.${OS}`, {
    padding: vt.variable(ge.Padding),
    background: "transparent",
    fontFamily: vt.variable(ge.FontFamily),
    fontWeight: vt.variable(ge.FontWeight),
    fontSize: vt.variable(ge.FontSize),
    color: vt.variable(ge.FontColor),
    border: "none",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "100%",
    height: vt.variable(ge.WrapperHeight, "100%"),
    letterSpacing: vt.variable(ge.FontLetterSpacing),
    textAlign: vt.variable(ge.FontTextAlignment),
    lineHeight: vt.variable(ge.FontLineHeight),
  }),
  vt(`.${OS}:focus-visible`, { outline: "none" }),
];
var g8 = `var(${ge.BorderTopWidth}) var(${ge.BorderRightWidth}) var(${ge.BorderBottomWidth}) var(${ge.BorderLeftWidth})`,
  y8 = [
    `.${E5}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${ge.BorderRadiusTopLeft});
        border-top-right-radius: var(${ge.BorderRadiusTopRight});
        border-bottom-right-radius: var(${ge.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${ge.BorderRadiusBottomLeft});
        border-color: var(${ge.BorderColor});
        border-top-width: var(${ge.BorderTopWidth});
        border-right-width: var(${ge.BorderRightWidth});
        border-bottom-width: var(${ge.BorderBottomWidth});
        border-left-width: var(${ge.BorderLeftWidth});
        border-style: var(${ge.BorderStyle});
        transition: var(${ge.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius;
    }`,
  ];
var Fp = 16,
  b8 = {
    content: "",
    display: "block",
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: `${Fp}px`,
    boxSizing: "content-box",
    padding: vt.variable(ge.Padding),
    border: "none",
    pointerEvents: "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: `${Fp}px`,
    maskRepeat: "no-repeat",
    maskSize: `${Fp}px`,
    backgroundColor: vt.variable(ge.IconColor),
  };
var P8 = b.forwardRef(function (t, n) {
  let { background: r, children: i, alt: o, ...s } = t,
    a = { ...s.style };
  r && delete a.background;
  let l = cu(t.as);
  return se(l, {
    ...s,
    style: a,
    ref: n,
    children: [r && C(Ew, { image: r, alt: o }), i],
  });
});
function P5(e, t) {
  return e.length === t.length && e.every((n, r) => n === t[r]);
}
var _5 = /[^\p{Letter}\p{Number}()]+/gu,
  I5 = /^-+|-+$/gu;
function F5(e) {
  return e.toLowerCase().replace(_5, "-").replace(I5, "");
}
var L5 = /[&<>'"]/g,
  M5 = (e) =>
    e.replace(
      L5,
      (t) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        }[t] || t)
    ),
  O5 =
    /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi;
function D5(e, t, n, r) {
  return e.replace(O5, (i, o, s, a, l, c, u) => {
    var f, d;
    if (s.toLowerCase() !== "a") return i;
    let m = l || c,
      y = lm(m.replace(/&amp;/g, "&"));
    if (!y || !y.target) return i;
    let g = t(y.target);
    if (!V1(g) || !V1(n)) return i;
    let x = g.path,
      p = n.path;
    if (!x || !p) return i;
    let h = ` data-framer-page-link-target="${y.target}"`,
      v = au(g, y.element ?? void 0);
    v && (h += ` data-framer-page-link-element="${y.element}"`);
    let S = $p(m);
    if (!S || ke(S)) return i;
    sk(n, S, r) && (h += " data-framer-page-link-current");
    let k = x,
      w = Object.assign(
        {},
        r,
        (f = y.collectionItem) == null ? void 0 : f.pathVariables
      );
    if (
      (Object.keys(w).length > 0 && (k = k.replace(ik, (T, E) => "" + w[E])),
      (d = y.collectionItem) != null && d.pathVariables)
    ) {
      let T = new URLSearchParams(y.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${T}"`;
    }
    return (k = US(p, k)), o + a + `"${M5(k + (v ? `#${v}` : ""))}"` + h + u;
  });
}
var A5 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  },
  kk = /[&<>"']/gu,
  V5 = (() => new RegExp(kk.source))();
function DS(e) {
  return e && V5.test(e) ? e.replace(kk, (t) => A5[t] ?? "") : e || "";
}
var AS = "{{ text-placeholder }}",
  B5 = "rich-text-wrapper",
  $5 = je(function (t, n) {
    let {
        id: r,
        name: i,
        html: o,
        htmlFromDesign: s,
        text: a,
        textFromDesign: l,
        fonts: c = [],
        width: u,
        height: f,
        left: d,
        right: m,
        top: y,
        bottom: g,
        center: x,
        className: p,
        stylesPresetsClassName: h,
        visible: v = !0,
        opacity: S,
        rotation: k = 0,
        verticalAlignment: w = "top",
        isEditable: T = !1,
        willChangeTransform: E,
        environment: F = ie.current,
        withExternalLayout: I = !1,
        positionSticky: z,
        positionStickyTop: $,
        positionStickyRight: re,
        positionStickyBottom: J,
        positionStickyLeft: V,
        __htmlStructure: X,
        __fromCanvasComponent: Z = !1,
        _forwardedOverrideId: ee,
        _forwardedOverrides: W,
        _usesDOMRect: te,
        children: ne,
        ...ye
      } = t,
      de = Ta(),
      Q = Ra(t),
      gt = A(null),
      Ve = n ?? gt,
      { navigate: Xe, getRoute: lt } = ka(),
      yr = lu();
    aL(t.preload ?? []), du(t, Ve);
    let ue = D(Uo),
      qn = mk(),
      zt = a,
      _n = ee ?? r;
    if (_n && W) {
      let Be = W[_n];
      typeof Be == "string" && (zt = Be);
    }
    let gn = "";
    if (zt) {
      let Be = DS(zt);
      gn = X ? X.replace(AS, Be) : `<p>${Be}</p>`;
    } else if (o) gn = o;
    else if (l) {
      let Be = DS(l);
      gn = X ? X.replace(AS, Be) : `<p>${Be}</p>`;
    } else s && (gn = s);
    let Nt = ok(),
      Vi = oe(
        () => (qn || !lt || !yr ? gn : D5(gn, lt, yr, Nt)),
        [qn, gn, lt, yr, Nt]
      );
    if (
      (H(() => {
        let Be = Ve.current;
        if (Be === null) return;
        function Qn(Ht) {
          let ti = am(Ht.target, Ve.current);
          if (
            Ht.metaKey ||
            !Xe ||
            !ti ||
            ti.getAttribute("target") === "_blank"
          )
            return;
          bV(Xe, ti, Nt) && Ht.preventDefault();
        }
        return (
          Be.addEventListener("click", Qn),
          () => {
            Be.removeEventListener("click", Qn);
          }
        );
      }, [Xe, Nt]),
      Tk(c, Z, Ve),
      qe(() => {
        Ea();
      }, []),
      !v)
    )
      return null;
    let P = T && F() === ie.canvas,
      _ = {
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: Ck(w),
        opacity: P ? 0 : S,
        flexShrink: 0,
      },
      M = ie.hasRestrictions(),
      N = da(t, de || 0, !1),
      ae = te && (u === "auto" || f === "auto"),
      tt =
        !!t.transformTemplate || !N || !M || Z || ae
          ? t.transformTemplate ?? uu(x)
          : void 0;
    if (!I) {
      if (N && M && !ae) {
        let Be = Ke.getNumber(k).toFixed(4);
        (_.transform = `translate(${N.x}px, ${N.y}px) rotate(${Be}deg)`),
          (_.width = N.width),
          (_.minWidth = N.width),
          (_.height = N.height);
      } else
        (_.left = d),
          (_.right = m),
          (_.top = y),
          (_.bottom = g),
          (_.width = u),
          (_.height = f),
          (_.rotate = k);
      z
        ? (!qn || ue) &&
          ((_.position = "sticky"),
          (_.willChange = "transform"),
          (_.zIndex = 1),
          (_.top = $),
          (_.right = re),
          (_.bottom = J),
          (_.left = V))
        : qn &&
          (t.positionFixed || t.positionAbsolute) &&
          (_.position = "absolute");
    }
    return (
      rm(t, _),
      zw(t, _),
      E && em(_),
      Object.assign(_, t.style),
      C(Ut.div, {
        id: r,
        ref: Ve,
        ...ye,
        style: _,
        layoutId: Q,
        "data-framer-name": i,
        "data-framer-component-type": "DeprecatedRichText",
        "data-center": x,
        className: tu(p, h, B5),
        transformTemplate: tt,
        dangerouslySetInnerHTML: { __html: Vi },
      })
    );
  });
function Ck(e) {
  switch (e) {
    case "top":
      return "flex-start";
    case "center":
      return "center";
    case "bottom":
      return "flex-end";
  }
}
function Tk(e, t, n) {
  let r = A([]);
  P5(r.current, e) ||
    ((r.current = e),
    qc.loadFonts(e).then(({ newlyLoadedFontCount: i }) => {
      !t ||
        !n.current ||
        ie.current() !== ie.canvas ||
        (i > 0 && MO(n.current));
    }));
}
var VS = je(({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) =>
    C(Ut.svg, {
      ref: i,
      ...r,
      viewBox: t,
      children: C(Ut.foreignObject, {
        width: "100%",
        height: "100%",
        className: "framer-fit-text",
        transform: `scale(${e})`,
        style: { overflow: "visible", transformOrigin: "center center" },
        children: n,
      }),
    })
  ),
  z5 = je((e, t) => {
    let {
        __fromCanvasComponent: n = !1,
        _forwardedOverrideId: r,
        _forwardedOverrides: i,
        _usesDOMRect: o,
        anchorLinkOffsetY: s,
        as: a,
        bottom: l,
        center: c,
        children: u,
        environment: f = ie.current,
        fonts: d = [],
        height: m,
        isEditable: y = !1,
        left: g,
        name: x,
        opacity: p,
        positionSticky: h,
        positionStickyBottom: v,
        positionStickyLeft: S,
        positionStickyRight: k,
        positionStickyTop: w,
        right: T,
        rotation: E = 0,
        style: F,
        _initialStyle: I,
        stylesPresetsClassNames: z,
        text: $,
        top: re,
        verticalAlignment: J = "top",
        visible: V = !0,
        width: X,
        willChangeTransform: Z,
        withExternalLayout: ee = !1,
        viewBox: W,
        viewBoxScale: te = 1,
        ...ne
      } = e,
      ye = Ta(),
      de = mk(),
      Q = D(Uo),
      gt = Ra(e),
      Ve = A(null),
      Xe = t ?? Ve;
    du(e, Xe),
      Tk(d, n, Xe),
      qe(() => {
        Ea();
      }, []);
    let lt = oe(() => {
      if (u) return Ek(u, z, $, s);
    }, [u, z, $, s]);
    if (!V) return null;
    let yr = y && f() === ie.canvas,
      ue = {
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: Ck(J),
        opacity: yr ? 0 : p,
        flexShrink: 0,
      },
      qn = ie.hasRestrictions(),
      zt = da(e, ye || 0, !1),
      _n = o && (X === "auto" || m === "auto"),
      Nt =
        !!e.transformTemplate || !zt || !qn || n || _n
          ? e.transformTemplate ?? uu(c)
          : void 0;
    ee ||
      (zt && qn && !_n
        ? ((ue.x = zt.x),
          (ue.y = zt.y),
          (ue.rotate = Ke.getNumber(E)),
          (ue.width = zt.width),
          (ue.minWidth = zt.width),
          (ue.height = zt.height))
        : ((ue.left = g),
          (ue.right = T),
          (ue.top = re),
          (ue.bottom = l),
          (ue.width = X),
          (ue.height = m),
          (ue.rotate = E)),
      h
        ? (!de || Q) &&
          ((ue.position = "sticky"),
          (ue.willChange = "transform"),
          (ue.zIndex = 1),
          (ue.top = w),
          (ue.right = k),
          (ue.bottom = v),
          (ue.left = S))
        : de &&
          (e.positionFixed || e.positionAbsolute) &&
          (ue.position = "absolute")),
      rm(e, ue),
      zw(e, ue),
      Z && em(ue),
      Object.assign(ue, I, F),
      gt && (ne.layout = "preserve-aspect");
    let Vi = cu(e.as);
    return ke(e.viewBox)
      ? e.as !== void 0
        ? C(Vi, {
            ...ne,
            ref: Xe,
            style: ue,
            layoutId: gt,
            transformTemplate: Nt,
            "data-framer-name": x,
            "data-framer-component-type": "RichTextContainer",
            children: C(VS, {
              viewBox: W,
              viewBoxScale: te,
              style: { width: "100%", height: "100%" },
              children: lt,
            }),
          })
        : C(VS, {
            ...ne,
            ref: Xe,
            style: ue,
            layoutId: gt,
            viewBox: W,
            viewBoxScale: te,
            transformTemplate: Nt,
            "data-framer-name": x,
            "data-framer-component-type": "RichTextContainer",
            children: lt,
          })
      : C(Vi, {
          ...ne,
          ref: Xe,
          style: ue,
          layoutId: gt,
          transformTemplate: Nt,
          "data-framer-name": x,
          "data-framer-component-type": "RichTextContainer",
          children: lt,
        });
  });
function Ek(e, t, n, r, i = {}) {
  let o = In.toArray(e.props.children);
  ke(n) && (o = o.slice(0, 1)),
    (o = o.map((l) => (jt(l) ? Ek(l, t, n, r, i) : ke(n) ? n : l)));
  let { ["data-preset-tag"]: s, ...a } = e.props;
  if (ke(e.type) || Zf(e.type)) {
    let l = Ky(e.type) || e.type,
      c = s || l,
      u = ke(c) ? t?.[c] : void 0;
    a.className = tu("framer-text", a.className, u);
    let f =
        l === "h1" ||
        l === "h2" ||
        l === "h3" ||
        l === "h4" ||
        l === "h5" ||
        l === "h6",
      d = t?.anchor;
    if (f && d) {
      let m = N5(o, i);
      a.id = m;
      let y = tu("framer-text", d),
        g = C("a", { href: `#${m}`, className: y, children: o });
      (a.style = { ...(a.style ?? {}), scrollMarginTop: r }), (o = [g]);
    }
  }
  return yn(e, a, ...o);
}
function N5(e, t) {
  let n = e.map(jp).join(""),
    r = F5(n),
    i = t[r] ?? 0;
  return i > 0 && (r += `-${i}`), (t[r] = i + 1), r;
}
function jp(e) {
  return ke(e) || rn(e)
    ? e.toString()
    : jt(e)
    ? jp(e.props.children)
    : Array.isArray(e)
    ? e.map(jp).join("")
    : "";
}
var M8 = je(({ children: e, html: t, htmlFromDesign: n, ...r }, i) => {
  let o = t || e || n;
  if (ke(o)) {
    !r.stylesPresetsClassName &&
      Ae(r.stylesPresetsClassNames) &&
      (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(
        " "
      ));
    let s = { [ke(t) ? "html" : "htmlFromDesign"]: o };
    return C($5, { ...r, ...s, ref: i });
  }
  if (!r.stylesPresetsClassNames && ke(r.stylesPresetsClassName)) {
    let [s, a, l, c, u] = r.stylesPresetsClassName.split(" ");
    s === void 0 || a === void 0 || l === void 0 || c === void 0 || u === void 0
      ? console.warn(
          `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
        )
      : (r.stylesPresetsClassNames = { h1: s, h2: a, h3: l, p: c, a: u });
  }
  return C(z5, { ...r, ref: i, children: jt(o) ? o : void 0 });
});
function H5(e) {
  var t, n;
  let r = (e * Math.PI) / 180,
    i = { x: -Math.sin(r) * 100, y: Math.cos(r) * 100 },
    o = en(i.x, i.y),
    s = mn(en(0.5, 0.5), o),
    a = K.points({ x: 0, y: 0, width: 1, height: 1 }),
    l = a
      .map((g) => ({ point: g, distance: en.distance(o, g) }))
      .sort((g, x) => g.distance - x.distance),
    c = (t = l[0]) == null ? void 0 : t.point,
    u = (n = l[1]) == null ? void 0 : n.point;
  he(c && u, "linearGradientLine: Must have 2 closest points.");
  let [f, d] = a.filter((g) => !en.isEqual(g, c) && !en.isEqual(g, u));
  he(f && d, "linearGradientLine: Must have 2 opposing points.");
  let m = mn.intersection(s, mn(c, u)),
    y = mn.intersection(s, mn(f, d));
  return (
    he(m && y, "linearGradientLine: Must have a start and end point."), mn(m, y)
  );
}
function j5(e, t) {
  var n, r;
  let i = H5(e.angle),
    o = Pa(e),
    s = ((n = o[0]) == null ? void 0 : n.position) ?? 0,
    a = ((r = o[o.length - 1]) == null ? void 0 : r.position) ?? 1,
    l = mn.pointAtPercentDistance(i, s),
    c = mn.pointAtPercentDistance(i, a),
    u = eo([s, a], [0, 1]);
  return {
    id: `id${t}g${pa.hash(e)}`,
    x1: l.x,
    y1: l.y,
    x2: c.x,
    y2: c.y,
    stops: o.map((f) => ({
      color: f.value,
      alpha: tm.getAlpha(f.value) * e.alpha,
      position: u(f.position),
    })),
  };
}
function W5(e, t) {
  return {
    id: `id${t}g${ma.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Pa(e).map((n) => ({
      color: n.value,
      alpha: tm.getAlpha(n.value) * e.alpha,
      position: n.position,
    })),
  };
}
function Rk(e) {
  if (!ke(e) || e.charAt(e.length - 1) !== "%") return !1;
  let n = e.slice(0, -1),
    r = parseFloat(n);
  return rn(r);
}
function Pk(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return rn(n) ? n : 50;
}
function BS(e) {
  return Rk(e) ? Pk(e) / 100 : e === "left" ? 0 : e === "right" ? 1 : 0.5;
}
function $S(e) {
  return Rk(e) ? Pk(e) / 100 : e === "top" ? 0 : e === "bottom" ? 1 : 0.5;
}
function U5(e, t, n, r) {
  if (
    ((e = Ke.get(e, "#09F")),
    !_i.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)
  )
    return;
  let i = e.pixelWidth,
    o = e.pixelHeight,
    s,
    { fit: a } = e,
    l = 1,
    c = 1,
    u = 0,
    f = 0;
  if (a === "fill" || a === "fit" || a === "tile" || !a) {
    let m = 1,
      y = 1,
      g = i / o,
      x = t.height * g,
      p = t.width / g,
      h = x / t.width,
      v = p / t.height;
    if (a === "tile") {
      e.backgroundSize ?? (e.backgroundSize = 1),
        (l = Math.round(e.backgroundSize * (i / 2))),
        (c = Math.round(e.backgroundSize * (o / 2)));
      let S = t.x ?? 0,
        k = t.y ?? 0,
        w = 0,
        T = 0;
      r && ((w = S), (T = k)),
        (u = (t.width - l) * BS(e.positionX) + w),
        (f = (t.height - c) * $S(e.positionY) + T),
        (s = `translate(${u + S}, ${f + k})`);
    } else
      (a === "fill" || !a ? v > h : v < h)
        ? ((y = v), (f = (1 - v) * $S(e.positionY)))
        : ((m = h), (u = (1 - h) * BS(e.positionX))),
        (s = `translate(${u}, ${f}) scale(${m}, ${y})`);
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? "",
    transform: s,
    width: l,
    height: c,
    offsetX: u,
    offsetY: f,
  };
}
var X5 = "framer/asset-reference,";
function Y5(e) {
  return e.startsWith(`data:${X5}`);
}
function G5(e, t) {
  if (/^\w+:/.test(e) && !Y5(e)) return e;
  typeof t != "number"
    ? (t = void 0)
    : t <= 512
    ? (t = 512)
    : t <= 1024
    ? (t = 1024)
    : t <= 2048
    ? (t = 2048)
    : (t = 4096);
  let n = ie.current() === ie.export;
  return et.assetResolver(e, { pixelSize: t, isExport: n }) ?? "";
}
var K5 = ({
    id: e,
    path: t,
    transform: n,
    repeat: r,
    width: i,
    height: o,
    offsetX: s,
    offsetY: a,
  }) => {
    let l = G5(t);
    return C("pattern", {
      id: e,
      width: r ? i : "100%",
      height: r ? o : "100%",
      patternContentUnits: r ? void 0 : "objectBoundingBox",
      patternUnits: r ? "userSpaceOnUse" : void 0,
      x: r ? s : void 0,
      y: r ? a : void 0,
      children: C(
        "image",
        {
          width: r ? i : 1,
          height: r ? o : 1,
          href: l,
          preserveAspectRatio: "none",
          transform: r ? void 0 : n,
          x: r ? 0 : void 0,
          y: r ? 0 : void 0,
        },
        l
      ),
    });
  },
  zS = Di(),
  q5 = class {
    constructor(e, t, n, r, i = 0) {
      (this.id = e),
        (this.svg = t),
        (this.innerHTML = n),
        (this.viewBox = r),
        (this.count = i);
    }
  },
  Q5 = class {
    constructor() {
      R(this, "entries", new Map());
    }
    debugGetEntries() {
      return this.entries;
    }
    subscribe(e, t, n) {
      if (!e || e === "") return "";
      let r = this.entries.get(e);
      if (!r) {
        n || (n = "svg" + String(Ow(e)) + "_" + String(e.length));
        let i = e,
          o,
          s = Z5(e);
        s && (t && J5(s, n), (s.id = n), (o = r4(s)), (i = s.outerHTML)),
          (r = this.createDOMElementFor(i, n, o)),
          this.entries.set(e, r);
      }
      return (r.count += 1), r.innerHTML;
    }
    getViewBox(e) {
      if (!e || e === "") return;
      let t = this.entries.get(e);
      return t?.viewBox;
    }
    unsubscribe(e) {
      if (!e || e === "") return;
      let t = this.entries.get(e);
      t &&
        ((t.count -= 1),
        !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
    }
    maybeRemoveEntry(e) {
      let t = this.entries.get(e);
      t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
    }
    removeDOMElement(e) {
      let t = "container_" + e.id;
      if (zS) {
        let n = document?.querySelector("#" + t);
        n?.remove();
      }
    }
    createDOMElementFor(e, t, n) {
      let r = "container_" + t;
      if (zS) {
        let a = document.querySelector("#svg-templates");
        if (
          (a ||
            ((a = document.createElement("div")),
            (a.id = "svg-templates"),
            (a.style.position = "absolute"),
            (a.style.top = "0"),
            (a.style.left = "0"),
            (a.style.width = "0"),
            (a.style.height = "0"),
            (a.style.overflow = "hidden"),
            document.body.appendChild(a)),
          !document.querySelector("#" + r))
        ) {
          let l = document.createElement("div");
          (l.id = r),
            (l.innerHTML = e),
            l.firstElementChild && (l.firstElementChild.id = t),
            a.appendChild(l);
        }
      }
      let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
        s = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 100%; height: 100%"${
          i ? ` viewBox="${i}"` : ""
        }><use href="#${t}"></use></svg>`;
      return new q5(t, e, s, i);
    }
    clear() {
      this.entries.clear();
    }
    generateTemplates() {
      let e = [],
        t =
          "position: absolute; overflow: hidden; top: 0; left: 0; width: 0; height: 0";
      e.push(`<div id="svg-templates" style="${t}">`);
      for (let n of this.entries.values()) {
        let r = "container_" + n.id;
        e.push(`  <div id="${r}">`), e.push(`    ${n.svg}`), e.push("  </div>");
      }
      return (
        e.push("</div>"),
        e.join(`
`)
      );
    }
  },
  Do = new Q5();
function Z5(e) {
  if (typeof DOMParser > "u") {
    console.warn("unable to find DOMParser");
    return;
  }
  try {
    let r = new DOMParser()
      .parseFromString(e, "text/html")
      .getElementsByTagName("svg")[0];
    if (!r) throw Error("no svg element found");
    return r;
  } catch {
    return;
  }
}
function J5(e, t) {
  let n = e4(t);
  _k(e, n);
}
function e4(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, "");
}
function _k(e, t) {
  t4(e, t),
    Array.from(e.children).forEach((r) => {
      _k(r, t);
    });
}
function t4(e, t) {
  e.getAttributeNames().forEach((r) => {
    let i = e.getAttribute(r);
    if (!i) return;
    if (
      (r === "id" && e.setAttribute(r, `${t}_${i}`),
      r === "href" || r === "xlink:href")
    ) {
      let [s, a] = i.split("#");
      if (s) return;
      e.setAttribute(r, `#${t}_${a}`);
      return;
    }
    let o = "url(#";
    if (i.includes(o)) {
      let s = i.replace(o, `${o}${t}_`);
      e.setAttribute(r, s);
    }
  });
}
var n4 = (() => ({
  cm: 96 / 2.54,
  mm: 96 / 2.54 / 10,
  Q: 96 / 2.54 / 40,
  in: 96,
  pc: 96 / 6,
  pt: 96 / 72,
  px: 1,
  em: 16,
  ex: 8,
  ch: 8,
  rem: 16,
}))();
function NS(e) {
  var t;
  if (!e) return;
  let n = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (
    !(n?.[1] === void 0 || n?.[2] === void 0) &&
    !((t = n[2]) != null && t.startsWith("%"))
  )
    return Math.round(parseFloat(n[1]) * (n4[n[2]] || 1));
}
function r4(e) {
  let t = NS(e.getAttribute("width")),
    n = NS(e.getAttribute("height"));
  if (!(typeof t != "number" || typeof n != "number") && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function V8(e) {
  let t = Ta(),
    n = Ra(e),
    r = b.useRef(null),
    i = o5();
  return (
    du(e, r),
    C(c4, { ...e, innerRef: r, parentSize: t, layoutId: n, providedWindow: i })
  );
}
var i4 = 5e4;
function o4(e) {
  return e.indexOf("image") >= 0;
}
function s4(e) {
  return e.indexOf("var(--") >= 0;
}
function a4(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function HS(e, t) {
  var n, r;
  let i = e.current;
  if (!i) return;
  let o = t.providedWindow ?? Bt,
    s = i.firstElementChild;
  if (!s || !(s instanceof o.SVGSVGElement)) return;
  if (!s.getAttribute("viewBox")) {
    let m = Do.getViewBox(t.svg);
    m && s.setAttribute("viewBox", m);
  }
  let { withExternalLayout: a, parentSize: l } = t;
  if (!a && Ca(t) && l !== 1 && l !== 2) return;
  let { intrinsicWidth: u, intrinsicHeight: f, _constraints: d } = t;
  ((n = s.viewBox.baseVal) == null ? void 0 : n.width) === 0 &&
    ((r = s.viewBox.baseVal) == null ? void 0 : r.height) === 0 &&
    q(u) &&
    q(f) &&
    s.setAttribute("viewBox", `0 0 ${u} ${f}`),
    d && d.aspectRatio
      ? s.setAttribute("preserveAspectRatio", "")
      : s.setAttribute("preserveAspectRatio", "none"),
    s.setAttribute("width", "100%"),
    s.setAttribute("height", "100%");
}
function l4() {
  return (
    b.useInsertionEffect(() => {
      Ea();
    }, []),
    null
  );
}
var c4 = (() => {
  var e;
  return (
    (e = class extends Xc {
      constructor() {
        super(...arguments),
          R(this, "container", b.createRef()),
          R(this, "svgElement", null),
          R(this, "setSVGElement", (t) => {
            (this.svgElement = t), this.setLayerElement(t);
          }),
          R(this, "previouslyRenderedSVG", ""),
          R(this, "unmountedSVG", "");
      }
      static frame(t) {
        return da(t, t.parentSize || 0);
      }
      get frame() {
        return da(this.props, this.props.parentSize || 0);
      }
      componentDidMount() {
        if (this.unmountedSVG) {
          let { svgContentId: t } = this.props,
            n = t ? "svg" + t : null;
          Do.subscribe(this.unmountedSVG, !t, n),
            (this.previouslyRenderedSVG = this.unmountedSVG);
        }
        this.props.svgContentId || HS(this.container, this.props);
      }
      componentWillUnmount() {
        Do.unsubscribe(this.previouslyRenderedSVG),
          (this.unmountedSVG = this.previouslyRenderedSVG),
          (this.previouslyRenderedSVG = "");
      }
      componentDidUpdate(t) {
        if ((super.componentDidUpdate(t), this.props.svgContentId)) return;
        let { fill: n } = this.props;
        _i.isImageObject(n) &&
          _i.isImageObject(t.fill) &&
          n.src !== t.fill.src &&
          Mw(this.svgElement, "fill", null, !1),
          HS(this.container, this.props);
      }
      collectLayout(t, n) {
        if (this.props.withExternalLayout) {
          (n.width = "100%"), (n.height = "100%"), (n.aspectRatio = "inherit");
          return;
        }
        let r = this.frame,
          {
            rotation: i,
            intrinsicWidth: o,
            intrinsicHeight: s,
            width: a,
            height: l,
          } = this.props,
          c = Ke.getNumber(i);
        if (
          ((t.opacity = q(this.props.opacity) ? this.props.opacity : 1),
          ie.hasRestrictions() && r)
        ) {
          Object.assign(t, {
            transform: `translate(${r.x}px, ${r.y}px) rotate(${c.toFixed(
              4
            )}deg)`,
            width: `${r.width}px`,
            height: `${r.height}px`,
          }),
            Ca(this.props) && (t.position = "absolute");
          let u = r.width / (o || 1),
            f = r.height / (s || 1);
          n.transformOrigin = "top left";
          let { zoom: d, target: m } = Zc;
          if (m === ie.export) {
            let y = d > 1 ? d : 1;
            (n.transform = `scale(${u * y}, ${f * y})`), (n.zoom = 1 / y);
          } else n.transform = `scale(${u}, ${f})`;
          o && s && ((n.width = o), (n.height = s));
        } else {
          let { left: u, right: f, top: d, bottom: m } = this.props;
          Object.assign(t, {
            left: u,
            right: f,
            top: d,
            bottom: m,
            width: a,
            height: l,
            rotate: c,
          }),
            Object.assign(n, {
              left: 0,
              top: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
            });
        }
      }
      render() {
        let {
          id: t,
          visible: n,
          style: r,
          fill: i,
          svg: o,
          intrinsicHeight: s,
          intrinsicWidth: a,
          title: l,
          description: c,
          layoutId: u,
          className: f,
          variants: d,
          withExternalLayout: m,
          innerRef: y,
          svgContentId: g,
          height: x,
          opacity: p,
          width: h,
          ...v
        } = this.props;
        if (!m && (!n || !t)) return null;
        let S = t ?? u ?? "svg",
          k = this.frame,
          w = k || { width: a || 100, height: s || 100 },
          T = { ...r, imageRendering: "pixelated", flexShrink: 0 },
          E = {};
        this.collectLayout(T, E),
          RD(this.props, T),
          rm(this.props, T),
          Xc.applyWillChange(this.props, T, !1);
        let F = null;
        if (typeof i == "string" || j.isColorObject(i)) {
          let W = j.isColorObject(i) ? i.initialValue || j.toRgbString(i) : i;
          (T.fill = W), (T.color = W);
        } else if (pa.isLinearGradient(i)) {
          let W = i,
            te = `${encodeURI(t || "")}g${pa.hash(W)}`;
          T.fill = `url(#${te})`;
          let { stops: ne, x1: ye, x2: de, y1: Q, y2: gt } = j5(W, S);
          F = C("svg", {
            ref: this.setSVGElement,
            xmlns: "http://www.w3.org/2000/svg",
            width: "100%",
            height: "100%",
            style: { position: "absolute" },
            children: C("linearGradient", {
              id: te,
              x1: ye,
              x2: de,
              y1: Q,
              y2: gt,
              children: ne.map((Ve, Xe) =>
                C(
                  "stop",
                  {
                    offset: Ve.position,
                    stopColor: Ve.color,
                    stopOpacity: Ve.alpha,
                  },
                  Xe
                )
              ),
            }),
          });
        } else if (ma.isRadialGradient(i)) {
          let W = i,
            te = `${encodeURI(t || "")}g${ma.hash(W)}`;
          T.fill = `url(#${te})`;
          let ne = W5(W, S);
          F = C("svg", {
            ref: this.setSVGElement,
            xmlns: "http://www.w3.org/2000/svg",
            width: "100%",
            height: "100%",
            style: { position: "absolute" },
            children: C("radialGradient", {
              id: te,
              cy: W.centerAnchorY,
              cx: W.centerAnchorX,
              r: W.widthFactor,
              children: ne.stops.map((ye, de) =>
                C(
                  "stop",
                  {
                    offset: ye.position,
                    stopColor: ye.color,
                    stopOpacity: ye.alpha,
                  },
                  de
                )
              ),
            }),
          });
        } else if (_i.isImageObject(i)) {
          let W = U5(i, w, S);
          W &&
            ((T.fill = `url(#${W.id})`),
            (F = C("svg", {
              ref: this.setSVGElement,
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              width: "100%",
              height: "100%",
              style: { position: "absolute" },
              children: C("defs", { children: C(K5, { ...W }) }),
            })));
        }
        let I = { "data-framer-component-type": "SVG" },
          z = !k;
        z && Object.assign(I, Rw(this.props.center));
        let $ =
            !F &&
            !T.fill &&
            !T.background &&
            !T.backgroundImage &&
            o.length < i4 &&
            !o4(o) &&
            !s4(o),
          re = null;
        if ($)
          (T.backgroundSize = "100% 100%"),
            (T.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(
              o
            )}')`),
            Do.unsubscribe(this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = "");
        else {
          let W = g ? "svg" + g : null,
            te = Do.subscribe(o, !g, W);
          Do.unsubscribe(this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = o),
            a4(T) && (T.overflow = "hidden"),
            (re = se(Fe, {
              children: [
                F,
                C(
                  "div",
                  {
                    className: "svgContainer",
                    style: E,
                    ref: this.container,
                    dangerouslySetInnerHTML: { __html: te },
                  },
                  _i.isImageObject(i) ? i.src : ""
                ),
              ],
            }));
        }
        let J = cu(this.props.as),
          { href: V, target: X, rel: Z, onClick: ee } = this.props;
        return se(J, {
          ...I,
          ...v,
          layoutId: u,
          transformTemplate: z ? uu(this.props.center) : void 0,
          id: t,
          ref: y,
          style: T,
          className: f,
          variants: d,
          tabIndex: this.props.tabIndex,
          role: l || c ? "img" : void 0,
          "aria-label": l,
          "aria-description": c,
          href: V,
          target: X,
          rel: Z,
          onClick: ee,
          children: [re, C(l4, {})],
        });
      }
    }),
    R(e, "supportsConstraints", !0),
    R(e, "defaultSVGProps", {
      left: void 0,
      right: void 0,
      top: void 0,
      bottom: void 0,
      style: void 0,
      _constraints: { enabled: !0, aspectRatio: null },
      parentSize: 0,
      rotation: 0,
      visible: !0,
      svg: "",
      shadows: [],
    }),
    R(e, "defaultProps", { ...Xc.defaultProps, ...e.defaultSVGProps }),
    e
  );
})();
function Y8(e, t, n) {
  let r = Ik(t);
  !n?.supportsExplicitInterCodegen &&
    !r.some((i) => i.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r });
}
function G8(e) {
  return e.fonts ?? [];
}
function K8(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : Ik(e);
}
function Ik(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e) f4(r) ? n.push(r) : t.fonts.push(d4(r));
  return t.fonts.length > 0 && n.push(t), n;
}
var u4 = "explicitInter";
function f4(e) {
  return u4 in e;
}
function d4(e) {
  let t;
  return (
    e.url.startsWith("https://fonts.gstatic.com/s/")
      ? (t = "google")
      : e.url.startsWith("./third-party-assets/fontshare/")
      ? (t = "fontshare")
      : (t = "custom"),
    { ...e, source: t }
  );
}
function q8(e, t) {
  let n = `${e}-start`;
  performance.mark(n), t();
  let r = `${e}-end`;
  performance.mark(r), performance.measure(e, n, r);
}
fl.prototype.addChild = function ({ transformer: e = (t) => t }) {
  let t = Oe(e(this.get()));
  return this.onChange((n) => t.set(e(n))), t;
};
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ /*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ export {
  b as a,
  ni as b,
  Aa as c,
  je as d,
  zi as e,
  D as f,
  H as g,
  ri as h,
  qe as i,
  oe as j,
  A as k,
  Rt as l,
  Pt as m,
  C as n,
  se as o,
  Jn as p,
  Ut as q,
  Vy as r,
  p1 as s,
  WI as t,
  D$ as u,
  $$ as v,
  N$ as w,
  H$ as x,
  qF as y,
  ow as z,
  oz as A,
  ie as B,
  hz as C,
  JL as D,
  yz as E,
  KM as F,
  bz as G,
  Ez as H,
  tu as I,
  JA as J,
  rN as K,
  cN as L,
  uN as M,
  vN as N,
  tk as O,
  aV as P,
  wN as Q,
  mV as R,
  PN as S,
  MN as T,
  VN as U,
  BN as V,
  $N as W,
  zN as X,
  NN as Y,
  HN as Z,
  WN as _,
  YN as $,
  GN as aa,
  i8 as ba,
  qc as ca,
  P8 as da,
  M8 as ea,
  Do as fa,
  V8 as ga,
  Y8 as ha,
  G8 as ia,
  K8 as ja,
  q8 as ka,
};
//# sourceMappingURL=chunk-PZ56XCP3.mjs.map
