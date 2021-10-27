import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const widthWindow = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContain: {
    alignSelf: "center",
    width: widthWindow - 50,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "orange",
    paddingVertical: 10,
    marginBottom: 5,
  },
});
export default function Register({navigation}) {
  return (
    <View>
      <ScrollView>
        <View>
          <TouchableWithoutFeedback key={Keyboard.dismiss}>
            <Image
              source={require("../../assets/icon/logo-coffe.png")}
              style={{
                width: widthWindow,
                height: 200,
                resizeMode: "contain",
                backgroundColor: "orange",
              }}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={[styles.inputContain]}>
          <TextInput placeholder="Email" style={[styles.input]} />
          <TextInput placeholder="Họ" style={[styles.input]} />
          <TextInput placeholder="Tên" style={[styles.input]} />
          <TextInput placeholder="Mật Khẩu" style={[styles.input]} />
          <TextInput placeholder="Ngày Sinh" style={[styles.input]} />
          <TouchableOpacity activeOpacity = {0.9} style = {{marginTop: 15}} >
            <View
              style={{
                backgroundColor: "orange",
                height: 50,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 20, fontWeight: "300" }}>
                Đăng ký
              </Text>
            </View>
          </TouchableOpacity>
          <View style = {{flexDirection:"row" , justifyContent:"center", marginTop: 15}}>
            <Text>Bạn đã có tài khoản?  </Text>
            <TouchableOpacity onPress = {()=>(navigation.navigate("Login"))}>
              <Text style = {{color:"orange" , fontSize: 15, fontWeight: "300"}}>ĐĂNG NHẬP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
