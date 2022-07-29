import * as React from "react";
import { useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	ActivityIndicator,
	ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Splash({ navigation }) {
	const checkLoggedIn = async () => {
		try {
			const value = await AsyncStorage.getItem("user");
			if (value !== null) {
				setTimeout(() => {
					navigation.navigate("News");
				}, 1000);
			} else {
				setTimeout(() => {
					navigation.navigate("Info");
				}, 1000);
			}
		} catch (error) {
			alert("error ocurred: ", error);
		}
	};
	useEffect(() => {
		checkLoggedIn();
	}, []);
	return (
		<ImageBackground
			style={styles.container}
			source={require("../assets/images/splash.jpeg")}
		>
			<Text style={{fontSize:50 ,padding:30,color:'#fff'}}>News App</Text>
			<ActivityIndicator size={80} color="#fff" />
		</ImageBackground>
	);
}
const styles = StyleSheet.create({
	container: {
		// backgroundColor: "#000",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
