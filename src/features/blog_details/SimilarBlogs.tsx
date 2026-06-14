import { getSimilarBlogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";

const SimilarBlogs = ({ currentSlug }: { currentSlug: string }) => {
    const similarBlogs = getSimilarBlogs(currentSlug, 3);
    return (
        <section className="relative overflow-hidden py-12 md:py-24 px-4">
            <div className="max-w-[1300] mx-auto  relative rounded-3xl overflow-hidden bg-[url('/simmilerBlog.png')] bg-no-repeat bg-cover bg-center p-6 md:p-14" style={
                {
                    boxShadow: "0 0 34.5px 0 rgba(0, 0, 0, 0.13)"
                }
            }>
                {/* left glow */}
                <div className="absolute -left-20 top-1/3 w-[320px] h-[320px] bg-blue-500/30 rounded-full blur-[110px]" />

                <div className="relative z-10">
                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0a0a1a] mb-10">
                        Similar blog you can explore
                    </h2>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {similarBlogs.map((card) => (
                            <Link
                                key={card.id}
                                href={`/blog-details/${card.slug}`}
                                className="group shadow-lg rounded-2xl overflow-hidden  hover:shadow-md transition-shadow block"
                                style={{ background: "var(--Linear, linear-gradient(270deg, rgba(255, 255, 255, 0.39) 0%, rgba(210, 228, 255, 0.39) 100%))", boxShadow: "0 0 34.5px 0 rgba(0, 0, 0, 0.13)" }}
                            >
                                <div className="relative w-full h-50 perspective-[1000px]">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-800 ease-in-out group-hover:transform-[rotateY(180deg)]"
                                    />
                                    <span className="absolute top-3 right-3 text-xs font-semibold content_title_text_new backdrop-blur bg-[#FFFFFF54]  font-medium px-3 py-1.5 rounded-full">
                                        {card.tag}
                                    </span>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-[17px] font-semibold text-gray-900 leading-snug mb-3">
                                        {card.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-xs text-gray-500">
                                        <span className="flex items-center gap-1.5">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                <line x1="16" y1="2" x2="16" y2="6" />
                                                <line x1="8" y1="2" x2="8" y2="6" />
                                                <line x1="3" y1="10" x2="21" y2="10" />
                                            </svg>
                                            {card.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                            {card.author}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SimilarBlogs;
