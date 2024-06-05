var D = Object.defineProperty;
var _ = (n, t, e) => t in n ? D(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var P = (n, t, e) => (_(n, typeof t != "symbol" ? t + "" : t, e), e), x = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var j = (n, t, e) => (x(n, t, "read from private field"), e ? e.call(n) : t.get(n)), T = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Y = (n, t, e, i) => (x(n, t, "write to private field"), i ? i.call(n, e) : t.set(n, e), e);
var M = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Q(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var H = { exports: {} }, V = { exports: {} }, F;
function K() {
  return F || (F = 1, function(n) {
    (function(t, e) {
      n.exports ? n.exports = e() : t.EvEmitter = e();
    })(typeof window < "u" ? window : M, function() {
      function t() {
      }
      var e = t.prototype;
      return e.on = function(i, r) {
        if (!(!i || !r)) {
          var s = this._events = this._events || {}, a = s[i] = s[i] || [];
          return a.indexOf(r) == -1 && a.push(r), this;
        }
      }, e.once = function(i, r) {
        if (!(!i || !r)) {
          this.on(i, r);
          var s = this._onceEvents = this._onceEvents || {}, a = s[i] = s[i] || {};
          return a[r] = !0, this;
        }
      }, e.off = function(i, r) {
        var s = this._events && this._events[i];
        if (!(!s || !s.length)) {
          var a = s.indexOf(r);
          return a != -1 && s.splice(a, 1), this;
        }
      }, e.emitEvent = function(i, r) {
        var s = this._events && this._events[i];
        if (!(!s || !s.length)) {
          s = s.slice(0), r = r || [];
          for (var a = this._onceEvents && this._onceEvents[i], h = 0; h < s.length; h++) {
            var d = s[h], l = a && a[d];
            l && (this.off(i, d), delete a[d]), d.apply(this, r);
          }
          return this;
        }
      }, e.allOff = function() {
        delete this._events, delete this._onceEvents;
      }, t;
    });
  }(V)), V.exports;
}
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(n) {
  (function(t, e) {
    n.exports ? n.exports = e(
      t,
      K()
    ) : t.imagesLoaded = e(
      t,
      t.EvEmitter
    );
  })(
    typeof window < "u" ? window : M,
    // --------------------------  factory -------------------------- //
    function(e, i) {
      var r = e.jQuery, s = e.console;
      function a(o, c) {
        for (var u in c)
          o[u] = c[u];
        return o;
      }
      var h = Array.prototype.slice;
      function d(o) {
        if (Array.isArray(o))
          return o;
        var c = typeof o == "object" && typeof o.length == "number";
        return c ? h.call(o) : [o];
      }
      function l(o, c, u) {
        if (!(this instanceof l))
          return new l(o, c, u);
        var m = o;
        if (typeof o == "string" && (m = document.querySelectorAll(o)), !m) {
          s.error("Bad element for imagesLoaded " + (m || o));
          return;
        }
        this.elements = d(m), this.options = a({}, this.options), typeof c == "function" ? u = c : a(this.options, c), u && this.on("always", u), this.getImages(), r && (this.jqDeferred = new r.Deferred()), setTimeout(this.check.bind(this));
      }
      l.prototype = Object.create(i.prototype), l.prototype.options = {}, l.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this);
      }, l.prototype.addElementImages = function(o) {
        o.nodeName == "IMG" && this.addImage(o), this.options.background === !0 && this.addElementBackgroundImages(o);
        var c = o.nodeType;
        if (!(!c || !b[c])) {
          for (var u = o.querySelectorAll("img"), m = 0; m < u.length; m++) {
            var E = u[m];
            this.addImage(E);
          }
          if (typeof this.options.background == "string") {
            var J = o.querySelectorAll(this.options.background);
            for (m = 0; m < J.length; m++) {
              var O = J[m];
              this.addElementBackgroundImages(O);
            }
          }
        }
      };
      var b = {
        1: !0,
        9: !0,
        11: !0
      };
      l.prototype.addElementBackgroundImages = function(o) {
        var c = getComputedStyle(o);
        if (c)
          for (var u = /url\((['"])?(.*?)\1\)/gi, m = u.exec(c.backgroundImage); m !== null; ) {
            var E = m && m[2];
            E && this.addBackground(E, o), m = u.exec(c.backgroundImage);
          }
      }, l.prototype.addImage = function(o) {
        var c = new g(o);
        this.images.push(c);
      }, l.prototype.addBackground = function(o, c) {
        var u = new Z(o, c);
        this.images.push(u);
      }, l.prototype.check = function() {
        var o = this;
        if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) {
          this.complete();
          return;
        }
        function c(u, m, E) {
          setTimeout(function() {
            o.progress(u, m, E);
          });
        }
        this.images.forEach(function(u) {
          u.once("progress", c), u.check();
        });
      }, l.prototype.progress = function(o, c, u) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !o.isLoaded, this.emitEvent("progress", [this, o, c]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, o), this.progressedCount == this.images.length && this.complete(), this.options.debug && s && s.log("progress: " + u, o, c);
      }, l.prototype.complete = function() {
        var o = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(o, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
          var c = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[c](this);
        }
      };
      function g(o) {
        this.img = o;
      }
      g.prototype = Object.create(i.prototype), g.prototype.check = function() {
        var o = this.getIsImageComplete();
        if (o) {
          this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
          return;
        }
        this.proxyImage = new Image(), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src;
      }, g.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth;
      }, g.prototype.confirm = function(o, c) {
        this.isLoaded = o, this.emitEvent("progress", [this, this.img, c]);
      }, g.prototype.handleEvent = function(o) {
        var c = "on" + o.type;
        this[c] && this[c](o);
      }, g.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents();
      }, g.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }, g.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
      };
      function Z(o, c) {
        this.url = o, this.element = c, this.img = new Image();
      }
      return Z.prototype = Object.create(g.prototype), Z.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var o = this.getIsImageComplete();
        o && (this.confirm(this.img.naturalWidth !== 0, "naturalWidth"), this.unbindEvents());
      }, Z.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
      }, Z.prototype.confirm = function(o, c) {
        this.isLoaded = o, this.emitEvent("progress", [this, this.element, c]);
      }, l.makeJQueryPlugin = function(o) {
        o = o || e.jQuery, o && (r = o, r.fn.imagesLoaded = function(c, u) {
          var m = new l(this, c, u);
          return m.jqDeferred.promise(r(this));
        });
      }, l.makeJQueryPlugin(), l;
    }
  );
})(H);
var q = H.exports;
const $ = /* @__PURE__ */ Q(q);
var v = /* @__PURE__ */ ((n) => (n.START = "start", n.STOP = "stop", n.TOGGLE = "toggle", n))(v || {});
const tt = (...n) => (...t) => n.reduceRight((e, i) => (...r) => e(i(...r, ...t)))(), X = (n) => `✨Freezeframe: ${n}✨`, k = (n, ...t) => {
  console.error(X(n), ...t);
}, et = (n, ...t) => {
  console.warn(X(n), ...t);
}, it = () => "ontouchstart" in window || "onmsgesturechange" in window, nt = (n) => n.split(".").pop().toLowerCase().substring(0, 3), rt = (n) => nt(n) === "gif", st = (n) => typeof n == "string" ? document.querySelectorAll(n) : n, ot = (n, t, e) => {
  const i = n instanceof Element ? [n] : n;
  return Array.from(i).reduce((r, s) => {
    if (s instanceof HTMLImageElement)
      r.push(s), rt(s.src) || e.warnings && et("Image does not appear to be a gif", s);
    else {
      const a = s.querySelectorAll("img");
      a.length ? r = r.concat(Array.from(a)) : k("Invalid element", s);
    }
    return r;
  }, []);
}, at = (n) => [...new Set(n)], L = (n) => {
  const t = window.document.createElement("div");
  t.innerHTML = n;
  const e = t.childNodes;
  return e.length > 1 ? e : e[0];
}, ct = (n, t) => {
  n.parentNode.insertBefore(t, n), t.appendChild(n);
};
var lt = /* @__PURE__ */ function() {
  function n(t, e) {
    for (var i = 0; i < e.length; i++) {
      var r = e[i];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }
  return function(t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t;
  };
}(), ut = mt(["", ""], ["", ""]);
function mt(n, t) {
  return Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(t) } }));
}
function ht(n, t) {
  if (!(n instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var I = function() {
  function n() {
    for (var t = this, e = arguments.length, i = Array(e), r = 0; r < e; r++)
      i[r] = arguments[r];
    return ht(this, n), this.tag = function(s) {
      for (var a = arguments.length, h = Array(a > 1 ? a - 1 : 0), d = 1; d < a; d++)
        h[d - 1] = arguments[d];
      return typeof s == "function" ? t.interimTag.bind(t, s) : typeof s == "string" ? t.transformEndResult(s) : (s = s.map(t.transformString.bind(t)), t.transformEndResult(s.reduce(t.processSubstitutions.bind(t, h))));
    }, i.length > 0 && Array.isArray(i[0]) && (i = i[0]), this.transformers = i.map(function(s) {
      return typeof s == "function" ? s() : s;
    }), this.tag;
  }
  return lt(n, [{
    key: "interimTag",
    /**
     * An intermediary template tag that receives a template tag and passes the result of calling the template with the received
     * template tag to our own template tag.
     * @param  {Function}        nextTag          - the received template tag
     * @param  {Array<String>}   template         - the template to process
     * @param  {...*}            ...substitutions - `substitutions` is an array of all substitutions in the template
     * @return {*}                                - the final processed value
     */
    value: function(e, i) {
      for (var r = arguments.length, s = Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
        s[a - 2] = arguments[a];
      return this.tag(ut, e.apply(void 0, [i].concat(s)));
    }
    /**
     * Performs bulk processing on the tagged template, transforming each substitution and then
     * concatenating the resulting values into a string.
     * @param  {Array<*>} substitutions - an array of all remaining substitutions present in this template
     * @param  {String}   resultSoFar   - this iteration's result string so far
     * @param  {String}   remainingPart - the template chunk after the current substitution
     * @return {String}                 - the result of joining this iteration's processed substitution with the result
     */
  }, {
    key: "processSubstitutions",
    value: function(e, i, r) {
      var s = this.transformSubstitution(e.shift(), i);
      return "".concat(i, s, r);
    }
    /**
     * Iterate through each transformer, applying the transformer's `onString` method to the template
     * strings before all substitutions are processed.
     * @param {String}  str - The input string
     * @return {String}     - The final results of processing each transformer
     */
  }, {
    key: "transformString",
    value: function(e) {
      var i = function(s, a) {
        return a.onString ? a.onString(s) : s;
      };
      return this.transformers.reduce(i, e);
    }
    /**
     * When a substitution is encountered, iterates through each transformer and applies the transformer's
     * `onSubstitution` method to the substitution.
     * @param  {*}      substitution - The current substitution
     * @param  {String} resultSoFar  - The result up to and excluding this substitution.
     * @return {*}                   - The final result of applying all substitution transformations.
     */
  }, {
    key: "transformSubstitution",
    value: function(e, i) {
      var r = function(a, h) {
        return h.onSubstitution ? h.onSubstitution(a, i) : a;
      };
      return this.transformers.reduce(r, e);
    }
    /**
     * Iterates through each transformer, applying the transformer's `onEndResult` method to the
     * template literal after all substitutions have finished processing.
     * @param  {String} endResult - The processed template, just before it is returned from the tag
     * @return {String}           - The final results of processing each transformer
     */
  }, {
    key: "transformEndResult",
    value: function(e) {
      var i = function(s, a) {
        return a.onEndResult ? a.onEndResult(s) : s;
      };
      return this.transformers.reduce(i, e);
    }
  }]), n;
}(), p = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return {
    onEndResult: function(i) {
      if (t === "")
        return i.trim();
      if (t = t.toLowerCase(), t === "start" || t === "left")
        return i.replace(/^\s*/, "");
      if (t === "end" || t === "right")
        return i.replace(/\s*$/, "");
      throw new Error("Side not supported: " + t);
    }
  };
};
function ft(n) {
  if (Array.isArray(n)) {
    for (var t = 0, e = Array(n.length); t < n.length; t++)
      e[t] = n[t];
    return e;
  } else
    return Array.from(n);
}
var S = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "initial";
  return {
    onEndResult: function(i) {
      if (t === "initial") {
        var r = i.match(/^[^\S\n]*(?=\S)/gm), s = r && Math.min.apply(Math, ft(r.map(function(h) {
          return h.length;
        })));
        if (s) {
          var a = new RegExp("^.{" + s + "}", "gm");
          return i.replace(a, "");
        }
        return i;
      }
      if (t === "all")
        return i.replace(/^[^\S\n]+/gm, "");
      throw new Error("Unknown type: " + t);
    }
  };
}, R = function(t, e) {
  return {
    onEndResult: function(r) {
      if (t == null || e == null)
        throw new Error("replaceResultTransformer requires at least 2 arguments.");
      return r.replace(t, e);
    }
  };
}, G = function(t, e) {
  return {
    onSubstitution: function(r, s) {
      if (t == null || e == null)
        throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");
      return r == null ? r : r.toString().replace(t, e);
    }
  };
}, dt = {
  separator: "",
  conjunction: "",
  serial: !1
}, y = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : dt;
  return {
    onSubstitution: function(i, r) {
      if (Array.isArray(i)) {
        var s = i.length, a = t.separator, h = t.conjunction, d = t.serial, l = r.match(/(\n?[^\S\n]+)$/);
        if (l ? i = i.join(a + l[1]) : i = i.join(a + " "), h && s > 1) {
          var b = i.lastIndexOf(a);
          i = i.slice(0, b) + (d ? a : "") + " " + h + i.slice(b + 1);
        }
      }
      return i;
    }
  };
}, z = function(t) {
  return {
    onSubstitution: function(i, r) {
      return typeof i == "string" && i.includes(t) && (i = i.split(t)), i;
    }
  };
}, N = function(t) {
  return t != null && !Number.isNaN(t) && typeof t != "boolean";
}, gt = function() {
  return {
    onSubstitution: function(e) {
      return Array.isArray(e) ? e.filter(N) : N(e) ? e : "";
    }
  };
};
new I(y({ separator: "," }), S, p);
new I(y({ separator: ",", conjunction: "and" }), S, p);
new I(y({ separator: ",", conjunction: "or" }), S, p);
var B = new I(z(`
`), gt, y, S, p);
new I(z(`
`), y, S, p, G(/&/g, "&amp;"), G(/</g, "&lt;"), G(/>/g, "&gt;"), G(/"/g, "&quot;"), G(/'/g, "&#x27;"), G(/`/g, "&#x60;"));
new I(R(/(?:\n(?:\s*))+/g, " "), p);
new I(R(/(?:\n\s*)/g, ""), p);
new I(y({ separator: "," }), R(/(?:\s+)/g, " "), p);
new I(y({ separator: ",", conjunction: "or" }), R(/(?:\s+)/g, " "), p);
new I(y({ separator: ",", conjunction: "and" }), R(/(?:\s+)/g, " "), p);
new I(y, S, p);
new I(y, R(/(?:\s+)/g, " "), p);
new I(S, p);
new I(S("all"), p);
const f = {
  SELECTOR: ".freezeframe",
  CONTAINER: "ff-container",
  LOADING_ICON: "ff-loading-icon",
  IMAGE: "ff-image",
  CANVAS: "ff-canvas",
  READY: "ff-ready",
  INACTIVE: "ff-inactive",
  ACTIVE: "ff-active",
  CANVAS_READY: "ff-canvas-ready",
  RESPONSIVE: "ff-responsive",
  OVERLAY: "ff-overlay"
}, C = {
  selector: f.SELECTOR,
  responsive: !0,
  trigger: "hover",
  overlay: !1,
  warnings: !0
}, U = "ff-styles", It = '.ff-container{display:inline-block;position:relative}.ff-container .ff-image{z-index:0;vertical-align:top;opacity:0}.ff-container .ff-canvas{display:inline-block;position:absolute;top:0;left:0;pointer-events:none;z-index:1;vertical-align:top;opacity:0}.ff-container .ff-canvas.ff-canvas-ready{-webkit-transition:opacity .3s;-moz-transition:opacity .3s;transition:opacity .3s;opacity:1}.ff-container.ff-active .ff-image{opacity:1}.ff-container.ff-active .ff-canvas.ff-canvas-ready{-webkit-transition:none;-moz-transition:none;transition:none;opacity:0}.ff-container.ff-active .ff-overlay{display:none}.ff-container.ff-inactive .ff-canvas.ff-canvas-ready{-webkit-transition:opacity .3s;-moz-transition:opacity .3s;transition:opacity .3s;opacity:1}.ff-container.ff-inactive .ff-image{-webkit-transition:opacity .3s;-moz-transition:opacity .3s;transition:opacity .3s;-webkit-transition-delay:.17s;-moz-transition-delay:.17s;transition-delay:.17s;opacity:0}.ff-container.ff-responsive,.ff-container.ff-responsive .ff-image,.ff-container.ff-responsive .ff-canvas{width:100%}.ff-container.ff-loading-icon:before{content:"";position:absolute;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc1MHB4JyBoZWlnaHQ9JzUwcHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXNwaW4iPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiPjxnIHRyYW5zZm9ybT0icm90YXRlKDApIHRyYW5zbGF0ZSgzNCAwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiNmZmZmZmYiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwcyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBmcm9tPSIxLjUiIHRvPSIxIiBiZWdpbj0iMHMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSB0cmFuc2xhdGUoMzQgMCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjZmZmZmZmIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC4xMnMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuMTJzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSg5MCkgdHJhbnNsYXRlKDM0IDApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOCIgZmlsbD0iI2ZmZmZmZiI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAuMSIgYmVnaW49IjAuMjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjI1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTM1KSB0cmFuc2xhdGUoMzQgMCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjZmZmZmZmIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC4zN3MiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuMzdzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgxODApIHRyYW5zbGF0ZSgzNCAwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiNmZmZmZmYiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwLjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgyMjUpIHRyYW5zbGF0ZSgzNCAwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiNmZmZmZmYiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwLjYycyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBmcm9tPSIxLjUiIHRvPSIxIiBiZWdpbj0iMC42MnMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI3MCkgdHJhbnNsYXRlKDM0IDApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOCIgZmlsbD0iI2ZmZmZmZiI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAuMSIgYmVnaW49IjAuNzVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjc1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMzE1KSB0cmFuc2xhdGUoMzQgMCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjZmZmZmZmIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC44N3MiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuODdzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48L2c+PC9zdmc+);background-position:center center;background-repeat:no-repeat;height:46px;width:46px;z-index:3;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ff-container .ff-overlay{background-image:url(data:image/png;base64,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);background-repeat:no-repeat;max-width:94px;max-height:94px;position:absolute;left:0%;right:0%;top:0%;bottom:0%;margin:auto;background-size:contain;background-position:center;pointer-events:none;z-index:100}', pt = () => B(`
    <style id="${U}">
      ${It.toString()}
    </style>
  `), vt = () => B`
    <div class="${f.CONTAINER} ${f.LOADING_ICON}">
    </div>
  `, yt = () => B`
    <canvas class="${f.CANVAS}" width="0" height="0">
    </canvas>
  `, bt = () => B`
    <div class="${f.OVERLAY}">
    </div>
  `;
var A, w, W;
class St {
  constructor(t = f.SELECTOR, e) {
    P(this, "options");
    P(this, "items", /* @__PURE__ */ new Map());
    P(this, "$images", []);
    T(this, A, void 0);
    T(this, w, void 0);
    P(this, "_eventListeners", {
      ...Object.values(v).reduce((t, e) => (t[e] = [], t), {})
    });
    T(this, W, []);
    typeof t == "string" || t instanceof Element || t instanceof HTMLCollection || t instanceof NodeList ? (this.options = { ...C, ...e }, Y(this, A, t)) : typeof t == "object" && !e ? (this.options = { ...C, ...t }, Y(this, A, this.options.selector)) : k(
      "Invalid Freezeframe.js configuration:",
      ...[t, e].filter((i) => i !== void 0)
    ), this._init(j(this, A));
  }
  get _stylesInjected() {
    return !!document.querySelector(`style#${U}`);
  }
  _init(t) {
    this._injectStylesheet(), Y(this, w, it()), this._capture(t), this._load(this.$images);
  }
  _capture(t) {
    this.$images = tt(
      st,
      ot,
      at
    )(t, this.options);
  }
  _load(t) {
    $(t).on("progress", (e, { img: i }) => {
      this._setup(i);
    });
  }
  async _setup(t) {
    const e = this._wrap(t);
    this.items.set(t, e), await this._process(e), this._attach(e);
  }
  _wrap(t) {
    const e = L(vt()), i = L(yt());
    return this.options.responsive && e.classList.add(f.RESPONSIVE), this.options.overlay && e.appendChild(L(bt())), t.classList.add(f.IMAGE), e.appendChild(i), ct(t, e), {
      $container: e,
      $canvas: i,
      $image: t
    };
  }
  _process(t) {
    return new Promise((e) => {
      const { $canvas: i, $image: r, $container: s } = t, a = devicePixelRatio, { width: h, height: d } = r.getClientRects()[0], l = Math.ceil(h * a), b = Math.ceil(d * a), g = new Image(), Z = i.getContext("2d");
      Z.clearRect(0, 0, l, b), g.onerror = function() {
        this.src !== r.src && (this.src = r.src);
      }, g.onload = () => {
        Z.drawImage(g, 0, 0, l, b), i.classList.add(f.CANVAS_READY);
      }, g.setAttribute("width", h.toString()), g.setAttribute("height", d.toString()), g.src = r.dataset.poster || r.src, i.style.setProperty("width", `${h}px`), i.style.setProperty("height", `${d}px`), i.setAttribute("width", l.toString()), i.setAttribute("height", b.toString()), i.addEventListener("transitionend", () => {
        this._ready(s), e(t);
      }, {
        once: !0
      });
    });
  }
  _ready(t) {
    t.classList.add(f.READY), t.classList.add(f.INACTIVE), t.classList.remove(f.LOADING_ICON);
  }
  _attach(t) {
    const { $image: e } = t;
    if (!j(this, w) && this.options.trigger === "hover") {
      const i = () => {
        this._toggleOn(t), this._emit(v.START, t, !0), this._emit(v.TOGGLE, t, !0);
      }, r = () => {
        this._toggleOff(t), this._emit(v.START, t, !1), this._emit(v.TOGGLE, t, !1);
      };
      this._addEventListener(e, "mouseleave", r), this._addEventListener(e, "mouseenter", i);
    }
    if (j(this, w) || this.options.trigger === "click") {
      const i = () => {
        this._toggle(t);
      };
      this._addEventListener(e, "click", i);
    }
  }
  _addEventListener(t, e, i) {
    j(this, W).push({ $image: t, event: e, listener: i }), t.addEventListener(e, i);
  }
  _removeEventListener(t, e, i) {
    t.removeEventListener(e, i);
  }
  _injectStylesheet() {
    this._stylesInjected || document.head.appendChild(
      L(
        pt()
      )
    );
  }
  _emit(t, e, i) {
    this._eventListeners[t].forEach((r) => {
      r(Array.isArray(e) && e.length === 1 ? e[0] : e, i);
    });
  }
  _toggleOn(t) {
    const { $container: e, $image: i } = t;
    e.classList.contains(f.READY) && (i.setAttribute("src", i.src), e.classList.remove(f.INACTIVE), e.classList.add(f.ACTIVE));
  }
  _toggleOff(t) {
    const { $container: e } = t;
    e.classList.contains(f.READY) && (e.classList.add(f.INACTIVE), e.classList.remove(f.ACTIVE));
  }
  _toggle(t) {
    const { $container: e } = t, i = e.classList.contains(f.ACTIVE);
    return i ? this._toggleOff(t) : this._toggleOn(t), !i;
  }
  // public methods
  start() {
    return this.items.forEach((t) => {
      this._toggleOn(t);
    }), this._emit(v.START, [...this.items.values()], !0), this._emit(v.TOGGLE, [...this.items.values()], !0), this;
  }
  stop() {
    return this.items.forEach((t) => {
      this._toggleOff(t);
    }), this._emit(v.STOP, [...this.items.values()], !1), this._emit(v.TOGGLE, [...this.items.values()], !1), this;
  }
  get(t) {
    return [...this.items.values()][t];
  }
  toggle() {
    return this.items.forEach((t) => {
      const e = this._toggle(t);
      e ? this._emit(v.START, [...this.items.values()], !1) : this._emit(v.STOP, [...this.items.values()], !1), this._emit(v.TOGGLE, [...this.items.values()], e);
    }), this;
  }
  on(t, e) {
    return this._eventListeners[t].push(e), this;
  }
  reset(t) {
    if (t) {
      const e = this.items.get(t);
      this._process(e);
    } else
      this.items.forEach((e) => this._process(e));
  }
  destroy() {
    j(this, W).forEach(({ $image: t, event: e, listener: i }) => {
      this._removeEventListener(t, e, i);
    });
  }
}
A = new WeakMap(), w = new WeakMap(), W = new WeakMap();
export {
  St as default
};
