import facebook from '../../images/FB-logo.jpg';
import ig from '../../images/IG-logo.png';
import tiktok from '../../images/Tiktok-logo.png';
import youtube from '../../images/Youtube-logo.png';

function SocialLogos(){
    return <div>
        <img className='navbar-brand' width='70' height='50' src={facebook} />
        <img className='navbar-brand' width='70' height='50' src={ig} />
        <img className='navbar-brand' width='70' height='50' src={tiktok} />
        <img className='navbar-brand' width='70' height='50' src={youtube} />
    </div>
}
export default SocialLogos