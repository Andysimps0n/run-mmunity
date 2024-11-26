'use client'

import "./globals.css";
import store from "./store";
import { Provider } from "react-redux";


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
          <Provider store={store}>
            {children}
          </Provider>
        </>
      </body>
    </html>
  );
}
