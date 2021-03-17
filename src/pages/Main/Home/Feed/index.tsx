import React from 'react';
import {Text, StyleSheet, View, ImageBackground, SafeAreaView, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const image = { uri: "https://thesuffolkjournal.com/wp-content/uploads/2019/10/PONY-album-cover-EXP-5x5-900x900.jpg" };

// import image from 'src/assets/ponny.jpg';
import CardSong from '../../../../components/CardSong/index';
import CardAlbum from '../../../../components/CardAlbum/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    height: 500,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "transparent"
  },
  contentInfo:{
    backgroundColor: "black",
    height: 500,
    marginTop: 120,
    borderTopRightRadius: 50,
    overflow: 'hidden', 
  },
  titleArtistDefault: {
    color: "black",
    fontSize: 20,
    paddingHorizontal: 20,
    transform: [{ translateY: 179 }],
    position: 'relative',
  },
  titleNameArtist: {
    fontSize: 45,
    color: "black",
    fontWeight: 'bold',
    position: 'relative',
    paddingHorizontal: 20,
    transform: [{ translateY: 179 }],
  },
  artistInfo: {
    flex: 1, 
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleData:{
    width: 125, 
    height: 50, 
    alignItems: "center",
    justifyContent: "center", 
  },
  titleText: {
    fontSize: 18,
    color: 'gray',
    fontWeight: '600',
  },
  valueData: {
    fontSize: 19,
    color: 'gray',
    fontWeight: '600',
  },
  popularSongs: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titlePopular: {
    fontSize: 20,
    color: 'gray',
    marginTop: 20,
    fontWeight: '700',
    paddingHorizontal: 16,
  },
  album: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleAlbum: {
    fontSize: 20,
    color: 'gray',
    fontWeight: '700',
    paddingHorizontal: 16,
  },
  listAlbums: {
    marginTop: 20,
    marginBottom: 20,
    paddingBottom: 50,
    paddingHorizontal: 8,
  },
  contentIconPlay:{
    zIndex: 1,
    height: 80,
    paddingHorizontal: 50,
    alignItems: 'flex-end',
    transform: [{ translateY: 162 }],
  },
  ciclePlay: {
    width: 50,
    zIndex: 1,
    height: 70,
    borderRadius: 200,
    textAlign: 'right',
    alignItems: 'center',
    paddingHorizontal: 35,
    backgroundColor: '#085dfb',
  },
  iconPlay: {
    width: 70,
    zIndex: 1,
    height: 80,
    fontSize: 45,
    color: 'white',
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  header:{
    height: 40,
    marginTop: 90,
    position:'relative',
    flexDirection: 'row',
    justifyContent:'center',
  },
  backIcon:{
    width: '50%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  infoIcon:{
    width: '50%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  headerIcon: {
    width: 40,
    height: 40,
    opacity: 0.5,
    fontSize: 30,
    color: 'white',
    borderRadius: 13,
    fontWeight: '700',
    paddingVertical: 4,
    textAlign: 'center',
    marginHorizontal: 30,
    paddingHorizontal: 7,
    backgroundColor: 'gray',
  }
});

const Feed = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      <View style={styles.header}>
        <View style={styles.backIcon}> 
          <TouchableOpacity >
            <Icon style={styles.headerIcon} name="chevron-back-outline" />
          </TouchableOpacity>
        </View>
        <View style={styles.infoIcon}>
          <TouchableOpacity>
            <Icon style={styles.headerIcon} name="ellipsis-horizontal" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.titleArtistDefault}>Artist</Text>
      <Text style={styles.titleNameArtist}>Name Artist</Text>

      <View style={styles.contentIconPlay}>
        <View style={styles.ciclePlay}>
          <Icon style={styles.iconPlay} name="caret-forward-outline" />
        </View>
      </View>
      <View style={styles.contentInfo}>
        <SafeAreaView> 
          <ScrollView>
            <View style={styles.artistInfo}>
              <View style={styles.titleData} >
                <Text style={styles.titleText} >Songs</Text>
                <Text style={styles.valueData} >112</Text>
              </View>
              <View style={styles.titleData} >
                <Text style={styles.titleText} >Followers</Text>
                <Text style={styles.valueData} >60M</Text>
              </View>
              <View style={styles.titleData} >
                <Text style={styles.titleText} >Following</Text>
                <Text style={styles.valueData} >1563</Text>
              </View>
            </View>

            <View style={styles.popularSongs} >
              <Text style={styles.titlePopular} >Popular</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
              <CardSong 
              cover={"https://yt3.ggpht.com/ytc/AAUvwnjxGJLyDfVwbTvsI7xy19hII5bbpAjGogGPh85sLg=s900-c-k-c0x00ffffff-no-rj" }
              name='Summer Days'  
              />
              <CardSong 
              cover={"https://yt3.ggpht.com/ytc/AAUvwnjxGJLyDfVwbTvsI7xy19hII5bbpAjGogGPh85sLg=s900-c-k-c0x00ffffff-no-rj" }
              name='Summer Days'  
              />
              <CardSong 
              cover={"https://yt3.ggpht.com/ytc/AAUvwnjxGJLyDfVwbTvsI7xy19hII5bbpAjGogGPh85sLg=s900-c-k-c0x00ffffff-no-rj" }
              name='Summer Days'  
              />
              <CardSong 
              cover={"https://yt3.ggpht.com/ytc/AAUvwnjxGJLyDfVwbTvsI7xy19hII5bbpAjGogGPh85sLg=s900-c-k-c0x00ffffff-no-rj" }
              name='Summer Days'  
              />
              <CardSong 
              cover={"https://yt3.ggpht.com/ytc/AAUvwnjxGJLyDfVwbTvsI7xy19hII5bbpAjGogGPh85sLg=s900-c-k-c0x00ffffff-no-rj" }
              name='Summer Days'  
              />
            </ScrollView>
            <View style={styles.album} >
              <Text style={styles.titleAlbum} >Albums</Text>
            </View>
            <View style={styles.listAlbums}>
              <CardAlbum 
                cover={"https://yt3.ggpht.com/ytc/AAUvwnjxGJLyDfVwbTvsI7xy19hII5bbpAjGogGPh85sLg=s900-c-k-c0x00ffffff-no-rj" }
                albumName='Summer Days'  
                year='2012'

                />
                <CardAlbum 
                cover={"https://yt3.ggpht.com/ytc/AAUvwnjxGJLyDfVwbTvsI7xy19hII5bbpAjGogGPh85sLg=s900-c-k-c0x00ffffff-no-rj" }
                albumName='Summer Days'  
                year='2012'
                />
                <CardAlbum 
                cover={"https://yt3.ggpht.com/ytc/AAUvwnjxGJLyDfVwbTvsI7xy19hII5bbpAjGogGPh85sLg=s900-c-k-c0x00ffffff-no-rj" }
                albumName='Monday'  
                year='2012'
                />
                <CardAlbum 
                cover={"https://yt3.ggpht.com/ytc/AAUvwnjxGJLyDfVwbTvsI7xy19hII5bbpAjGogGPh85sLg=s900-c-k-c0x00ffffff-no-rj" }
                albumName='Monday'  
                year='2012'
                />
                <CardAlbum 
                cover={"https://yt3.ggpht.com/ytc/AAUvwnjxGJLyDfVwbTvsI7xy19hII5bbpAjGogGPh85sLg=s900-c-k-c0x00ffffff-no-rj" }
                albumName='Monday'  
                year='2012'
                />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
    </View>
  );
};
export default Feed;
