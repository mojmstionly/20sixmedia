import { a as fe } from "./chunk-J65WS7YR.mjs";
import {
  a as O,
  b as ne,
  c as se,
  d as Ie,
  e as Ae,
  f as Le,
} from "./chunk-ODGRT25I.mjs";
import "./chunk-42U43NKG.mjs";
import {
  $ as ve,
  A as me,
  D as ae,
  G as he,
  I as P,
  J as ge,
  L as xe,
  M as y,
  N as k,
  P as Z,
  Q as ue,
  R as ye,
  S as we,
  U as i,
  _ as be,
  b as r,
  ba as te,
  ca as w,
  d as S,
  da as x,
  ea as t,
  f as ee,
  h as G,
  ha as D,
  i as pe,
  ia as z,
  j as re,
  ja as q,
  k as _,
  n as e,
  o as n,
  p as H,
  q as f,
  r as K,
  y as W,
} from "./chunk-PZ56XCP3.mjs";
import "./chunk-ELYU6EKT.mjs";
w.loadFonts([
  "GF;Poppins-regular",
  "GF;Poppins-700",
  "GF;Poppins-700italic",
  "GF;Poppins-italic",
]);
var Be = [
    {
      family: "Poppins",
      style: "normal",
      url: "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJXUc1NECPY.woff2",
      weight: "400",
    },
    {
      family: "Poppins",
      style: "normal",
      url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7V15vFP-KUEg.woff2",
      weight: "700",
    },
    {
      family: "Poppins",
      style: "italic",
      url: "https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmy15lFd2PQEhcqw.woff2",
      weight: "700",
    },
    {
      family: "Poppins",
      style: "italic",
      url: "https://fonts.gstatic.com/s/poppins/v20/pxiGyp8kv8JHgFVrJJLecnFBGPaTSQ.woff2",
      weight: "400",
    },
  ],
  Me = [
    '.framer-teIPf .framer-styles-preset-kzbo35:not(.rich-text-wrapper), .framer-teIPf .framer-styles-preset-kzbo35.rich-text-wrapper p { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #333333; --framer-text-decoration: none; --framer-text-transform: none; }',
  ],
  _e = "framer-teIPf";
var er = ["eGN72eLsA", "tTKE13b5j"],
  rr = "framer-B8Tfd",
  ar = { eGN72eLsA: "framer-v-1ra41hq", tTKE13b5j: "framer-v-oibwib" };
function le(o, ...m) {
  let l = {};
  return m?.forEach((s) => s && Object.assign(l, o[s])), l;
}
var tr = {
    default: { damping: 40, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  },
  nr = ({ value: o, children: m }) => {
    let l = ee(H),
      s = o ?? l.transition,
      p = re(() => ({ ...l, transition: s }), [JSON.stringify(s)]);
    return e(H.Provider, { value: p, children: m });
  },
  ir = { Closed: "eGN72eLsA", Open: "tTKE13b5j" },
  or = ({ answer: o, height: m, id: l, question: s, width: p, ...c }) => {
    var d, b, v, a;
    return {
      ...c,
      T8rQFvSBR:
        (d = o ?? c.T8rQFvSBR) !== null && d !== void 0
          ? d
          : "Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.",
      variant:
        (v = (b = ir[c.variant]) !== null && b !== void 0 ? b : c.variant) !==
          null && v !== void 0
          ? v
          : "eGN72eLsA",
      W88zB8mIG:
        (a = s ?? c.W88zB8mIG) !== null && a !== void 0
          ? a
          : "Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.",
    };
  },
  mr = (o, m) => m.join("-") + o.layoutDependency,
  sr = S(function (o, m) {
    let { activeLocale: l, setLocale: s } = W(),
      {
        style: p,
        className: c,
        layoutId: d,
        variant: b,
        W88zB8mIG: v,
        T8rQFvSBR: a,
        ...X
      } = or(o),
      {
        baseVariant: L,
        classNames: $,
        gestureVariant: T,
        setGestureState: B,
        setVariant: R,
        transition: M,
        variants: V,
      } = te({
        cycleOrder: er,
        defaultVariant: "eGN72eLsA",
        transitions: tr,
        variant: b,
        variantClassNames: ar,
      }),
      g = mr(o, V),
      { activeVariantCallback: h, delay: J } = be(L),
      u = h(async (...Xe) => {
        R("tTKE13b5j");
      }),
      Je = h(async (...Xe) => {
        R("eGN72eLsA");
      }),
      Oe = _(null),
      Ue = () => L === "tTKE13b5j",
      Qe = G(),
      Ye = [_e];
    return e(K, {
      id: d ?? Qe,
      children: e(nr, {
        value: M,
        children: n(f.div, {
          ...X,
          animate: V,
          className: P(rr, ...Ye, "framer-1ra41hq", c, $),
          "data-border": !0,
          "data-framer-name": "Closed",
          initial: b,
          layoutDependency: g,
          layoutId: "eGN72eLsA",
          onHoverEnd: () => B({ isHovered: !1 }),
          onHoverStart: () => B({ isHovered: !0 }),
          onTap: () => B({ isPressed: !1 }),
          onTapCancel: () => B({ isPressed: !1 }),
          onTapStart: () => B({ isPressed: !0 }),
          ref: m ?? Oe,
          style: {
            "--border-bottom-width": "1px",
            "--border-color": "rgb(42, 42, 42)",
            "--border-left-width": "1px",
            "--border-right-width": "1px",
            "--border-style": "solid",
            "--border-top-width": "1px",
            backgroundColor: "rgb(20, 20, 20)",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            ...p,
          },
          variants: {
            tTKE13b5j: {
              "--border-bottom-width": "0px",
              "--border-left-width": "0px",
              "--border-right-width": "0px",
              "--border-top-width": "0px",
              backgroundColor:
                "var(--token-b2d46a9a-7086-4510-b190-0e49cb95f7e0, rgb(255, 255, 255))",
            },
          },
          ...le({ tTKE13b5j: { "data-framer-name": "Open" } }, L, T),
          children: [
            n(f.div, {
              className: "framer-s0on2h",
              "data-framer-name": "Question",
              "data-highlight": !0,
              layoutDependency: g,
              layoutId: "kYDa4OqmW",
              onTap: u,
              ...le({ tTKE13b5j: { onTap: Je } }, L, T),
              children: [
                e(t, {
                  __fromCanvasComponent: !0,
                  children: e(r, {
                    children: e(f.p, {
                      style: {
                        "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                        "--framer-font-family":
                          '"Poppins", "Poppins Placeholder", sans-serif',
                        "--framer-font-size": "18px",
                        "--framer-font-weight": "600",
                        "--framer-letter-spacing": "0px",
                        "--framer-line-height": "1.5em",
                        "--framer-text-alignment": "left",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-b2d46a9a-7086-4510-b190-0e49cb95f7e0, rgb(255, 255, 255)))",
                      },
                      children:
                        "Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.",
                    }),
                  }),
                  className: "framer-7k6bfx",
                  fonts: ["GF;Poppins-600"],
                  layoutDependency: g,
                  layoutId: "n00iVLbnt",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--token-b2d46a9a-7086-4510-b190-0e49cb95f7e0, rgb(255, 255, 255))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--framer-paragraph-spacing": "0px",
                  },
                  text: v,
                  variants: {
                    tTKE13b5j: {
                      "--extracted-r6o4lv":
                        "var(--token-0f104747-29de-46c1-8589-fc9ea99cf2d8, rgb(20, 21, 28))",
                    },
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...le(
                    {
                      tTKE13b5j: {
                        children: e(r, {
                          children: e(f.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-size": "18px",
                              "--framer-font-weight": "600",
                              "--framer-letter-spacing": "0px",
                              "--framer-line-height": "1.5em",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-0f104747-29de-46c1-8589-fc9ea99cf2d8, rgb(20, 21, 28)))",
                            },
                            children:
                              "Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.",
                          }),
                        }),
                      },
                    },
                    L,
                    T
                  ),
                }),
                n(f.div, {
                  className: "framer-zvd2et",
                  "data-framer-name": "Plus",
                  layoutDependency: g,
                  layoutId: "LshYeU6_H",
                  style: { rotate: 0 },
                  variants: { tTKE13b5j: { rotate: 45 } },
                  children: [
                    e(f.div, {
                      className: "framer-wk2d3g",
                      layoutDependency: g,
                      layoutId: "xqToYxrKy",
                      style: {
                        backgroundColor:
                          "var(--token-b15f52a3-2b24-428c-b96d-73fbbc94d41a, rgb(255, 255, 255))",
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      },
                      variants: {
                        tTKE13b5j: {
                          backgroundColor:
                            "var(--token-0f104747-29de-46c1-8589-fc9ea99cf2d8, rgb(20, 21, 28))",
                        },
                      },
                    }),
                    e(f.div, {
                      className: "framer-152tyhh",
                      layoutDependency: g,
                      layoutId: "ORf6B5FwF",
                      style: {
                        backgroundColor:
                          "var(--token-b15f52a3-2b24-428c-b96d-73fbbc94d41a, rgb(255, 255, 255))",
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      },
                      variants: {
                        tTKE13b5j: {
                          backgroundColor:
                            "var(--token-0f104747-29de-46c1-8589-fc9ea99cf2d8, rgb(20, 21, 28))",
                        },
                      },
                    }),
                  ],
                }),
              ],
            }),
            Ue() &&
              e(f.div, {
                className: "framer-1iv3pba",
                "data-framer-name": "Answer",
                layoutDependency: g,
                layoutId: "RR3O6Bj3l",
                style: { opacity: 0 },
                variants: { tTKE13b5j: { opacity: 1 } },
                children: e(t, {
                  __fromCanvasComponent: !0,
                  children: e(r, {
                    children: e(f.p, {
                      className: "framer-styles-preset-kzbo35",
                      "data-styles-preset": "B1ozDEm5v",
                      children:
                        "Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.",
                    }),
                  }),
                  className: "framer-t0hzmd",
                  layoutDependency: g,
                  layoutId: "QiLPFqUah",
                  style: { "--framer-paragraph-spacing": "0px", opacity: 0.6 },
                  text: a,
                  variants: { tTKE13b5j: { opacity: 1 } },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              }),
          ],
        }),
      }),
    });
  }),
  fr = [
    '.framer-B8Tfd[data-border="true"]::after, .framer-B8Tfd [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-B8Tfd.framer-dmjpgy, .framer-B8Tfd .framer-dmjpgy { display: block; }",
    ".framer-B8Tfd.framer-1ra41hq { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 400px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-B8Tfd .framer-s0on2h { -webkit-user-select: none; align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px 20px 20px 24px; position: relative; user-select: none; width: 100%; }",
    ".framer-B8Tfd .framer-7k6bfx { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-B8Tfd .framer-zvd2et { flex: none; height: 16px; overflow: hidden; position: relative; width: 16px; z-index: 1; }",
    ".framer-B8Tfd .framer-wk2d3g { flex: none; height: 2px; left: calc(50.00000000000002% - 16px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 2px / 2); width: 16px; }",
    ".framer-B8Tfd .framer-152tyhh { flex: none; height: 16px; left: calc(50.00000000000002% - 2px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 16px / 2); width: 2px; }",
    ".framer-B8Tfd .framer-1iv3pba { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 20px 20px 24px; position: relative; width: 100%; }",
    ".framer-B8Tfd .framer-t0hzmd { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-B8Tfd.framer-1ra41hq, .framer-B8Tfd .framer-s0on2h, .framer-B8Tfd .framer-1iv3pba { gap: 0px; } .framer-B8Tfd.framer-1ra41hq > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-B8Tfd.framer-1ra41hq > :first-child, .framer-B8Tfd .framer-1iv3pba > :first-child { margin-top: 0px; } .framer-B8Tfd.framer-1ra41hq > :last-child, .framer-B8Tfd .framer-1iv3pba > :last-child { margin-bottom: 0px; } .framer-B8Tfd .framer-s0on2h > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-B8Tfd .framer-s0on2h > :first-child { margin-left: 0px; } .framer-B8Tfd .framer-s0on2h > :last-child { margin-right: 0px; } .framer-B8Tfd .framer-1iv3pba > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }",
    ...Me,
  ],
  U = Z(sr, fr, "framer-B8Tfd"),
  Q = U;
U.displayName = "Row";
U.defaultProps = { height: 121, width: 400 };
he(U, {
  variant: {
    options: ["eGN72eLsA", "tTKE13b5j"],
    optionTitles: ["Closed", "Open"],
    title: "Variant",
    type: ae.Enum,
  },
  W88zB8mIG: {
    defaultValue:
      "Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.",
    displayTextArea: !0,
    title: "Question",
    type: ae.String,
  },
  T8rQFvSBR: {
    defaultValue:
      "Framer is a web builder for creative pros. Be sure to check out framer.com to learn more.",
    displayTextArea: !0,
    title: "Answer",
    type: ae.String,
  },
});
D(U, [
  {
    family: "Poppins",
    style: "normal",
    url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6V15vFP-KUEg.woff2",
    weight: "600",
  },
  ...Be,
]);
var lr = z(Q),
  cr = ["xDKQhgqld"],
  dr = "framer-y3IV5",
  pr = { xDKQhgqld: "framer-v-5hidhi" };
var hr = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  gr = ({ value: o, children: m }) => {
    let l = ee(H),
      s = o ?? l.transition,
      p = re(() => ({ ...l, transition: s }), [JSON.stringify(s)]);
    return e(H.Provider, { value: p, children: m });
  },
  xr = f(r),
  ur = ({ height: o, id: m, width: l, ...s }) => ({ ...s }),
  yr = (o, m) =>
    o.layoutDependency ? m.join("-") + o.layoutDependency : m.join("-"),
  wr = S(function (o, m) {
    let { activeLocale: l, setLocale: s } = W(),
      { style: p, className: c, layoutId: d, variant: b, ...v } = ur(o),
      {
        baseVariant: a,
        classNames: X,
        gestureHandlers: L,
        gestureVariant: $,
        setGestureState: T,
        setVariant: B,
        variants: R,
      } = te({
        cycleOrder: cr,
        defaultVariant: "xDKQhgqld",
        variant: b,
        variantClassNames: pr,
      }),
      M = yr(o, R),
      V = _(null),
      g = G(),
      h = [],
      J = xe();
    return e(K, {
      id: d ?? g,
      children: e(xr, {
        animate: R,
        initial: !1,
        children: e(gr, {
          value: hr,
          children: n(f.div, {
            ...v,
            ...L,
            className: P(dr, ...h, "framer-5hidhi", c, X),
            "data-framer-name": "Variant 1",
            layoutDependency: M,
            layoutId: "xDKQhgqld",
            ref: m ?? V,
            style: { ...p },
            children: [
              e(y, {
                children: e(f.div, {
                  className: "framer-1e60r4y-container",
                  layoutDependency: M,
                  layoutId: "R8709ONvl-container",
                  children: e(Q, {
                    height: "100%",
                    id: "R8709ONvl",
                    layoutId: "R8709ONvl",
                    style: { width: "100%" },
                    T8rQFvSBR:
                      "We don't have a set-in-stone pricing because every client has different needs. This is why we offer a free consultation call where we will get to know you and your business. Only then would we be able to give you a pricing offer.",
                    variant: "eGN72eLsA",
                    W88zB8mIG: "What is your pricing?",
                    width: "100%",
                  }),
                }),
              }),
              e(y, {
                children: e(f.div, {
                  className: "framer-gkxxr-container",
                  layoutDependency: M,
                  layoutId: "srynO9AnT-container",
                  children: e(Q, {
                    height: "100%",
                    id: "srynO9AnT",
                    layoutId: "srynO9AnT",
                    style: { width: "100%" },
                    T8rQFvSBR:
                      "We pride ourselves in the fact that we've built up a team of experts in every domain of email marketing. We don't outsource work to VAs, and we make sure what we deliver is pure quality.",
                    variant: "eGN72eLsA",
                    W88zB8mIG: "How are you different than other agencies?",
                    width: "100%",
                  }),
                }),
              }),
              e(y, {
                children: e(f.div, {
                  className: "framer-1s3cuq3-container",
                  layoutDependency: M,
                  layoutId: "H1bgquHM0-container",
                  children: e(Q, {
                    height: "100%",
                    id: "H1bgquHM0",
                    layoutId: "H1bgquHM0",
                    style: { width: "100%" },
                    T8rQFvSBR:
                      "Yes, we do ! We can provide guaranteed reach through strategic organic promotions !",
                    variant: "eGN72eLsA",
                    W88zB8mIG: "Do you offer a guarantee?",
                    width: "100%",
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  br = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-y3IV5.framer-fp1zac, .framer-y3IV5 .framer-fp1zac { display: block; }",
    ".framer-y3IV5.framer-5hidhi { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1000px; }",
    ".framer-y3IV5 .framer-1e60r4y-container, .framer-y3IV5 .framer-gkxxr-container, .framer-y3IV5 .framer-1s3cuq3-container { flex: none; height: auto; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-y3IV5.framer-5hidhi { gap: 0px; } .framer-y3IV5.framer-5hidhi > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-y3IV5.framer-5hidhi > :first-child { margin-top: 0px; } .framer-y3IV5.framer-5hidhi > :last-child { margin-bottom: 0px; } }",
  ],
  ie = Z(wr, br, "framer-y3IV5"),
  ce = ie;
ie.displayName = "Accordion";
ie.defaultProps = { height: 221, width: 1e3 };
D(ie, [{ explicitInter: !0, fonts: [] }, ...lr], {
  supportsExplicitInterCodegen: !0,
});
w.loadFonts([
  "GF;Poppins-regular",
  "GF;Poppins-700",
  "GF;Poppins-700italic",
  "GF;Poppins-italic",
]);
var Ne = [
    {
      family: "Poppins",
      style: "normal",
      url: "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJXUc1NECPY.woff2",
      weight: "400",
    },
    {
      family: "Poppins",
      style: "normal",
      url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7V15vFP-KUEg.woff2",
      weight: "700",
    },
    {
      family: "Poppins",
      style: "italic",
      url: "https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmy15lFd2PQEhcqw.woff2",
      weight: "700",
    },
    {
      family: "Poppins",
      style: "italic",
      url: "https://fonts.gstatic.com/s/poppins/v20/pxiGyp8kv8JHgFVrJJLecnFBGPaTSQ.woff2",
      weight: "400",
    },
  ],
  je = [
    '.framer-teIPf .framer-styles-preset-kzbo35:not(.rich-text-wrapper), .framer-teIPf .framer-styles-preset-kzbo35.rich-text-wrapper p { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #333333; --framer-text-decoration: none; --framer-text-transform: none; }',
  ],
  Ce = "framer-teIPf";
w.loadFonts(["FS;Clash Grotesk-semibold", "FS;Clash Grotesk-bold"]);
var Fe = [
    {
      family: "Clash Grotesk",
      style: "normal",
      url: "./third-party-assets/fontshare/wf/MKEEQN57GWBZOSYWCRODNJOOZNPLMAKN/5SPTSZGHEACWWLF34DQ4WAA4OGU6PQIF/KN7DX4F6PXB74R6L2K2Y4NH3CB7FC53Q.woff2",
      weight: "600",
    },
    {
      family: "Clash Grotesk",
      style: "normal",
      url: "./third-party-assets/fontshare/wf/P6VJ47S3OYMUC7HYSJLTK7PEIK5O2NPQ/TK62VLUWA76PMTK2XWBNDZB7QVXJGYE3/I5W5NEJGYVFUC5I4XOXVET63OE5PSVHJ.woff2",
      weight: "700",
    },
  ],
  Re = [
    '.framer-M8EKT .framer-styles-preset-r3j3gm:not(.rich-text-wrapper), .framer-M8EKT .framer-styles-preset-r3j3gm.rich-text-wrapper h3 { --framer-font-family: "Clash Grotesk", "Clash Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Clash Grotesk", "Clash Grotesk Placeholder", sans-serif; --framer-font-size: 35px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: uppercase; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-M8EKT .framer-styles-preset-r3j3gm:not(.rich-text-wrapper), .framer-M8EKT .framer-styles-preset-r3j3gm.rich-text-wrapper h3 { --framer-font-family: "Clash Grotesk", "Clash Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Clash Grotesk", "Clash Grotesk Placeholder", sans-serif; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: uppercase; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-M8EKT .framer-styles-preset-r3j3gm:not(.rich-text-wrapper), .framer-M8EKT .framer-styles-preset-r3j3gm.rich-text-wrapper h3 { --framer-font-family: "Clash Grotesk", "Clash Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Clash Grotesk", "Clash Grotesk Placeholder", sans-serif; --framer-font-size: 25px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: uppercase; } }',
  ],
  Pe = "framer-M8EKT";
w.loadFonts(["FS;Clash Grotesk-semibold", "FS;Clash Grotesk-bold"]);
var ze = [
    {
      family: "Clash Grotesk",
      style: "normal",
      url: "./third-party-assets/fontshare/wf/MKEEQN57GWBZOSYWCRODNJOOZNPLMAKN/5SPTSZGHEACWWLF34DQ4WAA4OGU6PQIF/KN7DX4F6PXB74R6L2K2Y4NH3CB7FC53Q.woff2",
      weight: "600",
    },
    {
      family: "Clash Grotesk",
      style: "normal",
      url: "./third-party-assets/fontshare/wf/P6VJ47S3OYMUC7HYSJLTK7PEIK5O2NPQ/TK62VLUWA76PMTK2XWBNDZB7QVXJGYE3/I5W5NEJGYVFUC5I4XOXVET63OE5PSVHJ.woff2",
      weight: "700",
    },
  ],
  qe = [
    '.framer-cmzSO .framer-styles-preset-4mwkng:not(.rich-text-wrapper), .framer-cmzSO .framer-styles-preset-4mwkng.rich-text-wrapper h2 { --framer-font-family: "Clash Grotesk", "Clash Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Clash Grotesk", "Clash Grotesk Placeholder", sans-serif; --framer-font-size: 55px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-a785e7a8-cb8a-45b5-b67c-45aec4654626, #ffffff); --framer-text-decoration: none; --framer-text-transform: uppercase; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-cmzSO .framer-styles-preset-4mwkng:not(.rich-text-wrapper), .framer-cmzSO .framer-styles-preset-4mwkng.rich-text-wrapper h2 { --framer-font-family: "Clash Grotesk", "Clash Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Clash Grotesk", "Clash Grotesk Placeholder", sans-serif; --framer-font-size: 44px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-a785e7a8-cb8a-45b5-b67c-45aec4654626, #ffffff); --framer-text-decoration: none; --framer-text-transform: uppercase; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-cmzSO .framer-styles-preset-4mwkng:not(.rich-text-wrapper), .framer-cmzSO .framer-styles-preset-4mwkng.rich-text-wrapper h2 { --framer-font-family: "Clash Grotesk", "Clash Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Clash Grotesk", "Clash Grotesk Placeholder", sans-serif; --framer-font-size: 35px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-a785e7a8-cb8a-45b5-b67c-45aec4654626, #ffffff); --framer-text-decoration: none; --framer-text-transform: uppercase; } }',
  ],
  Ee = "framer-cmzSO";
w.loadFonts([
  "GF;Poppins-regular",
  "GF;Poppins-700",
  "GF;Poppins-700italic",
  "GF;Poppins-italic",
]);
var Te = [
    {
      family: "Poppins",
      style: "normal",
      url: "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJXUc1NECPY.woff2",
      weight: "400",
    },
    {
      family: "Poppins",
      style: "normal",
      url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7V15vFP-KUEg.woff2",
      weight: "700",
    },
    {
      family: "Poppins",
      style: "italic",
      url: "https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmy15lFd2PQEhcqw.woff2",
      weight: "700",
    },
    {
      family: "Poppins",
      style: "italic",
      url: "https://fonts.gstatic.com/s/poppins/v20/pxiGyp8kv8JHgFVrJJLecnFBGPaTSQ.woff2",
      weight: "400",
    },
  ],
  Ve = [
    '.framer-KbJ9Y .framer-styles-preset-1bgayxm:not(.rich-text-wrapper), .framer-KbJ9Y .framer-styles-preset-1bgayxm.rich-text-wrapper p { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 150%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-67e199f7-2a35-4503-9932-4af47fe3fd14, #e0e0e0); --framer-text-decoration: none; --framer-text-transform: none; }',
  ],
  Se = "framer-KbJ9Y";
w.loadFonts([
  "GF;Poppins-600",
  "GF;Poppins-900",
  "GF;Poppins-900italic",
  "GF;Poppins-600italic",
]);
var Ge = [
    {
      family: "Poppins",
      style: "normal",
      url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6V15vFP-KUEg.woff2",
      weight: "600",
    },
    {
      family: "Poppins",
      style: "normal",
      url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLBT5V15vFP-KUEg.woff2",
      weight: "900",
    },
    {
      family: "Poppins",
      style: "italic",
      url: "https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLm81xlFd2PQEhcqw.woff2",
      weight: "900",
    },
    {
      family: "Poppins",
      style: "italic",
      url: "https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLmr19lFd2PQEhcqw.woff2",
      weight: "600",
    },
  ],
  He = [
    '.framer-rEGX8 .framer-styles-preset-dce4rc:not(.rich-text-wrapper), .framer-rEGX8 .framer-styles-preset-dce4rc.rich-text-wrapper h4 { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold: "Poppins", sans-serif; --framer-font-family-bold-italic: "Poppins", sans-serif; --framer-font-family-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-rEGX8 .framer-styles-preset-dce4rc:not(.rich-text-wrapper), .framer-rEGX8 .framer-styles-preset-dce4rc.rich-text-wrapper h4 { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold: "Poppins", sans-serif; --framer-font-family-bold-italic: "Poppins", sans-serif; --framer-font-family-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-rEGX8 .framer-styles-preset-dce4rc:not(.rich-text-wrapper), .framer-rEGX8 .framer-styles-preset-dce4rc.rich-text-wrapper h4 { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold: "Poppins", sans-serif; --framer-font-family-bold-italic: "Poppins", sans-serif; --framer-font-family-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; } }',
  ],
  Ke = "framer-rEGX8";
var Mr = z(se),
  _r = z(ne),
  I = ge(f.div),
  kr = z(O),
  Nr = z(ce);
var jr = {
  JKCRzZCbQ: "(min-width: 810px) and (max-width: 1199px)",
  N6vK4aIqA: "(max-width: 809px)",
  WQLkyLRf1: "(min-width: 1200px)",
};
var We = "framer-LIAMB",
  Cr = {
    JKCRzZCbQ: "framer-v-1pgxz5l",
    N6vK4aIqA: "framer-v-lc9gsq",
    WQLkyLRf1: "framer-v-72rtr7",
  },
  A = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 50,
  },
  F = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: "tween" },
  E = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: F,
    x: 0,
    y: 50,
  },
  Fr = (o, m) => `translateX(-50%) ${m}`,
  Rr = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Y = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Rr,
    y: -4,
  },
  Ze = { delay: 0.05, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Pr = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Ze,
    x: 0,
    y: 50,
  },
  De = { delay: 0.1, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: "tween" },
  zr = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: De,
    x: 0,
    y: 50,
  },
  de = fe(),
  qr = { Desktop: "WQLkyLRf1", Phone: "N6vK4aIqA", Tablet: "JKCRzZCbQ" },
  Er = ({ height: o, id: m, width: l, ...s }) => {
    var p, c;
    return {
      ...s,
      variant:
        (c = (p = qr[s.variant]) !== null && p !== void 0 ? p : s.variant) !==
          null && c !== void 0
          ? c
          : "WQLkyLRf1",
    };
  },
  Tr = S(function (o, m) {
    let { activeLocale: l, setLocale: s } = W(),
      { style: p, className: c, layoutId: d, variant: b, ...v } = Er(o);
    pe(() => {
      let h = fe(void 0, l);
      if (((document.title = h.title || ""), h.viewport)) {
        var J;
        (J = document.querySelector('meta[name="viewport"]')) === null ||
          J === void 0 ||
          J.setAttribute("content", h.viewport);
      }
      if (h.robots) {
        let u = document.querySelector('meta[name="robots"]');
        u
          ? u.setAttribute("content", h.robots)
          : ((u = document.createElement("meta")),
            u.setAttribute("name", "robots"),
            u.setAttribute("content", h.robots),
            document.head.appendChild(u));
      }
      if (h.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((u) => u.startsWith("framer-body-"))
            .map((u) => document.body.classList.remove(u)),
          document.body.classList.add(`${h.bodyClassName}-framer-LIAMB`),
          () => {
            document.body.classList.remove(`${h.bodyClassName}-framer-LIAMB`);
          }
        );
    }, [void 0, l]);
    let [a, X] = ve(b, jr, !1),
      L = void 0,
      $ = _(null),
      T = me("ZmUI5qCTK"),
      B = _(null),
      R = me("BNbnGEaMQ"),
      M = _(null),
      V = G(),
      g = [Pe, Ke, Se, Le, Ee, Ce];
    return (
      ue({}),
      e(ye.Provider, {
        value: { primaryVariantId: "WQLkyLRf1", variantClassNames: Cr },
        children: n(K, {
          id: d ?? V,
          children: [
            n(f.div, {
              ...v,
              className: P(We, ...g, "framer-72rtr7", c),
              ref: m ?? $,
              style: { ...p },
              children: [
                e("div", {
                  className: "framer-1bzducp",
                  "data-framer-name": "Hero Section",
                  name: "Hero Section",
                  children: e(i, {
                    breakpoint: a,
                    overrides: {
                      N6vK4aIqA: {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 810,
                          intrinsicWidth: 1900,
                          pixelHeight: 810,
                          pixelWidth: 1900,
                          sizes: "calc(100vw - 10px)",
                          src: "./images/tlqJPzfvfW00mea2ZcobdSJwCI.jpg",
                          srcSet:
                            "./images/tlqJPzfvfW00mea2ZcobdSJwCI.jpg?scale-down-to=512 512w,./images/tlqJPzfvfW00mea2ZcobdSJwCI.jpg?scale-down-to=1024 1024w,./images/tlqJPzfvfW00mea2ZcobdSJwCI.jpg 1900w",
                        },
                      },
                    },
                    children: e(x, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 810,
                        intrinsicWidth: 1900,
                        pixelHeight: 810,
                        pixelWidth: 1900,
                        sizes: "max(100vw - 20px, 1px)",
                        src: "./images/tlqJPzfvfW00mea2ZcobdSJwCI.jpg",
                        srcSet:
                          "./images/tlqJPzfvfW00mea2ZcobdSJwCI.jpg?scale-down-to=512 512w,./images/tlqJPzfvfW00mea2ZcobdSJwCI.jpg?scale-down-to=1024 1024w,./images/tlqJPzfvfW00mea2ZcobdSJwCI.jpg 1900w",
                      },
                      className: "framer-l2bxiu",
                      "data-border": !0,
                      "data-framer-name": "Image Background",
                      name: "Image Background",
                      children: n("div", {
                        className: "framer-1rh8odg",
                        "data-framer-name": "1200px Container",
                        name: "1200px Container",
                        children: [
                          e(i, {
                            breakpoint: a,
                            overrides: {
                              N6vK4aIqA: { width: "min(100vw - 70px, 1200px)" },
                            },
                            children: e(y, {
                              width:
                                "min(max(100vw - 20px, 1px) - 60px, 1200px)",
                              children: e(k, {
                                className: "framer-1fzdufa-container",
                                children: e(i, {
                                  breakpoint: a,
                                  overrides: {
                                    JKCRzZCbQ: { variant: "dP6I_MhYN" },
                                    N6vK4aIqA: {
                                      style: { height: "100%", width: "100%" },
                                      variant: "dP6I_MhYN",
                                    },
                                  },
                                  children: e(se, {
                                    height: "100%",
                                    id: "Ffw9mi6k2",
                                    layoutId: "Ffw9mi6k2",
                                    style: { width: "100%" },
                                    variant: "FisGvG1zv",
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                          }),
                          e("div", {
                            className: "framer-1fx4rtq",
                            "data-framer-name": "Hero",
                            name: "Hero",
                            children: n(I, {
                              __framer__animate: { transition: F },
                              __framer__animateOnce: !0,
                              __framer__enter: A,
                              __framer__exit: E,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: "framer-15g9rrg",
                              "data-framer-name": "Text Rows",
                              name: "Text Rows",
                              style: { transformPerspective: 1200 },
                              children: [
                                n("div", {
                                  className: "framer-1b1joly",
                                  "data-framer-name": "Rows",
                                  name: "Rows",
                                  children: [
                                    n("div", {
                                      className: "framer-heovhp",
                                      "data-framer-name": "Title & Description",
                                      name: "Title & Description",
                                      children: [
                                        e("div", {
                                          className: "framer-13k4u3x",
                                          "data-framer-name": "Pre-Heading",
                                          name: "Pre-Heading",
                                          children: e(i, {
                                            breakpoint: a,
                                            overrides: {
                                              N6vK4aIqA: {
                                                children: e(r, {
                                                  children: e("h4", {
                                                    className:
                                                      "framer-styles-preset-dce4rc",
                                                    "data-styles-preset":
                                                      "RmoVtnrZG",
                                                    children:
                                                      "Welcome to 20sixmedia",
                                                  }),
                                                }),
                                              },
                                            },
                                            children: e(t, {
                                              __fromCanvasComponent: !0,
                                              children: e(r, {
                                                children: e("h3", {
                                                  className:
                                                    "framer-styles-preset-r3j3gm",
                                                  "data-styles-preset":
                                                    "b4UMe8kW5",
                                                  children:
                                                    "Welcome to 20sixmedia",
                                                }),
                                              }),
                                              className: "framer-elcyml",
                                              "data-framer-name":
                                                "Pre-Heading Text",
                                              fonts: ["Inter"],
                                              name: "Pre-Heading Text",
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                        e(t, {
                                          __fromCanvasComponent: !0,
                                          children: e(r, {
                                            children: e("h3", {
                                              className:
                                                "framer-styles-preset-r3j3gm",
                                              "data-styles-preset": "b4UMe8kW5",
                                              children:
                                                "We convert ideas into short form viral content",
                                            }),
                                          }),
                                          className: "framer-bzz4li",
                                          "data-framer-name": "Headline",
                                          fonts: ["Inter"],
                                          name: "Headline",
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                        e(i, {
                                          breakpoint: a,
                                          overrides: {
                                            N6vK4aIqA: {
                                              children: e(r, {
                                                children: e("p", {
                                                  className:
                                                    "framer-styles-preset-1bgayxm",
                                                  "data-styles-preset":
                                                    "PPl97trcl",
                                                  children:
                                                    "At 20sixmedia, we\u2019re passionate about storytelling, creativity, and results. Our mission is to empower brands and content creators to shine in the digital realm with bespoke services tailored to your unique needs. Also remember !!  provide guaranteed targeted reach !",
                                                }),
                                              }),
                                            },
                                          },
                                          children: e(t, {
                                            __fromCanvasComponent: !0,
                                            children: e(r, {
                                              children: e("h4", {
                                                className:
                                                  "framer-styles-preset-dce4rc",
                                                "data-styles-preset":
                                                  "RmoVtnrZG",
                                                children:
                                                  "At 20sixmedia, we\u2019re passionate about storytelling, creativity, and results. Our mission is to empower brands and content creators to shine in the digital realm with bespoke services tailored to your unique needs. Also remember !!  provide guaranteed targeted reach !",
                                              }),
                                            }),
                                            className: "framer-1dvcbnj",
                                            "data-framer-name": "Description",
                                            fonts: ["Inter"],
                                            name: "Description",
                                            verticalAlignment: "top",
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    e("div", {
                                      className: "framer-wl23o1",
                                      "data-framer-name": "Button Columns",
                                      name: "Button Columns",
                                      children: e(i, {
                                        breakpoint: a,
                                        overrides: {
                                          N6vK4aIqA: { width: "220px" },
                                        },
                                        children: e(y, {
                                          children: e(k, {
                                            className:
                                              "framer-a5mp5g-container",
                                            children: e(i, {
                                              breakpoint: a,
                                              overrides: {
                                                N6vK4aIqA: {
                                                  style: {
                                                    height: "100%",
                                                    width: "100%",
                                                  },
                                                },
                                              },
                                              children: e(ne, {
                                                bMqzMFIcg: !0,
                                                h7UqD6BmZ:
                                                  "https://wa.link/c31pi9",
                                                height: "100%",
                                                id: "HOeJfm5fL",
                                                layoutId: "HOeJfm5fL",
                                                VlPG4KtVa: !0,
                                                width: "100%",
                                                YgqZ7LvYn: "Get Started",
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                n("div", {
                                  className: "framer-1yjfbw8",
                                  "data-framer-name": "Happy Clients Wrapper",
                                  name: "Happy Clients Wrapper",
                                  children: [
                                    n("div", {
                                      className: "framer-1tbtx7v",
                                      "data-framer-name": "Images",
                                      name: "Images",
                                      children: [
                                        e(x, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 6001,
                                            intrinsicWidth: 4e3,
                                            pixelHeight: 6001,
                                            pixelWidth: 4e3,
                                            sizes: "24px",
                                            src: "./images/Hu4RqEYgOr0SFIvicnT7vrplRLc.jpg",
                                            srcSet:
                                              "./images/Hu4RqEYgOr0SFIvicnT7vrplRLc.jpg?scale-down-to=1024 682w,./images/Hu4RqEYgOr0SFIvicnT7vrplRLc.jpg?scale-down-to=2048 1365w,./images/Hu4RqEYgOr0SFIvicnT7vrplRLc.jpg?scale-down-to=4096 2730w,./images/Hu4RqEYgOr0SFIvicnT7vrplRLc.jpg 4000w",
                                          },
                                          className: "framer-1qwa803",
                                          "data-border": !0,
                                          "data-framer-name": "Image",
                                          name: "Image",
                                        }),
                                        e(x, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5e3,
                                            intrinsicWidth: 3974,
                                            pixelHeight: 5e3,
                                            pixelWidth: 3974,
                                            sizes: "24px",
                                            src: "./images/oUkBi1c8nERocfQrJWNLxZ9Fipw.jpg",
                                            srcSet:
                                              "./images/oUkBi1c8nERocfQrJWNLxZ9Fipw.jpg?scale-down-to=1024 813w,./images/oUkBi1c8nERocfQrJWNLxZ9Fipw.jpg?scale-down-to=2048 1627w,./images/oUkBi1c8nERocfQrJWNLxZ9Fipw.jpg?scale-down-to=4096 3255w,./images/oUkBi1c8nERocfQrJWNLxZ9Fipw.jpg 3974w",
                                          },
                                          className: "framer-108a4y2",
                                          "data-border": !0,
                                          "data-framer-name": "Image",
                                          name: "Image",
                                        }),
                                        e(x, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5472,
                                            intrinsicWidth: 3648,
                                            pixelHeight: 5472,
                                            pixelWidth: 3648,
                                            sizes: "24px",
                                            src: "./images/1ApcT7kVDOZTELD8XFISmocdiA.jpg",
                                            srcSet:
                                              "./images/1ApcT7kVDOZTELD8XFISmocdiA.jpg?scale-down-to=1024 682w,./images/1ApcT7kVDOZTELD8XFISmocdiA.jpg?scale-down-to=2048 1365w,./images/1ApcT7kVDOZTELD8XFISmocdiA.jpg?scale-down-to=4096 2730w,./images/1ApcT7kVDOZTELD8XFISmocdiA.jpg 3648w",
                                          },
                                          className: "framer-8mepfn",
                                          "data-border": !0,
                                          "data-framer-name": "Image",
                                          name: "Image",
                                          transformTemplate: Fr,
                                        }),
                                        e(x, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5616,
                                            intrinsicWidth: 3744,
                                            pixelHeight: 5616,
                                            pixelWidth: 3744,
                                            sizes: "24px",
                                            src: "./images/7ckekOZAa0J28C2T3IfYTvNDv5U.jpg",
                                            srcSet:
                                              "./images/7ckekOZAa0J28C2T3IfYTvNDv5U.jpg?scale-down-to=1024 682w,./images/7ckekOZAa0J28C2T3IfYTvNDv5U.jpg?scale-down-to=2048 1365w,./images/7ckekOZAa0J28C2T3IfYTvNDv5U.jpg?scale-down-to=4096 2730w,./images/7ckekOZAa0J28C2T3IfYTvNDv5U.jpg 3744w",
                                          },
                                          className: "framer-1e9pmb9",
                                          "data-border": !0,
                                          "data-framer-name": "Image",
                                          name: "Image",
                                        }),
                                        e(x, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 4499,
                                            intrinsicWidth: 3e3,
                                            pixelHeight: 4499,
                                            pixelWidth: 3e3,
                                            sizes: "24px",
                                            src: "./images/iABb6ejla3A5ZzE4zgxiPqBaYHI.jpg",
                                            srcSet:
                                              "./images/iABb6ejla3A5ZzE4zgxiPqBaYHI.jpg?scale-down-to=1024 682w,./images/iABb6ejla3A5ZzE4zgxiPqBaYHI.jpg?scale-down-to=2048 1365w,./images/iABb6ejla3A5ZzE4zgxiPqBaYHI.jpg?scale-down-to=4096 2731w,./images/iABb6ejla3A5ZzE4zgxiPqBaYHI.jpg 3000w",
                                          },
                                          className: "framer-ffim3t",
                                          "data-border": !0,
                                          "data-framer-name": "Image",
                                          name: "Image",
                                        }),
                                      ],
                                    }),
                                    e(t, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--framer-font-size": "18px",
                                            "--framer-line-height": "150%",
                                          },
                                          children: e("span", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7UG9wcGlucy1yZWd1bGFy",
                                              "--framer-font-family":
                                                '"Poppins"',
                                              "--framer-font-size": "18px",
                                              "--framer-text-color":
                                                "rgba(255, 255, 255, 1)",
                                            },
                                            children: "200+ happy clients",
                                          }),
                                        }),
                                      }),
                                      className: "framer-1ft62gv",
                                      "data-framer-name": "Text",
                                      fonts: ["GF;Poppins-regular"],
                                      name: "Text",
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                n("div", {
                  className: "framer-zwmwpb",
                  "data-framer-name": "Services Section",
                  id: T,
                  name: "Services Section",
                  ref: B,
                  children: [
                    n("div", {
                      className: "framer-ebuzrc",
                      children: [
                        e("div", {
                          className: "framer-18ashy",
                          "data-framer-name": "Frame 14013877",
                          name: "Frame 14013877",
                          children: e(t, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("p", {
                                className: "framer-styles-preset-1hq4542",
                                "data-styles-preset": "LfrvKhPYK",
                                children: "Services",
                              }),
                            }),
                            className: "framer-1w8uu5p",
                            "data-framer-name": "For agency owners",
                            fonts: ["Inter"],
                            name: "For agency owners",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(i, {
                          breakpoint: a,
                          overrides: {
                            N6vK4aIqA: {
                              children: e(r, {
                                children: e("h3", {
                                  className: "framer-styles-preset-r3j3gm",
                                  "data-styles-preset": "b4UMe8kW5",
                                  style: {
                                    "--framer-text-alignment": "center",
                                  },
                                  children:
                                    "services designed to Grow your business",
                                }),
                              }),
                            },
                          },
                          children: e(t, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("h2", {
                                className: "framer-styles-preset-4mwkng",
                                "data-styles-preset": "DBO58Q32u",
                                children:
                                  "services designed to Grow your business",
                              }),
                            }),
                            className: "framer-1en9jkp",
                            "data-framer-name": "Title",
                            fonts: ["Inter"],
                            name: "Title",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(i, {
                          breakpoint: a,
                          overrides: { N6vK4aIqA: { __framer__threshold: 0 } },
                          children: n(I, {
                            __framer__animate: { transition: F },
                            __framer__animateOnce: !0,
                            __framer__enter: A,
                            __framer__exit: E,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-i5jl2b",
                            "data-border": !0,
                            "data-framer-name": "Service",
                            name: "Service",
                            style: { transformPerspective: 1200 },
                            whileHover: Y,
                            children: [
                              e(i, {
                                breakpoint: a,
                                overrides: {
                                  JKCRzZCbQ: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      loading: "lazy",
                                      sizes: "calc(min(100vw, 1200px) - 120px)",
                                      src: "./images/oDcVsxVxIAVAfQKeYhosclsm4.png",
                                      srcSet:
                                        "./images/oDcVsxVxIAVAfQKeYhosclsm4.png?scale-down-to=512 512w,./images/oDcVsxVxIAVAfQKeYhosclsm4.png?scale-down-to=1024 1024w,./images/oDcVsxVxIAVAfQKeYhosclsm4.png?scale-down-to=2048 2048w,./images/oDcVsxVxIAVAfQKeYhosclsm4.png 2070w",
                                    },
                                  },
                                  N6vK4aIqA: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      loading: "lazy",
                                      sizes: "calc(min(100vw, 1200px) - 100px)",
                                      src: "./images/oDcVsxVxIAVAfQKeYhosclsm4.png",
                                      srcSet:
                                        "./images/oDcVsxVxIAVAfQKeYhosclsm4.png?scale-down-to=512 512w,./images/oDcVsxVxIAVAfQKeYhosclsm4.png?scale-down-to=1024 1024w,./images/oDcVsxVxIAVAfQKeYhosclsm4.png?scale-down-to=2048 2048w,./images/oDcVsxVxIAVAfQKeYhosclsm4.png 2070w",
                                    },
                                  },
                                },
                                children: e(x, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: "lazy",
                                    sizes:
                                      "max((min(100vw, 1200px) - 180px) / 2, 1px)",
                                    src: "./images/oDcVsxVxIAVAfQKeYhosclsm4.png",
                                    srcSet:
                                      "./images/oDcVsxVxIAVAfQKeYhosclsm4.png?scale-down-to=512 512w,./images/oDcVsxVxIAVAfQKeYhosclsm4.png?scale-down-to=1024 1024w,./images/oDcVsxVxIAVAfQKeYhosclsm4.png?scale-down-to=2048 2048w,./images/oDcVsxVxIAVAfQKeYhosclsm4.png 2070w",
                                  },
                                  className: "framer-1sd5c33",
                                  "data-framer-name": "Image",
                                  name: "Image",
                                }),
                              }),
                              e("div", {
                                className: "framer-1r761np",
                                "data-framer-name": "Text Rows",
                                name: "Text Rows",
                                children: n("div", {
                                  className: "framer-1bmyr7",
                                  children: [
                                    e(i, {
                                      breakpoint: a,
                                      overrides: {
                                        N6vK4aIqA: {
                                          children: e(r, {
                                            children: e("h3", {
                                              className:
                                                "framer-styles-preset-r3j3gm",
                                              "data-styles-preset": "b4UMe8kW5",
                                              style: {
                                                "--framer-text-alignment":
                                                  "center",
                                              },
                                              children:
                                                "Viral Script Crafting-",
                                            }),
                                          }),
                                        },
                                      },
                                      children: e(t, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                          children: e("h3", {
                                            className:
                                              "framer-styles-preset-r3j3gm",
                                            "data-styles-preset": "b4UMe8kW5",
                                            children: "Viral Script Crafting-",
                                          }),
                                        }),
                                        className: "framer-rb2ddl",
                                        "data-framer-name": "Title",
                                        fonts: ["Inter"],
                                        name: "Title",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    n("div", {
                                      className: "framer-1hv162h",
                                      "data-framer-name": "H3 Text Row",
                                      name: "H3 Text Row",
                                      children: [
                                        e(t, {
                                          __fromCanvasComponent: !0,
                                          children: e(r, {
                                            children: e("h4", {
                                              className:
                                                "framer-styles-preset-dce4rc",
                                              "data-styles-preset": "RmoVtnrZG",
                                              children:
                                                "Your Story, Perfectly Told",
                                            }),
                                          }),
                                          className: "framer-11vo6ap",
                                          "data-framer-name": "Heading",
                                          fonts: ["Inter"],
                                          name: "Heading",
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                        e(t, {
                                          __fromCanvasComponent: !0,
                                          children: e(r, {
                                            children: e("p", {
                                              className:
                                                "framer-styles-preset-1bgayxm",
                                              "data-styles-preset": "PPl97trcl",
                                              children:
                                                "We bring your ideas to life with meticulously crafted scripts that captivate and engage. From viral reels to compelling ads, our writers ensure your story is not just heard but remembered",
                                            }),
                                          }),
                                          className: "framer-4qxwa1",
                                          "data-framer-name": "Description",
                                          fonts: ["Inter"],
                                          name: "Description",
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    e("div", {
                                      className: "framer-xr66id",
                                      "data-framer-name": "H3 Text Row",
                                      name: "H3 Text Row",
                                      children: e(t, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                          children: e("p", {
                                            className:
                                              "framer-styles-preset-1bgayxm",
                                            "data-styles-preset": "PPl97trcl",
                                            children:
                                              "At 20SixMedia, we transform your visions into compelling narratives that captivate and resonate. Whether it's viral reels or impactful ads, our talented writers craft scripts that make your story unforgettable and engaging.",
                                          }),
                                        }),
                                        className: "framer-k1sy24",
                                        "data-framer-name": "Description",
                                        fonts: ["Inter"],
                                        name: "Description",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        e(i, {
                          breakpoint: a,
                          overrides: { N6vK4aIqA: { __framer__threshold: 0 } },
                          children: n(I, {
                            __framer__animate: { transition: F },
                            __framer__animateOnce: !0,
                            __framer__enter: A,
                            __framer__exit: E,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-2mlkv2",
                            "data-border": !0,
                            "data-framer-name": "Service",
                            name: "Service",
                            style: { transformPerspective: 1200 },
                            whileHover: Y,
                            children: [
                              e("div", {
                                className: "framer-53kgfc",
                                "data-framer-name": "Text Rows",
                                name: "Text Rows",
                                children: n("div", {
                                  className: "framer-14tmafb",
                                  children: [
                                    e(i, {
                                      breakpoint: a,
                                      overrides: {
                                        N6vK4aIqA: {
                                          children: e(r, {
                                            children: e("h3", {
                                              className:
                                                "framer-styles-preset-r3j3gm",
                                              "data-styles-preset": "b4UMe8kW5",
                                              style: {
                                                "--framer-text-alignment":
                                                  "center",
                                                "--framer-text-color":
                                                  "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                              },
                                              children: "Content Refinement",
                                            }),
                                          }),
                                        },
                                      },
                                      children: e(t, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                          children: e("h3", {
                                            className:
                                              "framer-styles-preset-r3j3gm",
                                            "data-styles-preset": "b4UMe8kW5",
                                            style: {
                                              "--framer-text-color":
                                                "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                            },
                                            children: "Content Refinement",
                                          }),
                                        }),
                                        className: "framer-1eom0ng",
                                        "data-framer-name": "Title",
                                        fonts: ["Inter"],
                                        name: "Title",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    n("div", {
                                      className: "framer-1cmc9vs",
                                      "data-framer-name": "H3 Text Row",
                                      name: "H3 Text Row",
                                      children: [
                                        e(t, {
                                          __fromCanvasComponent: !0,
                                          children: e(r, {
                                            children: e("h4", {
                                              className:
                                                "framer-styles-preset-dce4rc",
                                              "data-styles-preset": "RmoVtnrZG",
                                              style: {
                                                "--framer-text-color":
                                                  "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                              },
                                              children:
                                                "Turning Good into Great",
                                            }),
                                          }),
                                          className: "framer-tvxjy",
                                          "data-framer-name": "Heading",
                                          fonts: ["Inter"],
                                          name: "Heading",
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                        e(t, {
                                          __fromCanvasComponent: !0,
                                          children: e(r, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UG9wcGlucy1yZWd1bGFy",
                                                "--framer-font-family":
                                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                                "--framer-line-height": "150%",
                                                "--framer-text-color":
                                                  "rgb(94, 94, 94)",
                                              },
                                              children:
                                                "Our editors take your content and refine it to perfection. Whether it\u2019s video editing or post-polishing, we elevate your content to its highest potential, reflecting your brand\u2019s true essence.",
                                            }),
                                          }),
                                          className: "framer-ah8v31",
                                          "data-framer-name": "Description",
                                          fonts: ["GF;Poppins-regular"],
                                          name: "Description",
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    e("div", {
                                      className: "framer-wuq59s",
                                      "data-framer-name": "H3 Text Row",
                                      name: "H3 Text Row",
                                      children: e(t, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7UG9wcGlucy1yZWd1bGFy",
                                              "--framer-font-family":
                                                '"Poppins", "Poppins Placeholder", sans-serif',
                                              "--framer-line-height": "150%",
                                              "--framer-text-color":
                                                "rgb(94, 94, 94)",
                                            },
                                            children:
                                              "Our editing team transforms your raw content into polished masterpieces. From seamless video editing to meticulous post-production, we enhance every detail, ensuring your content shines and authentically represents your brand's essence.",
                                          }),
                                        }),
                                        className: "framer-my68mi",
                                        "data-framer-name": "Description",
                                        fonts: ["GF;Poppins-regular"],
                                        name: "Description",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              e(i, {
                                breakpoint: a,
                                overrides: {
                                  JKCRzZCbQ: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 545,
                                      intrinsicWidth: 611,
                                      loading: "lazy",
                                      pixelHeight: 545,
                                      pixelWidth: 611,
                                      sizes: "calc(min(100vw, 1200px) - 80px)",
                                      src: "./images/5J9Zsqcuu9DfJnmLEa73eijGBq0.jpg",
                                      srcSet:
                                        "./images/5J9Zsqcuu9DfJnmLEa73eijGBq0.jpg?scale-down-to=512 512w,./images/5J9Zsqcuu9DfJnmLEa73eijGBq0.jpg 611w",
                                    },
                                  },
                                  N6vK4aIqA: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 545,
                                      intrinsicWidth: 611,
                                      loading: "lazy",
                                      pixelHeight: 545,
                                      pixelWidth: 611,
                                      sizes: "calc(min(100vw, 1200px) - 60px)",
                                      src: "./images/5J9Zsqcuu9DfJnmLEa73eijGBq0.jpg",
                                      srcSet:
                                        "./images/5J9Zsqcuu9DfJnmLEa73eijGBq0.jpg?scale-down-to=512 512w,./images/5J9Zsqcuu9DfJnmLEa73eijGBq0.jpg 611w",
                                    },
                                  },
                                },
                                children: e(x, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 545,
                                    intrinsicWidth: 611,
                                    loading: "lazy",
                                    pixelHeight: 545,
                                    pixelWidth: 611,
                                    sizes:
                                      "max((min(100vw, 1200px) - 140px) / 2, 1px)",
                                    src: "./images/5J9Zsqcuu9DfJnmLEa73eijGBq0.jpg",
                                    srcSet:
                                      "./images/5J9Zsqcuu9DfJnmLEa73eijGBq0.jpg?scale-down-to=512 512w,./images/5J9Zsqcuu9DfJnmLEa73eijGBq0.jpg 611w",
                                  },
                                  className: "framer-125wogl",
                                  "data-framer-name": "Image",
                                  name: "Image",
                                }),
                              }),
                            ],
                          }),
                        }),
                        e(i, {
                          breakpoint: a,
                          overrides: { N6vK4aIqA: { __framer__threshold: 0 } },
                          children: n(I, {
                            __framer__animate: { transition: F },
                            __framer__animateOnce: !0,
                            __framer__enter: A,
                            __framer__exit: E,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-ja4hw5",
                            "data-border": !0,
                            "data-framer-name": "Service",
                            name: "Service",
                            style: { transformPerspective: 1200 },
                            whileHover: Y,
                            children: [
                              e(i, {
                                breakpoint: a,
                                overrides: {
                                  JKCRzZCbQ: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 545,
                                      intrinsicWidth: 611,
                                      loading: "lazy",
                                      pixelHeight: 545,
                                      pixelWidth: 611,
                                      sizes: "calc(min(100vw, 1200px) - 80px)",
                                      src: "./images/Z548PZ7tww1QV03dRCFR49Lq48.jpg",
                                      srcSet:
                                        "./images/Z548PZ7tww1QV03dRCFR49Lq48.jpg?scale-down-to=512 512w,./images/Z548PZ7tww1QV03dRCFR49Lq48.jpg 611w",
                                    },
                                  },
                                  N6vK4aIqA: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 545,
                                      intrinsicWidth: 611,
                                      loading: "lazy",
                                      pixelHeight: 545,
                                      pixelWidth: 611,
                                      sizes: "calc(min(100vw, 1200px) - 60px)",
                                      src: "./images/Z548PZ7tww1QV03dRCFR49Lq48.jpg",
                                      srcSet:
                                        "./images/Z548PZ7tww1QV03dRCFR49Lq48.jpg?scale-down-to=512 512w,./images/Z548PZ7tww1QV03dRCFR49Lq48.jpg 611w",
                                    },
                                  },
                                },
                                children: e(x, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 545,
                                    intrinsicWidth: 611,
                                    loading: "lazy",
                                    pixelHeight: 545,
                                    pixelWidth: 611,
                                    sizes:
                                      "max((min(100vw, 1200px) - 140px) / 2, 1px)",
                                    src: "./images/Z548PZ7tww1QV03dRCFR49Lq48.jpg",
                                    srcSet:
                                      "./images/Z548PZ7tww1QV03dRCFR49Lq48.jpg?scale-down-to=512 512w,./images/Z548PZ7tww1QV03dRCFR49Lq48.jpg 611w",
                                  },
                                  className: "framer-9z1q24",
                                  "data-framer-name": "Image",
                                  name: "Image",
                                }),
                              }),
                              e("div", {
                                className: "framer-1xtnmjq",
                                "data-framer-name": "Text Rows",
                                name: "Text Rows",
                                children: n("div", {
                                  className: "framer-ba05ce",
                                  children: [
                                    e(i, {
                                      breakpoint: a,
                                      overrides: {
                                        N6vK4aIqA: {
                                          children: e(r, {
                                            children: e("h3", {
                                              className:
                                                "framer-styles-preset-r3j3gm",
                                              "data-styles-preset": "b4UMe8kW5",
                                              style: {
                                                "--framer-text-alignment":
                                                  "center",
                                              },
                                              children: "Strategic Posting",
                                            }),
                                          }),
                                        },
                                      },
                                      children: e(t, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                          children: e("h3", {
                                            className:
                                              "framer-styles-preset-r3j3gm",
                                            "data-styles-preset": "b4UMe8kW5",
                                            children: "Strategic Posting",
                                          }),
                                        }),
                                        className: "framer-znbsoa",
                                        "data-framer-name": "Title",
                                        fonts: ["Inter"],
                                        name: "Title",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    n("div", {
                                      className: "framer-nr2l1z",
                                      "data-framer-name": "H3 Text Row",
                                      name: "H3 Text Row",
                                      children: [
                                        e(t, {
                                          __fromCanvasComponent: !0,
                                          children: e(r, {
                                            children: e("h4", {
                                              className:
                                                "framer-styles-preset-dce4rc",
                                              "data-styles-preset": "RmoVtnrZG",
                                              children: "Maximize Your Reach",
                                            }),
                                          }),
                                          className: "framer-19cz0e",
                                          "data-framer-name": "Heading",
                                          fonts: ["Inter"],
                                          name: "Heading",
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                        e(t, {
                                          __fromCanvasComponent: !0,
                                          children: e(r, {
                                            children: e("p", {
                                              className:
                                                "framer-styles-preset-1bgayxm",
                                              "data-styles-preset": "PPl97trcl",
                                              children:
                                                "Timing and strategy are everything in the digital world. We handle your social media scheduling and posting, optimizing each piece of content for maximum engagement and impact.",
                                            }),
                                          }),
                                          className: "framer-155j0ml",
                                          "data-framer-name": "Description",
                                          fonts: ["Inter"],
                                          name: "Description",
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    e("div", {
                                      className: "framer-7tuh0h",
                                      "data-framer-name": "H3 Text Row",
                                      name: "H3 Text Row",
                                      children: e(t, {
                                        __fromCanvasComponent: !0,
                                        children: e(r, {
                                          children: e("p", {
                                            className:
                                              "framer-styles-preset-1bgayxm",
                                            "data-styles-preset": "PPl97trcl",
                                            children:
                                              "In the fast-paced digital landscape, timing and strategy are crucial. We expertly manage your social media calendar, strategically scheduling and posting content to achieve optimal engagement and make a lasting impact.",
                                          }),
                                        }),
                                        className: "framer-1l90hnq",
                                        "data-framer-name": "Description",
                                        fonts: ["Inter"],
                                        name: "Description",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: { N6vK4aIqA: { __framer__threshold: 0 } },
                      children: n(I, {
                        __framer__animate: { transition: F },
                        __framer__animateOnce: !0,
                        __framer__enter: A,
                        __framer__exit: E,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-3y76cj",
                        "data-border": !0,
                        "data-framer-name": "Service",
                        name: "Service",
                        style: { transformPerspective: 1200 },
                        whileHover: Y,
                        children: [
                          e("div", {
                            className: "framer-nlqkky",
                            "data-framer-name": "Text Rows",
                            name: "Text Rows",
                            children: n("div", {
                              className: "framer-nkr4wi",
                              children: [
                                e(i, {
                                  breakpoint: a,
                                  overrides: {
                                    N6vK4aIqA: {
                                      children: e(r, {
                                        children: e("h3", {
                                          className:
                                            "framer-styles-preset-r3j3gm",
                                          "data-styles-preset": "b4UMe8kW5",
                                          style: {
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                          },
                                          children: "Organic Growth",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(t, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: e("h3", {
                                        className:
                                          "framer-styles-preset-r3j3gm",
                                        "data-styles-preset": "b4UMe8kW5",
                                        style: {
                                          "--framer-text-color":
                                            "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                        },
                                        children: "Organic Growth",
                                      }),
                                    }),
                                    className: "framer-layj58",
                                    "data-framer-name": "Title",
                                    fonts: ["Inter"],
                                    name: "Title",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                n("div", {
                                  className: "framer-13qi26t",
                                  "data-framer-name": "H3 Text Row",
                                  name: "H3 Text Row",
                                  children: [
                                    e(t, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("h4", {
                                          className:
                                            "framer-styles-preset-dce4rc",
                                          "data-styles-preset": "RmoVtnrZG",
                                          style: {
                                            "--framer-text-color":
                                              "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                          },
                                          children:
                                            "Authentic Audience Building",
                                        }),
                                      }),
                                      className: "framer-vx6amk",
                                      "data-framer-name": "Heading",
                                      fonts: ["Inter"],
                                      name: "Heading",
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                    e(t, {
                                      __fromCanvasComponent: !0,
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7UG9wcGlucy1yZWd1bGFy",
                                            "--framer-font-family":
                                              '"Poppins", "Poppins Placeholder", sans-serif',
                                            "--framer-line-height": "150%",
                                            "--framer-text-color":
                                              "rgb(94, 94, 94)",
                                          },
                                          children:
                                            "Our organic marketing strategies are designed to grow your audience naturally. Through SEO, engaging storytelling, and strategic theme page promotions, we enhance your visibility and build a loyal following without relying on algorithms.",
                                        }),
                                      }),
                                      className: "framer-ac0xpv",
                                      "data-framer-name": "Description",
                                      fonts: ["GF;Poppins-regular"],
                                      name: "Description",
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                e("div", {
                                  className: "framer-ifeyqo",
                                  "data-framer-name": "H3 Text Row",
                                  name: "H3 Text Row",
                                  children: e(t, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: e("h4", {
                                        className:
                                          "framer-styles-preset-dce4rc",
                                        "data-styles-preset": "RmoVtnrZG",
                                        style: {
                                          "--framer-text-color":
                                            "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                        },
                                        children:
                                          "WE PROVIDE GUARANTEED TARGETED REACH",
                                      }),
                                    }),
                                    className: "framer-aq0z2h",
                                    "data-framer-name": "Description",
                                    fonts: ["Inter"],
                                    name: "Description",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          }),
                          e(i, {
                            breakpoint: a,
                            overrides: {
                              JKCRzZCbQ: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 545,
                                  intrinsicWidth: 611,
                                  loading: "lazy",
                                  pixelHeight: 545,
                                  pixelWidth: 611,
                                  sizes: "calc(100vw - 120px)",
                                  src: "./images/5J9Zsqcuu9DfJnmLEa73eijGBq0.jpg",
                                  srcSet:
                                    "./images/5J9Zsqcuu9DfJnmLEa73eijGBq0.jpg?scale-down-to=512 512w,./images/5J9Zsqcuu9DfJnmLEa73eijGBq0.jpg 611w",
                                },
                              },
                              N6vK4aIqA: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 545,
                                  intrinsicWidth: 611,
                                  loading: "lazy",
                                  pixelHeight: 545,
                                  pixelWidth: 611,
                                  sizes: "calc(100vw - 120px)",
                                  src: "./images/5J9Zsqcuu9DfJnmLEa73eijGBq0.jpg",
                                  srcSet:
                                    "./images/5J9Zsqcuu9DfJnmLEa73eijGBq0.jpg?scale-down-to=512 512w,./images/5J9Zsqcuu9DfJnmLEa73eijGBq0.jpg 611w",
                                },
                              },
                            },
                            children: e(x, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 545,
                                intrinsicWidth: 611,
                                loading: "lazy",
                                pixelHeight: 545,
                                pixelWidth: 611,
                                sizes: "max((100vw - 180px) / 2, 1px)",
                                src: "./images/5J9Zsqcuu9DfJnmLEa73eijGBq0.jpg",
                                srcSet:
                                  "./images/5J9Zsqcuu9DfJnmLEa73eijGBq0.jpg?scale-down-to=512 512w,./images/5J9Zsqcuu9DfJnmLEa73eijGBq0.jpg 611w",
                              },
                              className: "framer-1xkxl6w",
                              "data-framer-name": "Image",
                              name: "Image",
                            }),
                          }),
                        ],
                      }),
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: { N6vK4aIqA: { __framer__threshold: 0 } },
                      children: n(I, {
                        __framer__animate: { transition: F },
                        __framer__animateOnce: !0,
                        __framer__enter: A,
                        __framer__exit: E,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-wzrd1y",
                        "data-border": !0,
                        "data-framer-name": "Service",
                        name: "Service",
                        style: { transformPerspective: 1200 },
                        whileHover: Y,
                        children: [
                          e(i, {
                            breakpoint: a,
                            overrides: {
                              JKCRzZCbQ: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 545,
                                  intrinsicWidth: 611,
                                  loading: "lazy",
                                  pixelHeight: 545,
                                  pixelWidth: 611,
                                  sizes: "calc(100vw - 80px)",
                                  src: "./images/Z548PZ7tww1QV03dRCFR49Lq48.jpg",
                                  srcSet:
                                    "./images/Z548PZ7tww1QV03dRCFR49Lq48.jpg?scale-down-to=512 512w,./images/Z548PZ7tww1QV03dRCFR49Lq48.jpg 611w",
                                },
                              },
                              N6vK4aIqA: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 545,
                                  intrinsicWidth: 611,
                                  loading: "lazy",
                                  pixelHeight: 545,
                                  pixelWidth: 611,
                                  sizes: "calc(100vw - 80px)",
                                  src: "./images/Z548PZ7tww1QV03dRCFR49Lq48.jpg",
                                  srcSet:
                                    "./images/Z548PZ7tww1QV03dRCFR49Lq48.jpg?scale-down-to=512 512w,./images/Z548PZ7tww1QV03dRCFR49Lq48.jpg 611w",
                                },
                              },
                            },
                            children: e(x, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 545,
                                intrinsicWidth: 611,
                                loading: "lazy",
                                pixelHeight: 545,
                                pixelWidth: 611,
                                sizes: "max((100vw - 140px) / 2, 1px)",
                                src: "./images/Z548PZ7tww1QV03dRCFR49Lq48.jpg",
                                srcSet:
                                  "./images/Z548PZ7tww1QV03dRCFR49Lq48.jpg?scale-down-to=512 512w,./images/Z548PZ7tww1QV03dRCFR49Lq48.jpg 611w",
                              },
                              className: "framer-rk7ceh",
                              "data-framer-name": "Image",
                              name: "Image",
                            }),
                          }),
                          e("div", {
                            className: "framer-mba1gh",
                            "data-framer-name": "Text Rows",
                            name: "Text Rows",
                            children: n("div", {
                              className: "framer-1wnwbhp",
                              children: [
                                e(i, {
                                  breakpoint: a,
                                  overrides: {
                                    N6vK4aIqA: {
                                      children: e(r, {
                                        children: e("h3", {
                                          className:
                                            "framer-styles-preset-r3j3gm",
                                          "data-styles-preset": "b4UMe8kW5",
                                          style: {
                                            "--framer-text-alignment": "center",
                                          },
                                          children: "Ad Mastery",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(t, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: e("h3", {
                                        className:
                                          "framer-styles-preset-r3j3gm",
                                        "data-styles-preset": "b4UMe8kW5",
                                        children: "Ad Mastery",
                                      }),
                                    }),
                                    className: "framer-vg2v8i",
                                    "data-framer-name": "Title",
                                    fonts: ["Inter"],
                                    name: "Title",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                e("div", {
                                  className: "framer-h7dice",
                                  "data-framer-name": "H3 Text Row",
                                  name: "H3 Text Row",
                                  children: e(t, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: e("h4", {
                                        className:
                                          "framer-styles-preset-dce4rc",
                                        "data-styles-preset": "RmoVtnrZG",
                                        children:
                                          "Creative and Impactful Campaigns",
                                      }),
                                    }),
                                    className: "framer-1sbr8ag",
                                    "data-framer-name": "Heading",
                                    fonts: ["Inter"],
                                    name: "Heading",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                e("div", {
                                  className: "framer-1q21iyu",
                                  "data-framer-name": "H3 Text Row",
                                  name: "H3 Text Row",
                                  children: e(t, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: e("p", {
                                        className:
                                          "framer-styles-preset-1bgayxm",
                                        "data-styles-preset": "PPl97trcl",
                                        children:
                                          "In the fast-paced digital landscape, timing and strategy are crucial. We expertly manage your social media calendar, strategically scheduling and posting content to achieve optimal engagement and make a lasting impact.",
                                      }),
                                    }),
                                    className: "framer-1mh3g4h",
                                    "data-framer-name": "Description",
                                    fonts: ["Inter"],
                                    name: "Description",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                e("div", {
                  className: "framer-hm2vcr",
                  "data-framer-name": "Benefits",
                  name: "Benefits",
                  children: n("div", {
                    className: "framer-8m6omd",
                    children: [
                      e("div", {
                        className: "framer-jfucsp",
                        "data-framer-name": "Pre-Heading",
                        name: "Pre-Heading",
                        children: e(i, {
                          breakpoint: a,
                          overrides: {
                            N6vK4aIqA: {
                              children: e(r, {
                                children: e("p", {
                                  className: "framer-styles-preset-1hq4542",
                                  "data-styles-preset": "LfrvKhPYK",
                                  style: {
                                    "--framer-text-alignment": "center",
                                  },
                                  children: "Benefits",
                                }),
                              }),
                            },
                          },
                          children: e(t, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("p", {
                                className: "framer-styles-preset-1hq4542",
                                "data-styles-preset": "LfrvKhPYK",
                                children: "Benefits",
                              }),
                            }),
                            className: "framer-1x3d6ya",
                            "data-framer-name": "Pre-Heading",
                            fonts: ["Inter"],
                            name: "Pre-Heading",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                      e(i, {
                        breakpoint: a,
                        overrides: {
                          N6vK4aIqA: {
                            children: e(r, {
                              children: e("h3", {
                                className: "framer-styles-preset-r3j3gm",
                                "data-styles-preset": "b4UMe8kW5",
                                style: { "--framer-text-alignment": "center" },
                                children: "Unlock Your Success",
                              }),
                            }),
                          },
                        },
                        children: e(t, {
                          __fromCanvasComponent: !0,
                          children: e(r, {
                            children: e("h2", {
                              className: "framer-styles-preset-4mwkng",
                              "data-styles-preset": "DBO58Q32u",
                              children: "Unlock Your Success",
                            }),
                          }),
                          className: "framer-1er8cr",
                          "data-framer-name": "Headline",
                          fonts: ["Inter"],
                          name: "Headline",
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                      n("div", {
                        className: "framer-1ufnghg",
                        children: [
                          e(i, {
                            breakpoint: a,
                            overrides: {
                              N6vK4aIqA: { __framer__threshold: 0 },
                            },
                            children: n(I, {
                              __framer__animate: { transition: F },
                              __framer__animateOnce: !0,
                              __framer__enter: A,
                              __framer__exit: E,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: "framer-1a4y4ot",
                              "data-framer-name": "Benefit",
                              name: "Benefit",
                              style: { transformPerspective: 1200 },
                              children: [
                                e(y, {
                                  children: e(k, {
                                    className: "framer-1mscffc-container",
                                    "data-framer-name": "Icon",
                                    name: "Icon",
                                    children: e(O, {
                                      color:
                                        "var(--token-a785e7a8-cb8a-45b5-b67c-45aec4654626, rgb(255, 255, 255))",
                                      height: "100%",
                                      iconSearch: "graph",
                                      iconSelection: "Home",
                                      iconStyle15: "Outlined",
                                      iconStyle2: "Filled",
                                      iconStyle7: "Filled",
                                      id: "j7Gn4NgnY",
                                      layoutId: "j7Gn4NgnY",
                                      mirrored: !1,
                                      name: "Icon",
                                      selectByList: !1,
                                      style: { height: "100%", width: "100%" },
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                e(t, {
                                  __fromCanvasComponent: !0,
                                  children: e(r, {
                                    children: e("h4", {
                                      className: "framer-styles-preset-dce4rc",
                                      "data-styles-preset": "RmoVtnrZG",
                                      style: {
                                        "--framer-text-alignment": "center",
                                      },
                                      children: "Elevate Your Brand",
                                    }),
                                  }),
                                  className: "framer-freci2",
                                  "data-framer-name": "Headline",
                                  fonts: ["Inter"],
                                  name: "Headline",
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                e(t, {
                                  __fromCanvasComponent: !0,
                                  children: e(r, {
                                    children: e("p", {
                                      className: "framer-styles-preset-1bgayxm",
                                      "data-styles-preset": "PPl97trcl",
                                      style: {
                                        "--framer-text-alignment": "center",
                                      },
                                      children:
                                        "Amplify your brand with increased visibility, enhanced credibility, and a strategic edge for lasting success.",
                                    }),
                                  }),
                                  className: "framer-1n7trco",
                                  "data-framer-name": "Description",
                                  fonts: ["Inter"],
                                  name: "Description",
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                          e(i, {
                            breakpoint: a,
                            overrides: {
                              N6vK4aIqA: { __framer__threshold: 0 },
                            },
                            children: n(I, {
                              __framer__animate: { transition: Ze },
                              __framer__animateOnce: !0,
                              __framer__enter: A,
                              __framer__exit: Pr,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: "framer-cj0ozf",
                              "data-framer-name": "Benefit",
                              name: "Benefit",
                              style: { transformPerspective: 1200 },
                              children: [
                                e(y, {
                                  children: e(k, {
                                    className: "framer-n6l5cw-container",
                                    "data-framer-name": "Icon",
                                    name: "Icon",
                                    children: e(O, {
                                      color:
                                        "var(--token-a785e7a8-cb8a-45b5-b67c-45aec4654626, rgb(255, 255, 255))",
                                      height: "100%",
                                      iconSearch: "data",
                                      iconSelection: "Home",
                                      iconStyle15: "Outlined",
                                      iconStyle2: "Filled",
                                      iconStyle7: "Filled",
                                      id: "YDm87TBzY",
                                      layoutId: "YDm87TBzY",
                                      mirrored: !1,
                                      name: "Icon",
                                      selectByList: !1,
                                      style: { height: "100%", width: "100%" },
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                e(t, {
                                  __fromCanvasComponent: !0,
                                  children: e(r, {
                                    children: e("h4", {
                                      className: "framer-styles-preset-dce4rc",
                                      "data-styles-preset": "RmoVtnrZG",
                                      style: {
                                        "--framer-text-alignment": "center",
                                      },
                                      children: "Maximize ROI",
                                    }),
                                  }),
                                  className: "framer-13vt0wq",
                                  "data-framer-name": "Headline",
                                  fonts: ["Inter"],
                                  name: "Headline",
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                e(t, {
                                  __fromCanvasComponent: !0,
                                  children: e(r, {
                                    children: e("p", {
                                      className: "framer-styles-preset-1bgayxm",
                                      "data-styles-preset": "PPl97trcl",
                                      style: {
                                        "--framer-text-alignment": "center",
                                      },
                                      children:
                                        "Experience unmatched return on investment\u2014strategic marketing for sustained growth and profitability.",
                                    }),
                                  }),
                                  className: "framer-dbpy85",
                                  "data-framer-name": "Description",
                                  fonts: ["Inter"],
                                  name: "Description",
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                          e(i, {
                            breakpoint: a,
                            overrides: {
                              N6vK4aIqA: { __framer__threshold: 0 },
                            },
                            children: n(I, {
                              __framer__animate: { transition: De },
                              __framer__animateOnce: !0,
                              __framer__enter: A,
                              __framer__exit: zr,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: "framer-18d8nsq",
                              "data-framer-name": "Benefit",
                              name: "Benefit",
                              style: { transformPerspective: 1200 },
                              children: [
                                e(y, {
                                  children: e(k, {
                                    className: "framer-1uhmrg3-container",
                                    "data-framer-name": "Icon",
                                    name: "Icon",
                                    children: e(O, {
                                      color:
                                        "var(--token-a785e7a8-cb8a-45b5-b67c-45aec4654626, rgb(255, 255, 255))",
                                      height: "100%",
                                      iconSearch: "sparkles",
                                      iconSelection: "Waves",
                                      iconStyle15: "Outlined",
                                      iconStyle2: "Filled",
                                      iconStyle7: "Filled",
                                      id: "jroGacq90",
                                      layoutId: "jroGacq90",
                                      mirrored: !1,
                                      name: "Icon",
                                      selectByList: !0,
                                      style: { height: "100%", width: "100%" },
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                e(t, {
                                  __fromCanvasComponent: !0,
                                  children: e(r, {
                                    children: e("h4", {
                                      className: "framer-styles-preset-dce4rc",
                                      "data-styles-preset": "RmoVtnrZG",
                                      style: {
                                        "--framer-text-alignment": "center",
                                      },
                                      children:
                                        "Tailored Solutions for Success",
                                    }),
                                  }),
                                  className: "framer-4fkxm0",
                                  "data-framer-name": "Headline",
                                  fonts: ["Inter"],
                                  name: "Headline",
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                e(t, {
                                  __fromCanvasComponent: !0,
                                  children: e(r, {
                                    children: e("p", {
                                      className: "framer-styles-preset-1bgayxm",
                                      "data-styles-preset": "PPl97trcl",
                                      style: {
                                        "--framer-text-alignment": "center",
                                      },
                                      children:
                                        "Personalized strategies, uniquely crafted for your business, ensuring certainty in every marketing endeavor.",
                                    }),
                                  }),
                                  className: "framer-1frhuf3",
                                  "data-framer-name": "Description",
                                  fonts: ["Inter"],
                                  name: "Description",
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                n("div", {
                  className: "framer-1vpah6h",
                  "data-framer-name": "2 Columns Text Image",
                  name: "2 Columns Text Image",
                  children: [
                    e("div", {
                      className: "framer-x77kez",
                      children: n("div", {
                        className: "framer-l8d7j3",
                        "data-framer-name": "Content",
                        name: "Content",
                        children: [
                          e(i, {
                            breakpoint: a,
                            overrides: {
                              JKCRzZCbQ: {
                                children: e(r, {
                                  children: e("h1", {
                                    style: {
                                      "--font-selector": "R0Y7SW50ZXItNzAw",
                                      "--framer-font-family":
                                        '"Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-size": "40px",
                                      "--framer-font-weight": "700",
                                      "--framer-letter-spacing": "-1.8px",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": "rgb(51, 51, 51)",
                                    },
                                    children: "Check Out Our Work Portfolio",
                                  }),
                                }),
                              },
                              N6vK4aIqA: {
                                children: e(r, {
                                  children: e("h1", {
                                    style: {
                                      "--font-selector": "R0Y7SW50ZXItNzAw",
                                      "--framer-font-family":
                                        '"Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-size": "24px",
                                      "--framer-font-weight": "700",
                                      "--framer-letter-spacing": "-1.2px",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": "rgb(51, 51, 51)",
                                    },
                                    children: "Check Out Our Work Portfolio",
                                  }),
                                }),
                              },
                            },
                            children: e(t, {
                              __fromCanvasComponent: !0,
                              children: e(r, {
                                children: e("h1", {
                                  style: {
                                    "--font-selector": "R0Y7SW50ZXItNzAw",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "50px",
                                    "--framer-font-weight": "700",
                                    "--framer-letter-spacing": "-2px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(51, 51, 51)",
                                  },
                                  children: "Check Out Our Work Portfolio",
                                }),
                              }),
                              className: "framer-rjxu",
                              fonts: ["GF;Inter-700"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e(i, {
                            breakpoint: a,
                            overrides: {
                              N6vK4aIqA: {
                                children: e(r, {
                                  children: e("h2", {
                                    style: {
                                      "--font-selector": "R0Y7SW50ZXItNTAw",
                                      "--framer-font-family":
                                        '"Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-size": "22px",
                                      "--framer-font-weight": "500",
                                      "--framer-letter-spacing": "-0.5px",
                                      "--framer-line-height": "1.5em",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "rgb(136, 136, 136)",
                                    },
                                    children:
                                      "Discover Our Latest Projects on Instagram",
                                  }),
                                }),
                              },
                            },
                            children: e(t, {
                              __fromCanvasComponent: !0,
                              children: e(r, {
                                children: e("h2", {
                                  style: {
                                    "--font-selector": "R0Y7SW50ZXItNTAw",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "24px",
                                    "--framer-font-weight": "500",
                                    "--framer-letter-spacing": "-0.5px",
                                    "--framer-line-height": "1.5em",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(136, 136, 136)",
                                  },
                                  children:
                                    "Discover Our Latest Projects on Instagram",
                                }),
                              }),
                              className: "framer-gno16l",
                              fonts: ["GF;Inter-500"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e("div", {
                            className: "framer-1fn880g",
                            children: e(we, {
                              href: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDMxODIxMjU2NzQ5ODI3?story_media_id=3333109157783466545&igsh=MTRkZGE3dnJpMXI1cw==",
                              openInNewTab: !0,
                              children: e("a", {
                                className: "framer-ei25lv framer-lux5qc",
                                "data-framer-name": "Button",
                                name: "Button",
                                children: e(i, {
                                  breakpoint: a,
                                  overrides: {
                                    N6vK4aIqA: {
                                      children: e(r, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7SW50ZXItNzAw",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "22px",
                                            "--framer-font-weight": "700",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "Our Works",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(t, {
                                    __fromCanvasComponent: !0,
                                    children: e(r, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector": "R0Y7SW50ZXItNzAw",
                                          "--framer-font-family":
                                            '"Inter", "Inter Placeholder", sans-serif',
                                          "--framer-font-size": "26px",
                                          "--framer-font-weight": "700",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Our Works",
                                      }),
                                    }),
                                    className: "framer-1e56b10",
                                    fonts: ["GF;Inter-700"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        N6vK4aIqA: {
                          background: {
                            alt: "",
                            fit: "fit",
                            intrinsicHeight: 720,
                            intrinsicWidth: 960,
                            loading: "lazy",
                            pixelHeight: 511,
                            pixelWidth: 721,
                            positionX: "center",
                            positionY: "center",
                            sizes: "100vw",
                            src: "./images/ZFhrtb1TtexObBMk557NL5s6h4.jpg",
                            srcSet:
                              "./images/ZFhrtb1TtexObBMk557NL5s6h4.jpg?scale-down-to=512 512w,./images/ZFhrtb1TtexObBMk557NL5s6h4.jpg 721w",
                          },
                        },
                      },
                      children: e(x, {
                        background: {
                          alt: "",
                          fit: "fit",
                          intrinsicHeight: 720,
                          intrinsicWidth: 960,
                          loading: "lazy",
                          pixelHeight: 511,
                          pixelWidth: 721,
                          positionX: "center",
                          positionY: "center",
                          sizes: "max(50vw, 1px)",
                          src: "./images/ZFhrtb1TtexObBMk557NL5s6h4.jpg",
                          srcSet:
                            "./images/ZFhrtb1TtexObBMk557NL5s6h4.jpg?scale-down-to=512 512w,./images/ZFhrtb1TtexObBMk557NL5s6h4.jpg 721w",
                        },
                        className: "framer-pvrzno",
                        "data-framer-name": "Image",
                        name: "Image",
                      }),
                    }),
                  ],
                }),
                e("div", {
                  className: "framer-tn5i9l",
                  "data-framer-name": "FAQ",
                  id: R,
                  name: "FAQ",
                  ref: M,
                  children: n("div", {
                    className: "framer-8kns94",
                    children: [
                      e("div", {
                        className: "framer-65y2h2",
                        "data-framer-name": "Pre-Heading",
                        name: "Pre-Heading",
                        children: e(t, {
                          __fromCanvasComponent: !0,
                          children: e(r, {
                            children: e("p", {
                              className: "framer-styles-preset-1hq4542",
                              "data-styles-preset": "LfrvKhPYK",
                              children: "FAq",
                            }),
                          }),
                          className: "framer-d4fh7i",
                          "data-framer-name": "Pre-Heading",
                          fonts: ["Inter"],
                          name: "Pre-Heading",
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                      e(i, {
                        breakpoint: a,
                        overrides: {
                          N6vK4aIqA: {
                            children: e(r, {
                              children: e("h3", {
                                className: "framer-styles-preset-r3j3gm",
                                "data-styles-preset": "b4UMe8kW5",
                                style: { "--framer-text-alignment": "center" },
                                children: "Frequently asked questions",
                              }),
                            }),
                          },
                        },
                        children: e(t, {
                          __fromCanvasComponent: !0,
                          children: e(r, {
                            children: e("h2", {
                              className: "framer-styles-preset-4mwkng",
                              "data-styles-preset": "DBO58Q32u",
                              children: "Frequently asked questions",
                            }),
                          }),
                          className: "framer-192vfji",
                          "data-framer-name": "Headline",
                          fonts: ["Inter"],
                          name: "Headline",
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                      n("div", {
                        className: "framer-9otn5h",
                        "data-framer-name": "FAQ Wrapper",
                        name: "FAQ Wrapper",
                        children: [
                          e(i, {
                            breakpoint: a,
                            overrides: {
                              N6vK4aIqA: {
                                width: "min(min(100vw, 1200px) - 40px, 800px)",
                              },
                            },
                            children: e(y, {
                              width:
                                "min(min(max(100vw, 1px), 1200px) - 40px, 800px)",
                              children: e(k, {
                                className: "framer-bnkhwq-container",
                                children: e(ce, {
                                  height: "100%",
                                  id: "r3ByEWinb",
                                  layoutId: "r3ByEWinb",
                                  style: { width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                          e(i, {
                            breakpoint: a,
                            overrides: {
                              N6vK4aIqA: {
                                width: "min(min(100vw, 1200px) - 40px, 800px)",
                              },
                            },
                            children: e(y, {
                              width:
                                "min(min(max(100vw, 1px), 1200px) - 40px, 800px)",
                              children: e(k, {
                                className: "framer-9se9co-container",
                                children: e(ne, {
                                  bMqzMFIcg: !0,
                                  h7UqD6BmZ: "https://wa.link/c31pi9",
                                  height: "100%",
                                  id: "hdmfz7kfw",
                                  layoutId: "hdmfz7kfw",
                                  style: { width: "100%" },
                                  VlPG4KtVa: !0,
                                  width: "100%",
                                  YgqZ7LvYn: "Get Started",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                n("div", {
                  className: "framer-1akml7n",
                  "data-framer-name": "Let's collaborate",
                  name: "Let's collaborate",
                  children: [
                    n("div", {
                      className: "framer-144z12s",
                      "data-framer-name": "Wrapper",
                      name: "Wrapper",
                      children: [
                        e(i, {
                          breakpoint: a,
                          overrides: {
                            N6vK4aIqA: {
                              children: e(r, {
                                children: e("h2", {
                                  style: {
                                    "--font-selector": "R0Y7SW50ZXItNzAw",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "42px",
                                    "--framer-font-weight": "700",
                                    "--framer-letter-spacing": "-2.1px",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--token-b9c3c957-2c66-49c4-9732-fa196fddac20, rgb(0, 17, 34))",
                                  },
                                  children: "Let\u2019s Collaborate",
                                }),
                              }),
                            },
                          },
                          children: e(t, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("h2", {
                                style: {
                                  "--font-selector": "R0Y7SW50ZXItNzAw",
                                  "--framer-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "55px",
                                  "--framer-font-weight": "700",
                                  "--framer-letter-spacing": "-2.1px",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--token-b9c3c957-2c66-49c4-9732-fa196fddac20, rgb(0, 17, 34))",
                                },
                                children: "Let\u2019s Collaborate",
                              }),
                            }),
                            className: "framer-j21yn0",
                            fonts: ["GF;Inter-700"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(i, {
                          breakpoint: a,
                          overrides: {
                            N6vK4aIqA: {
                              children: e(r, {
                                children: e("p", {
                                  className: "framer-styles-preset-kzbo35",
                                  "data-styles-preset": "B1ozDEm5v",
                                  style: {
                                    "--framer-text-alignment": "center",
                                  },
                                  children: n("span", {
                                    style: {
                                      "--framer-text-color":
                                        "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                    },
                                    children: [
                                      "Are you ready to transform your ",
                                      e("br", {}),
                                      "brand and elevate your content? ",
                                      e("br", {}),
                                      "Get in touch with 20sixmedia today ",
                                      e("br", {}),
                                      "and let\u2019s start creating magic ",
                                      e("br", {}),
                                      "together",
                                    ],
                                  }),
                                }),
                              }),
                            },
                          },
                          children: e(t, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: n("h3", {
                                className: "framer-styles-preset-r3j3gm",
                                "data-styles-preset": "b4UMe8kW5",
                                style: {
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                },
                                children: [
                                  "Are you ready to transform your brand and",
                                  e("br", {}),
                                  "elevate your content? Get in touch with 20sixmedia",
                                  e("br", {}),
                                  " today and let\u2019s start creating magic together",
                                ],
                              }),
                            }),
                            className: "framer-eou22c",
                            fonts: ["Inter"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(i, {
                          breakpoint: a,
                          overrides: {
                            N6vK4aIqA: {
                              children: e(r, {
                                children: e("p", {
                                  className: "framer-styles-preset-1bgayxm",
                                  "data-styles-preset": "PPl97trcl",
                                  style: {
                                    "--framer-text-color":
                                      "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                  },
                                  children:
                                    "Email:  contact@20sixmedia.com\xA0",
                                }),
                              }),
                            },
                          },
                          children: e(t, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("h4", {
                                className: "framer-styles-preset-dce4rc",
                                "data-styles-preset": "RmoVtnrZG",
                                style: {
                                  "--framer-text-color":
                                    "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                },
                                children: "Email:  contact@20sixmedia.com\xA0",
                              }),
                            }),
                            className: "framer-6x1b5w",
                            fonts: ["Inter"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(i, {
                          breakpoint: a,
                          overrides: {
                            N6vK4aIqA: {
                              children: e(r, {
                                children: e("p", {
                                  className: "framer-styles-preset-1bgayxm",
                                  "data-styles-preset": "PPl97trcl",
                                  style: {
                                    "--framer-text-color":
                                      "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                  },
                                  children: "Whatsapp: 8638887620",
                                }),
                              }),
                            },
                          },
                          children: e(t, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("h4", {
                                className: "framer-styles-preset-dce4rc",
                                "data-styles-preset": "RmoVtnrZG",
                                style: {
                                  "--framer-text-color":
                                    "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                },
                                children: "Whatsapp: 8638887620",
                              }),
                            }),
                            className: "framer-1wviwyh",
                            fonts: ["Inter"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(i, {
                          breakpoint: a,
                          overrides: {
                            N6vK4aIqA: {
                              children: e(r, {
                                children: e("p", {
                                  className: "framer-styles-preset-1bgayxm",
                                  "data-styles-preset": "PPl97trcl",
                                  style: {
                                    "--framer-text-color":
                                      "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                  },
                                  children: "Phone: +91 8638887620",
                                }),
                              }),
                            },
                          },
                          children: e(t, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("h4", {
                                className: "framer-styles-preset-dce4rc",
                                "data-styles-preset": "RmoVtnrZG",
                                style: {
                                  "--framer-text-color":
                                    "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                },
                                children: "Phone: +91 8638887620",
                              }),
                            }),
                            className: "framer-dzv6ji",
                            fonts: ["Inter"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    n("div", {
                      className: "framer-3jy2h9",
                      "data-framer-name": "Rights",
                      name: "Rights",
                      children: [
                        e(i, {
                          breakpoint: a,
                          overrides: {
                            N6vK4aIqA: {
                              children: e(r, {
                                children: e("h2", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QXJidXR1cy1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Arbutus", "Arbutus Placeholder", serif',
                                    "--framer-letter-spacing": "-2.1px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color":
                                      "var(--token-b9c3c957-2c66-49c4-9732-fa196fddac20, rgb(0, 17, 34))",
                                  },
                                  children:
                                    "\xA9 2024 20sixmedia. All Rights Reserved",
                                }),
                              }),
                              fonts: ["GF;Arbutus-regular"],
                            },
                          },
                          children: e(t, {
                            __fromCanvasComponent: !0,
                            children: e(r, {
                              children: e("h2", {
                                style: {
                                  "--font-selector":
                                    "R0Y7QXJjaGl2byBCbGFjay1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Archivo Black", "Archivo Black Placeholder", sans-serif',
                                  "--framer-font-size": "23px",
                                  "--framer-letter-spacing": "-2.1px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--token-b9c3c957-2c66-49c4-9732-fa196fddac20, rgb(0, 17, 34))",
                                },
                                children:
                                  "\xA9 2024 20sixmedia. All Rights Reserved",
                              }),
                            }),
                            className: "framer-axvcyi",
                            fonts: ["GF;Archivo Black-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        n("div", {
                          className: "framer-ovm9uj",
                          children: [
                            e(i, {
                              breakpoint: a,
                              overrides: {
                                N6vK4aIqA: {
                                  children: e(r, {
                                    children: e("p", {
                                      style: {
                                        "--framer-text-color":
                                          "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                      },
                                      children: "Privacy Policy",
                                    }),
                                  }),
                                },
                              },
                              children: e(t, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: e("p", {
                                    style: {
                                      "--framer-font-size": "23px",
                                      "--framer-text-color":
                                        "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                    },
                                    children: "Privacy Policy",
                                  }),
                                }),
                                className: "framer-xudhn5",
                                fonts: ["Inter"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                            e(i, {
                              breakpoint: a,
                              overrides: {
                                N6vK4aIqA: {
                                  children: e(r, {
                                    children: e("p", {
                                      style: {
                                        "--framer-text-color":
                                          "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                      },
                                      children: "Terms of Service",
                                    }),
                                  }),
                                },
                              },
                              children: e(t, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: e("p", {
                                    style: {
                                      "--framer-font-size": "23px",
                                      "--framer-text-color":
                                        "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                    },
                                    children: "Terms of Service",
                                  }),
                                }),
                                className: "framer-11i75tm",
                                fonts: ["Inter"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                            e(i, {
                              breakpoint: a,
                              overrides: {
                                N6vK4aIqA: {
                                  children: e(r, {
                                    children: e("p", {
                                      style: {
                                        "--framer-text-color":
                                          "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                      },
                                      children: "Contact Us",
                                    }),
                                  }),
                                },
                              },
                              children: e(t, {
                                __fromCanvasComponent: !0,
                                children: e(r, {
                                  children: e("p", {
                                    style: {
                                      "--framer-font-size": "23px",
                                      "--framer-text-color":
                                        "var(--token-bec8f50d-5c09-4d71-a229-de4580e07deb, rgb(9, 9, 9))",
                                    },
                                    children: "Contact Us",
                                  }),
                                }),
                                className: "framer-1qf59rp",
                                fonts: ["Inter"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e("div", { className: P(We, ...g), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Vr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${de.bodyClassName}-framer-LIAMB { background: rgb(9, 9, 9); }`,
    ".framer-LIAMB.framer-lux5qc, .framer-LIAMB .framer-lux5qc { display: block; }",
    ".framer-LIAMB.framer-72rtr7 { align-content: center; align-items: center; background-color: #090909; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }",
    ".framer-LIAMB .framer-1bzducp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px; position: relative; width: 100%; }",
    ".framer-LIAMB .framer-l2bxiu { --border-bottom-width: 1px; --border-color: #2a2a2a; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 30px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-LIAMB .framer-1rh8odg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-LIAMB .framer-1fzdufa-container, .framer-LIAMB .framer-9se9co-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-LIAMB .framer-1fx4rtq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 80px 0px 40px 0px; position: relative; width: 100%; }",
    ".framer-LIAMB .framer-15g9rrg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-LIAMB .framer-1b1joly { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-LIAMB .framer-heovhp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-LIAMB .framer-13k4u3x, .framer-LIAMB .framer-18ashy, .framer-LIAMB .framer-jfucsp, .framer-LIAMB .framer-65y2h2 { align-content: center; align-items: center; background-color: #252525; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 10px 15px 10px 15px; position: relative; width: min-content; }",
    ".framer-LIAMB .framer-elcyml, .framer-LIAMB .framer-1ft62gv, .framer-LIAMB .framer-1w8uu5p, .framer-LIAMB .framer-1x3d6ya, .framer-LIAMB .framer-d4fh7i, .framer-LIAMB .framer-6x1b5w { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-LIAMB .framer-bzz4li, .framer-LIAMB .framer-1dvcbnj, .framer-LIAMB .framer-rb2ddl, .framer-LIAMB .framer-11vo6ap, .framer-LIAMB .framer-4qxwa1, .framer-LIAMB .framer-k1sy24, .framer-LIAMB .framer-1eom0ng, .framer-LIAMB .framer-tvxjy, .framer-LIAMB .framer-ah8v31, .framer-LIAMB .framer-my68mi, .framer-LIAMB .framer-znbsoa, .framer-LIAMB .framer-19cz0e, .framer-LIAMB .framer-155j0ml, .framer-LIAMB .framer-1l90hnq, .framer-LIAMB .framer-layj58, .framer-LIAMB .framer-vx6amk, .framer-LIAMB .framer-ac0xpv, .framer-LIAMB .framer-aq0z2h, .framer-LIAMB .framer-vg2v8i, .framer-LIAMB .framer-1sbr8ag, .framer-LIAMB .framer-1mh3g4h, .framer-LIAMB .framer-freci2, .framer-LIAMB .framer-1n7trco, .framer-LIAMB .framer-13vt0wq, .framer-LIAMB .framer-dbpy85, .framer-LIAMB .framer-4fkxm0, .framer-LIAMB .framer-1frhuf3 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-LIAMB .framer-wl23o1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-LIAMB .framer-a5mp5g-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-LIAMB .framer-1yjfbw8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-LIAMB .framer-1tbtx7v { flex: none; height: 24px; overflow: visible; position: relative; width: 100px; }",
    ".framer-LIAMB .framer-1qwa803 { --border-bottom-width: 2px; --border-color: #000000; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; bottom: 0px; flex: none; position: absolute; right: 0px; top: 0px; width: var(--framer-aspect-ratio-supported, 24px); }",
    ".framer-LIAMB .framer-108a4y2 { --border-bottom-width: 2px; --border-color: #000000; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; bottom: 0px; flex: none; left: 57px; position: absolute; top: 0px; width: var(--framer-aspect-ratio-supported, 24px); }",
    ".framer-LIAMB .framer-8mepfn { --border-bottom-width: 2px; --border-color: #000000; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; bottom: 0px; flex: none; left: 50%; position: absolute; top: 0px; transform: translateX(-50%); width: var(--framer-aspect-ratio-supported, 24px); }",
    ".framer-LIAMB .framer-1e9pmb9 { --border-bottom-width: 2px; --border-color: #000000; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: var(--framer-aspect-ratio-supported, 24px); left: 19px; position: absolute; top: 0px; width: 24px; }",
    ".framer-LIAMB .framer-ffim3t { --border-bottom-width: 2px; --border-color: #000000; --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; aspect-ratio: 1 / 1; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; flex: none; height: var(--framer-aspect-ratio-supported, 24px); left: 0px; position: absolute; top: 0px; width: 24px; }",
    ".framer-LIAMB .framer-zwmwpb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 160px 0px 80px 0px; position: relative; width: 100%; }",
    ".framer-LIAMB .framer-ebuzrc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: 100%; }",
    ".framer-LIAMB .framer-1en9jkp, .framer-LIAMB .framer-1er8cr, .framer-LIAMB .framer-192vfji { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 700px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-LIAMB .framer-i5jl2b, .framer-LIAMB .framer-wzrd1y { --border-bottom-width: 1px; --border-color: #2a2a2a; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #141414; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 40px 20px 40px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-LIAMB .framer-1sd5c33, .framer-LIAMB .framer-1xkxl6w { aspect-ratio: 0.9807692307692307 / 1; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 500px); position: relative; width: 1px; }",
    ".framer-LIAMB .framer-1r761np, .framer-LIAMB .framer-1xtnmjq, .framer-LIAMB .framer-mba1gh { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 40px 0px 0px; position: relative; width: 1px; }",
    ".framer-LIAMB .framer-1bmyr7, .framer-LIAMB .framer-14tmafb, .framer-LIAMB .framer-ba05ce, .framer-LIAMB .framer-nkr4wi, .framer-LIAMB .framer-1wnwbhp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-LIAMB .framer-1hv162h, .framer-LIAMB .framer-xr66id, .framer-LIAMB .framer-1cmc9vs, .framer-LIAMB .framer-wuq59s, .framer-LIAMB .framer-nr2l1z, .framer-LIAMB .framer-7tuh0h, .framer-LIAMB .framer-13qi26t, .framer-LIAMB .framer-ifeyqo, .framer-LIAMB .framer-h7dice, .framer-LIAMB .framer-1q21iyu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-LIAMB .framer-2mlkv2 { --border-bottom-width: 1px; --border-color: #2a2a2a; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-LIAMB .framer-53kgfc, .framer-LIAMB .framer-nlqkky { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 40px; position: relative; width: 1px; }",
    ".framer-LIAMB .framer-125wogl, .framer-LIAMB .framer-9z1q24, .framer-LIAMB .framer-rk7ceh { aspect-ratio: 0.9807692307692307 / 1; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 520px); position: relative; width: 1px; }",
    ".framer-LIAMB .framer-ja4hw5 { --border-bottom-width: 1px; --border-color: #2a2a2a; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #141414; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-LIAMB .framer-3y76cj { --border-bottom-width: 1px; --border-color: #2a2a2a; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 60px 20px 60px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-LIAMB .framer-hm2vcr, .framer-LIAMB .framer-tn5i9l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 80px 0px 80px 0px; position: relative; width: 100%; }",
    ".framer-LIAMB .framer-8m6omd, .framer-LIAMB .framer-8kns94 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: 1px; }",
    ".framer-LIAMB .framer-1ufnghg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-LIAMB .framer-1a4y4ot, .framer-LIAMB .framer-cj0ozf, .framer-LIAMB .framer-18d8nsq { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-LIAMB .framer-1mscffc-container, .framer-LIAMB .framer-n6l5cw-container, .framer-LIAMB .framer-1uhmrg3-container { flex: none; height: 40px; position: relative; width: 40px; }",
    ".framer-LIAMB .framer-1vpah6h { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-LIAMB .framer-x77kez { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-LIAMB .framer-l8d7j3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 2018px; padding: 0px; position: relative; width: 400px; }",
    ".framer-LIAMB .framer-rjxu, .framer-LIAMB .framer-j21yn0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-LIAMB .framer-gno16l { --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-LIAMB .framer-1fn880g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-LIAMB .framer-ei25lv { align-content: center; align-items: center; background-color: var(--token-418422ae-c2d7-406d-b663-74c4b3eabc44, #50d967); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-shadow: 0px 0.7065919983928324px 0.7065919983928324px -0.625px rgba(0, 0, 0, 0.15), 0px 1.8065619053231785px 1.8065619053231785px -1.25px rgba(0, 0, 0, 0.14398), 0px 3.6217592146567767px 3.6217592146567767px -1.875px rgba(0, 0, 0, 0.13793), 0px 6.8655999097303715px 6.8655999097303715px -2.5px rgba(0, 0, 0, 0.12711), 0px 13.646761411524492px 13.646761411524492px -3.125px rgba(0, 0, 0, 0.10451), 0px 30px 30px -3.75px rgba(0, 0, 0, 0.05); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: visible; padding: 15px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-LIAMB .framer-1e56b10 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-LIAMB .framer-pvrzno { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 498px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-LIAMB .framer-9otn5h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 800px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-LIAMB .framer-bnkhwq-container { flex: none; height: auto; position: relative; width: 100%; z-index: 2; }",
    ".framer-LIAMB .framer-1akml7n { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 47px 40px 47px 40px; position: relative; width: 100%; }",
    ".framer-LIAMB .framer-144z12s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 100%; overflow: visible; padding: 0px; position: relative; width: 1000px; }",
    ".framer-LIAMB .framer-eou22c, .framer-LIAMB .framer-1wviwyh, .framer-LIAMB .framer-dzv6ji, .framer-LIAMB .framer-xudhn5, .framer-LIAMB .framer-11i75tm, .framer-LIAMB .framer-1qf59rp { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-LIAMB .framer-3jy2h9 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 39px 40px 39px 40px; position: relative; width: 1200px; }",
    ".framer-LIAMB .framer-axvcyi { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }",
    ".framer-LIAMB .framer-ovm9uj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 60px; height: min-content; justify-content: center; max-width: 100%; overflow: visible; padding: 0px; position: relative; width: 1000px; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-LIAMB.framer-72rtr7, .framer-LIAMB .framer-1bzducp, .framer-LIAMB .framer-l2bxiu, .framer-LIAMB .framer-1rh8odg, .framer-LIAMB .framer-1fx4rtq, .framer-LIAMB .framer-15g9rrg, .framer-LIAMB .framer-1b1joly, .framer-LIAMB .framer-heovhp, .framer-LIAMB .framer-13k4u3x, .framer-LIAMB .framer-wl23o1, .framer-LIAMB .framer-1yjfbw8, .framer-LIAMB .framer-zwmwpb, .framer-LIAMB .framer-ebuzrc, .framer-LIAMB .framer-18ashy, .framer-LIAMB .framer-i5jl2b, .framer-LIAMB .framer-1r761np, .framer-LIAMB .framer-1bmyr7, .framer-LIAMB .framer-1hv162h, .framer-LIAMB .framer-xr66id, .framer-LIAMB .framer-2mlkv2, .framer-LIAMB .framer-53kgfc, .framer-LIAMB .framer-14tmafb, .framer-LIAMB .framer-1cmc9vs, .framer-LIAMB .framer-wuq59s, .framer-LIAMB .framer-ja4hw5, .framer-LIAMB .framer-1xtnmjq, .framer-LIAMB .framer-ba05ce, .framer-LIAMB .framer-nr2l1z, .framer-LIAMB .framer-7tuh0h, .framer-LIAMB .framer-3y76cj, .framer-LIAMB .framer-nlqkky, .framer-LIAMB .framer-nkr4wi, .framer-LIAMB .framer-13qi26t, .framer-LIAMB .framer-ifeyqo, .framer-LIAMB .framer-wzrd1y, .framer-LIAMB .framer-mba1gh, .framer-LIAMB .framer-1wnwbhp, .framer-LIAMB .framer-h7dice, .framer-LIAMB .framer-1q21iyu, .framer-LIAMB .framer-hm2vcr, .framer-LIAMB .framer-8m6omd, .framer-LIAMB .framer-jfucsp, .framer-LIAMB .framer-1ufnghg, .framer-LIAMB .framer-1a4y4ot, .framer-LIAMB .framer-cj0ozf, .framer-LIAMB .framer-18d8nsq, .framer-LIAMB .framer-1vpah6h, .framer-LIAMB .framer-x77kez, .framer-LIAMB .framer-l8d7j3, .framer-LIAMB .framer-1fn880g, .framer-LIAMB .framer-ei25lv, .framer-LIAMB .framer-pvrzno, .framer-LIAMB .framer-tn5i9l, .framer-LIAMB .framer-8kns94, .framer-LIAMB .framer-65y2h2, .framer-LIAMB .framer-9otn5h, .framer-LIAMB .framer-1akml7n, .framer-LIAMB .framer-144z12s, .framer-LIAMB .framer-3jy2h9, .framer-LIAMB .framer-ovm9uj { gap: 0px; } .framer-LIAMB.framer-72rtr7 > *, .framer-LIAMB .framer-1akml7n > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-LIAMB.framer-72rtr7 > :first-child, .framer-LIAMB .framer-l2bxiu > :first-child, .framer-LIAMB .framer-1rh8odg > :first-child, .framer-LIAMB .framer-1fx4rtq > :first-child, .framer-LIAMB .framer-15g9rrg > :first-child, .framer-LIAMB .framer-1b1joly > :first-child, .framer-LIAMB .framer-heovhp > :first-child, .framer-LIAMB .framer-zwmwpb > :first-child, .framer-LIAMB .framer-ebuzrc > :first-child, .framer-LIAMB .framer-1r761np > :first-child, .framer-LIAMB .framer-1bmyr7 > :first-child, .framer-LIAMB .framer-1hv162h > :first-child, .framer-LIAMB .framer-xr66id > :first-child, .framer-LIAMB .framer-53kgfc > :first-child, .framer-LIAMB .framer-14tmafb > :first-child, .framer-LIAMB .framer-1cmc9vs > :first-child, .framer-LIAMB .framer-wuq59s > :first-child, .framer-LIAMB .framer-1xtnmjq > :first-child, .framer-LIAMB .framer-ba05ce > :first-child, .framer-LIAMB .framer-nr2l1z > :first-child, .framer-LIAMB .framer-7tuh0h > :first-child, .framer-LIAMB .framer-nlqkky > :first-child, .framer-LIAMB .framer-nkr4wi > :first-child, .framer-LIAMB .framer-13qi26t > :first-child, .framer-LIAMB .framer-ifeyqo > :first-child, .framer-LIAMB .framer-mba1gh > :first-child, .framer-LIAMB .framer-1wnwbhp > :first-child, .framer-LIAMB .framer-h7dice > :first-child, .framer-LIAMB .framer-1q21iyu > :first-child, .framer-LIAMB .framer-8m6omd > :first-child, .framer-LIAMB .framer-1a4y4ot > :first-child, .framer-LIAMB .framer-cj0ozf > :first-child, .framer-LIAMB .framer-18d8nsq > :first-child, .framer-LIAMB .framer-l8d7j3 > :first-child, .framer-LIAMB .framer-pvrzno > :first-child, .framer-LIAMB .framer-8kns94 > :first-child, .framer-LIAMB .framer-9otn5h > :first-child, .framer-LIAMB .framer-1akml7n > :first-child, .framer-LIAMB .framer-144z12s > :first-child, .framer-LIAMB .framer-3jy2h9 > :first-child { margin-top: 0px; } .framer-LIAMB.framer-72rtr7 > :last-child, .framer-LIAMB .framer-l2bxiu > :last-child, .framer-LIAMB .framer-1rh8odg > :last-child, .framer-LIAMB .framer-1fx4rtq > :last-child, .framer-LIAMB .framer-15g9rrg > :last-child, .framer-LIAMB .framer-1b1joly > :last-child, .framer-LIAMB .framer-heovhp > :last-child, .framer-LIAMB .framer-zwmwpb > :last-child, .framer-LIAMB .framer-ebuzrc > :last-child, .framer-LIAMB .framer-1r761np > :last-child, .framer-LIAMB .framer-1bmyr7 > :last-child, .framer-LIAMB .framer-1hv162h > :last-child, .framer-LIAMB .framer-xr66id > :last-child, .framer-LIAMB .framer-53kgfc > :last-child, .framer-LIAMB .framer-14tmafb > :last-child, .framer-LIAMB .framer-1cmc9vs > :last-child, .framer-LIAMB .framer-wuq59s > :last-child, .framer-LIAMB .framer-1xtnmjq > :last-child, .framer-LIAMB .framer-ba05ce > :last-child, .framer-LIAMB .framer-nr2l1z > :last-child, .framer-LIAMB .framer-7tuh0h > :last-child, .framer-LIAMB .framer-nlqkky > :last-child, .framer-LIAMB .framer-nkr4wi > :last-child, .framer-LIAMB .framer-13qi26t > :last-child, .framer-LIAMB .framer-ifeyqo > :last-child, .framer-LIAMB .framer-mba1gh > :last-child, .framer-LIAMB .framer-1wnwbhp > :last-child, .framer-LIAMB .framer-h7dice > :last-child, .framer-LIAMB .framer-1q21iyu > :last-child, .framer-LIAMB .framer-8m6omd > :last-child, .framer-LIAMB .framer-1a4y4ot > :last-child, .framer-LIAMB .framer-cj0ozf > :last-child, .framer-LIAMB .framer-18d8nsq > :last-child, .framer-LIAMB .framer-l8d7j3 > :last-child, .framer-LIAMB .framer-pvrzno > :last-child, .framer-LIAMB .framer-8kns94 > :last-child, .framer-LIAMB .framer-9otn5h > :last-child, .framer-LIAMB .framer-1akml7n > :last-child, .framer-LIAMB .framer-144z12s > :last-child, .framer-LIAMB .framer-3jy2h9 > :last-child { margin-bottom: 0px; } .framer-LIAMB .framer-1bzducp > *, .framer-LIAMB .framer-13k4u3x > *, .framer-LIAMB .framer-wl23o1 > *, .framer-LIAMB .framer-1yjfbw8 > *, .framer-LIAMB .framer-18ashy > *, .framer-LIAMB .framer-hm2vcr > *, .framer-LIAMB .framer-jfucsp > *, .framer-LIAMB .framer-x77kez > *, .framer-LIAMB .framer-ei25lv > *, .framer-LIAMB .framer-tn5i9l > *, .framer-LIAMB .framer-65y2h2 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-LIAMB .framer-1bzducp > :first-child, .framer-LIAMB .framer-13k4u3x > :first-child, .framer-LIAMB .framer-wl23o1 > :first-child, .framer-LIAMB .framer-1yjfbw8 > :first-child, .framer-LIAMB .framer-18ashy > :first-child, .framer-LIAMB .framer-i5jl2b > :first-child, .framer-LIAMB .framer-2mlkv2 > :first-child, .framer-LIAMB .framer-ja4hw5 > :first-child, .framer-LIAMB .framer-3y76cj > :first-child, .framer-LIAMB .framer-wzrd1y > :first-child, .framer-LIAMB .framer-hm2vcr > :first-child, .framer-LIAMB .framer-jfucsp > :first-child, .framer-LIAMB .framer-1ufnghg > :first-child, .framer-LIAMB .framer-1vpah6h > :first-child, .framer-LIAMB .framer-x77kez > :first-child, .framer-LIAMB .framer-1fn880g > :first-child, .framer-LIAMB .framer-ei25lv > :first-child, .framer-LIAMB .framer-tn5i9l > :first-child, .framer-LIAMB .framer-65y2h2 > :first-child, .framer-LIAMB .framer-ovm9uj > :first-child { margin-left: 0px; } .framer-LIAMB .framer-1bzducp > :last-child, .framer-LIAMB .framer-13k4u3x > :last-child, .framer-LIAMB .framer-wl23o1 > :last-child, .framer-LIAMB .framer-1yjfbw8 > :last-child, .framer-LIAMB .framer-18ashy > :last-child, .framer-LIAMB .framer-i5jl2b > :last-child, .framer-LIAMB .framer-2mlkv2 > :last-child, .framer-LIAMB .framer-ja4hw5 > :last-child, .framer-LIAMB .framer-3y76cj > :last-child, .framer-LIAMB .framer-wzrd1y > :last-child, .framer-LIAMB .framer-hm2vcr > :last-child, .framer-LIAMB .framer-jfucsp > :last-child, .framer-LIAMB .framer-1ufnghg > :last-child, .framer-LIAMB .framer-1vpah6h > :last-child, .framer-LIAMB .framer-x77kez > :last-child, .framer-LIAMB .framer-1fn880g > :last-child, .framer-LIAMB .framer-ei25lv > :last-child, .framer-LIAMB .framer-tn5i9l > :last-child, .framer-LIAMB .framer-65y2h2 > :last-child, .framer-LIAMB .framer-ovm9uj > :last-child { margin-right: 0px; } .framer-LIAMB .framer-l2bxiu > *, .framer-LIAMB .framer-1rh8odg > *, .framer-LIAMB .framer-zwmwpb > *, .framer-LIAMB .framer-1hv162h > *, .framer-LIAMB .framer-xr66id > *, .framer-LIAMB .framer-1cmc9vs > *, .framer-LIAMB .framer-wuq59s > *, .framer-LIAMB .framer-nr2l1z > *, .framer-LIAMB .framer-7tuh0h > *, .framer-LIAMB .framer-13qi26t > *, .framer-LIAMB .framer-ifeyqo > *, .framer-LIAMB .framer-h7dice > *, .framer-LIAMB .framer-1q21iyu > *, .framer-LIAMB .framer-1a4y4ot > *, .framer-LIAMB .framer-cj0ozf > *, .framer-LIAMB .framer-18d8nsq > *, .framer-LIAMB .framer-9otn5h > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-LIAMB .framer-1fx4rtq > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-LIAMB .framer-15g9rrg > *, .framer-LIAMB .framer-1b1joly > *, .framer-LIAMB .framer-1r761np > *, .framer-LIAMB .framer-53kgfc > *, .framer-LIAMB .framer-1xtnmjq > *, .framer-LIAMB .framer-nlqkky > *, .framer-LIAMB .framer-mba1gh > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-LIAMB .framer-heovhp > *, .framer-LIAMB .framer-1bmyr7 > *, .framer-LIAMB .framer-14tmafb > *, .framer-LIAMB .framer-ba05ce > *, .framer-LIAMB .framer-nkr4wi > *, .framer-LIAMB .framer-1wnwbhp > *, .framer-LIAMB .framer-l8d7j3 > *, .framer-LIAMB .framer-pvrzno > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-LIAMB .framer-ebuzrc > *, .framer-LIAMB .framer-8m6omd > *, .framer-LIAMB .framer-8kns94 > *, .framer-LIAMB .framer-144z12s > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-LIAMB .framer-i5jl2b > *, .framer-LIAMB .framer-2mlkv2 > *, .framer-LIAMB .framer-ja4hw5 > *, .framer-LIAMB .framer-3y76cj > *, .framer-LIAMB .framer-wzrd1y > *, .framer-LIAMB .framer-1ufnghg > *, .framer-LIAMB .framer-ovm9uj > * { margin: 0px; margin-left: calc(60px / 2); margin-right: calc(60px / 2); } .framer-LIAMB .framer-1vpah6h > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-LIAMB .framer-1fn880g > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .framer-LIAMB .framer-3jy2h9 > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } }",
    "@media (min-width: 1200px) { .framer-LIAMB .hidden-72rtr7 { display: none !important; } }",
    `@media (min-width: 810px) and (max-width: 1199px) { .framer-LIAMB .hidden-1pgxz5l { display: none !important; } .${de.bodyClassName}-framer-LIAMB { background: rgb(9, 9, 9); } .framer-LIAMB.framer-72rtr7 { width: 810px; } .framer-LIAMB .framer-i5jl2b, .framer-LIAMB .framer-2mlkv2, .framer-LIAMB .framer-ja4hw5, .framer-LIAMB .framer-3y76cj, .framer-LIAMB .framer-wzrd1y { flex-direction: column; gap: 40px; } .framer-LIAMB .framer-1sd5c33 { flex: none; height: var(--framer-aspect-ratio-supported, 704px); width: 100%; } .framer-LIAMB .framer-1r761np, .framer-LIAMB .framer-1xtnmjq, .framer-LIAMB .framer-mba1gh { flex: none; padding: 0px 20px 40px 20px; width: 100%; } .framer-LIAMB .framer-53kgfc, .framer-LIAMB .framer-nlqkky { flex: none; order: 1; padding: 0px 20px 40px 20px; width: 100%; } .framer-LIAMB .framer-125wogl { flex: none; height: var(--framer-aspect-ratio-supported, 744px); order: 0; width: 100%; } .framer-LIAMB .framer-9z1q24, .framer-LIAMB .framer-rk7ceh { flex: none; height: var(--framer-aspect-ratio-supported, 744px); width: 100%; } .framer-LIAMB .framer-1xkxl6w { flex: none; height: var(--framer-aspect-ratio-supported, 704px); order: 0; width: 100%; } .framer-LIAMB .framer-1ufnghg { flex-direction: column; } .framer-LIAMB .framer-1a4y4ot, .framer-LIAMB .framer-cj0ozf, .framer-LIAMB .framer-18d8nsq { flex: none; width: 100%; } .framer-LIAMB .framer-l8d7j3 { flex: 1 0 0px; padding: 40px; width: 1px; } .framer-LIAMB .framer-pvrzno { height: 500px; } .framer-LIAMB .framer-1akml7n { padding: 80px 40px 80px 40px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-LIAMB .framer-i5jl2b, .framer-LIAMB .framer-2mlkv2, .framer-LIAMB .framer-ja4hw5, .framer-LIAMB .framer-3y76cj, .framer-LIAMB .framer-wzrd1y, .framer-LIAMB .framer-1ufnghg { gap: 0px; } .framer-LIAMB .framer-i5jl2b > *, .framer-LIAMB .framer-2mlkv2 > *, .framer-LIAMB .framer-ja4hw5 > *, .framer-LIAMB .framer-3y76cj > *, .framer-LIAMB .framer-wzrd1y > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-LIAMB .framer-i5jl2b > :first-child, .framer-LIAMB .framer-2mlkv2 > :first-child, .framer-LIAMB .framer-ja4hw5 > :first-child, .framer-LIAMB .framer-3y76cj > :first-child, .framer-LIAMB .framer-wzrd1y > :first-child, .framer-LIAMB .framer-1ufnghg > :first-child { margin-top: 0px; } .framer-LIAMB .framer-i5jl2b > :last-child, .framer-LIAMB .framer-2mlkv2 > :last-child, .framer-LIAMB .framer-ja4hw5 > :last-child, .framer-LIAMB .framer-3y76cj > :last-child, .framer-LIAMB .framer-wzrd1y > :last-child, .framer-LIAMB .framer-1ufnghg > :last-child { margin-bottom: 0px; } .framer-LIAMB .framer-1ufnghg > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } }}`,
    `@media (max-width: 809px) { .framer-LIAMB .hidden-lc9gsq { display: none !important; } .${de.bodyClassName}-framer-LIAMB { background: rgb(9, 9, 9); } .framer-LIAMB.framer-72rtr7 { width: 390px; } .framer-LIAMB .framer-1bzducp { flex-direction: column; padding: 5px; } .framer-LIAMB .framer-l2bxiu, .framer-LIAMB .framer-8m6omd, .framer-LIAMB .framer-1a4y4ot, .framer-LIAMB .framer-cj0ozf, .framer-LIAMB .framer-18d8nsq, .framer-LIAMB .framer-8kns94 { flex: none; width: 100%; } .framer-LIAMB .framer-1fzdufa-container { height: 72px; } .framer-LIAMB .framer-1fx4rtq { gap: 60px; padding: 30px 0px 40px 0px; } .framer-LIAMB .framer-1b1joly { gap: 30px; } .framer-LIAMB .framer-heovhp { align-content: center; align-items: center; } .framer-LIAMB .framer-13k4u3x { border-bottom-left-radius: 25px; border-bottom-right-radius: 25px; border-top-left-radius: 25px; border-top-right-radius: 25px; order: 0; } .framer-LIAMB .framer-bzz4li { order: 1; } .framer-LIAMB .framer-1dvcbnj { order: 2; } .framer-LIAMB .framer-wl23o1 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 20px; width: 100%; } .framer-LIAMB .framer-a5mp5g-container { height: 60px; width: 220px; } .framer-LIAMB .framer-1yjfbw8 { justify-content: center; } .framer-LIAMB .framer-zwmwpb { padding: 120px 0px 60px 0px; } .framer-LIAMB .framer-ebuzrc { padding: 0px 10px 0px 10px; } .framer-LIAMB .framer-i5jl2b, .framer-LIAMB .framer-2mlkv2, .framer-LIAMB .framer-ja4hw5, .framer-LIAMB .framer-3y76cj, .framer-LIAMB .framer-wzrd1y { flex-direction: column; gap: 40px; } .framer-LIAMB .framer-1sd5c33 { flex: none; height: var(--framer-aspect-ratio-supported, 296px); width: 100%; } .framer-LIAMB .framer-1r761np, .framer-LIAMB .framer-1xtnmjq, .framer-LIAMB .framer-mba1gh { flex: none; padding: 0px 0px 20px 0px; width: 100%; } .framer-LIAMB .framer-53kgfc, .framer-LIAMB .framer-nlqkky { flex: none; order: 1; padding: 0px 0px 20px 0px; width: 100%; } .framer-LIAMB .framer-125wogl { flex: none; height: var(--framer-aspect-ratio-supported, 336px); order: 0; width: 100%; } .framer-LIAMB .framer-9z1q24 { flex: none; height: var(--framer-aspect-ratio-supported, 336px); width: 100%; } .framer-LIAMB .framer-1xkxl6w { flex: none; height: var(--framer-aspect-ratio-supported, 275px); order: 0; width: 100%; } .framer-LIAMB .framer-rk7ceh { flex: none; height: var(--framer-aspect-ratio-supported, 316px); width: 100%; } .framer-LIAMB .framer-hm2vcr, .framer-LIAMB .framer-tn5i9l { flex-direction: column; padding: 60px 0px 60px 0px; } .framer-LIAMB .framer-1ufnghg, .framer-LIAMB .framer-1vpah6h, .framer-LIAMB .framer-ovm9uj { flex-direction: column; } .framer-LIAMB .framer-x77kez { align-self: unset; flex: none; height: min-content; order: 0; width: 100%; } .framer-LIAMB .framer-l8d7j3 { flex: 1 0 0px; order: 0; padding: 51px 20px 51px 20px; width: 1px; } .framer-LIAMB .framer-pvrzno { flex: none; height: 346px; order: 1; width: 100%; } .framer-LIAMB .framer-1akml7n { padding: 60px 20px 60px 20px; } .framer-LIAMB .framer-144z12s { gap: 40px; order: 0; } .framer-LIAMB .framer-3jy2h9 { order: 1; width: 403px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-LIAMB .framer-1bzducp, .framer-LIAMB .framer-1fx4rtq, .framer-LIAMB .framer-1b1joly, .framer-LIAMB .framer-wl23o1, .framer-LIAMB .framer-i5jl2b, .framer-LIAMB .framer-2mlkv2, .framer-LIAMB .framer-ja4hw5, .framer-LIAMB .framer-3y76cj, .framer-LIAMB .framer-wzrd1y, .framer-LIAMB .framer-hm2vcr, .framer-LIAMB .framer-1ufnghg, .framer-LIAMB .framer-1vpah6h, .framer-LIAMB .framer-tn5i9l, .framer-LIAMB .framer-144z12s, .framer-LIAMB .framer-ovm9uj { gap: 0px; } .framer-LIAMB .framer-1bzducp > *, .framer-LIAMB .framer-hm2vcr > *, .framer-LIAMB .framer-tn5i9l > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-LIAMB .framer-1bzducp > :first-child, .framer-LIAMB .framer-1fx4rtq > :first-child, .framer-LIAMB .framer-1b1joly > :first-child, .framer-LIAMB .framer-wl23o1 > :first-child, .framer-LIAMB .framer-i5jl2b > :first-child, .framer-LIAMB .framer-2mlkv2 > :first-child, .framer-LIAMB .framer-ja4hw5 > :first-child, .framer-LIAMB .framer-3y76cj > :first-child, .framer-LIAMB .framer-wzrd1y > :first-child, .framer-LIAMB .framer-hm2vcr > :first-child, .framer-LIAMB .framer-1ufnghg > :first-child, .framer-LIAMB .framer-1vpah6h > :first-child, .framer-LIAMB .framer-tn5i9l > :first-child, .framer-LIAMB .framer-144z12s > :first-child, .framer-LIAMB .framer-ovm9uj > :first-child { margin-top: 0px; } .framer-LIAMB .framer-1bzducp > :last-child, .framer-LIAMB .framer-1fx4rtq > :last-child, .framer-LIAMB .framer-1b1joly > :last-child, .framer-LIAMB .framer-wl23o1 > :last-child, .framer-LIAMB .framer-i5jl2b > :last-child, .framer-LIAMB .framer-2mlkv2 > :last-child, .framer-LIAMB .framer-ja4hw5 > :last-child, .framer-LIAMB .framer-3y76cj > :last-child, .framer-LIAMB .framer-wzrd1y > :last-child, .framer-LIAMB .framer-hm2vcr > :last-child, .framer-LIAMB .framer-1ufnghg > :last-child, .framer-LIAMB .framer-1vpah6h > :last-child, .framer-LIAMB .framer-tn5i9l > :last-child, .framer-LIAMB .framer-144z12s > :last-child, .framer-LIAMB .framer-ovm9uj > :last-child { margin-bottom: 0px; } .framer-LIAMB .framer-1fx4rtq > *, .framer-LIAMB .framer-1ufnghg > *, .framer-LIAMB .framer-ovm9uj > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-LIAMB .framer-1b1joly > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-LIAMB .framer-wl23o1 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-LIAMB .framer-i5jl2b > *, .framer-LIAMB .framer-2mlkv2 > *, .framer-LIAMB .framer-ja4hw5 > *, .framer-LIAMB .framer-3y76cj > *, .framer-LIAMB .framer-wzrd1y > *, .framer-LIAMB .framer-144z12s > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-LIAMB .framer-1vpah6h > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }}`,
    ...Re,
    ...He,
    ...Ve,
    ...Ae,
    ...qe,
    ...je,
    '.framer-LIAMB[data-border="true"]::after, .framer-LIAMB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  oe = Z(Tr, Vr, "framer-LIAMB"),
  ya = oe;
oe.displayName = "Home";
oe.defaultProps = { height: 6283, width: 1200 };
D(
  oe,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
        {
          family: "Poppins",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrFJXUc1NECPY.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZ1rib2Bg-4.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZ1rib2Bg-4.woff2",
          weight: "500",
        },
        {
          family: "Archivo Black",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/archivoblack/v21/HTxqL289NzCGg4MzN6KJ7eW6OY6P_x7yx3A.woff2",
          weight: "400",
        },
        {
          family: "Arbutus",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/arbutus/v28/NaPYcZ7dG_5J3poob9dtryO8fMU.woff2",
          weight: "400",
        },
      ],
    },
    ...Mr,
    ..._r,
    ...kr,
    ...Nr,
    ...q(Fe),
    ...q(Ge),
    ...q(Te),
    ...q(Ie),
    ...q(ze),
    ...q(Ne),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var wa = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"JKCRzZCbQ":{"layout":["fixed","auto"]},"N6vK4aIqA":{"layout":["fixed","auto"]}}}',
        framerImmutableVariables: "true",
        framerDisplayContentsDiv: "false",
        framerContractVersion: "1",
        framerIntrinsicWidth: "1200",
        framerResponsiveScreen: "",
        framerComponentViewportWidth: "true",
        framerIntrinsicHeight: "6283",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { wa as __FramerMetadata__, ya as default };
//# sourceMappingURL=wR-IAFDvnSn0ZrM3ZiaRkaFVmo9xQsKg1JOe4viO0n4.LNO6W4ZV.mjs.map
