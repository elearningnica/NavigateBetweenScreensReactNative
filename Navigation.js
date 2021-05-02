import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ProductUI from "./ProductUI";
import ProductDetailUI from "./ProductDetailUI";

const MyNavigation = createStackNavigator({
  Product: ProductUI,
  ProductDetail: ProductDetailUI,
});

export default createAppContainer(MyNavigation);
