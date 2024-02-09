import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Counter from '../Counter/Counter';
import About from '../About/About';

const Tab = createMaterialTopTabNavigator();

function MyTabs(): React.JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Counter" component={Counter} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}

function Article(): React.JSX.Element {
  return <MyTabs />;
}


export default Article;