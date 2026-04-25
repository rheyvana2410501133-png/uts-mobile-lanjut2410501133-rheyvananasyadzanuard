import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  profileContainer: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#fff',
    marginBottom: 15,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },

  nim: {
    fontSize: 15,
    color: '#ff4d4d',
    fontWeight: '600',
    marginBottom: 4,
  },

  kelas: {
    fontSize: 14,
    color: 'gray',
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 12,
    borderRadius: 12,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },

  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 12,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },

  cardText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
  },

  cardLink: {
    fontSize: 13,
    color: '#ff4d4d',
    marginTop: 4,
  },

  footer: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 13,
    marginVertical: 20,
    lineHeight: 22,
  },
});