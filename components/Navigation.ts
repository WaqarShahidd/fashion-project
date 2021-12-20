import { ParamListBase } from "@react-navigation/routers"
import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/core"

export interface StackNavigationProps<ParamList extends ParamListBase, RouteName extends keyof ParamList = string>
{
    navigation: StackNavigationProp<ParamList, RouteName>;
    route: RouteProp<ParamList, RouteName>
}

export type Routes = {
  Onboarding: undefined;
  Welcome: undefined;
  SignUp: undefined;
  Login: undefined;
  ResetPassword: undefined;
  Home: undefined;
  Tabs: undefined;
  Search: undefined;
  SearchM: undefined;
  SearchW: undefined;
  CategoriesW: undefined;
  CategoriesM: undefined;
  Wishlist:undefined;
};