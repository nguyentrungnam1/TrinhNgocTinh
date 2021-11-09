import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const localRestaurants = [
  {
    image_url:
      "https://feed.thecoffeehouse.com//content/images/2021/10/App-news--5-.jpg",
    title: "CUỐI THÁNG VUI TƯƠI - RỘN RÀNG DEAL ĐỈNH",
    text: "Từ ngày 27/10 đến hết 29/10, nhập mã VUITUOI, bạn nhận ngay ưu đãi MUA 1 TẶNG 1 để thưởng thức các món nước ngon.",
    date: "18/10",
  },
  {
    image_url:
      "https://feed.thecoffeehouse.com//content/images/2021/10/app-news--4--1.jpg",
    title: "ĐỔI BEAN NHANH LẤY ƯU ĐÃI XỊN - VI VU MỜI “NGƯỜI THƯƠNG”",
    text:"Tèn ten, đó là đổi BEAN á. Nhớ đổi liền nha, để mình còn mời “người thương” nữa. Vì BEAN tích luỹ từ ngày 01/01/2021 - 31/03/2021, sẽ hết hạn vào ngày 31/10 này đó bạn ơi!",
    date: "17/10",
  },
  {
    image_url:
      "https://feed.thecoffeehouse.com//content/images/2021/10/NOTI.jpg",
    title: "DEAL SIÊU YÊU - CHIỀU BẠN HẾT MỨC",
    text:"20/10 năm nay, hãy để The Coffee House thương bạn thật nhiều với deal siêu yêu MUA 1 TẶNG 1 khi nhập mã: PHAIDEP, thay cho lời chúc ngọt ngào gửi đến hội chị em mình sẽ luôn thật tươi trẻ rạng ngời và hạnh phúc nhé!",
    date: "16/10",
  },
  {
    image_url:
      "https://feed.thecoffeehouse.com//content/images/2021/10/social.jpg",
    title: "RỘN RÀNG GỌI MÓN, NHÀ & MOMO MỜI DEAL XỊN SÒ",
    text:"Từ 12/10 đến hết ngày 26/10, với mỗi đơn hàng tại The Coffee House khi đặt qua App và chọn thanh toán bằng ví Momo, ban sẽ có cơ hội tham gia các lượt quay 100% hoàn tiền từ Momo, giá trị cao nhất lên đến 100K!",
    date: "16/10",
  },
  {
    image_url:
      "https://feed.thecoffeehouse.com//content/images/2021/10/social.jpg",
    title: "RỘN RÀNG GỌI MÓN, NHÀ & MOMO MỜI DEAL XỊN SÒ",
    text:"Từ 12/10 đến hết ngày 26/10, với mỗi đơn hàng tại The Coffee House khi đặt qua App và chọn thanh toán bằng ví Momo, ban sẽ có cơ hội tham gia các lượt quay 100% hoàn tiền từ Momo, giá trị cao nhất lên đến 100K!",
    date: "16/10",
  },
 
  {
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    title: "India's Grill",
    date: "16/10",
  },
  {
    image_url:
      "https://feed.thecoffeehouse.com//content/images/2021/10/App-news--5-.jpg",
    title: "CUỐI THÁNG VUI TƯƠI - RỘN RÀNG DEAL ĐỈNH",
    text: "Từ ngày 27/10 đến hết 29/10, nhập mã VUITUOI, bạn nhận ngay ưu đãi MUA 1 TẶNG 1 để thưởng thức các món nước ngon.",
    date: "18/10",
  },
  {
    image_url:
      "https://feed.thecoffeehouse.com//content/images/2021/10/app-news--4--1.jpg",
    title: "ĐỔI BEAN NHANH LẤY ƯU ĐÃI XỊN - VI VU MỜI “NGƯỜI THƯƠNG”",
    text:"Tèn ten, đó là đổi BEAN á. Nhớ đổi liền nha, để mình còn mời “người thương” nữa. Vì BEAN tích luỹ từ ngày 01/01/2021 - 31/03/2021, sẽ hết hạn vào ngày 31/10 này đó bạn ơi!",
    date: "17/10",
  },
  {
    image_url:
      "https://feed.thecoffeehouse.com//content/images/2021/10/NOTI.jpg",
    title: "DEAL SIÊU YÊU - CHIỀU BẠN HẾT MỨC",
    text:"20/10 năm nay, hãy để The Coffee House thương bạn thật nhiều với deal siêu yêu MUA 1 TẶNG 1 khi nhập mã: PHAIDEP, thay cho lời chúc ngọt ngào gửi đến hội chị em mình sẽ luôn thật tươi trẻ rạng ngời và hạnh phúc nhé!",
    date: "16/10",
  },
  {
    image_url:
      "https://feed.thecoffeehouse.com//content/images/2021/10/social.jpg",
    title: "RỘN RÀNG GỌI MÓN, NHÀ & MOMO MỜI DEAL XỊN SÒ",
    text:"Từ 12/10 đến hết ngày 26/10, với mỗi đơn hàng tại The Coffee House khi đặt qua App và chọn thanh toán bằng ví Momo, ban sẽ có cơ hội tham gia các lượt quay 100% hoàn tiền từ Momo, giá trị cao nhất lên đến 100K!",
    date: "16/10",
  },
  {
    image_url:
      "https://feed.thecoffeehouse.com//content/images/2021/10/social.jpg",
    title: "RỘN RÀNG GỌI MÓN, NHÀ & MOMO MỜI DEAL XỊN SÒ",
    text:"Từ 12/10 đến hết ngày 26/10, với mỗi đơn hàng tại The Coffee House khi đặt qua App và chọn thanh toán bằng ví Momo, ban sẽ có cơ hội tham gia các lượt quay 100% hoàn tiền từ Momo, giá trị cao nhất lên đến 100K!",
    date: "16/10",
  },
 
  {
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    title: "India's Grill",
    date: "16/10",
  },


];

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function DiscoverDetail() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      {localRestaurants.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.9}
          onPress={() =>
            navigation.push("NewDetail", {
              image: item.image_url,
              text: item.text,
              date: item.date,
              title: item.title
            })
          }
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <DetailImage image={item.image_url} />
              <DetailInfo title={item.title} date={item.date} />
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
const DetailImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: windowWidth, height: 170 }}
    />
  </>
);
const DetailInfo = (props) => (
  <View>
    <Text>{props.title}</Text>
    <Text>{props.date}</Text>
    <AntDesign name="calendar" size={15} />
  </View>
);
