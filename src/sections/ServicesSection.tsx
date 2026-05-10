const services = [
  {
    title: "Digital PR",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=300&auto=format&fit=crop",
  },
  {
    title: "Organic Social\n& Content",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=300&auto=format&fit=crop",
  },
  {
    title: "Search &\nGrowth Strategy",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=300&auto=format&fit=crop",
  },
  {
    title: "Content Experience",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300&auto=format&fit=crop",
  },
  {
    title: "Data & Insights",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop",
  },
  {
    title: "Onsite SEO",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=300&auto=format&fit=crop",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f4f4f1] px-[17px] py-[34px] text-black">
      <div className="mx-auto max-w-[420px] lg:max-w-7xl">
        {/* Heading */}
        <h2 className="text-[58px]  leading-[0.88] tracking-[-0.09em] text-black sm:text-[72px] lg:text-[110px]">
          Our
          <span className="ml-[8px] inline-flex translate-y-[-6px] overflow-hidden rounded-[8px] align-middle">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=300&auto=format&fit=crop"
              alt="Team"
              className="h-[48px] w-[54px] object-cover sm:h-[60px] sm:w-[68px]"
            />
          </span>
          <br />
          Services
        </h2>

        {/* Services List */}
        <div className="mt-[22px]">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex min-h-[76px] items-center border-b border-black/18 py-[12px]"
            >
              <div className="mr-[17px] h-[44px] w-[44px] shrink-0 overflow-hidden rounded-[7px] bg-neutral-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="whitespace-pre-line text-[29px]  leading-[0.88] tracking-[-0.095em] text-black sm:text-[34px]">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Button */}
        <a
          href="#"
          className="mt-[12px] flex h-[45px] w-full items-center justify-center rounded-full bg-white text-[15px]  tracking-[-0.05em] text-black"
        >
          View All Services <span className="ml-2 text-[15px]">↗</span>
        </a>
      </div>
    </section>
  );
}