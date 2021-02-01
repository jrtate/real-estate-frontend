// TODO: This doesn't set to the model correctly

const handlePostData = () => {
    dummyData.forEach(entry => {
        console.log('entry', entry);
        axios.post('/api/Deposits', {
            // TODO: Api fields should be CamelCase
            DepositId: entry.depositId,
            MoveInDate: entry.moveInDate,
            Rent: entry.rent,
            Deposit: entry.deposit,
            Active: entry.active,
            Agent: entry.agent && {
                AgentId: entry.agent.agentId,
                Name: entry.agent.name,
            },
            Property: entry.property && {
                PropertyId: entry.propertyId,
                Street: entry.street,
                City: entry.city,
                State: entry.state,
                Zip: entry.zip,
            },
            TransactionStatus: entry.transactionStatus && {
                StatusId: entry.statusId,
                StatusDescription: entry.statusDescription,
            }
        })
            .then(() => { handleGetData(); })
            .catch((error) => { console.log('handlePostData: ', error); });
    });
};


// TODO: old map function

const mapApiData = (result) => {
    console.log('result', result);
    const mappedApiData = result.map(entry => ({
        depositId: entry.depositId,
        moveInDate: entry.moveInDate,
        rent: entry.rent,
        deposit: entry.deposit,
        active: entry.active,
        agent: entry.agent && {
            agentId: entry.agent.agentId,
            name: entry.agent.name,
        },
        property: entry.property && {
            propertyId: entry.propertyId,
            street: entry.street,
            city: entry.city,
            state: entry.state,
            zip: entry.zip,
            propertyAvatarPath: propertyAvatarPath,
        },
        transactionStatus: entry.transactionStatus && {
            statusId: entry.statusId,
            statusDescription: entry.statusDescription,
        }
    }));

    setDepositData(mappedApiData);
};
