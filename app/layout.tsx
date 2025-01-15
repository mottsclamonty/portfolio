import Head from "next/head";
import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ActiveSectionContextProvider } from "@/context/ActiveSectionContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import { ThemeContextProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Connor Lamont | Engineering Portfolio",
  description:
    "Connor Lamont is a full-stack software engineer / developer with 5 years of experience",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/icons8-code-gradient-16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/icons8-code-gradient-32.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons8-code-gradient-16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons8-code-gradient-32.png"
        />
      </Head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10 dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10 dark:bg-[#976394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <DarkModeToggle />
            <Toaster position="bottom-center" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
