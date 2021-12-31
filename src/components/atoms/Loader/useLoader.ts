import Loader from "./Loader";
import { useEffect, useState } from "react";
import { useAppSelector } from "store/hooks";

interface IUseLoaderReturn {
  Loader: React.FunctionComponent<{ render: boolean }>;
  renderLoader: boolean;
}

export const useLoader = (): IUseLoaderReturn => {
  const [renderLoader, setRenderLoader] = useState<boolean>(false);
  const authLoader = useAppSelector((state) => state.userDataReducer.isLoading);

  const loaders = [authLoader];

  useEffect(() => {
    setRenderLoader(loaders.includes(true));
  }, loaders);

  return { Loader, renderLoader };
};
