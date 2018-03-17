var btn = document.getElementById('btn');

btn.addEventListener('click', function() {
	buildTable();
});

function buildTable() {
	var rows_table = prompt('Give the number of rows (1-10)');
	var columns_table = prompt('Give the number of columns(1-10)');


	var content = document.getElementById('content');
	var table = document.createElement('table');
	var tableBody = document.createElement('tbody');

	for (var j=0; j<rows_table; j++) {
		var row = document.createElement('tr');

		for (var i=0; i<columns_table; i++) {
			var cell = document.createElement('td');
			var cellContent = document.createTextNode(j + ' ' + i);
			cell.appendChild(cellContent);
			row.appendChild(cell);
		}

		tableBody.appendChild(row);
	}
	table.appendChild(tableBody);
	content.removeChild(content.lastChild);
	content.appendChild(table);
}

