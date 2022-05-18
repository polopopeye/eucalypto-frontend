/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const currentTheme = 'theme-default';

    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
          <link
            rel="stylesheet"
            href="https://unpkg.com/flickity@2/dist/flickity.min.css"
          ></link>
          <script
            src="https://cdn.tiny.cloud/1/4ge8itj7zovsnq0e89lw5enf1fudbp3nyiin4xdch5zmnzjq/tinymce/5/tinymce.min.js"
            referrerPolicy="origin"
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-X9780PKFXK"
          ></script>
        </Head>
        <body className={currentTheme}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
