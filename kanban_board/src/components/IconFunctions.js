// IconFunctions.js

import { SlOptions } from "react-icons/sl";
import { IoIosRadioButtonOff } from "react-icons/io";
import { TbCircleDotted } from "react-icons/tb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import highIcon from '../assets/icons/high.png';
import mediumIcon from '../assets/icons/medium.png';
import lowIcon from '../assets/icons/low.png';

export const priorityIcons = {
  0: <SlOptions size='12px' fontWeight={"250px"} color='#40454b'/>,
  4: <i className="bi bi-exclamation-square-fill" style={{ color: '#fa9063'}}></i>,
  3:<img src={highIcon} alt="high" style={{ width: '14px', height: '14px' }} />,
  2: <img src={mediumIcon} alt="Med" style={{ width: '14px', height: '14px' }} />,
  1: <img src={lowIcon} alt="low" style={{ width: '14px', height: '14px' }} />,
};

export const statusIcons = {
  'Backlog': <TbCircleDotted style={{fontSize:'16px'}} />,
  'Todo': <IoIosRadioButtonOff style={{ color: '#c1c3c6', fontSize: '16px'}}/>,
  'In progress':<FontAwesomeIcon icon={faCircleHalfStroke} rotation={180}  style={{ color: '#f1ca4c'}}/>,
  'Done': <FontAwesomeIcon icon={faCheckCircle}  style={{ color: '#5f6bd2' }}/>,
  'Cancelled': <i className="bi bi-exclamation-square-fill" style={{ color: '#fa9063'}}></i>,
};
