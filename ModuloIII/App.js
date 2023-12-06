import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Filmes from './src/pages/Filmes';
import CriarFilme from './src/pages/CriarFilme';
import Detalhes from './src/pages/Detalhes';
import Login from './src/pages/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Filmes"
          component={Filmes}
          options={{
            title: "Lista de Filmes",
            headerTintColor: "black",
            headerLeft: null,
            headerStyle: {
              borderBottomColor: "#ccc",
              borderBottomWidth: 1
            }
          }}
        />
        <Stack.Screen 
          name="Criar Filme"
          component={CriarFilme}
          options={{
            headerTintColor: "black",
            headerStyle: {
              borderBottomColor: "#ccc",
              borderBottomWidth: 1
            }
          }}
        />
        <Stack.Screen 
          name="Detalhes"
          component={Detalhes}
          options={{
            headerTintColor: "black",
            headerStyle: {
              borderBottomColor: "#ccc",
              borderBottomWidth: 1
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
