import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import facebook from '../../images/FB-logo.jpg';
import ig from '../../images/IG-logo.png';
import tiktok from '../../images/Tiktok-logo.png';
import youtube from '../../images/Youtube-logo.png';

function SocialLogos(){
    return <div>
<Container>
    <div>
        <a href='https://www.facebook.com/LCYTH' >
            <img className='navbar-brand' width='70' height='50' src={facebook} />
        </a>
        <a href='https://www.instagram.com/lakeviewyth/' >
            <img className='navbar-brand' width='70' height='50' src={ig} />
        </a>
        <a href='https://www.tiktok.com/@lakeviewyth?lang=en' >
            <img className='navbar-brand' width='70' height='50' src={tiktok} />
        </a>
        <a href='https://www.youtube.com/channel/UC6M355s3oLdiqiZBWGX6o7w' >
            <img className='navbar-brand' width='70' height='50' src={youtube} />
        </a>
    </div>
</Container>
    </div>
}
export default SocialLogos
{/* <Link to='https://www.facebook.com/LCYTH' >
<img className='navbar-brand' width='70' height='50' src={facebook} />
</Link>
<Link to='https://www.instagram.com/lakeviewyth/' >
<img className='navbar-brand' width='70' height='50' src={ig} />
</Link>
<Link to='https://www.tiktok.com/@lakeviewyth?lang=en' >
<img className='navbar-brand' width='70' height='50' src={tiktok} />
</Link>
<Link to='https://www.youtube.com/channel/UC6M355s3oLdiqiZBWGX6o7w' >
<img className='navbar-brand' width='70' height='50' src={youtube} />
</Link> */}