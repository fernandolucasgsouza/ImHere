import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type ParticipantProps = {
  id: number;
  name: string;
  onRemove: (id:number) => void;
};

export function Participant({id, name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={()=>onRemove(id)}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
  