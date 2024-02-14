import {Text, useColorScheme, View, StyleSheet} from 'react-native';
import type {PropsWithChildren} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
  isHeader?: boolean;
}>;

function Section({
  children,
  title,
  isHeader = false,
}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={
        isHeader ? styles.headerSectionContainer : styles.sectionContainer
      }>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    margin: 0,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'column',
    display: 'flex',
  },
  headerSectionContainer: {
    margin: 0,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'column',
    display: 'flex',
    backgroundColor: 'red',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Section;
