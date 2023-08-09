import { useEffect, useRef } from 'react';

type VideoPlayerProps = {
  isPlaying: boolean;
  src: string;
  previewImage: string;
  width: number;
  height: number;
}

export default function VideoPlayer({ isPlaying, src, previewImage, width, height }: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.src = src;
    }
  }, [isPlaying, src]);

  return (
    <video
      preload={'auto'}
      src={src}
      poster={previewImage}
      width={width}
      height={height}
      ref={videoRef}
    />
  );
}
