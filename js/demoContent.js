$( function() {
  //  function receiveMessage(e) {

  //   // Update the div element to display the message.
  //   console.log( "Message Received: " + e.data);
  // }

  // // Setup an event listener that calls receiveMessage() when the window
  // // receives a new MessageEvent.
  // window.addEventListener('message', receiveMessage);
  // 


var tryItDemo = function(options) {
  var root = this;

  root.input = $(options.input_query);
  root.output = $(options.output_box);
  // root.output_sons = root.output.find('.grid');
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

tryItDemo.prototype.init_events = function() {
  var that = this;

   window.addEventListener('message', function(ev) {
    let msg =JSON.parse(ev.data);
    if (msg && msg.type) {
      switch(msg.type) {
        case 'input':
          that.string = msg.content;
          if (that.string.length > that.charLimit) {
            that.paint_the_string();
          } else {
            that.erase_the_string();
          }  
          break;
        case 'primary':
          console.log(msg.type, msg.content);
          $('.demo_content .content .dana_test_input_content').css('fill', msg.content)
          break;
        case 'secondary':
          console.log(msg.type, msg.content);
          $('.demo_content').css('background-color', msg.content)
          break;
          break;
      }
     

  } else {
    return;
  }
    
  });
  
};


tryItDemo.prototype.paint_the_string = function() {
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
    var grid_string = ''

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

  // that.output_sons = that.output.find('.grid');

  //REINIT THE GRID FUNCTIONS WITH THE NEW LETTERS
  // go.init();
};

tryItDemo.prototype.erase_the_string = function() {
  var that = this;
  that.output.empty();
};


var tiysdemo = new tryItDemo({
 // input_query: '.text_display_input input[type="text"]',
  output_box: '.dana_test_input_content01', 
  char_limit: 0, 
  upper_numbers: true
});


})