import { useCartStore } from "../store/cartStore";

export const useCart = () => {
  const cart = useCartStore((state) => state.cart);

  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  const updateQuantity = useCartStore(
    (state) => state.updateQuantity
  );

  const clearCart = useCartStore(
    (state) => state.clearCart
  );

  const totalItems = useCartStore(
    (state) => state.totalItems
  );

  const totalPrice = useCartStore(
    (state) => state.totalPrice
  );

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  };
};