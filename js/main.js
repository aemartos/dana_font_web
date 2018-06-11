

// ---------- MAIN_MENU --------------

var logo = $('.main_logo');
var logo_content = $('<a class="" href="index.html">A dana font</a>');

logo.append(logo_content);

var menu = $('#myTopnav');

let url = window.location.href.split('/');
let section = url[url.length-1];
let suffix = '.html' // en web '';

var menu_content = $('\
  <ul class="main_menu_list menu_desktop">\
  <li class="'+((section === ('index' + suffix)) ? 'active':'')+'"><a class="" href="index.html">Home</a></li>\
  <li class="'+((section === ('project' + suffix)) ? 'active':'')+'"><a class="" href="project.html">Project</a></li>\
  <li class="'+((section === ('start' + suffix)) ? 'active':'')+'"><a class="" href="start.html">Get Started</a></li>\
  <li class="'+((section === ('library' + suffix)) ? 'active':'')+'"><a class="" href="library.html">Library</a></li>\
  <li class="'+((section === ('demo' + suffix)) ? 'active':'')+'"><a class="" href="demo.html">Demo</a></li>\
  <!--<li class="'+((section === ('tryit' + suffix)) ? 'active':'')+'"><a class="" href="tryit.html">Try it</a></li>-->\
  <li class="'+((section === ('font' + suffix)) ? 'active':'')+'"><a class="" href="font.html">Font Version</a></li>\
  <li class="'+((section === ('license' + suffix)) ? 'active':'')+'"><a class="" href="license.html">License</a></li>\
  <li class="'+((section === ('contact' + suffix)) ? 'active':'')+'"><a class="" href="contact.html">Contact</a></li>\
    <a href="javascript:void(0);" style="font-size:20px;" class="icon" onclick="myFunction()">&#9776;</a>\
  </ul>\
');

menu.append(menu_content);


var menuResponsive = $('#myResponsiveTopnav');


var menu_Responsive_content = $('\
  <ul class="menu_mobile">\
  <li class="'+((section === ('index' + suffix)) ? 'active':'')+'"><a class="" href="index.html">Home</a></li>\
  <li class="'+((section === ('project' + suffix)) ? 'active':'')+'"><a class="" href="project.html">Project</a></li>\
  <li class="'+((section === ('start' + suffix)) ? 'active':'')+'"><a class="" href="start.html">Get Started</a></li>\
  <li class="'+((section === ('library' + suffix)) ? 'active':'')+'"><a class="" href="library.html">Library</a></li>\
  <li class="'+((section === ('demo' + suffix)) ? 'active':'')+'"><a class="" href="demo.html">Demo</a></li>\
  <!--<li class="'+((section === ('tryit' + suffix)) ? 'active':'')+'"><a class="" href="tryit.html">Try it</a></li>-->\
  <li class="'+((section === ('font' + suffix)) ? 'active':'')+'"><a class="" href="font.html">Font Version</a></li>\
  <li class="'+((section === ('license' + suffix)) ? 'active':'')+'"><a class="" href="license.html">License</a></li>\
  <li class="'+((section === ('contact' + suffix)) ? 'active':'')+'"><a class="" href="contact.html">Contact</a></li>\
  </ul>\
');

menuResponsive.append(menu_Responsive_content);


// ---------- FOOTER --------------

var footer = $('.sticky_footer');
var footer_content = $('\
    <div class="sm_footer">\
        <ul class="sm_footer_list">\
          <li class=""><a href="https://github.com/aemartos/dana_font" target="_blank"><span class="fa fa-github"></span> GitHub</a></li>\
          <li class="">&#8226;</li>\
          <li class=""><a class="" href="https://www.linkedin.com/in/aemartos/" target="_blank"><span class="fa fa-linkedin-square" target="_blank"></span> LinkedIn</a></li>\
          <li class="">&#8226;</li>\
          <li class=""><a href="https://twitter.com/aemartos" target="_blank"><span class="fa fa-twitter" target="_blank"></span> Twitter</a></li>\
        </ul>\
    </div>\
    <div class="copyright">\
        <p class="copyright_text"><a class="footer_logo" href="index.html">A dana font &#8226;</a> Design with lots of love, glitter and alien blood, by <a href="http://www.anaestrada.es/" target="_blank">Ana Estrada</a> as a end-of-degree project. © 2017</p>\
    </div>\
  ');

footer.append(footer_content);


// -----------------------------

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



// ------------- RELOAD 5MIN WITHOUT INTERACT ------------

/*var userInteract = false;

document.addEventListener('mousemove', function(e){
  userInteract = true;
});

document.addEventListener('keydown', function(e){
  userInteract = true;
});

setInterval(function() {
  let loc = (window.location.href.split('/'));
  loc = loc[loc.length -1];
  if (!userInteract && loc !== 'demo.html') {
    refresh();
  }
  userInteract = false;

}, 5 * 60000);

function refresh() {
  window.location.reload(true);
  window.location.href = "demo.html";
}*/



/*
======================================================================================
======================================================================================
======================================================================================
*/



/*
 *   carousel: object encapsulating carousel functions
 *   @params: options
 */


var carousel = function (options) {
  var root = this;

  root.slider = $(options.slider_query);
  root.options = options.slider_options;

  root.init = function () {
    
    if (root.slider.length > 0) {
      root.slider.owlCarousel(root.options);
    }

  }();
};

var c = new carousel({
  slider_query: '.slider4',
  slider_options: {
    margin: 10,
    loop: true,
    autoWidth: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
  }
});






/*
======================================================================================
======================================================================================
======================================================================================
*/



/*
 *   menu: object encapsulating menu functions
 *   @params: options
 */


var Menu = function (options) {
  var root = this;

  root.menu = $(options.menu_query);
  root.menu_toogle = root.menu.find('.menu_responsive_toggle');
  root.menu_content = root.menu.find('.menu_responsive_content');

  root.init = function () {
    console.log(root);
    root.init_events();
  }();
};

Menu.prototype.init_events = function () {
  var that = this;

  that.menu_toogle.on('click', function (ev) {
    that.menu_content.toggleClass('opened');

    if (that.menu_content.hasClass('opened')) {
      that.menu_opened = true;
    } else {
      that.menu_opened = false;
    }
  });
};

var men = new Menu({
  menu_query: '.menu_responsive'
});







/*
======================================================================================
======================================================================================
======================================================================================
*/



/*
 *   tryIt: object encapsulating tryit.html trying box functions
 *   @params: options
 */

var tryIt = function(options) {
  var root = this;

  root.input = $(options.input_query);
  root.output = $(options.output_box);
  root.output_sons = root.output.find('.grid');
  root.string = '';
  root.charLimit = 0;
  root.num_conditions = [
    'd48',
    'd49', 
    'd50', 
    'd51', 
    'd52', 
    'd53', 
    'd54', 
    'd55', 
    'd56', 
    'd57'
  ];

  root.init = function() {
    root.init_events();
  }();
};

tryIt.prototype.init_events = function() {
  var that = this;
  that.input.on('input', function(ev) {
    that.string = ev.target.value;
    if (that.string.length > that.charLimit) {
      that.paint_the_string();
    } else {
      that.erase_the_string();
    }
  });
};


tryIt.prototype.paint_the_string = function() {
  var that = this;
  that.output.empty();

  for (var i = 0; i < that.string.length; i++) {
    var charcode = that.string.charCodeAt(i);
    var charcode_alt = that.string.toLowerCase().charCodeAt(i);

    /* Condicion para numeros */
    if (that.num_conditions.indexOf('d' + charcode) > -1) {
      charcode = charcode + '_1';
    }

    //var charcode2 = that.string.toUpperCase().charCodeAt(i);
    //var codes = [charcode, charcode2];
    var grid_string = (go.checked) ? 'grid' : '';

    //template
    if (dana_char["d" + charcode]) {
      that.output.append('\
        <div class="d' + charcode + ' ' + grid_string + '">' + 
          dana_char["d" + charcode][0].innerHTML + 
        '</div>'
      );
    } else {
      that.output.append('\
        <div class="d' + charcode_alt + ' ' + grid_string + '">' + 
          dana_char["d" + charcode_alt][0].innerHTML + 
        '</div>'
      );
    }

  }

  that.output_sons = that.output.find('.grid');

  //REINIT THE GRID FUNCTIONS WITH THE NEW LETTERS
  go.init();
};

tryIt.prototype.erase_the_string = function() {
  var that = this;
  that.output.empty();
};


var ti = new tryIt({
  input_query: '.text_display_input input[type="text"]',
  output_box: '.text_display_container .text_display_container_holder', 
  char_limit: 0, 
  upper_numbers: true
});


/*
var obj = new tryIt({
  input_query: '.text_display_input input[type="text"]',
  output_box: '.example_text', 
  char_limit: 0, 
  upper_numbers: true
});

*/



/*
======================================================================================
======================================================================================
======================================================================================
*/




/*
 *   gridOn: object encapsulating grid box background functionalities
 *   @params: options
 */

var gridOn = function (options) {
  var root = this;
  
  root.blocks = null;
  root.options = options;
  root.check = $(options.check_query);
  root.checked = true;

  root.init = function () {
    root.get_blocks();
    root.init_events();
  };

  root.init();
};

gridOn.prototype.get_blocks = function() {
  var that = this;
  var output_array = [];

  $(that.options.block_query).each(function (i, e) {
    output_array[i] = $(e).parent();
  });

  that.blocks = output_array;
};

gridOn.prototype.init_events = function() {
  var that = this;

  that.check.on('change', function (ev) {
    if (this.checked) {
      that.grid_on();
      that.checked = true;
    } else {
      that.grid_off();
      that.checked = false;
    }
  });
};

gridOn.prototype.grid_on = function () {
  var that = this;
  that.blocks.forEach(function (e, i, a) {
    e[0].classList.add(that.options.className);
  });
};

gridOn.prototype.grid_off = function () {
  var that = this;
  that.blocks.forEach(function (e, i, a) {
    e[0].classList.remove(that.options.className);
  }); 
};

var go = new gridOn ({
  block_query: '[class^="letter_"], [class^="sign_"], [class^="number_"], [class^="icon_"]',
  check_query: '.grid_check input',
  className: 'grid'
});




/*
======================================================================================
======================================================================================
======================================================================================
*/



var size = 4;
var size_step = 0.5;
var initial_size = 4;
var initial_lh = 1.1;
var text = {
  small: $('.small_text'),
  normal: $('.normal_text'),
  big: $('.big_text')
};
var example_text = $('.example_text');



text.normal.on('click', function () {
  size = 4;
  example_text.css({
    'font-size': size + 'em',
  });
});

text.small.on('click', function () {
  size = size - size_step;
  example_text.css({
    'font-size':  size + 'em',
  });
});

text.big.on('click', function () {
  size = size + size_step;
  example_text.css({
    'font-size':  size + 'em',
  });
});




var selector = $('select.type_typography');
var selector_options = [
  'dana-expanded',
  'dana-semiexpanded',
  'dana-regular',
  'dana-semicondensed'
];
var active_class = '';


var class_type = $('.type');
var expanded = '.dana_text_e';
var semiexpanded = '.dana_text_se';
var regular = '.dana_text_r';
var semicondensed = '.dana_text_sc';


selector.on('change', function(){

  example_text.css({
    'font-family': $(this).val()
  });

  example_text.removeClass(active_class);
  example_text.addClass($(this).val());
  active_class = $(this).val();

  switch ($(this).val()) {
    case 'dana-expanded':
     class_type[0].innerHTML = expanded;
    break;
    case 'dana-semiexpanded':
     class_type[0].innerHTML = semiexpanded;
    break;
    case 'dana-regular':
      class_type[0].innerHTML = regular;
    break;
    case 'dana-semicondensed':
      class_type[0].innerHTML = semicondensed;
    break;
  }

});



var selector_text = $('.font_input_demo'); 

selector_text.on("change keydown paste input", function(){
  example_text.html(selector_text.val());
})




/*
======================================================================================
======================================================================================
======================================================================================
*/


$("[type=file]").on("change", function(){
  var file = this.files[0].name;
  var dflt = $(this).attr("placeholder");
  if($(this).val()!=""){
    $(this).next().text(file);
  } else {
    $(this).next().text(dflt);
  }
});



/*
======================================================================================
======================================================================================
======================================================================================
*/


// var mail_form = $('.mail_form');

// mail_form.on('submit', function(ev) {
//   ev.preventDefault();

//   console.log($(this).find('input'));
  

//   $.ajax({
//     url: '',
//     method: 'POST', 
//     data: {

//     }
//   }).success(function (data){

//   }).error(function (err) {

//   });
// });










