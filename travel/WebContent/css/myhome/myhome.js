/**
 * Created by dell on 2016/9/7.
 */


/*! jQuery v@1.8.1 jquery.com | jquery.org/license */
(function (a, b) {
    function G(a) {
        var b = F[a] = {};
        return p.each(a.split(s), function (a, c) {
            b[c] = !0
        }), b
    }

    function J(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(I, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : +d + "" === d ? +d : H.test(d) ? p.parseJSON(d) : d
                } catch (f) {
                }
                p.data(a, c, d)
            } else {
                d = b
            }
        }
        return d
    }

    function K(a) {
        var b;
        for (b in a) {
            if (b === "data" && p.isEmptyObject(a[b])) {
                continue
            }
            if (b !== "toJSON") {
                return !1
            }
        }
        return !0
    }

    function ba() {
        return !1
    }

    function bb() {
        return !0
    }

    function bh(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function bi(a, b) {
        do {
            a = a[b]
        } while (a && a.nodeType !== 1);
        return a
    }

    function bj(a, b, c) {
        b = b || 0;
        if (p.isFunction(b)) {
            return p.grep(a, function (a, d) {
                var e = !!b.call(a, d, a);
                return e === c
            })
        }
        if (b.nodeType) {
            return p.grep(a, function (a, d) {
                return a === b === c
            })
        }
        if (typeof b == "string") {
            var d = p.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (be.test(b)) {
                return p.filter(b, d, !c)
            }
            b = p.filter(b, d)
        }
        return p.grep(a, function (a, d) {
            return p.inArray(a, b) >= 0 === c
        })
    }

    function bk(a) {
        var b = bl.split("|"), c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop())
            }
        }
        return c
    }

    function bC(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }

    function bD(a, b) {
        if (b.nodeType !== 1 || !p.hasData(a)) {
            return
        }
        var c, d, e, f = p._data(a), g = p._data(b, f), h = f.events;
        if (h) {
            delete g.handle, g.events = {};
            for (c in h) {
                for (d = 0, e = h[c].length; d < e; d++) {
                    p.event.add(b, c, h[c][d])
                }
            }
        }
        g.data && (g.data = p.extend({}, g.data))
    }

    function bE(a, b) {
        var c;
        if (b.nodeType !== 1) {
            return
        }
        b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? (b.parentNode && (b.outerHTML = a.outerHTML), p.support.html5Clone && a.innerHTML && !p.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : c === "input" && bv.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text), b.removeAttribute(p.expando)
    }

    function bF(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bG(a) {
        bv.test(a.type) && (a.defaultChecked = a.checked)
    }

    function bY(a, b) {
        if (b in a) {
            return b
        }
        var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = bW.length;
        while (e--) {
            b = bW[e] + c;
            if (b in a) {
                return b
            }
        }
        return d
    }

    function bZ(a, b) {
        return a = b || a, p.css(a, "display") === "none" || !p.contains(a.ownerDocument, a)
    }

    function b$(a, b) {
        var c, d, e = [], f = 0, g = a.length;
        for (; f < g; f++) {
            c = a[f];
            if (!c.style) {
                continue
            }
            e[f] = p._data(c, "olddisplay"), b ? (!e[f] && c.style.display === "none" && (c.style.display = ""), c.style.display === "" && bZ(c) && (e[f] = p._data(c, "olddisplay", cc(c.nodeName)))) : (d = bH(c, "display"), !e[f] && d !== "none" && p._data(c, "olddisplay", d))
        }
        for (f = 0; f < g; f++) {
            c = a[f];
            if (!c.style) {
                continue
            }
            if (!b || c.style.display === "none" || c.style.display === "") {
                c.style.display = b ? e[f] || "" : "none"
            }
        }
        return a
    }

    function b_(a, b, c) {
        var d = bP.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function ca(a, b, c, d) {
        var e = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0, f = 0;
        for (; e < 4; e += 2) {
            c === "margin" && (f += p.css(a, c + bV[e], !0)), d ? (c === "content" && (f -= parseFloat(bH(a, "padding" + bV[e])) || 0), c !== "margin" && (f -= parseFloat(bH(a, "border" + bV[e] + "Width")) || 0)) : (f += parseFloat(bH(a, "padding" + bV[e])) || 0, c !== "padding" && (f += parseFloat(bH(a, "border" + bV[e] + "Width")) || 0))
        }
        return f
    }

    function cb(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight, e = !0, f = p.support.boxSizing && p.css(a, "boxSizing") === "border-box";
        if (d <= 0 || d == null) {
            d = bH(a, b);
            if (d < 0 || d == null) {
                d = a.style[b]
            }
            if (bQ.test(d)) {
                return d
            }
            e = f && (p.support.boxSizingReliable || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + ca(a, b, c || (f ? "border" : "content"), e) + "px"
    }

    function cc(a) {
        if (bS[a]) {
            return bS[a]
        }
        var b = p("<" + a + ">").appendTo(e.body), c = b.css("display");
        b.remove();
        if (c === "none" || c === "") {
            bI = e.body.appendChild(bI || p.extend(e.createElement("iframe"), {frameBorder: 0, width: 0, height: 0}));
            if (!bJ || !bI.createElement) {
                bJ = (bI.contentWindow || bI.contentDocument).document, bJ.write("<!doctype html><html><body>"), bJ.close()
            }
            b = bJ.body.appendChild(bJ.createElement(a)), c = bH(b, "display"), e.body.removeChild(bI)
        }
        return bS[a] = c, c
    }

    function ci(a, b, c, d) {
        var e;
        if (p.isArray(b)) {
            p.each(b, function (b, e) {
                c || ce.test(a) ? d(a, e) : ci(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
            })
        } else {
            if (!c && p.type(b) === "object") {
                for (e in b) {
                    ci(a + "[" + e + "]", b[e], c, d)
                }
            } else {
                d(a, b)
            }
        }
    }

    function cz(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            var d, e, f, g = b.toLowerCase().split(s), h = 0, i = g.length;
            if (p.isFunction(c)) {
                for (; h < i; h++) {
                    d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
                }
            }
        }
    }

    function cA(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === cv;
        for (; j < k && (l || !h); j++) {
            h = i[j](c, d, e), typeof h == "string" && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = cA(a, c, d, e, h, g)))
        }
        return (l || !h) && !g["*"] && (h = cA(a, c, d, e, "*", g)), h
    }

    function cB(a, c) {
        var d, e, f = p.ajaxSettings.flatOptions || {};
        for (d in c) {
            c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d])
        }
        e && p.extend(!0, a, e)
    }

    function cC(a, c, d) {
        var e, f, g, h, i = a.contents, j = a.dataTypes, k = a.responseFields;
        for (f in k) {
            f in d && (c[k[f]] = d[f])
        }
        while (j[0] === "*") {
            j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"))
        }
        if (e) {
            for (f in i) {
                if (i[f] && i[f].test(e)) {
                    j.unshift(f);
                    break
                }
            }
        }
        if (j[0] in d) {
            g = j[0]
        } else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        if (g) {
            return g !== j[0] && j.unshift(g), d[g]
        }
    }

    function cD(a, b) {
        var c, d, e, f, g = a.dataTypes.slice(), h = g[0], i = {}, j = 0;
        a.dataFilter && (b = a.dataFilter(b, a.dataType));
        if (g[1]) {
            for (c in a.converters) {
                i[c.toLowerCase()] = a.converters[c]
            }
        }
        for (; e = g[++j];) {
            if (e !== "*") {
                if (h !== "*" && h !== e) {
                    c = i[h + " " + e] || i["* " + e];
                    if (!c) {
                        for (d in i) {
                            f = d.split(" ");
                            if (f[1] === e) {
                                c = i[h + " " + f[0]] || i["* " + f[0]];
                                if (c) {
                                    c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
                                    break
                                }
                            }
                        }
                    }
                    if (c !== !0) {
                        if (c && a["throws"]) {
                            b = c(b)
                        } else {
                            try {
                                b = c(b)
                            } catch (k) {
                                return {state: "parsererror", error: c ? k : "No conversion from " + h + " to " + e}
                            }
                        }
                    }
                }
                h = e
            }
        }
        return {state: "success", data: b}
    }

    function cL() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function cM() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    function cU() {
        return setTimeout(function () {
            cN = b
        }, 0), cN = p.now()
    }

    function cV(a, b) {
        p.each(b, function (b, c) {
            var d = (cT[b] || []).concat(cT["*"]), e = 0, f = d.length;
            for (; e < f; e++) {
                if (d[e].call(a, b, c)) {
                    return
                }
            }
        })
    }

    function cW(a, b, c) {
        var d, e = 0, f = 0, g = cS.length, h = p.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            var b = cN || cU(), c = Math.max(0, j.startTime + j.duration - b), d = 1 - (c / j.duration || 0), e = 0, f = j.tweens.length;
            for (; e < f; e++) {
                j.tweens[e].run(d)
            }
            return h.notifyWith(a, [j, d, c]), d < 1 && f ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: p.extend({}, b),
            opts: p.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: cN || cU(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c, d) {
                var e = p.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(e), e
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                for (; c < d; c++) {
                    j.tweens[c].run(1)
                }
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        cX(k, j.opts.specialEasing);
        for (; e < g; e++) {
            d = cS[e].call(j, a, k, j.opts);
            if (d) {
                return d
            }
        }
        return cV(j, k), p.isFunction(j.opts.start) && j.opts.start.call(a, j), p.fx.timer(p.extend(i, {
            anim: j,
            queue: j.opts.queue,
            elem: a
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function cX(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            d = p.camelCase(c), e = b[d], f = a[c], p.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = p.cssHooks[d];
            if (g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e)
                }
            } else {
                b[d] = e
            }
        }
    }

    function cY(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = a.style, n = {}, o = [], q = a.nodeType && bZ(a);
        c.queue || (j = p._queueHooks(a, "fx"), j.unqueued == null && (j.unqueued = 0, k = j.empty.fire, j.empty.fire = function () {
            j.unqueued || k()
        }), j.unqueued++, l.always(function () {
            l.always(function () {
                j.unqueued--, p.queue(a, "fx").length || j.empty.fire()
            })
        })), a.nodeType === 1 && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], p.css(a, "display") === "inline" && p.css(a, "float") === "none" && (!p.support.inlineBlockNeedsLayout || cc(a.nodeName) === "inline" ? m.display = "inline-block" : m.zoom = 1)), c.overflow && (m.overflow = "hidden", p.support.shrinkWrapBlocks || l.done(function () {
            m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2]
        }));
        for (d in b) {
            f = b[d];
            if (cP.exec(f)) {
                delete b[d];
                if (f === (q ? "hide" : "show")) {
                    continue
                }
                o.push(d)
            }
        }
        g = o.length;
        if (g) {
            h = p._data(a, "fxshow") || p._data(a, "fxshow", {}), q ? p(a).show() : l.done(function () {
                p(a).hide()
            }), l.done(function () {
                var b;
                p.removeData(a, "fxshow", !0);
                for (b in n) {
                    p.style(a, b, n[b])
                }
            });
            for (d = 0; d < g; d++) {
                e = o[d], i = l.createTween(e, q ? h[e] : 0), n[e] = h[e] || p.style(a, e), e in h || (h[e] = i.start, q && (i.end = i.start, i.start = e === "width" || e === "height" ? 1 : 0))
            }
        }
    }

    function cZ(a, b, c, d, e) {
        return new cZ.prototype.init(a, b, c, d, e)
    }

    function c$(a, b) {
        var c, d = {height: a}, e = 0;
        b = b ? 1 : 0;
        for (; e < 4; e += 2 - b) {
            c = bV[e], d["margin" + c] = d["padding" + c] = a
        }
        return b && (d.opacity = d.width = a), d
    }

    function da(a) {
        return p.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    var c, d, e = a.document, f = a.location, g = a.navigator, h = a.jQuery, i = a.$, j = Array.prototype.push, k = Array.prototype.slice, l = Array.prototype.indexOf, m = Object.prototype.toString, n = Object.prototype.hasOwnProperty, o = String.prototype.trim, p = function (a, b) {
        return new p.fn.init(a, b, c)
    }, q = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, r = /\S/, s = /\s+/, t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^[\],:{}\s]*$/, x = /(?:^|:|,)(?:\s*\[)+/g, y = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, z = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, A = /^-ms-/, B = /-([\da-z])/gi, C = function (a, b) {
        return (b + "").toUpperCase()
    }, D = function () {
        e.addEventListener ? (e.removeEventListener("DOMContentLoaded", D, !1), p.ready()) : e.readyState === "complete" && (e.detachEvent("onreadystatechange", D), p.ready())
    }, E = {};
    p.fn = p.prototype = {
        constructor: p, init: function (a, c, d) {
            var f, g, h, i;
            if (!a) {
                return this
            }
            if (a.nodeType) {
                return this.context = this[0] = a, this.length = 1, this
            }
            if (typeof a == "string") {
                a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? f = [null, a, null] : f = u.exec(a);
                if (f && (f[1] || !c)) {
                    if (f[1]) {
                        return c = c instanceof p ? c[0] : c, i = c && c.nodeType ? c.ownerDocument || c : e, a = p.parseHTML(f[1], i, !0), v.test(f[1]) && p.isPlainObject(c) && this.attr.call(a, c, !0), p.merge(this, a)
                    }
                    g = e.getElementById(f[2]);
                    if (g && g.parentNode) {
                        if (g.id !== f[2]) {
                            return d.find(a)
                        }
                        this.length = 1, this[0] = g
                    }
                    return this.context = e, this.selector = a, this
                }
                return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
            }
            return p.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), p.makeArray(a, this))
        }, selector: "", jquery: "1.8.1", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return k.call(this)
        }, get: function (a) {
            return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
        }, pushStack: function (a, b, c) {
            var d = p.merge(this.constructor(), a);
            return d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
        }, each: function (a, b) {
            return p.each(this, a, b)
        }, ready: function (a) {
            return p.ready.promise().done(a), this
        }, eq: function (a) {
            return a = +a, a === -1 ? this.slice(a) : this.slice(a, a + 1)
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, slice: function () {
            return this.pushStack(k.apply(this, arguments), "slice", k.call(arguments).join(","))
        }, map: function (a) {
            return this.pushStack(p.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: j, sort: [].sort, splice: [].splice
    }, p.fn.init.prototype = p.fn, p.extend = p.fn.extend = function () {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
        typeof h == "boolean" && (k = h, h = arguments[1] || {}, i = 2), typeof h != "object" && !p.isFunction(h) && (h = {}), j === i && (h = this, --i);
        for (; i < j; i++) {
            if ((a = arguments[i]) != null) {
                for (c in a) {
                    d = h[c], e = a[c];
                    if (h === e) {
                        continue
                    }
                    k && e && (p.isPlainObject(e) || (f = p.isArray(e))) ? (f ? (f = !1, g = d && p.isArray(d) ? d : []) : g = d && p.isPlainObject(d) ? d : {}, h[c] = p.extend(k, g, e)) : e !== b && (h[c] = e)
                }
            }
        }
        return h
    }, p.extend({
        noConflict: function (b) {
            return a.$ === p && (a.$ = i), b && a.jQuery === p && (a.jQuery = h), p
        }, isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? p.readyWait++ : p.ready(!0)
        }, ready: function (a) {
            if (a === !0 ? --p.readyWait : p.isReady) {
                return
            }
            if (!e.body) {
                return setTimeout(p.ready, 1)
            }
            p.isReady = !0;
            if (a !== !0 && --p.readyWait > 0) {
                return
            }
            d.resolveWith(e, [p]), p.fn.trigger && p(e).trigger("ready").off("ready")
        }, isFunction: function (a) {
            return p.type(a) === "function"
        }, isArray: Array.isArray || function (a) {
            return p.type(a) === "array"
        }, isWindow: function (a) {
            return a != null && a == a.window
        }, isNumeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }, type: function (a) {
            return a == null ? String(a) : E[m.call(a)] || "object"
        }, isPlainObject: function (a) {
            if (!a || p.type(a) !== "object" || a.nodeType || p.isWindow(a)) {
                return !1
            }
            try {
                if (a.constructor && !n.call(a, "constructor") && !n.call(a.constructor.prototype, "isPrototypeOf")) {
                    return !1
                }
            } catch (c) {
                return !1
            }
            var d;
            for (d in a) {
            }
            return d === b || n.call(a, d)
        }, isEmptyObject: function (a) {
            var b;
            for (b in a) {
                return !1
            }
            return !0
        }, error: function (a) {
            throw new Error(a)
        }, parseHTML: function (a, b, c) {
            var d;
            return !a || typeof a != "string" ? null : (typeof b == "boolean" && (c = b, b = 0), b = b || e, (d = v.exec(a)) ? [b.createElement(d[1])] : (d = p.buildFragment([a], b, c ? null : []), p.merge([], (d.cacheable ? p.clone(d.fragment) : d.fragment).childNodes)))
        }, parseJSON: function (b) {
            if (!b || typeof b != "string") {
                return null
            }
            b = p.trim(b);
            if (a.JSON && a.JSON.parse) {
                return a.JSON.parse(b)
            }
            if (w.test(b.replace(y, "@").replace(z, "]").replace(x, ""))) {
                return (new Function("return " + b))()
            }
            p.error("Invalid JSON: " + b)
        }, parseXML: function (c) {
            var d, e;
            if (!c || typeof c != "string") {
                return null
            }
            try {
                a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch (f) {
                d = b
            }
            return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + c), d
        }, noop: function () {
        }, globalEval: function (b) {
            b && r.test(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        }, camelCase: function (a) {
            return a.replace(A, "ms-").replace(B, C)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
        }, each: function (a, c, d) {
            var e, f = 0, g = a.length, h = g === b || p.isFunction(a);
            if (d) {
                if (h) {
                    for (e in a) {
                        if (c.apply(a[e], d) === !1) {
                            break
                        }
                    }
                } else {
                    for (; f < g;) {
                        if (c.apply(a[f++], d) === !1) {
                            break
                        }
                    }
                }
            } else {
                if (h) {
                    for (e in a) {
                        if (c.call(a[e], e, a[e]) === !1) {
                            break
                        }
                    }
                } else {
                    for (; f < g;) {
                        if (c.call(a[f], f, a[f++]) === !1) {
                            break
                        }
                    }
                }
            }
            return a
        }, trim: o && !o.call("聽") ? function (a) {
            return a == null ? "" : o.call(a)
        } : function (a) {
            return a == null ? "" : a.toString().replace(t, "")
        }, makeArray: function (a, b) {
            var c, d = b || [];
            return a != null && (c = p.type(a), a.length == null || c === "string" || c === "function" || c === "regexp" || p.isWindow(a) ? j.call(d, a) : p.merge(d, a)), d
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (l) {
                    return l.call(b, a, c)
                }
                d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                for (; c < d; c++) {
                    if (c in b && b[c] === a) {
                        return c
                    }
                }
            }
            return -1
        }, merge: function (a, c) {
            var d = c.length, e = a.length, f = 0;
            if (typeof d == "number") {
                for (; f < d; f++) {
                    a[e++] = c[f]
                }
            } else {
                while (c[f] !== b) {
                    a[e++] = c[f++]
                }
            }
            return a.length = e, a
        }, grep: function (a, b, c) {
            var d, e = [], f = 0, g = a.length;
            c = !!c;
            for (; f < g; f++) {
                d = !!b(a[f], f), c !== d && e.push(a[f])
            }
            return e
        }, map: function (a, c, d) {
            var e, f, g = [], h = 0, i = a.length, j = a instanceof p || i !== b && typeof i == "number" && (i > 0 && a[0] && a[i - 1] || i === 0 || p.isArray(a));
            if (j) {
                for (; h < i; h++) {
                    e = c(a[h], h, d), e != null && (g[g.length] = e)
                }
            } else {
                for (f in a) {
                    e = c(a[f], f, d), e != null && (g[g.length] = e)
                }
            }
            return g.concat.apply([], g)
        }, guid: 1, proxy: function (a, c) {
            var d, e, f;
            return typeof c == "string" && (d = a[c], c = a, a = d), p.isFunction(a) ? (e = k.call(arguments, 2), f = function () {
                return a.apply(c, e.concat(k.call(arguments)))
            }, f.guid = a.guid = a.guid || f.guid || p.guid++, f) : b
        }, access: function (a, c, d, e, f, g, h) {
            var i, j = d == null, k = 0, l = a.length;
            if (d && typeof d == "object") {
                for (k in d) {
                    p.access(a, c, k, d[k], 1, g, e)
                }
                f = 1
            } else {
                if (e !== b) {
                    i = h === b && p.isFunction(e), j && (i ? (i = c, c = function (a, b, c) {
                        return i.call(p(a), c)
                    }) : (c.call(a, e), c = null));
                    if (c) {
                        for (; k < l; k++) {
                            c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h)
                        }
                    }
                    f = 1
                }
            }
            return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
        }, now: function () {
            return (new Date).getTime()
        }
    }), p.ready.promise = function (b) {
        if (!d) {
            d = p.Deferred();
            if (e.readyState === "complete") {
                setTimeout(p.ready, 1)
            } else {
                if (e.addEventListener) {
                    e.addEventListener("DOMContentLoaded", D, !1), a.addEventListener("load", p.ready, !1)
                } else {
                    e.attachEvent("onreadystatechange", D), a.attachEvent("onload", p.ready);
                    var c = !1;
                    try {
                        c = a.frameElement == null && e.documentElement
                    } catch (f) {
                    }
                    c && c.doScroll && function g() {
                        if (!p.isReady) {
                            try {
                                c.doScroll("left")
                            } catch (a) {
                                return setTimeout(g, 50)
                            }
                            p.ready()
                        }
                    }()
                }
            }
        }
        return d.promise(b)
    }, p.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
        E["[object " + b + "]"] = b.toLowerCase()
    }), c = p(e);
    var F = {};
    p.Callbacks = function (a) {
        a = typeof a == "string" ? F[a] || G(a) : p.extend({}, a);
        var c, d, e, f, g, h, i = [], j = !a.once && [], k = function (b) {
            c = a.memory && b, d = !0, h = f || 0, f = 0, g = i.length, e = !0;
            for (; i && h < g; h++) {
                if (i[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
            }
            e = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
        }, l = {
            add: function () {
                if (i) {
                    var b = i.length;
                    (function d(b) {
                        p.each(b, function (b, c) {
                            var e = p.type(c);
                            e === "function" && (!a.unique || !l.has(c)) ? i.push(c) : c && c.length && e !== "string" && d(c)
                        })
                    })(arguments), e ? g = i.length : c && (f = b, k(c))
                }
                return this
            }, remove: function () {
                return i && p.each(arguments, function (a, b) {
                    var c;
                    while ((c = p.inArray(b, i, c)) > -1) {
                        i.splice(c, 1), e && (c <= g && g--, c <= h && h--)
                    }
                }), this
            }, has: function (a) {
                return p.inArray(a, i) > -1
            }, empty: function () {
                return i = [], this
            }, disable: function () {
                return i = j = c = b, this
            }, disabled: function () {
                return !i
            }, lock: function () {
                return j = b, c || l.disable(), this
            }, locked: function () {
                return !j
            }, fireWith: function (a, b) {
                return b = b || [], b = [a, b.slice ? b.slice() : b], i && (!d || j) && (e ? j.push(b) : k(b)), this
            }, fire: function () {
                return l.fireWith(this, arguments), this
            }, fired: function () {
                return !!d
            }
        };
        return l
    }, p.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", p.Callbacks("once memory"), "resolved"], ["reject", "fail", p.Callbacks("once memory"), "rejected"], ["notify", "progress", p.Callbacks("memory")]], c = "pending", d = {
                state: function () {
                    return c
                }, always: function () {
                    return e.done(arguments).fail(arguments), this
                }, then: function () {
                    var a = arguments;
                    return p.Deferred(function (c) {
                        p.each(b, function (b, d) {
                            var f = d[0], g = a[b];
                            e[d[1]](p.isFunction(g) ? function () {
                                var a = g.apply(this, arguments);
                                a && p.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
                            } : c[f])
                        }), a = null
                    }).promise()
                }, promise: function (a) {
                    return typeof a == "object" ? p.extend(a, d) : d
                }
            }, e = {};
            return d.pipe = d.then, p.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[a ^ 1][2].disable, b[2][2].lock), e[f[0]] = g.fire, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = 0, c = k.call(arguments), d = c.length, e = d !== 1 || a && p.isFunction(a.promise) ? d : 0, f = e === 1 ? a : p.Deferred(), g = function (a, b, c) {
                return function (d) {
                    b[a] = this, c[a] = arguments.length > 1 ? k.call(arguments) : d, c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
                }
            }, h, i, j;
            if (d > 1) {
                h = new Array(d), i = new Array(d), j = new Array(d);
                for (; b < d; b++) {
                    c[b] && p.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e
                }
            }
            return e || f.resolveWith(j, c), f.promise()
        }
    }), p.support = function () {
        var b, c, d, f, g, h, i, j, k, l, m, n = e.createElement("div");
        n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = n.getElementsByTagName("*"), d = n.getElementsByTagName("a")[0], d.style.cssText = "top:1px;float:left;opacity:.5";
        if (!c || !c.length || !d) {
            return {}
        }
        f = e.createElement("select"), g = f.appendChild(e.createElement("option")), h = n.getElementsByTagName("input")[0], b = {
            leadingWhitespace: n.firstChild.nodeType === 3,
            tbody: !n.getElementsByTagName("tbody").length,
            htmlSerialize: !!n.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: d.getAttribute("href") === "/a",
            opacity: /^0.5/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: h.value === "on",
            optSelected: g.selected,
            getSetAttribute: n.className !== "t",
            enctype: !!e.createElement("form").enctype,
            html5Clone: e.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: e.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, h.checked = !0, b.noCloneChecked = h.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled;
        try {
            delete n.test
        } catch (o) {
            b.deleteExpando = !1
        }
        !n.addEventListener && n.attachEvent && n.fireEvent && (n.attachEvent("onclick", m = function () {
            b.noCloneEvent = !1
        }), n.cloneNode(!0).fireEvent("onclick"), n.detachEvent("onclick", m)), h = e.createElement("input"), h.value = "t", h.setAttribute("type", "radio"), b.radioValue = h.value === "t", h.setAttribute("checked", "checked"), h.setAttribute("name", "t"), n.appendChild(h), i = e.createDocumentFragment(), i.appendChild(n.lastChild), b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = h.checked, i.removeChild(h), i.appendChild(n);
        if (n.attachEvent) {
            for (k in {submit: !0, change: !0, focusin: !0}) {
                j = "on" + k, l = j in n, l || (n.setAttribute(j, "return;"), l = typeof n[j] == "function"), b[k + "Bubbles"] = l
            }
        }
        return p(function () {
            var c, d, f, g, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;", i = e.getElementsByTagName("body")[0];
            if (!i) {
                return
            }
            c = e.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", i.insertBefore(c, i.firstChild), d = e.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", f = d.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", b.reliableHiddenOffsets = l && f[0].offsetHeight === 0, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = d.offsetWidth === 4, b.doesNotIncludeMarginInBodyOffset = i.offsetTop !== 1, a.getComputedStyle && (b.pixelPosition = (a.getComputedStyle(d, null) || {}).top !== "1%", b.boxSizingReliable = (a.getComputedStyle(d, null) || {width: "4px"}).width === "4px", g = e.createElement("div"), g.style.cssText = d.style.cssText = h, g.style.marginRight = g.style.width = "0", d.style.width = "1px", d.appendChild(g), b.reliableMarginRight = !parseFloat((a.getComputedStyle(g, null) || {}).marginRight)), typeof d.style.zoom != "undefined" && (d.innerHTML = "", d.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = d.offsetWidth === 3, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = d.offsetWidth !== 3, c.style.zoom = 1), i.removeChild(c), c = d = f = g = null
        }), i.removeChild(n), c = d = f = g = h = i = n = null, b
    }();
    var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, I = /([A-Z])/g;
    p.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (p.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (a) {
            return a = a.nodeType ? p.cache[a[p.expando]] : a[p.expando], !!a && !K(a)
        },
        data: function (a, c, d, e) {
            if (!p.acceptData(a)) {
                return
            }
            var f, g, h = p.expando, i = typeof c == "string", j = a.nodeType, k = j ? p.cache : a, l = j ? a[h] : a[h] && h;
            if ((!l || !k[l] || !e && !k[l].data) && i && d === b) {
                return
            }
            l || (j ? a[h] = l = p.deletedIds.pop() || ++p.uuid : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = p.noop));
            if (typeof c == "object" || typeof c == "function") {
                e ? k[l] = p.extend(k[l], c) : k[l].data = p.extend(k[l].data, c)
            }
            return f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[p.camelCase(c)] = d), i ? (g = f[c], g == null && (g = f[p.camelCase(c)])) : g = f, g
        },
        removeData: function (a, b, c) {
            if (!p.acceptData(a)) {
                return
            }
            var d, e, f, g = a.nodeType, h = g ? p.cache : a, i = g ? a[p.expando] : p.expando;
            if (!h[i]) {
                return
            }
            if (b) {
                d = c ? h[i] : h[i].data;
                if (d) {
                    p.isArray(b) || (b in d ? b = [b] : (b = p.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                    for (e = 0, f = b.length; e < f; e++) {
                        delete d[b[e]]
                    }
                    if (!(c ? K : p.isEmptyObject)(d)) {
                        return
                    }
                }
            }
            if (!c) {
                delete h[i].data;
                if (!K(h[i])) {
                    return
                }
            }
            g ? p.cleanData([a], !0) : p.support.deleteExpando || h != h.window ? delete h[i] : h[i] = null
        },
        _data: function (a, b, c) {
            return p.data(a, b, c, !0)
        },
        acceptData: function (a) {
            var b = a.nodeName && p.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }), p.fn.extend({
        data: function (a, c) {
            var d, e, f, g, h, i = this[0], j = 0, k = null;
            if (a === b) {
                if (this.length) {
                    k = p.data(i);
                    if (i.nodeType === 1 && !p._data(i, "parsedAttrs")) {
                        f = i.attributes;
                        for (h = f.length; j < h; j++) {
                            g = f[j].name, g.indexOf("data-") === 0 && (g = p.camelCase(g.substring(5)), J(i, g, k[g]))
                        }
                        p._data(i, "parsedAttrs", !0)
                    }
                }
                return k
            }
            return typeof a == "object" ? this.each(function () {
                p.data(this, a)
            }) : (d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!", p.access(this, function (c) {
                if (c === b) {
                    return k = this.triggerHandler("getData" + e, [d[0]]), k === b && i && (k = p.data(i, a), k = J(i, a, k)), k === b && d[1] ? this.data(d[0]) : k
                }
                d[1] = c, this.each(function () {
                    var b = p(this);
                    b.triggerHandler("setData" + e, d), p.data(this, a, c), b.triggerHandler("changeData" + e, d)
                })
            }, null, c, arguments.length > 1, null, !1))
        }, removeData: function (a) {
            return this.each(function () {
                p.removeData(this, a)
            })
        }
    }), p.extend({
        queue: function (a, b, c) {
            var d;
            if (a) {
                return b = (b || "fx") + "queue", d = p._data(a, b), c && (!d || p.isArray(c) ? d = p._data(a, b, p.makeArray(c)) : d.push(c)), d || []
            }
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = p.queue(a, b), d = c.length, e = c.shift(), f = p._queueHooks(a, b), g = function () {
                p.dequeue(a, b)
            };
            e === "inprogress" && (e = c.shift(), d--), e && (b === "fx" && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return p._data(a, c) || p._data(a, c, {
                    empty: p.Callbacks("once memory").add(function () {
                        p.removeData(a, b + "queue", !0), p.removeData(a, c, !0)
                    })
                })
        }
    }), p.fn.extend({
        queue: function (a, c) {
            var d = 2;
            return typeof a != "string" && (c = a, a = "fx", d--), arguments.length < d ? p.queue(this[0], a) : c === b ? this : this.each(function () {
                var b = p.queue(this, a, c);
                p._queueHooks(this, a), a === "fx" && b[0] !== "inprogress" && p.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                p.dequeue(this, a)
            })
        }, delay: function (a, b) {
            return a = p.fx ? p.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, c) {
            var d, e = 1, f = p.Deferred(), g = this, h = this.length, i = function () {
                --e || f.resolveWith(g, [g])
            };
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            while (h--) {
                d = p._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i))
            }
            return i(), f.promise(c)
        }
    });
    var L, M, N, O = /[\t\r\n]/g, P = /\r/g, Q = /^(?:button|input)$/i, R = /^(?:button|input|object|select|textarea)$/i, S = /^a(?:rea|)$/i, T = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, U = p.support.getSetAttribute;
    p.fn.extend({
        attr: function (a, b) {
            return p.access(this, p.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                p.removeAttr(this, a)
            })
        }, prop: function (a, b) {
            return p.access(this, p.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return a = p.propFix[a] || a, this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {
                }
            })
        }, addClass: function (a) {
            var b, c, d, e, f, g, h;
            if (p.isFunction(a)) {
                return this.each(function (b) {
                    p(this).addClass(a.call(this, b, this.className))
                })
            }
            if (a && typeof a == "string") {
                b = a.split(s);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) {
                        if (!e.className && b.length === 1) {
                            e.className = a
                        } else {
                            f = " " + e.className + " ";
                            for (g = 0, h = b.length; g < h; g++) {
                                ~f.indexOf(" " + b[g] + " ") || (f += b[g] + " ")
                            }
                            e.className = p.trim(f)
                        }
                    }
                }
            }
            return this
        }, removeClass: function (a) {
            var c, d, e, f, g, h, i;
            if (p.isFunction(a)) {
                return this.each(function (b) {
                    p(this).removeClass(a.call(this, b, this.className))
                })
            }
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(s);
                for (h = 0, i = this.length; h < i; h++) {
                    e = this[h];
                    if (e.nodeType === 1 && e.className) {
                        d = (" " + e.className + " ").replace(O, " ");
                        for (f = 0, g = c.length; f < g; f++) {
                            while (d.indexOf(" " + c[f] + " ") > -1) {
                                d = d.replace(" " + c[f] + " ", " ")
                            }
                        }
                        e.className = a ? p.trim(d) : ""
                    }
                }
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a, d = typeof b == "boolean";
            return p.isFunction(a) ? this.each(function (c) {
                p(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function () {
                if (c === "string") {
                    var e, f = 0, g = p(this), h = b, i = a.split(s);
                    while (e = i[f++]) {
                        h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e)
                    }
                } else {
                    if (c === "undefined" || c === "boolean") {
                        this.className && p._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : p._data(this, "__className__") || ""
                    }
                }
            })
        }, hasClass: function (a) {
            var b = " " + a + " ", c = 0, d = this.length;
            for (; c < d; c++) {
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(O, " ").indexOf(b) > -1) {
                    return !0
                }
            }
            return !1
        }, val: function (a) {
            var c, d, e, f = this[0];
            if (!arguments.length) {
                if (f) {
                    return c = p.valHooks[f.type] || p.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, typeof d == "string" ? d.replace(P, "") : d == null ? "" : d)
                }
                return
            }
            return e = p.isFunction(a), this.each(function (d) {
                var f, g = p(this);
                if (this.nodeType !== 1) {
                    return
                }
                e ? f = a.call(this, d, g.val()) : f = a, f == null ? f = "" : typeof f == "number" ? f += "" : p.isArray(f) && (f = p.map(f, function (a) {
                    return a == null ? "" : a + ""
                })), c = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()];
                if (!c || !("set" in c) || c.set(this, f, "value") === b) {
                    this.value = f
                }
            })
        }
    }), p.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            }, select: {
                get: function (a) {
                    var b, c, d, e, f = a.selectedIndex, g = [], h = a.options, i = a.type === "select-one";
                    if (f < 0) {
                        return null
                    }
                    c = i ? f : 0, d = i ? f + 1 : h.length;
                    for (; c < d; c++) {
                        e = h[c];
                        if (e.selected && (p.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !p.nodeName(e.parentNode, "optgroup"))) {
                            b = p(e).val();
                            if (i) {
                                return b
                            }
                            g.push(b)
                        }
                    }
                    return i && !g.length && h.length ? p(h[f]).val() : g
                }, set: function (a, b) {
                    var c = p.makeArray(b);
                    return p(a).find("option").each(function () {
                        this.selected = p.inArray(p(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        attrFn: {},
        attr: function (a, c, d, e) {
            var f, g, h, i = a.nodeType;
            if (!a || i === 3 || i === 8 || i === 2) {
                return
            }
            if (e && p.isFunction(p.fn[c])) {
                return p(a)[c](d)
            }
            if (typeof a.getAttribute == "undefined") {
                return p.prop(a, c, d)
            }
            h = i !== 1 || !p.isXMLDoc(a), h && (c = c.toLowerCase(), g = p.attrHooks[c] || (T.test(c) ? M : L));
            if (d !== b) {
                if (d === null) {
                    p.removeAttr(a, c);
                    return
                }
                return g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, "" + d), d)
            }
            return g && "get" in g && h && (f = g.get(a, c)) !== null ? f : (f = a.getAttribute(c), f === null ? b : f)
        },
        removeAttr: function (a, b) {
            var c, d, e, f, g = 0;
            if (b && a.nodeType === 1) {
                d = b.split(s);
                for (; g < d.length; g++) {
                    e = d[g], e && (c = p.propFix[e] || e, f = T.test(e), f || p.attr(a, e, ""), a.removeAttribute(U ? e : c), f && c in a && (a[c] = !1))
                }
            }
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (Q.test(a.nodeName) && a.parentNode) {
                        p.error("type property can't be changed")
                    } else {
                        if (!p.support.radioValue && b === "radio" && p.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            }, value: {
                get: function (a, b) {
                    return L && p.nodeName(a, "button") ? L.get(a, b) : b in a ? a.value : null
                }, set: function (a, b, c) {
                    if (L && p.nodeName(a, "button")) {
                        return L.set(a, b, c)
                    }
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e, f, g, h = a.nodeType;
            if (!a || h === 3 || h === 8 || h === 2) {
                return
            }
            return g = h !== 1 || !p.isXMLDoc(a), g && (c = p.propFix[c] || c, f = p.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && (e = f.get(a, c)) !== null ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : R.test(a.nodeName) || S.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), M = {
        get: function (a, c) {
            var d, e = p.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        }, set: function (a, b, c) {
            var d;
            return b === !1 ? p.removeAttr(a, c) : (d = p.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
        }
    }, U || (N = {name: !0, id: !0, coords: !0}, L = p.valHooks.button = {
        get: function (a, c) {
            var d;
            return d = a.getAttributeNode(c), d && (N[c] ? d.value !== "" : d.specified) ? d.value : b
        }, set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || (d = e.createAttribute(c), a.setAttributeNode(d)), d.value = b + ""
        }
    }, p.each(["width", "height"], function (a, b) {
        p.attrHooks[b] = p.extend(p.attrHooks[b], {
            set: function (a, c) {
                if (c === "") {
                    return a.setAttribute(b, "auto"), c
                }
            }
        })
    }), p.attrHooks.contenteditable = {
        get: L.get, set: function (a, b, c) {
            b === "" && (b = "false"), L.set(a, b, c)
        }
    }), p.support.hrefNormalized || p.each(["href", "src", "width", "height"], function (a, c) {
        p.attrHooks[c] = p.extend(p.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), p.support.style || (p.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        }, set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }), p.support.optSelected || (p.propHooks.selected = p.extend(p.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    })), p.support.enctype || (p.propFix.enctype = "encoding"), p.support.checkOn || p.each(["radio", "checkbox"], function () {
        p.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), p.each(["radio", "checkbox"], function () {
        p.valHooks[this] = p.extend(p.valHooks[this], {
            set: function (a, b) {
                if (p.isArray(b)) {
                    return a.checked = p.inArray(p(a).val(), b) >= 0
                }
            }
        })
    });
    var V = /^(?:textarea|input|select)$/i, W = /^([^\.]*|)(?:\.(.+)|)$/, X = /(?:^|\s)hover(\.\S+|)\b/, Y = /^key/, Z = /^(?:mouse|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = function (a) {
        return p.event.special.hover ? a : a.replace(X, "mouseenter$1 mouseleave$1")
    };
    p.event = {
        add: function (a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, q, r;
            if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(g = p._data(a))) {
                return
            }
            d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = p.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function (a) {
                return typeof p != "undefined" && (!a || p.event.triggered !== a.type) ? p.event.dispatch.apply(h.elem, arguments) : b
            }, h.elem = a), c = p.trim(_(c)).split(" ");
            for (j = 0; j < c.length; j++) {
                k = W.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), r = p.event.special[l] || {}, l = (f ? r.delegateType : r.bindType) || l, r = p.event.special[l] || {}, n = p.extend({
                    type: l,
                    origType: k[1],
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    namespace: m.join(".")
                }, o), q = i[l];
                if (!q) {
                    q = i[l] = [], q.delegateCount = 0;
                    if (!r.setup || r.setup.call(a, e, m, h) === !1) {
                        a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h)
                    }
                }
                r.add && (r.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? q.splice(q.delegateCount++, 0, n) : q.push(n), p.event.global[l] = !0
            }
            a = null
        },
        global: {},
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, q, r = p.hasData(a) && p._data(a);
            if (!r || !(m = r.events)) {
                return
            }
            b = p.trim(_(b || "")).split(" ");
            for (f = 0; f < b.length; f++) {
                g = W.exec(b[f]) || [], h = i = g[1], j = g[2];
                if (!h) {
                    for (h in m) {
                        p.event.remove(a, h + b[f], c, d, !0)
                    }
                    continue
                }
                n = p.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for (l = 0; l < o.length; l++) {
                    q = o[l], (e || i === q.origType) && (!c || c.guid === q.guid) && (!j || j.test(q.namespace)) && (!d || d === q.selector || d === "**" && q.selector) && (o.splice(l--, 1), q.selector && o.delegateCount--, n.remove && n.remove.call(a, q))
                }
                o.length === 0 && k !== o.length && ((!n.teardown || n.teardown.call(a, j, r.handle) === !1) && p.removeEvent(a, h, r.handle), delete m[h])
            }
            p.isEmptyObject(m) && (delete r.handle, p.removeData(a, "events", !0))
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (c, d, f, g) {
            if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
                var h, i, j, k, l, m, n, o, q, r, s = c.type || c, t = [];
                if ($.test(s + p.event.triggered)) {
                    return
                }
                s.indexOf("!") >= 0 && (s = s.slice(0, -1), i = !0), s.indexOf(".") >= 0 && (t = s.split("."), s = t.shift(), t.sort());
                if ((!f || p.event.customEvent[s]) && !p.event.global[s]) {
                    return
                }
                c = typeof c == "object" ? c[p.expando] ? c : new p.Event(s, c) : new p.Event(s), c.type = s, c.isTrigger = !0, c.exclusive = i, c.namespace = t.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, m = s.indexOf(":") < 0 ? "on" + s : "";
                if (!f) {
                    h = p.cache;
                    for (j in h) {
                        h[j].events && h[j].events[s] && p.event.trigger(c, d, h[j].handle.elem, !0)
                    }
                    return
                }
                c.result = b, c.target || (c.target = f), d = d != null ? p.makeArray(d) : [], d.unshift(c), n = p.event.special[s] || {};
                if (n.trigger && n.trigger.apply(f, d) === !1) {
                    return
                }
                q = [[f, n.bindType || s]];
                if (!g && !n.noBubble && !p.isWindow(f)) {
                    r = n.delegateType || s, k = $.test(r + s) ? f : f.parentNode;
                    for (l = f; k; k = k.parentNode) {
                        q.push([k, r]), l = k
                    }
                    l === (f.ownerDocument || e) && q.push([l.defaultView || l.parentWindow || a, r])
                }
                for (j = 0; j < q.length && !c.isPropagationStopped(); j++) {
                    k = q[j][0], c.type = q[j][1], o = (p._data(k, "events") || {})[c.type] && p._data(k, "handle"), o && o.apply(k, d), o = m && k[m], o && p.acceptData(k) && o.apply(k, d) === !1 && c.preventDefault()
                }
                return c.type = s, !g && !c.isDefaultPrevented() && (!n._default || n._default.apply(f.ownerDocument, d) === !1) && (s !== "click" || !p.nodeName(f, "a")) && p.acceptData(f) && m && f[s] && (s !== "focus" && s !== "blur" || c.target.offsetWidth !== 0) && !p.isWindow(f) && (l = f[m], l && (f[m] = null), p.event.triggered = s, f[s](), p.event.triggered = b, l && (f[m] = l)), c.result
            }
            return
        },
        dispatch: function (c) {
            c = p.event.fix(c || a.event);
            var d, e, f, g, h, i, j, k, l, m, n = (p._data(this, "events") || {})[c.type] || [], o = n.delegateCount, q = [].slice.call(arguments), r = !c.exclusive && !c.namespace, s = p.event.special[c.type] || {}, t = [];
            q[0] = c, c.delegateTarget = this;
            if (s.preDispatch && s.preDispatch.call(this, c) === !1) {
                return
            }
            if (o && (!c.button || c.type !== "click")) {
                for (f = c.target; f != this; f = f.parentNode || this) {
                    if (f.disabled !== !0 || c.type !== "click") {
                        h = {}, j = [];
                        for (d = 0; d < o; d++) {
                            k = n[d], l = k.selector, h[l] === b && (h[l] = p(l, this).index(f) >= 0), h[l] && j.push(k)
                        }
                        j.length && t.push({elem: f, matches: j})
                    }
                }
            }
            n.length > o && t.push({elem: this, matches: n.slice(o)});
            for (d = 0; d < t.length && !c.isPropagationStopped(); d++) {
                i = t[d], c.currentTarget = i.elem;
                for (e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++) {
                    k = i.matches[e];
                    if (r || !c.namespace && !k.namespace || c.namespace_re && c.namespace_re.test(k.namespace)) {
                        c.data = k.data, c.handleObj = k, g = ((p.event.special[k.origType] || {}).handle || k.handler).apply(i.elem, q), g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation()))
                    }
                }
            }
            return s.postDispatch && s.postDispatch.call(this, c), c.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, c) {
                var d, f, g, h = c.button, i = c.fromElement;
                return a.pageX == null && c.clientX != null && (d = a.target.ownerDocument || e, f = d.documentElement, g = d.body, a.pageX = c.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? c.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[p.expando]) {
                return a
            }
            var b, c, d = a, f = p.event.fixHooks[a.type] || {}, g = f.props ? this.props.concat(f.props) : this.props;
            a = p.Event(d);
            for (b = g.length; b;) {
                c = g[--b], a[c] = d[c]
            }
            return a.target || (a.target = d.srcElement || e), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, f.filter ? f.filter(a, d) : a
        },
        special: {
            load: {noBubble: !0},
            focus: {delegateType: "focusin"},
            blur: {delegateType: "focusout"},
            beforeunload: {
                setup: function (a, b, c) {
                    p.isWindow(this) && (this.onbeforeunload = c)
                }, teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = p.extend(new p.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? p.event.trigger(e, null, b) : p.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, p.event.handle = p.event.dispatch, p.removeEvent = e.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] == "undefined" && (a[d] = null), a.detachEvent(d, c))
    }, p.Event = function (a, b) {
        if (this instanceof p.Event) {
            a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? bb : ba) : this.type = a, b && p.extend(this, b), this.timeStamp = a && a.timeStamp || p.now(), this[p.expando] = !0
        } else {
            return new p.Event(a, b)
        }
    }, p.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = bb;
            var a = this.originalEvent;
            if (!a) {
                return
            }
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        }, stopPropagation: function () {
            this.isPropagationStopped = bb;
            var a = this.originalEvent;
            if (!a) {
                return
            }
            a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = bb, this.stopPropagation()
        }, isDefaultPrevented: ba, isPropagationStopped: ba, isImmediatePropagationStopped: ba
    }, p.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        p.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj, g = f.selector;
                if (!e || e !== d && !p.contains(d, e)) {
                    a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b
                }
                return c
            }
        }
    }), p.support.submitBubbles || (p.event.special.submit = {
        setup: function () {
            if (p.nodeName(this, "form")) {
                return !1
            }
            p.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target, d = p.nodeName(c, "input") || p.nodeName(c, "button") ? c.form : b;
                d && !p._data(d, "_submit_attached") && (p.event.add(d, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), p._data(d, "_submit_attached", !0))
            })
        }, postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && p.event.simulate("submit", this.parentNode, a, !0))
        }, teardown: function () {
            if (p.nodeName(this, "form")) {
                return !1
            }
            p.event.remove(this, "._submit")
        }
    }), p.support.changeBubbles || (p.event.special.change = {
        setup: function () {
            if (V.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") {
                    p.event.add(this, "propertychange._change", function (a) {
                        a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), p.event.add(this, "click._change", function (a) {
                        this._just_changed && !a.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, a, !0)
                    })
                }
                return !1
            }
            p.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                V.test(b.nodeName) && !p._data(b, "_change_attached") && (p.event.add(b, "change._change", function (a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && p.event.simulate("change", this.parentNode, a, !0)
                }), p._data(b, "_change_attached", !0))
            })
        }, handle: function (a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") {
                return a.handleObj.handler.apply(this, arguments)
            }
        }, teardown: function () {
            return p.event.remove(this, "._change"), !V.test(this.nodeName)
        }
    }), p.support.focusinBubbles || p.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = 0, d = function (a) {
            p.event.simulate(b, a.target, p.event.fix(a), !0)
        };
        p.event.special[b] = {
            setup: function () {
                c++ === 0 && e.addEventListener(a, d, !0)
            }, teardown: function () {
                --c === 0 && e.removeEventListener(a, d, !0)
            }
        }
    }), p.fn.extend({
        on: function (a, c, d, e, f) {
            var g, h;
            if (typeof a == "object") {
                typeof c != "string" && (d = d || c, c = b);
                for (h in a) {
                    this.on(h, c, d, a[h], f)
                }
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1) {
                e = ba
            } else {
                if (!e) {
                    return this
                }
            }
            return f === 1 && (g = e, e = function (a) {
                return p().off(a), g.apply(this, arguments)
            }, e.guid = g.guid || (g.guid = p.guid++)), this.each(function () {
                p.event.add(this, a, e, d, c)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) {
                return e = a.handleObj, p(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this
            }
            if (typeof a == "object") {
                for (f in a) {
                    this.off(f, c, a[f])
                }
                return this
            }
            if (c === !1 || typeof c == "function") {
                d = c, c = b
            }
            return d === !1 && (d = ba), this.each(function () {
                p.event.remove(this, a, d, c)
            })
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, live: function (a, b, c) {
            return p(this.context).on(a, this.selector, b, c), this
        }, die: function (a, b) {
            return p(this.context).off(a, this.selector || "**", b), this
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a || "**", c)
        }, trigger: function (a, b) {
            return this.each(function () {
                p.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            if (this[0]) {
                return p.event.trigger(a, b, this[0], !0)
            }
        }, toggle: function (a) {
            var b = arguments, c = a.guid || p.guid++, d = 0, e = function (c) {
                var e = (p._data(this, "lastToggle" + a.guid) || 0) % d;
                return p._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
            };
            e.guid = c;
            while (d < b.length) {
                b[d++].guid = c
            }
            return this.click(e)
        }, hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        p.fn[b] = function (a, c) {
            return c == null && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, Y.test(b) && (p.event.fixHooks[b] = p.event.keyHooks), Z.test(b) && (p.event.fixHooks[b] = p.event.mouseHooks)
    }), function (a, b) {
        function $(a, b, c, d) {
            c = c || [], b = b || q;
            var e, f, g, j, k = b.nodeType;
            if (k !== 1 && k !== 9) {
                return []
            }
            if (!a || typeof a != "string") {
                return c
            }
            g = h(b);
            if (!g && !d) {
                if (e = L.exec(a)) {
                    if (j = e[1]) {
                        if (k === 9) {
                            f = b.getElementById(j);
                            if (!f || !f.parentNode) {
                                return c
                            }
                            if (f.id === j) {
                                return c.push(f), c
                            }
                        } else {
                            if (b.ownerDocument && (f = b.ownerDocument.getElementById(j)) && i(b, f) && f.id === j) {
                                return c.push(f), c
                            }
                        }
                    } else {
                        if (e[2]) {
                            return u.apply(c, t.call(b.getElementsByTagName(a), 0)), c
                        }
                        if ((j = e[3]) && X && b.getElementsByClassName) {
                            return u.apply(c, t.call(b.getElementsByClassName(j), 0)), c
                        }
                    }
                }
            }
            return bk(a, b, c, d, g)
        }

        function _(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return c === "input" && b.type === a
            }
        }

        function ba(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return (c === "input" || c === "button") && b.type === a
            }
        }

        function bb(a, b, c) {
            if (a === b) {
                return c
            }
            var d = a.nextSibling;
            while (d) {
                if (d === b) {
                    return -1
                }
                d = d.nextSibling
            }
            return 1
        }

        function bc(a, b, c, d) {
            var e, g, h, i, j, k, l, m, n, p, r = !c && b !== q, s = (r ? "<s>" : "") + a.replace(H, "$1<s>"), u = y[o][s];
            if (u) {
                return d ? 0 : t.call(u, 0)
            }
            j = a, k = [], m = 0, n = f.preFilter, p = f.filter;
            while (j) {
                if (!e || (g = I.exec(j))) {
                    g && (j = j.slice(g[0].length), h.selector = l), k.push(h = []), l = "", r && (j = " " + j)
                }
                e = !1;
                if (g = J.exec(j)) {
                    l += g[0], j = j.slice(g[0].length), e = h.push({
                        part: g.pop().replace(H, " "),
                        string: g[0],
                        captures: g
                    })
                }
                for (i in p) {
                    (g = S[i].exec(j)) && (!n[i] || (g = n[i](g, b, c))) && (l += g[0], j = j.slice(g[0].length), e = h.push({
                        part: i,
                        string: g.shift(),
                        captures: g
                    }))
                }
                if (!e) {
                    break
                }
            }
            return l && (h.selector = l), d ? j.length : j ? $.error(a) : t.call(y(s, k), 0)
        }

        function bd(a, b, e, f) {
            var g = b.dir, h = s++;
            return a || (a = function (a) {
                return a === e
            }), b.first ? function (b) {
                while (b = b[g]) {
                    if (b.nodeType === 1) {
                        return a(b) && b
                    }
                }
            } : f ? function (b) {
                while (b = b[g]) {
                    if (b.nodeType === 1 && a(b)) {
                        return b
                    }
                }
            } : function (b) {
                var e, f = h + "." + c, i = f + "." + d;
                while (b = b[g]) {
                    if (b.nodeType === 1) {
                        if ((e = b[o]) === i) {
                            return b.sizset
                        }
                        if (typeof e == "string" && e.indexOf(f) === 0) {
                            if (b.sizset) {
                                return b
                            }
                        } else {
                            b[o] = i;
                            if (a(b)) {
                                return b.sizset = !0, b
                            }
                            b.sizset = !1
                        }
                    }
                }
            }
        }

        function be(a, b) {
            return a ? function (c) {
                var d = b(c);
                return d && a(d === !0 ? c : d)
            } : b
        }

        function bf(a, b, c) {
            var d, e, g = 0;
            for (; d = a[g]; g++) {
                f.relative[d.part] ? e = bd(e, f.relative[d.part], b, c) : e = be(e, f.filter[d.part].apply(null, d.captures.concat(b, c)))
            }
            return e
        }

        function bg(a) {
            return function (b) {
                var c, d = 0;
                for (; c = a[d]; d++) {
                    if (c(b)) {
                        return !0
                    }
                }
                return !1
            }
        }

        function bh(a, b, c, d) {
            var e = 0, f = b.length;
            for (; e < f; e++) {
                $(a, b[e], c, d)
            }
        }

        function bi(a, b, c, d, e, g) {
            var h, i = f.setFilters[b.toLowerCase()];
            return i || $.error(b), (a || !(h = e)) && bh(a || "*", d, h = [], e), h.length > 0 ? i(h, c, g) : []
        }

        function bj(a, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q, r, s = 0, t = a.length, v = S.POS, w = new RegExp("^" + v.source + "(?!" + A + ")", "i"), x = function () {
                var a = 1, c = arguments.length - 2;
                for (; a < c; a++) {
                    arguments[a] === b && (n[a] = b)
                }
            };
            for (; s < t; s++) {
                f = a[s], g = "", m = e;
                for (h = 0, i = f.length; h < i; h++) {
                    j = f[h], k = j.string;
                    if (j.part === "PSEUDO") {
                        v.exec(""), l = 0;
                        while (n = v.exec(k)) {
                            o = !0, p = v.lastIndex = n.index + n[0].length;
                            if (p > l) {
                                g += k.slice(l, n.index), l = p, q = [c], J.test(g) && (m && (q = m), m = e);
                                if (r = O.test(g)) {
                                    g = g.slice(0, -5).replace(J, "$&*"), l++
                                }
                                n.length > 1 && n[0].replace(w, x), m = bi(g, n[1], n[2], q, m, r)
                            }
                            g = ""
                        }
                    }
                    o || (g += k), o = !1
                }
                g ? J.test(g) ? bh(g, m || [c], d, e) : $(g, c, d, e ? e.concat(m) : m) : u.apply(d, m)
            }
            return t === 1 ? d : $.uniqueSort(d)
        }

        function bk(a, b, e, g, h) {
            a = a.replace(H, "$1");
            var i, k, l, m, n, o, p, q, r, s, v = bc(a, b, h), w = b.nodeType;
            if (S.POS.test(a)) {
                return bj(v, b, e, g)
            }
            if (g) {
                i = t.call(g, 0)
            } else {
                if (v.length === 1) {
                    if ((o = t.call(v[0], 0)).length > 2 && (p = o[0]).part === "ID" && w === 9 && !h && f.relative[o[1].part]) {
                        b = f.find.ID(p.captures[0].replace(R, ""), b, h)[0];
                        if (!b) {
                            return e
                        }
                        a = a.slice(o.shift().string.length)
                    }
                    r = (v = N.exec(o[0].string)) && !v.index && b.parentNode || b, q = "";
                    for (n = o.length - 1; n >= 0; n--) {
                        p = o[n], s = p.part, q = p.string + q;
                        if (f.relative[s]) {
                            break
                        }
                        if (f.order.test(s)) {
                            i = f.find[s](p.captures[0].replace(R, ""), r, h);
                            if (i == null) {
                                continue
                            }
                            a = a.slice(0, a.length - q.length) + q.replace(S[s], ""), a || u.apply(e, t.call(i, 0));
                            break
                        }
                    }
                }
            }
            if (a) {
                k = j(a, b, h), c = k.dirruns++, i == null && (i = f.find.TAG("*", N.test(a) && b.parentNode || b));
                for (n = 0; m = i[n]; n++) {
                    d = k.runs++, k(m) && e.push(m)
                }
            }
            return e
        }

        var c, d, e, f, g, h, i, j, k, l, m = !0, n = "undefined", o = ("sizcache" + Math.random()).replace(".", ""), q = a.document, r = q.documentElement, s = 0, t = [].slice, u = [].push, v = function (a, b) {
            return a[o] = b || !0, a
        }, w = function () {
            var a = {}, b = [];
            return v(function (c, d) {
                return b.push(c) > f.cacheLength && delete a[b.shift()], a[c] = d
            }, a)
        }, x = w(), y = w(), z = w(), A = "[\\x20\\t\\r\\n\\f]", B = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", C = B.replace("w", "w#"), D = "([*^$|!~]?=)", E = "\\[" + A + "*(" + B + ")" + A + "*(?:" + D + A + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + C + ")|)|)" + A + "*\\]", F = ":(" + B + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + E + ")|[^:]|\\\\.)*|.*))\\)|)", G = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)", H = new RegExp("^" + A + "+|((?:^|[^\\\\])(?:\\\\.)*)" + A + "+$", "g"), I = new RegExp("^" + A + "*," + A + "*"), J = new RegExp("^" + A + "*([\\x20\\t\\r\\n\\f>+~])" + A + "*"), K = new RegExp(F), L = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, M = /^:not/, N = /[\x20\t\r\n\f]*[+~]/, O = /:not\($/, P = /h\d/i, Q = /input|select|textarea|button/i, R = /\\(?!\\)/g, S = {
            ID: new RegExp("^#(" + B + ")"),
            CLASS: new RegExp("^\\.(" + B + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + B + ")['\"]?\\]"),
            TAG: new RegExp("^(" + B.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + E),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|nth|last|first)-child(?:\\(" + A + "*(even|odd|(([+-]|)(\\d*)n|)" + A + "*(?:([+-]|)" + A + "*(\\d+)|))" + A + "*\\)|)", "i"),
            POS: new RegExp(G, "ig"),
            needsContext: new RegExp("^" + A + "*[>+~]|" + G, "i")
        }, T = function (a) {
            var b = q.createElement("div");
            try {
                return a(b)
            } catch (c) {
                return !1
            } finally {
                b = null
            }
        }, U = T(function (a) {
            return a.appendChild(q.createComment("")), !a.getElementsByTagName("*").length
        }), V = T(function (a) {
            return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== n && a.firstChild.getAttribute("href") === "#"
        }), W = T(function (a) {
            a.innerHTML = "<select></select>";
            var b = typeof a.lastChild.getAttribute("multiple");
            return b !== "boolean" && b !== "string"
        }), X = T(function (a) {
            return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !a.getElementsByClassName || !a.getElementsByClassName("e").length ? !1 : (a.lastChild.className = "e", a.getElementsByClassName("e").length === 2)
        }), Y = T(function (a) {
            a.id = o + 0, a.innerHTML = "<a name='" + o + "'></a><div name='" + o + "'></div>", r.insertBefore(a, r.firstChild);
            var b = q.getElementsByName && q.getElementsByName(o).length === 2 + q.getElementsByName(o + 0).length;
            return e = !q.getElementById(o), r.removeChild(a), b
        });
        try {
            t.call(r.childNodes, 0)[0].nodeType
        } catch (Z) {
            t = function (a) {
                var b, c = [];
                for (; b = this[a]; a++) {
                    c.push(b)
                }
                return c
            }
        }
        $.matches = function (a, b) {
            return $(a, null, null, b)
        }, $.matchesSelector = function (a, b) {
            return $(b, null, null, [a]).length > 0
        }, g = $.getText = function (a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (e === 1 || e === 9 || e === 11) {
                    if (typeof a.textContent == "string") {
                        return a.textContent
                    }
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        c += g(a)
                    }
                } else {
                    if (e === 3 || e === 4) {
                        return a.nodeValue
                    }
                }
            } else {
                for (; b = a[d]; d++) {
                    c += g(b)
                }
            }
            return c
        }, h = $.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        }, i = $.contains = r.contains ? function (a, b) {
            var c = a.nodeType === 9 ? a.documentElement : a, d = b && b.parentNode;
            return a === d || !!(d && d.nodeType === 1 && c.contains && c.contains(d))
        } : r.compareDocumentPosition ? function (a, b) {
            return b && !!(a.compareDocumentPosition(b) & 16)
        } : function (a, b) {
            while (b = b.parentNode) {
                if (b === a) {
                    return !0
                }
            }
            return !1
        }, $.attr = function (a, b) {
            var c, d = h(a);
            return d || (b = b.toLowerCase()), f.attrHandle[b] ? f.attrHandle[b](a) : W || d ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? typeof a[b] == "boolean" ? a[b] ? b : null : c.specified ? c.value : null : null)
        }, f = $.selectors = {
            cacheLength: 50,
            createPseudo: v,
            match: S,
            order: new RegExp("ID|TAG" + (Y ? "|NAME" : "") + (X ? "|CLASS" : "")),
            attrHandle: V ? {} : {
                href: function (a) {
                    return a.getAttribute("href", 2)
                }, type: function (a) {
                    return a.getAttribute("type")
                }
            },
            find: {
                ID: e ? function (a, b, c) {
                    if (typeof b.getElementById !== n && !c) {
                        var d = b.getElementById(a);
                        return d && d.parentNode ? [d] : []
                    }
                } : function (a, c, d) {
                    if (typeof c.getElementById !== n && !d) {
                        var e = c.getElementById(a);
                        return e ? e.id === a || typeof e.getAttributeNode !== n && e.getAttributeNode("id").value === a ? [e] : b : []
                    }
                }, TAG: U ? function (a, b) {
                    if (typeof b.getElementsByTagName !== n) {
                        return b.getElementsByTagName(a)
                    }
                } : function (a, b) {
                    var c = b.getElementsByTagName(a);
                    if (a === "*") {
                        var d, e = [], f = 0;
                        for (; d = c[f]; f++) {
                            d.nodeType === 1 && e.push(d)
                        }
                        return e
                    }
                    return c
                }, NAME: function (a, b) {
                    if (typeof b.getElementsByName !== n) {
                        return b.getElementsByName(name)
                    }
                }, CLASS: function (a, b, c) {
                    if (typeof b.getElementsByClassName !== n && !c) {
                        return b.getElementsByClassName(a)
                    }
                }
            },
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(R, ""), a[3] = (a[4] || a[5] || "").replace(R, ""), a[2] === "~=" && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), a[1] === "nth" ? (a[2] || $.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * (a[2] === "even" || a[2] === "odd")), a[4] = +(a[6] + a[7] || a[2] === "odd")) : a[2] && $.error(a[0]), a
                }, PSEUDO: function (a, b, c) {
                    var d, e;
                    if (S.CHILD.test(a[0])) {
                        return null
                    }
                    if (a[3]) {
                        a[2] = a[3]
                    } else {
                        if (d = a[4]) {
                            K.test(d) && (e = bc(d, b, c, !0)) && (e = d.indexOf(")", d.length - e) - d.length) && (d = d.slice(0, e), a[0] = a[0].slice(0, e)), a[2] = d
                        }
                    }
                    return a.slice(0, 3)
                }
            },
            filter: {
                ID: e ? function (a) {
                    return a = a.replace(R, ""), function (b) {
                        return b.getAttribute("id") === a
                    }
                } : function (a) {
                    return a = a.replace(R, ""), function (b) {
                        var c = typeof b.getAttributeNode !== n && b.getAttributeNode("id");
                        return c && c.value === a
                    }
                }, TAG: function (a) {
                    return a === "*" ? function () {
                        return !0
                    } : (a = a.replace(R, "").toLowerCase(), function (b) {
                        return b.nodeName && b.nodeName.toLowerCase() === a
                    })
                }, CLASS: function (a) {
                    var b = x[o][a];
                    return b || (b = x(a, new RegExp("(^|" + A + ")" + a + "(" + A + "|$)"))), function (a) {
                        return b.test(a.className || typeof a.getAttribute !== n && a.getAttribute("class") || "")
                    }
                }, ATTR: function (a, b, c) {
                    return b ? function (d) {
                        var e = $.attr(d, a), f = e + "";
                        if (e == null) {
                            return b === "!="
                        }
                        switch (b) {
                            case"=":
                                return f === c;
                            case"!=":
                                return f !== c;
                            case"^=":
                                return c && f.indexOf(c) === 0;
                            case"*=":
                                return c && f.indexOf(c) > -1;
                            case"$=":
                                return c && f.substr(f.length - c.length) === c;
                            case"~=":
                                return (" " + f + " ").indexOf(c) > -1;
                            case"|=":
                                return f === c || f.substr(0, c.length + 1) === c + "-"
                        }
                    } : function (b) {
                        return $.attr(b, a) != null
                    }
                }, CHILD: function (a, b, c, d) {
                    if (a === "nth") {
                        var e = s++;
                        return function (a) {
                            var b, f, g = 0, h = a;
                            if (c === 1 && d === 0) {
                                return !0
                            }
                            b = a.parentNode;
                            if (b && (b[o] !== e || !a.sizset)) {
                                for (h = b.firstChild; h; h = h.nextSibling) {
                                    if (h.nodeType === 1) {
                                        h.sizset = ++g;
                                        if (h === a) {
                                            break
                                        }
                                    }
                                }
                                b[o] = e
                            }
                            return f = a.sizset - d, c === 0 ? f === 0 : f % c === 0 && f / c >= 0
                        }
                    }
                    return function (b) {
                        var c = b;
                        switch (a) {
                            case"only":
                            case"first":
                                while (c = c.previousSibling) {
                                    if (c.nodeType === 1) {
                                        return !1
                                    }
                                }
                                if (a === "first") {
                                    return !0
                                }
                                c = b;
                            case"last":
                                while (c = c.nextSibling) {
                                    if (c.nodeType === 1) {
                                        return !1
                                    }
                                }
                                return !0
                        }
                    }
                }, PSEUDO: function (a, b, c, d) {
                    var e, g = f.pseudos[a] || f.pseudos[a.toLowerCase()];
                    return g || $.error("unsupported pseudo: " + a), g[o] ? g(b, c, d) : g.length > 1 ? (e = [a, a, "", b], function (a) {
                        return g(a, 0, e)
                    }) : g
                }
            },
            pseudos: {
                not: v(function (a, b, c) {
                    var d = j(a.replace(H, "$1"), b, c);
                    return function (a) {
                        return !d(a)
                    }
                }),
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && !!a.checked || b === "option" && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                parent: function (a) {
                    return !f.pseudos.empty(a)
                },
                empty: function (a) {
                    var b;
                    a = a.firstChild;
                    while (a) {
                        if (a.nodeName > "@" || (b = a.nodeType) === 3 || b === 4) {
                            return !1
                        }
                        a = a.nextSibling
                    }
                    return !0
                },
                contains: v(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || g(b)).indexOf(a) > -1
                    }
                }),
                has: v(function (a) {
                    return function (b) {
                        return $(a, b).length > 0
                    }
                }),
                header: function (a) {
                    return P.test(a.nodeName)
                },
                text: function (a) {
                    var b, c;
                    return a.nodeName.toLowerCase() === "input" && (b = a.type) === "text" && ((c = a.getAttribute("type")) == null || c.toLowerCase() === b)
                },
                radio: _("radio"),
                checkbox: _("checkbox"),
                file: _("file"),
                password: _("password"),
                image: _("image"),
                submit: ba("submit"),
                reset: ba("reset"),
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && a.type === "button" || b === "button"
                },
                input: function (a) {
                    return Q.test(a.nodeName)
                },
                focus: function (a) {
                    var b = a.ownerDocument;
                    return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && (!!a.type || !!a.href)
                },
                active: function (a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (a, b, c) {
                    return c ? a.slice(1) : [a[0]]
                }, last: function (a, b, c) {
                    var d = a.pop();
                    return c ? a : [d]
                }, even: function (a, b, c) {
                    var d = [], e = c ? 1 : 0, f = a.length;
                    for (; e < f; e = e + 2) {
                        d.push(a[e])
                    }
                    return d
                }, odd: function (a, b, c) {
                    var d = [], e = c ? 0 : 1, f = a.length;
                    for (; e < f; e = e + 2) {
                        d.push(a[e])
                    }
                    return d
                }, lt: function (a, b, c) {
                    return c ? a.slice(+b) : a.slice(0, +b)
                }, gt: function (a, b, c) {
                    return c ? a.slice(0, +b + 1) : a.slice(+b + 1)
                }, eq: function (a, b, c) {
                    var d = a.splice(+b, 1);
                    return c ? a : d
                }
            }
        }, k = r.compareDocumentPosition ? function (a, b) {
            return a === b ? (l = !0, 0) : (!a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition : a.compareDocumentPosition(b) & 4) ? -1 : 1
        } : function (a, b) {
            if (a === b) {
                return l = !0, 0
            }
            if (a.sourceIndex && b.sourceIndex) {
                return a.sourceIndex - b.sourceIndex
            }
            var c, d, e = [], f = [], g = a.parentNode, h = b.parentNode, i = g;
            if (g === h) {
                return bb(a, b)
            }
            if (!g) {
                return -1
            }
            if (!h) {
                return 1
            }
            while (i) {
                e.unshift(i), i = i.parentNode
            }
            i = h;
            while (i) {
                f.unshift(i), i = i.parentNode
            }
            c = e.length, d = f.length;
            for (var j = 0; j < c && j < d; j++) {
                if (e[j] !== f[j]) {
                    return bb(e[j], f[j])
                }
            }
            return j === c ? bb(a, f[j], -1) : bb(e[j], b, 1)
        }, [0, 0].sort(k), m = !l, $.uniqueSort = function (a) {
            var b, c = 1;
            l = m, a.sort(k);
            if (l) {
                for (; b = a[c]; c++) {
                    b === a[c - 1] && a.splice(c--, 1)
                }
            }
            return a
        }, $.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, j = $.compile = function (a, b, c) {
            var d, e, f, g = z[o][a];
            if (g && g.context === b) {
                return g
            }
            d = bc(a, b, c);
            for (e = 0, f = d.length; e < f; e++) {
                d[e] = bf(d[e], b, c)
            }
            return g = z(a, bg(d)), g.context = b, g.runs = g.dirruns = 0, g
        }, q.querySelectorAll && function () {
            var a, b = bk, c = /'|\\/g, d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, e = [], f = [":active"], g = r.matchesSelector || r.mozMatchesSelector || r.webkitMatchesSelector || r.oMatchesSelector || r.msMatchesSelector;
            T(function (a) {
                a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || e.push("\\[" + A + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || e.push(":checked")
            }), T(function (a) {
                a.innerHTML = "<p test=''></p>", a.querySelectorAll("[test^='']").length && e.push("[*^$]=" + A + "*(?:\"\"|'')"), a.innerHTML = "<input type='hidden'/>", a.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled")
            }), e = e.length && new RegExp(e.join("|")), bk = function (a, d, f, g, h) {
                if (!g && !h && (!e || !e.test(a))) {
                    if (d.nodeType === 9) {
                        try {
                            return u.apply(f, t.call(d.querySelectorAll(a), 0)), f
                        } catch (i) {
                        }
                    } else {
                        if (d.nodeType === 1 && d.nodeName.toLowerCase() !== "object") {
                            var j, k, l, m = d.getAttribute("id"), n = m || o, p = N.test(a) && d.parentNode || d;
                            m ? n = n.replace(c, "\\$&") : d.setAttribute("id", n), j = bc(a, d, h), n = "[id='" + n + "']";
                            for (k = 0, l = j.length; k < l; k++) {
                                j[k] = n + j[k].selector
                            }
                            try {
                                return u.apply(f, t.call(p.querySelectorAll(j.join(",")), 0)), f
                            } catch (i) {
                            } finally {
                                m || d.removeAttribute("id")
                            }
                        }
                    }
                }
                return b(a, d, f, g, h)
            }, g && (T(function (b) {
                a = g.call(b, "div");
                try {
                    g.call(b, "[test!='']:sizzle"), f.push(S.PSEUDO.source, S.POS.source, "!=")
                } catch (c) {
                }
            }), f = new RegExp(f.join("|")), $.matchesSelector = function (b, c) {
                c = c.replace(d, "='$1']");
                if (!h(b) && !f.test(c) && (!e || !e.test(c))) {
                    try {
                        var i = g.call(b, c);
                        if (i || a || b.document && b.document.nodeType !== 11) {
                            return i
                        }
                    } catch (j) {
                    }
                }
                return $(c, null, null, [b]).length > 0
            })
        }(), f.setFilters.nth = f.setFilters.eq, f.filters = f.pseudos, $.attr = p.attr, p.find = $, p.expr = $.selectors, p.expr[":"] = p.expr.pseudos, p.unique = $.uniqueSort, p.text = $.getText, p.isXMLDoc = $.isXML, p.contains = $.contains
    }(a);
    var bc = /Until$/, bd = /^(?:parents|prev(?:Until|All))/, be = /^.[^:#\[\.,]*$/, bf = p.expr.match.needsContext, bg = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    p.fn.extend({
        find: function (a) {
            var b, c, d, e, f, g, h = this;
            if (typeof a != "string") {
                return p(a).filter(function () {
                    for (b = 0, c = h.length; b < c; b++) {
                        if (p.contains(h[b], this)) {
                            return !0
                        }
                    }
                })
            }
            g = this.pushStack("", "find", a);
            for (b = 0, c = this.length; b < c; b++) {
                d = g.length, p.find(a, this[b], g);
                if (b > 0) {
                    for (e = d; e < g.length; e++) {
                        for (f = 0; f < d; f++) {
                            if (g[f] === g[e]) {
                                g.splice(e--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return g
        }, has: function (a) {
            var b, c = p(a, this), d = c.length;
            return this.filter(function () {
                for (b = 0; b < d; b++) {
                    if (p.contains(this, c[b])) {
                        return !0
                    }
                }
            })
        }, not: function (a) {
            return this.pushStack(bj(this, a, !1), "not", a)
        }, filter: function (a) {
            return this.pushStack(bj(this, a, !0), "filter", a)
        }, is: function (a) {
            return !!a && (typeof a == "string" ? bf.test(a) ? p(a, this.context).index(this[0]) >= 0 : p.filter(a, this).length > 0 : this.filter(a).length > 0)
        }, closest: function (a, b) {
            var c, d = 0, e = this.length, f = [], g = bf.test(a) || typeof a != "string" ? p(a, b || this.context) : 0;
            for (; d < e; d++) {
                c = this[d];
                while (c && c.ownerDocument && c !== b && c.nodeType !== 11) {
                    if (g ? g.index(c) > -1 : p.find.matchesSelector(c, a)) {
                        f.push(c);
                        break
                    }
                    c = c.parentNode
                }
            }
            return f = f.length > 1 ? p.unique(f) : f, this.pushStack(f, "closest", a)
        }, index: function (a) {
            return a ? typeof a == "string" ? p.inArray(this[0], p(a)) : p.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        }, add: function (a, b) {
            var c = typeof a == "string" ? p(a, b) : p.makeArray(a && a.nodeType ? [a] : a), d = p.merge(this.get(), c);
            return this.pushStack(bh(c[0]) || bh(d[0]) ? d : p.unique(d))
        }, addBack: function (a) {
            return this.add(a == null ? this.prevObject : this.prevObject.filter(a))
        }
    }), p.fn.andSelf = p.fn.addBack, p.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        }, parents: function (a) {
            return p.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return p.dir(a, "parentNode", c)
        }, next: function (a) {
            return bi(a, "nextSibling")
        }, prev: function (a) {
            return bi(a, "previousSibling")
        }, nextAll: function (a) {
            return p.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return p.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return p.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return p.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return p.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return p.sibling(a.firstChild)
        }, contents: function (a) {
            return p.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : p.merge([], a.childNodes)
        }
    }, function (a, b) {
        p.fn[a] = function (c, d) {
            var e = p.map(this, b, c);
            return bc.test(a) || (d = c), d && typeof d == "string" && (e = p.filter(d, e)), e = this.length > 1 && !bg[a] ? p.unique(e) : e, this.length > 1 && bd.test(a) && (e = e.reverse()), this.pushStack(e, a, k.call(arguments).join(","))
        }
    }), p.extend({
        filter: function (a, b, c) {
            return c && (a = ":not(" + a + ")"), b.length === 1 ? p.find.matchesSelector(b[0], a) ? [b[0]] : [] : p.find.matches(a, b)
        }, dir: function (a, c, d) {
            var e = [], f = a[c];
            while (f && f.nodeType !== 9 && (d === b || f.nodeType !== 1 || !p(f).is(d))) {
                f.nodeType === 1 && e.push(f), f = f[c]
            }
            return e
        }, sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling) {
                a.nodeType === 1 && a !== b && c.push(a)
            }
            return c
        }
    });
    var bl = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", bm = / jQuery\d+="(?:null|\d+)"/g, bn = /^\s+/, bo = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bp = /<([\w:]+)/, bq = /<tbody/i, br = /<|&#?\w+;/, bs = /<(?:script|style|link)/i, bt = /<(?:script|object|embed|option|style)/i, bu = new RegExp("<(?:" + bl + ")[\\s/>]", "i"), bv = /^(?:checkbox|radio)$/, bw = /checked\s*(?:[^=]|=\s*.checked.)/i, bx = /\/(java|ecma)script/i, by = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, bz = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }, bA = bk(e), bB = bA.appendChild(e.createElement("div"));
    bz.optgroup = bz.option, bz.tbody = bz.tfoot = bz.colgroup = bz.caption = bz.thead, bz.th = bz.td, p.support.htmlSerialize || (bz._default = [1, "X<div>", "</div>"]), p.fn.extend({
        text: function (a) {
            return p.access(this, function (a) {
                return a === b ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || e).createTextNode(a))
            }, null, a, arguments.length)
        }, wrapAll: function (a) {
            if (p.isFunction(a)) {
                return this.each(function (b) {
                    p(this).wrapAll(a.call(this, b))
                })
            }
            if (this[0]) {
                var b = p(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) {
                        a = a.firstChild
                    }
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return p.isFunction(a) ? this.each(function (b) {
                p(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = p(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = p.isFunction(a);
            return this.each(function (c) {
                p(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (a) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(a)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(a, this.firstChild)
            })
        }, before: function () {
            if (!bh(this[0])) {
                return this.domManip(arguments, !1, function (a) {
                    this.parentNode.insertBefore(a, this)
                })
            }
            if (arguments.length) {
                var a = p.clean(arguments);
                return this.pushStack(p.merge(a, this), "before", this.selector)
            }
        }, after: function () {
            if (!bh(this[0])) {
                return this.domManip(arguments, !1, function (a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                })
            }
            if (arguments.length) {
                var a = p.clean(arguments);
                return this.pushStack(p.merge(this, a), "after", this.selector)
            }
        }, remove: function (a, b) {
            var c, d = 0;
            for (; (c = this[d]) != null; d++) {
                if (!a || p.filter(a, [c]).length) {
                    !b && c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), p.cleanData([c])), c.parentNode && c.parentNode.removeChild(c)
                }
            }
            return this
        }, empty: function () {
            var a, b = 0;
            for (; (a = this[b]) != null; b++) {
                a.nodeType === 1 && p.cleanData(a.getElementsByTagName("*"));
                while (a.firstChild) {
                    a.removeChild(a.firstChild)
                }
            }
            return this
        }, clone: function (a, b) {
            return a = a == null ? !1 : a, b = b == null ? a : b, this.map(function () {
                return p.clone(this, a, b)
            })
        }, html: function (a) {
            return p.access(this, function (a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b) {
                    return c.nodeType === 1 ? c.innerHTML.replace(bm, "") : b
                }
                if (typeof a == "string" && !bs.test(a) && (p.support.htmlSerialize || !bu.test(a)) && (p.support.leadingWhitespace || !bn.test(a)) && !bz[(bp.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(bo, "<$1></$2>");
                    try {
                        for (; d < e; d++) {
                            c = this[d] || {}, c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), c.innerHTML = a)
                        }
                        c = 0
                    } catch (f) {
                    }
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function (a) {
            return bh(this[0]) ? this.length ? this.pushStack(p(p.isFunction(a) ? a() : a), "replaceWith", a) : this : p.isFunction(a) ? this.each(function (b) {
                var c = p(this), d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : (typeof a != "string" && (a = p(a).detach()), this.each(function () {
                var b = this.nextSibling, c = this.parentNode;
                p(this).remove(), b ? p(b).before(a) : p(c).append(a)
            }))
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, c, d) {
            a = [].concat.apply([], a);
            var e, f, g, h, i = 0, j = a[0], k = [], l = this.length;
            if (!p.support.checkClone && l > 1 && typeof j == "string" && bw.test(j)) {
                return this.each(function () {
                    p(this).domManip(a, c, d)
                })
            }
            if (p.isFunction(j)) {
                return this.each(function (e) {
                    var f = p(this);
                    a[0] = j.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
                })
            }
            if (this[0]) {
                e = p.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, g.childNodes.length === 1 && (g = f);
                if (f) {
                    c = c && p.nodeName(f, "tr");
                    for (h = e.cacheable || l - 1; i < l; i++) {
                        d.call(c && p.nodeName(this[i], "table") ? bC(this[i], "tbody") : this[i], i === h ? g : p.clone(g, !0, !0))
                    }
                }
                g = f = null, k.length && p.each(k, function (a, b) {
                    b.src ? p.ajax ? p.ajax({
                        url: b.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : p.error("no ajax") : p.globalEval((b.text || b.textContent || b.innerHTML || "").replace(by, "")), b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }), p.buildFragment = function (a, c, d) {
        var f, g, h, i = a[0];
        return c = c || e, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, a.length === 1 && typeof i == "string" && i.length < 512 && c === e && i.charAt(0) === "<" && !bt.test(i) && (p.support.checkClone || !bw.test(i)) && (p.support.html5Clone || !bu.test(i)) && (g = !0, f = p.fragments[i], h = f !== b), f || (f = c.createDocumentFragment(), p.clean(a, c, f, d), g && (p.fragments[i] = h && f)), {
            fragment: f,
            cacheable: g
        }
    }, p.fragments = {}, p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        p.fn[a] = function (c) {
            var d, e = 0, f = [], g = p(c), h = g.length, i = this.length === 1 && this[0].parentNode;
            if ((i == null || i && i.nodeType === 11 && i.childNodes.length === 1) && h === 1) {
                return g[b](this[0]), this
            }
            for (; e < h; e++) {
                d = (e > 0 ? this.clone(!0) : this).get(), p(g[e])[b](d), f = f.concat(d)
            }
            return this.pushStack(f, a, g.selector)
        }
    }), p.extend({
        clone: function (a, b, c) {
            var d, e, f, g;
            p.support.html5Clone || p.isXMLDoc(a) || !bu.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bB.innerHTML = a.outerHTML, bB.removeChild(g = bB.firstChild));
            if ((!p.support.noCloneEvent || !p.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !p.isXMLDoc(a)) {
                bE(a, g), d = bF(a), e = bF(g);
                for (f = 0; d[f]; ++f) {
                    e[f] && bE(d[f], e[f])
                }
            }
            if (b) {
                bD(a, g);
                if (c) {
                    d = bF(a), e = bF(g);
                    for (f = 0; d[f]; ++f) {
                        bD(d[f], e[f])
                    }
                }
            }
            return d = e = null, g
        }, clean: function (a, b, c, d) {
            var f, g, h, i, j, k, l, m, n, o, q, r, s = b === e && bA, t = [];
            if (!b || typeof b.createDocumentFragment == "undefined") {
                b = e
            }
            for (f = 0; (h = a[f]) != null; f++) {
                typeof h == "number" && (h += "");
                if (!h) {
                    continue
                }
                if (typeof h == "string") {
                    if (!br.test(h)) {
                        h = b.createTextNode(h)
                    } else {
                        s = s || bk(b), l = b.createElement("div"), s.appendChild(l), h = h.replace(bo, "<$1></$2>"), i = (bp.exec(h) || ["", ""])[1].toLowerCase(), j = bz[i] || bz._default, k = j[0], l.innerHTML = j[1] + h + j[2];
                        while (k--) {
                            l = l.lastChild
                        }
                        if (!p.support.tbody) {
                            m = bq.test(h), n = i === "table" && !m ? l.firstChild && l.firstChild.childNodes : j[1] === "<table>" && !m ? l.childNodes : [];
                            for (g = n.length - 1; g >= 0; --g) {
                                p.nodeName(n[g], "tbody") && !n[g].childNodes.length && n[g].parentNode.removeChild(n[g])
                            }
                        }
                        !p.support.leadingWhitespace && bn.test(h) && l.insertBefore(b.createTextNode(bn.exec(h)[0]), l.firstChild), h = l.childNodes, l.parentNode.removeChild(l)
                    }
                }
                h.nodeType ? t.push(h) : p.merge(t, h)
            }
            l && (h = l = s = null);
            if (!p.support.appendChecked) {
                for (f = 0; (h = t[f]) != null; f++) {
                    p.nodeName(h, "input") ? bG(h) : typeof h.getElementsByTagName != "undefined" && p.grep(h.getElementsByTagName("input"), bG)
                }
            }
            if (c) {
                q = function (a) {
                    if (!a.type || bx.test(a.type)) {
                        return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a)
                    }
                };
                for (f = 0; (h = t[f]) != null; f++) {
                    if (!p.nodeName(h, "script") || !q(h)) {
                        c.appendChild(h), typeof h.getElementsByTagName != "undefined" && (r = p.grep(p.merge([], h.getElementsByTagName("script")), q), t.splice.apply(t, [f + 1, 0].concat(r)), f += r.length)
                    }
                }
            }
            return t
        }, cleanData: function (a, b) {
            var c, d, e, f, g = 0, h = p.expando, i = p.cache, j = p.support.deleteExpando, k = p.event.special;
            for (; (e = a[g]) != null; g++) {
                if (b || p.acceptData(e)) {
                    d = e[h], c = d && i[d];
                    if (c) {
                        if (c.events) {
                            for (f in c.events) {
                                k[f] ? p.event.remove(e, f) : p.removeEvent(e, f, c.handle)
                            }
                        }
                        i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, p.deletedIds.push(d))
                    }
                }
            }
        }
    }), function () {
        var a, b;
        p.uaMatch = function (a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {browser: b[1] || "", version: b[2] || "0"}
        }, a = p.uaMatch(g.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0), p.browser = b, p.sub = function () {
            function a(b, c) {
                return new a.fn.init(b, c)
            }

            p.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function c(c, d) {
                return d && d instanceof p && !(d instanceof a) && (d = a(d)), p.fn.init.call(this, c, d, b)
            }, a.fn.init.prototype = a.fn;
            var b = a(e);
            return a
        }
    }();
    var bH, bI, bJ, bK = /alpha\([^)]*\)/i, bL = /opacity=([^)]*)/, bM = /^(top|right|bottom|left)$/, bN = /^(none|table(?!-c[ea]).+)/, bO = /^margin/, bP = new RegExp("^(" + q + ")(.*)$", "i"), bQ = new RegExp("^(" + q + ")(?!px)[a-z%]+$", "i"), bR = new RegExp("^([-+])=(" + q + ")", "i"), bS = {}, bT = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, bU = {
        letterSpacing: 0,
        fontWeight: 400
    }, bV = ["Top", "Right", "Bottom", "Left"], bW = ["Webkit", "O", "Moz", "ms"], bX = p.fn.toggle;
    p.fn.extend({
        css: function (a, c) {
            return p.access(this, function (a, c, d) {
                return d !== b ? p.style(a, c, d) : p.css(a, c)
            }, a, c, arguments.length > 1)
        }, show: function () {
            return b$(this, !0)
        }, hide: function () {
            return b$(this)
        }, toggle: function (a, b) {
            var c = typeof a == "boolean";
            return p.isFunction(a) && p.isFunction(b) ? bX.apply(this, arguments) : this.each(function () {
                (c ? a : bZ(this)) ? p(this).show() : p(this).hide()
            })
        }
    }), p.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = bH(a, "opacity");
                        return c === "" ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": p.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, c, d, e) {
            if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) {
                return
            }
            var f, g, h, i = p.camelCase(c), j = a.style;
            c = p.cssProps[i] || (p.cssProps[i] = bY(j, i)), h = p.cssHooks[c] || p.cssHooks[i];
            if (d === b) {
                return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c]
            }
            g = typeof d, g === "string" && (f = bR.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(p.css(a, c)), g = "number");
            if (d == null || g === "number" && isNaN(d)) {
                return
            }
            g === "number" && !p.cssNumber[i] && (d += "px");
            if (!h || !("set" in h) || (d = h.set(a, d, e)) !== b) {
                try {
                    j[c] = d
                } catch (k) {
                }
            }
        },
        css: function (a, c, d, e) {
            var f, g, h, i = p.camelCase(c);
            return c = p.cssProps[i] || (p.cssProps[i] = bY(a.style, i)), h = p.cssHooks[c] || p.cssHooks[i], h && "get" in h && (f = h.get(a, !0, e)), f === b && (f = bH(a, c)), f === "normal" && c in bU && (f = bU[c]), d || e !== b ? (g = parseFloat(f), d || p.isNumeric(g) ? g || 0 : f) : f
        },
        swap: function (a, b, c) {
            var d, e, f = {};
            for (e in b) {
                f[e] = a.style[e], a.style[e] = b[e]
            }
            d = c.call(a);
            for (e in b) {
                a.style[e] = f[e]
            }
            return d
        }
    }), a.getComputedStyle ? bH = function (b, c) {
        var d, e, f, g, h = a.getComputedStyle(b, null), i = b.style;
        return h && (d = h[c], d === "" && !p.contains(b.ownerDocument, b) && (d = p.style(b, c)), bQ.test(d) && bO.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)), d
    } : e.documentElement.currentStyle && (bH = function (a, b) {
        var c, d, e = a.currentStyle && a.currentStyle[b], f = a.style;
        return e == null && f && f[b] && (e = f[b]), bQ.test(e) && !bM.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), e === "" ? "auto" : e
    }), p.each(["height", "width"], function (a, b) {
        p.cssHooks[b] = {
            get: function (a, c, d) {
                if (c) {
                    return a.offsetWidth === 0 && bN.test(bH(a, "display")) ? p.swap(a, bT, function () {
                        return cb(a, b, d)
                    }) : cb(a, b, d)
                }
            }, set: function (a, c, d) {
                return b_(a, c, d ? ca(a, b, d, p.support.boxSizing && p.css(a, "boxSizing") === "border-box") : 0)
            }
        }
    }), p.support.opacity || (p.cssHooks.opacity = {
        get: function (a, b) {
            return bL.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = p.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "", f = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && p.trim(f.replace(bK, "")) === "" && c.removeAttribute) {
                c.removeAttribute("filter");
                if (d && !d.filter) {
                    return
                }
            }
            c.filter = bK.test(f) ? f.replace(bK, e) : f + " " + e
        }
    }), p(function () {
        p.support.reliableMarginRight || (p.cssHooks.marginRight = {
            get: function (a, b) {
                return p.swap(a, {display: "inline-block"}, function () {
                    if (b) {
                        return bH(a, "marginRight")
                    }
                })
            }
        }), !p.support.pixelPosition && p.fn.position && p.each(["top", "left"], function (a, b) {
            p.cssHooks[b] = {
                get: function (a, c) {
                    if (c) {
                        var d = bH(a, b);
                        return bQ.test(d) ? p(a).position()[b] + "px" : d
                    }
                }
            }
        })
    }), p.expr && p.expr.filters && (p.expr.filters.hidden = function (a) {
        return a.offsetWidth === 0 && a.offsetHeight === 0 || !p.support.reliableHiddenOffsets && (a.style && a.style.display || bH(a, "display")) === "none"
    }, p.expr.filters.visible = function (a) {
        return !p.expr.filters.hidden(a)
    }), p.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        p.cssHooks[a + b] = {
            expand: function (c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c], f = {};
                for (d = 0; d < 4; d++) {
                    f[a + bV[d] + b] = e[d] || e[d - 2] || e[0]
                }
                return f
            }
        }, bO.test(a) || (p.cssHooks[a + b].set = b_)
    });
    var cd = /%20/g, ce = /\[\]$/, cf = /\r?\n/g, cg = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, ch = /^(?:select|textarea)/i;
    p.fn.extend({
        serialize: function () {
            return p.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? p.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || ch.test(this.nodeName) || cg.test(this.type))
            }).map(function (a, b) {
                var c = p(this).val();
                return c == null ? null : p.isArray(c) ? p.map(c, function (a, c) {
                    return {name: b.name, value: a.replace(cf, "\r\n")}
                }) : {name: b.name, value: c.replace(cf, "\r\n")}
            }).get()
        }
    }), p.param = function (a, c) {
        var d, e = [], f = function (a, b) {
            b = p.isFunction(b) ? b() : b == null ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        c === b && (c = p.ajaxSettings && p.ajaxSettings.traditional);
        if (p.isArray(a) || a.jquery && !p.isPlainObject(a)) {
            p.each(a, function () {
                f(this.name, this.value)
            })
        } else {
            for (d in a) {
                ci(d, a[d], c, f)
            }
        }
        return e.join("&").replace(cd, "+")
    };
    var cj, ck, cl = /#.*$/, cm = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, cn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, co = /^(?:GET|HEAD)$/, cp = /^\/\//, cq = /\?/, cr = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, cs = /([?&])_=[^&]*/, ct = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, cu = p.fn.load, cv = {}, cw = {}, cx = ["*/"] + ["*"];
    try {
        cj = f.href
    } catch (cy) {
        cj = e.createElement("a"), cj.href = "", cj = cj.href
    }
    ck = ct.exec(cj.toLowerCase()) || [], p.fn.load = function (a, c, d) {
        if (typeof a != "string" && cu) {
            return cu.apply(this, arguments)
        }
        if (!this.length) {
            return this
        }
        var e, f, g, h = this, i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), p.isFunction(c) ? (d = c, c = b) : c && typeof c == "object" && (f = "POST"), p.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c,
            complete: function (a, b) {
                d && h.each(d, g || [a.responseText, b, a])
            }
        }).done(function (a) {
            g = arguments, h.html(e ? p("<div>").append(a.replace(cr, "")).find(e) : a)
        }), this
    }, p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        p.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), p.each(["get", "post"], function (a, c) {
        p[c] = function (a, d, e, f) {
            return p.isFunction(d) && (f = f || e, e = d, d = b), p.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: f
            })
        }
    }), p.extend({
        getScript: function (a, c) {
            return p.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return p.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            return b ? cB(a, p.ajaxSettings) : (b = a, a = p.ajaxSettings), cB(a, b), a
        },
        ajaxSettings: {
            url: cj,
            isLocal: cn.test(ck[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": cx
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": a.String, "text html": !0, "text json": p.parseJSON, "text xml": p.parseXML},
            flatOptions: {context: !0, url: !0}
        },
        ajaxPrefilter: cz(cv),
        ajaxTransport: cz(cw),
        ajax: function (a, c) {
            function y(a, c, f, i) {
                var k, s, t, u, w, y = c;
                if (v === 2) {
                    return
                }
                v = 2, h && clearTimeout(h), g = b, e = i || "", x.readyState = a > 0 ? 4 : 0, f && (u = cC(l, x, f));
                if (a >= 200 && a < 300 || a === 304) {
                    l.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (p.lastModified[d] = w), w = x.getResponseHeader("Etag"), w && (p.etag[d] = w)), a === 304 ? (y = "notmodified", k = !0) : (k = cD(l, u), y = k.state, s = k.data, t = k.error, k = !t)
                } else {
                    t = y;
                    if (!y || a) {
                        y = "error", a < 0 && (a = 0)
                    }
                }
                x.status = a, x.statusText = "" + (c || y), k ? o.resolveWith(m, [s, y, x]) : o.rejectWith(m, [x, y, t]), x.statusCode(r), r = b, j && n.trigger("ajax" + (k ? "Success" : "Error"), [x, l, k ? s : t]), q.fireWith(m, [x, y]), j && (n.trigger("ajaxComplete", [x, l]), --p.active || p.event.trigger("ajaxStop"))
            }

            typeof a == "object" && (c = a, a = b), c = c || {};
            var d, e, f, g, h, i, j, k, l = p.ajaxSetup({}, c), m = l.context || l, n = m !== l && (m.nodeType || m instanceof p) ? p(m) : p.event, o = p.Deferred(), q = p.Callbacks("once memory"), r = l.statusCode || {}, t = {}, u = {}, v = 0, w = "canceled", x = {
                readyState: 0,
                setRequestHeader: function (a, b) {
                    if (!v) {
                        var c = a.toLowerCase();
                        a = u[c] = u[c] || a, t[a] = b
                    }
                    return this
                },
                getAllResponseHeaders: function () {
                    return v === 2 ? e : null
                },
                getResponseHeader: function (a) {
                    var c;
                    if (v === 2) {
                        if (!f) {
                            f = {};
                            while (c = cm.exec(e)) {
                                f[c[1].toLowerCase()] = c[2]
                            }
                        }
                        c = f[a.toLowerCase()]
                    }
                    return c === b ? null : c
                },
                overrideMimeType: function (a) {
                    return v || (l.mimeType = a), this
                },
                abort: function (a) {
                    return a = a || w, g && g.abort(a), y(0, a), this
                }
            };
            o.promise(x), x.success = x.done, x.error = x.fail, x.complete = q.add, x.statusCode = function (a) {
                if (a) {
                    var b;
                    if (v < 2) {
                        for (b in a) {
                            r[b] = [r[b], a[b]]
                        }
                    } else {
                        b = a[x.status], x.always(b)
                    }
                }
                return this
            }, l.url = ((a || l.url) + "").replace(cl, "").replace(cp, ck[1] + "//"), l.dataTypes = p.trim(l.dataType || "*").toLowerCase().split(s), l.crossDomain == null && (i = ct.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] == ck[1] && i[2] == ck[2] && (i[3] || (i[1] === "http:" ? 80 : 443)) == (ck[3] || (ck[1] === "http:" ? 80 : 443)))), l.data && l.processData && typeof l.data != "string" && (l.data = p.param(l.data, l.traditional)), cA(cv, l, c, x);
            if (v === 2) {
                return x
            }
            j = l.global, l.type = l.type.toUpperCase(), l.hasContent = !co.test(l.type), j && p.active++ === 0 && p.event.trigger("ajaxStart");
            if (!l.hasContent) {
                l.data && (l.url += (cq.test(l.url) ? "&" : "?") + l.data, delete l.data), d = l.url;
                if (l.cache === !1) {
                    var z = p.now(), A = l.url.replace(cs, "$1_=" + z);
                    l.url = A + (A === l.url ? (cq.test(l.url) ? "&" : "?") + "_=" + z : "")
                }
            }
            (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", l.contentType), l.ifModified && (d = d || l.url, p.lastModified[d] && x.setRequestHeader("If-Modified-Since", p.lastModified[d]), p.etag[d] && x.setRequestHeader("If-None-Match", p.etag[d])), x.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + cx + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) {
                x.setRequestHeader(k, l.headers[k])
            }
            if (!l.beforeSend || l.beforeSend.call(m, x, l) !== !1 && v !== 2) {
                w = "abort";
                for (k in {success: 1, error: 1, complete: 1}) {
                    x[k](l[k])
                }
                g = cA(cw, l, c, x);
                if (!g) {
                    y(-1, "No Transport")
                } else {
                    x.readyState = 1, j && n.trigger("ajaxSend", [x, l]), l.async && l.timeout > 0 && (h = setTimeout(function () {
                        x.abort("timeout")
                    }, l.timeout));
                    try {
                        v = 1, g.send(t, y)
                    } catch (B) {
                        if (v < 2) {
                            y(-1, B)
                        } else {
                            throw B
                        }
                    }
                }
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cE = [], cF = /\?/, cG = /(=)\?(?=&|$)|\?\?/, cH = p.now();
    p.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = cE.pop() || p.expando + "_" + cH++;
            return this[a] = !0, a
        }
    }), p.ajaxPrefilter("json jsonp", function (c, d, e) {
        var f, g, h, i = c.data, j = c.url, k = c.jsonp !== !1, l = k && cG.test(j), m = k && !l && typeof i == "string" && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && cG.test(i);
        if (c.dataTypes[0] === "jsonp" || l || m) {
            return f = c.jsonpCallback = p.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(cG, "$1" + f) : m ? c.data = i.replace(cG, "$1" + f) : k && (c.url += (cF.test(j) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function () {
                return h || p.error(f + " was not called"), h[0]
            }, c.dataTypes[0] = "json", a[f] = function () {
                h = arguments
            }, e.always(function () {
                a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, cE.push(f)), h && p.isFunction(g) && g(h[0]), h = g = b
            }), "script"
        }
    }), p.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (a) {
                return p.globalEval(a), a
            }
        }
    }), p.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), p.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var c, d = e.head || e.getElementsByTagName("head")[0] || e.documentElement;
            return {
                send: function (f, g) {
                    c = e.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function (a, e) {
                        if (e || !c.readyState || /loaded|complete/.test(c.readyState)) {
                            c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || g(200, "success")
                        }
                    }, d.insertBefore(c, d.firstChild)
                }, abort: function () {
                    c && c.onload(0, 1)
                }
            }
        }
    });
    var cI, cJ = a.ActiveXObject ? function () {
        for (var a in cI) {
            cI[a](0, 1)
        }
    } : !1, cK = 0;
    p.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && cL() || cM()
    } : cL, function (a) {
        p.extend(p.support, {ajax: !!a, cors: !!a && "withCredentials" in a})
    }(p.ajaxSettings.xhr()), p.support.ajax && p.ajaxTransport(function (c) {
        if (!c.crossDomain || p.support.cors) {
            var d;
            return {
                send: function (e, f) {
                    var g, h, i = c.xhr();
                    c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async);
                    if (c.xhrFields) {
                        for (h in c.xhrFields) {
                            i[h] = c.xhrFields[h]
                        }
                    }
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) {
                            i.setRequestHeader(h, e[h])
                        }
                    } catch (j) {
                    }
                    i.send(c.hasContent && c.data || null), d = function (a, e) {
                        var h, j, k, l, m;
                        try {
                            if (d && (e || i.readyState === 4)) {
                                d = b, g && (i.onreadystatechange = p.noop, cJ && delete cI[g]);
                                if (e) {
                                    i.readyState !== 4 && i.abort()
                                } else {
                                    h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
                                    try {
                                        l.text = i.responseText
                                    } catch (a) {
                                    }
                                    try {
                                        j = i.statusText
                                    } catch (n) {
                                        j = ""
                                    }
                                    !h && c.isLocal && !c.crossDomain ? h = l.text ? 200 : 404 : h === 1223 && (h = 204)
                                }
                            }
                        } catch (o) {
                            e || f(-1, o)
                        }
                        l && f(h, j, l, k)
                    }, c.async ? i.readyState === 4 ? setTimeout(d, 0) : (g = ++cK, cJ && (cI || (cI = {}, p(a).unload(cJ)), cI[g] = d), i.onreadystatechange = d) : d()
                }, abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var cN, cO, cP = /^(?:toggle|show|hide)$/, cQ = new RegExp("^(?:([-+])=|)(" + q + ")([a-z%]*)$", "i"), cR = /queueHooks$/, cS = [cY], cT = {
        "*": [function (a, b) {
            var c, d, e, f = this.createTween(a, b), g = cQ.exec(b), h = f.cur(), i = +h || 0, j = 1;
            if (g) {
                c = +g[2], d = g[3] || (p.cssNumber[a] ? "" : "px");
                if (d !== "px" && i) {
                    i = p.css(f.elem, a, !0) || c || 1;
                    do {
                        e = j = j || ".5", i = i / j, p.style(f.elem, a, i + d), j = f.cur() / h
                    } while (j !== 1 && j !== e)
                }
                f.unit = d, f.start = i, f.end = g[1] ? i + (g[1] + 1) * c : c
            }
            return f
        }]
    };
    p.Animation = p.extend(cW, {
        tweener: function (a, b) {
            p.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            var c, d = 0, e = a.length;
            for (; d < e; d++) {
                c = a[d], cT[c] = cT[c] || [], cT[c].unshift(b)
            }
        }, prefilter: function (a, b) {
            b ? cS.unshift(a) : cS.push(a)
        }
    }), p.Tween = cZ, cZ.prototype = {
        constructor: cZ, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (p.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = cZ.propHooks[this.prop];
            return a && a.get ? a.get(this) : cZ.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = cZ.propHooks[this.prop];
            return this.options.duration ? this.pos = b = p.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : cZ.propHooks._default.set(this), this
        }
    }, cZ.prototype.init.prototype = cZ.prototype, cZ.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return a.elem[a.prop] == null || !!a.elem.style && a.elem.style[a.prop] != null ? (b = p.css(a.elem, a.prop, !1, ""), !b || b === "auto" ? 0 : b) : a.elem[a.prop]
            }, set: function (a) {
                p.fx.step[a.prop] ? p.fx.step[a.prop](a) : a.elem.style && (a.elem.style[p.cssProps[a.prop]] != null || p.cssHooks[a.prop]) ? p.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, cZ.propHooks.scrollTop = cZ.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, p.each(["toggle", "show", "hide"], function (a, b) {
        var c = p.fn[b];
        p.fn[b] = function (d, e, f) {
            return d == null || typeof d == "boolean" || !a && p.isFunction(d) && p.isFunction(e) ? c.apply(this, arguments) : this.animate(c$(b, !0), d, e, f)
        }
    }), p.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(bZ).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = p.isEmptyObject(a), f = p.speed(b, c, d), g = function () {
                var b = cW(this, p.extend({}, a), f);
                e && b.stop(!0)
            };
            return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, c, d) {
            var e = function (a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, c = a != null && a + "queueHooks", f = p.timers, g = p._data(this);
                if (c) {
                    g[c] && g[c].stop && e(g[c])
                } else {
                    for (c in g) {
                        g[c] && g[c].stop && cR.test(c) && e(g[c])
                    }
                }
                for (c = f.length; c--;) {
                    f[c].elem === this && (a == null || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1))
                }
                (b || !d) && p.dequeue(this, a)
            })
        }
    }), p.each({
        slideDown: c$("show"),
        slideUp: c$("hide"),
        slideToggle: c$("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        p.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), p.speed = function (a, b, c) {
        var d = a && typeof a == "object" ? p.extend({}, a) : {
            complete: c || !c && b || p.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !p.isFunction(b) && b
        };
        d.duration = p.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in p.fx.speeds ? p.fx.speeds[d.duration] : p.fx.speeds._default;
        if (d.queue == null || d.queue === !0) {
            d.queue = "fx"
        }
        return d.old = d.complete, d.complete = function () {
            p.isFunction(d.old) && d.old.call(this), d.queue && p.dequeue(this, d.queue)
        }, d
    }, p.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        }
    }, p.timers = [], p.fx = cZ.prototype.init, p.fx.tick = function () {
        var a, b = p.timers, c = 0;
        for (; c < b.length; c++) {
            a = b[c], !a() && b[c] === a && b.splice(c--, 1)
        }
        b.length || p.fx.stop()
    }, p.fx.timer = function (a) {
        a() && p.timers.push(a) && !cO && (cO = setInterval(p.fx.tick, p.fx.interval))
    }, p.fx.interval = 13, p.fx.stop = function () {
        clearInterval(cO), cO = null
    }, p.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, p.fx.step = {}, p.expr && p.expr.filters && (p.expr.filters.animated = function (a) {
        return p.grep(p.timers, function (b) {
            return a === b.elem
        }).length
    });
    var c_ = /^(?:body|html)$/i;
    p.fn.offset = function (a) {
        if (arguments.length) {
            return a === b ? this : this.each(function (b) {
                p.offset.setOffset(this, a, b)
            })
        }
        var c, d, e, f, g, h, i, j, k, l, m = this[0], n = m && m.ownerDocument;
        if (!n) {
            return
        }
        return (e = n.body) === m ? p.offset.bodyOffset(m) : (d = n.documentElement, p.contains(d, m) ? (c = m.getBoundingClientRect(), f = da(n), g = d.clientTop || e.clientTop || 0, h = d.clientLeft || e.clientLeft || 0, i = f.pageYOffset || d.scrollTop, j = f.pageXOffset || d.scrollLeft, k = c.top + i - g, l = c.left + j - h, {
            top: k,
            left: l
        }) : {top: 0, left: 0})
    }, p.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop, c = a.offsetLeft;
            return p.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(p.css(a, "marginTop")) || 0, c += parseFloat(p.css(a, "marginLeft")) || 0), {
                top: b,
                left: c
            }
        }, setOffset: function (a, b, c) {
            var d = p.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = p(a), f = e.offset(), g = p.css(a, "top"), h = p.css(a, "left"), i = (d === "absolute" || d === "fixed") && p.inArray("auto", [g, h]) > -1, j = {}, k = {}, l, m;
            i ? (k = e.position(), l = k.top, m = k.left) : (l = parseFloat(g) || 0, m = parseFloat(h) || 0), p.isFunction(b) && (b = b.call(a, c, f)), b.top != null && (j.top = b.top - f.top + l), b.left != null && (j.left = b.left - f.left + m), "using" in b ? b.using.call(a, j) : e.css(j)
        }
    }, p.fn.extend({
        position: function () {
            if (!this[0]) {
                return
            }
            var a = this[0], b = this.offsetParent(), c = this.offset(), d = c_.test(b[0].nodeName) ? {
                top: 0,
                left: 0
            } : b.offset();
            return c.top -= parseFloat(p.css(a, "marginTop")) || 0, c.left -= parseFloat(p.css(a, "marginLeft")) || 0, d.top += parseFloat(p.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(p.css(b[0], "borderLeftWidth")) || 0, {
                top: c.top - d.top,
                left: c.left - d.left
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || e.body;
                while (a && !c_.test(a.nodeName) && p.css(a, "position") === "static") {
                    a = a.offsetParent
                }
                return a || e.body
            })
        }
    }), p.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, c) {
        var d = /Y/.test(c);
        p.fn[a] = function (e) {
            return p.access(this, function (a, e, f) {
                var g = da(a);
                if (f === b) {
                    return g ? c in g ? g[c] : g.document.documentElement[e] : a[e]
                }
                g ? g.scrollTo(d ? p(g).scrollLeft() : f, d ? f : p(g).scrollTop()) : a[e] = f
            }, a, e, arguments.length, null)
        }
    }), p.each({Height: "height", Width: "width"}, function (a, c) {
        p.each({padding: "inner" + a, content: c, "": "outer" + a}, function (d, e) {
            p.fn[e] = function (e, f) {
                var g = arguments.length && (d || typeof e != "boolean"), h = d || (e === !0 || f === !0 ? "margin" : "border");
                return p.access(this, function (c, d, e) {
                    var f;
                    return p.isWindow(c) ? c.document.documentElement["client" + a] : c.nodeType === 9 ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? p.css(c, d, e, h) : p.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), a.jQuery = a.$ = p, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return p
    })
})(window);
if (typeof JSON !== "object") {
    JSON = {}
}
(function () {
    function f(n) {
        return n < 10 ? "0" + n : n
    }

    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function () {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
            return this.valueOf()
        }
    }
    var cx, escapable, gap, indent, meta, rep;

    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + string + '"'
    }

    function str(key, holder) {
        var i, k, v, length, mind = gap, partial, value = holder[key];
        if (value && typeof value === "object" && typeof value.toJSON === "function") {
            value = value.toJSON(key)
        }
        if (typeof rep === "function") {
            value = rep.call(holder, key, value)
        }
        switch (typeof value) {
            case"string":
                return quote(value);
            case"number":
                return isFinite(value) ? String(value) : "null";
            case"boolean":
            case"null":
                return String(value);
            case"object":
                if (!value) {
                    return "null"
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === "[object Array]") {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || "null"
                    }
                    v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                    gap = mind;
                    return v
                }
                if (rep && typeof rep === "object") {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === "string") {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                }
                v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                gap = mind;
                return v
        }
    }

    if (typeof JSON.stringify !== "function") {
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        meta = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else {
                if (typeof space === "string") {
                    indent = space
                }
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {"": value})
        }
    }
    if (typeof JSON.parse !== "function") {
        cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({"": j}, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    }
}());
(function (d, m) {
    if (d.M && d.M.Module) {
        return
    }
    var i = d.M = {};
    var y = true, af = false, Y = 0, D = 0, F = 1, V = 2, H = String.prototype, p = Array.prototype, h = Object.prototype, n = Function.prototype, j = H.trim, O = p.map, ac = p.some, ak = p.every, P = p.slice, k = p.filter, u = p.forEach, X = p.indexOf, R = p.lastIndexOf, B = n.bind;
    i.log = function () {
        if ("console" in d && typeof d.console.log == "function") {
            return d.console.log.apply(d.console, arguments)
        }
    };
    i.info = function () {
        if ("console" in d) {
            if (typeof d.console.info == "function") {
                return d.console.info.apply(d.console, arguments)
            } else {
                if (typeof d.console.log == "function") {
                    return d.console.log.apply(d.console, arguments)
                }
            }
        }
    };
    i.debug = function () {
        if (i.config.debug) {
            return i.log.apply(i, arguments)
        }
    };
    i.warning = function (al) {
        if (i.config.debug) {
            i.info("Error:" + al)
        }
    };
    i.error = function (al) {
        if (i.config.debug) {
            throw new TypeError(al)
        } else {
            i.info("Error:" + al)
        }
    };
    var ae = function () {
    }, K = function () {
        Y++;
        return Y
    }, z = function (am, al) {
        al = al.substr(0, 1).toUpperCase() + al.substr(1);
        return {}.toString.call(am) == "[object " + al + "]"
    }, aa = function (al) {
        return al === null
    }, t = function (al) {
        return al === m
    }, w = function (al) {
        return z(al, "Array")
    }, U = function (al) {
        return typeof al == "object" && !aa(al)
    }, q = function (al) {
        return typeof al === "function"
    }, J = function (am) {
        if (!U(am)) {
            return af
        }
        for (var al in am) {
            if (am.hasOwnProperty(al)) {
                return af
            }
        }
        return y
    }, s = function (al) {
        return al === "" || (w(al) && al.length === 0) || J(al)
    }, A = function (an) {
        var am = [];
        if (U(an)) {
            for (var al in an) {
                if (an.hasOwnProperty(al)) {
                    am.push(al)
                }
            }
        }
        return am
    }, a = function (al) {
        if (j) {
            return j.call(al)
        } else {
            return al.replace(/^\s+|\s+$/g, "")
        }
    }, C = function (an, aq, ao) {
        if (O) {
            return O.call(an, aq, ao)
        } else {
            if (aa(an) || t(an)) {
                i.error("Array.prototype.map called on null or undefined")
            } else {
                if (!q(aq)) {
                    i.error(aq + " is not a function")
                }
            }
            var ar = Object(an), am = ar.length >>> 0, al = new Array(am), ap = 0;
            while (ap < am) {
                if (ap in ar) {
                    al[ap] = aq.call(ao, ar[ap], ap, ar)
                }
                ap++
            }
            return al
        }
    }, T = function (an, aq, ao) {
        if (ac) {
            return ac.call(an, aq, ao)
        } else {
            if (aa(an) || t(an)) {
                i.error("Array.prototype.some called on null or undefined")
            } else {
                if (!q(aq)) {
                    i.error(aq + " is not a function")
                }
            }
            var ar = Object(an), am = ar.length >>> 0, al = new Array(am), ap = 0;
            while (ap < am) {
                if (ap in ar && aq.call(ao, ar[ap], ap, ar)) {
                    return y
                }
                ap++
            }
            return af
        }
    }, G = function (an, aq, ao) {
        if (ak) {
            return ak.call(an, aq, ao)
        } else {
            if (aa(an) || t(an)) {
                i.error("Array.prototype.every called on null or undefined")
            } else {
                if (!q(aq)) {
                    i.error(aq + " is not a function")
                }
            }
            var ar = Object(an), am = ar.length >>> 0, al = new Array(am), ap = 0;
            while (ap < am) {
                if (ap in ar && !aq.call(ao, ar[ap], ap, ar)) {
                    return af
                }
                ap++
            }
            return y
        }
    }, I = function (am, ar, an) {
        if (k) {
            return k.call(am, ar, an)
        } else {
            if (aa(am) || t(am)) {
                i.error("Array.prototype.filter called on null or undefined")
            } else {
                if (!q(ar)) {
                    i.error(ar + " is not a function")
                }
            }
            var at = Object(am), al = at.length >>> 0, ao = 0, ap = [], aq;
            while (ao < al) {
                if (ao in at) {
                    aq = at[ao];
                    if (ar.call(an, aq, ao, at)) {
                        ap.push(aq)
                    }
                }
                ao++
            }
            return ap
        }
    }, r = function (am, an) {
        if (X) {
            var ao = P.call(arguments, 1);
            return X.apply(am, ao)
        } else {
            var al = am.length, ap = 0;
            if (arguments.length > 2) {
                ap = parseInt(arguments[2], 10);
                ap = isNaN(ap) ? 0 : ap
            }
            if (al === 0 || ap > al) {
                return -1
            }
            if (ap < 0) {
                ap += al
            }
            for (; ap < al; ap++) {
                if (am[ap] === an) {
                    return ap
                }
            }
            return -1
        }
    }, L = function (am, an) {
        if (R) {
            var ao = P.call(arguments, 1);
            return R.apply(am, ao)
        } else {
            var al = am.length, ap = al;
            if (al === 0 || ap === 0) {
                return -1
            }
            if (arguments.length > 2) {
                ap = parseInt(arguments[2], 10);
                ap = isNaN(ap) ? al : ap
            }
            if (ap < 0) {
                ap += al
            }
            for (; ap > 0; ap--) {
                if (am[ap] === an) {
                    return ap
                }
            }
            return -1
        }
    }, f = function (am, al) {
        if (B) {
            var aq = P.call(arguments, 2);
            return B.apply(am, [al].concat(aq))
        } else {
            if (!q(am)) {
                i.error("Function.prototype.bind - what is trying to be bound is not callable")
            }
            var aq = P.call(arguments, 2), ap = am, an = function () {
            }, ao = function () {
                return ap.apply(am instanceof an && al ? am : al || d, aq.concat(P.call(arguments, 0)))
            };
            an.prototype = am.prototype;
            ao.prototype = new an();
            return ao
        }
    }, ab = function (ao) {
        var al = P.call(arguments, 1), am = arguments.length, an = y;
        if (z(al[am - 2], "Boolean")) {
            an = al[am - 2];
            al = al.slice(0, am - 2)
        }
        c(al, function (ar, ap) {
            if (U(ar)) {
                for (var aq in ar) {
                    if (!ao.hasOwnProperty(aq) || an) {
                        ao[aq] = ar[aq]
                    }
                }
            }
        });
        return ao
    }, l = function (an, am) {
        var ao = function () {
        };
        ao.prototype = am.prototype;
        var al = an.prototype;
        an.prototype = new ao();
        ab(an.prototype, al, y);
        an.prototype.constructor = an;
        an.prototype.$parent = am.prototype;
        an.$parent = am;
        return an
    }, c = function (ap, ao, an) {
        var am, al;
        an = an || d;
        if (!U(ap)) {
            return
        }
        if (u && (z(ap, "Array") || z(ap, "Arguments"))) {
            var aq = P.call(ap, 0);
            u.call(aq, ao, an)
        } else {
            if (z(ap, "Array") || z(ap, "Arguments")) {
                var aq = P.call(ap, 0);
                for (am = 0, al = aq.length; am < al; am++) {
                    ao.call(an, aq[am], am, aq)
                }
            } else {
                for (am in ap) {
                    if (ap.hasOwnProperty(am)) {
                        ao.call(an, ap[am], am, ap)
                    }
                }
            }
        }
    };
    ab(i, {
        is: z,
        isNull: aa,
        isUndefined: t,
        isArray: w,
        isObject: U,
        isFunction: q,
        isEmptyObject: J,
        isEmpty: s,
        keys: A,
        trim: a,
        bind: f,
        mix: ab,
        extend: l,
        map: C,
        some: T,
        every: G,
        filter: I,
        forEach: c,
        indexOf: r,
        lastIndexOf: L
    });
    var x = {}, ag = function (al, an) {
        var am = [];
        if (al.length > 1) {
            am = P.call(al).slice(1)
        }
        am.unshift(an + "_" + al[0]);
        return am
    }, o = {}, e = {
        on: function (al, am) {
            if (!(al in x)) {
                x[al] = []
            }
            x[al].push(am)
        }, off: function (al, am) {
            if (!(al in x) || x[al].length === 0) {
                return
            }
            if (!am) {
                x[al] = []
            } else {
                c(x[al], function (ao, an) {
                    if (ao == am) {
                        x[al][an] = null
                    }
                })
            }
        }, once: function (am, an) {
            var ao = this, al = function () {
                ao.off(am, al);
                var ap = P.call(arguments);
                an.apply(null, ap)
            };
            return this.on(am, al)
        }, fire: function (al) {
            o[al] = 1;
            if (!(al in x) || x[al].length === 0) {
                return
            }
            var am = [];
            if (arguments.length > 0) {
                am = P.call(arguments).slice(1)
            }
            c(x[al], function (ao, an) {
                if (q(ao)) {
                    ao.apply(d, am)
                }
            })
        }, isFired: function (al) {
            if (al in o) {
                return true
            }
            return false
        }
    };
    var W = i.Event = function (an) {
        if (!U(an) && !q(an)) {
            i.error("only can bind event on object or function:" + an)
        }
        if (!an.__event_id) {
            an.__event_id = K()
        }
        var al = {}, am = an.__event_id;
        c(e, function (ap, ao) {
            al[ao] = function () {
                return ap.apply(e, ag(arguments, "objectevent_" + am))
            }
        });
        return al
    };
    var ad = {};
    c(e, function (am, al) {
        ad[al] = function () {
            return am.apply(e, ag(arguments, "normalevent"))
        }
    });
    ab(i.Event, ad);
    i.events = x;
    var v = i.Modules = {};

    function E(al) {
        this.id = "";
        this.depends = [];
        this.factory = null;
        this.status = F;
        this.instantiated = af;
        ab(this, al);
        this.instance = this.instantiated ? this.factory : null
    }

    E.prototype = {
        load: function () {
            this.status = V;
            W.fire(this.id + " loaded")
        }, getInstance: function () {
            if (!this.instantiated) {
                var an = this.id, am = {
                    exports: {}, getId: function () {
                        return an
                    }
                }, al = this.factory.call(d, b, am.exports, am);
                if (J(am.exports)) {
                    am.exports = al
                }
                this.instance = am.exports;
                this.instantiated = true
            }
            return this.instance
        }
    };
    function b(al) {
        if (!(al in v) || v[al].status !== V) {
            i.error("can not require an unloaded module:" + al)
        }
        return v[al].getInstance()
    }

    b.async = function (al, am) {
        if (z(al, "String")) {
            al = al.split(",")
        }
        if (!z(al, "Array")) {
            i.error("module async require invalid:" + al)
        }
        g(al, function () {
            var an = C(al, function (ao) {
                return b(ao)
            });
            am.apply(d, an)
        });
        i.fetchModules(al)
    };
    var S = d.define = i.define = function (ap, al) {
        if (!z(ap, "String")) {
            i.error("module id invalid:" + ap)
        }
        if (!q(al) && !U(al)) {
            i.error("module " + ap + " factory invalid")
        }
        if (ap in v) {
            i.warning("module " + ap + " has been defined");
            return
        }
        var ao = [];
        if (q(al)) {
            ao = aj(al)
        }
        var an = new E({id: ap, depends: ao, factory: al, status: ao.length ? F : V, instantiated: q(al) ? af : y});
        v[ap] = an;
        if (an.status === F) {
            var am = y;
            c(ao, function (aq) {
                if (!(aq in v) || (v[aq].status !== V && !Z(ap, aq))) {
                    W.on(aq + " loaded", function () {
                        ai(an)
                    });
                    am = af
                }
            });
            if (am) {
                an.load()
            }
        } else {
            an.load()
        }
    };
    var aj = function (ap) {
        var am = a(ap.toString()), ao = am.indexOf(")"), ar = am.substr(0, ao + 1), al = ar.match(/\(\s*([^\)]*)\s*\)/);
        if (!aa(al)) {
            var av = a(al[1]);
            if (av.length > 0) {
                var aq = av.split(","), au = a(aq[0]), aw = new RegExp("\\b" + au + "\\s*\\(\\s*['\"]([^\\)]+)['\"]\\s*\\)", "g");
                var at, an = [];
                while ((at = aw.exec(am)) !== null) {
                    an.push(a(at[1]))
                }
                return an
            }
        }
        return []
    };
    var Z = function (aq, ao) {
        var al = v[ao], am = al.depends, ap = am.length;
        if (ap === 0) {
            return af
        } else {
            if (r(am, aq) != -1) {
                return y
            } else {
                for (var an = 0; an < ap; an++) {
                    if ((am[an] in v) && Z(aq, am[an])) {
                        return y
                    }
                }
                return af
            }
        }
    };
    var ai = function (am) {
        var al = y, an = am.depends;
        c(an, function (ao) {
            if (!(ao in v) || v[ao].status !== V) {
                al = af
            }
        });
        if (al) {
            am.load()
        }
    };
    E.waiting = function () {
        var al = [];
        c(v, function (at, ao) {
            if (at.status === F) {
                var ar = {id: ao, wait: []}, aq, an;
                for (var ap = 0, am = at.depends.length; ap < am; ap++) {
                    aq = at.depends[ap];
                    if (aq in v) {
                        if (v[aq].status === F) {
                            ar.wait.push({id: aq, status: F})
                        }
                    } else {
                        ar.wait.push({id: aq, status: D})
                    }
                }
                al.push(ar)
            }
        });
        return al
    };
    E.loaded = function () {
        var al = [];
        c(v, function (an, am) {
            if (an.status === V) {
                al.push({id: am, depends: an.depends})
            }
        });
        return al
    };
    i.Module = E;
    i.closure = function (an, al) {
        var ao = [];
        if (!q(an)) {
            i.error("M.closure is for function execution.")
        }
        var am = aj(an);
        if (J(am)) {
            an(b)
        } else {
            g(am, function () {
                an(b)
            })
        }
        c(am, function (ap) {
            if (!(ap in v)) {
                ao.push(ap)
            }
        });
        if (al && ao.length > 0) {
            i.fetchModules(ao)
        }
    };
    var Q = [];
    var g = function (am, ao) {
        if (!q(ao)) {
            return af
        }
        var an = y, al = {moduleIds: {}, callback: ao};
        c(am, function (ap) {
            if (!(ap in v) || v[ap].status !== V) {
                al.moduleIds[ap] = y;
                W.on(ap + " loaded", function () {
                    N(ap)
                })
            }
        });
        if (!J(al.moduleIds)) {
            Q.push(al)
        } else {
            ao()
        }
    };
    var N = function (al) {
        c(Q, function (am, an) {
            if (am) {
                if (al in am.moduleIds) {
                    delete am.moduleIds[al]
                }
                if (J(am.moduleIds)) {
                    delete (Q[an]);
                    am.callback()
                }
            }
        })
    };
    E.closureWaiting = function () {
        return Q
    };
    E.wait = g;
    var ah = [];
    i.fetchModules = function (al) {
        var am = [];
        c(al, function (an) {
            if (r(ah, an) == -1 && !(an in v)) {
                am.push(an);
                ah.push(an)
            }
        });
        if (am.length > 0) {
            i.config.fetchModules(am)
        }
    };
    i.fetching = function () {
        var al = [];
        c(ah, function (am) {
            if (!(am in v)) {
                al.push(am)
            }
        });
        return al
    };
    i.config = {
        debug: af, fetchModules: function () {
            i.error("You must implement fetchModules method!")
        }
    }
}(window));
(function (u) {
    if (!u.M || !u.$) {
        return
    }
    var g = u.M, e = u.$;
    var b = window.Env || {}, n = b.WWW_HOST || "www.mafengwo.cn";
    g.config.debug = b.debug || false;
    function s() {
        g.windowFocused = true
    }

    function d() {
        g.windowFocused = false
    }

    g.windowFocused = true;
    if ("addEventListener" in window) {
        window.addEventListener("focus", s, false);
        window.addEventListener("blur", d, false)
    } else {
        if ("attachEvent" in document) {
            document.attachEvent("onfocusin", s);
            document.attachEvent("onfocusout", d)
        }
    }
    g.config.fetchModules = function (A, B) {
        return g.config.fetchJS(A, B)
    };
    g.config.fetchJS = function (A, B) {
        g.loadCSSJS(A, function (C) {
            if ("js_list" in C) {
                g.loadResource(C.js_list, B)
            }
        })
    };
    g.config.fetchCSS = function (A, B) {
        g.loadCSSJS(A, function (C) {
            if ("css_list" in C) {
                g.loadResource(C.css_list, B)
            }
        })
    };
    g.loadCSSJS = function (E, D) {
        if (g.is(E, "String")) {
            E = [E]
        }
        var A = [], B = [];
        g.forEach(E, function (F) {
            if (p(F)) {
                A.push(F)
            } else {
                B.push(F)
            }
        });
        var C = g.map(g.Module.loaded(), function (F) {
            return F.id
        });
        e.ajax({
            dataType: "jsonp",
            url: location.protocol + "//" + n + "/ajax/ajax_fetch_cssjs.php",
            data: {css_list: A, js_list: B, loaded_modules: C.join(",")},
            success: function (F) {
                typeof D == "function" && D(F)
            }
        }, "json")
    };
    var z = u.document, f = z.getElementsByTagName("head")[0] || z.documentElement, y = +navigator.userAgent.replace(/.*AppleWebKit\/(\d+)\..*/, "$1") < 536, k = [];
    var p = function (A) {
        return A.search(/\.css(\?[^\.\?]*)?$/) !== -1
    }, t = function (E, B) {
        var D = E.sheet, A = false;
        if (y && D) {
            A = true
        } else {
            if (D) {
                try {
                    if (D.cssRules) {
                        A = true
                    }
                } catch (C) {
                    if (C.name === "NS_ERROR_DOM_SECURITY_ERR") {
                        A = true
                    }
                }
            }
        }
        setTimeout(function () {
            if (A) {
                r(B)
            } else {
                t(E, B)
            }
        }, 20)
    }, l = function (A, C) {
        var B = z.createElement(C ? "link" : "script");
        if (C) {
            B.rel = "stylesheet";
            B.href = A
        } else {
            B.async = true;
            B.src = A
        }
        f.appendChild(B);
        return B
    }, i = function (A, B) {
        if (!A || (g.is(A, "Array") && A.length === 0)) {
            if (typeof B == "function") {
                B()
            }
        } else {
            if (!g.is(A, "Array")) {
                A = [A]
            }
            if (typeof B == "function") {
                k.push({urls: A, callback: B})
            }
            g.forEach(A, function (C) {
                var E = p(C);
                if (j(C, E)) {
                    r(C);
                    return
                }
                var D = l(C, E), F = "onload" in D;
                if (E && (y || !F)) {
                    setTimeout(function () {
                        t(D, C)
                    }, 1)
                } else {
                    if (F) {
                        D.onload = function () {
                            D.onload = null;
                            r(C)
                        }
                    } else {
                        D.onreadystatechange = function () {
                            if (/loaded|complete/.test(D.readyState)) {
                                D.onreadystatechange = null;
                                r(C)
                            }
                        }
                    }
                }
            })
        }
    }, w = function (A, B) {
        if ("css_list" in A) {
            g.loadResource(A.css_list, function () {
                if ("js_list" in A) {
                    g.loadResource(A.js_list, B)
                } else {
                    if (typeof B == "function") {
                        B()
                    }
                }
            })
        } else {
            if ("js_list" in A) {
                g.loadResource(A.js_list, B)
            } else {
                if (typeof B == "function") {
                    B()
                }
            }
        }
    }, j = function (A, C) {
        var B = false;
        if (C) {
            e("link").each(function () {
                var D = this.href;
                if (D.length && v(A, D, C)) {
                    B = true;
                    return false
                }
            })
        } else {
            e("script").each(function () {
                var D = this.src;
                if (D.length && v(A, D, C)) {
                    B = true;
                    return false
                }
            })
        }
        return B
    }, v = function (D, C, A) {
        var B = A ? /(\.css)(\?\d*)?$/ : /(\.js)(\?\d*)?$/;
        D = D.replace(B, "$1");
        C = C.replace(B, "$1");
        return D === C
    }, r = function (A) {
        g.forEach(k, function (D, B) {
            if (D) {
                var E = D.urls, F = D.callback;
                for (var C = 0; C < E.length; C++) {
                    if (A == E[C]) {
                        E.splice(C, 1);
                        C--
                    }
                }
                if (!E.length) {
                    delete (k[B]);
                    if (typeof F == "function") {
                        F()
                    }
                }
            }
        })
    };
    g.loadResource = i;
    g.fetchCSSJS = function (B, A) {
        g.loadCSSJS(B, function (C) {
            w(C, A)
        })
    };
    g.loadIMG = function (B, C) {
        var A = new Image();
        C = typeof C === "function" ? C : function () {
        };
        A.onload = function () {
            A.onload = null;
            C.call(null, A)
        };
        if (A.readyState == "complete") {
            C.call(null, A)
        }
        A.src = B
    };
    g.loadCssJsListSeq = w;
    g.addStyle = function (B) {
        var A = document.createElement("style");
        A.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(A);
        if (A.styleSheet) {
            A.styleSheet.cssText = B
        } else {
            A.appendChild(document.createTextNode(B))
        }
    };
    var o = null;
    g.cssSupport = function (G) {
        var E = false, D, A;
        G = "" + G;
        if (G.length) {
            if (!o) {
                var H = document.createElement("div");
                o = H.style
            }
            var B = G.split("-");
            if (B.length > 1) {
                for (D = 0, A = B.length; D < A; D++) {
                    B[D] = B[D].toLowerCase();
                    if (D > 0) {
                        var F = B[D];
                        B[D] = F.charAt(0).toUpperCase() + F.substr(1)
                    }
                }
                G = B.join("")
            }
            if (G in o) {
                E = G
            } else {
                var C = "webkit moz ms o".split(" ");
                G = G.charAt(0).toUpperCase() + G.substr(1);
                for (D = 0, A = C.length; D < A; D++) {
                    if ((C[D] + G) in o) {
                        E = C[D] + G;
                        break
                    }
                }
            }
        }
        return E
    };
    if (b.CSTK) {
        if (typeof e.ajaxSetup == "function") {
            e.ajaxSetup({
                beforeSend: function (B, A) {
                    if (A.data) {
                        if (g.isObject(A.data)) {
                            if (A.data._need_cstk) {
                                A.data = e.extend(A.data, {__ctk__: b.CSTK})
                            }
                        } else {
                            if (g.is(A.data, "String")) {
                                if (A.data.indexOf("_need_cstk") != -1) {
                                    A.data = A.data + "&" + e.param({__ctk__: b.CSTK})
                                }
                            }
                        }
                    }
                    return true
                }
            })
        }
    }
    g.Utils = {};
    g.loadAppRaw = function (B, A, E, F) {
        var D = g.map(g.Module.loaded(), function (G) {
            return G.id
        });
        var C = {app: B, loaded_modules: D.join(","), params: JSON.stringify(E)};
        if (A) {
            C.app_conf = A
        }
        e.ajax({
            dataType: "jsonp",
            url: location.protocol + "//" + n + "/ajax/ajax_japp.php",
            data: C,
            success: function (G) {
                typeof F == "function" && F(G)
            }
        }, "json")
    };
    g.loadApp = function (B, A, C, D) {
        g.loadAppRaw(B, A, C, function (E) {
            if (!g.isEmpty(E)) {
                var F = {css_list: E.css || [], js_list: E.js || []};
                w(F, function () {
                    if (typeof D == "function") {
                        D(E)
                    }
                })
            }
        })
    };
    g.JAppController = {
        loadedList: {}, isLoaded: function (B, A) {
            return (A ? A + ":" + B : B) in this.loadedList
        }, getJApp: function (B, A) {
            return A ? this.loadedList[A + ":" + B] : this.loadedList[B]
        }, onload: function (B, A, C) {
            B = A ? A + ":" + B : B;
            g.Event.on("app " + B + " loaded", g.bind(function () {
                C.call(u, this.loadedList[B])
            }, this))
        }
    };
    g.JApp = function (A, B) {
        if (!g.JAppController.isLoaded(A)) {
            if (!g.is(A, "String")) {
                g.error("app can not be defined without name")
            }
            if (!B || typeof B != "function" && typeof B.run != "function") {
                g.error("invalid app:" + A)
            }
            if (typeof B == "function") {
                B = {run: B}
            }
            g.JAppController.loadedList[A] = B;
            g.Event.fire("app " + A + " loaded")
        }
    };
    g.loadJApp = function (B, C, A, D) {
        C = e(C);
        if (!g.JAppController.isLoaded(B, A)) {
            if (!C.data("locking")) {
                C.data("locking", true);
                C.css("cursor", "wait");
                g.JAppController.onload(B, A, function (E) {
                    C.data("locking", false);
                    C.css("cursor", "");
                    E.run(C)
                });
                g.loadAppRaw(B, A, D, function (E) {
                    if (!g.isEmpty(E)) {
                        var F = {css_list: E.css || []};
                        w(F, function () {
                            if (E.html) {
                                e("body").append(E.html);
                                g.Event.fire("new html appended")
                            }
                            if (E.js && E.js.length) {
                                g.loadResource(E.js)
                            }
                        })
                    }
                })
            }
        } else {
            g.JAppController.getJApp(B, A).run(C)
        }
    };
    var c = ["activity_share", "sns_share"];
    e(document).on("click", "[data-japp]", function (A) {
        var B = e(A.currentTarget);
        if ((B.get(0).tagName.toLowerCase() == "a" && B.attr("href") == "#") || B.hasClass("_j_pvd")) {
            A.preventDefault()
        }
        x(B)
    });
    if ("ontouchstart" in document.documentElement) {
        if (e.event && e.event.special && "tap" in e.event.special) {
            e(document).on("tap", "[data-japp]", function (A) {
                A.preventDefault();
                x(e(A.currentTarget))
            })
        }
    }
    function x(H) {
        var I = H.data("japp"), A = H.data("jappconf");
        var D = g.indexOf(c, I) != -1;
        if (typeof H.data("openwindow") != "undefined") {
            D = !!H.data("openwindow")
        }
        if (D) {
            var B = H.data("windowsetting") || "width=700,height=680,left=75,top=20,scrollbars=no,status=no,resizable=no,menubar=no,toolbar=no,scrollbars=no,location=yes";
            H.data("openwindow", window.open("", H.data("openwindow"), B))
        }
        var E = H.data(), F = H.data("jappfedata"), C = {};
        if (!g.isUndefined(F) && F.length > 0) {
            F = F.split(",")
        }
        if (g.isUndefined(F) || F.length > 0) {
            for (var G in E) {
                if (E.hasOwnProperty(G)) {
                    if (g.indexOf(["japp", "jappconf", "jappfedata", "openwindow"], G) == -1) {
                        if (g.isUndefined(F) || g.indexOf(F, G) != -1) {
                            C[G] = E[G]
                        }
                    }
                }
            }
        }
        g.loadJApp(I, H, A, C)
    }

    var h = [], a = b.pagelet_block_class || "pagelet-block", q = b.pagelet_block_loading_class || "pagelet-block-asyncloading";

    function m(A) {
        g.mix(this, A);
        if (this.container.length) {
            !g.isEmptyObject(this.events) && m.createEvents(this.container, this.events, this);
            typeof this.init == "function" && this.init()
        }
    }

    g.mix(m.prototype, {
        syncXHR: null, autoAbortPrevSync: true, getSyncParams: function (A) {
            return A ? this.__private_data.sync_params[A] : this.__private_data.sync_params
        }, setSyncParams: function (B, A) {
            g.mix(this.__private_data.sync_params, B);
            if (A) {
                this.sync()
            }
        }, getSyncApi: function () {
            return this.__private_data.sync_api
        }, setSyncApi: function (A) {
            this.__private_data.sync_api = A
        }, sync: function () {
            var A = this.getSyncApi();
            if (A) {
                if (this.autoAbortPrevSync) {
                    try {
                        this.syncXHR && this.syncXHR.abort()
                    } catch (B) {
                    }
                }
                g.Event(this).fire("before content sync");
                this.syncXHR = m.loadContent(A, this.getSyncParams(), this.container, e.proxy(function (C) {
                    this.syncHtml(C.html);
                    this.syncData(C.controller_data);
                    g.Event(this).fire("content sync success")
                }, this), e.proxy(function (C) {
                    g.Event(this).fire("content sync fail", C)
                }, this), e.proxy(function () {
                    g.Event(this).fire("content sync complete")
                }, this))
            }
        }, abortSync: function () {
            try {
                this.syncXHR && this.syncXHR.abort()
            } catch (A) {
            }
        }, syncHtml: function (A) {
            this.container.html(A)
        }, syncData: function (A) {
            g.mix(this.data, A)
        }
    });
    g.mix(m, {
        createInstance: function (B, A) {
            var D = B.data("params");
            D = g.isObject(D) && !g.isEmptyObject(D) ? D : {};
            var C = new m(g.mix({
                __private_data: {sync_api: B.data("api"), sync_params: D},
                data: g.mix({}, B.data("controller_data")),
                container: B
            }, A));
            g.Event.fire("pagelet loaded", {id: B.attr("id"), pagelet: C});
            g.Event.fire("pagelet " + B.attr("id") + " loaded", {pagelet: C});
            return C
        }, createEvents: function (A, C, B) {
            g.forEach(C, function (E, D) {
                var F = typeof E == "function" ? e.proxy(E, B) : (E in B ? e.proxy(B[E], B) : null);
                if (F) {
                    var G = D.split(",");
                    if (G.length == 1) {
                        A.on(G[0], F)
                    } else {
                        if (G.length == 2) {
                            A.on(G[0], G[1], F)
                        } else {
                            g.error("invalid pagelet event key:", D)
                        }
                    }
                } else {
                    g.error("can not find event handler:", E)
                }
            })
        }, loadContent: function (C, F, B, A, E, D) {
            F = g.isObject(F) && !g.isEmptyObject(F) ? F : {};
            B.addClass(q);
            return e.ajax({
                dataType: "jsonp",
                data: {params: JSON.stringify(F), api: C},
                url: location.protocol + "//" + n + "/ajax/ajax_fetch_pagelet.php",
                success: function (G) {
                    if (G && G.data) {
                        typeof A == "function" && A(G.data)
                    } else {
                        var H = {type: "business_error", error: G && G.error || {}};
                        typeof E == "function" && E(H)
                    }
                },
                error: function (H, J, I) {
                    var G = {type: "http_error", error: {xhr: H, status: J}};
                    typeof E == "function" && E(G)
                },
                complete: function () {
                    B.removeClass(q);
                    typeof D == "function" && D()
                }
            })
        }, loadAsyncContent: function (B) {
            var A = e("#" + B);
            if (A.length && A.data("async") && A.data("api")) {
                m.loadContent(A.data("api"), A.data("params"), A, function (C) {
                    var D = {css_list: C.css || []};
                    w(D, function () {
                        if (C.js && C.js.length) {
                            g.loadResource(C.js, function () {
                                m.finishLoadAsyncContent(A, C)
                            })
                        } else {
                            m.finishLoadAsyncContent(A, C)
                        }
                    })
                }, function (C) {
                    g.error(C)
                })
            }
        }, finishLoadAsyncContent: function (B, C) {
            var A = B.attr("id");
            C.html && B.html(C.html);
            C.controller_data && B.data("controller_data", C.controller_data);
            g.Event.fire("pagelet " + A + " async content loaded");
            g.Event.fire("new html appended")
        }, runPagelet: function (B) {
            B.removeAttr("data-pagelet");
            B.addClass(a);
            var A = B.attr("id");
            if (B.data("async")) {
                if (g.Event.isFired("pagelet " + A + " async content loaded")) {
                    m.runPageletBlock(B)
                } else {
                    g.Event.on("pagelet " + A + " async content loaded", function () {
                        m.runPageletBlock(B)
                    })
                }
                m.loadAsyncContent(A)
            } else {
                m.runPageletBlock(B)
            }
        }, runPageletBlock: function (C) {
            var A = C.data("controller"), B = C.attr("id");
            if (A) {
                g.Module.wait([A], function () {
                    g.closure(function (D) {
                        h[B] = m.createInstance(C, D(A))
                    })
                })
            } else {
                h[B] = m.createInstance(C, {})
            }
        }
    });
    g.Pagelet = {
        getInstance: function (A) {
            return h[A] || null
        }, wait: function (A, B) {
            if (g.Event.isFired("pagelet " + A + " loaded")) {
                typeof B == "function" && B(h[A])
            } else {
                g.Event.on("pagelet " + A + " loaded", function (C) {
                    typeof B == "function" && B(C.pagelet)
                })
            }
        }, createInstance: m.createInstance, runAllPagelet: function () {
            e("[data-pagelet]").each(function () {
                m.runPagelet(e(this))
            })
        }
    };
    e(function () {
        g.Pagelet.runAllPagelet();
        g.Event.on("new html appended", function () {
            g.Pagelet.runAllPagelet()
        })
    })
}(window));
(function () {
    var c = window.Env || {};
    $(document).delegate("[data-cs-t] .clickstat", "click", d).delegate("[data-cs-t] a", "click", d);
    function d(k) {
        var m = $(k.currentTarget), g = m.closest("[data-cs-t]").data("cs-t"), i = m.closest("[data-cs-p]").data("cs-p"), h = (m.attr("target") || "").toLowerCase(), l = m.data("cs-l"), e = m.data("cs-d"), f = true;
        if (!g || g.length === 0 || !i || i.length === 0) {
            return
        }
        if (m.is("a")) {
            if (!l || l.length === 0) {
                f = false;
                l = m.get(0).href || m.get(0).getAttribute("href", 2) || ""
            }
            if (!e || e.length === 0) {
                e = m.attr("title") || "";
                e = e.replace(new RegExp("\n|\r", "g"), "");
                e = $.trim(e.replace(new RegExp("</?.+?>", "g"), ""))
            }
            var j = window.name.toLowerCase();
            if ("" === h || "_self" == h || "_parent" == h || "_top" == h) {
                b(g, i, l, e, f ? null : m)
            } else {
                if ("_blank" == h || j != h) {
                    b(g, i, l, e, null)
                } else {
                    b(g, i, l, e, f ? null : m)
                }
            }
        } else {
            if (!l || l.length === 0) {
                if (m.is("input")) {
                    l = $.trim(m.val())
                }
            }
            b(g, i, l, e, null)
        }
    }

    function b(g, h, j, e, f) {
        if (!f) {
            var i = (c.WWW_HOST ? "http://" + c.WWW_HOST : "") + "/group/cs.php";
            $.ajax({url: i, dataType: "jsonp", data: {t: g, p: h, l: j, d: e}, jsonp: "cb"})
        } else {
            if ("/" == j.substr(0, 1) || "http://" == j.substr(0, 7).toLowerCase()) {
                var m = c.WWW_HOST ? "http://" + c.WWW_HOST : "", k = m + "/group/cs.php", l = k.length;
                if (k != j.substr(0, l)) {
                    f.attr("href", m + "/group/cs.php?t=" + encodeURIComponent(g) + "&p=" + encodeURIComponent(h) + "&l=" + encodeURIComponent(j) + "&d=" + encodeURIComponent(e));
                    f.attr("data-href", j)
                }
            } else {
                b(g, h, j, e, null)
            }
        }
    }

    if (window.M && window.M.Utils) {
        M.Utils.clickStat = b
    }
    function a(e) {
        if (!("action" in e)) {
            e.action = "add_op_logs"
        }
        var f = (c.WWW_HOST ? "http://" + c.WWW_HOST : "") + "/ajax/ajax_logs.php";
        $.ajax({url: f, dataType: "jsonp", data: e})
    }

    if (window.M && window.M.Utils) {
        M.Utils.opLog = a
    }
}());
if (!window.M) {
    window.M = {}
}
if (!window.Env) {
    window.Env = {}
}
if (!window.mLogImg) {
    window.mLogImg = []
}
var xstringify = (function () {
    function b(d) {
        /["\\\x00-\x1f]/.test(d) && (d = d.replace(/["\\\x00-\x1f]/g, function (f) {
            var e = c[f];
            if (e) {
                return e
            }
            e = f.charCodeAt();
            return "\\u00" + Math.floor(e / 16).toString(16) + (e % 16).toString(16)
        }));
        return d
    }

    var c = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
    return function (k) {
        switch (typeof k) {
            case"undefined":
                return "{}";
            case"number":
                return isFinite(k) ? String(k) : "null";
            case"string":
                return b(k);
            case"boolean":
                return String(k);
            default:
                if (k instanceof Array) {
                    var j = ["["], a = k.length, m, i, h;
                    for (i = 0; i < a; i++) {
                        switch (h = k[i], typeof h) {
                            case"undefined":
                            case"function":
                            case"unknown":
                                break;
                            default:
                                m && j.push(","), j.push(xstringify(h)), m = 1
                        }
                    }
                    j.push("]");
                    return j.join("")
                }
                m = ["{"];
                i = xstringify;
                for (a in k) {
                    if (Object.prototype.hasOwnProperty.call(k, a)) {
                        switch (h = k[a], typeof h) {
                            case"undefined":
                            case"unknown":
                            case"function":
                                break;
                            default:
                                j && m.push(","), j = 1, m.push('"' + i(a) + '":"' + i(h) + '"')
                        }
                    }
                }
                m.push("}");
                return m.join("")
        }
    }
})();
var mfwSendLog = {};
mfwSendLog._compelete = 0;
mfwSendLog._receive = 0;
mfwSendLog.sendByImg = function (f, a, i) {
    var g = new Image(1, 1), h = "mfw_" + Math.floor(2147483648 * Math.random()).toString(36);
    window.mLogImg[h] = g;
    g.onload = g.onerror = function () {
        g.onload = g.onerror = null;
        g = window.mLogImg[h] = null;
        if (typeof i == "function") {
            i()
        }
    };
    var b = String(new Date().getTime()) + String(Math.random());
    if (f.indexOf("?") !== -1) {
        g.src = f + a + "&len=" + a.length + "&_nocache=" + b
    } else {
        g.src = f + "?" + a + "&len=" + a.length + "&_nocache=" + b
    }
};
mfwSendLog.sendByBeacon = function (b, a, d) {
    return window.navigator.sendBeacon ? window.navigator.sendBeacon(b, a) ? (d(), !0) : !1 : !1
};
mfwSendLog.sendByXHR = function (f, a, i) {
    var h = window.XMLHttpRequest;
    if (!h) {
        return !1
    }
    var g = new h;
    if (!("withCredentials" in g)) {
        return !1
    }
    var b = String(new Date().getTime()) + String(Math.random());
    if (f.indexOf("?") !== -1) {
        g.open("GET", f + a + "&len=" + a.length + "&_nocache=" + b, !0)
    } else {
        g.open("GET", f + "?" + a + "&len=" + a.length + "&_nocache=" + b, !0)
    }
    g.withCredentials = !0;
    g.setRequestHeader("Content-Type", "text/plain");
    g.onreadystatechange = function () {
        4 == g.readyState && (i(), g = null)
    };
    g.send(null);
    return !0
};
mfwSendLog.init = function (b, a, d) {
    d = d || function () {
        };
    if (a.length <= 1024) {
        this.sendByImg(b, a, d)
    } else {
        this.sendByXHR(b, a, d) || this.sendByImg(b, a, d) || this.sendByBeacon(b, a, d)
    }
};
var mfwPageEvent = (function () {
    return function (m, j, d, k) {
        var h = encodeURIComponent;
        var l = document.URL;
        var a = document.referrer;
        if (m && j) {
            m = h(m);
            j = h(j);
            l = h(l);
            a = h(a);
            d = h(xstringify(d));
            var i = Math.floor(2443463648 * Math.random());
            var g = window.Env.uPageId;
            var e = "ac=" + m + "&ec=" + j + "&u=" + l + "&r=" + a + "&ar=" + d + "&pid=" + g + "&rn=" + i;
            var b = ("https:" == document.location.protocol ? "https://" : "http://") + "tongji.mafengwo.cn/track_event.gif";
            mfwSendLog.init(b, e, k)
        }
    }
})();
(function () {
    function a() {
    }

    a.generate = function () {
        var c = a._getRandomInt, e = a._hexAligner;
        return e(c(32), 8) + "-" + e(c(16), 4) + "-" + e(16384 | c(12), 4) + "-" + e(32768 | c(14), 4) + "-" + e(c(48), 12)
    };
    a._getRandomInt = function (c) {
        return 0 > c ? NaN : 30 >= c ? 0 | Math.random() * (1 << c) : 53 >= c ? (0 | 1073741824 * Math.random()) + 1073741824 * (0 | Math.random() * (1 << c - 30)) : NaN
    };
    a._getIntAligner = function (c) {
        return function (e, d) {
            for (var f = e.toString(c), k = d - f.length, l = "0"; 0 < k; k >>>= 1, l += l) {
                k & 1 && (f = l + f)
            }
            return f
        }
    };
    a._hexAligner = a._getIntAligner(16);
    var b = {
        _getFlash: function () {
            var d, e;
            if (window.ActiveXObject) {
                for (d = 12; d > 0; d--) {
                    try {
                        e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + d);
                        return d + ".0"
                    } catch (f) {
                    }
                }
            } else {
                if (navigator.plugins && navigator.plugins.length) {
                    for (d = 0; d < navigator.plugins.length; d++) {
                        if (navigator.plugins[d].name.indexOf("Shockwave Flash") != -1) {
                            return navigator.plugins[d].description.split(" ")[2]
                        }
                    }
                }
            }
            return "Not enabled"
        }, _getCururl: function () {
            var c = document.URL;
            return encodeURIComponent(c)
        }, _getDomain: function () {
            var c = "", e = window.location.hostname, d = e.replace(/\.(com|net|org|cn$)\.?.*/, "");
            if (d.lastIndexOf(".") == -1) {
                c = "." + e
            } else {
                d = d.substring(d.lastIndexOf("."));
                c = e.substring(e.lastIndexOf(d))
            }
            return c
        }, _getRandomInt: function (c) {
            return 0 > c ? NaN : 30 >= c ? 0 | Math.random() * (1 << c) : 53 >= c ? (0 | 1073741824 * Math.random()) + 1073741824 * (0 | Math.random() * (1 << c - 30)) : NaN
        }, _getWindowSize: function () {
            var c = -1, e = -1;
            "number" == typeof window.innerWidth ? (c = window.innerWidth, e = window.innerHeight) : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? (c = document.documentElement.clientWidth, e = document.documentElement.clientHeight) : document.body && (document.body.clientWidth || document.body.clientHeight) && (c = document.body.clientWidth, e = document.body.clientHeight);
            return c + "x" + e
        }, _getScreenSize: function () {
            return screen ? screen.width + "x" + screen.height : "-1x-1"
        }, _getSystemLang: function () {
            return navigator.userLanguage ? navigator.userLanguage : navigator.language ? navigator.language : navigator.browserLanguage ? navigator.browserLanguage : "unknown"
        }, _getChartset: function () {
            var c;
            c = document.characterSet || document.charset || "unknown";
            return c
        }, _setCookie: function (j, h, g) {
            var i = "";
            var e = this._getDomain();
            if (g) {
                i = new Date((new Date()).getTime() + g * 3600000);
                i = "; expires=" + i.toGMTString()
            }
            document.cookie = j + "=" + encodeURIComponent(h) + i + ";domain=" + e + ";path=/; "
        }, _getCookie: function (f) {
            var h = "";
            var d = f + "=";
            if (document.cookie.length > 0) {
                var g = document.cookie.indexOf(d);
                if (g != -1) {
                    g += d.length;
                    var e = document.cookie.indexOf(";", g);
                    if (e == -1) {
                        e = document.cookie.length
                    }
                    h = decodeURIComponent(document.cookie.substring(g, e))
                }
            }
            return h
        }, _getVisitn: function () {
            var c = this._getCookie("__mfwvn");
            if (isNaN(c)) {
                c = 0
            }
            return c
        }, _getTimeOnPage: function () {
            var c = this._getCookie("__mfwlt");
            var d = parseInt((+new Date()) / 1000, 10);
            if (isNaN(c)) {
                c = 0
            }
            var e = parseInt(d - c);
            this._setCookie("__mfwlt", d, 24 * 365);
            return e
        }, _getVisitlv: function () {
            var d = this._getCookie("__mfwlv");
            var c = this._getVisitn();
            if (isNaN(d)) {
                d = 0
            }
            if ((+new Date() / 1000) - d > 7200) {
                d = parseInt(+new Date() / 1000, 10);
                c++;
                this._setCookie("__mfwlv", d, 24 * 365);
                this._setCookie("__mfwvn", c, 24 * 365)
            }
            return d
        }, _getPageId: function () {
            window.Env.uPageId = a.generate();
            return window.Env.uPageId
        }, _run: function () {
            var d = this._getParams();
            var c = ("https:" == document.location.protocol ? "https://" : "http://") + "tongji.mafengwo.cn/stat_click.gif";
            mfwSendLog.sendByImg(c, d)
        }, _getParams: function () {
            var q = document, m = window.location, h = parseInt((+new Date()) / 1000, 10);
            var w = "1.1";
            var o = encodeURIComponent(m.host) || "-";
            var g = encodeURIComponent(q.referrer) || "direct";
            var s = encodeURIComponent(q.title);
            var p = this._getWindowSize();
            var n = this._getScreenSize();
            var k = this._getSystemLang();
            var j = this._getRandomInt(32);
            var x = this._getCururl() || "-";
            var c = this._getFlash();
            var v = this._getVisitlv();
            var i = this._getVisitn() || "1";
            var u = this._getChartset();
            var f = this._getTimeOnPage() || "0";
            var e = this._getPageId();
            var r = "t=" + h + "&hn=" + o + "&u=" + x + "&r=" + g + "&lv=" + v + "&vn=" + i + "&ws=" + p + "&sc=" + n + "&sl=" + k + "&fl=" + c + "&cs=" + u + "&dt=" + s + "&sts=" + f + "&pid=" + e + "&ver=" + w + "&rdm=" + j;
            return r
        }
    };
    if (!window.Env.statistics_loaded) {
        b._run();
        window.Env.statistics_loaded = true
    }
})();
(function () {
    var c = {
        events: [],
        opening: parseInt((+new Date()) / 1000, 10),
        scrolls: 0,
        clicks: 0,
        blurTime: 0,
        closing: 0,
        submitted: false
    };
    var b = {track: {focus: true, blur: true, click: true, scroll: true}};

    function d(f) {
        f = f || window.event;
        var e = {};
        e.type = f.type;
        e.timeStamp = parseInt(+new Date());
        c.events.push(e)
    }

    var a = {
        init: function (e) {
            for (var f in b.track) {
                if (b.track[f]) {
                    a.addEvent(window, f, d)
                }
            }
            a.addEvent(window, "beforeunload", a.save);
            a.addEvent(document, "pagehide", a.save);
            a.addEvent(window, "unload", a.save);
            a.addEvent(document, "click", a.saveClickArea)
        }, save: function () {
            if (c.submitted) {
                return
            }
            c.submitted = true;
            c.closing = parseInt((+new Date()) / 1000, 10);
            c.events = a.compress(c.events);
            var g = xstringify, i = encodeURIComponent, h = (new Date()).getTimezoneOffset() / 60, k = c.closing - c.opening, j = k - c.blurTime, e = e || {};
            e = {
                scrolls: c.scrolls,
                clicks: c.clicks,
                opening: c.opening,
                closing: c.closing,
                time_on_page: k,
                time_focus: j,
                tz: h,
                referrer: i(document.referrer) || "direct"
            };
            !!mfwPageEvent && mfwPageEvent("page_behavior", "page_behaviors", e)
        }, compress: function () {
            var g = [], h = 0, e = 0, k = 0;
            for (var f = 0; f < c.events.length; f++) {
                var j = c.events[f];
                if (!j.timeStamp) {
                    return
                }
                if (j.type === "click") {
                    if (j.timeStamp - e > 1000) {
                        g.push(j);
                        c.clicks++
                    }
                    e = j.timeStamp
                } else {
                    if (j.type === "scroll") {
                        if (j.timeStamp - h > 1000) {
                            g.push(j);
                            c.scrolls++
                        }
                        h = j.timeStamp
                    } else {
                        if (j.type === "blur") {
                            if (k === 0) {
                                k = j.timeStamp
                            }
                            g.push(j)
                        } else {
                            if (j.type === "focus") {
                                if (k !== 0) {
                                    c.blurTime += parseInt((j.timeStamp - k) / 1000);
                                    k = 0
                                }
                                g.push(j)
                            }
                        }
                    }
                }
            }
            if (k !== 0) {
                c.blurTime += (c.closing - parseInt(k / 1000))
            }
            return g
        }, addEvent: function (g, e, f) {
            if (document.attachEvent) {
                if (g) {
                    g.attachEvent("on" + e, f)
                } else {
                    window.attachEvent("on" + e, f)
                }
            } else {
                if (document.addEventListener) {
                    if (g) {
                        g.addEventListener(e, f, false)
                    } else {
                        window.addEventListener(e, f, false)
                    }
                }
            }
        }, getClickStat: function (h) {
            var f = $(h);
            var g = f.closest("[data-cs-t]").data("cs-t") || "";
            var i = f.closest("[data-cs-p]").data("cs-p") || "";
            var e = f.closest("[data-cs-l]").data("cs-l") || "";
            var j = f.closest("[data-cs-d]").data("cs-d") || "";
            return {cst: g, csp: i, csl: e, csd: j}
        }, sortEvents: function (f, e) {
            if (!f.timeStamp) {
                return -1
            }
            if (!e.timeStamp) {
                return 1
            }
            if (f.timeStamp < e.timeStamp) {
                return -1
            }
            if (f.timeStamp >= e.timeStamp) {
                return 1
            }
        }, getXpath: function (l) {
            var i = [];
            for (; l && l.nodeType == 1; l = l.parentNode) {
                var g = 0;
                for (var k = l.previousSibling; k; k = k.previousSibling) {
                    if (k.tagName == l.tagName) {
                        ++g
                    }
                }
                var h = l.tagName.toLowerCase();
                var j = (g ? "[" + (g + 1) + "]" : "");
                i.splice(0, 0, h + j)
            }
            return i.length ? "/" + i.join("/") + "/" : null
        }, saveClickArea: function (m) {
            var r, u, s, l, w;
            if (!m) {
                m = window.event
            }
            r = m.srcElement || m.target || null;
            try {
                s = r.tagName.toLowerCase()
            } catch (m) {
                return
            }
            if (s && r.parentNode) {
                l = r.parentNode.tagName.toLowerCase()
            }
            if (l && r.parentNode.parentNode) {
                var k = r.parentNode.parentNode.tagName;
                w = k ? k.toLowerCase() : ""
            }
            var q = 0;
            if ("a" == s || "input" == s || "button" == s || "object" == s || "embed" == s) {
                q = 1
            } else {
                if ("a" == l || "button" == l) {
                    q = 1;
                    r = r.parentNode
                } else {
                    if ("a" == w || "button" == w) {
                        q = 1;
                        r = r.parentNode.parentNode
                    }
                }
            }
            var j = j || {};
            if (q) {
                var p = "", v = "", e = encodeURIComponent;
                p = r.getAttribute("data-href") || r.href || "";
                if ("" == p) {
                    p = r.data
                }
                if ("" == v) {
                    v = r.getAttribute("title") || ""
                }
                var o = e(a.getXpath(r));
                var n = a.getClickStat(r);
                if (!n.csl || n.csl.length === 0) {
                    n.csl = p
                }
                if (!n.csd || n.csd.length === 0) {
                    n.csd = v
                }
                j = {xpath: o, lc: p, text: n.csd ? "" : v, tagname: s || l, referer: e(document.referrer) || "direct"};
                var i = $.extend({}, j, n);
                !!mfwPageEvent && mfwPageEvent("default", "click_area", i)
            }
        }
    };
    a.init()
})();