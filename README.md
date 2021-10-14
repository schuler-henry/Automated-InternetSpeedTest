# Automated-InternetSpeedTest
This is a Linux shell script which automatically checks the current internet speed and saves the results into a database.

## Folder Structure
Folder | Usage
------ | -----
[src](src) | source files (executable shell script)
[webview](webview) | result visualization via html

## Required tools
### [Shell script](src/getInternetSpeed)
* install [speedtest](https://wiki.ubuntuusers.de/speedtest-cli/) command for the executing user
* install [mariaDB](https://www.digitalocean.com/community/tutorials/how-to-install-mariadb-on-ubuntu-20-04-de)
* [create a mariaDB user](https://phoenixnap.com/kb/how-to-create-mariadb-user-grant-privileges#ftoc-heading-2) with username=internet and password=internet

> In order to create your own LocationID, add case to switch statement in l) case<br>
> Don't forget to mention the new LocationID in the help page

### [Web-View](webview)
* install [apache2]()
* install [php]()
    * activate [apache-adapters]()
    * create [Virtual Host](https://wiki.ubuntuusers.de/Apache/Virtual_Hosts/)
    * [restart] apache2

## How to
### Set up script
Before executing the script, you need to replace the username inside the speedtest command path in [line 6](src/getInternetSpeed) with your username.

### Run script in loop
In order to run the speedtest in a loop you need to set a cronjob.
1. Open crontab config
```powershell 
crontab -e
```
2. Add cronjob (run every minute)
```powershell
* * * * * <projectpath>/src/getInternetSpeed -l <LocationID> 
```

## [License](LICENSE)
MIT License

Copyright (c) 2021 Henry Schuler

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.