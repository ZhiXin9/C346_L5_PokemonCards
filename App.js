import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome6";
import { View, Text, Image, TouchableOpacity, SectionList, StyleSheet } from 'react-native';

const datasource = [
    {
        title: "Psychic",
        bgColor: "purple",
        backgroundColor: "thistle",
        iconName: "eye",
        data: [
            { key: 'Abra', cardNumber: '63' },
            { key: 'Mr.Mime', cardNumber: '122' }
        ]
    },
    {
        title: "Fire",
        bgColor: "red",
        backgroundColor: "tomato",
        iconName: "fire",
        data: [
            { key: 'Charmander', cardNumber: '4' },
            { key: 'Moltres', cardNumber: '146' }
        ]
    },
    {
        title: "Grass",
        bgColor: "green",
        backgroundColor: "limegreen",
        iconName: "leaf",
        data: [
            { key: 'Bulbasaur', cardNumber: '1' },
            { key: 'Oddish', cardNumber: '43' }
        ]
    },
    {
        title: "Water",
        bgColor: "blue",
        backgroundColor: "dodgerblue",
        iconName: "water",
        data: [
            { key: 'Squirtle', cardNumber: '7' },
            { key: 'Psyduck', cardNumber: '54' }
        ]
    },
    {
        title: "Electric",
        bgColor: "goldenrod",
        backgroundColor: "yellow",
        iconName: "bolt",
        data: [
            { key: 'Pikachu', cardNumber: '25' },
            { key: 'Zapdos', cardNumber: '145' }
        ]
    }
];

const getImageUrl = (cardNumber) =>
    `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${cardNumber}-2x.png`;

const renderItem = ({ item, section }) => {
    return (
        <View style={[styles.itemContainer, { backgroundColor: section.backgroundColor }]}>
            <Text style={styles.textStyle}>{item.key}</Text>
            <Image source={{ uri: getImageUrl(item.cardNumber) }} style={styles.pokemonImage} />
        </View>
    );
};

const PokemonCardListApp = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Add Pokémon</Text>
            </TouchableOpacity>

            <SectionList
                contentContainerStyle={{ padding: 10 }}
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgColor, iconName } }) => (
                    <View style={[styles.sectionHeader, { backgroundColor: bgColor }]}>
                        <View style={styles.centeredContainer}>
                            <Icon name={iconName} size={20} color="white" style={styles.icon} />
                            <Text style={styles.headerText}>{title}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.cardNumber}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    addButton: {
        backgroundColor: '#0D98BA',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        alignSelf: 'center',
    },
    addButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
    sectionHeader: {
        padding: 10,
        marginBottom: 5,
        justifyContent: 'center',
    },
    centeredContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginRight: 8,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    textStyle: {
        fontSize: 25,
        textAlign: 'center',
        flex: 1,
        fontWeight: 'bold',
    },
    pokemonImage: {
        width: 200,
        height: 280,
    },
});

export default PokemonCardListApp;

