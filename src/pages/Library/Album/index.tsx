import React from 'react';
import {EmptyData} from '@app/components';
import {Container} from './components/AlbumList/styles';
import {useMedia} from '@app/hooks/media';
import {AlbumList} from './components/AlbumList';

const Album = () => {
  const {albums, getOfflineAlbums} = useMedia();

  const Render: React.ReactElement = !albums?.length ? (
    <EmptyData fetch={getOfflineAlbums} message={'no songs found...'} />
  ) : (
    <AlbumList albums={albums} onRefresh={getOfflineAlbums} />
  );

  return (
    <Container>
      {/* <Title search> Albums</Title> */}

      {Render}
    </Container>
  );
};
export default Album;
