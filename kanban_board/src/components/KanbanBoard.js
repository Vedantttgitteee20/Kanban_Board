import React, { useState, useEffect } from 'react';
import Boards from './Boards';
import Styles from '../css/KanbanBoard.module.css';

const KanbanBoard = ({ tickets, displayOption }) => {
  const [groupedTickets, setGroupedTickets] = useState([]);

  useEffect(() => {
    // Group tickets based on the selected display option
    const grouped = groupTicketsByPriority(tickets);
    setGroupedTickets(grouped);
  }, [tickets]);
  const getBoardNameByStatus = (status) => {
    // Add more status mappings as needed
    const statusNames = {
      'Todo': 'To Do',
      'In progress': 'In Progress',
      'Backlog': 'Backlog',
      'Done': 'Done',
      'Cancelled': 'Cancelled',
    };

    return statusNames[status] || 'Unknown Board';
  };
  const getBoardNameByPriority = (priority) => {
    const priorityNames = {
      4: 'Urgent',
      3: 'High',
      2: 'Medium',
      1: 'Low',
      0: 'No Priority',
    };
  
    return priorityNames[priority] || 'Unknown Board';
  };
  const groupTicketsByPriority = (tickets) => {
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

  return (
    <div className={Styles.outer}>
      {displayOption==='priority' && (
          <div className={Styles.boards}>
            {[0, 4, 3, 2, 1].map((priority) => (
              <Boards key={priority} boardName={`${getBoardNameByPriority(priority)}`} tickets={groupedTickets[priority]} />
            ))}
          </div>
      )}
      {displayOption === 'status' && (
        <div className={Styles.boards}>
          {['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled'].map((status) => (
            <Boards key={status} boardName={`${getBoardNameByStatus(status)}`} tickets={groupedTickets[status]} />
          ))}
        </div>
      )}
    </div>
  );
};

export default KanbanBoard;
