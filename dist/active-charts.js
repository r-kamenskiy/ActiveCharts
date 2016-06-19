module.exports = {};
var DataTable = (function () {
    function DataTable() {
    }
    return DataTable;
}());
var ChartType;
(function (ChartType) {
    ChartType[ChartType["Unknown"] = 0] = "Unknown";
    ChartType[ChartType["Area"] = 1] = "Area";
    ChartType[ChartType["Bar"] = 2] = "Bar";
    ChartType[ChartType["Bubble"] = 3] = "Bubble";
    ChartType[ChartType["Candlestick"] = 4] = "Candlestick";
    ChartType[ChartType["Column"] = 5] = "Column";
    ChartType[ChartType["Combo"] = 6] = "Combo";
    ChartType[ChartType["Diff"] = 7] = "Diff";
    ChartType[ChartType["Donut"] = 8] = "Donut";
    ChartType[ChartType["Pie"] = 9] = "Pie";
    ChartType[ChartType["Gantt"] = 10] = "Gantt";
    ChartType[ChartType["Gauge"] = 11] = "Gauge";
    ChartType[ChartType["Geo"] = 12] = "Geo";
    ChartType[ChartType["Histogram"] = 13] = "Histogram";
    ChartType[ChartType["Line"] = 14] = "Line";
    ChartType[ChartType["Sankey"] = 15] = "Sankey";
    ChartType[ChartType["Scatter"] = 16] = "Scatter";
    ChartType[ChartType["Table"] = 17] = "Table";
    ChartType[ChartType["Timelines"] = 18] = "Timelines";
    ChartType[ChartType["Trandline"] = 19] = "Trandline";
    ChartType[ChartType["Waterfall"] = 20] = "Waterfall";
})(ChartType || (ChartType = {}));
var DataType;
(function (DataType) {
    DataType[DataType["Unknown"] = 0] = "Unknown";
    DataType[DataType["Csv"] = 1] = "Csv";
})(DataType || (DataType = {}));
