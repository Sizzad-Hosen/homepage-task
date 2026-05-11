import { socialLinks, leftLinks, rightLinks, locations } from "@/data/footer.data";

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#f4f4f1] px-[7px] pb-[8px] pt-0 text-white">
      <div className="mx-auto max-w-[420px] overflow-hidden rounded-t-[24px] rounded-b-[20px] bg-[#101111] px-[15px] pb-[24px] pt-[54px]">
        {/* Newsletter */}
        <h2 className="text-[21px] font-bold leading-[1] tracking-[-0.075em] text-white">
          Stay updated with Rise news
        </h2>

        <div className="mt-[17px] flex h-[49px] items-center rounded-full bg-[#2c2c2c] pl-[20px] pr-[8px]">
          <input
            type="email"
            placeholder="Your Email Address"
            className="h-full min-w-0 flex-1 bg-transparent text-[16px] font-semibold tracking-[-0.055em] text-white outline-none placeholder:text-white/45"
          />

          <button
            type="button"
            aria-label="Submit email"
            className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full bg-[#9ff6dc] text-black"
          >
            <ArrowIcon className="h-[18px] w-[18px]" />
          </button>
        </div>

        {/* Social Icons */}
        <div className="mt-[12px] flex items-center gap-[5px]">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex h-[19px] min-w-[41px] items-center justify-center gap-[4px] rounded-full bg-white px-[7px] text-black"
            >
              <span className="text-[12px] font-bold leading-none">{item}</span>
              <ArrowIcon className="h-[10px] w-[10px]" />
            </a>
          ))}
        </div>

        {/* Main Links */}
        <div className="mt-[49px] grid grid-cols-2 gap-0">
          <div className="border-l border-white/15 pl-[12px]">
            {leftLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block text-[17px] font-bold leading-[1.62] tracking-[-0.065em] text-white"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="border-l border-white/15 pl-[12px]">
            {rightLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block text-[17px] font-bold leading-[1.62] tracking-[-0.065em] text-white"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div className="mt-[38px] border-l border-white/15 pl-[12px]">
          {locations.map((location) => (
            <a
              key={location}
              href="#"
              className="block text-[17px] font-bold leading-[1.62] tracking-[-0.065em] text-white"
            >
              {location}
            </a>
          ))}
        </div>

        {/* Logo */}
        <div className="mt-[42px]">
          <div className="relative inline-flex items-end">
            <h3 className="text-[48px] font-normal leading-none tracking-[-0.09em] text-white">
              Rise at Seven
            </h3>

            <span className="mb-[9px] ml-[3px] text-[12px] font-bold leading-none">
              ®
            </span>

            <span className="absolute bottom-[4px] right-[-2px] h-[3px] w-[43px] origin-right rotate-[22deg] rounded-full bg-white" />
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-[41px] text-[10px] font-semibold leading-[1.95] tracking-[-0.04em] text-white">
          <p>© 2025 Rise at Seven Ltd. All rights reserved&nbsp; •</p>

          <p>
            Company Number 11955187&nbsp; •&nbsp; VAT Registered GB 322402945
          </p>

          <p>
            •&nbsp;
            <a href="#" className="underline-offset-2 hover:underline">
              Privacy Policy
            </a>
            &nbsp; •&nbsp;
            <a href="#" className="underline-offset-2 hover:underline">
              Terms & conditions
            </a>
            &nbsp; •
          </p>

          <p className="mt-[7px]">Website Made Sizzad Hosen</p>
        </div>
      </div>
    </footer>
  );
}