ローカルネットワークからOGPの確認ができます。

[English](https://github.com/ErgoFriend/ogp-local-checker/blob/master/README.md)

# すぐに試す
```
docker pull ergofriend/ogp-local-checker
docker run -it -p 8089:3000 ergofriend/ogp-local-checker
open http://127.0.0.1:8089
```

## Dockerイメージ
- prod -> ergofriend/ogp-local-checker:latest
- dev -> ergofriend/ogp-local-checker:dev

# 開発
```
git clone git@github.com:ErgoFriend/ogp-local-checker.git
cd ogp-local-checker
yarn
yran dev
```
