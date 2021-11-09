import React, { useState } from "react";
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
  Alert
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { firebaseApp } from "../../firebase";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("Alert Title", "Đăng nhập thành công", [
          { text: "OK", onPress: () => navigation.push("TabNavigation") },
        ]);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("Sai mật khẩu");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  };
  return (
    <View>
      <LoginLogo />
      <View style={{ marginLeft: 10 }}>
        {/* <LoginSignIn handleLogin={handleLogin} /> */}
        <View style={{ marginTop: 10 }}>
          <View style={styles.flexC}>
            <AntDesign name="user" size={30} style={[{ top: 5 }]} />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(email) => setEmail(email)}
              style={[styles.size, styles.input]}
            />
          </View>
          <View style={styles.flexC}>
            <AntDesign name="lock" size={30} style={[{ top: 5 }]} />
            <TextInput
              placeholder="Mật Khẩu"
              value={password}
              onChangeText={(password) => setPassword(password)}
              secureTextEntry={true}
              style={[styles.size, styles.input]}
            />
          </View>
          <View style={{ margin: 15 }}>
            <Button title="Đăng nhập" onPress={handleLogin} />
            <TouchableOpacity>
              <Text style={{ color: "blue", alignSelf: "center" }}>
                Quên mật khẩu
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <LoginOther navigation={navigation} />
      </View>
    </View>
  );
}

const LoginLogo = () => (
  <View>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Image
        source={require("../../assets/icons/logo-coffe.png")}
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
// const LoginSignIn = ({ handleLogin }) => (

// )

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
