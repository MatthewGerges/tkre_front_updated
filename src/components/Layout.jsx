import React from "react";
import Head from "next/head";
import Sidebar from "./Sidebar";


const Layout = ({ children, title }) => {
  title = `Real State GPT - ${title}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="ChatGPT application built with OpenAI API, Next.js, TypeScript, and TailwindCSS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJmNnMwaGJMelpSdEY3cGwwaGlBbEliNFNYaCJ9?width=200" />
      </Head>


      <main className=" md:pt-0  flex flex-row  mr-4 h-[90vh] md:h-screen ">
       
      <Sidebar />


        <div className="flex-1  pb-2  m-4 mt-24 md:m-4 bg-accents-0 rounded-lg shadow-lg hide-scrollbar ml-8">
          <div className="flex flex-col h-full">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;

