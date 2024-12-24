import Combiner from "@/components/core/combiner";
import Products from "@/components/api/products";
import Footer from "@/components/core/footer";
import Script from "next/script";
import Head from "next/head";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
export default function Home() {
  return (
    <>
    
      {/* Meta data for icon and title */}
      <Head>
        <title>Your Website Title</title>
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </Head>

      {/* Sellix embed CSS */}
      <link
        href="https://cdn.sellix.io/static/css/embed.css"
        rel="stylesheet"
      />

      {/* Load the Sellix embed script after the page is interactive */}
      <Script
        src="https://cdn.sellix.io/static/js/embed.js"
        strategy="beforeInteractive"
        async
      />

      <Combiner />
      <Products />
      <Link href="https://www.google.com" className="bg-sky-500 p-2 shadow-xl text-white rounded-full fixed bottom-[70px] right-4">
      <FaTelegramPlane size={24} />
      </Link>
      <Link href="https://www.google.com" className="bg-indigo-600 p-2 shadow-xl text-white rounded-full fixed bottom-4 right-4">
      <FaDiscord size={24} />
      </Link>
      <Footer />
    </>
  );
}
