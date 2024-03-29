/**
 * LICENCIA...: CC BY-NC-ND 4.0 | Atribucion-NoComercial-SinDerivar 4.0 Inter.
 * PROYECTO...: RESIZE SLIDER.
 * FECHA......: V.2.0.0 | 14/02/2015.
 * AUTOR......: Alfonso | www.abravogal.com
 * _____________________________________________________________________________
 *
 * TITULO.....:   PLUGIN RESIZE SLIDER.
 * DESCRIPCION: - Plugin jQuery 2.2.2.
 */

(function (a) {
  a.fn.resizeSlider = function (p) {
    function m() {
      d.css({
        position: "absolute",
        "float": b["float"],
        clear: "both",
        width: "" === b.width ? f.width() : b.width,
        height: "" === b.height ? f.height() : b.height,
        overflow: "hidden",
        backgroundColor: "rgba(252, 254, 255, 1)"
      })
    }

    function n() {
      var h = f.width() > f.height() ? "landscape" : "portrait",
        e = null,
        c = null,
        k = 0,
        l = [];
      m();
      g.empty();
      a.each(b.image, function (a, b) {
        e = "landscape" === h ? b.landscape : b.portrait;
        c = '<div style="';
        c += "background-image:" + e.url + ";";
        c += "background-position:" + e.position + ";";
        c += "background-repeat:" + e.repeat + ";";
        c += "background-size:" + e.size + ";";
        c += '"></div>';
        l[k++] = c
      });
      b.aleatorio && (l = l.sort(function () {
        return Math.random() - .5
      }));
      g.append(l);
      a(".resizeSlider div:gt(0)", d).fadeOut(0);
      a(".resizeSlider, .resizeSlider div").css({
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "rgba(252, 254, 255, 1)"
      })
    }

    function h() {
      k = setInterval(function () {
        a(".resizeSlider div:first-child", d).fadeOut(b.transition).next("div").fadeIn(b.transition).end().appendTo(g)
      }, b.speed)
    }
    var f = {
        width: function () {
          return a(window).outerWidth(!0)
        },
        height: function () {
          return a(window).outerHeight(!0)
        }
      },
      b = a.extend({
        transition: 750,
        speed: 5500,
        hover: !1,
        aleatorio: !1,
        "float": "left",
        width: "",
        height: ""
      }, p),
      d = a(this);
    d.append('<div class="resizeSlider"></div>');
    m();
    var g = a(".resizeSlider", d),
      k = null;
    n();
    d.append('<span class="slidernext notranslate">&#9002;</span> <span class="sliderprev notranslate">&#9001;</span>');
    a(".slidernext, .sliderprev").css({
      position: "absolute",
      zIndex: "50",
      top: "44%",
      padding: "2%",
      cursor: "pointer",
      fontSize: "2em",
      textAlign: "center",
      color: "rgba(232, 234, 235, 1)"
    });
    a(".slidernext").css({
      right: "0px"
    });
    a(".sliderprev").css({
      left: "0px"
    });
    (function () {
      b.hover && (d.append('<div class="sliderumbral"></div>'), a(".sliderumbral", d).on({
        mouseenter: function () {
          clearInterval(k)
        },
        mouseleave: function () {
          h()
        }
      }), a(".sliderumbral").css({
        position: "absolute",
        zIndex: "1",
        top: "0",
        left: "30%",
        width: "40%",
        height: "75%"
      }))
    })();
    h();
    a(window).resize(function () {
      n()
    });
    a(".slidernext,.sliderprev", d).on("click", function () {
      var f = a(this).attr("class").split(" "),
        e = a(".resizeSlider div:first-child", d),
        c = a(".resizeSlider div:last-child", d);
      clearInterval(k);
      switch (f[0]) {
        case "slidernext":
          e.stop().fadeOut(b.transition).next("div").fadeIn(b.transition).end().appendTo(g);
          break;
        case "sliderprev":
          e.stop().fadeOut(b.transition), c.stop().prependTo(g).end().fadeIn(b.transition)
      }
      h()
    });
    return this
  }
})(jQuery);