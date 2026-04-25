import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },

  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  card: {
    flexDirection: 'row',
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    flexShrink: 1,
  },
});