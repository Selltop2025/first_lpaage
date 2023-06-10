import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import Script from "next/script";
export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
                    <link href="https://cdn.jsdelivr.net/npm/beercss@3.2.9/dist/cdn/beer.min.css" rel="stylesheet"/>

                        <Script
                        src="https://cdn.jsdelivr.net/npm/beercss@3.2.9/dist/cdn/beer.min.js"
                        strategy="lazyOnload"
                        type={"module"}
                        onLoad={() =>
                            console.log(``)
                        }
                    />

                    <Script
                        src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@0.1.7/dist/cdn/material-dynamic-colors.min.js"
                        strategy="lazyOnload"
                        type={"module"}
                        onLoad={() =>
                            console.log(``)
                        }
                    />

                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}