import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Header({ title, navigation }) {
	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<TouchableOpacity onPress={() => navigation.navigate("News")}>
					<Icon name="home" size={35} color="#fff" />
				</TouchableOpacity>
				<Text style={{ color: "#fff", paddingStart: 20, fontSize: 18 }}>
					{title}
				</Text>
			</View>
			<TouchableOpacity onPress={() => navigation.navigate("Google")}>
					<Icon name="google" size={35} color="#fff" />
				</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		color: "#fff",
		backgroundColor: "#00008B",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 15,
		paddingHorizontal: 30,
	},
	image: {
		width: 35,
		height: 35,
	},
});
