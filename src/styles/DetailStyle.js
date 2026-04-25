import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 15,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    flex: 1,
    marginRight: 10,
  },
  category: {
    color: 'gray',
    marginBottom: 15,
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  instructionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 24,
  },
  ingredient: {
    fontSize: 14,
    color: '#444',
    marginBottom: 4,
    lineHeight: 20,
  },
  instructions: {
    lineHeight: 24,
    color: '#444',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  youtubeBtn: {
    backgroundColor: '#ff0000',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  youtubeBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  favBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff4d4d',
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 30,
    gap: 8,
  },
  favBtnActive: {
    backgroundColor: '#aaa',
  },
  favBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});