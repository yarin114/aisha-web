import SectionHeading from "./SectionHeading";

const HENNA_VIDEOS = [
  "/henna/henna-v1.mp4",
  "/henna/henna-v2.mp4",
  "/henna/henna-v3.mp4",
  "/henna/henna-v4.mp4",
  "/henna/henna-v5.mp4",
  "/henna/henna-v6.mp4",
];

export default function VideoGrid() {
  return (
    <section className="pb-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading
          eyebrow="רגעים מהשטח"
          title="תראי את זה קורה באמת"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mt-12">
          {HENNA_VIDEOS.map((src, i) => (
            <div
              key={src}
              className="rounded-[18px] overflow-hidden aspect-[9/16] bg-henna-deep border-[6px] border-white outline-[1.5px] outline outline-gold-bright outline-offset-4 shadow-[0_18px_40px_rgba(61,16,25,0.18)]"
            >
              <video
                src={src}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover block"
                aria-label={`סרטון מאירוע חינה ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
