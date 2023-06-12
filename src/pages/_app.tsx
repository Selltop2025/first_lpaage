



import "../styles/globals.css"
import {Inter} from 'next/font/google'
import {AppProps} from "next/app";
import React, {useEffect} from "react";
import Head from "next/head";

const inter = Inter({subsets: ['latin']})

export default function MyApp({ Component, pageProps }: AppProps) {



    return (
   <>
        <Head>
            <meta charSet="UTF-8"/>
            <meta lang="pt-PT"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <meta name="google" content="notranslate"/>
            <title>Sell Top</title>
        </Head>
        <Component {...pageProps} />


    </>
    )

}



