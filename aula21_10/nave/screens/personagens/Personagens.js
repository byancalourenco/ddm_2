import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import rachel from '../../assets/img/rachel.png';
import ross from '../../assets/img/ross.png';
import monica from '../../assets/img/monica.png';
import chandler from '../../assets/img/chandler.png';
import joey from '../../assets/img/joey.png';
import phoebe from '../../assets/img/phoebe.png';

export default function Personagens({ navigation }) {
  const personagens = [
    {
      nome: 'Rachel Green',
      apelido: 'A fashionista',
      imagem: rachel,
      descricao: 'Independente e determinada, Rachel começa uma nova vida em Nova York e constrói sua carreira no mundo da moda.',
    },
    {
      nome: 'Ross Geller',
      apelido: 'O paleontólogo',
      imagem: ross,
      descricao: 'Inteligente e apaixonado por dinossauros, Ross é irmão de Monica e vive grandes histórias de amor.',
    },
    {
      nome: 'Monica Geller',
      apelido: 'A organizada',
      imagem: monica,
      descricao: 'Competitiva e perfeccionista, Monica ama cozinhar e reunir seus amigos em seu apartamento.',
    },
    {
      nome: 'Chandler Bing',
      apelido: 'O engraçado',
      imagem: chandler,
      descricao: 'Conhecido pelo humor sarcástico, Chandler sempre encontra uma piada para qualquer situação.',
    },
    {
      nome: 'Joey Tribbiani',
      apelido: 'O ator',
      imagem: joey,
      descricao: 'Carismático e divertido, Joey sonha em fazer sucesso como ator e é apaixonado por comida.',
    },
    {
      nome: 'Phoebe Buffay',
      apelido: 'A excêntrica',
      imagem: phoebe,
      descricao: 'Criativa e espontânea, Phoebe é cantora, violonista e dona de uma personalidade única.',
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
          THE ONE WITH THE CHARACTERS
        </Text>

        <View style={styles.heading}>
          <Text style={styles.title}>OS PERSONAGENS</Text>
          <View style={styles.line} />
          <Text style={styles.intro}>
            Seis amigos, seis personalidades e inúmeras histórias.
            Conheça quem faz parte desse grupo!
          </Text>
        </View>

        {personagens.map((personagem, index) => (
          <View style={styles.card} key={index}>
            <Text style={styles.number}>0{index + 1}</Text>

            <Text style={styles.name}>
              {personagem.nome}
            </Text>

            <Text style={styles.nickname}>
              {personagem.apelido}
            </Text>

            <View style={styles.cardLine} />

            <Text style={styles.description}>
              {personagem.descricao}
            </Text>

            <Image
              source={personagem.imagem}
              style={styles.characterImage}
              resizeMode="cover"></Image>
            
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
    fontSize: 23,
    fontWeight: 'bold',
    color: '#17121C',
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
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  name: {
    color: '#35233F',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 7,
  },

  nickname: {
    color: '#8066A6',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 4,
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

  characterImage: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginTop: 15,
  },

  footer: {
    color: '#29202F',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginTop: 25,
  },
});