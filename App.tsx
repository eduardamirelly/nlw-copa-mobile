import { StatusBar } from 'expo-status-bar';

import { NativeBaseProvider, VStack, Text } from 'native-base';
import { THEME } from './src/styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <VStack flex={1} bgColor="gray.900">
        <Text color="white" fontSize={24} fontFamily="heading">
          Hello World!
        </Text>
        <StatusBar style="auto" />
      </VStack>
    </NativeBaseProvider>
  );
}
