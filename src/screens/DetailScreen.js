import React, { useEffect, useState } from 'react';
import {
  View, Text, Image, ScrollView,
  TouchableOpacity, Alert, ActivityIndicator, Linking,
} from 'react-native';
import axios from 'axios';
import { HeartIcon } from '../components/Icons';
import useFavoriteStore from '../store/useFavoriteStore';
import styles from '../styles/DetailStyle';

export default function DetailScreen({ route }) {
  const { id } = route.params;
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { favorites, addFavorite } = useFavoriteStore();
  const isFavorited = favorites.some((f) => f.idMeal === meal?.idMeal);

  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchDetail = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setMeal(res.data.meals[0]);
    } catch (err) {
      setError('Gagal memuat data. Periksa koneksi internet.');
    } finally {
      setLoading(false);
    }
  };

  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== '') {
        ingredients.push(`${measure?.trim()} ${ingredient.trim()}`);
      }
    }
    return ingredients;
  };

  const handleAddFavorite = () => {
    if (isFavorited) {
      Alert.alert('Info', 'Sudah ada di Favorit');
      return;
    }
    addFavorite({
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strMealThumb: meal.strMealThumb,
      strCategory: meal.strCategory,
    });
    Alert.alert('Berhasil', 'Ditambahkan ke Favorit!');
  };

  const handleOpenYoutube = () => {
    if (meal.strYoutube) {
      Linking.openURL(meal.strYoutube);
    }
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#ff4d4d" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loading}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!meal) return null;

  const ingredients = getIngredients(meal);

  return (
    <ScrollView style={styles.container}>


      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />

      <View style={styles.content}>


        <View style={styles.titleRow}>
          <Text style={styles.name} numberOfLines={2}>
            {meal.strMeal}
          </Text>
          <TouchableOpacity
            onPress={handleAddFavorite}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <HeartIcon size={28} color={isFavorited ? '#ff4d4d' : '#ccc'} />
          </TouchableOpacity>
        </View>

        <Text style={styles.category}>
          {meal.strCategory} • {meal.strArea}
        </Text>

        {meal.strYoutube ? (
          <TouchableOpacity onPress={handleOpenYoutube} style={styles.youtubeBtn}>
            <Text style={styles.youtubeBtnText}>▶ Watch on YouTube</Text>
          </TouchableOpacity>
        ) : null}

        <Text style={styles.sectionTitle}>Ingredients</Text>
        {ingredients.map((item, index) => (
          <Text key={index} style={styles.ingredient}>• {item}</Text>
        ))}

        <Text style={styles.instructionTitle}>How to cook</Text>
        <Text style={styles.instructions}>{meal.strInstructions}</Text>


      </View>
    </ScrollView>
  );
}