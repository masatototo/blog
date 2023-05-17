import Head from "next/head";

// サイトに関する情報
import { siteMeta } from "lib/constants";
const { siteTitle, siteDesc, siteUrl, siteLocal, siteType, siteIcon } = siteMeta

export default function Meta({ pageTitle }) {
    return (
        <Head>
            <title>{pageTitle}</title>
            <meta property="og:title" content={pageTitle} />
        </Head>
    )
}