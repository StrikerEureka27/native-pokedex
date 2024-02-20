import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export type Colors = 'red' | 'blue' | 'yellow' | 'green' | 'purple' | 'white' | '#FF69A9' | '#eb96a1';

type IChip = {
    name: string, 
    color: Colors,
    fontColor: Colors,
};


function Chip ({ name, color, fontColor }: IChip):React.JSX.Element{

    return (
        <View style={[styles.container, { backgroundColor: color }]} >
            <Text style={[{color: fontColor}]} >{name}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: { 
        alignItems: 'center',
        width: 60, 
        margin: 3,
        padding: 5, 
        borderColor: 'black',
        backgroundColor: 'red',
        borderRadius: 10
    }
});


export default Chip;
