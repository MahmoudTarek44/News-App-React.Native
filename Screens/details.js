import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../Common/header";
import Footer from "../Common/footer";

export default function Details({ navigation, route }) {
	const { Card } = route.params;

	return (
		<SafeAreaView style={{ flex: 1, flexShrink: 1 }}>
			<View style={{ flex: 1 }}>
				<Header navigation={navigation} title={"News Details"} />
				<View style={styles.card}>
					<View style={{ margin: 20 }}>
						<Image style={styles.image} source={{ uri: Card.image }} />
					</View>
					<View style={{ margin: 40, flexShrink: 1, marginBottom: 50 }}>
						<Text style={{ fontSize: 30, fontWeight: "bold" }}>
							{Card.title}
						</Text>
						<Text style={{ fontSize: 20 }}>
							{Card.body.substring(0, 200) + "..."}
							<Text style={{ color: "#1E90FF", fontSize: 15 }}>Read more</Text>
						</Text>
					</View>
				</View>
				<Footer navigation={navigation} />
			</View>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	card: {
		flex: 1,
		flexShrink: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "space-between",
		margin: 20,
		borderRadius: 8,
	},
	image: {
		height: 300,
		width: 350,
		borderRadius: 10,
	},
});
