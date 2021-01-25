window.addEventListener(
    "load",
    function() {
        console.log("arming callbacks");
        // attach callbacks
        document.getElementById("textual").addEventListener(
            "keydown", function(event) {
                // for inspection in the console
                console.log("KEYDOWN", event);
                // display in dedicated area 'result'
                document.getElementById("result").textContent 
                    = `typed key ${event.key}`;
            }
        );
        document.getElementById("graphic").addEventListener(
            "click", function(event) {
                // for inspection in the console
                console.log("CLICK", event);
                // display in dedicated area 'result'
                document.getElementById("result").textContent 
                    = `clicked ${event.offsetX}x${event.offsetY}`;
            }
        );
    }
)