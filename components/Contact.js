import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {
  static navigationOptions = {
    title: 'Contact US'
  };

  render() {
    return (
      <Card title='Contact Information'>
        <Text>Country: Pakistan</Text>
        <Text>Province: Punjab</Text>
        <Text>City: Faisalabad</Text>
        <Text>Postal code: 38000</Text>
        <Text>Full Name: Muhammad Ismail</Text>
        <Text>Cell Number: 03478196414</Text>
      </Card>
    );
  }
}

export default Contact;
