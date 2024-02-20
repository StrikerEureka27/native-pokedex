import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import Abilities from '../../screens/Abilities/Abilities';
import Items from '../../screens/Items/Items';

const BottonTab = createBottomTabNavigator();

function BottomTabNavigation(): React.JSX.Element {
  return (
    <BottonTab.Navigator>
      <BottonTab.Screen name="Items" component={Items} />
      <BottonTab.Screen name="Settings" component={Abilities} />
    </BottonTab.Navigator>
  );
}

export default BottomTabNavigation;
