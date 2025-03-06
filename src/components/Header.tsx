import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.svg.png";

export default function Header() {
  return (
    <>
      <header className="ng-[#F3F8FF]">
        <div className="container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl ">
          <div className="flex items-center justify-between p-6">
            <div>
              <Image
                src={Logo}
                width={150}
                height={500}
                alt="logo"
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between min-w-[500px]">
              <ul className="flex gap-x-4 font-bold">
                <li>
                  <span>IPhone</span>
                </li>
                <li>
                  <span>Android</span>
                </li>
                <li>
                  <span>Help</span>
                </li>
                <li>
                  <span>Company</span>
                </li>
              </ul>
              <div>
                <Link href="/login">
                  <span className="text-sm w-auto h-[40px] bg-[#4335DE] rounded-2xl text-white px-6 py-2 hover:bg-blue-600 transition-all duration-250 ease-in-out transform hover:scale-105 shadow-lg">
                    Sign in
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
