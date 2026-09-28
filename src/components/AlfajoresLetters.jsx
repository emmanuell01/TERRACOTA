import { useState } from "react";
import { TbTriangleFilled } from "react-icons/tb";
import { LuTriangle, LuShoppingBasket } from "react-icons/lu"
import { useCart } from "../context/useCart.js";

export default function AlfajoresLetters({ image, title, description, price }) {
  const [open, setOpen] = useState(false);
  const { cart, setItemQuantity } = useCart()

  // Inicializamos desde el carrito global (por si el usuario cierra y vuelve a ver)
  const cartItem = cart.find(item => item.title === title)
  const add = cartItem?.quantity || 0

  const handleAdd = () => {
    setItemQuantity(title, add + 1, price)
  }

  const handleSubtract = () => {
    if (add > 0) {
      setItemQuantity(title, add - 1, price)
    }
  }

  return (
    <article className="relative h-64 overflow-hidden rounded-xl shadow-md sm:h-72">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={`Alfajor ${title}`}
      />

      <div
        className={`absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/60 to-transparent transition-all duration-500 ${
          open ? "h-full" : "h-28"
        }`}
      />

      <div className="relative z-10 flex flex-row justify-between h-full p-3 text-neutral-300">
        <div className="relative z-10 flex flex-col h-full justify-end p-3 text-neutral-300">
          <h3 className="text-lg font-lora font-semibold">{title}</h3>

          <p className="mt-1 text-base font-work-sans font-semibold">${price.toLocaleString("es-AR")}</p>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="mt-1 flex items-center gap-2 transition hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
          >
            <TbTriangleFilled
              className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
            <span className="text-sm font-work-sans font-medium">{open ? "Ocultar relleno" : "Ver relleno"}</span>
          </button>

          <ul
            className={`overflow-hidden transition-all duration-600 ${open ? "mt-2 max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
            {description.map((item) => (
              <li key={item} className="text-sm font-work-sans">• {item}</li>
            ))}
          </ul>
        </div>

        {/* Contador del carrito */}
        <div className="p-3 flex flex-col items-center justify-end">
          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Agregar un alfajor ${title} al pedido`}
            className="rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
          >
            <LuTriangle className="w-8 h-8 text-secondary active:text-primary-dark" />
          </button>

          <div className="w-14 h-12 text-secondary text-2xl font-semibold font-work-sans rounded flex items-center justify-center gap-1" aria-live="polite" aria-label={`${add} unidades en el pedido`}>
            <LuShoppingBasket className="w-7 h-7 text-secondary" />
            {add > 0 && (
              <span>{add}</span>
            )}
          </div>

          <button
            type="button"
            disabled={add === 0}
            onClick={handleSubtract}
            aria-label={`Quitar un alfajor ${title} del pedido`}
            className="rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary disabled:cursor-not-allowed"
          >
            <LuTriangle
              className={`w-8 h-8 rotate-180 active:text-primary-dark transition-colors ${
                add === 0 ? "text-background" : "text-secondary"
              }`}
            />
          </button>
        </div>
      </div>
    </article>
  );
}