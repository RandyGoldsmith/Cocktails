import { Text, View, StyleSheet, FlatList } from "react-native";
import { DRINKS, CATEGORIES } from "../data/dummy-data";
import DrinkItem from "../components/DrinkItem";
import { useLayoutEffect } from "react";

function DrinksOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedDrinks = DRINKS.filter((drinkItem) => {
    return drinkItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id == catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderDrinkItem(itemData) {
    const item = itemData.item;
    const drinkItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      id: item.id,
    };
    return <DrinkItem {...drinkItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedDrinks}
        keyExtractor={(item) => item.id}
        renderItem={renderDrinkItem}
      />
    </View>
  );
}

export default DrinksOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
