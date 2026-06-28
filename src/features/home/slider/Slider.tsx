import MarqueeSlider from "./MarqueeSlider";
import { getSliderLogos } from "@/lib/cms";

const DEFAULT_LOGOS = [
  { id: "1", image: "/akij_ibos.png",   url: "https://ibos.io/",                  alt: "AKIJ iBOS",   order: 0, active: true },
  { id: "2", image: "/people_desk.png", url: "https://app.peopledesk.io/",        alt: "People Desk", order: 1, active: true },
  { id: "3", image: "/managerium.png",  url: "https://mgm.ibos.io/",              alt: "Managerium",  order: 2, active: true },
  { id: "4", image: "/aero.png",        url: "https://aeroleads.com",             alt: "AeroLeads",   order: 3, active: true },
  { id: "5", image: "/aerodrop.png",    url: "https://aerodrop.io",               alt: "AeroDrop",    order: 4, active: true },
  { id: "6", image: "/creatibuzz.png",  url: "https://creatibuzz.com",            alt: "CreatiBuzz",  order: 5, active: true },
  { id: "7", image: "/travilo.png",     url: "https://travilo.io",                alt: "Travilo",     order: 6, active: true },
];

export default async function Slider() {
  const cmsLogos = await getSliderLogos();
  const logos = cmsLogos.length > 0 ? cmsLogos : DEFAULT_LOGOS;

  return <MarqueeSlider logos={logos} />;
}
