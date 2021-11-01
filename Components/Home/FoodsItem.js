import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Divider } from "react-native-elements";

const foods = [
  {
    name: "Cà Phê Sữa đá",
    image_url:
      "https://minio.thecoffeehouse.com/image/admin/caphe-suada--bacsiu_408274_400x400.jpg",
    info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
    price: 32000,
  },
  {
    name: "Cà Phê Sữa Nóng",
    image_url:
      "https://minio.thecoffeehouse.com/image/admin/cfsua-nong_235317_400x400.jpg",
    info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
    price: 35000,
  },
  {
    name: "Cà Phê Sữa Đá Chai Fresh 250ML",
    image_url:
      "https://minio.thecoffeehouse.com/image/admin/BottleCFSD_496652_400x400.jpg",
    info: "Vẫn là hương vị cà phê sữa đậm đà quen thuộc của The Coffee House nhưng khoác lên mình một chiếc áo mới tiện lợi hơn, tiết kiệm hơn phù hợp với bình thường mới, giúp bạn tận hưởng một ngày dài trọn vẹn. *Sản phẩm dùng ngon nhất trong ngày. *Sản phẩm mặc định mức đường và không đá.",
    price: 79000,
  },
  {
    name: "Cà Phê Đen Nóng",
    image_url:
      "https://minio.thecoffeehouse.com/image/admin/cfden_nong_016851_400x400.jpg",
    info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
    price: 35000,
  },
  {
    name: "Caramel Macchiato Đá",
    image_url:
      "https://minio.thecoffeehouse.com/image/admin/caramel-macchiato_143623_400x400.jpg",
    info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
    price: 50000,
  },
  {
    name: "Cà Phê Sữa đá",
    image_url:
      "https://minio.thecoffeehouse.com/image/admin/caphe-suada--bacsiu_408274_400x400.jpg",
    info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
    price: 32000,
  },
  {
    name: "Cà Phê Sữa Nóng",
    image_url:
      "https://minio.thecoffeehouse.com/image/admin/cfsua-nong_235317_400x400.jpg",
    info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
    price: 35000,
  },
  {
    name: "Cà Phê Sữa Đá Chai Fresh 250ML",
    image_url:
      "https://minio.thecoffeehouse.com/image/admin/BottleCFSD_496652_400x400.jpg",
    info: "Vẫn là hương vị cà phê sữa đậm đà quen thuộc của The Coffee House nhưng khoác lên mình một chiếc áo mới tiện lợi hơn, tiết kiệm hơn phù hợp với bình thường mới, giúp bạn tận hưởng một ngày dài trọn vẹn. *Sản phẩm dùng ngon nhất trong ngày. *Sản phẩm mặc định mức đường và không đá.",
    price: 79000,
  },
  {
    name: "Cà Phê Đen Nóng",
    image_url:
      "https://minio.thecoffeehouse.com/image/admin/cfden_nong_016851_400x400.jpg",
    info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
    price: 35000,
  },
  {
    name: "Caramel Macchiato Đá",
    image_url:
      "https://minio.thecoffeehouse.com/image/admin/caramel-macchiato_143623_400x400.jpg",
    info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
    price: 50000,
  },
  {
    name: "Cà Phê Đen Nóng",
    image_url:
      "https://minio.thecoffeehouse.com/image/admin/cfden_nong_016851_400x400.jpg",
    info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
    price: 35000,
  },
  {
    name: "Caramel Macchiato Đá",
    image_url:
      "https://minio.thecoffeehouse.com/image/admin/caramel-macchiato_143623_400x400.jpg",
    info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
    price: 50000,
  },
  {
    name: "Cà Phê Đen Nóng",
    image_url:
      "https://minio.thecoffeehouse.com/image/admin/cfden_nong_016851_400x400.jpg",
    info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
    price: 35000,
  },
  {
    name: "Caramel Macchiato Đá",
    image_url:
      "https://minio.thecoffeehouse.com/image/admin/caramel-macchiato_143623_400x400.jpg",
    info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
    price: 50000,
  },
];

const widthWindow = Dimensions.get("window").width;

export default function FoodsItem() {
  return (
    <View>
      <FoodSearch />
      <ScrollView style = {{height: 700}}>
        {foods.map((food, index) => (
          <TouchableOpacity key={index}>
            <View
              style={{
                flexDirection: "row",
                margin: 7,
                backgroundColor: "white",
                height: 110,
                borderRadius: 5,
              }}
            >
              <FoodImages image={food.image_url} />
              <FoodInfo
                name={food.name}
                description={food.info}
                price={food.price}
              />
            </View>
            <Divider width={0.5} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const FoodSearch = () => (
  <View
    style={{
      width: widthWindow,
      height: 100,
      backgroundColor: "white",
      marginTop: 30,
      justifyContent: "flex-end",
      paddingBottom: 10,
      marginBottom: 5,
    }}
  >
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <FontAwesome name="search" size={30} style={{ position: "relative" }} />
      <TextInput
        placeholder="Tìm kiếm"
        style={{
          borderRadius: 5,
          backgroundColor: "gray",
          width: widthWindow - 100,
          height: 60,
        }}
      />
      <TouchableOpacity>
        <Text>Tìm kiếm</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const FoodImages = (props) => (
  <View
    style={{
      justifyContent: "center",
    }}
  >
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: 100, height: 100, borderRadius: 10 }}
    />
  </View>
);
const FoodInfo = (props) => (
  <View style={{ paddingLeft: 10}}>
    <Text style={{ fontSize: 15, fontWeight: "300", paddingBottom: 5 }}>
      {props.name}
    </Text>
    <Text style={{ height: 50, width: 250 }}>{props.description}</Text>
    <Text style={{ fontSize: 18, paddingTop: 10 }}>{props.price}</Text>
  </View>
);
