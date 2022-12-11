const Accordion=({leftHead, rightHead})=>{
    return(<>
        <div className="accordion_box">
            <div className="aem-Grid aem-Grid--12 accordion">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tabelt--12 aem-GridColumn--phone--12 accordion_left">
                {leftHead}
                </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tabelt--12 aem-GridColumn--phone--12 accordion_right">
                {rightHead}
                </div>
            </div>
            <div className='down_arrow'>
            <figure>
                <img src={require('../../Images/chevron-down.svg').default} alt='like'/>
            </figure>
        </div>
        </div>
       
    </>);
    }
    export default Accordion;