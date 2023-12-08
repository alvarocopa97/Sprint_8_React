import React from 'react';
import Products from './Products';
import Footer from './Footer';
function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    {/*<!-- <TopBar /> -->*/}
                    {/*<!-- <ContentRowTop /> -->*/}
                    {/*<!-- <TopBar /> -->*/}
                    
                    <h1>Titulo</h1>
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;