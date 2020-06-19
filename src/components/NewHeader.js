import React, { Component } from "react";
import { View } from "react-native";
import { Header, Title, Button, Text, Right } from "native-base";
import { connect } from "react-redux";
import { toggleIsAdding } from "../redux/actionCreator";

class NewHeader extends Component {
  render() {
    return (
      <Header>
        <Title>MyWord</Title>
        <Right>
          <Button info onPress={() => this.props.toggleIsAdding()}>
            <Text>+</Text>
          </Button>
        </Right>
      </Header>
    );
  }
}

export default connect(null, { toggleIsAdding })(NewHeader);
