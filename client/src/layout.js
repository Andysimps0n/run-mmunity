import "./globals.css";
import Comunitee from "./pages/Comunitee";

import {Poppins} from 'next/font/google'
const poppins = Poppins({
  subsets : ['latin'],
  weight : ['400', '500', '600', '700']
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <>
        {children}
        </>
      </body>
    </html>
  );
}
