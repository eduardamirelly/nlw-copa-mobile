import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

interface ButtonProps extends IButtonProps {
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