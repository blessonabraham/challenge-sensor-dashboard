import { FunctionComponent } from 'react';
import * as React from 'react';
import { SideMenu } from './SideMenu';
import { Header } from './Header';
import { ScrollToTop } from '../Util/ScrollToTop';

export const FrameHOC = (WrappedComponent: FunctionComponent) => {
    class HigherOrderComponent extends React.Component {
        render() {
            return (
                <>
                    <ScrollToTop />
                    <Header />
                    <div className='flex flex-row'>
                        <SideMenu />
                        <div className='container mx-auto px-8 py-8'>
                            <WrappedComponent />
                        </div>
                    </div>
                </>
            );
        }
    }
    return HigherOrderComponent;
};
