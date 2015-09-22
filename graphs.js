google.load('visualization', '1.0', {'packages':['corechart']});
google.setOnLoadCallback(charts);

function charts() {
    var annotation = {type: 'string', role: 'annotation'};
    dispatchCharts([
        {
            'type': barChart,
            'target': 'linux-kernel-sloc',
            'cols': ['string', 'number', 'number'],
            'rows': [
                ['Linux kernel 2.4 (2001)', 2.4, 0.25],
                ['Linux kernel 2.6.29 (2009)', 11.0, 0.25],
                ['Linux kernel 4.2 (2015)', 20.2, 0.25]
            ]
        }, {
            'type': barChart,
            'target': 'debian-sloc',
            'cols': ['string', 'number', 'number', 'number'],
            'rows': [
                ['Debian 3.0 (2002)', 4, (143.2 - 4), 0.25],
                ['Debian 5.0 (2009)', 11, (351.0 - 11), 0.25],
                ['Debian 8.0 (2015)', 20, (798.0 - 20), 0.25]
            ]
        }, {
            'type': barChart,
            'target': 'kernel-sizes',
            'cols': ['string', 'number'],
            'rows': [
                ['Linux kernel 3.x.x', 72],
                ['Busybox with Linux Kernel', 53],
                ['Damn Small Linux', 51],
                ['OSv v0.20', 22],
                ['LING', 9],
                ['ClickOS', 6],
                ['HalVM', 4],
                ['MirageOS', 1]
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

function barChart(target, cols, rows) {
    var data = new google.visualization.DataTable();
    for (var i = 0; i < cols.length; i++) {
        data.addColumn(cols[i]);
    }
    data.addRows(rows);

    var options = {
        height: 500,
        legend: 'none',
        chartArea: {
            left: 300,
            width: '60%'
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
