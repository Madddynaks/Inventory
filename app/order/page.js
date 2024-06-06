'use client';

import { useState, useEffect } from 'react';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [sortType, setSortType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);

  // fetching data from json file
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
      setOrders(data.orders);
    };
    
    fetchData();
  }, []);

  // applying all the filters to the table
  const getFilteredAndSortedOrders = () => {
    let filteredOrders = [...orders];

    if (statusFilter) {
      filteredOrders = filteredOrders.filter(order => order.status === statusFilter);
    }

    if (searchTerm) {
      filteredOrders = filteredOrders.filter(order => 
        order.customer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortType === 'customer') {
      filteredOrders.sort((a, b) => a.customer.localeCompare(b.customer));
    } else if (sortType === 'itemCount') {
      filteredOrders.sort((a, b) => {
        const aItemCount = a.items.reduce((sum, item) => sum + item.quantity, 0);
        const bItemCount = b.items.reduce((sum, item) => sum + item.quantity, 0);
        return aItemCount - bItemCount;
      });
    }

    return filteredOrders;
  };

  // handling modal which is opened when an order is clicked
  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  // changind the state of the order when it is completed
  const handleMarkAsCompleted = () => {
    const updatedOrders = orders.map(order =>
      order.id === selectedOrder.id ? { ...order, status: 'Completed' } : order
    );
    setOrders(updatedOrders);
    handleCloseModal();
  };

  return (
    <div className='p-20 max-lg:p-5'>
      <h1 className='text-center text-5xl font-bold mb-10'><u>Order List</u></h1>
      <div className="filters flex gap-20 max-lg:flex-col max-lg:gap-3">
        <label>
          <span className='text-xl font-bold'>Filter by status:</span>
          <select onChange={(e) => setStatusFilter(e.target.value)} value={statusFilter} className='border border-gray-400 ml-3'>
            <option value="" className='text-center'>All</option>
            <option value="Pending" className='text-center'>Pending</option>
            <option value="Completed" className='text-center'>Completed</option>
          </select>
        </label>
        <label>
        <span className='text-xl font-bold'>Sort By:</span>
          <select onChange={(e) => setSortType(e.target.value)} value={sortType} className='ml-3 border border-gray-400'>
            <option value="" className='text-center'>None</option>
            <option value="customer" className='text-center'>Customer Name</option>
            <option value="itemCount" className='text-center'>Item Count</option>
          </select>
        </label>
        <label>
          <span className='text-xl font-bold'>Search by customer:</span>
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            className='ml-3 border border-gray-400 px-2'
            placeholder='Enter customer name'
          />
        </label>
      </div>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Item Count</th>
          </tr>
        </thead>
        <tbody>
          {getFilteredAndSortedOrders().map(order => (
            <tr key={order.id} onClick={() => handleOrderClick(order)}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.status}</td>
              <td>{order.items.reduce((sum, item) => sum + item.quantity, 0)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedOrder && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className='text-xl font-bold'>Order Details</h2>
            <p><strong>Customer:</strong> {selectedOrder.customer}</p>
            <p><strong>Status:</strong> {selectedOrder.status}</p>
            <h3 className='text-lg font-bold'>Items</h3>
            <ul>
              {selectedOrder.items.map(item => (
                <li key={item.id}>
                  {item.name} - Quantity: {item.quantity} - In Stock: {item.quantity > 0 ? 'Yes' : 'No'}
                </li>
              ))}
            </ul>
            <div className="flex gap-3 justify-center mt-4">
              {selectedOrder.status !== 'Completed' && (
                <button
                  onClick={handleMarkAsCompleted}
                  className="bg-green-500 text-white py-2 px-4 rounded"
                >
                  Mark as Completed
                </button>
              )}
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 py-2 px-4 rounded"
              >
                Close
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
        .orders-table {
          width: 100%;
          border-collapse: collapse;
        }
        .orders-table th, .orders-table td {
          border: 1px solid #ddd;
          padding: 8px;
          cursor: pointer;
        }
        .orders-table th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: left;
          background-color: #f2f2f2;
        }
        .orders-table tr:hover {
          background-color: #f1f1f1;
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
          width: 80%;
          max-width: 500px;
          text-align: center;
        }
        .modal h2 {
          margin-bottom: 10px;
        }
        .modal p, .modal ul {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
