import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_400Regular,
  Lato_400Regular,
  RubikIso_400Regular,
  Sono_800ExtraBold,
} from '@expo-google-fonts/dev';
export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Lato_400Regular,
    RubikIso_400Regular,
    Sono_800ExtraBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>
          {' '}
          Os melhores Queijos do planeta Terra{' '}
        </Text>
        <Text>''</Text>
        <Text style={styles.subTitulo}> Você só encontra aqui </Text>
        <FlatList
          data={arrayConsole}
          renderItem={({ item }) => (
            <View>
              <Image style={styles.img} source={item.capa} />
              <Text style={styles.subTitulo}>
                {' '}
                {item.queijo} - {item.tipo} - {item.descricao}{' '}
              </Text>
            </View>
          )}
        />
         <Text style={styles.footer}>Impressionante né?</Text>
        <Text style={styles.footer}>Obrigado pela atenção</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    textAlign: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    color: '#ff5a73',
    fontFamily: 'Lato_400Regular',
  },
  subTitulo: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'RubikIso_400Regular',
  },
  footer: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Sono_800ExtraBold',
  },
  img: {
    borderRadius: 30,
    width: 300,
    height: 300,
    resizeMode: 'center',
  },
  console: {
    fontSize: 10,
  },
});
const arrayConsole = [
  {
    queijo: 'Queijo Qualho FIT',
    tipo: 'não curado',
    descricao:
      'Queijo Baixo em gordura, otimo para petisco e assados, textura macia e irresistivel',
    capa: require('./assets/1.jpg'),
  },
  {
    queijo: 'Queijo Minas Padrão FIT',
    tipo: 'cozido',
    descricao:
      'O queridinho do Brasil, famoso queijo mineiro, famoso pelo seu sabor surreal, de dar agua na boca ',
    capa: require('./assets/2.jpg'),
  },
  {
    queijo: 'Queijo Provolone Defumado FIT',
    tipo: 'Curado e Defumado',
    descricao:
      'sabor intenso e inesquecivel, otimo acompanhado de vinhas e especiarias',
    capa: require('./assets/3.jpg'),
  },
];
