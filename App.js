import * as React from "react";
import { StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "./Screens/splash";
import News from "./Screens/news";
import GoogleSearch from "./Screens/googleSearch";
import Info from "./Screens/info";
import Details from "./Screens/details";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Splash" component={Splash} />
				<Stack.Screen name="News" component={News} />
				<Stack.Screen name="Google" component={GoogleSearch} />
				<Stack.Screen name="Info" component={Info} />
				<Stack.Screen name="Details" component={Details} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
