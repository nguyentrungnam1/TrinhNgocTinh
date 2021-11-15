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
      name: "Cà Phê Đá Xay-Lạnh",
      image_url:
        "https://minio.thecoffeehouse.com/image/admin/cf-da-xay-(1)_158038_400x400.jpg",
      info: "Một phiên bản upgrade từ ly cà phê sữa quen thuộc, nhưng lại tỉnh táo và tươi mát hơn bởi lớp đá xay đi kèm. Nhấp 1 ngụm cà phê đá xay là thấy đã, ngụm thứ hai thêm tỉnh táo và cứ thế lôi cuốn bạn đến ngụm cuối cùng.",
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
      name: "Americano Đá",
      image_url:
        "https://minio.thecoffeehouse.com/image/admin/classic-cold-brew_791256_400x400.jpg",
      info: "Americano được pha chế bằng cách pha thêm nước với tỷ lệ nhất định vào tách cà phê Espresso, từ đó mang lại hương vị nhẹ nhàng và giữ trọn được mùi hương cà phê đặc trưng.",
      price: "$32.2",
    },
    {
      name: "Latte Nóng",
      image_url:
        "https://minio.thecoffeehouse.com/image/admin/latte_851143_400x400.jpg",
      info: "Một sự kết hợp tinh tế giữa vị đắng cà phê Espresso nguyên chất hòa quyện cùng vị sữa nóng ngọt ngào, bên trên là một lớp kem mỏng nhẹ tạo nên một tách cà phê hoàn hảo về hương vị lẫn nhãn quan.",
      price: "$35.0",
    },
    {
      name: "Cà Phê Sữa Đá Chai Fresh 250ML",
      image_url:
        "https://minio.thecoffeehouse.com/image/admin/BottleCFSD_496652_400x400.jpg",
      info: "Bạc sỉu chính là Ly sữa trắng kèm một chút cà phê. Thức uống này rất phù hợp những ai vừa muốn trải nghiệm chút vị đắng của cà phê vừa muốn thưởng thức vị ngọt béo ngậy từ sữa.",
      price: "$20.5",
    },
    {
      name: "Bạc sỉu",
      image_url:
        "https://minio.thecoffeehouse.com/image/admin/bacsiu-moi_532206_400x400.jpg",
      info: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
      price: "$21.0",
    },
    {
      name: "Latte Đá",
      image_url:
        "https://minio.thecoffeehouse.com/image/admin/latte-da_438410_400x400.jpg",
      info: "Một sự kết hợp tinh tế giữa vị đắng cà phê Espresso nguyên chất hòa quyện cùng vị sữa nóng ngọt ngào, bên trên là một lớp kem mỏng nhẹ tạo nên một tách cà phê hoàn hảo về hương vị lẫn nhãn quan.",
      price: "$30.5",
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
