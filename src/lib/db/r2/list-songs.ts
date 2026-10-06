import { listAudioObjects } from '@/lib/db/r2/list-audio-objects';
import type { SongMeta } from '@/lib/types/song-meta';
import { deriveCatalog } from '@/lib/db/r2/derive-catalog';
/**
 * Track metadata only — no signed URL. Safe to expose to any visitor,
 * signed in or not, since it grants no access to the underlying files.
 */
export async function listSongs(): Promise<SongMeta[]> {
  const objects = await listAudioObjects();
  return deriveCatalog(objects.map(({ key }) => key));
}
