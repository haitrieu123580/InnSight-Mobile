import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Pressable, Modal } from 'react-native';
// import { Button } from 'react-native';
import { Button } from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Autocomplete from 'react-native-autocomplete-input';
import VNProvince from '../../utils/VNProvince';
import DateRangePicker from '../date-range-picker/DateRangePicker';
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { ModalButton } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalContent } from "react-native-modals";

const SearchBox = ({ navigation }) => {
    // const [date, setDate] = useState(new Date())
    // const [open, setOpen] = useState(false)
    const [openDateModel, setOpenDateModel] = useState(false);
    const [openOptionModal, setOpenOptionModal] = useState(false);
    const [openProvinceModal, setOpenProvinceModal] = useState(false);
    const [provinces, setProvinces] = useState('');
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [modalVisible, setmodalVisible] = useState(false);
    // const []
    const search = () => {
        navigation.navigate('Result')
    };
    return (
        <View style={styles.container}>
            <View style={{ ...styles.inputWrapper, position: 'relative' }}>
                <Icon name="location-pin" size={30} color="#004EA9" />
                <Pressable style={styles.input} onPress={() => { setOpenProvinceModal(true) }}>
                    <Text>
                        Điểm đến
                    </Text>
                </Pressable>
            </View>
            <View style={styles.inputWrapper}>
                <TouchableOpacity style={styles.inputWrapper} onPress={() => setOpen(true)}>
                    <Icon name="date-range" size={30} color="#004EA9" />
                </TouchableOpacity>
                <Pressable style={styles.input} onPress={() => { setOpenDateModel(true) }}>
                    <Text>
                        Checkin-Checkout
                    </Text>
                </Pressable>

            </View>


            <View style={styles.inputWrapper}>
                <Icon name="person" size={30} color="#004EA9" />
                <Pressable style={styles.input} onPress={() => { setOpenOptionModal(true); setmodalVisible(!modalVisible) }}>
                    <TextInput
                        placeholderTextColor="black"
                        editable={false}
                        placeholder={` ${rooms} room • ${adults} adults • ${children} Children`}
                    />
                </Pressable>
            </View>

            <Button
                style={styles.button}
                title="Tìm"
                onPress={search}
            />
            {openDateModel && (
                <>
                    <Modal>
                        <DateRangePicker handleSave={() => setOpenDateModel(false)} />
                        {/* <Button
                            style={styles.button}
                            title="Save"
                            onPress={() => setOpenDateModel(false)} /> */}
                        <Button
                            buttonStyle={{ ...styles.buttonCancel, marginTop: 10 }}
                            title="Back"
                            onPress={() => setOpenDateModel(false)} />
                    </Modal>
                </>
            )}
            {openProvinceModal &&
                (
                    <>
                        <Modal>
                            <Button
                                buttonStyle={styles.buttonCancel}
                                title="Back"
                                onPress={() => setOpenProvinceModal(false)} />
                        </Modal>
                    </>
                )
            }
            {openOptionModal &&
                (
                    <>
                        <BottomModal
                            swipeThreshold={200}
                            onBackdropPress={() => setmodalVisible(!modalVisible)}
                            swipeDirection={["up", "down"]}
                            footer={
                                <ModalFooter>
                                    <ModalButton
                                        text="Apply"
                                        style={{
                                            marginBottom: 20,
                                            color: "white",
                                            backgroundColor: "#003580",
                                        }}
                                        onPress={() => setmodalVisible(!modalVisible)}
                                    />
                                </ModalFooter>
                            }
                            modalTitle={<ModalTitle title="Select rooms and guests" />}
                            modalAnimation={
                                new SlideAnimation({
                                    slideFrom: "bottom",
                                })
                            }
                            onHardwareBackPress={() => setmodalVisible(!modalVisible)}
                            visible={modalVisible}
                            onTouchOutside={() => setmodalVisible(!modalVisible)}
                        >
                            <ModalContent style={{ width: "100%", height: 310 }}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginVertical: 15,
                                    }}
                                >
                                    <Text style={{ fontSize: 16, fontWeight: "500" }}>Rooms</Text>
                                    <Pressable
                                        style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
                                    >
                                        <Pressable
                                            onPress={() => setRooms(Math.max(1, rooms - 1))}
                                            style={{
                                                width: 26,
                                                height: 26,
                                                borderRadius: 13,
                                                borderColor: "#BEBEBE",
                                                backgroundColor: "#E0E0E0",
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    textAlign: "center",
                                                    fontSize: 20,
                                                    fontWeight: "600",
                                                    paddingHorizontal: 6,
                                                }}
                                            >
                                                -
                                            </Text>
                                        </Pressable>

                                        <Pressable>
                                            <Text
                                                style={{
                                                    textAlign: "center",
                                                    fontSize: 18,
                                                    fontWeight: "500",
                                                    paddingHorizontal: 6,
                                                }}
                                            >
                                                {rooms}
                                            </Text>
                                        </Pressable>

                                        <Pressable
                                            onPress={() => setRooms((c) => c + 1)}
                                            style={{
                                                width: 26,
                                                height: 26,
                                                borderRadius: 13,
                                                borderColor: "#BEBEBE",
                                                backgroundColor: "#E0E0E0",
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    textAlign: "center",
                                                    fontSize: 20,
                                                    fontWeight: "600",
                                                    paddingHorizontal: 6,
                                                }}
                                            >
                                                +
                                            </Text>
                                        </Pressable>
                                    </Pressable>
                                </View>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginVertical: 15,
                                    }}
                                >
                                    <Text style={{ fontSize: 16, fontWeight: "500" }}>Adults</Text>
                                    <Pressable
                                        style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
                                    >
                                        <Pressable
                                            onPress={() => setAdults(Math.max(1, adults - 1))}
                                            style={{
                                                width: 26,
                                                height: 26,
                                                borderRadius: 13,
                                                borderColor: "#BEBEBE",
                                                backgroundColor: "#E0E0E0",
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    textAlign: "center",
                                                    fontSize: 20,
                                                    fontWeight: "600",
                                                    paddingHorizontal: 6,
                                                }}
                                            >
                                                -
                                            </Text>
                                        </Pressable>

                                        <Pressable>
                                            <Text
                                                style={{
                                                    textAlign: "center",
                                                    fontSize: 18,
                                                    fontWeight: "500",
                                                    paddingHorizontal: 6,
                                                }}
                                            >
                                                {adults}
                                            </Text>
                                        </Pressable>

                                        <Pressable
                                            onPress={() => setAdults((c) => c + 1)}
                                            style={{
                                                width: 26,
                                                height: 26,
                                                borderRadius: 13,
                                                borderColor: "#BEBEBE",
                                                backgroundColor: "#E0E0E0",
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    textAlign: "center",
                                                    fontSize: 20,
                                                    fontWeight: "600",
                                                    paddingHorizontal: 6,
                                                }}
                                            >
                                                +
                                            </Text>
                                        </Pressable>
                                    </Pressable>
                                </View>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginVertical: 15,
                                    }}
                                >
                                    <Text style={{ fontSize: 16, fontWeight: "500" }}>Children</Text>
                                    <Pressable
                                        style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
                                    >
                                        <Pressable
                                            onPress={() => setChildren(Math.max(0, children - 1))}
                                            style={{
                                                width: 26,
                                                height: 26,
                                                borderRadius: 13,
                                                borderColor: "#BEBEBE",
                                                backgroundColor: "#E0E0E0",
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    textAlign: "center",
                                                    fontSize: 20,
                                                    fontWeight: "600",
                                                    paddingHorizontal: 6,
                                                }}
                                            >
                                                -
                                            </Text>
                                        </Pressable>

                                        <Pressable>
                                            <Text
                                                style={{
                                                    textAlign: "center",
                                                    fontSize: 18,
                                                    fontWeight: "500",
                                                    paddingHorizontal: 6,
                                                }}
                                            >
                                                {children}
                                            </Text>
                                        </Pressable>

                                        <Pressable
                                            onPress={() => setChildren((c) => c + 1)}
                                            style={{
                                                width: 26,
                                                height: 26,
                                                borderRadius: 13,
                                                borderColor: "#BEBEBE",
                                                backgroundColor: "#E0E0E0",
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    textAlign: "center",
                                                    fontSize: 20,
                                                    fontWeight: "600",
                                                    paddingHorizontal: 6,
                                                }}
                                            >
                                                +
                                            </Text>
                                        </Pressable>
                                    </Pressable>
                                </View>
                            </ModalContent>
                        </BottomModal>
                    </>
                )
            }
        </View >
    );
};

export default SearchBox;

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderColor: '#EEC42D',
        margin: 20,
        padding: 10,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        // flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderBottomWidth: 1,
        flex: 1,
    },
    button: {
        backgroundColor: '#4344E5',
        height: 40,
    },
    buttonCancel: {
        backgroundColor: 'red',
        height: 40,
    },
    autocompleContainer: {
        position: "absolute",
        zIndex: 3,
        overflow: "hidden"
    }
});
