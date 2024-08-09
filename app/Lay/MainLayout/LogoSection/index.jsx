import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'; // Next.js Link
import ButtonBase from '@mui/material/ButtonBase';

// project imports
import config from '../../../lib/config';
import Logo from '../../../components/Logo';
import { MENU_OPEN } from '../../../lib/store/actions';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: MENU_OPEN, id: defaultId });
  };

  return (
    <Link href={config.defaultPath} passHref>
      <ButtonBase disableRipple onClick={handleClick}>
        <Logo />
      </ButtonBase>
    </Link>
  );
};

export default LogoSection;
