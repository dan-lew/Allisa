function makeTable(table, rows, cells, content) {
  if (!table) table = document.createElement("table");
  for (var i = 0; i < rows; ++i) {
    var row = document.createElement("tr");
    for (var j = 0; j < cells; ++j) {
      row.appendChild(document.createElement("td"));
      row.cells[j].appendChild(document.createTextNode(content + (i + 1)));
    }
    table.appendChild(row);
  }
  return table;
}
document.getElementById("table").appendChild(makeTable(null, 10, 10, " "));

var table = document.getElementById("table");
for (var i = 0; i < table.rows.length; i++) {
  table.rows[i].addEventListener("click", function () {
    var msg = "Selected Cell: ";
    for (var j = 0; j < this.cells.length; j++) {
      msg += this.cells[j].innerHTML;
    }
    alert(msg);
  });
}

// var table = document.getElementById('table');
// var cells = table.getElementsByTagName("td");

// var cells = table.getElementsByTagName("td");
// for (var i = 0; i < cells.length; i++) {
//    cells[i].onclick = function(){tes();};
// }

// function tableText(tableCell) {
//     alert(tableCell.innerHTML);
// }

// var table = document.createElement('table');
// for (var i = 1; i < 10; i++){
//     var tr = document.createElement('tr');

//     var td1 = document.createElement('td');
//     var td2 = document.createElement('td');

//     var text1 = document.createTextNode('Text1');
//     var text2 = document.createTextNode('Text2');

//     td1.appendChild(text1);
//     td2.appendChild(text2);
//     tr.appendChild(td1);
//     tr.appendChild(td2);

//     table.appendChild(tr);
// }
// document.body.appendChild(table);

// var table = document.getElementById("questions");
// if (table != null) {
//   for (var i = 0; i < table.rows.length; i++) {
//     for (var j = 0; j < table.rows[i].cells.length; j++)
//       table.rows[i].cells[j].onclick = function () {
//         tableText(this);
//       };
//   }
// }
// function tableText(tableCell) {
//   console.log(tableCell.innerHTML);
// }

// document.getElementById("questions").style.backgroundColor = 'white';
// function select(el) {
//   if (el.style.backgroundColor === 'white') {
//     el.style.backgroundColor = 'blue';
//   }
//   else el.style.backgroundColor = 'white';
// }
