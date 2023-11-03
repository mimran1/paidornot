import React, { useContext, useEffect, useRef, useState } from 'react';
import { getUserData, updateUser } from '../service/api';
import { DataTable } from 'primereact/datatable';
import { Column, ColumnEvent, ColumnEditorOptions } from 'primereact/column';
import { classNames } from 'primereact/utils';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import UserData from '../models/UserData';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import DataContext from '../context/DataContext';

interface MainTableProps {
    userData: UserData[]
}


const MainTable = ({ userData }: MainTableProps) => {
    const toast = useRef<Toast>(null);
    const [amount, setAmount] = useState();
    const { dbUpdate, setDbUpdate } = useContext(DataContext);

    const verifiedBodyTemplate = (rowData: UserData) => {
        return <i className={classNames('pi', { 'true-icon pi-check-circle': Number(rowData.amount) > 0, 'false-icon pi-times-circle': !(Number(rowData.amount) > 0) })}></i>;
    };

    const nameBodyTemplate = (rowData: UserData) => {
        return (
            <div className="flex align-items-center gap-2">
                <span className="font-bold">{rowData.name}</span>
            </div>
        );
    };

    const amountBodyTemplate = (rowData: UserData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.amount);
    };

    const onCellEditComplete = async (e: ColumnEvent) => {
        let { rowData, newValue, field, newRowData, value: oldValue } = e;
        if (oldValue === newValue)
            return;

        rowData[field] = newValue;
        //update db
        const newUserData: UserData = newRowData;

        const response = await updateUser(newUserData);
        //update ui only if db was successfull
        if (response) {
            if (response.status === 200) {
                const newDbUpdate = dbUpdate + 1;
                setDbUpdate(newDbUpdate);
                //setAmount(newValue);
                //window.location.reload();
                //toast.current?.show({severity:'success', summary: '', detail:'Updated successfully', life: 3000});
            }
        } else {
            console.log(`oldValue: ${oldValue}`)
            rowData[field] = oldValue;
            setAmount(oldValue); //to re-render the ui with old value
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Failed to update', life: 3000 });
        }
    };

    const paidTotal = () => {
        let total = 0;

        for (let data of userData) {
            total += data.amount;
        }

        return formatCurrency(total);
    };

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const cellEditor = (options: ColumnEditorOptions) => {
        if (options.field === 'amount') return priceEditor(options);
    };

    const priceEditor = (options: ColumnEditorOptions) => {
        return <InputNumber value={options.value} onValueChange={(e: InputNumberValueChangeEvent) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />;
    };

    const footerGroup = (
        <ColumnGroup>
            <Row>
                <Column footer="Total:" colSpan={2} footerStyle={{ textAlign: 'right' }} />
                <Column footer={paidTotal} />
            </Row>
        </ColumnGroup>
    );

    return (
        <>
            <Toast ref={toast} />
            <DataTable value={userData} tableStyle={{ minWidth: '50rem' }}
                rowGroupMode="rowspan"
                groupRowsBy="name"
                sortMode="single" sortField="name" sortOrder={1}
                editMode='cell'
                footerColumnGroup={footerGroup}
                size='small'>
                <Column field="name" style={{ width: '25%' }} header="Name" body={nameBodyTemplate}></Column>
                <Column field="quarter" style={{ width: '25%' }} header="Quarter"></Column>
                <Column field="amount" style={{ width: '25%' }} header="Amount" body={amountBodyTemplate} editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete}></Column>
                <Column field="isPaid" style={{ width: '25%' }} header="Paid" dataType="boolean" body={verifiedBodyTemplate} />
            </DataTable>
        </>
    )
}

export default MainTable
