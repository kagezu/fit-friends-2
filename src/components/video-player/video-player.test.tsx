import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { fakerStore, fakerTraining } from '../../utils/mock-data';
import VideoPlayer from './video-player';

describe('Component: VideoPlayer', () => {
  it('Должен отобразить компонент', () => {
    const { baseElement } = render(
      <Provider store={fakerStore}>
        <VideoPlayer
          src={fakerTraining.demoVideo}
          previewImage={fakerTraining.background}
          width={100}
          height={100}
          isPlaying={false}
        />
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });
});
