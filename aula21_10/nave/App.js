// ambiente que acontece a navegação
import { NavigationContainer } from '@react-navigation/native'; 
// registra as telas
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login/Login';
import Home from './screens/home/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          // options={{
          //   headerShown: false,
          // }}
        />

        {/* <Stack.Screen
          name="Home"
          component={Home}
        /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
