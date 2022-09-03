import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./homeScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
