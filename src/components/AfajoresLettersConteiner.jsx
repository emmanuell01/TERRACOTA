import { ALFAJORES_LETTERS_DATA } from '../data/AfajoresLettersData';
import AlfajoresLetters from './AlfajoresLetters';

export default function AfajoresLettersConteiner({ selectedCategory }) {
    const filteredAlfajores = selectedCategory
        ? ALFAJORES_LETTERS_DATA.filter(alfajor => alfajor.category === selectedCategory)
        : ALFAJORES_LETTERS_DATA

    return (
        <div className="p-5 grid gap-5 sm:col-span-4">
            {filteredAlfajores.map((alfajor) => (
                <AlfajoresLetters
                    image={alfajor.image}
                    title={alfajor.title}
                    description={alfajor.description}
                    price={alfajor.price}
                    key={alfajor.title}
                />
            ))}
        </div>
    )
}