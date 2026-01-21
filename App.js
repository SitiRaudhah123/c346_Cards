import React, { useState, useEffect } from 'react';
import {
    FlatList,
    StatusBar,
    Text,
    TextInput,
    View,
    Image,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

let originalData = [];

const App = () => {
    const [mydata, setMyData] = useState([]);

    const myurl = 'https://onlinecardappwebservice-oxbe.onrender.com/allcards';

    useEffect(() => {
        fetch(myurl)
            .then((response) => response.json())
            .then((myJson) => {
                setMyData(myJson);
                originalData = myJson;
            });
    }, []);

    const FilterData = (text) => {
        if (text !== '') {
            const lower = text.toLowerCase();
            const myFilterData = originalData.filter((item) =>
                item.album_name.toLowerCase().includes(lower)
            );
            setMyData(myFilterData);
        } else {
            setMyData(originalData);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.cardRow}>
            <Text style={styles.cardName}>{item.cards_name}</Text>
            <Image
                source={{ uri: item.card_pic }}
                style={styles.cardImage}
                resizeMode="cover"
            />
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
            <StatusBar />
            <Text>Search:</Text>
            <TextInput
                style={styles.searchInput}
                onChangeText={FilterData}
            />
            <FlatList
                data={mydata}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    searchInput: {
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
    },
    cardRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
    },
    cardName: {
        flex: 1,
        fontSize: 16,
        marginRight: 8,
    },
    cardImage: {
        width: 140,
        height: 180,
    },
});

export default App;