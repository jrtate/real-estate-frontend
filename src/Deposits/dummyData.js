export const dummyData = [
    {
        depositId: 1,
        moveInDate: '25 February 2020',
        rent: 3000,
        deposit: 9000,
        active: 1,
        agent: {
            agentId: 1,
            name: 'Justin',
        },
        property: {
            propertyId: 2,
            street: '771 Lost Round',
            city: 'Sacremento',
            state: 'CA',
            zip: '11223',
        },
        transactionStatus: {
            statusId: 2,
            statusDescription: 'Awaiting Bank Processing',
        }
    },
    {
        depositId: 2,
        moveInDate: '12 March 2020',
        rent: 2300,
        deposit: 4600,
        active: 1,
        agent: {
            agentId: 1,
            name: 'Justin',
        },
        property: {
            propertyId: 1,
            street: '1491 Jagged Arbor',
            city: 'San Antonio',
            state: 'TX',
            zip: '11223',
        },
        transactionStatus: {
            statusId: 1,
            statusDescription: 'Payment Processed',
        }
    }
];

// This is just a placeholder to imitate the behavior of hitting a server/folder path for an actual image
export const propertyAvatarPath = <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#ffffff', float: 'left', marginRight: '1rem' }} />;
    
export default dummyData;
