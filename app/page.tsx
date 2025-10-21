import Image from "next/image";
import Link from "next/link";

export default function ProfileCard() {
  return (
    <section className="flex flex-col items-center p-4 md:p-8 lg:p-12">
      {/* Profile Card */}
      <aside className="mx-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-800 md:max-w-2xl lg:max-w-3xl">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-8 lg:gap-10">
          {/* Profile image */}
          <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-black/5 dark:ring-white/10 md:h-32 md:w-32 lg:h-36 lg:w-36">
            <Image
              src="/img/prof.png"
              alt="Profile"
              width={144}
              height={144}
              className="object-cover"
              priority
            />
          </div>

          {/* Text and links */}
          <div className="w-full text-center md:text-left">
            <h2 className="text-xl font-semibold text-black dark:text-white md:text-2xl lg:text-3xl">
              MELENDRES, DAVID KAYL
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 md:text-base lg:text-lg">
              BSTUDYANTE 2ND YIR SHEYHS
            </p>

            <div className="mt-4 flex justify-center gap-3 md:justify-start">
              <Link
                href="https://www.youtube.com/@WyvernDC"
                className="hover:scale-110 transition"
              >
                <Image
                  src="/img/YT.png"
                  alt="Youtube"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </Link>
              <Link
                href="https://github.com/WyvernDC"
                className="hover:scale-110 transition"
              >
                <Image
                  src="/img/git.png"
                  alt="GitHub"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </Link>
              <Link
                href="https://www.facebook.com/WyvernDCKaylo"
                className="hover:scale-110 transition"
              >
                <Image
                  src="/img/fb.png"
                  alt="Facebook"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* GIF below the card */}
      <div className="mt-6 flex justify-center">
        <img
          src="/img/Stoick.gif"
          alt="brokin"
          className="w-150 rounded-lg shadow-md md:w-100 lg:w-150"
        />
      </div>
    </section>
  );
}
