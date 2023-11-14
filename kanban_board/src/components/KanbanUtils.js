// KanbanUtils.js
import { fetchData } from "./api";
import { useState, useEffect } from "react";
export const getBoardNameByStatus = (status) => {
  const statusNames = {
    'Todo': 'Todo',
    'In progress': 'In Progress',
    'Backlog': 'Backlog',
    'Done': 'Done',
    'Cancelled': 'Cancelled',
  };

  return statusNames[status] || 'Unknown Board';
};

export const getBoardNameByPriority = (priority) => {
  const priorityNames = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No Priority',
  };

  return priorityNames[priority] || 'Unknown Board';
};

export const groupTicketsByPriority = (tickets) => {
  const grouped = {
    0: [], // No priority
    4: [], // Urgent
    3: [], // High
    2: [], // Medium
    1: [], // Low
  };

  if (!Array.isArray(tickets.tickets)) {
    console.error('Tickets is not an array:', tickets);
    return grouped;
  }

  tickets.tickets.forEach((ticket) => {
    const priority = ticket.priority;
    grouped[priority].push(ticket);
  });

  return grouped;
};

export const groupTicketsByStatus = (tickets) => {
  const grouped = {
    'Backlog': [],
    'Todo': [],
    'In progress': [],
    'Done': [],
    'Cancelled': [],
  };

  if (!Array.isArray(tickets.tickets)) {
    console.error('Tickets is not an array:', tickets);
    return grouped;
  }

  tickets.tickets.forEach((ticket) => {
    const status = ticket.status;
    grouped[status].push(ticket);
  });

  return grouped;
};

export const groupTicketsByUser = (tickets) => {
  const grouped = {};

  if (!Array.isArray(tickets.tickets)) {
    console.error('Tickets is not an array:', tickets);
    return grouped;
  }

  tickets.tickets.forEach((ticket) => {
    const userId = ticket.userId;
    if (!grouped[userId]) {
      grouped[userId] = [];
    }
    grouped[userId].push(ticket);
  });

  return grouped;
};

export const getUserNameById = (tickets, userId) => {
  const user = tickets.users.find((user) => user.id === userId);
  return user ? user.name : 'Unknown User';
};
export const useTicketsData = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setTickets(data));
  }, []);

  return tickets;
};

export const useUserNameByIdOnly = (userId) => {
  const tickets = useTicketsData();

  // Check if tickets or tickets.users is undefined
  if (!tickets || !tickets.users) {
    return 'Loading...'; // or handle loading state accordingly
  }

  const user = tickets.users.find((user) => user.id === userId);
  return user ? user.name : 'Unknown User';
};




