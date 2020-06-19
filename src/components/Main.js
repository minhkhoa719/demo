import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import Words from "./Words";
import { Input, Content, Text, Item } from "native-base";
import Filter from "./Filter";
import Headers from "./NewHeader";
import Form from "./Form";

class Main extends Component {
  getWordList() {
    const { filterStatus, myWords } = this.props;

    if (filterStatus === "MEMORIZED") return myWords.filter((e) => e.memorized);
    if (filterStatus === "NEED_PRACTICE")
      return myWords.filter((e) => !e.memorized);
    return myWords;
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignSelf: "stretch",
          alignItems: "stretch",
        }}
      >
        <Headers></Headers>
        {this.props.isAdding ? <Form /> : null}

        <FlatList
          style={{ backgroundColor: "white", flex: 10 }}
          data={this.getWordList()}
          renderItem={({ item }) => <Words word={item} />}
          keyExtractor={(item) => item.id}
        ></FlatList>
        <Filter />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    filterStatus: state.filterStatus,
    myWords: state.arrWords,
    isAdding: state.isAdding,
  };
}

export default connect(mapStateToProps)(Main);
