import axios from "axios";

const API_URL = "https://example.com/api";

export const getQuests = async () => {
  try {
    const response = await axios.get(`${API_URL}/quests`);
    return response.data;
  } catch (error) {
    console.error("Error fetching quests", error);
  }
};

export const getQuestById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/quests/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching quest", error);
  }
};
