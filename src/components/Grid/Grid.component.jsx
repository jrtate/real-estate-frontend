import React from 'react';
import PropTypes from 'prop-types';
import CircleIndicatorCell from './CircleIndicatorCell/CircleIndicatorCell.component';
import { findPercent, capitalizeFirstLetter } from '../../common/misc';
import './Grid.css';

const Grid = (props) => {
    const renderCell = (row, column) => {

        // Custom class name for appended fields
        const customClassName = column.customClassName || 'appendedCell';

        // Appended cell type
        if (column.responseFields.length > 1) {
            let customCell = column.responseFields.map(field => 
                <div className={`${customClassName}${capitalizeFirstLetter(field)}`}>
                {/* ^^ TODO: find a unique key for this */}
                    {row[field]}
                </div>
            );

            return <div className={customClassName}>{customCell}</div>;

        // Circle status cell type
        } else if (
            column.cellType === 'circleIndicatorCell'
        ) {
            return <CircleIndicatorCell status={row[column.responseFields]} />
        }

        // Default Cell
        return row[column.responseFields];
    };

    const renderEmptyState = () => (
            <div className={'gridEmptyState'}>
                No Data To Show
            </div>
    );

    return (
        <div className={'gridContainer'}>

            {/* COLUMN HEADER */}
            <div className={'columns'}>
                {props.columns.map(column => (
                    <div
                        key={column.id}
                        className={'columnHeader'}
                        style={{ width: findPercent(1, props.columns.length)}}
                    >
                        {column.columnHeader}
                    </div>
                ))}
            </div>

            {/* ROW DATA */}
            {!props.rowData.length ? renderEmptyState() : props.rowData.map(row => (
                <div key={row.rowId} className={'row'}>
                    {(props.columns.map((column) => (
                        <div
                            key={column.id}
                            className={'cell'}
                            style={{
                                width: findPercent(1, props.columns.length)
                            }}
                        >
                            {renderCell(row, column)}
                        </div>
                    )))}
                </div>
            ))}

        </div>
    );
};

Grid.propTypes = {
    columns: PropTypes.array.isRequired,
    rowData: PropTypes.array.isRequired,
};

Grid.defaultProps = {
    columns: [],
    rowData: [],
};

export default Grid;
