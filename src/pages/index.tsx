import React from 'react';
import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

// No landing page on this site — send the root straight to the docs.
export default function Home(): JSX.Element {
  return <Redirect to={useBaseUrl('/docs/')} />;
}
