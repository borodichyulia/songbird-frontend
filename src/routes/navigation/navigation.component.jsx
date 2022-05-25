import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import CounterScore from "../../components/counter-score/counter-score.component";
import { setAuthorization } from "../../store/userSlice";

import '../../routes/navigation/navigation.styles.scss';

const Navigation = () => {
    const dispatch = useDispatch();

    const level = useSelector(state => state.bird.level);
    const authorization = useSelector(state => state.user.authorization);

    const signOutUser = () => dispatch(setAuthorization());

    const selectNav = (id) => {
        if (level === id) return 'select';
        else return ' ';
    }

    return (
        <>
            <div className={'navigation-container'}>
                <div className={'main-navigation-container'}>
                    <div className={'logo-container'}>
                        <Link to='/home'>Song<span>bird</span></Link>
                    </div>
                    <div className={'score'}>
                        {authorization ? <CounterScore /> : <Link to='/signup'>Sign Up</Link>}

                        {!authorization ?
                            <Link to='/signin'>Sign In</Link>
                            :
                            <Link to='/' onClick={signOutUser}>Sign Out</Link>
                        }
                    </div>
                </div>
                <div className={`${authorization ? '' : 'authorization-none'} secondary-navigation-container`}>
                    <div className={`${selectNav(0)} nav-link`}>Разминка</div>
                    <div className={`${selectNav(1)} nav-link`}>Воробьиные</div>
                    <div className={`${selectNav(2)} nav-link`}>Лесные птицы</div>
                    <div className={`${selectNav(3)} nav-link`}>Певчие птицы</div>
                    <div className={`${selectNav(4)} nav-link`}>Хищные птицы</div>
                    <div className={`${selectNav(5)} nav-link`}>Морские птицы</div>
                </div>
            </div>
            <Outlet />
        </>
    )
};

export default Navigation;