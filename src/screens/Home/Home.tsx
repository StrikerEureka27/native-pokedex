import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import InputSearch from '../../components/Input/InputSearch';
import NavigationTabs from '../../components/Tabs/TabsNavigation';

function Home(): React.JSX.Element {

  const ScreenHeight = Dimensions.get("window").height;

  return (
    <View style={[styles.container, { height: ScreenHeight }]} >
      <InputSearch />
      <NavigationTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column',
  },
});

export default Home;
