import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, Image,
  TouchableOpacity, ActivityIndicator, RefreshControl,
} from 'react-native';
import axios from 'axios';
import styles from '../styles/HomeStyle';

export default function HomeScreen({ navigation }) {
  const [categories, setCategories] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
      );
      setCategories(res.data.categories || []);
      setFiltered(res.data.categories || []);
    } catch (err) {
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
        'https://www.themealdb.com/api/json/v1/1/categories.php'
      );
      setCategories(res.data.categories || []);
      setFiltered(res.data.categories || []);
    } catch (err) {
      setError('Gagal memuat data. Periksa koneksi internet.');
    } finally {
      setRefreshing(false);
    }
  };

  const searchFilter = (text) => {
    if (text) {
      const newData = categories.filter((item) =>
        item.strCategory.toLowerCase().includes(text.toLowerCase())
      );
      setFiltered(newData);
    } else {
      setFiltered(categories);
    }
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#ff4d4d" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity onPress={fetchData} style={styles.retryBtn}>
          <Text style={styles.retryText}>Coba Lagi</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filtered}
        numColumns={2}
        keyExtractor={(item) => item.idCategory}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
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
            onPress={() => navigation.navigate('Browse', { category: item.strCategory })}
            activeOpacity={0.7}
          >
            <Image source={{ uri: item.strCategoryThumb }} style={styles.image} />
            <Text style={styles.title}>{item.strCategory}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}