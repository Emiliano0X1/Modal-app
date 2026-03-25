import { Modal, View, Text, StyleSheet } from 'react-native';
export const CustomModal = ({ visible, onClose, title, children }) => {
    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={true}
            onRequestClose={onClose}
        >
        {/* Aquí construiremos las capas */}
            <View style = {styles.overlay}>
                <View style = {styles.modalContainer}>
                    <View style = {styles.header}>
                         <Text style = {styles.title}>{title}</Text>
                         <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Ionicons name = "close" size = {24} color = "#4A4A4A" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style = {styles.content}>
                    {children}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({ 
    overlay : {
        flex : 1,
        backgroundColor : 'rgba(0, 0, 0, 0.5)',
        justifyContent : 'center',
        alignItems : 'center',
        padding : 20
    },

    modalContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        width: '100%',
        maxWidth: 400, 
        maxHeight: '80%', 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8, 
    },

    header: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        flexDirection : 'row',
        justifyContent :'space-between',
        alignItems : 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1A1A1A',
    },
    content: {
        padding: 16,
    },
    closeButton : {
        padding : 4,
        borderRadius : 12
    }

});