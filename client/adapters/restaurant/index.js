export const restaurantAdapter = ({
  slug,
  images,
  name,
  information,
  category,
  locale,
}) => {
  return {
    images,
    name,
    slug,
    information,
    category,
    locale,
  };
};

export const restaurantsAdapter = (restaurants) => {
  console.log('restaurants ===>> ', restaurants);
  return restaurants.map((restaurant) => restaurantAdapter({ ...restaurant }));
};
