import { FC, PropsWithChildren } from 'react';

export const PageTitle: FC<PropsWithChildren> = ({ children }) => (
  <h1 className="mb-10 text-2xl font-extrabold md:text-5xl lg:text-6xl">
    <span
      className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500"
    >
      {children}
    </span>
  </h1>
);
