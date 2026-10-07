import BackgroundWord from '@/components/background-word';
import SiteHeader from '@/components/site-header';
import SongCatalog from '@/components/song-catalog';
import { getAccessLevel } from '@/lib/auth/get-access-level';
import { listSongs } from '@/lib/db/r2/list-songs';
import { toPlayableUrl } from '@/lib/utils/to-playable-url';

export default async function Home() {
  const accessLevel = await getAccessLevel();
  const songs = accessLevel === 'guest' ? [] : toPlayableUrl(await listSongs());

  return (
    <div className='page-wrapper page-wrapper--home'>
      <BackgroundWord />
      <SiteHeader variant='home' />
      <main className='home-main'>
        {songs.length > 0 && <SongCatalog songs={songs} />}
      </main>
    </div>
  );
}
