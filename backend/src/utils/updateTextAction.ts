export const generateAffectedUpdatedData = (reqBody: Record<string, any>) => {
  const updatedKeys: string[] = Object.keys(reqBody).filter(
    (key) => key !== "details",
  );
  const updatedData: Record<string, string>[] = updatedKeys.map((key) => ({
    [key]: reqBody[key],
  }));

  return JSON.stringify(updatedData);
};
