import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const particpants = [
    "Fernando",
    "Lucas",
    "Pedro",
    "João",
    "Thiago",
    "Maria",
    "Marta",
    "Tomé",
    "Matheus",
    "Marcos",
  ];
  function handlerParticipantAdd() {
    console.log("clicou em add");
  }
  function handlerParticipantRemove(id: number, name: string) {
    console.log(`clicou em remove o participante: ${name} do id: ${id}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Segunda 18 de Março 2024</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handlerParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={particpants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index})=>(
          <Participant
            key={index}
            id={index}
            name={item}
            onRemove={(index) => handlerParticipantRemove(index, item)}
          />
        )}
        ListEmptyComponent={()=>(
          <Text style={styles.listEmptyText}>Niguem chegou ao evento?{'\n'} Adicione participantes
          a sua lista de presença!</Text>
        )}
      />
    </View>
  );
}
