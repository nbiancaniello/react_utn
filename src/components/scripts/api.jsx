export const fetchProducts = async (filter = null) => {
   const BASE_URL = '/products/data/products.json';
   try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
         throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      if (data.products && Array.isArray(data.products)) {
         if (filter) {
            switch (filter) {
               case 'isPromotion':
                  data.products = data.products.filter(product => product.isPromotion === true);
                  break;
               case 'isNewArrival':
                  data.products = data.products.filter(product => product.isNewArrival === true);
                  break;
               default:
                  break;
            }
         }
      } else {
         throw new Error('Data format is incorrect.');
      }

      return data;

   } catch (error) {
      console.error(error);
      return;
   }
}

export const fetchProductsById = async (id) => {
   const BASE_URL = '/products/data/products.json';
   try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
         throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const product = data.products.find(product => product.id === id);
      return product;

   } catch (error) {
      console.error(error);
      return;
   }
}

export const fetchProductsByCategory = async (category) => {
   const BASE_URL = '/products/data/products.json';
   try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
         throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const products = data.products.filter(product => product.category.split(',').includes(category));
      return products;

   } catch (error) {
      console.error(error);
      return;
   }
}