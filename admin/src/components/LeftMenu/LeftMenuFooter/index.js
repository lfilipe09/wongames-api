/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';
import Wrapper, { A } from './Wrapper';

function LeftMenuFooter() {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef
  const projectType = PROJECT_TYPE;

  return (
    <Wrapper>
      <div className="poweredBy">
        <A key="website" href="https://github.com/lfilipe09/" target="_blank" rel="noopener noreferrer">
          Desenvolvido por Luís Filipe
        </A>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
