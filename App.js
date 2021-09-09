import React from 'react';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen
          name="OnBoardingScreen"
          component={OnBoardingScreen}
        />

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

// const App = () => {
//   const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

//   React.useEffect(async () => {
//     const appData = await AsyncStorage.getItem('isAppFirstLaunched');
//     if (appData == null) {
//       setIsAppFirstLaunched(true);
//       AsyncStorage.setItem('isAppFirstLaunched', 'false');
//     } else {
//       setIsAppFirstLaunched(false);
//     }

//     // AsyncStorage.removeItem('isAppFirstLaunched');
//   }, []);

//   return (
//     isAppFirstLaunched != null && (
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{headerShown: false}}>
//           {isAppFirstLaunched && (
//             <Stack.Screen
//               name="OnboardingScreen"
//               component={OnboardingScreen}
//             />
//           )}
//           <Stack.Screen name="HomeScreen" component={HomeScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     )
//   );
// };

export default App;