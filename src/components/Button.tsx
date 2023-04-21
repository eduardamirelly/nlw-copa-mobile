import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

interface ButtonProps extends IButtonProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonNativeBase {...rest}>
      <Text>
        {title}
      </Text>
    </ButtonNativeBase>
  )
}