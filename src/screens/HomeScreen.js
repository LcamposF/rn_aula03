import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { db } from '../config/firebaseConfig';  
import { collection, getDocs } from 'firebase/firestore';

const HomeScreen = ({ navigation }) => {

  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const snapshot = await getDocs(collection(db, "cursos"))
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        })) 
        setCourses(data)
      } catch (error) {
        console.error("Erro ao buscar cursos no firestore", error)
        setError("Não foi possivel carregar os cursos. Tente novamente mais tarde.")
      } finally {
        setLoading(false)
      }
    }
    fetchCourses()
  }, [])

    const goToDetailsScreen = (course) => {
      navigation.navigate('Details', { course })
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Cursos Disponíveis</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity style={styles.itemContainer} onPress={ () => goToDetailsScreen (item) } >
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
            </TouchableOpacity>
         )
        }

      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 20,
  backgroundColor: '#f5f5f5',
  alignItems: 'center',
  justifyContent: 'center'
},
title: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 20
},
itemContainer: { 
  backgroundColor: '#fff', 
  padding: 15, 
  borderRadius: 8, 
  marginBottom: 10, 
 elevation: 2
},
itemTitle: {
  fontSize: 18,
  fontWeight: 'bold'
},
itemDescription: {
  fontSize: 14,
  color: '#555'
}

});

export default HomeScreen