import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { View, Button, Text } from "native-base";

class Filter extends Component {
  getTextStyle(statusName) {
    const { filterStatus } = this.props;
    if (statusName === filterStatus) return { color: "yellow" };
    return null;
  }
  setFilterStatus(actionType) {
    this.props.dispatch({ type: actionType });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          danger
          rounded
          onPress={() => this.setFilterStatus("FILTER_SHOW_ALL")}
        >
          <Text style={this.getTextStyle("SHOW_ALL")}>show all</Text>
        </Button>
        <Button
          danger
          rounded
          onPress={() => this.setFilterStatus("FILTER_MEMORIZED")}
        >
          <Text style={this.getTextStyle("MEMORIZED")}>memorized</Text>
        </Button>
        <Button
          danger
          rounded
          onPress={() => this.setFilterStatus("FILTER_NEED_PRACTICE")}
        >
          <Text style={this.getTextStyle("NEED_PRACTICE")}>need practice</Text>
        </Button>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { filterStatus: state.filterStatus };
}

export default connect(mapStateToProps)(Filter);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    justifyContent: "space-evenly",
    flexDirection: "row",
    color: "#f0f",
  },
});
