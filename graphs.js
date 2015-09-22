google.load('visualization', '1.0', {'packages':['corechart']});
google.setOnLoadCallback(charts);

function charts() {
    var annotation = {type: 'string', role: 'annotation'};
    dispatchCharts([
        {
            'type': slocChart,
            'target': 'linux-kernel-sloc',
            'cols': ['string', 'number', annotation],
            'rows': [
                ['Linux kernel 2.4 (2001)', 2.4, "2.4M"],
                ['Linux kernel 2.6.29 (2009)', 11.0, "11.0M"],
                ['Linux kernel 4.2 (2015)', 20.2, "20.2M"]
            ]
        }, {
            'type': slocChart,
            'target': 'debian-sloc',
            'cols': ['string', 'number', 'number', annotation],
            'rows': [
                ['Debian 3.0 (2002)', 4, (143.2 - 4), "143.2M"],
                ['Debian 5.0 (2009)', 11, (351.0 - 11), "351.0M"],
                ['Debian 8.0 (2015)', 20, (798.0 - 20), "798.0M"]
            ]
        }
    ]);
}

function dispatchCharts(charts) {
    for (var i = 0; i < charts.length; i++) {
        var chart = charts[i];
        chart['type'](chart['target'], chart['cols'], chart['rows']);
    }
}

function slocChart(target, cols, rows) {
    var data = new google.visualization.DataTable();
    for (var i = 0; i < cols.length; i++) {
        data.addColumn(cols[i]);
    }
    /*
    data.addColumn('string');
    data.addColumn('number');
    data.addColumn({type: 'string', role: 'annotation'})
    */
    data.addRows(rows);

    var options = {
        height: 500,
        legend: 'none',
        chartArea: {
            left: 300,
            width: '50%'            
        },
        vAxis: {
            textStyle: {fontSize: 20}
        },
        hAxis: {
            textStyle: {fontSize: 20}
        },
        annotations: {
            alwaysOutside: true,
            textStyle: {fontSize: 16}
        },
        isStacked: true
    };

    var chart = new google.visualization.BarChart(
        document.getElementById(target));
    chart.draw(data, options);
}
