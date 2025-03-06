import Image from "next/image";
import Link from "next/link";
import Android from "../../public/images/android-dashboard-certo-2.png.png";

export default function Home() {
  return (
    <>
      <div className="flex items-start justify-around">
        <div className="max-w-[400px] py-3">
          <h1 className="font-bold text-4xl text-[#02033B]">
            Your mobile privacy is our mission
          </h1>
          <p className="text-[14px] mt-10 text-[#02033B]">
            Think your phone has been hacked? Our trusted apps make it easy for
            you to scan, detect and remove threats from your iPhone and Android
            devices.
          </p>
          <div className="flex gap-x-4 mt-24">
            <Link href="/iphone">
              <span className="bg-[#FFC247] text-[14px] text-[#02033B] font-semibold px-4 py-1.5 rounded-2xl">Get Certo for iPhone</span>
            </Link>
            <Link href="/android">
              <span className="text-[#02033B] text-[14px] font-semibold px-4 py-1.5 rounded-2xl border-[1px] border-t-cyan-900">Get Certo for Android</span>
            </Link>
          </div>
        </div>
        <div>
          <Image width={200} height={500} src={Android} alt="android" />
        </div>
      </div>
    </>
  );
}
