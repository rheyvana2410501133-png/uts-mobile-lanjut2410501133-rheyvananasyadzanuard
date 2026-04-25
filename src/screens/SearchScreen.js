import React, { useState } from 'react';
import {
  View, Text, TextInput, FlatList,
  Image, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { SearchIcon } from '../components/Icons';
import styles from '../styles/SearchStyle';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (query.trim() === '') {
      setErrorMsg('Query tidak boleh kosong');
      return;
    }
    if (query.trim().length < 3) {
      setErrorMsg('Minimal 3 karakter');
      return;
    }
    setErrorMsg('');
    searchMeal();
  };

  const searchMeal = async () => {
    setLoading(true);
    setSearched(true);
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      setResults(res.data.meals || []);
    } catch (err) {
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.searchBox}>
        <SearchIcon size={20} color="gray" />
        <TextInput
          placeholder="Cari makanan..."
          style={styles.input}
          value={query}
          onChangeText={(text) => {
            setQuery(text);
            setErrorMsg('');
          }}
          placeholderTextColor="#aaa"
          returnKeyType="search"
          onSubmitEditing={handleSubmit}
        />
      </View>

      {errorMsg !== '' && (
        <Text style={styles.errorText}>{errorMsg}</Text>
      )}

      <TouchableOpacity style={styles.searchBtn} onPress={handleSubmit}>
        <Text style={styles.searchBtnText}>Cari</Text>
      </TouchableOpacity>

      {loading && (
        <ActivityIndicator size="large" color="#ff4d4d" style={{ marginTop: 30 }} />
      )}

      {!loading && searched && results.length === 0 && (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Makanan tidak ditemukan</Text>
          <Text style={styles.emptySub}>Coba kata kunci lain</Text>
        </View>
      )}

      {!searched && (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Cari Resep Favorit</Text>
          <Text style={styles.emptySub}>Ketik nama makanan di atas</Text>
        </View>
      )}

      <FlatList
        data={results}
        keyExtractor={(item) => item.idMeal}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detail', { id: item.idMeal })}
            activeOpacity={0.7}
          >
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.title} numberOfLines={2}>{item.strMeal}</Text>
              <Text style={styles.category}>{item.strCategory} • {item.strArea}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}