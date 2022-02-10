import React from 'react';
import { Alert, SafeAreaView, ScrollView, View, Text, TouchableHighlight, TouchableOpacity, Button, Image, Pressable, StyleSheet, Touchable } from 'react-native';

function nameProcessing(name){
    const arrName = name.split(' ');
    arrName.unshift("Sir.");
    return arrName.join(' ');
}

const MomentButton = (props) => {

    const { name, date, time } = props;

    return (
        <TouchableOpacity style={styles.momentContainer}>
            <Text style={[{ width: 48, color: '#111', textAlign: 'center', fontSize: 17 }, styles.weights.semiBold]}>{time}{'\n'}PM</Text>

            <View style={{ marginLeft: 25 }}>
                <Text style={[{ color: '#111', fontSize: 16, paddingVertical: 2 }, styles.weights.semiBold]}>{name}</Text>
                <Text style={[{ color: '#111', fontSize: 13 }, styles.weights.light]}>{date}</Text>
            </View>
        </TouchableOpacity>
    )
};

const SortByContent = (props) => {

    const { setNewest, setShowSort } = props;

    function newestHandler(){
        setNewest(true);
        setShowSort(false);
    }

    function oldestHandler(){
        setNewest(false);
        setShowSort(false);
    }

    return (
        <View style={{ width: 160, paddingVertical: 10, position: 'absolute', zIndex: 1, top: 45, right: 30, backgroundColor: 'white', borderWidth: 1, borderRadius: 7, borderColor: '#E7E7E7' }}>
            <TouchableOpacity onPress={newestHandler}>
                <View style={{  marginVertical: 3, paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={[{ color: '#111', fontSize: 15 }, styles.weights.regular]}>Newest</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={oldestHandler}>
                <View style={{  marginVertical: 3, paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={[{ color: '#111', fontSize: 15 }, styles.weights.regular]}>Oldest</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const App = (props) => {

    const [ condition, setCondition ] = React.useState(8);
    const [ showSort, setShowSort ] = React.useState(false);
    const [ newest, setNewest ] = React.useState(true);

    const dataActivity = [
        { name: "Hangout with my friends", date: "22 Jan 2022", time: "7" },
        { name: "I just back from square city", date: "22 Jan 2022", time: "8.10" },
        { name: "Went to shopping at Walmart", date: "22 Jan 2022", time: "8.37" },
        { name: "Just back from shopping", date: "22 Jan 2022", time: "9.29" },
        { name: "My friends invited me to join for lunch", date: "22 Jan 2022", time: "10.38" },
        { name: "Just back from gang lunch", date: "22 Jan 2022", time: "12.10" }
    ];

    function sortByHandler(){
        showSort ? setShowSort(false) : setShowSort(true);
    }

    const MyMoments = () => {
        if(newest){
            let data = [];

            for(let i = dataActivity.length-1; i > 0; i--){
                data.push(dataActivity[i]);
            }

            console.log(data);

            const finalData = data.map((moment, index) => {
                return <MomentButton key={index+1} name={moment.name} date={moment.date} time={moment.time} />
            });

            return finalData;

        } else {
            return dataActivity.map((moment, index) => {
                return <MomentButton key={index+1} name={moment.name} date={moment.date} time={moment.time} />
            });
        }
    }

    return (
        <ScrollView style={styles.mainContainer}>

            <View style={styles.topNavContainer}>
                <Text style={styles.logoText}> Livefy </Text>
            </View>

            <View style={styles.bannerContainer}>
                <Text style={[{ fontSize: 30, color: 'white' }, styles.weights.semiBold]}>Total {'\n'}Activity</Text>
                <Text style={[{ fontSize: 45, color: 'white' }, styles.weights.semiBold]}>{condition}</Text>
            </View>

            <View style={{ marginTop: 30 }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 30, position: 'relative' }}>
                    <Text style={[{ color: '#111', fontSize: 18 }, styles.weights.semiBold]}>Today Activity</Text>

                    <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 7, borderRadius: 20  }} onPress={sortByHandler}>
                        <Text style={[{ color: '#111' }, styles.weights.light]}>Sort By</Text>
                    </TouchableOpacity>

                    { showSort && <SortByContent setNewest={setNewest} setShowSort={setShowSort} /> }
                </View>

                <View style={{ marginTop: 15 }}>
                    { <MyMoments/> }
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 4,
        height: 4
    },
    mainContainer: {
        height: 1600,
        paddingBottom: 30,
        backgroundColor: 'white',
    },
    topNavContainer: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#127DFC',
    },
    bannerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 25,
        paddingHorizontal: 25,
        backgroundColor: '#0E64CB'
    },
    momentContainer: { 
        paddingHorizontal: 30, 
        paddingVertical: 15, 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        borderBottomWidth: 1, 
        borderBottomColor: '#E7E7E7'
    },
    logoText: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'Poppins-SemiBold',
    },
    weights: {
        light: {
            fontFamily: "Poppins-Light"
        },
        regular: {
            fontFamily: "Poppins-Regular"
        },
        medium: {
            fontFamily: "Poppins-Medium"
        },
        semiBold: {
            fontFamily: "Poppins-SemiBold",
        },
        bold: {
            fontFamily: "Poppins-Bold"
        }
    }
});

export default App;