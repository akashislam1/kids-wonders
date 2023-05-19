import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Kids Wonders`;
  }, [title]);
};

export default useTitle;
