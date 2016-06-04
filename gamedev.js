<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Test Move Object</title>

    <script type="text/javascript">
       <script type="text/javascript">

            function leftArrowPressed() {
            var element = document.getElementById("laser");
            element.style.left = parseInt(element.style.left) - 5 + 'px';
            }

            function rightArrowPressed() {
            var element = document.getElementById("laser");
            element.style.left = parseInt(element.style.left) + 5 + 'px';

            }

            function moveSelection() {
                evt = evt || window.event; 
                switch (evt.keyCode) {
                    case 37:
                    leftArrowPressed();
                    break;
                    case 39:
                    rightArrowPressed();
                    break;
                    case 38:
                    }
                };

        function gameLoop()
        {
          // change position based on speed
          moveSelection();
          setTimeout("gameLoop()",10);
        }

  </script>
  </head>

  <body onload="gameLoop()" onkeydown="" onkeyup="" bgcolor='yellow'>
   Test
  <img id="laser" src="http://vignette4.wikia.nocookie.net/callofduty/images/e/ea/Ray_Gun_Mark_II_BOII.png/revision/latest?cb=20131022195707 "
                                                              height="15" width="15">
  </body>
   end html
</html>
//Your jquery goes here