import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialProducts = [
    { id: uuidv4(), name: 'Random Mistery Box', price: 15, image: 'https://static.planetminecraft.com/files/resource_media/screenshot/1208/Item-Block_1557001.jpg' },
    { id: uuidv4(), name: 'Mistery Box Japan', price: 12, image: 'https://static.planetminecraft.com/files/resource_media/screenshot/1208/Item-Block_1557001.jpg' },
    { id: uuidv4(), name: 'Mistery Box N/America', price: 18, image: 'https://static.planetminecraft.com/files/resource_media/screenshot/1208/Item-Block_1557001.jpg' },
    { id: uuidv4(), name: 'Mistery Box S/America', price: 10, image: 'https://static.planetminecraft.com/files/resource_media/screenshot/1208/Item-Block_1557001.jpg' },
    { id: uuidv4(), name: 'Mistery Box Harry Potter', price: 15, image: 'https://static.planetminecraft.com/files/resource_media/screenshot/1208/Item-Block_1557001.jpg' },
    { id: uuidv4(), name: 'Mistery Box Celebration', price: 12, image: 'https://static.planetminecraft.com/files/resource_media/screenshot/1208/Item-Block_1557001.jpg' },
    { id: uuidv4(), name: 'Toxic Waste - All types', price: 15, image: 'https://mrsimms.co/cdn/shop/products/ToxicWasteHazardouslySourCandy_1_800x.jpg?v=1647287474' },
    { id: uuidv4(), name: 'Snickers - All types', price: 12, image: 'https://www.snickers.com/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf616/files/migrate-product-files/skt8wrfvkclosxnslzqy.png' },
    { id: uuidv4(), name: 'Blow Pop - All types', price: 18, image: 'https://m.media-amazon.com/images/I/815b9zzb8LL._AC_UF894,1000_QL80_.jpg' },
    { id: uuidv4(), name: 'Dweebs - All types', price: 10, image: 'https://cariboucandy.co.uk/cdn/shop/files/dweebs-tangy-crunchy-nerds-228273.jpg?v=1718924884&width=1946' },
    { id: uuidv4(), name: 'Skittles - All types', price: 15, image: 'https://www.usatoday.com/gcdn/authoring/authoring-images/2023/10/09/USAT/71116684007-1494651173.jpg?crop=4047,3035,x310,y0' },
    { id: uuidv4(), name: 'KitKat - All types', price: 12, image: 'https://www.kitkat.com.au/media/catalog/product/cache/28857f20c198528abed503fb54a4b0b5/9/3/93600057_h_en_1648444100898.jpg' },
    { id: uuidv4(), name: 'Takis - All types', price: 15, image: 'https://www.confectionerywarehouse.com.au/cdn/shop/files/Takis_Fuego.jpg?v=1725069806' },
    { id: uuidv4(), name: 'Pringles - All types', price: 12, image: 'https://static.independent.co.uk/2021/09/26/15/newFile.jpg' },
    { id: uuidv4(), name: 'Doritos - All types', price: 18, image: 'https://m.media-amazon.com/images/I/71hfQxd5UxL.jpg' },
    { id: uuidv4(), name: 'Cheetos - All types', price: 10, image: 'https://share.snacks.com/images/v2/webp/fh/webp/fh_bundle_042324.jpg' }
];

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProducts,
  reducers: {},
});

export const selectProducts = (state) => state.products;
export default productsSlice.reducer;
