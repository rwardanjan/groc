import axios from "axios";

const API_URL = "https://groc-json.vercel.app";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export async function fetchMeals() {
  try {
    // await delay(250);
    const response = await axios.get(`${API_URL}/dishes`);
    return response.data;
  } catch (error) {
    console.error("Error fetching meals:", error);
    throw new Error("Could not fetch meals. Please try again later.");
  }
}

export async function fetchMealById(id) {
  try {
    const response = await axios.get(`${API_URL}/dishes/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching meal with id ${id}:`, error);
    throw new Error("Could not fetch the meal. Please try again later.");
  }
}

export async function fetchIngredients() {
  try {
    const response = await axios.get(`${API_URL}/ingredients`);
    return response.data;
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    throw new Error("Could not fetch ingredients. Please try again later.");
  }
}

export async function addMeal(meal) {
  try {
    const response = await axios.post(`${API_URL}/dishes`, meal);
    return response.data;
  } catch (error) {
    console.error("Error adding meal:", error);
    throw new Error("Could not add the meal. Please try again later.");
  }
}

export async function deleteMeal(id) {
  try {
    await axios.delete(`${API_URL}/dishes/${id}`);
  } catch (error) {
    console.error(`Error deleting meal with id ${id}:`, error);
    throw new Error("Could not delete the meal. Please try again later.");
  }
}

export async function updateMeal(id, meal) {
  try {
    const response = await axios.put(`${API_URL}/dishes/${id}`, meal);
    return response.data;
  } catch (error) {
    console.error(`Error updating meal with id ${id}:`, error);
    throw new Error("Could not update the meal. Please try again later.");
  }
}

export async function fetchWeeklyMenus() {
  try {
    const response = await axios.get(`${API_URL}/weeklyMenus`);
    return response.data;
  } catch (error) {
    console.error("Error fetching week menu:", error);
    throw new Error("Could not fetch week menu. Please try again later.");
  }
}
