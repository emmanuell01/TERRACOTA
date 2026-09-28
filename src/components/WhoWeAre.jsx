import photograph_cecia_rocio_oriana from "../assets/photographs/fotografia-cecia-rocio-oriana.png"
import semillas from "../assets/photographs/semillas.png"

import SectionTitle from "./SectionTitle.jsx";
import WavesDivider from "./ShapeDividers/WavesDivider.jsx";

export default function WhoWeAre() {
    return (
        <section id="quienes-somos" className="p-5 relative bg-primary">
            <WavesDivider color="background" />
            <div>
                <SectionTitle title="Quiénes Somos" color="secondary" />
            </div>
            <div>
                <p className="text-secondary text-center">¡Hola!, somos Cesia, Rocío y Oriana, tres almas apasionadas por la repostería artesanal.</p>
                <img src={photograph_cecia_rocio_oriana} alt="Nosotras" className="my-5 w-[clamp(2rem,100%,30rem)] object-cover rounded" />
                <p className="text-secondary text-center">Hoy damos vida a un proyecto que llevábamos en el corazón: crear alfajores únicos, llenos de <b>sabor</b>, <b>textura</b> y <b>amor</b>.</p>
                <h3 className="m-3 mt-6 text-secondary text-xl text-center font-bold">¿Por qué Terracota?</h3>
                <p className="text-secondary text-center">Este nombre nace de nuestra inspiración en la tierra, la calidez y la artesanía. Al igual que la arcilla terracota que se moldea con cuidado y se transforma en piezas únicas, nuestros alfajores se elaboran a mano.</p>
                <img src={semillas} alt="Semillas" className="my-5 w-[clamp(2rem,100%,30rem)] object-cover rounded" />
                <p className="text-secondary text-center">Con ingredientes naturales y procesos tradicionales. Cada bocado es un homenaje a la simplicidad, la calidad y la conexión con lo auténtico.</p>
            </div>
        </section>
    )
}