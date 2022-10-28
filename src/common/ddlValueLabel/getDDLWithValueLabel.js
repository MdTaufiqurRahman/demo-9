export const getDDLWithValueLabel = (list, value, label, isAll = false) => {
  let data = list?.map((item) => ({
    ...item,
    value: item?.[value],
    label: item?.[label],
  }));
  if (isAll) {
    data.unshift({ value: 0, label: "All" });
  }
  return data;
};
