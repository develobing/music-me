import { Image, ImageProps } from 'expo-image';

export function Artwork(props: ImageProps) {
  return (
    <Image
      {...props}
      cachePolicy="memory-disk"
      style={Object.assign({ borderRadius: 2 }, props.style)}
    />
  );
}
