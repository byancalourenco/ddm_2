import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity,} 
from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >

        {/* logo */}
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>F</Text>
          <Text style={styles.dotRed}>•</Text>

          <Text style={styles.logo}>R</Text>
          <Text style={styles.dotBlue}>•</Text>

          <Text style={styles.logo}>I</Text>
          <Text style={styles.dotYellow}>•</Text>

          <Text style={styles.logo}>E</Text>
          <Text style={styles.dotRed}>•</Text>

          <Text style={styles.logo}>N</Text>
          <Text style={styles.dotYellow}>•</Text>

          <Text style={styles.logo}>D</Text>
          <Text style={styles.dotBlue}>•</Text>

          <Text style={styles.logo}>S</Text>
        </View>

        <Text style={styles.subtitle}>
          THE ONE WITH THE FRIENDS
        </Text>

        {/* moldura */}
        <View style={styles.frameOuter}>

          {/* detalhes */}
          <View style={styles.cornerTopLeft} />
          <View style={styles.cornerTopRight} />
          <View style={styles.cornerBottomLeft} />
          <View style={styles.cornerBottomRight} />

          <View style={styles.frameInner}>

            {/* conteudo */}
            <Text style={styles.title}>
              FRIENDS
            </Text>

            <Text style={styles.line} />

            <Text style={styles.description}>
              A história de seis amigos que vivem em Nova York,
              enfrentando juntos os momentos mais engraçados,
              complicados e inesquecíveis da vida.
            </Text>

            {/* central perk */}
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>
                ✦ CENTRAL PERK ✦
              </Text>

              <Text style={styles.infoText}>
                Café, amizade e muitas histórias.
              </Text>
            </View>

            {/* btn */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                ENVIAR
              </Text>
            </TouchableOpacity>

          </View>
        </View>

        {/* final */}
        <Text style={styles.footer}>
          I'll be there for you
        </Text>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#8066A6',
  },

  scroll: {
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 50,
    paddingHorizontal: 20,
  },


  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },

  logo: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#111111',
    fontStyle: 'italic',
  },

  dotRed: {
    color: '#E53935',
    fontSize: 28,
    marginHorizontal: 2,
  },

  dotBlue: {
    color: '#29B6F6',
    fontSize: 28,
    marginHorizontal: 2,
  },

  dotYellow: {
    color: '#FBC02D',
    fontSize: 28,
    marginHorizontal: 2,
  },

  subtitle: {
    color: '#29202F',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 3,
    marginBottom: 25,
  },


  frameOuter: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#C99A3D',
    padding: 14,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#E8C66A',

    elevation: 12,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.35,
    shadowRadius: 8,
  },

  frameInner: {
    backgroundColor: '#8066A6',

    borderWidth: 7,
    borderColor: '#A87529',

    borderRadius: 22,

    padding: 25,

    alignItems: 'center',
  },


  cornerTopLeft: {
    position: 'absolute',
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: '#E8C66A',
    top: -12,
    left: -5,
  },

  cornerTopRight: {
    position: 'absolute',
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: '#E8C66A',
    top: -12,
    right: -5,
  },

  cornerBottomLeft: {
    position: 'absolute',
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: '#E8C66A',
    bottom: -12,
    left: -5,
  },

  cornerBottomRight: {
    position: 'absolute',
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: '#E8C66A',
    bottom: -12,
    right: -5,
  },


  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#17121C',
    letterSpacing: 5,
    marginBottom: 8,
  },

  line: {
    width: 70,
    height: 4,
    backgroundColor: '#C99A3D',
    marginBottom: 20,
    borderRadius: 5,
  },

  description: {
    color: '#211A25',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },


  infoBox: {
    width: '100%',
    backgroundColor: '#C99A3D',

    borderRadius: 12,

    padding: 15,

    alignItems: 'center',

    marginBottom: 22,

    borderWidth: 2,
    borderColor: '#E8C66A',
  },

  infoTitle: {
    color: '#241A0D',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 5,
  },

  infoText: {
    color: '#33230D',
    fontSize: 14,
  },


  button: {
    backgroundColor: '#C99A3D',

    width: '100%',

    paddingVertical: 13,

    borderRadius: 10,

    borderWidth: 2,
    borderColor: '#E8C66A',

    alignItems: 'center',

    elevation: 4,
  },

  buttonText: {
    color: '#241A0D',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 2,
  },


  footer: {
    marginTop: 28,

    color: '#211A25',

    fontSize: 16,

    fontStyle: 'italic',

    fontWeight: 'bold',
  },

});