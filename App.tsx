import { NativeBaseProvider, VStack, StatusBar } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { THEME } from './src/styles/theme';
import { Loading } from './src/components/Loading';
import { SignIn } from './src/screens/SignIn';
import { AuthContextProvider } from './src/contexts/AuthContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <VStack flex={1} bgColor="gray.900">
          <StatusBar 
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          {
            fontsLoaded ? <SignIn /> : <Loading />
          }
        </VStack>
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
