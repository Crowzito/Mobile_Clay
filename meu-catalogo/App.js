import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Flatlist, ScrollView } from "react-native";
import Filmes from "./componentes/Filmes";
import listaFilmes from "./objetos/filmes.json";
import Series from "./componentes/Series";

export default function App() {
  const filmes = [
    {
      nome: "A Doce Vida",
      ano: 1960,
      diretor: "Federico Fellini",
      tipo: "Drama",
      capa: "https://i.pinimg.com/236x/f3/c6/1c/f3c61cedf30d5212ba7a6885a55c71fc.jpg",
    },
    {
      nome: "Psicose",
      ano: 1960,
      diretor: "Alfred Hitchcock",
      tipo: "Terror",
      capa: "https://i.pinimg.com/236x/e4/84/72/e484729535437d2e79882c359111db56.jpg",
    },
    {
      nome: "O Beijo da Mulher Aranha",
      ano: 1985,
      diretor: "Hector Babenco",
      tipo: "Drama",
      capa: "https://i.pinimg.com/236x/f3/e3/3f/f3e33fdd1dfae7368226acf14fac51ee.jpg",
    },
    {
      nome: "Poltergeist - O Fenômeno",
      ano: 1982,
      diretor: "Tobe Hooper",
      tipo: "Terror",
      capa: "https://i.pinimg.com/236x/e2/5e/0f/e25e0f9e904895e5365b8ca7aa991076.jpg",
    },
  ];

  const series = [
    {
      nome: "Buffy, a Caça-Vampiros",
      ano: 1997,
      diretor: "Joss Whedon",
      temporadas: 7,
      capa: "https://i.pinimg.com/236x/da/71/74/da71743ddd8f1cc98fa0565215919275.jpg",
    },
    {
      nome: "Desperate Housewives",
      ano: 2004,
      diretor: "Marc Cherry",
      temporadas: 8,
      capa: "https://i.pinimg.com/236x/15/cc/88/15cc8856eb29f92689dd1268077db45e.jpg",
    },
    {
      nome: "Sons of Anarchy",
      ano: 2008,
      diretor: "Kurt Sutter",
      temporadas: 7,
      capa: "https://i.pinimg.com/474x/79/2e/1e/792e1e398b6349dd3713eb74a5cf2bc2.jpg",
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.h1}>Catálogo de Filmes</Text>
        <StatusBar style="auto" />
        {filmes.map((filme) => {
          return (
            <Filmes
              nome={filme.nome}
              ano={filme.ano}
              diretor={filme.diretor}
              tipo={filme.tipo}
              capa={filme.capa}
            />
          );
        })}
      </View>
      <View style={styles.container}>
        <Text style={styles.h1}>Catálogo de Séries</Text>
        {series.map((serie) => {
          return (
            <Series
              nome={serie.nome}
              ano={serie.ano}
              diretor={serie.diretor}
              tipo={serie.tipo}
              capa={serie.capa}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: 100,
  },
  h1: {
    fontWeight: 800,
    fontSize: 24,
    textAlign: "center",
    color: "#fff",
  },
});
