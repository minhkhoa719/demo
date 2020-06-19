import React, { Component } from "react";
import { Text } from "react-native";
import { Input, View, Item, Button } from "native-base";
import { connect } from "react-redux";
import { toggleIsAdding, addWord } from "../redux/actionCreator";

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
    this.props.addWord(en, vn);
    this.props.toggleIsAdding();
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

export default connect(null, { toggleIsAdding, addWord })(Form);
