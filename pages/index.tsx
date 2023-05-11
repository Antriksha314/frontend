import AboutUs from "@/components/about-us";
import Layout from "@/components/layout";
import Service from "@/components/service";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="My Next.js App" />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutUs/>
      <Service/>
    </Layout>
  );
}
