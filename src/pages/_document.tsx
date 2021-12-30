import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:site_name" content="feliperosa.dev" />
          <meta property="og:title" content="Felipe Rosa" />
          <meta property="og:description" content="portfolio" />
          <meta
            property="og:image"
            itemProp="image"
            content="https://khubfezin.s3.us-west-1.amazonaws.com/%2Bpenguin-1319972675762699888_256.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSJIMEYCIQD5HTiStIWWva1yqwzKrWLXM5YEUuRd3Hff%2FL88QJJuEAIhAMRZ8KoQEjTWd%2B%2FgxZHhNgRZUDr6%2FrFSBlbB6IQOnOxcKv8CCPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjE3MzAxMDYwNjUyIgzAKGpvmeTUJy5S26Mq0wJuuAgCni67jKAvK8SsTJG7QVfvSDktmWr2y%2BMF1tGTmKdKSBt1sa7xLoAVJY8rzmhk68K%2FZwya%2B%2FaQ%2FSLAuXAdg8wHQVwTfy5cLArc0iF%2F6C9GSLDP%2F7L6RaeX6O5SIS9yiEb7480dlkCi3tbLVRUnWzCrS1AvQfojMNons22Z77hQTmla6x9N2hOCT7pgBH%2BX1yGeS0usEIuV4ANt9H%2BKZDMHH01r9gI7xoHY7e71gBJAzgbnfHx6h5F6zOOaK2Bz2bbjA3anWWcqbxLLarI6Lr8ghD3f8WLFvxbgfnZPlV2GXfUMzfsYa2%2Fz2rD8Me2YK1gpctm7owCb31iSRG3q1ap7zYdv5R%2FFfTOYxhrOvUJ6JbMcNxXf1BJvzEA0uJSqrNIDVY1wgeT1JcDKU2sjHT9795ezUh2kCY%2BNwIWwVHOirQx9YZ3iVF2dujeNUKiN4pEwyJO3jgY6sgKJ%2Fx%2Flv7AocIkikQQ0yZ%2F0pxJBomBXGSMmF7xGuXbbQeu7daqDgTJIst6vfIzsLIx29Zi9ZaNnqn5x08u7VWBfXw800egUPZX3crnrfxNYlFvQcmCMIX4dxwNZkTNI5RUQOT8Gh%2F%2FZNM3nQfYicML%2FUhqZei%2Bpo%2FQ7u4uoGqDQ70gowEkqB0F6nnROTMzre82Evpg1Kkak1Pk8GaP1bE0mBC2c4MhdAe5oniZn5O1XF2qR2zy3faP0RlI6Q%2FWCknXw90q%2Btg36Z2sFbjXYzHqsIBSUibqjAEuJKQD1TYPIH4a3FaRzKtrT7%2BSehofJdGk5tWsq%2BBhoHffqX9aTlRtwvs%2Bd9veF1QgG4Pmf7xHMYkC4Gw%2FSt4xG2ZcrQ5BAbw7gtLSeKoGSvNBPysX0SKaxWKs%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211230T150350Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAY7OQCVQWDHCFBP6N%2F20211230%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=c4d38c1d7eaf996677a635a8bb76dfa323ec5b2f661c72117b0dfaba3645bd9f"
          />
          <meta property="og:type" content="website" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="https://rocketseat.com.br/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
