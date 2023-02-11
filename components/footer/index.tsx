import { FC } from 'react';
import Image from 'next/image';
import publicLogo from '@/public/public_logo.png';
import CSS from './styles.module.scss';
import cName from 'classnames';

interface ILink {
  label: string;
  link?: string;
}

interface ILinkList {
  title: string;
  list: ILink;
}

interface IQRCode {
  image: string;
  text: string;
}

export interface IFooterProps {
  title: string;
  linkList: ILinkList[];
  qrCode: IQRCode;
  copyRight: string;
  siteNumber: string; // 站点备案号
  publicNumber: string;
}

export const Footer: FC<IFooterProps> = ({
  title,
  linkList,
  qrCode,
  copyRight,
  siteNumber,
  publicNumber,
}) => {
  console.log(title, linkList, qrCode, copyRight, siteNumber, publicNumber);
  return (
    <div className={CSS.footer}>
      <div className={CSS.topArea}>
        <h1 className={CSS.footerTitle}>{title}</h1>
        <div className={CSS.linkListArea}>
          {linkList?.map((item, index) => {
            return (
              <div className={CSS.linkArea} key={`linkArea${index}`}>
                <span className={CSS.title}>{item.title}</span>
                <div className={CSS.links}>
                  {item.list?.map((_item, _index) => {
                    return (
                      <div
                        className={cName({
                          [CSS.link]: _item.link,
                          [CSS.disabled]: !_item.link,
                        })}
                        key={`link${_index}`}
                        onClick={(): void => {
                          _item.link &&
                            window.open(
                              _item.link,
                              'blank',
                              'noopener=yes,noreferrer=yes'
                            );
                        }}
                      >
                        {_item.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={CSS.bottomArea}>
        <div className={CSS.codeArea}>
          <div>
            <Image
              src={qrCode?.image}
              alt={qrCode?.text}
              width={56}
              height={56}
            ></Image>
          </div>
          <div className={CSS.text}>{qrCode?.text}</div>
        </div>
        <div className={CSS.numArea}>
          <span>{copyRight}</span>
          <span>{siteNumber}</span>
          <div className={CSS.publicLogo}>
            <div className={CSS.logo}>
              <Image
                src={publicLogo}
                alt={publicNumber}
                width={20}
                height={20}
              ></Image>
            </div>
            <span>{publicNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
