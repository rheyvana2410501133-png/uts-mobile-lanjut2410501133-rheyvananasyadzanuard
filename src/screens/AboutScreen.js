import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from '../styles/AboutStyle';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://ui-avatars.com/api/?name=Rheyvana+Nasya&background=ff4d4d&color=fff&size=200' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Rheyvana Nasya Dzanuard</Text>
        <Text style={styles.nim}>2410501133</Text>
        <Text style={styles.kelas}>D-3 Sistem Informasi - Kelas A</Text>
      </View>
      
      <View style={styles.card}>

        <Text style={styles.cardTitle}>Tentang Aplikasi</Text>
        <Text style={styles.cardText}>
          ResepKita adalah aplikasi katalog resep kuliner yang dibuat menggunakan React Native + Expo.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.cardTitle}>Tema</Text>
        <Text style={styles.cardText}>Tema A - ResepKita (Katalog Resep Kuliner)</Text>

        <View style={styles.divider} />

        <Text style={styles.cardTitle}>Fitur</Text>
        <Text style={styles.cardText}>• Home - Daftar kategori makanan</Text>
        <Text style={styles.cardText}>• Browse - Daftar resep per kategori</Text>
        <Text style={styles.cardText}>• Detail - Detail resep lengkap</Text>
        <Text style={styles.cardText}>• Favorit - Simpan resep favorit</Text>
        <Text style={styles.cardText}>• Search - Cari resep by nama</Text>

        <View style={styles.divider} />

        <Text style={styles.cardTitle}>Credit API</Text>
        <Text style={styles.cardText}>TheMealDB API</Text>
        <Text style={styles.cardLink}>https://www.themealdb.com/api.php</Text>

      </View>

      <Text style={styles.footer}>
        Dibuat untuk UTS Pemrograman Mobile Lanjut {'\n'} TA. 2025/2026
      </Text>

    </ScrollView>
  );
}