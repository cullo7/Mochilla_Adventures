! function e(t, n, i) {
    function o(r, s) {
        if (!n[r]) {
            if (!t[r]) {
                var l = "function" == typeof require && require;
                if (!s && l) return l(r, !0);
                if (a) return a(r, !0);
                var c = new Error("Cannot find module '" + r + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var d = n[r] = {
                exports: {}
            };
            t[r][0].call(d.exports, function(e) {
                var n = t[r][1][e];
                return o(n ? n : e)
            }, d, d.exports, e, t, n, i)
        }
        return n[r].exports
    }
    for (var a = "function" == typeof require && require, r = 0; r < i.length; r++) o(i[r]);
    return o
}({
    1: [function(e, t, n) {
        window.px = function() {
            window.skel = skel, 
            window.$ = window.jQuery = jQuery, 
            // e("jquery.touch"), 
            // e("jquery.scrollbarify"),
            // window.web = e("web"),
            // e("web_component"),
            $.fn.navList = function() {
                    var e = $(this);
                    return $a = e.find("a"), b = [], $a.each(function() {
                        var e = $(this),
                            t = Math.max(0, e.parents("li").length - 1),
                            n = e.attr("href"),
                            i = e.attr("target");
                        b.push('<a class="link depth-' + t + '"' + ("undefined" != typeof i && "" != i ? ' target="' + i + '"' : "") + ("undefined" != typeof n && "" != n ? ' href="' + n + '"' : "") + '><span class="indent-' + t + '"></span>' + e.text() + "</a>")
                    }), b.join("")
                }, $.fn.panel = function(e) {
                    if (0 == this.length) return i;
                    if (this.length > 1) {
                        for (var t = 0; t < this.length; t++) $(this[t]).panel(e);
                        return i
                    }
                    var n, i = $(this),
                        o = $("body"),
                        a = $(window),
                        r = i.attr("id");
                    return n = $.extend({
                        delay: 0,
                        hideOnClick: !1,
                        hideOnEscape: !1,
                        hideOnSwipe: !1,
                        resetScroll: !1,
                        resetForms: !1,
                        side: null,
                        target: i,
                        visibleClass: "visible"
                    }, e), "jQuery" != typeof n.target && (n.target = $(n.target)), i._hide = function(e) {
                        n.target.hasClass(n.visibleClass) && (e && (e.preventDefault(), e.stopPropagation()), n.target.removeClass(n.visibleClass), window.setTimeout(function() {
                            n.resetScroll && i.scrollTop(0), n.resetForms && i.find("form").each(function() {
                                this.reset()
                            })
                        }, n.delay))
                    }, i.css("-ms-overflow-style", "-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling", "touch"), n.hideOnClick && (i.find("a").css("-webkit-tap-highlight-color", "rgba(0,0,0,0)"), i.on("click", "a", function(e) {
                        var t = $(this),
                            o = t.attr("href"),
                            a = t.attr("target");
                        o && "#" != o && "" != o && o != "#" + r && (e.preventDefault(), e.stopPropagation(), i._hide(), window.setTimeout(function() {
                            "_blank" == a ? window.open(o) : window.location.href = o
                        }, n.delay + 10))
                    })), i.on("touchstart", function(e) {
                        i.touchPosX = e.originalEvent.touches[0].pageX, i.touchPosY = e.originalEvent.touches[0].pageY
                    }), i.on("touchmove", function(e) {
                        if (null !== i.touchPosX && null !== i.touchPosY) {
                            var t = i.touchPosX - e.originalEvent.touches[0].pageX,
                                o = i.touchPosY - e.originalEvent.touches[0].pageY,
                                a = i.outerHeight(),
                                r = i.get(0).scrollHeight - i.scrollTop();
                            if (n.hideOnSwipe) {
                                var s = !1,
                                    l = 20,
                                    c = 50;
                                switch (n.side) {
                                    case "left":
                                        s = o < l && o > -1 * l && t > c;
                                        break;
                                    case "right":
                                        s = o < l && o > -1 * l && t < -1 * c;
                                        break;
                                    case "top":
                                        s = t < l && t > -1 * l && o > c;
                                        break;
                                    case "bottom":
                                        s = t < l && t > -1 * l && o < -1 * c
                                }
                                if (s) return i.touchPosX = null, i.touchPosY = null, i._hide(), !1
                            }(i.scrollTop() < 0 && o < 0 || r > a - 2 && r < a + 2 && o > 0) && (e.preventDefault(), e.stopPropagation())
                        }
                    }), i.on("click touchend touchstart touchmove", function(e) {
                        e.stopPropagation()
                    }), i.on("click", 'a[href="#' + r + '"]', function(e) {
                        e.preventDefault(), e.stopPropagation(), n.target.removeClass(n.visibleClass)
                    }), o.on("click touchend", function(e) {
                        i._hide(e)
                    }), o.on("click", 'a[href="#' + r + '"]', function(e) {
                        e.preventDefault(), e.stopPropagation(), n.target.toggleClass(n.visibleClass)
                    }), n.hideOnEscape && a.on("keydown", function(e) {
                        27 == e.keyCode && i._hide(e)
                    }), i
                },
                function(e) {
                    var t = "click.scrolly";
                    e.fn.scrolly = function(n, i) {
                        n || (n = 1e3), i || (i = 0), e(this).off(t).on(t, function(t) {
                            var o, a, r, s = e(this),
                                l = s.attr("href");
                            "#" == l.charAt(0) && l.length > 1 && (o = e(l)).length > 0 && (a = o.offset().top, s.hasClass("scrolly-centered") ? r = a - (e(window).height() - o.outerHeight()) / 2 : (r = Math.max(a, 0), i && (r -= "function" == typeof i ? i() : i)), t.preventDefault(), e("body,html").stop().animate({
                                scrollTop: r
                            }, n, "swing"))
                        })
                    }
                }(jQuery);
            var t = {
                obj: {
                    $window: null,
                    $body: null,
                    $header: null,
                    $banner: null,
                    $nav: null,
                    $main: null,
                    $main_inner: null,
                    $modals: {}
                },
                domain: "pixelarity.com",
                pageId: null,
                client: {
                    loggedIn: !1,
                    subscribed: !1,
                    subscription: {
                        timestamp: 0,
                        string: ""
                    }
                },
                stripeInitForm: function(e) {
                    var t = e.find(".cards li"),
                        n = [],
                        i = "Unknown";
                    t.each(function() {
                        var e = $(this);
                        n[e.text()] = e
                    }), $("#cc_number").on("keyup change", function() {
                        var e = $(this).val(),
                            o = Stripe.cardType(e);
                        i != o && (i = o, t.removeClass("active"), n.hasOwnProperty(o) && n[o].addClass("active"))
                    }).trigger("change"), e.on("beforeSubmit", function(t) {
                        var n = web.fieldValue(e, "paymentMethodId");
                        if (2 == n) return Stripe.card.createToken({
                            name: web.fieldValue(e, "#cc_name"),
                            address_line1: web.fieldValue(e, "#cc_address_line1"),
                            adderss_line2: web.fieldValue(e, "#cc_address_line2"),
                            address_city: web.fieldValue(e, "#cc_address_city"),
                            address_state: web.fieldValue(e, "#cc_address_state"),
                            address_zip: web.fieldValue(e, "#cc_address_zip"),
                            address_country: web.fieldValue(e, "#cc_address_country"),
                            number: web.fieldValue(e, "#cc_number"),
                            cvc: web.fieldValue(e, "#cc_cvc"),
                            exp_month: web.fieldValue(e, "#cc_exp_month"),
                            exp_year: web.fieldValue(e, "#cc_exp_year")
                        }, function(t, n) {
                            web.fieldValue(e, "cc_error", ""), web.fieldValue(e, "cc_token", ""), n.error ? web.fieldValue(e, "cc_error", n.error.message) : web.fieldValue(e, "cc_token", n.id), e.trigger("submit", !0)
                        }), !1
                    })
                },
                iframeLocation: function(e, t) {
                    var n, i, o;
                    return n = $("#" + e), 0 != n.length && (i = n.get(0), o = i.contentWindow.location.href ? i.contentWindow.location.href.toString().match(/\/\/[^\/]+(\/[^\.]+)\//)[1] : "", i.contentWindow.location.replace(o + "/" + t), !0)
                },
                cookie: function(e, t, n, i) {
                    if ("" === t) return i || (i = "/"), document.cookie = e + "=; expires=Thu, 1 Jan 1970 12:00:00 UTC; path=" + i, null;
                    if (t) {
                        var o, a;
                        return n || (n = 0), o = new Date, o.setTime(o.getTime() + n), a = o.toGMTString(), i || (i = "/"), document.cookie = e + "=" + t + "; expires=" + a + "; path=" + i, t
                    }
                    var r, l = document.cookie.split(";");
                    for (s in l)
                        if (r = l[s].split("="), r[0].trim() == e) return unescape(r[1]);
                    return null
                },
                time: function() {
                    return Math.round((new Date).getTime() / 1e3)
                },
                b64e: function(e) {
                    return window.btoa(e)
                },
                b64d: function(e) {
                    return window.atob(e)
                },
                initClient: function() {
                    if (t.client.loggedIn = null !== t.cookie("awz"), t.client.loggedIn) {
                        var e, n;
                        (e = t.b64d(t.cookie("awx"))) && (n = e.split("|"), "*" == n[0] && (n[0] = t.time().toString(), e = n.join("|"), t.cookie("awx", t.b64e(e), parseInt(n[0]) + parseInt(n[1]) + 86400)), t.client.subscription.timestamp = parseInt(n[0]) + parseInt(n[1]), t.client.subscription.string = n[2], t.client.subscribed = t.client.subscription.timestamp > t.time())
                    }
                },
                initModal: function(e) {
                    var n, i, o = $("#" + e);
                    o.wrapInner("<section />"), n = o.children("section"), n.on("click", function(e) {
                        e.stopPropagation()
                    }), i = $('<div class="closer"></div>'), i.appendTo(n).on("click", function() {
                        return o._hide(), !1
                    }), o._show = function() {
                        o.fadeIn("fast")
                    }, o._hide = function() {
                        o.fadeOut("fast")
                    }, o.hide().appendTo(t.obj.$body).on("click", function() {
                        return o._hide(), !1
                    }), t.obj.$modals[e] = o
                },
                initPage: function() {
                    switch (t.pageId = t.obj.$body.attr("class").split(" ")[0].split("-")[1], skel.vars.mobile && t.obj.$body.addClass("is-mobile"), "ie" == skel.vars.browser && t.obj.$body.addClass("is-ie"), $(".scrolly").scrolly(), $("a.offsite").attr("target", "_blank"), $(".button.go-back").on("click", function() {
                        return history.back(), !1
                    }), $(".select-on-focus").on("click", function() {
                        $(this).select()
                    }), window.location.hash && t.obj.$window.on("load.hash", function() {
                        window.setTimeout(function() {
                            t.obj.$window.scrollTop($(window.location.hash).offset().top - 75)
                        }, 0), t.obj.$window.off("load.hash")
                    }), $(".tooltip").each(function() {
                        var e, n = $(this),
                            i = n.attr("title");
                        if (i) n.prepend('<div class="content">' + i + "</div>"), n.removeAttr("title");
                        else if (0 == n.children(".content").length) return;
                        e = n.children(".content"), n._reposition = function() {
                            n.hasClass("active") && (skel.breakpoint("xxsmall").active ? e.css("width", t.obj.$window.width()).css("margin-left", 0).css("left", -1 * n.offset().left) : e.css("width", "auto").css("margin-left", e.outerWidth() / -2).css("left", "50%"))
                        }, skel.vars.touch ? n.on("click", function(e) {
                            return n.toggleClass("active"), n._reposition(), !1
                        }) : n.on("mouseenter", function() {
                            n.addClass("active"), n._reposition()
                        }).on("mouseleave", function() {
                            n.removeClass("active")
                        }), t.obj.$window.on("resize", function() {
                            n.removeClass("active")
                        })
                    }), function() {
                        var e, t = $(window),
                            n = [],
                            i = 0,
                            o = skel.vars.touch ? -750 : -250,
                            a = function() {
                                var e, i, a = n.length,
                                    r = t.scrollTop() + t.height() - o;
                                for (e = 0; e < a; e++) i = n[e], !i.state && r > i.o.offset().top && (i.state = !0, i.fn())
                            };
                        t.on("load", function() {
                            t.on("scroll resize", function() {
                                window.clearTimeout(e), e = window.setTimeout(function() {
                                    a()
                                }, i)
                            }).trigger("resize")
                        }), $.fn.onVisible = function(e, t) {
                            n.push({
                                o: $(this),
                                fn: e,
                                pad: t ? t : o,
                                state: !1
                            })
                        }
                    }(), "wp" == skel.vars.os ? $(".image.lazy").each(function() {
                        var e = $(this);
                        $p = e.children(".placeholder"), src = $p.data("src"), $p.attr("src", src), e.addClass("is-cached")
                    }) : $(".image.lazy").each(function() {
                        var e = $(this),
                            t = e.children(".placeholder"),
                            n = $('<img src="" class="placeholder" alt="" />'),
                            i = t.data("src"),
                            o = "chrome" == skel.vars.browser ? 30 : 0;
                        e.onVisible(function() {
                            t.remove(), n.appendTo(e).attr("src", i), window.setTimeout(function() {
                                n.get(0).complete ? e.addClass("is-cached") : n.on("load", function() {
                                    e.addClass("is-loaded")
                                })
                            }, o)
                        })
                    }),
                    t.client.loggedIn ? (t.obj.$body.addClass("is-loggedIn"),
                    t.obj.$nav.html('<a href="/">Browse</a><a href="/help">Help</a><a href="/account">My Account</a><a href="/account/logout">Log Out</a>')) : t.obj.$body.addClass("is-loggedOut"),
                    $('<div id="menu">' + t.obj.$nav.navList() + "</div>").appendTo(t.obj.$body).panel({
                        top: 0,
                        target: t.obj.$body,
                        visibleClass: "is-menu-visible",
                        hideOnClick: !0,
                        delay: 500
                    }), t.pageId) {
                        case "landing":
                            ! function() {
                                if (!t.client.loggedIn) {
                                    (!skel.vars.mobile || !skel.breakpoint("xsmall").active) && t.obj.$header.hasClass("alt") && t.obj.$banner.length > 0 && t.obj.$window.on("load", function() {
                                        ! function() {
                                            var e = "scrollwatch",
                                                t = "length",
                                                n = null,
                                                i = "top",
                                                o = "rangeMin",
                                                a = "rangeMax",
                                                r = "scrollgress",
                                                s = "data",
                                                l = "scrollwatch-state",
                                                c = !1,
                                                d = "anchor",
                                                u = "unscrollwatch",
                                                f = "unscrollgress",
                                                h = "removeData",
                                                p = "element",
                                                b = "-id",
                                                g = "scroll.",
                                                v = "height",
                                                m = "scrollTop",
                                                w = "center",
                                                y = "bottom",
                                                k = $(window),
                                                C = $(document),
                                                j = 1e3;
                                            $.fn[e] = function(u) {
                                                var f, h, p, b, g;
                                                if (this[t] > 1) {
                                                    for (f = 0; f < this[t]; f++) $(this[f])[e](u);
                                                    return this
                                                }
                                                return h = $.extend({
                                                    range: .5,
                                                    rangeMin: n,
                                                    rangeMax: n,
                                                    anchor: i,
                                                    init: n,
                                                    on: n,
                                                    off: n,
                                                    delay: 0
                                                }, u), h[o] === n && (h[o] = -1 * h.range), h[a] === n && (h[a] = h.range), p = $(this), h.init && (g = h.init), p[s](l, -1)[r](function(e) {
                                                    window.clearTimeout(b), b = window.setTimeout(function() {
                                                        var t, i, r = parseInt(p[s](l));
                                                        return (0 == r || r == -1) && (t = h[o] === c || e >= h[o], i = h[a] === c || e <= h[a], t && i) ? (p[s](l, 1), h.on && h.on(p), g && (g(p, !0), g = n), void 0) : (1 == r || r == -1) && (t = h[o] !== c && e < h[o], i = h[a] !== c && e > h[a], t || i) ? (p[s](l, 0), h.off && h.off(p), g && (g(p, c), g = n), void 0) : void 0
                                                    }, g ? 0 : h.delay)
                                                }, {
                                                    anchor: h[d]
                                                }, e), p
                                            }, $.fn[u] = function() {
                                                var n, i;
                                                if (this[t] > 1) {
                                                    for (n = 0; n < this[t]; n++) $(this[n])[u]();
                                                    return this
                                                }
                                                return i = $(this), i[h](l, 0)[f](e), i
                                            }, $.fn[r] = function(e, n, o) {
                                                var a, l, c, u, f;
                                                if (0 == this[t]) return $(this);
                                                if (this[t] > 1) {
                                                    for (a = 0; a < this[t]; a++) $(this[a])[r](e, n, o);
                                                    return $(this)
                                                }
                                                return o || (o = r), l = $.extend({
                                                    anchor: i,
                                                    direction: "both",
                                                    scope: p,
                                                    easing: 0
                                                }, n), c = $(this), c[s](o + b) || c[s](o + b, j++), u = c[s](o + b), f = g + o + "-" + u, k.off(f).on(f, function() {
                                                    var t, n = c.offset()[i],
                                                        o = c.outerHeight();
                                                    C[v]();
                                                    switch (l.scope) {
                                                        default:
                                                            case p:
                                                            switch (l[d]) {
                                                            default:
                                                                case i:
                                                                t = (n - k[m]()) / o * -1;
                                                            break;
                                                            case w:
                                                                    t = (n - k[m]() - (k[v]() - o) / 2) / o * -1;
                                                                break;
                                                            case y:
                                                                    t = (n - k[m]() - (k[v]() - o)) / o * -1
                                                        }
                                                        break;
                                                        case "window":
                                                                switch (l[d]) {
                                                                default:
                                                                    case i:
                                                                    t = (n - k[m]()) / k[v]() * -1;
                                                                break;
                                                                case w:
                                                                        t = (n - k[m]() - (k[v]() - o) / 2) / k[v]() * -1;
                                                                    break;
                                                                case y:
                                                                        t = (n - k[m]() - (k[v]() - o)) / k[v]() * -1
                                                            }
                                                    }
                                                    "forwards" == l.direction ? t = Math.max(0, t) : "backwards" == l.direction && (t = Math.min(0, t)), t > 0 ? t = Math.max(0, t - l.easing / 100) : t < 0 && (t = Math.min(0, t + l.easing / 100)), e(t, c)
                                                }).trigger("scroll"), c
                                            }, $.fn[f] = function(e) {
                                                var n, i, o, a;
                                                if (0 == this[t]) return $(this);
                                                if (this[t] > 1) {
                                                    for (n = 0; n < this[t]; n++) $(this[n])[f](e);
                                                    return $(this)
                                                }
                                                return e || (e = r), i = $(this), i[s](e + b) ? (o = i[s](e + b), a = g + e + "-" + o, k.off(a), i[h](e + b), i) : i
                                            }
                                        }(), t.obj.$banner.scrollwatch({
                                            delay: 0,
                                            range: .9,
                                            anchor: "top",
                                            init: function() {
                                                t.obj.$header.removeClass("reveal")
                                            },
                                            on: function() {
                                                t.obj.$header.addClass("alt"), t.obj.$header.removeClass("reveal")
                                            },
                                            off: function() {
                                                t.obj.$header.removeClass("alt"), t.obj.$header.addClass("reveal")
                                            }
                                        })
                                    });
                                    var e, n, i;
                                    (e = t.b64d(t.cookie("awi"))) && (n = e.split("|"), 2 == n.length && (i = parseInt(n[0])) > 0 && i < 100 && ($(".base-price").each(function() {
                                        var e = $(this),
                                            t = parseInt(e.data("price")),
                                            n = t - Math.ceil(t * (i / 100));
                                        e.html('<span class="original">$' + t + "</span> $" + n + "<sup>*</sup>")
                                    }), $("#pricing").children().first().after('<p class="notice">* ' + n[1] + "</p>")))
                                }
                            }();
                            break;
                        case "item":
                            ! function() {
                                var e, n, i, o, a = !1,
                                    r = function() {
                                        return !a && (a = !0, !0)
                                    },
                                    s = function() {
                                        return a = !1, !0
                                    },
                                    l = function(t, o) {
                                        var a = _item.baseUrl + e + "/" + n + ".html";
                                        d.hasClass(i) || (d.removeClass("desktop").removeClass("mobile-portrait").removeClass("mobile-landscape").removeClass("tablet-portrait").removeClass("tablet-landscape"), d.addClass(i)), f[0].contentWindow.location.pathname == a && o !== !0 || f[0].contentWindow.location.replace(a), setTimeout(function() {
                                            s()
                                        }, "undefined" == typeof t ? 100 : t)
                                    },
                                    c = function() {
                                        window.open(f[0].contentWindow.location.pathname)
                                    };
                                if (t.obj.$window.on("resize", function() {
                                        h.triggerHandler("resize.scrollbarify"), t.obj.$body.addClass("is-resizing"), clearTimeout(o), o = setTimeout(function() {
                                            t.obj.$body.removeClass("is-resizing")
                                        }, 100)
                                    }), skel.vars.mobile) t.obj.$body.addClass("is-frame-loading"), t.obj.$window.on("load", function() {
                                    setTimeout(function() {
                                        t.obj.$body.removeClass("is-frame-loading")
                                    }, 125)
                                });
                                else {
                                    var d = $("#viewer"),
                                        u = d.children(".frame"),
                                        f = $("<iframe />").appendTo(u);
                                    t.obj.$body.addClass("is-frame-loading"), f.on("load", function() {
                                        var e = f[0].contentWindow;
                                        setTimeout(function() {
                                            t.obj.$body.removeClass("is-frame-loading")
                                        }, 125), e._pxOpen = function(t) {
                                            var i = t.split(".")[0],
                                                o = k.filter('[data-name="' + i + '"]');
                                            console.log('o', o);
                                            o.length > 0 ? o.triggerHandler("click") : (k.removeClass("active"), n = i, e.location.replace(t))
                                        }, f.contents().find("a").each(function() {
                                            var e = $(this),
                                                t = e.attr("href");
                                            1 != e.data("pxFixed") && "undefined" != typeof t && ("#" == t ? e.removeAttr("href").css("cursor", "pointer") : t.match(/html$/) && e.attr("href", "javascript:window._pxOpen('" + t + "');"), e.data("pxFixed", 1))
                                        })
                                    })
                                }
                                var h = $("#details");
                                if (t.obj.$body.on("mousewheel DOMMouseScroll", "#details > .scrollbarify-content", function(e) {
                                        var t = $(this),
                                            n = e.originalEvent,
                                            i = n.detail ? n.detail * -5 : n.wheelDelta;
                                        e.preventDefault(), e.stopPropagation(), t.scrollTop(t.scrollTop() - i)
                                    }), skel.vars.mobile || h.scrollbarify(), !skel.vars.mobile) {
                                    var p = $('<div class="actions"><div class="toggle" title="Toggle sidebar"></div><div class="popout" title="Open in new tab"></div><div class="reload" title="Reload demo"></div></div>').prependTo(h),
                                        b = p.find(".toggle"),
                                        g = p.find(".popout"),
                                        v = p.find(".reload");
                                    b.on("click", function() {
                                        r() && (t.obj.$body.addClass("is-changing"), setTimeout(function() {
                                            t.obj.$body.toggleClass("is-minimized"), setTimeout(function() {
                                                h.triggerHandler("resize.scrollbarify"), t.obj.$body.removeClass("is-changing"), s()
                                            }, 500)
                                        }, 125))
                                    }), g.on("click", function() {
                                        c()
                                    }), v.on("click", function() {
                                        r() && l(0, !0)
                                    })
                                }
                                if (!skel.vars.mobile) {
                                    var m = h.find(".schemes"),
                                        w = m.children("li");
                                    w.each(function() {
                                        var t = $(this),
                                            n = t.data("name");
                                        0 == t.index() && (t.addClass("active"), e = n), t.on("click", function() {
                                            e != n && r() && (e = n, w.removeClass("active"), t.addClass("active"), l())
                                        })
                                    })
                                }
                                if (!skel.vars.mobile) {
                                    var y = h.find(".layouts"),
                                        k = y.children("li");
                                    k.each(function() {
                                        var e = $(this),
                                            t = e.data("name");
                                        0 == e.index() && (e.addClass("active"), n = t), e.on("click", function() {
                                            n != t && r() && (n = t, k.removeClass("active"), e.addClass("active"), l())
                                        })
                                    })
                                }
                                if (!skel.vars.mobile) {
                                    var C = h.find(".sizes"),
                                        j = C.children("li");
                                    j.each(function() {
                                        var e = $(this),
                                            t = e.data("name");
                                        0 == e.index() && (e.addClass("active"), i = t), e.on("click", function() {
                                            i != t && r() && (i = t, j.removeClass("active"), e.addClass("active"), l(750))
                                        })
                                    })
                                }
                                var x, _ = h.find(".downloads"),
                                    T = _.find(".versions"),
                                    I = T.children("li"),
                                    P = h.find(".message");
                                switch (I.each(function() {
                                    var e = $(this),
                                        t = e.find("[data-action]");
                                    t.each(function() {
                                        var t = $(this),
                                            n = t.data("action");
                                        switch (n) {
                                            case "toggle-description":
                                                var i = e.find(".description"),
                                                    o = !1;
                                                t.on("click", function() {
                                                    return !o && (o = !0, t.toggleClass("active"), i.toggleClass("active"), void setTimeout(function() {
                                                        h.triggerHandler("resize.scrollbarify"), o = !1
                                                    }, 150))
                                                })
                                        }
                                    })
                                }), x = t.client.loggedIn ? t.client.subscribed ? "subscribed" : "expired" : "guest") {
                                    case "subscribed":
                                        P.html("Subscribed until " + t.client.subscription.string + ' (<a href="/account">My Account</a>)'), I.each(function() {
                                            var e = $(this),
                                                t = e.find(".button"),
                                                n = e.find(".description"),
                                                i = e.find('[data-action="toggle-description"]'),
                                                o = e.data("name");
                                            n.removeClass("active"), i.removeClass("active"), h.triggerHandler("resize.scrollbarify"), t.attr("href", _item.id + "/download/" + o).text("Download")
                                        });
                                        break;
                                    case "expired":
                                        P.html('Access plan inactive :( Please <a href="/account/renew">renew</a> to instantly download this template.'), I.each(function() {
                                            var e = $(this),
                                                t = e.find(".button");
                                            e.data("name");
                                            t.removeAttr("href").text("Download").addClass("disabled")
                                        });
                                        break;
                                    case "guest":
                                }
                                l()
                            }()
                    }
                },
                initPolyfills: function() {
                    String.prototype.trim || (String.prototype.trim = function() {
                        return this.replace(/^\s+|\s+$/g, "")
                    }), ! function() {
                        function e(e) {
                            this.message = e
                        }
                        var t = "undefined" != typeof n ? n : this,
                            i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        e.prototype = new Error, e.prototype.name = "InvalidCharacterError", t.btoa || (t.btoa = function(t) {
                            for (var n, o, a = String(t), r = 0, s = i, l = ""; a.charAt(0 | r) || (s = "=", r % 1); l += s.charAt(63 & n >> 8 - r % 1 * 8)) {
                                if (o = a.charCodeAt(r += .75), o > 255) throw new e("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                                n = n << 8 | o
                            }
                            return l
                        }), t.atob || (t.atob = function(t) {
                            var n = String(t).replace(/=+$/, "");
                            if (n.length % 4 == 1) throw new e("'atob' failed: The string to be decoded is not correctly encoded.");
                            for (var o, a, r = 0, s = 0, l = ""; a = n.charAt(s++); ~a && (o = r % 4 ? 64 * o + a : a, r++ % 4) ? l += String.fromCharCode(255 & o >> (-2 * r & 6)) : 0) a = i.indexOf(a);
                            return l
                        })
                    }()
                },
                initObj: function() {
                    t.obj.$window = $(window), t.obj.$body = $("body"), t.obj.$header = $("#header"), t.obj.$banner = $("#banner"), t.obj.$nav = $("#nav"), t.obj.$main = $("#main"), t.obj.$main_inner = $("#main > .inner")
                },
                initSkel: function() {
                    skel.breakpoints({
                        xlarge: "(max-width: 1680px)",
                        large: "(max-width: 1340px)",
                        medium: "(max-width: 980px)",
                        small: "(max-width: 840px)",
                        xsmall: "(max-width: 736px)",
                        xxsmall: "(max-width: 480px)"
                    })
                },
                init: function() {
                    t.initPolyfills(), t.initClient(), t.initSkel(), t.client.loggedIn && $("head").append("<style>.page-landing #banner,.page-landing #pricing{display:none!important}</style>"), $(function() {
                        t.initObj(), t.obj.$body.addClass("is-loading"), t.obj.$window.on("load", function() {
                            t.obj.$body.removeClass("is-loading")
                        }), t.initPage()
                    })
                }
            };
            return t
        }(), px.init()
    }, {
        jquery: "jquery",
        "jquery.scrollbarify": "jquery.scrollbarify",
        "jquery.touch": "jquery.touch",
        skel: "skel",
        web: "web",
        web_component: "web_component"
    }]
}, {}, [1]);
