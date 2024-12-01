import { acData } from '../data/ac'
import { computerData } from '../data/computers';
import { fridgeData } from '../data/fridge';
import { watchData } from '../data/watch';
import { mobileData } from '../data/mobiles';
import { menData } from '../data/men';
import { womanData } from '../data/woman';
import { furnitureData } from '../data/furniture';


const AllProductData = [
  ...acData.map(item => ({...item, path: `/ac` })),
  ...computerData.map(item => ({ ...item, path: `/laptops`})),
  ...fridgeData.map(item => ({ ...item, path: `/Fridge`})),
  ...watchData.map(item => ({ ...item, path: `/watches` })),
  ...mobileData.map(item => ({ ...item, path: `/mobiles` })),
  ...menData.map(item => ({ ...item, path: `/mens` })),
  ...womanData.map(item => ({ ...item, path: `/womens` })),
  ...furnitureData.map(item => ({ ...item, path: `/furniture` })),
  ...fridgeData.map(item => ({ ...item, path: `/fridge` })),
];

export default AllProductData;