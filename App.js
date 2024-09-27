import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuItem from "./components/MenuItem";

export default function App() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <MenuItem />
      </View>
      <View>
        <Footer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
