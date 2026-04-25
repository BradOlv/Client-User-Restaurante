import { create } from "zustand";

export const useCartStore = create((set, get) => ({
    items: [],
    open: false,

    setOpen: (open) => set({ open }),

    addItem: (product) => {
        const { items } = get();
        const existing = items.find((p) => p.id === product.id);
        if (existing) {
            set({
                items: items.map((p) =>
                    p.id === product.id ? { ...p, qty: p.qty + 1 } : p
                ),
            });
        } else {
            set({ items: [...items, { ...product, qty: 1 }] });
        }
    },

    removeItem: (id) =>
        set({ items: get().items.filter((p) => p.id !== id) }),

    updateQty: (id, qty) => {
        if (qty <= 0) {
            return set({ items: get().items.filter((p) => p.id !== id) });
        }
        set({
            items: get().items.map((p) => (p.id === id ? { ...p, qty } : p)),
        });
    },

    clear: () => set({ items: [] }),

    getTotal: () =>
        get().items.reduce((acc, p) => acc + p.price * p.qty, 0),

    getCount: () => get().items.reduce((acc, p) => acc + p.qty, 0),
}));
