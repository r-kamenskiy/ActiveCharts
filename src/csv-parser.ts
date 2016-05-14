function parseCsv(csv): DataTable {
    
    let lines = csv.split('\n');
	let headers = lines[0].split(',');
    
	let dt = new DataTable();

	for (let header of headers)
	{
		dt.Columns[header] = [];
	}
    
	for (let i = 1; i < lines.length; i++)
	{
		let rows = lines[i].Split(',');
		for (let i = 0; i < headers.length; i++)
		{
			dt.Columns[headers[i]].push(rows[i]);
		}
	}
    
    return dt;
}