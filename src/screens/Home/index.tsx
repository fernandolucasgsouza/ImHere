import React, { useState } from "react";
import {
  Alert,
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
  const  [participantsState, setParticpantsState] = useState<string[]>([]);
  const  [participantNameState, setParticpantNameState] = useState<string>('');
  
  function handlerParticipantAdd() {
    if (participantNameState == '') 
      return  
    if(participantsState.includes(participantNameState))
      return Alert.alert(`${participantNameState} já está cadastrado na lista!`)
      setParticpantsState(prevState => [...prevState, participantNameState])
    setParticpantNameState('');
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
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Participant
            key={index}
            id={index}
            name={item}
            onRemove={(index) => handlerParticipantRemove(index, item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Niguem chegou ao evento?{"\n"} Adicione participantes a sua lista de
            presença!
          </Text>
        )}
      />
    </View>
  );
}
