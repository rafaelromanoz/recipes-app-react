const URL_BASE_API = 'https://www.themealdb.com/api/json/v1/1';

export const fetchIngrediente = async (input) => {
  const response = await fetch(`${URL_BASE_API}/filter.php?i=${input}`);
  const data = await response.json();
  return data.meals;
};

export const fetchName = async (input) => {
  const response = await fetch(`${URL_BASE_API}/search.php?s=${input}`);
  const data = await response.json();
  return data.meals;
};

export const fetchPrimeiraLetra = async (input) => {
  const response = await fetch(`${URL_BASE_API}/search.php?f=${input}`);
  const data = await response.json();
  return data.meals;
};

export const getMealCategoriesList = async () => {
  const response = await fetch(`${URL_BASE_API}/list.php?c=list`);
  const data = await response.json();
  return data.meals;
};

export const getMealCategoryFilter = async (category) => {
  const response = await fetch(`${URL_BASE_API}/filter.php?c=${category}`);
  const data = await response.json();
  return data.meals;
};
