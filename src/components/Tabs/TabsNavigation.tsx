import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICreateTab, MaterialTopTabParamsList} from '../../models/types';

function CustomTabs({
  state,
  descriptors,
  navigation,
  position,
}): React.JSX.Element {
  
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      {state.routes.map((route, index) => {

        const { key } = route;

        return (
          <TouchableOpacity
          key={key}
          accessibilityRole="button"
          onPress={() => {
            navigation.navigate(route.name);
          }}
          style={{
            margin: 10,
            borderBottomWidth: state.index === index ? 3 : 0,
            borderBottomColor: 'red',
          }}>
          <Text style={styles.tabText}> {route.name} </Text>
        </TouchableOpacity>
        )
      })}
    </View>
  );
}

const CustomTabNavigator = createMaterialTopTabNavigator<MaterialTopTabParamsList>();

function NavigationTabs({tabs, idTab}): JSX.Element {
  return (
    <CustomTabNavigator.Navigator
      id={idTab}
      initialRouteName="Pokémons"
      style={styles.tabsStyle}
      tabBar={CustomTabs}>
      {tabs.map(tab => (
        <CustomTabNavigator.Screen key={tab.key} name={tab.name} component={tab.component} />
      ))}
    </CustomTabNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  button: {
    padding: 2,
    alignItems: 'center',
    borderBottomWidth: 2,
  },

  tabText: {
    fontWeight: 'bold',
    color: 'red',
  },
});

export default NavigationTabs;
