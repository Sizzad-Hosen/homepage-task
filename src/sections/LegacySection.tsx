export default function LegacySection() {
  return (
    <section className="bg-[#f4f4f1] px-[14px] py-[24px] text-black">
      <div className="mx-auto max-w-[420px]">
        {/* Top Title */}
        <h2 className="text-center text-[17px] font-semibold leading-none tracking-[-0.06em]">
          Legacy In The Making
        </h2>

        {/* Black Card */}
        <div className="mt-[16px] rounded-[15px] bg-black px-[28px] pb-[26px] pt-[27px] text-white">
          {/* Image */}
          <div className="overflow-hidden rounded-[9px]">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop"
              alt="Legacy"
              className="h-[199px] w-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="mt-[14px] text-center">
            <h3 className="text-[30px] font-semibold leading-none tracking-[-0.085em] text-white">
              Pioneers
            </h3>

            <p className="mx-auto mt-[16px] max-w-[285px] text-[16px] font-medium leading-[1.25] tracking-[-0.06em] text-white">
              We’re dedicated to creating the industry narrative that others
              follow 3 years from now. We paved the path for creative SEO,
              multi-channel search with Digital PR, and Social Search and we
              will continue to do it
            </p>

            <p className="mx-auto mt-[22px] max-w-[290px] text-[16px] font-medium leading-[1.25] tracking-[-0.06em] text-white">
              We’re on a mission to be the first search-first agency to win a
              Cannes Lion disrupting the status quo.
            </p>
          </div>
        </div>

        {/* Bottom Progress Line */}
        <div className="mt-[11px] h-[4px] w-full overflow-hidden rounded-full bg-black/12">
          <div className="h-full w-[33%] rounded-full bg-black" />
        </div>
      </div>
    </section>
  );
}