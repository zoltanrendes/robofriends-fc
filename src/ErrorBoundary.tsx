import React from 'react';
import { Alert } from 'reactstrap';

interface IErrorBoundary {
    fallBackComponent: React.ReactNode;
    children: React.ReactNode;
    showError?: boolean;
}

interface IErrorBoundaryState {
    hasError: boolean;
    error?: Error | undefined;
    info: {
        componentStack?: string;
    };
}

export class ErrorBoundary extends React.Component<IErrorBoundary, IErrorBoundaryState> {
    constructor(props: IErrorBoundary) {
        super(props);
        this.state = {
            hasError: false,
            error: undefined,
            info: {
                componentStack: '',
            },
        };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error | undefined, info: object) {
        this.setState({ hasError: true, error, info });
    }

    render() {
        const { hasError, error, info } = this.state;
        const { fallBackComponent, children, showError } = this.props;
        const componentStack = info && info.componentStack ? info.componentStack : null;
        const errorMessage = (error || '').toString();

        if (hasError) {
            // Only for debugging
            if (showError) {
                return <Alert type="error" message={errorMessage} description={<pre>{componentStack}</pre>} />;
            }
            return fallBackComponent;
        }
        return children;
    }
}
