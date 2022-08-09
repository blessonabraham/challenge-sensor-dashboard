import { FunctionComponent } from 'react';
import * as React from 'react';
import { SideMenu } from './SideMenu';
import { Header } from './Header';
import { ScrollToTop } from '../Util/ScrollToTop';
import { Footer } from './Footer';
import { Loader } from '../Util/Loader';

export const FrameHOC = (WrappedComponent: FunctionComponent) => {
    class HigherOrderComponent extends React.Component {
        render() {
            return (
                <>
                    <ScrollToTop />
                    <Loader/>
                    <Header />
                    <div className='flex flex-row'>
                        <SideMenu />
                        <div className='container mx-auto px-8 py-8'>
                            <WrappedComponent />
                        </div>
                    </div>
                    <Footer/>
                </>
            );
        }
    }
    return HigherOrderComponent;
};
