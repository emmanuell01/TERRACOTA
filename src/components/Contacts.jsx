import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

import SectionTitle from "./SectionTitle.jsx";

export default function Contacts() {
    return (
        <section id="contacto" className="p-5 relative bg-primary">
            <SectionTitle title="Contacto" color="secondary" />
            <div>
                <h3 className="mt-6 text-secondary text-xl text-center font-bold">
                    Redes Sociales
                </h3>
                <h4 className="mb-4 text-secondary text-base text-center font-semibold">
                    Contactanos en esta Redes Sociales
                </h4>
                <div className="px-8 flex flex-col items-center">
                    <div className="w-full h-px rounded bg-secondary"></div>
                    <a href="https://ig.me/m/terracota_alfajores" target="_blank" rel="noopener noreferrer" className="text-secondary m-3 font-medium flex gap-1 transition-all duration-300 hover:scale-105"><FaInstagram className="text-2xl" />@terracota_alfajores</a>
                    <div className="w-full h-px rounded bg-secondary"></div>
                    <a href="https://www.tiktok.com/@terracota_alfajores" target="_blank" rel="noopener noreferrer" className="text-secondary m-3 font-medium flex gap-1 transition-all duration-300 hover:scale-105"><AiFillTikTok className="text-2xl" />@terracota_alfajores</a>
                    <div className="w-full h-px rounded bg-secondary"></div>
                    <a href="https://m.me/61584470065292" target="_blank" rel="noopener noreferrer" className="text-secondary m-3 font-medium flex gap-1 transition-all duration-300 hover:scale-105"><FaFacebook className="text-2xl" />@Terracota</a>
                    <div className="w-full h-px rounded bg-secondary"></div>
                </div>
                <div className="px-8 flex flex-col item-center">
                    <h3 className="mt-6 mb-4 text-secondary text-xl text-center font-bold">Numero</h3>
                    <div className="p-6 bg-secondary rounded-lg flex justify-center">
                        <a href="https://wa.me/5493885174745?text=Hola%2C%20quisiera%20hacer%20una%20consulta." target="_blank" rel="noopener noreferrer" className="text-neutral-900 text-center font-semibold flex gap-1 transition-all duration-300 hover:scale-105"><FaWhatsapp className="text-2xl" />Contactanos por WhatsApp</a>
                    </div>
                </div>
            </div>
        </section>
    )
}