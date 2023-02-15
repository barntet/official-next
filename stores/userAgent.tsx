import React, { useState, useEffect, createContext } from 'react';
import { Enviroment } from '@/constants/enum';

interface IUserAgentContextProps {
  userAgent: Enviroment;
}

interface IProps {
  children: JSX.Element;
}

export const userAgentContext = createContext<IUserAgentContextProps>(
  {} as IUserAgentContextProps
);

export const UserAgentProvider = ({ children }: IProps): JSX.Element => {
  const [userAgent, setUserAgent] = useState<Enviroment>(Enviroment.none); // 服务器渲染初始化渲染未必是预期效果，none缓存切换视觉

  // 监听本地缓存来同步不同页面的主题（当前页面无法监听到，直接在顶部栏进行了类的切换）
};
