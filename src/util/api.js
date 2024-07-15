const API_URL = "http://localhost:3000";

async function handleResponse(response) {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Network response was not ok");
  }
  return response.json();
}

export async function fetchMeals() {
  const response = await fetch(`${API_URL}/dishes`);
  return handleResponse(response);
}

export async function fetchMealById(id) {
  const response = await fetch(`${API_URL}/dishes/${id}`);
  return handleResponse(response);
}

export async function fetchIngredients() {
  const response = await fetch(`${API_URL}/ingredients`);
  return handleResponse(response);
}

export async function addMeal(meal) {
  const response = await fetch(`${API_URL}/dishes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(meal),
  });
  return handleResponse(response);
}

export async function updateMeal(meal) {
  const response = await fetch(`${API_URL}/dishes/${meal.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(meal),
  });
  return handleResponse(response);
}

export async function deleteMeal(id) {
  const response = await fetch(`${API_URL}/dishes/${id}`, {
    method: "DELETE",
  });
  return handleResponse(response);
}
