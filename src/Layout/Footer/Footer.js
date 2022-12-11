import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';
const Footer=()=>{
    return(<>
             <hr />
             <footer className='aem-Grid aem-Grid--12 container'>
             <FooterTop />
             </footer>
             <hr />
             <footer className='aem-Grid aem-Grid--12 container'>
             <FooterBottom />
            </footer>
            </>
            );
        }
export default Footer;