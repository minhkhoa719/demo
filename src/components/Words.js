import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { View, Text, Button, List, ListItem, Right } from "native-base";
import { connect } from "react-redux";
import { toggleMemorized, toggleShow } from "../redux/actionCreator";

class Words extends Component {
  render() {
    const { en, vn, memorized, isShow, id } = this.props.word;
    const textDecorationLine = memorized ? "line-through" : "none";
    const memorizedButtonText = memorized ? "forget" : "memorized";
    const meaning = isShow ? vn : "";
    return (
      <List style={styles.container}>
        <ListItem>
          <Text style={{ textDecorationLine }}>{en}</Text>
        </ListItem>
        <ListItem style={{ padding: 5 }}>
          <Text>{meaning}</Text>
        </ListItem>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 5,
          }}
        >
          <Button primary onPress={() => this.props.toggleMemorized(id)}>
            <Text>{memorizedButtonText}</Text>
          </Button>
          <Button primary onPress={() => this.props.toggleShow(id)}>
            <Text>show</Text>
          </Button>
        </View>
      </List>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8fab6",
    padding: 10,
    margin: 10,

    justifyContent: "space-evenly",
  },
  EnglishWord: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  EnglishWord2: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "line-through",
  },
});

export default connect(null, { toggleMemorized, toggleShow })(Words);
