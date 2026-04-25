import { create } from 'zustand';

const useFavoriteStore = create((set) => ({
  favorites: [],

  addFavorite: (meal) =>
    set((state) => {
      const exists = state.favorites.find((f) => f.idMeal === meal.idMeal);
      if (exists) return state;
      return { favorites: [...state.favorites, meal] };
    }),

  removeFavorite: (idMeal) =>
    set((state) => ({
      favorites: state.favorites.filter((f) => f.idMeal !== idMeal),
    })),
}));

export default useFavoriteStore;