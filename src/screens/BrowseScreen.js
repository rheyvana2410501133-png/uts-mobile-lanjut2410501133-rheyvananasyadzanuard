import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, Image,
  TouchableOpacity, ActivityIndicator, RefreshControl,
} from 'react-native';
import axios from 'axios';
import styles from '../styles/BrowseStyle';

export default function BrowseScreen({ route, navigation }) {
  const { category } = route.params;
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      setMeals(res.data.meals);
    } catch (error) {
      setError('Gagal memuat data. Periksa koneksi internet.');
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    setError(null);
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      setMeals(res.data.meals);
    } catch (error) {
      setError('Gagal memuat data. Periksa koneksi internet.');
    } finally {
      setRefreshing(false);
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
        <TouchableOpacity onPress={fetchMeals} style={styles.retryBtn}>
          <Text style={styles.retryText}>Coba Lagi</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{category}</Text>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#ff4d4d']}
          />
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detail', { id: item.idMeal })}
            activeOpacity={0.7}
          >
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
            <Text style={styles.title}>{item.strMeal}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}