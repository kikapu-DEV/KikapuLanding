import leftRest from '../../assets/leftRest.png';
import center from '../../assets/centerCust.png';
import right from '../../assets/rightSupp.png';

export const CheckApp = () => {
    return ( 
        <div className="checkAppContainer">
            <h2 style={{textAlign: 'center'}}>CHECKOUT OUR APP <span style={{color: '#18D26E'}}>INTERFACE LOOK</span> </h2>

            <div className="checkAppDisplay">
                <div className='lower'><img src={leftRest} alt="checkAPP" /></div>
                <div className='center'><img src={center} alt="checkAPP" /></div>
                <div className='lower'><img src={right} alt="checkAPP" /></div>
            </div>
        </div>
     );
}
 
