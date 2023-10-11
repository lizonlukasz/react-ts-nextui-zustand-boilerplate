import { FC, PropsWithChildren } from 'react';
import { PageTitle } from '../PageTitle';

interface PageWrapperProps {
  title?: string;
}

export const PageWrapper: FC<PropsWithChildren<PageWrapperProps>> = ({ children, title }) => (
  <div className="flex justify-center">
    <div className="w-full lg:w-[1000px] flex flex-col">
      {title && <PageTitle>{title}</PageTitle>}
      {children}
    </div>
  </div>
);
