import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./homeScreen";
import LoginScreen from './loginScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const initialRouteName = __DEV__ ? "Home" : "Login"
  return (
    <Stack.Navigator initialRouteName>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
