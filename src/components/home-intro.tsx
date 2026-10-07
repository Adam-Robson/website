import '@/components/styles/home-intro.css';

/**
 * The homepage's indexable content — renders identically for signed-out
 * visitors and search crawlers, who only ever see the site as a guest.
 */
export default function HomeIntro() {
  return (
    <section className='home-intro'>
      <div className='home-intro-copy'>
        <p className='home-intro-kicker'>est. MMXX</p>
        <p className='home-intro-lede-display'>
        <span className='home-intro-mark'>
          <span className='sr-only'>LE FOG</span>
            <span className='home-intro-mark-letters' aria-hidden='true'>
              <span>L</span>
              <span>E</span>
              <span>F</span>
              <span>O</span>
              <span>G</span>
            </span>
          </span> music
        </p>
        <p className='home-intro-lede'>
          Adam Robson is a home-recording artist living in the Pacific
          Northwest, US.
        </p>
      </div>
    </section>
  );
}
