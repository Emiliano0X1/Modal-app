import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomModal } from './components/CustomModal';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      <Text style = {styles.heading}>Practica : Custom Modal</Text>

      <Button
        title = "Abrir Modal"
        onPress = {() => setModalVisible(true)}
      >
      </Button>

      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Mi Primer Modal"
        animationType = "slide"
      >

        <Text style = {styles.modalText}> This is the custom modal EFN</Text>
        <Text style = {styles.modalText}> Puedes poner cualquier cosa usando el prop children</Text>

        <Button
          title = "Cerrar desde dentro"
          onPress = {() => setModalVisible(false)}
        ></Button>

      </CustomModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1A1A1A',
  },
  modalText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
    color: '#4A4A4A',
  },
});
