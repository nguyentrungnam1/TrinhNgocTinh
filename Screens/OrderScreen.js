import React from 'react'
import { View, Text } from 'react-native'
import ViewCart from '../Components/Detail/ViewCart'
import FoodsItem from '../Components/Home/FoodsItem'

const foods = [
    {
      name: "Cà Phê Sữa đá",
      image_url:
        "https://minio.thecoffeehouse.com/image/admin/caphe-suada--bacsiu_408274_400x400.jpg",
      info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
      price: "$13.5",
    },
    {
      name: "Cà Phê Sữa Nóng",
      image_url:
        "https://minio.thecoffeehouse.com/image/admin/cfsua-nong_235317_400x400.jpg",
      info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
      price: "$21.0",
    },
    {
      name: "Cà Phê Sữa Đá Chai Fresh 250ML",
      image_url:
        "https://minio.thecoffeehouse.com/image/admin/BottleCFSD_496652_400x400.jpg",
      info: "Vẫn là hương vị cà phê sữa đậm đà quen thuộc của The Coffee House nhưng khoác lên mình một chiếc áo mới tiện lợi hơn, tiết kiệm hơn phù hợp với bình thường mới, giúp bạn tận hưởng một ngày dài trọn vẹn. *Sản phẩm dùng ngon nhất trong ngày. *Sản phẩm mặc định mức đường và không đá.",
      price: "$13.5",
    },
    {
      name: "Cà Phê Đen Nóng",
      image_url:
        "https://minio.thecoffeehouse.com/image/admin/cfden_nong_016851_400x400.jpg",
      info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
      price: "$35.0",
    },
    {
      name: "Caramel Macchiato Đá",
      image_url:
        "https://minio.thecoffeehouse.com/image/admin/caramel-macchiato_143623_400x400.jpg",
      info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
      price: "$50.0",
    },
    {
      name: "Cà Phê Sữa đá",
      image_url:
        "https://minio.thecoffeehouse.com/image/admin/caphe-suada--bacsiu_408274_400x400.jpg",
      info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
      price: "$32.2",
    },
    {
      name: "Cà Phê Sữa Nóng",
      image_url:
        "https://minio.thecoffeehouse.com/image/admin/cfsua-nong_235317_400x400.jpg",
      info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
      price: "$35.0",
    },
    {
      name: "Cà Phê Sữa Đá Chai Fresh 250ML",
      image_url:
        "https://minio.thecoffeehouse.com/image/admin/BottleCFSD_496652_400x400.jpg",
      info: "Vẫn là hương vị cà phê sữa đậm đà quen thuộc của The Coffee House nhưng khoác lên mình một chiếc áo mới tiện lợi hơn, tiết kiệm hơn phù hợp với bình thường mới, giúp bạn tận hưởng một ngày dài trọn vẹn. *Sản phẩm dùng ngon nhất trong ngày. *Sản phẩm mặc định mức đường và không đá.",
      price: "$79.5",
    },
    {
      name: "Cà Phê Đen Nóng",
      image_url:
        "https://minio.thecoffeehouse.com/image/admin/cfden_nong_016851_400x400.jpg",
      info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
      price: "$21.0",
    },
    {
      name: "Caramel Macchiato Đá",
      image_url:
        "https://minio.thecoffeehouse.com/image/admin/caramel-macchiato_143623_400x400.jpg",
      info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
      price: "$50.5",
    },
  ];

export default function OrderScreen() {
    return (
        <View>
            <FoodsItem foods={foods}/>
            <ViewCart/>
        </View>
    )
}
