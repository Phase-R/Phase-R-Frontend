"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBasketball, faFutbol } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fixed inset-y-0 left-0 z-50 block bg-black text-white transition-all transform duration-300 ease-in-out w-[8vb]">
      <div className="flex">
        <button className="text-white focus:outline-none">
          <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <a href="/" className="block py-2">
          <img src="/landing_page/phase-r.svg" alt="phase-r logo" className="h-12 w-12" />
        </a>
      </div>
      <nav className="px-4 p-2">
        <ul className="space-y-2">
          <li>
            <FontAwesomeIcon icon={faInstagram} className="h-12 w-12" />
          </li>
          <li>
            <FontAwesomeIcon icon={faXTwitter} className="h-12 w-12" />
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} className="h-12 w-12" />
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} className="h-12 w-12" />
          </li>
          <li onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
                <img src="/landing_page/close.avif" alt="close icon" className="h-12 w-12" />
            ) : (
              <img src="/landing_page/menu.png" alt="menu icon" className="h-12 w-12" />
            )}
          </li>
          <ul className={`${showMenu ? 'visible opacity-100' : 'invisible opacity-0'} transition duration-300 ease-in-out`}>
            <li>
              <FontAwesomeIcon icon={faFutbol} className="h-12 w-12" />
            </li><br />
            <li>
              <img src="/landing_page/cricket.png" alt="badminton icon" className="h-12 w-12" />
            </li><br />
            <li>
              <img src="/landing_page/basketball.png" alt="badminton icon" className="h-12 w-12" />
            </li><br />
            <li>
              <img src="/landing_page/badminton.png" alt="badminton icon" className="h-12 w-12" />
            </li><br />
            <li>
              <img src="/landing_page/muay-thai.png" alt="martial arts icon" className="h-12 w-12" />
            </li><br />
            <li>
              <img src="/landing_page/nutrition.png" alt="nutrition icon" className="h-12 w-12" />
            </li><br />
            <li>
              <img src="/landing_page/cardio.png" alt="badminton icon" className="h-12 w-12" />
            </li><br />
            <li>
              <img src="/landing_page/dumbbell.png" alt="gym icon" className="h-12 w-12" />
            </li><br />
            <li>
              <FontAwesomeIcon icon={faBasketball} className="h-12 w-12" />
            </li><br />
          </ul>
        </ul>
      </nav>
    </div>
  );
}
