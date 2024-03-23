import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const [participantsState, setParticpantsState] = useState<string[]>([]);
  const [participantNameState, setParticpantNameState] = useState<string>("");

  function handlerParticipantAdd() {
    if (participantNameState == "") return;
    if (participantsState.includes(participantNameState))
      return Alert.alert(
        `${participantNameState} já está cadastrado na lista!`
      );
    setParticpantsState((prevState) => [...prevState, participantNameState]);
    setParticpantNameState("");
  }

  function handlerParticipantRemove(id: number, name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticpantsState((prevState) =>
            prevState.filter((_, index) => id !== index)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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
          onChangeText={setParticpantNameState}
          value={participantNameState}
        />
        <TouchableOpacity style={styles.button} onPress={handlerParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participantsState}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <Participant
            key={index}
            id={index}
            name={item}
            onRemove={(index) => handlerParticipantRemove(index, item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ao evento?{"\n"}
            Adicione participantes a sua lista de presença!
          </Text>
        )}
      />
    </View>
  );
}
