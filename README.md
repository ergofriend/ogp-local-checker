You can confirm the SNS OGP with the local computer.

[日本語](https://github.com/ErgoFriend/ogp-local-checker/blob/master/README.ja.md)

# Easy Run
```
docker pull ergofriend/ogp-local-checker
docker run -it -p 8089:3000 ergofriend/ogp-local-checker
open http://127.0.0.1:8089
```

## Tag and Brunch
- prod -> ergofriend/ogp-local-checker:latest
- dev -> ergofriend/ogp-local-checker:dev

# Dev
```
yarn
yran start
```
