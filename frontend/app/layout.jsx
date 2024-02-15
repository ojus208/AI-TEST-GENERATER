
import "./globals.css";
import Sidenavleft from "./sections/sidenavleft";
// import Sidenavright from "./sections/sidenavright";

export const metadata = {
  title: "AI Test Bot",
  description: "Generate test using aftificial intelligence",
};

import { Quecontextprovider } from '@/app/context/context'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black"><div className="flex gap-3 w-full justify-between text-white px-2">
        <div className="w-fit sm:max-w-[20vw] py-2">
        <Sidenavleft />
        </div>
        <div className="w-full min-h-screen py-2">
        <Quecontextprovider >
          {children}
        </Quecontextprovider>
        </div>
        {/* <div className="w-fit sm:min-w-[20vw] py-2">
        <Sidenavright />
        </div> */}
      </div></body>
    </html>
  );
}
