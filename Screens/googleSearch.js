import * as React from "react";
import { useEffect } from "react";
import WebView from "react-native-webview";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Header from "../Common/header";
import Footer from "../Common/footer";

export default function GoogleSearch({ navigation }) {
	const removeValue = async () => {
		try {
			await AsyncStorage.removeItem("user");
		} catch (e) {
			alert("error");
		}
		console.log("Done.");
	};
	useEffect(() => {
		removeValue();
	}, []);
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<Header navigation={navigation} title={"Google Search"} />
				<WebView
					source={{ uri: "https://google.com" }}
					style={{ flex: 1, margin: 20, padding: 20 }}
				/>
				<Footer navigation={navigation} />
			</View>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#00FFFF",
		alignItems: "center",
		justifyContent: "center",
	},
});
