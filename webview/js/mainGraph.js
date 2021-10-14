/**
 * Author: Henry Schuler
 * Copyright 2021, Henry Schuler, All rights reserved.
 */

// Get data for Kluftern
var dbKluftern = document.getElementById("InternetDBKluftern");
var valueListKluftern = dbKluftern.textContent.split(';');

var valueArrayKluftern = [['Date', 'Download', 'Upload']];
for (var i = 0; i < valueListKluftern.length/4; i++) {
    valueArrayKluftern.push([new Date(valueListKluftern[i*4]), parseFloat(valueListKluftern[i*4+1]), parseFloat(valueListKluftern[i*4+2])]);
}

// Get data for Isny
var dbIsny = document.getElementById("InternetDBIsny");
var valueListIsny = dbIsny.textContent.split(';');

var valueArrayIsny = [['Date', 'Download', 'Upload']];
for (var i = 0; i < valueListIsny.length/4; i++) {
    valueArrayIsny.push([new Date(valueListIsny[i*4]), parseFloat(valueListIsny[i*4+1]), parseFloat(valueListIsny[i*4+2])]);
}


// Set-up google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var dataKluftern = google.visualization.arrayToDataTable(valueArrayKluftern);
    var dataIsny = google.visualization.arrayToDataTable(valueArrayIsny);

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

    // Draw chart for Kluftern
    var areaChartKluftern = new google.visualization.AreaChart(document.getElementById('area_chart_kluftern'));
    areaChartKluftern.draw(dataKluftern, areaOptions);

    var scatterChartKluftern = new google.visualization.ScatterChart(document.getElementById('scatter_chart_kluftern'));
    scatterChartKluftern.draw(dataKluftern, lineOptions);

    // Draw chart for Isny#
    var areaChartIsny = new google.visualization.AreaChart(document.getElementById('area_chart_isny'));
    areaChartIsny.draw(dataIsny, areaOptions);

    var scatterChartIsny = new google.visualization.ScatterChart(document.getElementById('scatter_chart_isny'));
    scatterChartIsny.draw(dataIsny, lineOptions);
}