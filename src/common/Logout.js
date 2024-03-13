import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../utils/constants';
import ResponsiveSize from '../utils/responsivesSize';

const LogoutConfirmationModal = ({ isVisible, onClose, onLogout }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Are you sure you want to logout?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onClose} style={[styles.button, styles.cancelButton]}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onLogout} style={[styles.button, styles.logoutButton]}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding:ResponsiveSize(70)
  },
  modalView: {
    backgroundColor: COLORS.white,
    borderRadius: ResponsiveSize(10),
    padding: ResponsiveSize(20),
    alignItems: 'center',
    elevation: ResponsiveSize(5), 
  },
  modalText: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    borderRadius: ResponsiveSize(5),
    padding: ResponsiveSize(10),
    width: '45%',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: COLORS.lGrey, 
  },
  logoutButton: {
    backgroundColor: COLORS.green,
  },
  buttonText: {
    color: 'white',
    fontWeight: FONTS.interBold,
  },
});

export default LogoutConfirmationModal;
