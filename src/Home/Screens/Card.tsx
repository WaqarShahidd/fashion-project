import * as React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import Swiper from "react-native-deck-swiper";
import { DATA } from "../../Start/Components/dataa";
import { data } from "../Components/offers";


// const { width: WindowWidth, height: WindowHeight } = Dimensions.get("window");
// const width = WindowWidth * 0.7;
// const height = WindowHeight * 0.47;

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
        //showSecondCard={true}
        stackSize={5}
        stackScale={17}
        disableBottomSwipe
        disableTopSwipe
        infinite={true}
        useViewOverflow={false}
        backgroundColor="transparent"        
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "red",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: -45,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    height: "44%",
  },
  cardImage: {
    width: "100%",
    flex: 1,
    resizeMode: "contain",
    borderRadius: 12,
  },
  card: {
    flex: 0.4,    
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
