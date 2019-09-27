// Importing resources from libraires

import React, { Component } from 'react';
import {
  View,
  Platform,
  Image,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView
} from 'react-navigation';
import { Icon } from 'react-native-elements';

// Importing components

import Home from './HomeComponent';
import Contact from './Contact';
import Menu from './MenuComponent';
import About from './About';

// Importing shared documents
import Dishdetail from './Dishdetail';
import { white } from 'ansi-colors';

// ! Menu navigator

const MenuNavigator = createStackNavigator(
  {
    Menu: {
      screen: Menu,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Icon
            name='menu'
            size={24}
            color='white'
            onPress={() => navigation.toggleDrawer()}
          />
        )
      })
    },
    Dishdetail: { screen: Dishdetail }
  },
  {
    initialRouteName: 'Menu',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#512DA8'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
);

// ! Home Navigator

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#512DA8'
      },
      headerTitleStyle: {
        color: '#fff'
      },
      headerTintColor: '#fff',
      headerLeft: (
        <Icon
          name='menu'
          size={24}
          color='white'
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
);

//  ! contact navigator

const ContactNavigator = createStackNavigator(
  {
    Contact: { screen: Contact }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#512DA8'
      },
      headerTitleStyle: {
        color: '#fff'
      },
      headerTintColor: '#fff',
      headerLeft: (
        <Icon
          name='menu'
          size={24}
          color='white'
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
);

//! About Navigator

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#512DA8'
      },
      headerTitleStyle: {
        color: '#fff'
      },
      headerTintColor: '#fff',
      headerLeft: (
        <Icon
          name='menu'
          size={24}
          color='white'
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
);

//! Custom navigator

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            source={require('../components/images/logo.png')}
            style={styles.drawerImage}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>Ismail's Resturant</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

// ?     Main navigator as a drawer

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Icon name='home' type='font-awesome' size={24} color={tintColor} />
        )
      }
    },
    Menu: {
      screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu',
        drawerIcon: ({ tintColor }) => (
          <Icon name='list' type='font-awesome' size={24} color={tintColor} />
        )
      }
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        title: 'Contact Us',
        drawerLabel: 'Contact Us',
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='address-card'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        title: 'About Us',
        drawerLabel: 'About Us',
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='info-circle'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    drawerBackgroundColor: '#D1C4E9',
    contentComponent: CustomDrawerContentComponent
  }
);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          //todo:  padding ma : iska bad Expo.constants.statusbarHeight ni lg rae
          paddingTop: Platform.OS === 'ios' ? 0 : 0
        }}
      >
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerHeader: {
    backgroundColor: '#512d88',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

export default Main;
