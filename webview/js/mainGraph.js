/**
 * Author: Henry Schuler
 * Copyright 2021, Henry Schuler, All rights reserved.
 */

var database = document.getElementById("InternetDB");
var valueList = database.textContent.split(';');

var valueArray = [['Date', 'Download', 'Upload']];
for (var i = 0; i < valueList.length/4; i++) {
    valueArray.push([new Date(valueList[i*4]), parseFloat(valueList[i*4+1]), parseFloat(valueList[i*4+2])]);
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable(valueArray);

    var areaOptions = {
        title: '',
        hAxis: {title: 'Date',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0}
    };

    var lineOptions = {
        title: '',
        hAxis: {title: 'Seconds since start',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0},
        trendlines: {
            0: {
                type: 'polynomial',
                // type: 'linear',
                // degree: 5,
                lineWidth: 2,
                color: 'blue',
            },
            1: {
                type: 'polynomial',
                // type: 'linear',
                //   degree: 9,
                lineWidth: 2,
                color: 'red',
            }
        }
    };

    var areaChart = new google.visualization.AreaChart(document.getElementById('area_chart_div'));
    areaChart.draw(data, areaOptions);

    var lineChart = new google.visualization.ScatterChart(document.getElementById('line_chart_div'));
    lineChart.draw(data, lineOptions);
}