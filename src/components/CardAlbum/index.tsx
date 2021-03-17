import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 125,
        width: '100%',
        elevation: 2,
        borderRadius: 10,
        flexDirection:'row',
    },
    containerAlbum: {
        flex: 1,
        height: '100%',
        marginTop: 10,
        flexDirection:'row',
        paddingHorizontal: 8,
    },
    imageAlbum: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    albumYear: {
        fontSize: 15,
        color: 'gray',
        width: '100%',
        paddingHorizontal: 16,
    },
    albumName:{
        width: 150,
        fontSize: 17,
        color: 'gray',
        paddingHorizontal: 16,
    },
    infoAlbum: {
        width: '50%',
        alignItems: 'center',
    },
    infoIcon:{
        width: 20,
        fontSize: 20,
        color: 'gray',
    }
});

const CardAlbum = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container} > 
            <View style={styles.containerAlbum} >
                <Image style={styles.imageAlbum} source={{ uri: "https://yt3.ggpht.com/ytc/AAUvwnjxGJLyDfVwbTvsI7xy19hII5bbpAjGogGPh85sLg=s900-c-k-c0x00ffffff-no-rj" }} /> 
                <View>
                    <Text style={styles.albumName}> {props.albumName}</Text>
                    <Text style={styles.albumYear}> {props.year}</Text>
                </View>
                <View style={styles.infoAlbum}> 
                    <TouchableOpacity>
                        <Icon  style={styles.infoIcon} name="ellipsis-horizontal" />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
  };
  export default CardAlbum;