import { useState } from "react"
import { ALFAJORES_FILTERING_BUTTON_DATA } from "../data/AlfajoresFilteringButtonData.js"
import AlfajoresFilteringButton from "./AlfajoresFilteringButton.jsx"
import SectionTitle from "./SectionTitle.jsx"
import AfajoresLettersConteiner from "./AfajoresLettersConteiner.jsx"

export default function AlfajoresFilteringButtonConteiner() {
    const [selectedCategory, setSelectedCategory] = useState(null)

    const handleFilterClick = (categoryName) => {
        setSelectedCategory(categoryName === selectedCategory ? null : categoryName)
    }

    return (
        <section id="productos">
            <SectionTitle title="Nuestros Productos" color="neutral" />
            <div className="sm:grid sm:grid-cols-6">
                <div className="grid gap-2 p-5 sm:col-span-2 sm:flex sm:flex-col">
                    {ALFAJORES_FILTERING_BUTTON_DATA.map((button) => (
                        <AlfajoresFilteringButton
                            nameButton={button.name}
                            key={button.name}
                            onClick={() => handleFilterClick(button.category)}
                            isActive={selectedCategory === button.category}
                        />
                    ))}
                </div>
                <AfajoresLettersConteiner selectedCategory={selectedCategory} />
            </div>
        </section>
    )
}