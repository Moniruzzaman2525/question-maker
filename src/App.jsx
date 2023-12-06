import AddCategorize from "./Component/Categorize/AddCategorize";
import Categorize from "./Component/Categorize/Categorize";
import Cloze from "./Component/Cloze/Cloze";

const App = () => {
  return (
    <div>
      <AddCategorize />
      <Categorize />
      <Cloze />
    </div>
  );
};

export default App;

// import { DragIndicator } from '@mui/icons-material';
// import { useState } from 'react';

// const ItemsComponent = () => {
//   const [items, setItems] = useState(['', '']);
//   const [categories, setCategories] = useState(['categories 1', 'categories 2', 'categories 3']);

//   const handleItemsChange = (index, value) => {
//     const updatedItems = [...items];
//     updatedItems[index] = value;
//     if (index === updatedItems.length - 1) {
//       setItems([...updatedItems, '']);
//     } else {
//       setItems(updatedItems);
//     }
//   };

//   const handleRemoveItems = (index) => {
//     const updatedCategories = [...items];
//     updatedCategories.splice(index, 1);
//     setItems(updatedCategories);
//   };

//   const handleDragStartItems = (index, e) => {
//     e.dataTransfer.setData('text/plain', index.toString());
//   };

//   const handleDragOverItems = (e) => {
//     e.preventDefault();
//   };

//   const handleDropItems = (index, e) => {
//     e.preventDefault();
//     const dragIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);

//     const updatedCategories = [...items];
//     const [draggedCategory] = updatedCategories.splice(dragIndex, 1);
//     updatedCategories.splice(index, 0, draggedCategory);

//     setItems(updatedCategories);
//   };

//   return (
//     <div>
//       <h3>Items</h3>
//       {items.map((items, index) => (
//         <div
//           key={index}
//           className="my-2 flex items-center"
//           onDragOver={handleDragOverItems}
//           onDrop={(e) => handleDropItems(index, e)}
//         >
//           <div
//             className="flex items-center cursor-move"
//             draggable
//             onDragStart={(e) => handleDragStartItems(index, e)}
//           >
//             <DragIndicator />
//           </div>
//           <input
//             className="border border-2 p-2 rounded block"
//             type="text"
//             placeholder={`Items ${index + 1}`}
//             value={items || ''}
//             onChange={(e) => handleItemsChange(index, e.target.value)}
//           />
//           {index >= 2 && items.trim() !== '' && (
//             <button
//               className="ml-2 p-2 rounded"
//               onClick={() => handleRemoveItems(index)}
//             >
//               X
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ItemsComponent;

// import { DragIndicator } from '@mui/icons-material';
// import { useState } from 'react';

// const ItemsComponent = () => {
//   const initialItems = [{ category: '', name: '' }, { category: '', name: '' }];
//   const [items, setItems] = useState(initialItems);

//   const handleItemsChange = (index, key, value) => {
//     const updatedItems = [...items];
//     updatedItems[index][key] = value;
//     if (index === updatedItems.length - 1) {
//       setItems([...updatedItems, { category: '', name: '' }]);
//     } else {
//       setItems(updatedItems);
//     }
//   };

//   const handleRemoveItems = (index) => {
//     if (items.length > 2) {
//       const updatedItems = [...items];
//       updatedItems.splice(index, 1);
//       setItems(updatedItems);
//     }
//   };

//   const handleDragStartItems = (index, e) => {
//     e.dataTransfer.setData('text/plain', index.toString());
//   };

//   const handleDragOverItems = (e) => {
//     e.preventDefault();
//   };

//   const handleDropItems = (index, e) => {
//     e.preventDefault();
//     const dragIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);

//     const updatedItems = [...items];
//     const [draggedItem] = updatedItems.splice(dragIndex, 1);
//     updatedItems.splice(index, 0, draggedItem);

//     setItems(updatedItems);
//   };

//   const categories = ['Category 1', 'Category 2', 'Category 3'];
//   console.log(items);

//   return (
//     <div className='px-20'>
//       <div>
//         <div className='flex justify-between'>
//           <h3>Items</h3>
//           <h3>Belongs To</h3>
//         </div>
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="my-2 flex items-center justify-between"
//             onDragOver={handleDragOverItems}
//             onDrop={(e) => handleDropItems(index, e)}
//           >
//             <div className='flex items-center'>
//               <div
//                 className="flex items-center cursor-move"
//                 draggable
//                 onDragStart={(e) => handleDragStartItems(index, e)}
//               >
//                 <DragIndicator />
//               </div>

//               <input
//                 className="border border-2 p-2 rounded block"
//                 type="text"
//                 placeholder={`Item ${index + 1}`}
//                 value={item.name || ''}
//                 onChange={(e) => handleItemsChange(index, 'name', e.target.value)}
//               />
//               {index >= 2 && item.name.trim() !== '' && (
//                 <button
//                   className="ml-2 p-2 rounded"
//                   onClick={() => handleRemoveItems(index)}
//                 >
//                   X
//                 </button>
//               )}
//             </div>
//             <div>

//               <select
//                 className="border w-48 border-2 p-2 rounded"
//                 value={item.category}
//                 onChange={(e) => handleItemsChange(index, 'category', e.target.value)}
//               >
//                 <option value="">Choose Category</option>
//                 {categories.map((category, categoryIndex) => (
//                   <option key={categoryIndex} value={category}>
//                     {category}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         ))}
//         <button onClick={() => console.log('Save Status:', items)}>
//           Save Status
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ItemsComponent;

