import React from 'react';
import { Button, StyleSheet, TextInput, SafeAreaView, Alert, View} from 'react-native';


export default function App() {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Game Code"
        keyboardType="numeric"
      />

    <View style={styles.button}>
      <Button
        title="OK"
        color="black"
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    //alignContent: "center",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'white',
  },

  button: {
    borderWidth: 1,
    marginTop: 10,
    padding: 5,
    width: '40%',
    position: 'relative',
    //flexWrap: 'wrap',
    backgroundColor: 'white',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

});