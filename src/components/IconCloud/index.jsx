import { Cloud, renderSimpleIcon } from 'react-icon-cloud';
import {
  siCss3,
  siEslint,
  siExpress,
  siFirebase,
  siGit,
  siGithub,
  siGreensock,
  siHeroku,
  siHtml5,
  siJavascript,
  siNetlify,
  siNodedotjs,
  siPostgresql,
  siReact,
  siRedux,
  siSass,
  siSequelize,
  siTailwindcss,
  siVisualstudiocode,
  siVite,
} from 'simple-icons/icons';

const options = {
  activeCursor: 'pointer',
  clickToFront: 500,
  depth: 1,
  imageScale: 2,
  initial: [0.1, -0.1],
  outlineColour: 'transparent',
  reverse: true,
  tooltip: 'native',
  tooltipDelay: 0,
  wheelZoom: false,
  freezeDecel: true,
};

const icons = [
  siCss3,
  siEslint,
  siExpress,
  siFirebase,
  siGit,
  siGithub,
  siGreensock,
  siHeroku,
  siHtml5,
  siJavascript,
  siNetlify,
  siNodedotjs,
  siPostgresql,
  siReact,
  siRedux,
  siSass,
  siSequelize,
  siTailwindcss,
  siVisualstudiocode,
  siVite,
].map((icon) => {
  return renderSimpleIcon({
    icon,
    size: 50,
    aProps: {
      onClick: (e) => e.preventDefault(),
    },
  });
});

const IconCloud = () => {
  return (
    <div className='cloud'>
      <Cloud options={options}>{icons}</Cloud>
    </div>
  );
};

export default IconCloud;
