import React from 'react';

import { 
    FructstoreServiceConsumer 
} from '../fructstore-service-context';
import ErrorBoundry from '../error-boundry';

const withFructstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <ErrorBoundry>
                <FructstoreServiceConsumer>
                    {
                        (fructstoreService) => {
                            return ( <Wrapped { ...props} 
                                fructstoreService={fructstoreService} />) ;
                        }
                    }
                </FructstoreServiceConsumer>
            </ErrorBoundry>
        )
    }
};

export default withFructstoreService;