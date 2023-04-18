import {Text} from 'react-native';
import React from 'react';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import UI from "./UI";
import Product from './Components/Product';
import Cart from './Components/Cart';
import { NavigationContainer } from '@react-navigation/native';
import BuyProduct from './Components/BuyProduct';
import Order from './Components/Order';
import Rating from "./Components/Rating"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
    <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen name='Product' component={Product} options={{headerShown:false}}/>
    <Stack.Screen name="Cart" component={Cart} options={{headerShown:true}}/>
    <Stack.Screen name="Buy_Product" component={BuyProduct}/>
    <Stack.Screen name='OrderHistory' component={Order}/>
    <Stack.Screen name="Rating" component={Rating}/>
   </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
};

export default App;
