import { FC } from 'react';
import { IFooterProps, Footer } from '../footer';
import { INavBarProps, NavBar } from '../navbar';
import CSS from './styles.module.scss';

export interface ILayoutProps {
  navbarData: INavBarProps;
  footerData: IFooterProps;
}

export const Layout: FC<ILayoutProps & { children: JSX.Element }> = ({
  navbarData,
  footerData,
  children,
}) => {
  return (
    <div className={CSS.layout}>
      <NavBar {...navbarData} />
      <main className={CSS.main}>{children}</main>
      <Footer {...footerData} />
    </div>
  );
};
