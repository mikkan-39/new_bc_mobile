import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./homeScreen";
import LoginScreen from "./loginScreen";
import UpdaterScreen from "./updater/updaterScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const initialRouteName = __DEV__ ? "Home" : "Login";
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Updater" component={UpdaterScreen} />
    </Stack.Navigator>
  );
}
