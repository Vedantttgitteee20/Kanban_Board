
import Styles from '../css/Boards.module.css'
import Cards from './Cards';

const Boards = ({boardName}) => {
  return (
    <div className={Styles.board}>
        <div className={Styles.boardTop}>
        <div className={Styles.boardTopIcon}></div>
          <div className={Styles.boardTopTitle}>
          {boardName}
          </div>
        </div>
        <div className='Cards'>
          <Cards title= "Update User Profile Page UI" name="Vedant Gitte" id="Cam-11"/>
          {/* <Cards /> */}
        </div>
    </div>

  );
}

export default Boards;