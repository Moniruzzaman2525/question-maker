import { DragIndicator } from "@mui/icons-material";
import { useState } from "react";

const AddCategorize = () => {


    const [selectedOption, setSelectedOption] = useState('');
    const initialItems = [{ category: '', name: '' }, { category: '', name: '' }];
    const [items, setItems] = useState(initialItems);
    const [sentence, setSentence] = useState('')
    // Handler function to update the selected option
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const [categories, setCategories] = useState(['', '']);

    const handleCategoryChange = (index, value) => {
        const updatedCategories = [...categories];
        updatedCategories[index] = value;
        if (index === updatedCategories.length - 1) {
            setCategories([...updatedCategories, '']);
        } else {
            setCategories(updatedCategories);
        }
    };

    const handleRemoveCategory = (index) => {
        const updatedCategories = [...categories];
        updatedCategories.splice(index, 1);
        setCategories(updatedCategories);
    };

    const handleDragStart = (index, e) => {
        e.dataTransfer.setData('text/plain', index.toString());
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (index, e) => {
        e.preventDefault();
        const dragIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);

        const updatedCategories = [...categories];
        const [draggedCategory] = updatedCategories.splice(dragIndex, 1);
        updatedCategories.splice(index, 0, draggedCategory);

        setCategories(updatedCategories);
    };

   

    const handleItemsChange = (index, key, value) => {
        const updatedItems = [...items];
        updatedItems[index][key] = value;
        if (index === updatedItems.length - 1) {
            setItems([...updatedItems, { category: '', name: '' }]);
        } else {
            setItems(updatedItems);
        }
    };

    const handleRemoveItems = (index) => {
        if (items.length > 2) {
            const updatedItems = [...items];
            updatedItems.splice(index, 1);
            setItems(updatedItems);
        }
    };

    const handleDragStartItems = (index, e) => {
        e.dataTransfer.setData('text/plain', index.toString());
    };

    const handleDragOverItems = (e) => {
        e.preventDefault();
    };

    const handleDropItems = (index, e) => {
        e.preventDefault();
        const dragIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);

        const updatedItems = [...items];
        const [draggedItem] = updatedItems.splice(dragIndex, 1);
        updatedItems.splice(index, 0, draggedItem);

        setItems(updatedItems);
    };
    return (
        <div className="px-20 py-10">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <DragIndicator />
                    <h3>Screen 1</h3>
                </div>
                <div className="flex gap-3">
                    <h3>Categorization</h3>
                    <span>?</span>
                    <h3>Point___</h3>
                </div>
            </div>
            <div className="py-3">
                <label htmlFor="">Preview</label>
                <input type="text" value={sentence} className="border w-full p-2 rounded border-2" name="" disabled id="" />
            </div>
            <div className="py-3">
                <label htmlFor="">Sentence</label>
                <input type="text" onChange={(e)=> setSentence(e.target.value)} className="border w-full p-2 rounded border-2" name="" placeholder="Description Text" id="" />
            </div>
            <div>
                <div className="p-4 flex items-center gap-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dropdown">
                        Media
                    </label>
                    <select
                        id="dropdown"
                        className="w-28 p-2 border rounded"
                        value={selectedOption}
                        onChange={handleOptionChange}
                    >
                        <option value="" disabled>None</option>
                        <option value="video">Video</option>
                        <option value="image">Image</option>
                        <option value="text">Text</option>
                    </select>
                </div>
            </div>
            <div>
                <div>
                    <h3>Categories</h3>
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="my-2 flex items-center"
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(index, e)}
                        >
                            <div
                                className="flex items-center cursor-move"
                                draggable
                                onDragStart={(e) => handleDragStart(index, e)}
                            >
                                <DragIndicator />
                            </div>
                            <input
                                className="border border-2 p-2 rounded block"
                                type="text"
                                placeholder={`Category ${index + 1}`}
                                value={category || ''}
                                onChange={(e) => handleCategoryChange(index, e.target.value)}
                            />
                            {index >= 2 && category.trim() !== '' && (
                                <button
                                    className="ml-2 p-2 rounded"
                                    onClick={() => handleRemoveCategory(index)}
                                >
                                    X
                                </button>
                            )}
                        </div>
                    ))}

                </div>
                <div>
                    <div>
                        <div>
                            <div className='flex justify-between'>
                                <h3>Items</h3>
                                <h3>Belongs To</h3>
                            </div>
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="my-2 flex items-center justify-between"
                                    onDragOver={handleDragOverItems}
                                    onDrop={(e) => handleDropItems(index, e)}
                                >
                                    <div className='flex items-center'>
                                        <div
                                            className="flex items-center cursor-move"
                                            draggable
                                            onDragStart={(e) => handleDragStartItems(index, e)}
                                        >
                                            <DragIndicator />
                                        </div>

                                        <input
                                            className="border border-2 p-2 rounded block"
                                            type="text"
                                            placeholder={`Item ${index + 1}`}
                                            value={item.name || ''}
                                            onChange={(e) => handleItemsChange(index, 'name', e.target.value)}
                                        />
                                        {index >= 2 && item.name.trim() !== '' && (
                                            <button
                                                className="ml-2 p-2 rounded"
                                                onClick={() => handleRemoveItems(index)}
                                            >
                                                X
                                            </button>
                                        )}
                                    </div>
                                    <div>

                                        <select
                                            className="border text-slate-500 w-48 border-2 p-2 rounded"
                                            value={item.category}
                                            onChange={(e) => handleItemsChange(index, 'category', e.target.value)}
                                        >
                                            <option value="">Choose Category</option>
                                            {categories.map((category, categoryIndex) => (
                                                <option key={categoryIndex} className="text-slate-700" value={category}>
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCategorize;