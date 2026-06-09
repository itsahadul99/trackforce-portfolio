"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState, useEffect } from "react";
import { blogs as cards } from "@/data/blogs";

const filters = ["All Post", "Software", "Uncategorized", "Category", "TrackForce"];

type SortOption = "newest" | "oldest" | "title-asc" | "title-desc";

const sortOptions: { value: SortOption; label: string }[] = [
    { value: "newest", label: "Newest first" },
    { value: "oldest", label: "Oldest first" },
    { value: "title-asc", label: "Title (A–Z)" },
    { value: "title-desc", label: "Title (Z–A)" },
];

const BlogCards = () => {
    const [activeFilter, setActiveFilter] = useState<string>("All Post");
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOpen, setSortOpen] = useState(false);
    const [sortBy, setSortBy] = useState<SortOption>("newest");

    const sortRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLDivElement>(null);

    // Close dropdowns on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
                setSortOpen(false);
            }
            if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
                if (!searchQuery) setSearchOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [searchQuery]);

    const visibleCards = useMemo(() => {
        let result = [...cards];

        // Filter by tag
        if (activeFilter !== "All Post") {
            result = result.filter(
                (c) => c.tag.toLowerCase() === activeFilter.toLowerCase()
            );
        }

        // Search filter
        const q = searchQuery.trim().toLowerCase();
        if (q) {
            result = result.filter(
                (c) =>
                    c.title.toLowerCase().includes(q) ||
                    c.author.toLowerCase().includes(q) ||
                    c.tag.toLowerCase().includes(q)
            );
        }

        // Sort
        result.sort((a, b) => {
            switch (sortBy) {
                case "newest":
                    return (
                        new Date(b.date).getTime() - new Date(a.date).getTime() ||
                        b.id - a.id
                    );
                case "oldest":
                    return (
                        new Date(a.date).getTime() - new Date(b.date).getTime() ||
                        a.id - b.id
                    );
                case "title-asc":
                    return a.title.localeCompare(b.title);
                case "title-desc":
                    return b.title.localeCompare(a.title);
                default:
                    return 0;
            }
        });

        return result;
    }, [activeFilter, searchQuery, sortBy]);

    const activeSortLabel =
        sortOptions.find((o) => o.value === sortBy)?.label ?? "Sort by";

    return (
        <section className="bg-[#DEEDFF]  lg:w-[1200] xl:w-[1300] mx-auto p-14 rounded-2xl shadow my-24">
            <div className="max-w-[1200px] xl:max-w-[1300px] mx-auto ">
                {/* Filter bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                    <div className="flex flex-wrap items-center gap-3">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                                    activeFilter === f
                                        ? "bg-[#5f6bff] text-white border-[#5f6bff]"
                                        : "bg-white text-gray-700 border-gray-200 hover:border-[#5f6bff]"
                                }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        {/* Search */}
                        <div ref={searchRef} className="relative">
                            <div
                                className={`flex items-center bg-white border border-gray-200 rounded-full transition-all duration-300 ${
                                    searchOpen ? "w-56 px-3" : "w-10"
                                } h-10`}
                            >
                                <button
                                    onClick={() => setSearchOpen((v) => !v)}
                                    className="w-10 h-10 -ml-[1px] flex items-center justify-center text-gray-600 flex-shrink-0"
                                    aria-label="Toggle search"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8" />
                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    </svg>
                                </button>
                                {searchOpen && (
                                    <input
                                        autoFocus
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search posts..."
                                        className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
                                    />
                                )}
                                {searchOpen && searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="text-gray-400 hover:text-gray-600 text-lg leading-none px-1"
                                        aria-label="Clear search"
                                    >
                                        ×
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Sort by */}
                        <div ref={sortRef} className="relative">
                            <button
                                onClick={() => setSortOpen((v) => !v)}
                                className="px-4 h-10 rounded-full bg-white border border-gray-200 text-sm text-gray-700 flex items-center gap-2 hover:border-[#5f6bff]"
                            >
                                {activeSortLabel}
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={`transition-transform ${sortOpen ? "rotate-180" : ""}`}
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>
                            {sortOpen && (
                                <div className="absolute right-0 top-12 z-20 w-48 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                                    {sortOptions.map((opt) => (
                                        <button
                                            key={opt.value}
                                            onClick={() => {
                                                setSortBy(opt.value);
                                                setSortOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 ${
                                                sortBy === opt.value
                                                    ? "text-[#5f6bff] font-medium"
                                                    : "text-gray-700"
                                            }`}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Cards grid */}
                {visibleCards.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visibleCards.map((card) => (
                            <Link
                                key={card.id}
                                href={`/blog-details/${card.slug}`}
                                className="group shadow-lg bg-[#fbf9f4] rounded-2xl overflow-hidden  hover:shadow-md transition-shadow block"
                            >
                                <div className="relative w-full h-50 perspective-[1000px]">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-800 ease-in-out group-hover:transform-[rotateY(180deg)]"
                                    />
                                    <span className="absolute top-3 right-3 text-xs font-semibold  text-[#5f6bff] backdrop-blur-sm bg-white/80  font-medium px-3 py-1 rounded-full">
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
                ) : (
                    <div className="text-center py-16 text-gray-500">
                        No posts found matching your criteria.
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogCards;
