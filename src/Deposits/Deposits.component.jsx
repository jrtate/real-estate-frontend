import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import './Deposits.css';
import Grid from '../components/Grid/Grid.component';
import Button from '..//components/Button/Button.component';
import { columns } from './columns';
import { propertyAvatarPath } from './dummyData';

const Deposits = () => {
    const [depositData, setDepositData] = useState([]);

    const mapApiData = (result) => {
        const mappedApiData = result.map(entry => ({
            // TODO: Fields from api should be CamelCase
            rowId: entry.depositId,
            propertyAvatarPath: propertyAvatarPath,
            address: entry.property && entry.property.street,
            cityState: entry.property && `${entry.property.city}, ${entry.property.state}`,
            moveInDate: moment(entry.moveInDate).format('D MMMM YYYY'),
            rent: `$${entry.rent}`,
            deposit: `$${entry.deposit}`,
            transactionDescription: entry.transactionStatus && entry.transactionStatus.statusDescription,
            transactionId: entry.transactionStatus && entry.transactionStatus.statusId,
            active: entry.active,
        }));

        setDepositData(mappedApiData);
    };

    const handleGetData = () => {
        axios.get('/api/Deposits')
            .then((result) => { mapApiData(result.data); })
            .catch((error) => { console.log('handleGetData: ', error); });
    };

    return (
        <div className={'depositsContainer'}>

            {/* ACTIVE DEPOSITS */}
            <div className={'header'}>
                Active Deposits
                <div className={'circleCounterContainer'}>
                    <div className={'circleCounter'}>
                        {depositData.length}
                    </div>
                </div>
            </div>

            <Grid
                columns={columns}
                rowData={depositData}
            />

            <div className={'showAllButton'}>
                <Button
                    label={'GET DUMMY DATA'}
                    onClick={() => {
                        handleGetData();
                    }}
                />
            </div>



            {/* CLOSED DEPOSITS */}
            {/* <div className={'header'}>Closed Deposits</div> */}

        </div>
    );
};

export default Deposits;