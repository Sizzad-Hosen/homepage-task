const works = [
  {
    years: "[2023-2025]",
    title: "SIXT",
    pill: "Car rental",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=900&auto=format&fit=crop",
  },
  {
    years: "[2021-2025]",
    title: "Dojo - B2B",
    pill: "Card Machines",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop",
  },
  {
    years: "[2023-2024]",
    title: "Magnet Trade - B2B",
    pill: "",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop",
  },
  {
    years: "[2023-2025]",
    title: "Leading E Sim brand globally",
    pill: "Esims",
    image:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=900&auto=format&fit=crop",
  },
  {
    years: "[2025]",
    title: "JD Sports",
    pill: "Trainers",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=900&auto=format&fit=crop",
  },
  {
    years: "[2019-2025]",
    title: "Parkdean Resorts",
    pill: "Easter Breaks",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
  },
  {
    years: "[2025]",
    title: "Pooky",
    pill: "Rechargeable Lights",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=900&auto=format&fit=crop",
  },
  {
    years: "[2019-2025]",
    title: "Parkdean Resorts",
    pill: "UK holidays",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900&auto=format&fit=crop",
  },
  {
    years: "[2022-2025]",
    title: "Revolution Beauty",
    pill: "",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=900&auto=format&fit=crop",
  },
  {
    years: "[2022-23]",
    title: "Lloyds Pharmacy",
    pill: "STI tests",
    image:
      "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=900&auto=format&fit=crop",
  },
  {
    years: "[2021-2023]",
    title: "PrettyLittleThing",
    pill: "Outfits",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900&auto=format&fit=crop",
  },
];

function SearchIcon() {
  return (
    <svg
      className="h-[15px] w-[15px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      className="h-[15px] w-[15px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M7 15l4-4 3 3 5-7" />
    </svg>
  );
}

export default function FeaturedWorkSection() {
  return (
    <section className="bg-[#f4f4f1] px-[14px] py-5 text-black">
      <div className="mx-auto max-w-[420px] lg:max-w-7xl">
        <div className="rounded-[24px] bg-[#101111] px-[18px] pb-[18px] pt-[15px] text-white">
          <h2 className="mb-[20px] text-[16px] font-black leading-none tracking-[-0.06em]">
            Featured Work
          </h2>

          <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-3">
            {works.map((work, index) => (
              <article
                key={`${work.title}-${index}`}
                className="group relative h-[212px] overflow-hidden rounded-[10px] bg-neutral-800 sm:h-[260px] lg:h-[360px]"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/78" />

                {work.pill && (
                  <div className="absolute right-[12px] top-[12px] flex h-[36px] items-center gap-[9px] rounded-full bg-white/40 px-[13px] text-white backdrop-blur-md">
                    <SearchIcon />

                    <span className="text-[13px] font-black leading-none tracking-[-0.06em]">
                      {work.pill}
                    </span>

                    <ChartIcon />
                  </div>
                )}

                <div className="absolute bottom-[14px] left-[12px] right-[12px]">
                  <p className="mb-[4px] text-[12px] font-black leading-none tracking-[-0.05em] text-white">
                    {work.years}
                  </p>

                  <h3 className="max-w-[260px] text-[29px] font-black leading-[0.88] tracking-[-0.095em] text-white sm:max-w-[360px] sm:text-[38px] lg:text-[48px]">
                    {work.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>

        <a
          href="#"
          className="mt-[12px] flex h-[56px] w-full items-center justify-center rounded-full bg-white text-[15px] font-black tracking-[-0.05em] text-black"
        >
          Explore Our Work <span className="ml-2">↗</span>
        </a>
      </div>
    </section>
  );
}