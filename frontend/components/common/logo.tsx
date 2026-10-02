import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      {/* Alliance Apparels Ltd. */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo2.png"
          alt="Alliance Apparels Ltd."
          width={44}
          height={34}
          className="h-8 w-11 object-contain"
          priority
        />

        <div className="leading-[1.05] tracking-[0.04em]">
          <p className="text-[11px] font-bold text-slate-900">
            ALLIANCE
          </p>
          <p className="text-[11px] font-normal text-slate-900">
            APPARELS LTD.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-4 h-8 w-px bg-slate-300" />

      {/* Alliance Sourcing BD */}
      <div className="flex items-center gap-2">
        <Image
          src="/icon.svg"
          alt="Alliance Sourcing BD"
          width={38}
          height={38}
          className="h-8 w-8 object-contain"
          priority
        />

        <div className="leading-[1.05] tracking-[0.04em]">
          <p className="text-[11px] font-bold text-slate-900">
            ALLIANCE
          </p>
          <p className="text-[11px] font-normal text-slate-900">
            SOURCING BD
          </p>
        </div>
      </div>
    </Link>
  );
}