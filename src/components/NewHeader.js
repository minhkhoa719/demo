import React, { Component } from "react";
import { View } from "react-native";
import { Header, Title, Button, Text, Right } from "native-base";
import { connect } from "react-redux";

class NewHeader extends Component {
  render() {
    return (
      <Header>
        <Title>MyWord</Title>
        <Right>
          <Button
            info
            onPress={() =>
              this.props.dispatch({
                type: "TOGGLE_IS_ADDING",
              })
            }
          >
            <Text>+</Text>
          </Button>
        </Right>
      </Header>
    );
  }
}

export default connect()(NewHeader);
