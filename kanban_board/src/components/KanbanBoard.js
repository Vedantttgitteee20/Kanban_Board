// KanbanBoard.js

import React, { useState, useEffect } from 'react';
import Boards from './Boards';
import Styles from '../css/KanbanBoard.module.css';
import Avatar from './Avatar';
import { priorityIcons, statusIcons } from './IconFunctions';
import {
  getBoardNameByStatus,
  getBoardNameByPriority,
  groupTicketsByPriority,
  groupTicketsByStatus,
  groupTicketsByUser,
  getUserNameById,
} from './KanbanUtils';

const KanbanBoard = ({ tickets, displayOption, sortOption }) => {
  const [groupedTickets, setGroupedTickets] = useState([]);

  useEffect(() => {
    // Group tickets based on the selected display option
    const grouped = getGroupedTickets(tickets, displayOption);
    setGroupedTickets(grouped);
  }, [tickets, displayOption, sortOption]);

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

  const sortTickets = (tickets) => {
    if (!tickets || !Array.isArray(tickets)) {
      return [];
    }

    switch (sortOption) {
      case 'priority':
        return [...tickets].sort((a, b) => b.priority - a.priority);
      case 'title':
        return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return tickets;
    }
  };

  return (
    <div className={Styles.outer}>
      {displayOption === 'priority' && (
        <div className={Styles.boards}>
          {[0, 4, 3, 2, 1].map((priority) => (
            <Boards
              key={priority}
              boardName={`${getBoardNameByPriority(priority)}`}
              tickets={sortTickets(groupedTickets[priority])}
              icon={priorityIcons[priority]}
              displayOption={displayOption}
            />
          ))}
        </div>
      )}
      {displayOption === 'status' && (
        <div className={Styles.boards}>
          {['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled'].map((status) => (
            <Boards
              key={status}
              boardName={`${getBoardNameByStatus(status)}`}
              tickets={sortTickets(groupedTickets[status])}
              icon={statusIcons[status]}
              displayOption={displayOption}
            />
          ))}
        </div>
      )}
      {displayOption === 'user' && (
        <div className={Styles.boards}>
          {Object.keys(groupedTickets).map((userId) => (
            <Boards
              key={userId}
              boardName={`${getUserNameById(tickets, userId)}`}
              tickets={sortTickets(groupedTickets[userId])}
              icon={<Avatar username={getUserNameById(tickets, userId)} 
              displayOption={displayOption}/>}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default KanbanBoard;
