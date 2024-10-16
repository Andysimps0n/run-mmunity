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
      <head>

        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ca0517e212eef9e2b05b7cb7b27e8bb4"></script>
      </head>
      <body className={poppins.className}>
        <>
        {children}
        </>
      </body>
    </html>
  );
}
