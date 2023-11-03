  function formSubmit(event) {
    event.preventDefault();
    let grid = document.getElementById('pixelCanvas');
    grid.innerHTML = "";
    console.log('grid cleared');

    // Select size input
    var gridHeight = document.getElementById("inputHeight").value;
    var gridWidth = document.getElementById("inputWidth").value;
    makeGrid(gridHeight, gridWidth);
  };

    // Grid Creation Loop
    function makeGrid(rows, columns) {
        // Select color input
        var colorChoice = document.getElementById("colorPicker").value;
        // Select size input
        var gridHeight = document.getElementById("inputHeight").value;
        var gridWidth = document.getElementById("inputWidth").value;
        console.log("make grid invoked");
        // Testing output------------------------------------------------------------------
        console.log("color chosen: " + colorChoice);
        console.log("Dimensions chosen: Width - " + gridWidth + " Height - " + gridHeight);
        // --------------------------------------------------------------------------------
        let colorPicker = document.getElementById('colorPicker');
        let grid = document.getElementById('pixelCanvas');
        for (var r = 0; r < rows; r++) {
            var row = grid.insertRow(r);
            for (var c = 0; c < columns; c++) {
                var cell = row.insertCell(c);
                cell.addEventListener('click', e => {
                    e.target.style.background = colorPicker.value;
               });
            };
          };
        };