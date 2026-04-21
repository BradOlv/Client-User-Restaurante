import { useState, useEffect } from 'react';

export const useFavorites = () => {
    const [favorites, setFavorites] = useState([]);

    // Cargar favoritos del localStorage al montar el componente
    useEffect(() => {
        const savedFavorites = localStorage.getItem('kinal_favorites');
        if (savedFavorites) {
            try {
                setFavorites(JSON.parse(savedFavorites));
            } catch (error) {
                console.error('Error cargando favoritos:', error);
            }
        }
    }, []);

    // Guardar favoritos en localStorage cada vez que cambien
    useEffect(() => {
        localStorage.setItem('kinal_favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (product) => {
        setFavorites(prev => {
            const exists = prev.some(fav => fav.id === product.id);
            if (exists) {
                return prev;
            }
            return [...prev, product];
        });
    };

    const removeFavorite = (productId) => {
        setFavorites(prev => prev.filter(fav => fav.id !== productId));
    };

    const toggleFavorite = (product) => {
        if (isFavorite(product.id)) {
            removeFavorite(product.id);
        } else {
            addFavorite(product);
        }
    };

    const isFavorite = (productId) => {
        return favorites.some(fav => fav.id === productId);
    };

    const clearFavorites = () => {
        setFavorites([]);
    };

    return {
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
        clearFavorites
    };
};
