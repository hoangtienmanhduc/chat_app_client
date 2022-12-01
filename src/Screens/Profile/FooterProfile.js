import React, { useEffect, useState, Component, cloneElement } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-android'
import Ionicons from "react-native-vector-icons/Ionicons"
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Avatar, ListItem } from 'react-native-elements';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign"



const FooterProfile = () => {
    const navigation = useNavigation()
    return (
        <View style={{ backgroundColor: 'white'}}>
            <View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("TrangCaNhan")}>
                        <ListItem>
                            <Avatar
                                size="medium"
                                rounded
                                source={{ uri: 'https://media.gettyimages.com/photos/handsome-young-adult-businessman-with-stubble-picture-id1250238624?k=20&m=1250238624&s=612x612&w=0&h=35Sf2RXBiMDoaabub7XpBV--FM_wuEf8R1lbgO_GquM=' }} />
                            <ListItem.Content>
                                <ListItem.Title>Hoàng Tiến Mạnh Đức</ListItem.Title>
                                <Text style={{ color: 'gray' }}>Xem trang cá nhân</Text>
                            </ListItem.Content>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity style={{ marginLeft: 30 }}>
                                    <MaterialCommunityIcons name="cog-transfer-outline" size={30} color={"#00bfff"} />
                                </TouchableOpacity>
                            </View>
                        </ListItem>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#d3d3d3', height: 10 }}></View>
                <View style={{marginTop:10,marginLeft:15}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                    <Ionicons name="wallet-outline" size={30} color={"#00bfff"} />
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:17}}>Ví QR</Text>
                            <Text style={{color:'gray'}}>Lưu trữ và xuất trình các mã QR quan trọng</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#d3d3d3', height: 1,marginTop:20,marginLeft:60}}></View>
                <View style={{marginTop:10,marginLeft:15}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <Ionicons name="ios-cloud-outline" size={30} color={"#00bfff"} />
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:17}}>Ví QR</Text>
                            <Text style={{color:'gray'}}>Lưu trữ và xuất trình các mã QR quan trọng</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#d3d3d3', height: 10,marginTop:20 }}></View>
                <View style={{marginTop:10,marginLeft:15}}>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                        <MaterialCommunityIcons name="shield-star-outline" size={30} color={"#00bfff"} />
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:17}}>Tài khoản và bảo mật</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#d3d3d3', height: 1,marginTop:10,marginLeft:60}}></View>
                <View style={{marginTop:10,marginLeft:15,height:40}}>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                    <AntDesign name="lock1" size={30} color={"#00bfff"} />
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:17}}>Quyền riêng tư</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
};

export default FooterProfile

const styles = StyleSheet.create({

})

