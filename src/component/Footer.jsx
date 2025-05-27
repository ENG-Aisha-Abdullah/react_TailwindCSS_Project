import React from "react";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { PiFacebookLogoBold } from "react-icons/pi";

function Footer() {
  return (
    <div className="bg-black text-white px-6 pt-10 bg-black-gray brightness-90">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-sm">
        {/* ACTIVISION.COM */}
        <div>
          <h1 className="text-sm  font-bold mb-3">ACTIVISION.COM</h1>
          <ul className="text-xs space-y-1">
            <li className="text-gray-400 hover:text-white cursor-pointer">ABOUT US</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">CAREERS</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">PRESS CENTER</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">RATINGS & RESOURCES</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">INVESTOR RELATIONS</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">NEWS</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h1 className="text-sm  font-bold mb-3">SUPPORT</h1>
          <ul className="text-xs space-y-1">
            <li className="text-gray-400 hover:text-white cursor-pointer">GAMES</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">SUPPORT OPTIONS</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">GAME MANUALS</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">SOFTWARE LICENSE AGREEMENTS</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">TWITTER</li>
          </ul>
        </div>

        {/* PRIVACY */}
        <div>
          <h1 className="text-sm font-bold mb-3">PRIVACY</h1>
          <ul className="text-xs space-y-1">
            <li className="text-gray-400 hover:text-white cursor-pointer">LEGAL</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">TERMS OF USE</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">PRIVACY POLICY</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">COOKIE POLICY</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">COOKIE SETTINGS</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">ESRB.ORG</li>
          </ul>
        </div>
             {/* صور التصنيفات */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 justify-items-center py-8 ">
        <img src="footerImage/esrb-privacy.png" alt="ESRB Rating" className="h-10 object-contain" />
        <img src="footerImage/usk-18.png" alt="USK 18" className="h-10 object-contain" />
        <img src="footerImage/pegionline.png" alt="PEGI Online" className="h-10 object-contain" />
        <img src="footerImage/pegi-18.png" alt="PEGI 18" className="h-10 object-contain" />
        <img src="footerImage/esrb-privacy.png" alt="ESRB Privacy" className="h-10 object-contain" />
      </div>
      </div>

 

      {/* FOLLOW + LOGO + COPYRIGHT – تحت لوحده */}
      <div className="w-full text-center pt-6 pb-10 flex justify-center items-center flex-col">
        <h2 className="text-sm font-semibold uppercase mb-3">
          FOLLOW ACTIVISION SUPPORT
        </h2>

        <div className="flex justify-center text-center space-x-4 mb-4 text-4xl">
           <PiFacebookLogoBold />
          <TiSocialTwitterCircular />
        </div>

        <img
          src="activision_logo.png"
          alt="Activision Logo"
          width="200"
          className="mx-auto mb-2"
        />

        <p className="text-xs text-gray-400 notify-cookiep text-center justify-center items-center">
          © 2025 Activision Publishing, Inc.
        </p>
      </div>
    </div>
  );
}

export default Footer;
