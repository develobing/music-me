import { FontAwesome } from '@expo/vector-icons';
import { ComponentProps } from 'react';

export function IconButton(props: ComponentProps<typeof FontAwesome.Button>) {
  return (
    <FontAwesome.Button
      borderRadius={100}
      backgroundColor={'transparent'}
      selectionColor={'transparent'}
      underlayColor={'transparent'}
      color={'#fff'}
      style={{
        ...props.style,
        padding: 0,
        opacity: props.disabled ? 0.5 : 1,
      }}
      iconStyle={{
        ...props.iconStyle,
        marginRight: 0,
        textAlign: 'center',
      }}
      {...props}
    />
  );
}
