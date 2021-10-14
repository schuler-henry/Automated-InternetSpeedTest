<!--
 Author: Henry Schuler
 Copyright 2021, Henry Schuler, All rights reserved.
 -->

<!-- <!DOCTYPE html> -->
<html lang="de">
	<head>
		<meta charset="utf-8">
		<title>Speedtest WG 7/8 OG Kluftern</title>
	</head>
	<body>
		<meta http-equiv="refresh" content="60" />
		<h1 style="text-align: center">Speedtest WG 7/8 OK Kluftern</h1>
		<?php
			$servername = "localhost";
			$username = "internet";
			$password = "internet";
			$dbname = "InternetDB";

			// Create connection
			$conn = new mysqli($servername, $username, $password, $dbname);

			// Check connection
			if ($conn->connect_error) {
				die("Connection failed: " . $conn->connect_error);
			}
			// echo("Connected successfully" . "<br>");

			$resultKluftern = $conn->query("SELECT Date, Download, Upload, HostPing FROM Speedtest WHERE NetworkLocation LIKE 'Zerlaut-Kluftern'");
			$resultIsny = $conn->query("SELECT Date, Download, Upload, HostPing FROM Speedtest WHERE NetworkLocation LIKE 'Isny-Kastellstraße'");
			
			if ($resultKluftern->num_rows > 0) {
				echo("<table id='InternetDBKluftern' hidden='true'>");
				while ($row = $resultKluftern->fetch_assoc()) {
					echo("<tr><th>" . $row["Date"] . ";</th><th>" . $row["Download"] . ";</th><th>" . $row["Upload"] . ";</th><th>" . $row["HostPing"] . ";</th></tr>");
				}
				echo("</table>");
			}

			if ($resultIsny->num_rows > 0) {
				echo("<table id='InternetDBIsny' hidden='true'>");
				while ($row = $resultIsny->fetch_assoc()) {
					echo("<tr><th>" . $row["Date"] . ";</th><th>" . $row["Download"] . ";</th><th>" . $row["Upload"] . ";</th><th>" . $row["HostPing"] . ";</th></tr>");
				}
				echo("</table>");
			}

			$conn->close();
		?>
		<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
		<script src="./js/mainGraph.js"></script>
		<div id="area_chart_kluftern" style="width: 100%; height: 600px;"></div>
		<div id="scatter_chart_kluftern" style="width: 100%; height: 600px;"></div>
		<div id="area_chart_isny" style="width: 100%; height: 600px;"></div>
		<div id="scatter_chart_isny" style="width: 100%; height: 600px;"></div>
	</body>
</html>
