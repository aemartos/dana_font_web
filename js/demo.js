$( function() {
   /* $( "#resizable" ).resizable({
       //animate: true,
       handles: "se",
       ghost: true,
     });*/

     interact('#resizable')
     .draggable({
      restrict: {
        restriction: '.content_demo',
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
      },
       allowFrom :('.drag-handle'),
      inertia: true,
      onstart: (event) => {
         $('#iframe').css('pointer-events', 'none');
      },
      onmove: (event) => {
        let target = event.target;
        let x =( (parseFloat(target.getAttribute('data-x'), 10) +event.dx) || 0);
        let y = ((parseFloat(target.getAttribute('data-y'), 10) + event.dy)|| 0);
        // target.style.zIndex = '9999';
       // target.style.top = y + 'px'
       // target.style.left = x + 'px'
       target.style.webkitTransform = target.style.transform =
       'translate(' + x + 'px,' + y + 'px)';

       target.setAttribute('data-x', x);
       target.setAttribute('data-y', y);
     
     },
     onend: (event) => { 
        $('#iframe').css('pointer-events', 'all');
      }

   })
     .resizable({
      edges: {
        top   : true,
        left  : true,
        bottom: true,
        right : true,
      },
      restrict: {
        restriction: '.content_demo',
      },
      margin: 10,
      inertia: true,
      onstart: (event) => {
         $('#iframe').css('pointer-events', 'none');
      },
      onmove: (event) => {

        let target = event.target;
        let x = (parseFloat(target.getAttribute('data-x'), 10) || 0);
        let y = (parseFloat(target.getAttribute('data-y'), 10) || 0);
       
        // update the element's style
        target.style.width = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';

        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;
        // x = x<0 ? 0:x;
        // y = y<0 ? 0:y;
        target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
        // Update size in textbox

        
      },
      onend: (event) => { 
        $('#iframe').css('pointer-events', 'all');
      }
    });
     

     $('#textinput').on('keyup', function(e){
      let msg = {type: 'input', content: e.target.value}
      receiver.postMessage(JSON.stringify(msg), '*');
    } );
    
})


var receiver = document.getElementById('iframe').contentWindow;
 function update(which, jscolor) {
    // 'jscolor' instance can be used as a string
    console.log(which,  + jscolor)
    let msg = {type: which.toString(), content: '#' +jscolor.toString()}
    receiver.postMessage(JSON.stringify(msg), '*');
    if (which === 'secondary') {
      $('.site_demo').css('background-color', msg.content+'DD');
      $('.nav-square').css('background-color', msg.content);
      $('.button_back_btn span').css('color', msg.content);

    }
    

}