import React from 'react';
import Styles from '../css/Cards.module.css';
import Avatar from './Avatar';
import {priorityIcons ,statusIcons} from './IconFunctions'
import { FeaturedBox } from './FeaturedBox';
import { useUserNameByIdOnly } from './KanbanUtils';

const Card = ({ ticket, displayOption }) => {
  const user=useUserNameByIdOnly(ticket.userId)
  return (
    <div className={Styles.card}>
      {displayOption  && (
        <div className={Styles.avatar}>
          <Avatar username={user} style={{width: '24px',height: '24px'}}></Avatar>
        </div>)}
      <div className={Styles.id}>{ticket.id}</div>
      <div className={Styles.midBox}>
      {displayOption!=='status'  && (<div className={Styles.statusIcon}>{statusIcons[ticket.status]}</div>)}
        <div className={Styles.title}>{ticket.title}</div>
      </div>
      <div className={Styles.bottomBox}>
      {displayOption!=='priority'  && (<div>{priorityIcons[ticket.priority]}</div>)}
          {ticket.tag.map((tagName, index) => (
              <FeaturedBox key={index} name={tagName}  style={{ marginLeft: displayOption !== 'priority' ? '5px': '2px' }} />
          ))}
      </div>
    </div>
  );
};

export default Card;
