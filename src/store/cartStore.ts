import { create } from "zustand";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];

  addToCart: (
    product: Omit<CartItem, "quantity">,
    quantity?: number
  ) => void;

  removeFromCart: (id: number) => void;

  updateQuantity: (
    id: number,
    quantity: number
  ) => void;

  clearCart: () => void;

  totalItems: () => number;

  totalPrice: () => number;
}

export const useCartStore = create<CartStore>(
  (set, get) => ({
    cart: [],

    addToCart: (product, quantity = 1) => {
      const existingItem = get().cart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity:
                    item.quantity + quantity,
                }
              : item
          ),
        }));
      } else {
        set((state) => ({
          cart: [
            ...state.cart,
            {
              ...product,
              quantity,
            },
          ],
        }));
      }
    },

    removeFromCart: (id) => {
      set((state) => ({
        cart: state.cart.filter(
          (item) => item.id !== id
        ),
      }));
    },

    updateQuantity: (id, quantity) => {
      if (quantity < 1) return;

      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === id
            ? { ...item, quantity }
            : item
        ),
      }));
    },

    clearCart: () => {
      set({ cart: [] });
    },

    totalItems: () => {
      return get().cart.reduce(
        (total, item) =>
          total + item.quantity,
        0
      );
    },

    totalPrice: () => {
      return get().cart.reduce(
        (total, item) =>
          total +
          item.price * item.quantity,
        0
      );
    },
  })
);