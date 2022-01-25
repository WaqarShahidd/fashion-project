import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Swiper from "react-native-deck-swiper";
import { data } from "../../Components/cardData";

const Cards = ({ card }) => (
  <View style={styles.card}>
    <Image source={{ uri: card.image }} style={styles.cardImage} />
  </View>
);

const Card = () => {
  const [index, setIndex] = React.useState(0);
  const onSwiped = () => {
    setIndex(index + 1);
    if (index >= 5) {
      setIndex(index[1]);
    }
  };
  return (
    <View style={styles.container}>
      <Swiper
        cards={data}
        cardIndex={index}
        renderCard={(card) => <Cards card={card} />}
        onSwiped={onSwiped}
        stackSize={4}
        stackScale={11}
        disableBottomSwipe
        disableTopSwipe
        infinite={true}
        useViewOverflow={false}
        backgroundColor="transparent"
        verticalSwipe={false}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: -45,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    height: "30%",
  },
  cardImage: {
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    borderRadius: 12,
  },
  card: {
    height: "35%",
    width: "100%",
    borderRadius: 12,
    shadowRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
