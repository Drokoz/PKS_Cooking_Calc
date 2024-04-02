import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Ingredients from "./components/Ingredients";
import Plates from "./components/Plates";
import BagButton from "./components/BagButton";
import { StyleSheet, Text, View } from "react-native";

import DATA_INGREDIENTES from "./data/INGREDIENTES.json";

export default function App() {
  const [jsonData, setJsonData] = useState(DATA_INGREDIENTES);
  const [puchero, setPuchero] = useState(0);
  function getIngredientsInitial() {
    let ingredientsInitial = {};
    for (let index = 0; index < jsonData.length - 1; index++) {
      ingredientsInitial[(index + 1).toString()] = 0;
    }
    return ingredientsInitial;
  }

  const [ingredientsValues, setIngredientsValues] = useState(
    getIngredientsInitial
  );

  return (
    <View style={styles.container}>
      <Text>Bienvenido!</Text>
      <BagButton puchero={puchero} setPuchero={setPuchero} />
      <Ingredients
        ingredientsValues={ingredientsValues}
        setIngredientsValues={setIngredientsValues}
        jsonData={jsonData}
      />
      <Plates ingredientsValues={ingredientsValues} puchero={puchero} />

      <StatusBar style="auto" />
    </View>
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
