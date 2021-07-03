import {AppProps} from 'next/app'
import Head from 'next/head'
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

const App = ({Component, pageProps}: AppProps) => (
    <>
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>RicBlog</title>
            <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon"/>
            {/*<link rel="manifest" href="/manifest.json" />*/}
        </Head>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
    </>
)

export default App