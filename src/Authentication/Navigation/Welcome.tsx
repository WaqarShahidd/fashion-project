import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
// import Button from '../../../components/Button';
import { Routes, StackNavigationProps } from './navigation';

const picture = {
  src: "https://i.pinimg.com/736x/0c/72/1d/0c721d29122b92c9660ed9183ad03135--boyd-blue-the-personal.jpg",
  
};

const Welcome = ({
  navigation,
}: StackNavigationProps<Routes, "Welcome">) => {
    

        return (
          <View style={styles.container}>
            <Text>Welcome</Text>
            

            <Button
              title="Back"
              onPress={() => {
                navigation.navigate("Onboarding");
              }}
            />
          </View>
        );
    
};

export default Welcome;

const styles = StyleSheet.create({
  container: {}
});
function render() {
    throw new Error('Function not implemented.');
}

