function parseCsv(csv) {
    var lines = csv.split('\n');
    var headers = lines[0].split(',');
    var dt = new DataTable();
    for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
        var header = headers_1[_i];
        dt.Columns[header] = [];
    }
    for (var i = 1; i < lines.length; i++) {
        var rows = lines[i].Split(',');
        for (var i_1 = 0; i_1 < headers.length; i_1++) {
            dt.Columns[headers[i_1]].push(rows[i_1]);
        }
    }
    return dt;
}
