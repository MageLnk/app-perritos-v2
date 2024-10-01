import { createContext, useContext, FC, ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
// Interfaces & Types
interface MediaQueryContextType {
  isLargeDesktop: boolean;
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
  isMobileAndTablet: boolean;
}
interface MediaQueryContextProps {
  children: ReactNode;
}
// Utils
const MediaQueryContext = createContext<MediaQueryContextType | undefined>(undefined);
// App
export const MediaQueryProvider: FC<MediaQueryContextProps> = ({ children }) => {
  const isLargeDesktop = useMediaQuery({ minWidth: 1440 });
  const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1439 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isMobileAndTablet = useMediaQuery({ maxWidth: 1023 });

  const mediaQueryValues = {
    isLargeDesktop,
    isDesktop,
    isTablet,
    isMobile,
    isMobileAndTablet,
  };

  return <MediaQueryContext.Provider value={mediaQueryValues}>{children}</MediaQueryContext.Provider>;
};

export const useMediaQueryContext = () => {
  const context = useContext(MediaQueryContext);
  if (context === undefined) throw new Error("useMediaQueryContext debe ser utilizado dentro de un MediaQueryProvider");

  return context;
};
