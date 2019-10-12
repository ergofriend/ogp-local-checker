You can confirm the SNS OGP with the local computer.

[日本語](https://github.com/ErgoFriend/ogp-local-checker/blob/master/README.ja.md)

# Easy Run
```
docker pull ergofriend/ogp-local-checker:prod
docker run -it -p 3000:3000 --rm ergofriend/ogp-local-checker:prod
open http://127.0.0.1:8089
```

## Tag and Brunch
- production -> ergofriend/ogp-local-checker:prod
- development -> ergofriend/ogp-local-checker

# Dev
```
yarn
yran start
```
