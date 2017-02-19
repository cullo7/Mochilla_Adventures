/*
const menu = document.getElementById('open-menu');
const body = document.getElementById('top');
menu.onclick = (el) => {
  if (body.className.startsWith("is-menu-visible")) {
    body.className = "";
  } else {
    body.className = "is-menu-visible";
  }
}
*/

(function($) {
    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });
    // TODO turned off parallax effect here:w
    /* 
    $.fn._parallax = (skel.vars.browser == 'ie' || skel.vars.mobile) ? function() {
        return $(this)
    } : function(intensity) {
        var $window = $(window),
            $this = $(this);
        if (this.length == 0 || intensity === 0) return $this;
        if (this.length > 1) {
            for (var i = 0; i < this.length; i++) $(this[i])._parallax(intensity);
            return $this;
        }
        if (!intensity) intensity = 0.25;
        $this.each(function() {
            var $t = $(this),
                on, off;
            on = function() {
                $t.css('background-position', 'center 110px');
                $window.on('scroll._parallax', function() {
                    var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);
                    $t.css('background-position', 'center ' + (pos * (-1 * intensity)) + 'px');
                });
            };
            off = function() {
                $t.css('background-position', '');
                $window.off('scroll._parallax');
            };
            skel.on('change', function() {
                if (skel.breakpoint('medium').active)(off)();
                else(on)();
            });
        });
        $window.off('load._parallax resize._parallax').on('load._parallax resize._parallax', function() {
            $window.trigger('scroll');
        });
        return $(this);
    };
    */
    $(function() {
        var $window = $(window),
            $body = $('body');
        $body.addClass('is-loading');
        $window.on('load', function() {
            window.setTimeout(function() {
                $body.removeClass('is-loading');
            }, 100);
        });
        $('form').placeholder();
        skel.on('+medium -medium', function() {
            $.prioritize('.important\\28 medium\\29', skel.breakpoint('medium').active);
        });
        $body._parallax(-0.7);
        var $menu = $('#menu');
        $menu._locked = false;
        $menu._lock = function() {
            if ($menu._locked) return false;
            $menu._locked = true;
            window.setTimeout(function() {
                $menu._locked = false;
            }, 350);
            return true;
        };
        $menu._show = function() {
            if ($menu._lock()) $body.addClass('is-menu-visible');
        };
        $menu._hide = function() {
            if ($menu._lock()) $body.removeClass('is-menu-visible');
        };
        $menu._toggle = function() {
            if ($menu._lock()) $body.toggleClass('is-menu-visible');
        };
        $menu.appendTo($body).on('click', function(event) {
            event.stopPropagation();
            $menu._hide();
        }).find('.inner').on('click', function(event) {
            event.stopPropagation();
        }).on('click', 'a', function(event) {
            var href = $(this).attr('href');
            event.preventDefault();
            event.stopPropagation();
            $menu._hide();
            window.setTimeout(function() {
                window.location.href = href;
            }, 350);
        });
        $body.on('click', 'a[href="#menu"]', function(event) {
            event.stopPropagation();
            event.preventDefault();
            $menu._toggle();
        }).on('keydown', function(event) {
            if (event.keyCode == 27) $menu._hide();
        });
    });
})(jQuery);
(function($) {
    $(function() {
        if (skel.vars.os == 'ios' && window.self !== window.top) {
            var $menu = $('#menu'),
                $window = $(window.top);
            $window.on('resize orientationchange', function() {
                $menu
                    .css('height', $window.height());
            }).trigger('resize');
        }
    });
})(jQuery);
