import { View, Text, StyleSheet } from "react-native";
export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>&copy;MMA LAB 3 2024</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "white",
    fontSize: 12,
  },
});
