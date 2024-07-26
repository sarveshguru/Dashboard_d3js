import DataModel from "./models/DataModel.js";
import jsonData from "./data/jsondata.json" assert { type: "json" };

// Initialize the data model with the provided JSON data

export const loadData = async () => {
  try {
    const count = await DataModel.countDocuments();
    if (count === 0) {
      await DataModel.insertMany(jsonData);
      console.log("Data loaded successfully");
    } else {
      console.log("Data already loaded");
    }
  } catch (errror) {
    console.error("Error loading data", error);
  }
};
