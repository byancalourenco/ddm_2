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

import styles from './LoginStyles';

export default function Login({ navigation }) {
const [usuario, setUsuario] = useState('');
const [senha, setSenha] = useState('');

function entrar() {
if (usuario.trim() === '' || senha.trim() === '') {
Alert.alert(
'Ops!',
'Preencha o nome de usuário e a senha.'
);
return;
}

navigation.navigate('Home');

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
        "How you doin'?"
      </Text>

      <View style={styles.frameOuter}>
        <View style={styles.cornerTopLeft} />
        <View style={styles.cornerTopRight} />
        <View style={styles.cornerBottomLeft} />
        <View style={styles.cornerBottomRight} />

        <View style={styles.frameInner}>
          <Text style={styles.smallTitle}>
            Aquele em que você faz
          </Text>

          <Text style={styles.title}>
            O SEU LOGIN!
          </Text>

          <View style={styles.line} />

          <Text style={styles.description}>
            Entre para fazer parte desse grupo.
            {'\n'}Because you're our lobster.
          </Text>

          <Text style={styles.description}>
            (Preencha os dois campos com informações aleatórias aoara entrar)
          </Text>

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