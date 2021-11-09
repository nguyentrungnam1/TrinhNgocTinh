import React from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Divider } from "react-native-elements";

const widthWindow = Dimensions.get("window").width;

export default function AccountScreen({navigation}) {
  return (
    <View>
      <ScrollView>
        <AccountLogo />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 25,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.0,
            elevation: 1,
          }}
        >
          <AccountHeader icon="user" text="Thông tin cá nhân" />
          <AccountHeader icon="creditcard" text="Quản lý thẻ Coffee" />
          <AccountHeader icon="profile" text="Đơn hàng của bạn" />
        </View>
        <View style={{ padding: 10 }}>
          <Text>Thông tin tài khoản</Text>
          <Divider width={1} />
          <AccountItem icon="book" text="Địa chỉ giao hàng" />
          <AccountItem icon="setting" text="Thiết lập tài khoản" />
          <AccountItem icon="hearto" text="Sản phẩm yêu thích" />
        </View>
        <View style={{ padding: 10 }}>
          <Text>Thông tin ứng dụng</Text>
          <Divider width={1} />
          <AccountItem icon="earth" text="Ngôn ngữ" />
          <AccountItem icon="filetext1" text="Điều khoản và điều kiện" />
          <AccountItem icon="questioncircleo" text="Câu hỏi thường gặp" />
          <AccountItem icon="exclamationcircleo" text="Liên hệ" />
          <TouchableOpacity onPress = {()=>(navigation.replace("Login"))}>
            <AccountItem icon="logout" text="Đăng Xuất" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const AccountLogo = () => (
  <View>
    <Image
      source={require("../assets/icons/logo-coffe.png")}
      style={{
        width: widthWindow,
        height: 200,
        resizeMode: "contain",
        backgroundColor: "orange",
      }}
    />
  </View>
);

const AccountHeader = (props) => (
  <View
    style={{
      width: 100,
      height: 90,
      backgroundColor: "white",
      borderRadius: 15,
    }}
  >
    <TouchableOpacity style={{ marginLeft: 10 }}>
      <AntDesign name={props.icon} size={20} />
      <Text>{props.text}</Text>
    </TouchableOpacity>
  </View>
);

const AccountItem = (props) => (
  <View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <AntDesign name={props.icon} size={20} />
        <Text style={{ marginLeft: 10 }}>{props.text}</Text>
      </View>
      <AntDesign name="right" size={20} />
    </View>
    <Divider width={1} />
  </View>
);
