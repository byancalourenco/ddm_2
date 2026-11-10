import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login/Login';
import Home from './screens/home/Home';
import Personagens from './screens/personagens/Personagens';
import Cenarios from './screens/cenarios/Cenarios';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="Home"
          component={Home}
        />

        <Stack.Screen
          name="Personagens"
          component={Personagens}
        />

        <Stack.Screen
          name="Cenarios"
          component={Cenarios}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}