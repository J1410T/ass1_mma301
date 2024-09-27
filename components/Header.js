import { View, Text, StyleSheet } from "react-native";
export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>RN LAB 3 </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: "#c5c6c7",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
