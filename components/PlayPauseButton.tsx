import { ComponentProps } from 'react';
import { useTrackPlayer } from '../hooks/useTrackPlayer';
import { IconButton } from './IconButton';

type PlayPauseButtonProps = Omit<ComponentProps<typeof IconButton>, 'name'>;

export function PlayPauseButton(props: PlayPauseButtonProps) {
  const { isPlaying, play, pause } = useTrackPlayer();

  if (isPlaying) {
    return <IconButton name="pause-circle" onPress={pause} {...props} />;
  }

  return <IconButton name="play-circle" onPress={play} {...props} />;
}
