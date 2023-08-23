import { NextPage } from 'next';
import Link from 'next/link';
import { Button, Flexbox } from 'react-basics';

const BetaPage: NextPage = () => {
  return (
    <Flexbox justifyContent="center">
      <article>
        <header>
          <h1>
            Cloud <sub style={{ fontSize: 24 }}>BETA</sub>
          </h1>
        </header>
        <Link
          href="https://cloud.umami.is/signup"
          className="button"
          data-umami-event="cloud-beta-button"
          target="_blank"
        >
          <Button variant="primary">Sign up for Umami Cloud</Button>
        </Link>
      </article>
    </Flexbox>
  );
};

export default BetaPage;
