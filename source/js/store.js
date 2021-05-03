let rawData = null;

const storeData = (data) => {
  rawData = data.slice()
  return rawData;
}

export {storeData}
