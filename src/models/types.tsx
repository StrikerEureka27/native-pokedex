// import { createMaterialStackNavigator } from '@react-navigation/material-top-tabs';

import type { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';

export type ICreateTab = {
  name: string;
  component: JSX.Element;
}

export type MaterialTopTabParamsList = {
  Pokémons: undefined;
  Abilities: undefined;
  Moves: undefined;
  Items: undefined;
  About: undefined;
  Stats: undefined;
  Evolution: undefined;
  Location: undefined;
};


export type PokemonScreenProps = MaterialTopTabScreenProps<MaterialTopTabParamsList, 'Pokémons', 'TabNavigator01'>;
export type AbilitiesScreenProps = MaterialTopTabScreenProps<MaterialTopTabParamsList, 'Abilities', 'TabNavigator01'>;
export type MovesScreenProps = MaterialTopTabScreenProps<MaterialTopTabParamsList, 'Moves', 'TabNavigator01'>;
export type ItemsScreenProps = MaterialTopTabScreenProps<MaterialTopTabParamsList, 'Items', 'TabNavigator01'>;

export type AboutScreenProps = MaterialTopTabScreenProps<MaterialTopTabParamsList, 'About', 'TabNavigator01'>;
export type StatsScreenProps = MaterialTopTabScreenProps<MaterialTopTabParamsList, 'Stats', 'TabNavigator01'>;
export type EvolutionScreenProps = MaterialTopTabScreenProps<MaterialTopTabParamsList, 'Evolution', 'TabNavigator01'>;
export type LocationScreenProps = MaterialTopTabScreenProps<MaterialTopTabParamsList, 'Location', 'TabNavigator01'>;