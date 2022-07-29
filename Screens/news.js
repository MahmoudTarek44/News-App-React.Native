import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../Common/header";
import Footer from "../Common/footer";
import Card from "../Components/Card";

export default News = ({ navigation }) => {
	const [data, setData] = useState([]);
	const [loader, setLoading] = useState(true);
	const displayedData = data;

	const getData = async () => {
		try {
			const response = await fetch(
				"https://meendah.s3.us-east-2.amazonaws.com/allposts.json"
			);
			const responseJson = await response.json();
			setData(responseJson);
			console.log("Mydata is :", data);
			console.log(loader);
		} catch (error) {
			console.error(error + " fetch error");
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		storeInfo();
		getData();
	}, []);
	const renderItem = ({ item }) => <Card navigation={navigation} Card={item} />;
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<Header navigation={navigation} title={"News Feed"} />
				{loader ? (
					<ActivityIndicator size="large" color="#00ff00" />
				) : (
					<FlatList
						style={styles.container}
						data={displayedData}
						renderItem={renderItem}
						keyExtractor={(item) => item.id}
					/>
				)}
				<Footer navigation={navigation} />
			</View>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
