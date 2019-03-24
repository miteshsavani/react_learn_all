import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f5f8',
      alignItems: 'center'
    },
    searchView: {
      flexDirection: 'row',
      paddingBottom: 10
    },
    searchBar: {
      borderWidth: 1,
      borderColor: '#faf1e1',
      backgroundColor: '#eaeaea',
      height: 50,
      flex: 1,
      padding: 5
    },
    searchIconView: {
      height: 50,
      backgroundColor: '#eaeaea',
      alignItems: 'center',
      justifyContent: 'center'
    },
    searchIcon: {
      color: '#de9595',
      padding: 10
    },
    imageListView: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  });