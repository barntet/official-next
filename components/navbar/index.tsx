import { FC } from 'react';
import CSS from './styles.module.scss';
import Image from 'next/image';
import logoLight from '@/public/logo_light.png';

export interface INavBarProps {}

export const NavBar: FC<INavBarProps> = ({}) => {
  return (
    <div className={CSS.navBar}>
      <a href="http://localhost:3000">
        <Image src={logoLight} alt="demo" width={70} height={20} />
      </a>
    </div>
  );
};
