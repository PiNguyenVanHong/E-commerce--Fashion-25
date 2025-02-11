import { useCallback, useRef } from "react";

export const useDynamicRefs = () => {
  const refsMap = useRef(
    new Map<string, (HTMLDivElement | HTMLAnchorElement | HTMLHeadingElement)[]>()
  );

  const handleAddRef = useCallback(
    (
      key: string,
      el: HTMLDivElement | HTMLAnchorElement | HTMLHeadingElement | null
    ) => {
      if (!el) return;
      const currentRefs =
        refsMap.current.get(key) ||
        ([] as (HTMLDivElement | HTMLAnchorElement | HTMLHeadingElement)[]);

      // Thêm el vào danh sách nếu chưa tồn tại
      if (!currentRefs.includes(el)) {
        refsMap.current.set(key, [...currentRefs, el]);
      }
    },
    []
  );

  const getRefsByKey = useCallback(
    (
      key: string
    ): (HTMLDivElement | HTMLAnchorElement | HTMLHeadingElement)[] => {
      return refsMap.current.get(key) || [];
    },
    []
  );

  return { handleAddRef, getRefsByKey };
};