import * as React from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Header from "../Common/header";
import Footer from "../Common/footer";

export default function Info({ navigation}) {
	const storeInfo = async (value) => {
		try {
			await AsyncStorage.setItem("user", "userName");
		} catch (error) {
			alert("error occured: ", error);
		}
	};
	useEffect(() => {
		storeInfo();
	}, []);

	return (
		<SafeAreaView style={{ flex: 1, flexShrink: 1 }}>
			<View style={{ flex: 1 }}>
				<Header navigation={navigation} title={"Movie News"} />
				<View style={styles.card}>
					<View style={{ margin: 20 }}>
						<Image
							style={styles.image}
							source={require("../assets/images/jurassic.jpg")}
						/>
					</View>
					<View style={{ margin: 0, flexShrink: 1, alignItems: "center" }}>
						<Text style={{ fontSize: 21, fontWeight: "bold" }}>
							jurassic World
						</Text>
						<Text style={{ fontSize: 16 }}>
							Set 22 years after the events of Jurassic Park, Jurassic World
							takes place on the same fictional island of Isla Nublar, located
							off the Pacific coast of Costa Rica. A successful theme park of
							cloned dinosaurs, dubbed Jurassic World, has operated on the
							island for years, bringing John Hammond's dream to fruition.
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
		padding: 20,
		margin: 20,
	},
	image: {
		height: 400,
		width: 350,
		borderRadius: 10,
	},
});
