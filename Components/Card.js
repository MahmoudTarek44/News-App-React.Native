import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function Card({ navigation, Card }) {
	return (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate("Details", { Card });
			}}
		>
			<View style={styles.card}>
				<View style={{ flex: 1, margin: 20 }}>
					<Image style={styles.image} source={{ uri: Card.image }} />
				</View>
				<View style={{ flex: 3, marginLeft: 40, flexShrink: 1, padding: 10 }}>
					<Text style={{ fontSize: 18, fontWeight: "bold" }}>{Card.title}</Text>
					<Text style={{ fontSize: 16 }}>
						{Card.body.substring(0, 150) + "..."}
						<Text style={{ color: "#1E90FF", fontSize: 13 }}>Read more</Text>
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	card: {
		flexShrink: 1,
		flexDirection: "row",
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "space-between",
		margin: 15,
		borderRadius: 5,
	},
	image: {
		width: 120,
		height: 200,
		borderRadius: 10,
	},
});
