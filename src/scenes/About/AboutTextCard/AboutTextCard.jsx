import s from './AboutTextCard.module.scss';
import { ImPointRight,ImCamera} from 'react-icons/im';
import { MdVideogameAsset } from 'react-icons/md';
import { RiPlantFill } from 'react-icons/ri';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Marlon Valencia </span>
        from <span className={s.purple}> Marseille, France.</span>
        <br />
        I am a full stack software developer
        <br /> Graduate at software engineering
        <br />
        Epitech, European Institute of Technolog, Marseille.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <MdVideogameAsset /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <RiPlantFill /> Ecologie
        </li>
        <li className={s.aboutActivity}>
          <ImCamera/> Photography
        </li>
      </ul>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "Strive to build things that make a difference!"{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
