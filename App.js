import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const Drawer = createDrawerNavigator();
  const BTab = createBottomTabNavigator();
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Drawer.Screen name="Register" component={Register} />
          <Drawer.Screen name="Login" component={Login} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
