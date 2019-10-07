import Document, {Head, Main, NextScript} from "next/document";

export default class extends Document {
  render() {
    return (
      <html lang="ja">
        <Head>
          {/* <link href="/static/rsuite-default.min.css" rel="stylesheet" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
