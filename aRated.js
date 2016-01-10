$(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Pecent of "A" Rated Hospitals in the U.S. by State'
        },
        subtitle: {
            text: 'Source: <a href="http://www.hospitalsafetyscore.org/your-hospitals-safety-score/state-rankings">The Leap Frog Group</a>'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percent (%)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: '<b>{point.y:.1f}% millions</b>'
        },
        series: [{
            name: 'Percentage',
            data: [
                ['Maine', 68.8],
                ['Massachusetts', 60.3],
                ['Florida', 56.4],
                ['Virginia', 53.1],
                ['New Jersey', 47.8],
                ['Illinois', 43.6],
                ['Tennessee', 40.3],
                ['North Carolina', 38.0],
                ['Colorado', 37.5],
                ['Georgia', 34.8],
                ['California', 34.6],
                ['South Dakota', 33.3],
                ['Texas', 33.0],
                ['Utah', 31.8],
                ['Ohio', 28.0],
                ['Idaho', 27.3],
                ['Arizona', 26.7],
                ['Wisconsin', 26.1],
                ['Kentucky', 24.5],
                ['Louisiana', 23.9],
                ['Michigan', 23.8],
                ['Pennsylvania', 23.7],
                ['New Hampshire', 23.1],
                ['Kansas', 22.6],
                ['Hawaii', 22.2],
                ['Soth Carolina', 22.2],
                ['Iowa', 20.7],
                ['Delaware', 20.0],
                ['Oregon', 20.0],
                ['Oklahoma', 19.4],
                ['Nebraska', 18.8],
                ['Minnesota', 18.4],
                ['Washington', 18.2],
                ['New York', 17.9],
                ['Alabama', 16.7],
                ['Connecticut', 16.0],
                ['Indiana', 15.3],
                ['Mississippi', 15.2],
                ['Nevada', 15.0],
                ['Arkansas', 12.9],
                ['Mondatana', 11.5],
                ['Rhode Island', 11.1],
                ['West Virginia', 11.1],
                ['Alaska', 8.3],
                ['District of Columbia', 0.0],
                ['North Dakota', 0.0],
                ['New Mexico', 0.0],
                ['Vermont', 0.0],
                ['Wyoming', 0.0]
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
});


//PIE CHART
//HTML FOR PIE CHART
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<div id="container" style="width: 600px; height: 400px; margin: 0 auto"></div>


//  JS FOR PIE CHART//
$(function () {

    var colors = Highcharts.getOptions().colors,
        categories = ['Cather Associated Urinary Tract', 'Central Line Associated Blood', 'Surgical Site Infection Abdominal Hyterectomy'],
        data = [{
            y: 56.33,
            color: colors[0],
            drilldown: {
                name: 'Cather Associated Urinary Tract',
                categories: ['Kansas 6.0', 'Alabama 7.0', 'Florida 8.0', 'Kentucky 9.0', 'MSIE 10.0', 'MSIE 11.0'],
                data: [1.06, 0.5, 17.2, 8.11, 5.33, 24.13],
                color: colors[0]
            }
        }, {
            y: 10.38,
            color: colors[1],
            drilldown: {
                name: 'Central Line Associated Blood',
                categories: ['Kentucky', 'New York ', 'Virignia ', 'Firefox v37', 'Alabama '],
                data: [33, 15, 22, 87, 76, 32, 99, 02],
                color: colors[1]
            }
        },
                {
            y: 10.38,
            color: colors[2],
            drilldown: {
                name: 'Central Line Associated Blood',
                categories: ['Texas', 'Fl', 'NC','SC', 'Cali'],
                data: [33, 15, 22, 27, 76, 32, 31, 20],
                color: colors[2]
            }
        }],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;


    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

        // add browser data
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });

        // add version data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            versionsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.Color(data[i].color).brighten(brightness).get()
            });
        }
    }

    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Browser market share, January, 2015 to May, 2015'
        },
        subtitle: {
            text: 'Source: <a href="http://netmarketshare.com/">netmarketshare.com</a>'
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: 'Browsers',
            data: browserData,
            size: '60%',
            dataLabels: {
                formatter: function () {
                    return this.y > 5 ? this.point.name : null;
                },
                color: '#ffffff',
                distance: -30
            }
        }, {
            name: 'Versions',
            data: versionsData,
            size: '80%',
            innerSize: '60%',
            dataLabels: {
                formatter: function () {
                    // display only if larger than 1
                    return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
                }
            }
        }]
    });
});
// PIE CHART ENDS-----------------------------------------------------------------------------------------
