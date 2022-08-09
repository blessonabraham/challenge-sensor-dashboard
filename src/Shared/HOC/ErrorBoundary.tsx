import { Component } from 'react';
import { Logger } from '../LoggerService/LoggerService';

export class ErrorBoundary extends Component {
    state: { hasError?: boolean };
    props: { children?: any };
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        Logger(JSON.stringify(error) + JSON.stringify(errorInfo));
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='flex h-screen w-screen flex-1 items-center justify-center'>
                    <div className='text-2xl text-gray-600'>
                        Ops! Something went wrong. We are working on it :)
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
