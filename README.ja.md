ローカルネットワークからOGPの確認ができます。

[English](https://github.com/ErgoFriend/ogp-local-checker/blob/master/README.md)

# すぐに試す
```
docker pull ergofriend/ogp-local-checker:prod
docker run -it -p 8089:3000 --rm ergofriend/ogp-local-checker:prod
open http://127.0.0.1:8089
```

![cap](https://github.com/ErgoFriend/ogp-local-checker/blob/master/ogp.png)

## Dockerイメージ
- production -> ergofriend/ogp-local-checker:prod
- development -> ergofriend/ogp-local-checker

# 開発
```
git clone git@github.com:ErgoFriend/ogp-local-checker.git && cd ogp-local-checker
yarn
yran dev
```
