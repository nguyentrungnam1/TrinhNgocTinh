import React, { useState } from "react";
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
  Alert,
} from "react-native";
import { firebaseApp } from "../../firebase";

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
export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("Alert Title", "Đăng ký thành công email" + email, [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => navigation.replace("Login") },
        ]);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("Alert Title", "Tài khoản email đã được sử dụng", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK" },
          ]);
        }

        if (error.code === "auth/invalid-email") {
          Alert.alert("Alert Title", "Địa chỉ email không hợp lệ", [
            {
              text: "Cancel",
              style: "cancel",
            },
            { text: "OK" },
          ]);
        }
      });
  };

  return (
    <View>
      <ScrollView>
        <View>
          <TouchableWithoutFeedback key={Keyboard.dismiss}>
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
        <View style={[styles.inputContain]}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
            style={[styles.input]}
          />
          <TextInput placeholder="Họ" style={[styles.input]} />
          <TextInput placeholder="Tên" style={[styles.input]} />
          <TextInput
            placeholder="Mật Khẩu"
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => setPassword(password)}
            style={[styles.input]}
          />
          <TextInput placeholder="Ngày Sinh" style={[styles.input]} />
          <TouchableOpacity style={{ marginTop: 15 }} onPress={handleRegister}>
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            <Text>Bạn đã có tài khoản? </Text>
            <TouchableOpacity onPress={() => navigation.replace("Login")}>
              <Text
                style={{ color: "orange", fontSize: 15, fontWeight: "300" }}
              >
                ĐĂNG NHẬP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
