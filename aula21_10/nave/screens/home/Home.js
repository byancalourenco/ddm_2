import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import grupo from '../../assets/img/grupo.jpg';

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

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
          Bem-vindo ao Central Perk!
        </Text>

        <View style={styles.frame}>
          <Text style={styles.smallTitle}>
            AQUELE COM OS
          </Text>

          <Text style={styles.title}>
            MELHORES AMIGOS!
          </Text>

          <View style={styles.line} />

          <Text style={styles.description}>
            Friends conta a história de seis amigos que vivem em Nova York e
            compartilham momentos de amizade, amor e muitas risadas.
          </Text>

          <Image
            source={grupo}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.sectionTitle}>
          EXPLORE O UNIVERSO FRIENDS
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Personagens')}
        >
          <Text style={styles.buttonText}>
            PERSONAGENS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Cenarios')}
        >
          <Text style={styles.buttonText}>
            CENÁRIOS FAMOSOS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.logoutText}>
            SAIR
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8066A6',
  },

  content: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 25,
    paddingTop: 55,
  },

    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },

    logo: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#17121C',
        fontStyle: 'italic',
    },

    dotRed: {
        color: '#E53935',
        fontSize: 24,
        marginHorizontal: 1,
    },

    dotBlue: {
        color: '#29B6F6',
        fontSize: 24,
        marginHorizontal: 1,
    },

    dotYellow: {
        color: '#FBC02D',
        fontSize: 24,
        marginHorizontal: 1,
    },

  subtitle: {
    fontSize: 14,
    color: '#29202F',
    marginBottom: 30,
  },

  logoImage: {
    width: 280,
    height: 200,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 25,
  },

  frame: {
    width: '100%',
    backgroundColor: '#F7F0FC',
    borderWidth: 4,
    borderColor: '#C99A3D',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    marginBottom: 30,
  },

  smallTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#35233F',
    letterSpacing: 2,
  },

  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#17121C',
    textAlign: 'center',
    marginTop: 5,
  },

  line: {
    width: 60,
    height: 4,
    backgroundColor: '#C99A3D',
    borderRadius: 5,
    marginVertical: 18,
  },

  description: {
    color: '#30223B',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
  },

  sectionTitle: {
    color: '#29202F',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 15,
  },

  button: {
    width: '100%',
    backgroundColor: '#C99A3D',
    borderWidth: 2,
    borderColor: '#E8C66A',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 13,
  },

  buttonText: {
    color: '#241A0D',
    fontWeight: 'bold',
    fontSize: 13,
    letterSpacing: 1.5,
  },

  logoutButton: {
    marginTop: 10,
    padding: 12,
  },

  logoutText: {
    color: '#F7F0FC',
    fontWeight: 'bold',
    fontSize: 11,
    letterSpacing: 2,
  },
});