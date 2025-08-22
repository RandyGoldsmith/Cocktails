import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { DRINKS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import DrinkDetails from "../components/DrinkDetails";

import IconButton from "../components/IconButton";

function DrinkDetailScreen({ route, navigation }) {
  const detailedDrinkId = route.params.drinkId;

  const selectedDrink = DRINKS.find((drink) => drink.id == detailedDrinkId);

  function headerButtonPressHandler() {
    console.log("Press");
  }

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerRight: () => {
          return (
            <IconButton
              onPress={headerButtonPressHandler}
              icon="star"
              color="white"
            />
          );
        },
      },
      [navigation, headerButtonPressHandler]
    );
  });
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedDrink.imageUrl }} />
      <Text style={styles.title}>{selectedDrink.title}</Text>
      <DrinkDetails
        duration={selectedDrink.duration}
        complexity={selectedDrink.complexity}
        affordability={selectedDrink.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Text style={styles.subtitle}>Ingredients</Text>
          {selectedDrink.ingredients.map((ingredient) => (
            <Text style={[styles.itemText, styles.listItem]} key={ingredient}>
              {ingredient}
            </Text>
          ))}
          <Text style={styles.subtitle}>Steps</Text>
          {selectedDrink.steps.map((step) => (
            <Text style={[styles.itemText, styles.listItem]} key={step}>
              {step}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default DrinkDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    margin: 8,
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 12,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
