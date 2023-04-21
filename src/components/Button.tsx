import { Button as ButtonNativeBase, Text } from 'native-base';

interface ButtonProps {
  title: string;
}

export function Button({ title }: ButtonProps) {
  return (
    <ButtonNativeBase>
      <Text>
        {title}
      </Text>
    </ButtonNativeBase>
  )
}