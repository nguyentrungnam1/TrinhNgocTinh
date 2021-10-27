import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const widthWindow = Dimensions.get("window").width;
const heightWindow = Dimensions.get("window").height;

const styles = StyleSheet.create({
  size: {
    width: widthWindow - 50,
    height: 50,
  },
  input: {
    borderWidth: 1,
  },
  flexC: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default function Login({ navigation }) {
  return (
    <View>
      <LoginLogo />
      <View style={{ marginLeft: 10 }}>
        <LoginSignIn navigation = {navigation}/>
        <LoginOther navigation={navigation} />
      </View>
    </View>
  );
}

const LoginLogo = () => (
  <View>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
);
const LoginSignIn = ({navigation}) => (
  <View style = {{marginTop:10}}>
    <View style={styles.flexC}>
      <AntDesign name="user" size={30} style={[{ top: 5 }]} />
      <TextInput placeholder="Email" style={[styles.size, styles.input]} />
    </View>
    <View style={styles.flexC}>
      <AntDesign name="lock" size={30} style={[{ top: 5 }]} />
      <TextInput
        placeholder="Mật Khẩu"
        secureTextEntry={true}
        style={[styles.size, styles.input]}
      />
    </View>
    <View style={{ margin: 15 }}>
      <Button title="Đăng nhập" onPress = {()=>(navigation.navigate("TabNavigation"))}/>
      <TouchableOpacity>
        <Text style={{ color: "blue", alignSelf: "center" }}>
          Quên mật khẩu
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const LoginOther = ({ navigation }) => (
  <>
    <View style={{ margin: 15 }}>
      {/* <FontAwesome name="google" size={20} color="red" /> */}
      <Button title="Đăng nhập bằng facebook" color="blue" />
    </View>
    <View style={{ margin: 15 }}>
      {/* <FontAwesome name="google" size={20} color="red" /> */}
      <Button
        title="Đăng nhập bằng google"
        color="red"
        style={{ color: "red" }}
      />
    </View>
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={{ color: "blue", alignSelf: "center" }}>
          Chưa có tài khoản? Hãy bấm vào đây
        </Text>
      </TouchableOpacity>
    </View>
  </>
);
