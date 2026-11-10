import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function Cenarios({ navigation }) {
  const cenarios = [
    {
      nome: 'Central Perk',
      local: 'A cafeteria dos amigos',
      descricao: 'O famoso café onde os seis amigos se encontram para conversar, compartilhar momentos e tomar café. Seu sofá laranja se tornou um símbolo da série.',
    },
    {
      nome: 'Apartamento da Monica',
      local: 'O principal ponto de encontro',
      descricao: 'O apartamento de Monica é palco de festas, encontros e situações engraçadas. Sua decoração colorida e a famosa porta roxa são inesquecíveis.',
    },
    {
      nome: 'Apartamento de Joey e Chandler',
      local: 'O apartamento da dupla',
      descricao: 'Conhecido pelos jogos, pela poltrona reclinável e pelo inseparável pato e pintinho, é um dos cenários mais divertidos da série.',
    },
    {
      nome: 'A fonte da abertura',
      local: 'Abertura de Friends',
      descricao: 'A fonte aparece na abertura da série, com os seis amigos brincando ao redor dela enquanto toca a música I’ll Be There for You.',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.logo}>F.R.I.E.N.D.S</Text>

        <Text style={styles.subtitle}>
          THE ONE WITH THE PLACES
        </Text>

        <View style={styles.heading}>
          <Text style={styles.title}>CENÁRIOS FAMOSOS</Text>
          <View style={styles.line} />

          <Text style={styles.intro}>
            Entre nos lugares que fizeram parte de momentos
            inesquecíveis da história dos seis amigos.
          </Text>
        </View>

        {cenarios.map((cenario, index) => (
          <View style={styles.card} key={index}>
            <Text style={styles.number}>
              CENÁRIO 0{index + 1}
            </Text>

            <Text style={styles.name}>
              {cenario.nome}
            </Text>

            <Text style={styles.location}>
              {cenario.local}
            </Text>

            <View style={styles.cardLine} />

            <Text style={styles.description}>
              {cenario.descricao}
            </Text>
          </View>
        ))}

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>
            VOLTAR PARA HOME
          </Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          I'LL BE THERE FOR YOU
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

  content: {
    padding: 22,
    alignItems: 'center',
    paddingBottom: 35,
  },

  logo: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#17121C',
    fontStyle: 'italic',
    letterSpacing: 2,
    marginTop: 30,
  },

  subtitle: {
    fontSize: 9,
    color: '#29202F',
    letterSpacing: 2,
    fontWeight: 'bold',
    marginTop: 8,
  },

  heading: {
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 25,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#17121C',
    textAlign: 'center',
  },

  line: {
    width: 55,
    height: 4,
    backgroundColor: '#C99A3D',
    borderRadius: 5,
    marginVertical: 13,
  },

  intro: {
    fontSize: 13,
    color: '#29202F',
    textAlign: 'center',
    lineHeight: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#F7F0FC',
    borderWidth: 3,
    borderColor: '#C99A3D',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },

  number: {
    color: '#A87529',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  name: {
    color: '#35233F',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 9,
  },

  location: {
    color: '#8066A6',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },

  cardLine: {
    width: 40,
    height: 3,
    backgroundColor: '#C99A3D',
    marginVertical: 12,
  },

  description: {
    color: '#30223B',
    fontSize: 13,
    lineHeight: 20,
  },

  button: {
    width: '100%',
    backgroundColor: '#C99A3D',
    borderWidth: 2,
    borderColor: '#E8C66A',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#241A0D',
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },

  footer: {
    color: '#29202F',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginTop: 25,
  },
});