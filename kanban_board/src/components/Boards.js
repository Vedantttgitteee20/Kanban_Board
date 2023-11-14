
import Styles from '../css/Boards.module.css'
import Cards from './Cards';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { SlOptions } from "react-icons/sl";

const Boards = ({boardName,tickets,icon,displayOption}) => {
  const handlePlusClick = () => {
    // Implement your logic here when the plus icon is clicked
    alert('Plus icon clicked! Currently this does not implement anything');
  };

  const handleOptionsClick = () => {
    alert('Options icon clicked! Currently this does not implement anything');
  };
  return (
    <div className={Styles.board}>
        <div className={Styles.boardTop}>
          <div className={Styles.leftBox}>
            <div className={Styles.boardTopIcon}>{icon}</div>
            <div className={Styles.boardTopTitle}>
            {boardName}
            </div>
            <div className={Styles.boardTopCount}>
            {tickets?.length}
            </div>
          </div>
          <div className={Styles.rightBox}>
            <div className={Styles.Icon}  onClick={handlePlusClick}>
              <i className="bi bi-plus-lg" style={{ color: '#40454b', fontSize: '14px', marginRight: '5px'}}></i>
            </div>
            <div className={Styles.Icon} onClick={handleOptionsClick}>
            <SlOptions size='12px' fontWeight={"250px"} color='#40454b'/>
            </div>
          </div>
        </div>
        <div className='Cards'>
          {/* <Cards title= "Update User Profile Page UI" name="Vedant Gitte" id="Cam-11"/> */}
          {tickets?.map((ticket) => (
            <Cards key={ticket.id} ticket={ticket} displayOption={displayOption}/>
          ))}
        </div>
    </div>

  );
}

export default Boards;