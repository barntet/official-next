import { FC, useContext } from 'react';
import CSS from './styles.module.scss';
import Image from 'next/image';
import logoLight from '@/public/logo_light.png';
import { ThemeContext } from '@/stores/theme';
import { Themes } from '@/constants/enum';

export interface INavBarProps {}

export const NavBar: FC<INavBarProps> = ({}) => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <div className={CSS.navBar}>
      <a href="http://localhost:3000">
        <div className={CSS.logo_icon}></div>
      </a>
      <div
        className={CSS.themeIcon}
        onClick={(): void => {
          if (localStorage.getItem('theme') === Themes.light) {
            setTheme(Themes.dark);
          } else {
            setTheme(Themes.light);
          }
        }}
      ></div>
    </div>
  );
};
