declare function parseCsv(csv: any): DataTable;
declare function googleChartEngine(data: any, chartType: any): void;
declare function renderLineChart(data: any): void;
declare class Startup {
    static main(): number;
}
declare class DataTable {
    ColumnHeaders: string[];
    Columns: {
        [key: string]: string[];
    };
}
declare enum ChartType {
    Unknown = 0,
    Area = 1,
    Bar = 2,
    Bubble = 3,
    Candlestick = 4,
    Column = 5,
    Combo = 6,
    Diff = 7,
    Donut = 8,
    Pie = 9,
    Gantt = 10,
    Gauge = 11,
    Geo = 12,
    Histogram = 13,
    Line = 14,
    Sankey = 15,
    Scatter = 16,
    Table = 17,
    Timelines = 18,
    Trandline = 19,
    Waterfall = 20,
}
declare enum DataType {
    Unknown = 0,
    Csv = 1,
}
declare class Dvm {
    chartType: ChartType;
    dataType: DataType;
}
