function updatePositions() {
    var heavyScroll = !!document.querySelector('#heavy-scroll').checked;
    var items = document.querySelectorAll('.mover');
    var cachedScrollTop = document.body.scrollTop;
    for (var i = 0; i < items.length; i++) {
        var phase;
        if (heavyScroll) phase = Math.sin((document.body.scrollTop / 1250) + (i % 5));
        else
            phase = Math.sin((cachedScrollTop / 1250) + (i % 5));
        items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
    }
}

function updatePaintClasses() {
    var heavyPaint = !!document.querySelector('#heavy-paint').checked;
    var items = document.querySelectorAll('.mover');
    for (var i = 0; i < items.length; i++) {
        if (heavyPaint) items[i].classList.add('heavy-painting');
        else
            items[i].classList.remove('heavy-painting');
    }
}
document.querySelector('#heavy-paint').addEventListener('click', updatePaintClasses);
window.addEventListener('scroll', updatePositions);
document.addEventListener('DOMContentLoaded', function() {
    var cols = 8;
    var s = 256;
    for (var i = 0; i < 200; i++) {
        var el = document.createElement('img');
        el.className = 'mover';
        el.src = "images/chrome-logo-med.png";
        el.basicLeft = (i % cols) * s;
        el.style.top = (Math.floor(i / cols) * s) + 'px';
        document.body.appendChild(el);
    }
    updatePaintClasses();
    updatePositions();
}); < /script> < noscript class = "psa_add_styles" > < style > * {
    font - family: sans - serif
}
body {
    height: 5000 px
}#
controls {
    padding: 10 px;position: fixed;top: 15 px;left: 15 px;background - color: rgba(255, 255, 255, .75);border: 1 px solid #000;z-index:1}# controls > * {
        font - size: 150 % ;
        vertical - align: middle
    }.mover {
        position: fixed;width: 256 px
    }.heavy - painting {
        background - image: -webkit - linear - gradient(45 deg, rgba(0, 0, 0, .05) 25 % , transparent 25 % , transparent), -webkit - linear - gradient(-45 deg, rgba(0, 0, 0, .05) 25 % , transparent 25 % , transparent), -webkit - linear - gradient(45 deg, transparent 75 % , rgba(0, 0, 0, .05) 75 % ), -webkit - linear - gradient(-45 deg, transparent 75 % , rgba(0, 0, 0, .05) 75 % );
        background - size: 3 px 3 px;
        box - shadow: 15 px 15 px 15 px; - webkit - box - shadow: 15 px 15 px 15 px
    } < /style></noscript > < script pagespeed_no_defer > (function() {
        function b() {
            var a = window,
                c = e;
            if (a.addEventListener) a.addEventListener("load", c, !1);
            else if (a.attachEvent) a.attachEvent("onload", c);
            else {
                var d = a.onload;
                a.onload = function() {
                    c.call(this);
                    d && d.call(this)
                }
            }
        };
        var f = !1;

        function e() {
            if (!f) {
                f = !0;
                for (var a = document.getElementsByClassName("psa_add_styles"), c = 0, d; d = a[c]; ++c)
                    if ("NOSCRIPT" == d.nodeName) {
                        var k = document.createElement("div");
                        k.innerHTML = d.textContent;
                        document.body.appendChild(k)
                    }
            }
        }

        function g() {
            var a = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
            a ? a(function() {
                window.setTimeout(e, 0)
            }) : b()
        }
        var h = ["pagespeed", "CriticalCssLoader", "Run"],
            l = this;
        h[0] in l || !l.execScript || l.execScript("var " + h[0]);
        for (var m; h.length && (m = h.shift());) h.length || void 0 === g ? l = l[m] ? l[m] : l[m] = {} : l[m] = g;
    })();
    pagespeed.CriticalCssLoader.Run(); < /script><script pagespeed_no_defer>(function(){window.pagespeed=window.pagespeed||{};var l=window.pagespeed;
    l.getResourceTimingData = function() {
        if (window.performance && (window.performance.getEntries || window.performance.webkitGetEntries)) {
            for (var m = 0, n = 0, e = 0, p = 0, f = 0, q = 0, g = 0, r = 0, h = 0, t = 0, k = 0, c = {}, d = window.performance.getEntries ? window.performance.getEntries() : window.performance.webkitGetEntries(), b = 0; b < d.length; b++) {
                var a = d[b].duration;
                0 < a && (m += a, ++e, n = Math.max(n, a));
                a = d[b].connectEnd - d[b].connectStart;
                0 < a && (q += a, ++g);
                a = d[b].domainLookupEnd - d[b].domainLookupStart;
                0 < a && (p += a, ++f);
                a = d[b].initiatorType;
                c[a] ? ++c[a] :
                    c[a] = 1;
                a = d[b].requestStart - d[b].fetchStart;
                0 < a && (t += a, ++k);
                a = d[b].responseStart - d[b].requestStart;
                0 < a && (r += a, ++h)
            }
            return "&afd=" + (e ? Math.round(m / e) : 0) + "&nfd=" + e + "&mfd=" + Math.round(n) + "&act=" + (g ? Math.round(q / g) : 0) + "&nct=" + g + "&adt=" + (f ? Math.round(p / f) : 0) + "&ndt=" + f + "&abt=" + (k ? Math.round(t / k) : 0) + "&nbt=" + k + "&attfb=" + (h ? Math.round(r / h) : 0) + "&nttfb=" + h + (c.css ? "&rit_css=" + c.css : "") + (c.link ? "&rit_link=" + c.link : "") + (c.script ? "&rit_script=" + c.script : "") + (c.img ? "&rit_img=" + c.img : "")
        }
        return ""
    };
    l.getResourceTimingData = l.getResourceTimingData;
})();
(function() {
    window.pagespeed = window.pagespeed || {};
    var e = window.pagespeed;

    function g(a, c, b, d) {
        this.f = a;
        this.a = c;
        this.b = b;
        this.g = d
    }
    e.beaconUrl = "";
    g.prototype.sendBeacon = function() {
        var a = this.f,
            c = window.mod_pagespeed_start,
            b = Number(new Date) - c,
            a = a + (-1 == a.indexOf("?") ? "?" : "&"),
            a = a + "ets=" + ("load" == this.a ? "load:" : "unload:"),
            a = a + b;
        if ("beforeunload" != this.a || !window.mod_pagespeed_loaded) {
            a += "&r" + this.a + "=";
            if (window.performance) {
                var b = window.performance.timing,
                    d = b.navigationStart,
                    f = b.requestStart,
                    a = a + (b[this.a + "EventStart"] - d),
                    a = a + ("&nav=" + (b.fetchStart - d)),
                    a = a + ("&dns=" + (b.domainLookupEnd - b.domainLookupStart)),
                    a = a + ("&connect=" + (b.connectEnd - b.connectStart)),
                    a = a + ("&req_start=" + (f - d)),
                    a = a + ("&ttfb=" + (b.responseStart - f)),
                    a = a + ("&dwld=" + (b.responseEnd - b.responseStart)),
                    a = a + ("&dom_c=" + (b.domContentLoadedEventStart - d));
                window.performance.navigation && (a += "&nt=" + window.performance.navigation.type);
                d = -1;
                b.msFirstPaint ? d = b.msFirstPaint : window.chrome && window.chrome.loadTimes && (d = Math.floor(1E3 * window.chrome.loadTimes().firstPaintTime));
                d -= f;
                0 <= d && (a += "&fp=" + d)
            } else a += b;
            e.getResourceTimingData && window.parent == window && (a += e.getResourceTimingData());
            a += window.parent !=
                window ? "&ifr=1" : "&ifr=0";
            "load" == this.a && (window.mod_pagespeed_loaded = !0, (b = window.mod_pagespeed_num_resources_prefetched) && (a += "&nrp=" + b), (b = window.mod_pagespeed_prefetch_start) && (a += "&htmlAt=" + (c - b)));
            e.panelLoader && (c = e.panelLoader.getCsiTimingsString(), "" != c && (a += "&b_csi=" + c));
            e.criticalCss && (c = e.criticalCss, a += "&ccis=" + c.total_critical_inlined_size + "&cces=" + c.total_original_external_size + "&ccos=" + c.total_overhead_size + "&ccrl=" + c.num_replaced_links + "&ccul=" + c.num_unreplaced_links);
            a += "&dpr=" +
                window.devicePixelRatio;
            "" != this.b && (a += this.b);
            document.referrer && (a += "&ref=" + encodeURIComponent(document.referrer));
            a += "&url=" + encodeURIComponent(this.g);
            e.beaconUrl = a;
            (new Image).src = a
        }
    };
    e.c = function(a, c, b, d) {
        var f = new g(a, c, b, d);
        window.addEventListener ? window.addEventListener(c, function() {
            f.sendBeacon()
        }, !1) : window.attachEvent("on" + c, function() {
            f.sendBeacon()
        })
    };
    e.addInstrumentationInit = e.c;
})();

pagespeed.addInstrumentationInit('https://1-ps.googleusercontent.com/beacon?org=148_1_vf', 'load', '&id=1437453086733167', 'https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html');