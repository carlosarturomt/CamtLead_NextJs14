import { Inter } from "next/font/google";
import Head from "next/head";
import Navigation from "@/components/organisms/Navigation";
import "../styles/globals.css";
import { UserDataProvider } from "@/contexts/userDataContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CamtLead",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <UserDataProvider>
      <html lang="es">
        <Head>
          {/* code */}
        </Head>
        <body className={`${inter.className} transition-colors duration-1000 bg-purple-550 dark:bg-purple-1000 `}>
          <Navigation />
          {children}
        </body>
      </html>
    </UserDataProvider>
  );
}
