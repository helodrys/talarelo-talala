import { Link } from "expo-router";
import { Text, View, Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/taotonglogo.png")} />
      <Text className="text-5xl text-primary font-bold">Welcome!</Text>
        <Link href="/loginpage">login</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 36, // Equivalent to text-5xl (adjust based on your design system)
    color: "#007AFF", // Replace with your 'primary' color
    fontWeight: "bold",
  },
});