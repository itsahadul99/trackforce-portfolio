import { getSimilarBlogs } from "@/data/blogs";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SimilarBlogs = ({ currentSlug }: { currentSlug: string }) => {
    const similarBlogs = getSimilarBlogs(currentSlug, 3);
    return (
        <section className="relative overflow-hidden py-24 px-4">
            <div className="max-w-[1300] mx-auto  relative rounded-3xl overflow-hidden bg-[url('/similerBlog.png)] bg-no-repeat bg-cover bg-center p-10 md:p-14" style={
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
                        {similarBlogs.map((blog) => (
                            <Link
                                key={blog.id}
                                href={`/blog-details/${blog.slug}`}
                                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow block"
                            >
                                <div className="relative h-[220px] w-full perspective-[1000px]">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-800 ease-in-out group-hover:transform-[rotateY(180deg)]"
                                    />
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                                        <p className="text-[#0C4EDB] text-xs font-semibold">
                                            {blog.tag}
                                        </p>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-[#0a0a1a] font-bold text-base md:text-lg mb-4 leading-snug">
                                        {blog.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-gray-500 text-xs">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={14} />
                                            <span>{blog.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <User size={14} />
                                            <span>{blog.author}</span>
                                        </div>
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
