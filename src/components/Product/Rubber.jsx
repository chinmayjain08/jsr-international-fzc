import React from 'react'
import './product.css'
import ItemHero from './ItemHero'
// import photo1 from '../../constants/images/JSR_Inter_project_pics/Rubber/USED-BUTYL-RUBBER-TUBES-3.png'
// import photo2 from '../../constants/images/JSR_Inter_project_pics/Rubber/USED-BUTYL-RUBBER-TUBES-4.png'
// import photo3 from '../../constants/images/JSR_Inter_project_pics/Rubber/USED-BUTYL-RUBBER-TUBES-5.png'
// import photo4 from '../../constants/images/JSR_Inter_project_pics/Rubber/USED-BUTYL-RUBBER-TUBES.png'

function Rubber() {
    const data={
        photo1:"/images/JSR_Inter_project_pics/Rubber/USED-BUTYL-RUBBER-TUBES-3.png",
        photo2:"/images/JSR_Inter_project_pics/Rubber/USED-BUTYL-RUBBER-TUBES-4.png",
        photo3:"/images/JSR_Inter_project_pics/Rubber/USED-BUTYL-RUBBER-TUBES-1.png",
        photo4:"/images/JSR_Inter_project_pics/Rubber/IMG-20171206-WA0008.jpg"
    }
    return (
        <div className='container'>
            <ItemHero photo1={data.photo1} photo2={data.photo2} photo3={data.photo3} photo4={data.photo4} title="Rubber" description="The postconsumer plastics recycling process consists of several steps. The first step is the collection of waste plastics (Bataineh, 2020; Franklin Associates, 2018; Santos et al., 2021). In terms of collection, MSW and industrial waste can be differentiated (Willis et al., 2020). The former process includes the collection of postconsumer plastic waste, which is typically mixed and contains contaminants." />
        </div>
    )
}

export default Rubber