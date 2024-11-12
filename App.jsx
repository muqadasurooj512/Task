import './gesture-handler';
import {useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/screens/splashscreen';
import DrawerNavigation from './src/components/drawerNavigation';

const App = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1000);
    return () => {
      clearTimeout(timer)
    };
  }, []);
  return (
    <NavigationContainer>
   {visible ?(<SplashScreen/>):
   (
    <DrawerNavigation/>
   )}
    </NavigationContainer>
  );
};

export default App;
{/**<GestureHandlerRootView style={{ flex: 1 }}>
        <UserProvider>
        <AppNavigation/>
        </UserProvider>

    </GestureHandlerRootView> */}