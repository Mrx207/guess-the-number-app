import { StyleSheet, Text } from "react-native";
import Colors from "../../utils/constants/colors";

export default function InstructionText({ children,style }) {
  return <Text style={[styles.instructionText,style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.primary700,
    fontSize: 24,
  },
});
