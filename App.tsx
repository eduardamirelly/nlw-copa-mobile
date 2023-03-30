import { StatusBar } from 'expo-status-bar';

import { NativeBaseProvider, VStack, Text } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <VStack flex={1} bgColor="black">
        <Text color="white" fontSize={24}>
          Hello World!
        </Text>
        <StatusBar style="auto" />
      </VStack>
    </NativeBaseProvider>
  );
}
