import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

import { LEADERS } from '../shared/Leaders';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: LEADERS
    };
  }

  static navigationOptions = {
    title: 'About US'
  };

  render() {
    const renderLeaders = ({ item, index }) => {
      return (
        <ListItem
          key={index}
          title={item.name}
          subtitle={item.description}
          hideChevron={true}
          leftAvatar={{ source: require('./images/IMG-20190412-WA0005.jpg') }}
        />
      );
    };

    return (
      <ScrollView>
        <Card title='Our History'>
          <Text>
            Since the 1500s, when an unknown printer took a galley of type and
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled it to done.
          </Text>
          <Text>
            {'\n'}
            Since the 1500s, when an unknown printer took a galley of type and
            Since the 1500s, when an unknown prind.
          </Text>
        </Card>
        <Card title='Corparate Leaders'>
          <FlatList
            data={this.state.leaders}
            renderItem={renderLeaders}
            keyExtractor={item => item.id.toString()}
          />
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;
