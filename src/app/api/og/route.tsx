import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") ?? "TrackForce";
    const description =
        searchParams.get("description") ??
        "Employee Monitoring & Productivity Software";

    const truncatedDesc =
        description.length > 120
            ? description.slice(0, 120) + "…"
            : description;

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    background: "#060D1F",
                    position: "relative",
                    overflow: "hidden",
                    padding: "60px 64px",
                    fontFamily: "sans-serif",
                }}
            >
                {/* Top-right blue orb */}
                <div
                    style={{
                        position: "absolute",
                        top: "-120px",
                        right: "-120px",
                        width: "520px",
                        height: "520px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(27,115,232,0.28) 0%, transparent 70%)",
                        display: "flex",
                    }}
                />
                {/* Bottom-left purple orb */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "-140px",
                        left: "-100px",
                        width: "480px",
                        height: "480px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(159,96,238,0.22) 0%, transparent 70%)",
                        display: "flex",
                    }}
                />

                {/* Grid overlay */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(27,115,232,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(27,115,232,0.05) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                        display: "flex",
                    }}
                />

                {/* Brand row */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #1B73E8 0%, #9F60EE 100%)",
                            display: "flex",
                        }}
                    />
                    <span
                        style={{
                            color: "rgba(255,255,255,0.9)",
                            fontSize: "22px",
                            fontWeight: 700,
                            letterSpacing: "-0.3px",
                        }}
                    >
                        TrackForce
                    </span>
                </div>

                {/* Main content */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                        marginTop: "52px",
                        position: "relative",
                        flex: 1,
                    }}
                >
                    {/* Gradient accent line */}
                    <div
                        style={{
                            width: "64px",
                            height: "4px",
                            borderRadius: "4px",
                            background: "linear-gradient(90deg, #1B73E8 0%, #9F60EE 100%)",
                            display: "flex",
                        }}
                    />

                    {/* Title */}
                    <div
                        style={{
                            fontSize: title.length > 45 ? "52px" : "64px",
                            fontWeight: 800,
                            color: "#ffffff",
                            lineHeight: 1.1,
                            letterSpacing: "-1.5px",
                            maxWidth: "960px",
                            display: "flex",
                            flexWrap: "wrap",
                        }}
                    >
                        {title}
                    </div>

                    {/* Description */}
                    <div
                        style={{
                            fontSize: "26px",
                            color: "rgba(255,255,255,0.5)",
                            lineHeight: 1.55,
                            maxWidth: "820px",
                            display: "flex",
                            flexWrap: "wrap",
                        }}
                    >
                        {truncatedDesc}
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "28px",
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                        position: "relative",
                    }}
                >
                    <span
                        style={{
                            color: "rgba(255,255,255,0.35)",
                            fontSize: "18px",
                            display: "flex",
                        }}
                    >
                        trackforce.com
                    </span>
                    <div
                        style={{
                            display: "flex",
                            padding: "10px 28px",
                            borderRadius: "100px",
                            background: "linear-gradient(90deg, #1B73E8 0%, #9F60EE 100%)",
                        }}
                    >
                        <span
                            style={{
                                color: "white",
                                fontSize: "17px",
                                fontWeight: 600,
                                display: "flex",
                            }}
                        >
                            Employee Monitoring Software
                        </span>
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
