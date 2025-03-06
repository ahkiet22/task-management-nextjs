// React-icon
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#02033B] text-white">
      <div className="container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl py-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-4">
            <h2 className="font-bold text-2xl">Scan. Detect. Remove.</h2>
            <ul className="flex gap-x-4 text-2xl">
              <li>
                <FaSquareXTwitter />
              </li>
              <li>
                <FaFacebookSquare />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
            <div className="flex gap-x-3 text-xs underline">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
            <p className="text-xs">
              Copyright © 2022 Certo Software Limited | Registered in England &
              Wales No. 10072356
            </p>
            <p className="text-xs">Designed & developed by Bigger Picture</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="font-bold text-3xl">Certo</h2>
            <div className="w-[100px] h-[1px] bg-white"></div>
            <ul className="text-[#FFC247] flex flex-col gap-y-4">
              <li>iPhone</li>
              <li>Android</li>
              <li>Help</li>
              <li>About</li>
              <li>Insights</li>
            </ul>
          </div>
          <div>
            <div className="bg-[#FFC247] w-[436px] h-auto rounded-3xl px-6 py-8 flex flex-col gap-y-2">
              <h2 className="font-bold text-black text-2xl">
                Sign up to our newsletter
              </h2>
              <p className="font-bold text-black text-xs">
                Receive the latest mobile security news, exclusive discounts &
                offers straight to your inbox!
              </p>
              <div>
                <input
                  type="text"
                  placeholder="Email address"
                  className="text-gray-500 bg-white rounded-l-2xl focus:outline-none px-4 focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-black px-4 rounded-r-2xl">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
