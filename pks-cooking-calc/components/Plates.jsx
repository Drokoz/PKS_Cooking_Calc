import GUISOS from "../data/GUISOS.json";

import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const Plates = ({ ingredientsValues, puchero }) => {
  const [guisosData, setGuisosData] = useState(GUISOS);

  useEffect(() => {
    console.log(puchero);
    console.log(ingredientsValues);
  }, [puchero, ingredientsValues]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "darkgray",
        borderColor: "black",
        borderWidth: 1,
      }}
    >
      <ScrollView Vertical style={{ alignSelf: "flex-end" }}>
        <Text> Platos </Text>
        {guisosData.map((jData, inx) =>
          jData.puchero <= puchero ? (
            <View
              key={inx}
              style={{
                backgroundColor: "white",
                borderColor: "black",
                borderWidth: 1,
              }}
            >
              <View>
                <Text>{jData.nombreES}</Text>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: jData.imagen,
                  }}
                />
              </View>
              <View>
                <TextInput
                  editable
                  placeholder={ingredientsValues[jData.id]}
                  onChangeText={(value) =>
                    onChangeValue(parseInt(value), jData.id)
                  }
                />
              </View>
            </View>
          ) : null
        )}
      </ScrollView>
    </View>
  );
};

export default Plates;
