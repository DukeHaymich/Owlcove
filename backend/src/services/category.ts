function synthesize(categoriesList: string[], imagesList: any) {
  if (categoriesList.length !== imagesList.length) {
    throw new Error("Categories and images list length mismatch");
  }
  let result = [];
  for (let i = 0; i < categoriesList.length; ++i) {
    result.push({
      order: i,
      name: categoriesList[i],
      image: {
        name: imagesList[i].originalname?.split(".")[0] || categoriesList[i],
        dataBase64: imagesList[i].buffer?.toString("base64"),
        contentType: imagesList[i].mimetype,
      },
    });
  }
  return result;
}

export { synthesize };
