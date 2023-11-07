import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../services/apiSettings";

export const useSetting = function () {
  const { isLoading, data: settingData } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isLoading, settingData };
};
