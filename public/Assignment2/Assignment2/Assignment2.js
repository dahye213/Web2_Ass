function drawTable() {
    var cols = document.getElementById("colNum").value;
    var rows = document.getElementById("rowNum").value;
    var table = "<table><caption>" + rows + " * " + cols + " Table </caption>"; 
    for (i = 1; i <= rows; i++) {
        table += "<tr>";
        for (j = 1; j <= cols; j++) {
            table += "<td>" + i + ", " + j + "</td>";
        }
        table += "</tr>";
    }
    document.getElementById("tableArea").innerHTML = table + "</table>";
}