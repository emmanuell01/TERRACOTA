import terracota_main_logo from "../assets/terracota-logos/terracota-main-logo.png"
import { FOOTER_DATA } from "../data/FooterData.js"

import WavesRedDivider from "./ShapeDividers/WavesRedDivider.jsx"

function InformationFooter({ title, links }) {
    return (
        <div className="mb-5 flex flex-col items-center">
            <p className="mb-1 text-lg text-secondary text-center font-semibold">{title}</p>
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    target={link.url.startsWith('https://') ? '_blank' : undefined}
                    rel={link.url.startsWith('https://') ? 'noopener noreferrer' : undefined}
                    className="mb-1 text-base text-center text-secondary underline font-work-sans transition-all duration-300 hover:scale-110"
                >
                    {link.name}
                </a>
            ))}
        </div>
    )
}

export default function Footer() {
    return (
        <footer className="p-5 relative bg-primary-dark">
            <WavesRedDivider />
            <div className="flex flex-col items-center">
                <img src={terracota_main_logo} alt="Terracota Logo" className="mt-5 w-50" />
            </div>
            <div>
                {FOOTER_DATA.map((section) => {
                    return (
                        <InformationFooter key={section.title} title={section.title} links={section.links} />
                    )
                })}
                <div>
                    <p className="m-4 text-lg text-secondary text-center font-work-sans font-medium">© 2026 Terracota Alfajores. Todos los derechos reservados.</p>
                    <p className="text-center text-secondary font-work-sans font-base">Designed & Developed by Emmanuel Ontiveros</p>
                </div>
            </div>
        </footer>
    )
}