import {MadeGoal, MissedGoal} from './IfStatement.js'

function Goal2(props){
    const isGoal = props.isGoal;
    return(
        <>
            {isGoal ? <MadeGoal/>: <MissedGoal/>}
        </>
    )
}

export default Goal2