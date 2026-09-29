import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">

      <Image
        src="/icon.svg"
        alt="Alliance Sourcing BD"
        width={55}
        height={55}
        className="h-14 w-14 object-contain"
        priority
      />

      <div className="flex flex-col leading-none">

        <h1 className="text-lg font-extrabold tracking-tight text-black">
          ALLIANCE
        </h1>

        <p className="mt-1 text-sm font-extrabold tracking-tight text-black">
          SOURCING BD
        </p>

      </div>

    </Link>
  );
}