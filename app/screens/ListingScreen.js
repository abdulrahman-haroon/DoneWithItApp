import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import color from "../config/color";
import routes from "../navigation/routes";

import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../Hooks/useApi";

function ListingScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  );

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AppText
            title="Couldn't retrieve the listings"
            style={{ color: "red", fontSize: 18, fontWeight: "bold" }}
          />
          <AppButton title="Retry" onPress={loadListings} />
        </View>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listings}
        refreshing={false}
        onRefresh={loadListings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISITING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: color.white,
  },
});
export default ListingScreen;
