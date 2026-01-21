import React, {useState} from 'react';
import { StatusBar, View, Button, Text, TextInput, Alert } from 'react-native';

const Add = ({navigation}) => {
    const[name,setName] = useState("");
    const[pic,setPic] = useState("");

    const submitCard = async () => {
        let item = {card_name: name, card_pic: pic};
        try {
            const response = await fetch("https://onlinecardappwebservice-oxbe.onrender.com/addcard", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(item)
            });
            if (response.ok) {
                Alert.alert("Success", "Card added!");
                navigation.navigate("Home");
            } else {
                Alert.alert("Error", "Failed to add card");
            }
        } catch (error) {
            Alert.alert("Error", "Network issue");
        }
    };

    return (
        <View style={{padding: 20}}>
            <StatusBar/>
            <Text>Card Name:</Text>
            <TextInput
                style={{borderWidth:1, padding: 10, marginBottom: 10}}
                value={name}
                onChangeText={setName}
            />
            <Text>Card Pic URL:</Text>
            <TextInput
                style={{borderWidth:1, padding: 10, marginBottom: 20}}
                value={pic}
                onChangeText={setPic}
            />
            <Button title='Submit' onPress={submitCard} />
        </View>
    );
};

export default Add;
