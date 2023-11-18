import {Helmet} from "react-helmet";

const HeadCover = ({headTitle,img,children}) => {
    return (
        <div>
            <Helmet>
            <meta charSet="utf-8" />
            {
                headTitle!=null && <title>Job The Chakri | {headTitle}</title>
            }
            {
                img!=null && <link rel="icon" type="image/svg+xml" href={img} />
            }
                
                
            </Helmet>
            {children}
        </div>
    );
};

export default HeadCover;