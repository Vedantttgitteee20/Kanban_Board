// KanbanBoard.js

import React, { useState, useEffect } from 'react';
import Boards from './Boards';
import Styles from '../css/KanbanBoard.module.css';
import Avatar from './Avatar';
import { priorityIcons, statusIcons } from './IconFunctions'; // Import the icon functions
import {
  getBoardNameByStatus,
  getBoardNameByPriority,
  groupTicketsByPriority,
  groupTicketsByStatus,
  groupTicketsByUser,
  getUserNameById,
} from './KanbanUtils'; // Import the utility functions

const KanbanBoard = ({ tickets, displayOption }) => {
  const [groupedTickets, setGroupedTickets] = useState([]);

  useEffect(() => {
    // Group tickets based on the selected display option
    const grouped = getGroupedTickets(tickets, displayOption);
    setGroupedTickets(grouped);
  }, [tickets, displayOption]);

  const getGroupedTickets = (tickets, displayOption) => {
    switch (displayOption) {
      case 'priority':
        return groupTicketsByPriority(tickets);
      case 'status':
        return groupTicketsByStatus(tickets);
      case 'user':
        return groupTicketsByUser(tickets);
      default:
        return {};
    }
  };

  return (
    <div className={Styles.outer}>
      {displayOption === 'priority' && (
        <div className={Styles.boards}>
          {[0, 4, 3, 2, 1].map((priority) => (
            <Boards key={priority} boardName={`${getBoardNameByPriority(priority)}`} tickets={groupedTickets[priority]} icon={priorityIcons[priority]}/>
          ))}
        </div>
      )}
      {displayOption === 'status' && (
        <div className={Styles.boards}>
          {['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled'].map((status) => (
            <Boards key={status} boardName={`${getBoardNameByStatus(status)}`} tickets={groupedTickets[status]} icon={statusIcons[status]}/>
          ))}
        </div>
      )}
      {displayOption === 'user' && (
        <div className={Styles.boards}>
          {Object.keys(groupedTickets).map((userId) => (
            <Boards key={userId} boardName={`${getUserNameById(tickets,userId)}`} tickets={groupedTickets[userId]} icon={<Avatar username={getUserNameById(tickets, userId)} />} />
          ))}
        </div>
      )}
    </div>
  );
};

export default KanbanBoard;
