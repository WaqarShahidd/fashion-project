import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Modal from "react-native-modal";

interface TestModalProps {}

const TestModal = (props: TestModalProps) => {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

export default TestModal;

const styles = StyleSheet.create({
  container: {}
});
