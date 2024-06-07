import { ReactComponent as CheckSVG} from './svgs/check.svg';
import { ReactComponent as UncheckSVG } from './svgs/uncheck.svg';
import { ReactComponent as DeleteSVG } from './svgs/delete.svg';
import { ReactComponent as ErrorSVG } from './svgs/error.svg';
import './TodoIcon.css';

const iconTypes = {
    'check' : <CheckSVG fill='#FF215E'/>,
    'uncheck' : <UncheckSVG fill='#FF215E'/>,
    'delete' : <DeleteSVG fill='red'/>,
    'error' : <ErrorSVG fill='#f75842'/>,
};

function TodoIcon({type, onClick}) {
    return (
        <span 
          className={`icon icon--${type}`}
          onClick={onClick}
        >
            {iconTypes[type]}
        </span>
    );
}

export {TodoIcon};