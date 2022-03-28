import ImageHolder from "../components/ImageHolder"
import Gridtest from '../components/GridTest'
import PieceForm from '../components/PieceForm'
export default function Dashboard({walk, user, handleLogout}) {
    return (
        <div>
            {/* <ImageHolder/> */}
            <Gridtest walk={walk}/>
            <PieceForm walk={walk}/>
        </div>
    )
} 