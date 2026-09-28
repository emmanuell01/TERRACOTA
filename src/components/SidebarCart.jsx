import 'animate.css'
import { LuShoppingBasket, LuX, LuMinus, LuPlus } from "react-icons/lu"
import { FaWhatsapp } from "react-icons/fa"
import { MdDeleteOutline } from "react-icons/md"
import { useCart } from '../context/useCart.js'
import { useState } from 'react'

// ─── Número de WhatsApp del negocio (sin + ni espacios) ───────────────────────
const WHATSAPP_NUMBER = '5493885174745'

const generateWhatsAppURL = (cart) => {
  const header = 'Hola! Quiero hacer mi pedido de los siguientes alfajores:\n'
  const items = cart.map(item => `- ${item.title}: ${item.quantity} x $${item.price} = $${item.quantity * item.price}`).join('\n')
  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0)
  const message = encodeURIComponent(`${header}${items}\nTotal: $${total}`)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

// ─── Tarjeta individual de cada item del pedido ───────────────────────────────
const OrderCard = ({ title, price, quantity, onQuantityChange, onDelete }) => {
  return (
    <div className='p-2 bg-primary rounded-xl flex justify-between items-start'>
      <div className='bg-primary rounded-xl'>
        <div className='flex flex-col gap-5'>
          <p className='text-xl text-secondary font-work-sans font-medium'>{title}</p>
          <p className='text-lg text-secondary font-work-sans'>${price} c/u</p>
        </div>
      </div>
      <div className='flex flex-col items-end gap-4'>
        <button type="button" aria-label={`Eliminar ${title} del pedido`} className='flex' onClick={onDelete}>
          <div className='p-1 border border-secondary rounded-full'>
            <MdDeleteOutline className='h-6 w-6 text-secondary'/>
          </div>
        </button>
        <div className='flex items-center'>
          <button type="button" aria-label={`Quitar una unidad de ${title}`} onClick={() => onQuantityChange(quantity - 1)}>
            <div className='group p-1 border border-secondary rounded-full active:border-secondary-dark'>
              <LuMinus className='text-secondary group-active:text-secondary-dark' />
            </div>
          </button>
          <p className='w-8 text-center text-secondary font-work-sans'>{quantity}</p>
          <button type="button" aria-label={`Agregar una unidad de ${title}`} onClick={() => onQuantityChange(quantity + 1)}>
            <div className='group p-1 bg-secondary border border-secondary rounded-full active:border-secondary-dark active:bg-secondary-dark'>
              <LuPlus className='text-primary group-active:text-primary-dark' />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Sidebar principal ────────────────────────────────────────────────────────
export default function SidebarCart() {
  const [animate, setAnimate] = useState(false)
  const [panelOpen, setPanelOpen] = useState(false)
  const { cart, setItemQuantity, removeItem, totalItems, totalPrice } = useCart()

  const handleAnimationEnd = () => setAnimate(false)

  const ValidatePanelStatus = () => {
    if (!panelOpen) {
      setPanelOpen(true)
    } else {
      setPanelOpen(false)
      setAnimate(true)
    }
  }

  return (
    <>
      {/* Botón flotante del carrito */}
      <button
        type="button"
        aria-label={panelOpen ? "Cerrar pedido" : `Abrir pedido${totalItems ? `, ${totalItems} productos` : ""}`}
        aria-expanded={panelOpen}
        className={`${panelOpen ? "hidden" : ""} fixed bottom-4 right-2 w-26 h-26 rounded-full bg-primary flex flex-col items-center justify-center z-50 shadow-lg hover:scale-105 border-3 border-secondary active:bg-primary-dark animate__bounceIn transition-all duration-300 ease-in-out`}
        onMouseDown={() => setAnimate(true)}
        onClick={ValidatePanelStatus}
      >
        <div className='relative'>
          <LuShoppingBasket
            className={`w-14 h-14 text-secondary ${animate ? 'animate__animated animate__swing' : ''}`}
            onAnimationEnd={handleAnimationEnd}
          />
          {/* Badge con cantidad total */}
          {totalItems > 0 && (
            <span className='absolute -top-1 -right-2 bg-green-500 text-white text-xs font-bold font-work-sans rounded-full w-5 h-5 flex items-center justify-center'>
              {totalItems}
            </span>
          )}
        </div>
        <p className='text-secondary text-xs font-work-sans font-semibold'>
          {!panelOpen ? "Mi Pedido" : null}
        </p>
      </button>

      {/* Overlay */}
      {panelOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={() => setPanelOpen(false)}
        />
      )}

      {/* Panel lateral */}
      <div className={`fixed top-0 right-0 h-dvh w-full max-w-lg bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${panelOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="shrink-0 flex items-center bg-primary justify-between p-4 border-b">
          <h2 className="text-xl font-lora font-bold text-secondary">Tu Pedido</h2>
          <button type="button" onClick={() => setPanelOpen(false)} aria-label="Cerrar pedido" className="p-2 rounded-full hover:bg-secondary transition">
            <LuX className="w-5 h-5 text-secondary hover:text-primary" />
          </button>
        </div>

        <div className="flex-1 min-h-0 p-4 bg-background flex flex-col">
          {/* Lista de items o carrito vacío */}
          <div className='flex-1 min-h-0 overflow-y-auto flex flex-col gap-3 pb-4'>
            {cart.length === 0 ? (
              <div className='flex flex-col items-center justify-center h-full gap-3 opacity-50'>
                <LuShoppingBasket className='w-16 h-16 text-secondary' />
                <p className='text-secondary font-work-sans text-center'>
                  Todavía no elegiste ningún alfajor
                </p>
              </div>
            ) : (
              cart.map(item => (
                <OrderCard
                  key={item.title}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  onQuantityChange={(newQty) => {
                    if (newQty <= 0) {
                      removeItem(item.title)
                    } else {
                      setItemQuantity(item.title, newQty, item.price)
                    }
                  }}
                  onDelete={() => removeItem(item.title)}
                />
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t border-primary/20 py-3 text-secondary font-work-sans font-semibold flex justify-between">
              <span>Subtotal ({totalItems} {totalItems === 1 ? "producto" : "productos"})</span>
              <span>${totalPrice.toLocaleString("es-AR")}</span>
            </div>
          )}

          {/* Botón de WhatsApp — solo activo si hay items */}
          <a
            href={cart.length > 0 ? generateWhatsAppURL(cart) : undefined}
            target='_blank'
            rel='noopener noreferrer'
            aria-disabled={cart.length === 0}
            className={`mt-3 p-3 w-full rounded-lg flex justify-between items-center transition-opacity ${
              cart.length > 0
                ? 'bg-green-500 cursor-pointer'
                : 'bg-green-500/40 cursor-not-allowed pointer-events-none'
            }`}
          >
            <FaWhatsapp className='h-8 w-8 text-neutral-800' />
            <div className='w-full'>
              <p className='text-xl font-medium text-neutral-800 text-center'>Hacer tu Pedido</p>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}