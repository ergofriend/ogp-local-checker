You can confirm the SNS OGP with the local computer.

[日本語](https://github.com/ErgoFriend/ogp-local-checker/blob/master/README.ja.md)

# Easy Run
```
docker pull ergofriend/ogp-local-checker:prod
docker run -it -p 8089:3000 --rm ergofriend/ogp-local-checker:prod
open http://127.0.0.1:8089
```

![cap](https://github.com/ErgoFriend/ogp-local-checker/blob/master/ogp.png)

## Tag and Brunch
- production -> ergofriend/ogp-local-checker:prod
- development -> ergofriend/ogp-local-checker

# Dev
```
git clone git@github.com:ErgoFriend/ogp-local-checker.git && cd ogp-local-checker
yarn
yran start
```
