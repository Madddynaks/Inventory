'use client';

import { useState, useEffect } from "react";

export default function InventoryPage() {
  const [items, setItems] = useState([]);
  const [stockFilter, setStockFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [newItem, setNewItem] = useState({ name: "", stock: "" });
  const [updatedItem, setUpdatedItem] = useState({ id: "", name: "", stock: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // to enter data into the local storage..
  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    } else {
      fetchData();
    }
  }, []);


  //fetching data from json file..
  const fetchData = async () => {
    const res = await fetch("/data.json");
    const data = await res.json();
    setItems(data.items);
    localStorage.setItem("items", JSON.stringify(data.items));
  };

  // filters on stock type
  const handleStockFilterChange = (e) => {
    setStockFilter(e.target.value);
  };

  // handling state of searchbar
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };


  // to get filter data after all the filters applied
  const getFilteredItems = () => {
    let filteredItems = items;

    if (stockFilter === "inStock") {
      filteredItems = filteredItems.filter((item) => Number(item.stock) > 0);
    } else if (stockFilter === "outOfStock") {
      filteredItems = filteredItems.filter((item) => Number(item.stock) === 0);
    }

    if (searchQuery) {
      filteredItems = filteredItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredItems;
  };

  const saveItemsToLocalStorage = (updatedItems) => {
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  // add item function
  const handleAddItem = (e) => {
    e.preventDefault();
    const updatedItems = [...items, { ...newItem, id: items.length + 1 }];
    saveItemsToLocalStorage(updatedItems);
    setNewItem({ name: "", stock: "" });
  };


  // handle edit item function
  const handleEditItem = (e) => {
    e.preventDefault();
    const editedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    saveItemsToLocalStorage(editedItems);
    setUpdatedItem({ id: "", name: "", stock: "" });
  };

  // modals to ask user if they want to delete the item or not
  const openModal = (id) => {
    setItemToDelete(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  const confirmDeleteItem = () => {
    const updatedItems = items.filter((item) => item.id !== itemToDelete);
    saveItemsToLocalStorage(updatedItems);
    closeModal();
  };

  const handleNewItemInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleUpdatedItemInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem({ ...updatedItem, [name]: value });
  };

  // to handle pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = getFilteredItems().slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(getFilteredItems().length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-20 max-xl:p-5">
      <h1 className="text-center text-5xl font-bold mb-10">
        <u>Items List</u>
      </h1>
      <div className="filters mb-5 flex gap-4">
        <label>
          <span className="text-xl font-bold">Filter by stock availability:</span>
          <select
            onChange={handleStockFilterChange}
            value={stockFilter}
            className="border border-gray-400 ml-3"
          >
            <option value="" className="text-center">
              All
            </option>
            <option value="inStock" className="text-center">
              In Stock
            </option>
            <option value="outOfStock" className="text-center">
              Out of Stock
            </option>
          </select>
        </label>
        <label>
          <span className="text-xl font-bold">Search by name:</span>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            className="border border-gray-400 ml-3"
            placeholder="Search items"
          />
        </label>
      </div>

      <table className="inventory-table">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td>
                <div className="flex gap-3 max-md:flex-col">
                  <button
                    onClick={() => setUpdatedItem(item)}
                    className="bg-green-400 py-1 px-3 rounded-full"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => openModal(item.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded-full"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`py-2 px-4 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="flex justify-between px-40 max-xl:px-0 max-md:flex-col">
        <div className="add-form">
          <h2 className="text-2xl text-center font-semibold">Add New Item</h2>
          <form onSubmit={handleAddItem} className="flex flex-col gap-4 mt-3">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={newItem.name}
                onChange={handleNewItemInputChange}
                className="border border-gray-400 ml-3"
                required
              />
            </label>
            <label>
              Stock:
              <input
                type="number"
                name="stock"
                value={newItem.stock}
                className="border border-gray-400 ml-3"
                onChange={handleNewItemInputChange}
                required
              />
            </label>
            <button
              type="submit"
              className="bg-blue-700 py-2 rounded-full text-white w-[50%] mx-auto hover:bg-black transition-all duration-500 ease-in-out"
            >
              Add Item
            </button>
          </form>
        </div>

        <div className="edit-form">
          <h2 className="text-2xl text-center font-semibold">Edit Item</h2>
          <form onSubmit={handleEditItem} className="flex flex-col gap-4 mt-3">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={updatedItem.name}
                onChange={handleUpdatedItemInputChange}
                className="border border-gray-400 ml-3"
                required
              />
            </label>
            <label>
              Stock:
              <input
                type="number"
                name="stock"
                value={updatedItem.stock}
                onChange={handleUpdatedItemInputChange}
                className="border border-gray-400 ml-3"
                required
              />
            </label>
            <button
              type="submit"
              className="bg-blue-700 py-2 rounded-full text-white w-[50%] mx-auto hover:bg-black transition-all duration-500 ease-in-out"
            >
              Update Item
            </button>
          </form>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Confirm Deletion</h2>
            <p>Are you sure you want to delete this item?</p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={confirmDeleteItem}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Yes
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-300 py-2 px-4 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .filters {
          margin-bottom: 20px;
        }
        .filters label {
          margin-right: 20px;
        }
        .add-form,
        .edit-form {
          margin-top: 20px;
        }
        .add-form input,
        .edit-form input {
          margin-right: 10px;
        }
        .inventory-table {
          width: 100%;
          border-collapse: collapse;
        }
        .inventory-table th,
        .inventory-table td {
          border: 1px solid #ddd;
          padding: 8px;
        }
        .inventory-table th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: left;
          background-color: #f2f2f2;
        }
        .pagination {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 5px;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal {
          background: white;
          padding: 20px;
          border-radius: 4px;
          text-align: center;
        }
        .modal h2 {
          margin-bottom: 10px;
        }
        .modal p {
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}
