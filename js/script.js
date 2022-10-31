$(function() {
    var print = function(msg) {
      alert(msg);
    };

    var setInvisible = function(scrollButtons) {
      scrollButtons.css('visibility', 'hidden');
    };
    var setVisible = function(scrollButtons) {
      scrollButtons.css('visibility', 'visible');
    };

    var scrollButtons = $("#scrollButtons");
    var items = scrollButtons.children();

    // Inserting Buttons
    scrollButtons.prepend('<div id="right-button" style="visibility: hidden;"><a href="#"><</a></div>');
    scrollButtons.append('  <div id="left-button"><a href="#">></a></div>');

    // Inserting Inner
    items.wrapAll('<div id="inner" />');

    // Inserting Outer
    debugger;
    scrollButtons.find('#inner').wrap('<div id="outer"/>');

    var outer = $('#outer');

    var updateUI = function() {
      var maxWidth = outer.outerWidth(true);
      var actualWidth = 0;
      $.each($('#inner >'), function(i, item) {
        actualWidth += $(item).outerWidth(true);
      });

      if (actualWidth <= maxWidth) {
        setVisible($('#left-button'));
      }
    };
    updateUI();



    $('#right-button').click(function() {
      var leftPos = outer.scrollLeft();
      outer.animate({
        scrollLeft: leftPos - 200
      }, 800, function() {
        debugger;
        if ($('#outer').scrollLeft() <= 0) {
          setInvisible($('#right-button'));
        }
      });
    });

    $('#left-button').click(function() {
      setVisible($('#right-button'));
      var leftPos = outer.scrollLeft();
      outer.animate({
        scrollLeft: leftPos + 200
      }, 800);
    });

    $(window).resize(function() {
      updateUI();
    });
  });
