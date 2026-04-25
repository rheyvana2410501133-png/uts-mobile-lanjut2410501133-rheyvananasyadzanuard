import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 15,
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    gap: 10,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: '#222',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },

  image: {
    width: 75,
    height: 75,
    borderRadius: 10,
    marginRight: 12,
  },

  info: {
    flex: 1,
  },

  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },

  category: {
    fontSize: 13,
    color: 'gray',
  },

  emptyContainer: {
    alignItems: 'center',
    marginTop: 80,
  },

  emptyIcon: {
    fontSize: 50,
    marginBottom: 10,
  },

  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 5,
  },

  emptySub: {
    fontSize: 14,
    color: 'gray',
  },
});