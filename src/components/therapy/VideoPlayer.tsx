import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Play, Pause, Maximize2, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  title: string;
  thumbnail?: string;
}

export default function VideoPlayer({ url, title, thumbnail }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleMute = () => {
    setMuted(!muted);
  };

  const handleFullscreen = () => {
    const element = document.querySelector('.video-wrapper');
    if (!element) return;

    if (!fullscreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setFullscreen(!fullscreen);
  };

  return (
    <div className="video-wrapper relative rounded-lg overflow-hidden bg-black">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        playing={playing}
        muted={muted}
        controls={false}
        light={thumbnail}
        pip={true}
        className="aspect-video"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-white font-medium mb-2">{title}</h3>
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePlayPause}
            className="text-white hover:text-indigo-300 transition-colors duration-200"
          >
            {playing ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </button>
          
          <button
            onClick={handleMute}
            className="text-white hover:text-indigo-300 transition-colors duration-200"
          >
            {muted ? (
              <VolumeX className="w-6 h-6" />
            ) : (
              <Volume2 className="w-6 h-6" />
            )}
          </button>
          
          <button
            onClick={handleFullscreen}
            className="text-white hover:text-indigo-300 transition-colors duration-200"
          >
            <Maximize2 className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}