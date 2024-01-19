import { toggleVisibleProfile } from "../store/profile";
import { useSelector, useDispatch } from "react-redux";

export const ProfilePage = () =>{
    const dispatch = useDispatch()
    const {firstName, lastName, isVisibleProfile} = useSelector(state => state )
    return(
        <div>
            
        <h1>ProfilePage</h1>

        <button onClick={() => dispatch(toggleVisibleProfile())}>Toggle profile visible</button>
        {isVisibleProfile &&(<>
        <h3>firstName: <span>{firstName}</span></h3>
        <h3>lastName: <span>{lastName}</span></h3> 
        </>
        )} 
        </div>
    );
};