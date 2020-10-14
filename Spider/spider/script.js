var table = document.getElementById("questions");
if (table != null) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++)
      table.rows[i].cells[j].onclick = function () {
        tableText(this);
      };
  }
}
function tableText(tableCell) {
  console.log(tableCell.innerHTML);
}


document.getElementById("questions").style.backgroundColor = 'white';
function select(el) {
  if (el.style.backgroundColor === 'white') {
    el.style.backgroundColor = 'blue';   
  }
  else el.style.backgroundColor = 'white';
}   