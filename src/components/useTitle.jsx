import { useEffect } from "react";

const useTitle = (title) => {
      useEffect(() => {
            document.title = `${title} | Gadget_Hub`;
      }, [title])
};

export default useTitle;