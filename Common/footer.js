import { StyleSheet, View, TouchableOpacity, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Entypo";

export default function Footer({ navigation }) {
	const whatsUrl = "whatsapp://send?text=XXXXXXXXXX&phone=+2001285204181";
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate("Info")}>
				<Icon2 name="info-with-circle" size={35} color="#fff" />
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					Linking.openURL(whatsUrl);
				}}
			>
				<Icon name="whatsapp" size={35} color="#fff" />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("News")}>
				<Icon name="home" size={35} color="#fff" />
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
		justifyContent: "space-around",
		padding: 15,
	},
	image: {
		width: 35,
		height: 35,
	},
});
