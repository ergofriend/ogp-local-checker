You can confirm the SNS OGP with the local computer.

# Easy Run
```
docker pull ergofriend/ogp-local-checker:stable
docker run -it -p 8089:80 ogp-local-checker:stable
```
open http://127.0.0.1:8089

## Tag and Brunch
- master -> ogp-local-checker:stable
- staging -> ogp-local-checker:latest

# Dev
```
yarn
yran start
```
