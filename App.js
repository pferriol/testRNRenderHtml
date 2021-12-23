import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import RenderHtml from 'react-native-render-html';

// KO: http://www.fundacioninfosalud.org/verDoc.aspx?id=1023&tipo=2
// KO: http://www.fundacioninfosalud.org/verDoc.aspx?id=1023%26tipo=2
// OK: https://www.serviciossocialescantabria.org/uploads/documentos%20e%20informes/hablandodecuidadores.pdf 

const source = {
  html: `<a
  href="http://www.fundacioninfosalud.org/verDoc.aspx?id=1023&tipo=2"
  style="text-align:center;">
    A test link!
</a>`
};

export default function App() {
  const { width } = useWindowDimensions();
  console.log('Source is:');
  console.log(source);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <RenderHtml
        contentWidth={width}
        source={source}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
