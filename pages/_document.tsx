/* eslint-disable @next/next/no-styled-jsx-in-document */
import { createStylesServer, ServerStyles } from "@mantine/next";
import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
// optional: you can provide your cache as a first argument in createStylesServer function
const stylesServer = createStylesServer();
export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    // Add your app specific logic here

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles
          html={initialProps.html}
          server={stylesServer}
          key="styles"
        />,
      ],
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            /* Other global styles such as 'html, body' etc... */

            #__next {
              height: 100%;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}
