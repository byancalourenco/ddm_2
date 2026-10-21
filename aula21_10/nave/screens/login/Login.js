
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

export default function App() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function entrar() {
    Alert.alert(
      'Welcome!',
      `Olá, ${usuario}! How you doin'?`
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          {/* logo com bolotas */}
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

            {/* frase subtitulo */}
          <Text style={styles.subtitle}>
            "How you doin'?"
          </Text>

          {/* moldura */}
          <View style={styles.frameOuter}>
            <View style={styles.cornerTopLeft} />
            <View style={styles.cornerTopRight} />
            <View style={styles.cornerBottomLeft} />
            <View style={styles.cornerBottomRight} />

            <View style={styles.frameInner}>

                {/* frase login */}
              <Text style={styles.smallTitle}>
                Aquele em que você faz
              </Text>

              <Text style={styles.title}>
                O SEU LOGIN!
              </Text>

              <View style={styles.line} />

              <Text style={styles.description}>
                Entre para fazer parte desse grupo.
                {"\n"}Because you're our lobster. 
              </Text>

              {/* nome de usuário */}
              <View style={styles.field}>
                <Text style={styles.label}>
                  NOME DE USUÁRIO
                </Text>

                <TextInput
                  style={styles.input}
                  placeholder="Digite seu usuário"
                  placeholderTextColor="#887B91"
                  value={usuario}
                  onChangeText={setUsuario}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>

              {/* senha */}
              <View style={styles.field}>
                <Text style={styles.label}>
                  SENHA
                </Text>

                <TextInput
                  style={styles.input}
                  placeholder="Digite sua senha"
                  placeholderTextColor="#887B91"
                  value={senha}
                  onChangeText={setSenha}
                  secureTextEntry
                  autoCapitalize="none"
                />
              </View>

              {/* botão entrar */}
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={entrar}
              >
                <Text style={styles.buttonText}>
                  ENTRAR
                </Text>
              </TouchableOpacity>

              <Text style={styles.hint}>
                PIVOT! PIVOT! PIVOT!
              </Text>
            </View>
          </View>

          {/* footer */}
          <View style={styles.footerDecor}>
            <View style={styles.footerLine} />
            <Text style={styles.footer}>
              I'LL BE THERE FOR YOU
            </Text>
            <View style={styles.footerLine} />
          </View>


        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8066A6',
  },

  keyboard: {
    flex: 1,
  },

  scroll: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 35,
    paddingBottom: 35,
    paddingHorizontal: 20,
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
    color: '#29202F',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 2.5,
    marginBottom: 30,
    textAlign: 'center',
  },

  frameOuter: {
    width: '100%',
    maxWidth: 370,
    backgroundColor: '#C99A3D',
    padding: 12,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#E8C66A',
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },

  frameInner: {
    backgroundColor: '#8066A6',
    borderWidth: 5,
    borderColor: '#A87529',
    borderRadius: 21,
    paddingHorizontal: 20,
    paddingVertical: 28,
    alignItems: 'center',
  },

  cornerTopLeft: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#E8C66A',
    top: -9,
    left: -5,
    zIndex: 1,
  },

  cornerTopRight: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#E8C66A',
    top: -9,
    right: -5,
    zIndex: 1,
  },

  cornerBottomLeft: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#E8C66A',
    bottom: -9,
    left: -5,
    zIndex: 1,
  },

  cornerBottomRight: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#E8C66A',
    bottom: -9,
    right: -5,
    zIndex: 1,
  },

  smallTitle: {
    color: '#35233F',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 3,
    marginBottom: 5,
  },

  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#17121C',
    letterSpacing: 1.5,
    textAlign: 'center',
  },

  line: {
    width: 60,
    height: 4,
    backgroundColor: '#C99A3D',
    marginTop: 15,
    marginBottom: 18,
    borderRadius: 5,
  },

  description: {
    color: '#29202F',
    fontSize: 13,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 27,
  },

  field: {
    width: '100%',
    marginBottom: 19,
  },

  label: {
    color: '#30223B',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 9,
  },

  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F7F0FC',
    borderWidth: 2,
    borderColor: '#BBA8D2',
    borderRadius: 11,
    paddingHorizontal: 14,
    fontSize: 13,
    color: '#30223B',
  },

  button: {
    width: '100%',
    backgroundColor: '#C99A3D',
    borderWidth: 2,
    borderColor: '#E8C66A',
    borderRadius: 11,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    elevation: 4,
  },

  buttonText: {
    color: '#241A0D',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 2,
  },

  arrow: {
    color: '#241A0D',
    fontSize: 19,
    fontWeight: 'bold',
  },

  hint: {
    color: '#35233F',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginTop: 23,
  },

  footerDecor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 27,
  },

  footerLine: {
    height: 1,
    width: 24,
    backgroundColor: '#D9BD78',
    marginHorizontal: 10,
  },

  footer: {
    color: '#29202F',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  episode: {
    color: '#44334F',
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 13,
  },
});
