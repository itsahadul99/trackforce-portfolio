import { BlogPost } from "@/data/blogs";

const BlogDetailsContent = ({ blog }: { blog: BlogPost }) => {
    return (

        <section className="relative overflow-hidden bg-[#0a0a1a] py-20">
            <div className="  lg:w-[1200] xl:w-[1300] mx-auto">
                {/* Background glow effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/20 rounded-full blur-[140px]" />
                    <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-purple-600/15 rounded-full blur-[100px]" />
                </div>

                <div className="relative z-10 text-white w-full">
                    {blog.content.map((block, idx) => {
                        switch (block.type) {
                            case "p":
                                return (
                                    <p
                                        key={idx}
                                        className={`text-gray-300 text-base leading-relaxed ${
                                            // give the last paragraph in a section a larger bottom margin
                                            blog.content[idx + 1]?.type === "h2" ||
                                                blog.content[idx + 1]?.type === "h3"
                                                ? "mb-10"
                                                : "mb-4"
                                            }`}
                                    >
                                        {block.text}
                                    </p>
                                );
                            case "h2":
                                return (
                                    <h2
                                        key={idx}
                                        className="text-2xl md:text-3xl font-bold mb-4"
                                    >
                                        {block.text}
                                    </h2>
                                );
                            case "h3":
                                return (
                                    <h3
                                        key={idx}
                                        className="text-xl md:text-2xl font-bold mb-4"
                                    >
                                        {block.text}
                                    </h3>
                                );
                            case "ul":
                                return (
                                    <ul
                                        key={idx}
                                        className="list-disc list-inside text-gray-300 text-base leading-relaxed mb-4 space-y-1 pl-2"
                                    >
                                        {block.items.map((it, i) => (
                                            <li key={i}>{it}</li>
                                        ))}
                                    </ul>
                                );
                            default:
                                return null;
                        }
                    })}
                </div>
            </div>
        </section>
    )
}

export default BlogDetailsContent
