import React, { Component } from "react";
import { Text } from "react-native";
import { Input, View, Item, Button } from "native-base";
import { connect } from "react-redux";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      en: "",
      vn: "",
    };
    this.onAdd = this.onAdd.bind(this);
  }

  onAdd() {
    const { en, vn } = this.state;
    this.props.dispatch({
      type: "ADD_WORD",
      en,
      vn,
    });
    this.props.dispatch({
      type: "TOGGLE_IS_ADDING",
    });
  }
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Item>
          <Input
            placeholder="English word put in here"
            value={this.state.en}
            onChangeText={(text) => this.setState({ en: text })}
          ></Input>
        </Item>
        <Item>
          <Input
            placeholder="Meaning"
            value={this.state.vn}
            onChangeText={(text) => this.setState({ vn: text })}
          ></Input>
        </Item>
        <Button
          onPress={this.onAdd}
          style={{
            alignSelf: "center",
            width: 70,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>Add</Text>
        </Button>
      </View>
    );
  }
}

export default connect()(Form);
