import React, {useState} from "react";
import {TextInput, StyleSheet} from "react"

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return(
    <TextInput 
     styles={styles.searchBar}
     onChangeText={setSearchTerm}
     value={searchTerm}
     placeholder={"Buscar...."}
    
    />
  )
}

const styles = StyleSheet.create({
  searchBar: {
    borderColor: "gray",
    borderWidth: 1,
    height: 40,
    margin: 10,
    paddingHorizontal: 10,
  },
});

export default Search;