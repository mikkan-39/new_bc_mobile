import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./homeScreen";
import LoginScreen from './loginScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
