import { useEffect, useState } from 'react';

const DESKTOP_SIZE = 1024;

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    // 초기 렌더링 후 클라이언트에서만 화면 크기 확인
    setIsDesktop(window.innerWidth >= DESKTOP_SIZE);

    // 필요에 따라 resize 이벤트 리스너를 추가할 수도 있습니다.
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_SIZE);
      setWindowWidth(window.innerWidth);
      console.log('windowWidth', window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isDesktop, windowWidth };
}
