import '@styles/globals.css'

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default Application
