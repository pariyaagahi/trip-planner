import React from "react";
import './../../style.css'
import {DataGrid} from "devextreme-react";
//hooks
import {useEffect, useState} from 'react';
//components
import Pagination from "./Pagination";
//mui components
import {Grid, IconButton, Skeleton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DeleteIcon from '@mui/icons-material/Delete'
//redux
import {
    useHasCancelRequestPermission,
    useHasDeleteRequestPermission,
    useHasPauseResumeRequestPermission, useHasSaveRequestPermission, useHasUpdateRequestPermission,
    useSender,
    useServiceType,
    useStatus,
    useTableDataIsLoading
} from "../../../../CustomHook/UseReduxData";
import {useSelector} from "react-redux";
import {tableData} from "../../../../Slices/MainLayout/MainSlice";
import EditHandler from "./EditNotif";
import CancelHandler from "./CancelNotif";
import DeleteHandler from "./DeleteNotif";
import {BorderLinearProgress} from "../../style";
import {Column, Sorting} from "devextreme-react/data-grid";
import {AppString} from "../../../../Assets/String/AppString";
import PauseHandler from "./PauseNotif";
import ResumeHandler from "./ResumeNotif";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";

const NotificationTable = () => {

    const isLoading = useTableDataIsLoading()
    const [NotifTableData, setNotifTableData] = useState([])
    const notifTableData = useSelector(tableData)
    const notifTableDataObj = JSON.parse(JSON.stringify(useSelector(tableData)));
    const hasPauseResumePermission = useHasPauseResumeRequestPermission()
    const hasDeletePermission = useHasDeleteRequestPermission()
    const hasCancelPermission = useHasCancelRequestPermission()
    const hasEditPermission = useHasSaveRequestPermission()
    const serviceTypeList = useServiceType()
    const statusList = useStatus()
    const senderList = useSender()

    useEffect(() => {
        getData()
    }, [notifTableData])

    const getData = () => {
        if (notifTableDataObj !== null) {
            notifTableDataObj?.forEach((row) => {
                const status = statusList?.filter(a => a?.key == row?.status)[0]
                row.serviceType = row.serviceType != null ? serviceTypeList?.filter(a => a.key == row.serviceType)[0].value : '_';
                row.title = row.title != null ? row.title : '_';
                row.body = row.body != null ? row.body : '_';
                row.status = row.status != null ? status?.value : '_';
                row.userId = row.userId != null ? senderList?.filter(a => a?.key == row?.userId)[0].value : '_';
                row.percent = {
                    success: row?.successCount,
                    fail: row?.failedCount
                }
                row.edit = {
                    requestMasterId: row?.requestMasterId,
                    status: status?.key
                }
                row.pauseResume = {
                    requestMasterId: row?.requestMasterId,
                    status: status?.key
                }
                row.cancel = {
                    requestMasterId: row?.requestMasterId,
                    status: status?.key
                }
                row.delete = {
                    requestMasterId: row?.requestMasterId,
                    status: status?.key
                }
            })
        }
        setNotifTableData(notifTableDataObj);
    }

    function editCellRender(data) {
        if (data?.value?.status) {
            if (data?.value?.status == 0) {
                return <EditHandler requestMasterId={data.value.requestMasterId}/>;
            } else {
                return <IconButton style={{width: '100%', height: '21px'}} disabled>
                    <EditIcon
                        style={{color: '#bcbcbc'}}
                    />
                </IconButton>
            }
        }
    }

    function pauseResumeCellHandler(data) {
        if (data?.value?.status) {
            if (data?.value?.status == 1 || data?.value?.status == 8 || data?.value?.status == 0) {
                return <PauseHandler requestMasterId={data.value.requestMasterId}/>;
            } else if (data?.value?.status == 7) {
                return <ResumeHandler requestMasterId={data.value.requestMasterId}/>;
            } else {
                return <IconButton style={{width: '100%', height: '21px'}} disabled>
                    <PauseCircleOutlineIcon
                        style={{color: '#bcbcbc'}}
                    />
                </IconButton>
            }
        }

    }

    function cancelCellRender(data) {
        if (data?.value?.status) {
            if (data?.value?.status == 1 || data?.value?.status == 0) {
                return <CancelHandler requestMasterId={data.value.requestMasterId}/>;
            } else {
                return <IconButton style={{width: '100%', height: '21px'}} disabled>
                    <HighlightOffIcon
                        style={{color: '#bcbcbc'}}
                    />
                </IconButton>
            }
        }
    }

    function deleteCellRender(data) {
        if (data?.value?.status) {
            if (data?.value?.status == 0) {
                return <DeleteHandler requestMasterId={data.value.requestMasterId}/>;
            } else {
                return <IconButton style={{width: '100%', height: '21px'}} disabled>
                    <DeleteIcon
                        style={{color: '#bcbcbc'}}
                    />
                </IconButton>
            }
        }
    }

    function PercentCellRender(data) {
        let percent;
        if (data?.value?.success && data?.value?.fail && data?.value?.success >= 0 && (data?.value?.success + data?.value?.fail) > 0) {
            let totalCount = data?.value?.success + data?.value?.fail
            let successCount = data?.value?.success
            percent = Math.floor((successCount / totalCount) * 100);
        } else {
            percent = 0
        }
        return <>
            <Grid container className='send-percentage-grid'>
                <BorderLinearProgress
                    variant="determinate"
                    value={percent}
                    sx={{marginTop: '5px', width: '100%'}}
                />
                <div className='send-percentage-number-div'>{percent}</div>
                <div className='send-percentage-sign-div'>%</div>
            </Grid>
        </>
    }

    return (
        <div className='notification-table-div'>
            {isLoading ?
                <div style={{width: '95%', margin: '0 auto'}}>
                    <Skeleton animation="wave" style={{height: '60px'}}/>
                    <Skeleton animation="wave" style={{height: '60px'}}/>
                    <Skeleton animation="wave" style={{height: '60px'}}/>
                    <Skeleton animation="wave" style={{height: '60px'}}/>
                </div> :
                <DataGrid id="orders"
                          rtlEnabled
                          dataSource={NotifTableData}
                          keyExpr='requestMasterId'
                          showBorders
                          showRowLines
                          showColumnLines
                          allowColumnResizing
                          columnResizingMode='widget'
                          columnAutoWidth
                          hoverStateEnabled
                          rowAlternationEnabled
                          noDataText={AppString.noData}
                          style={{fontFamily: 'FarhangFaNum-Regular', width: '1048px', minWidth: '1048px'}}>
                    <Sorting ascendingText={AppString.ascendingText} descendingText={AppString.descendingText}
                             clearText={AppString.sortClearText}/>
                    <Column minWidth={90} width={95} caption={AppString.serviceType}
                            dataField={AppString.tableServiceType}
                            alignment='center'
                    />
                    <Column minWidth={90} width={90} caption={AppString.notifTitle} dataField={AppString.tableTitle}
                            alignment='center'/>
                    <Column minWidth={90} width={90} caption={AppString.notifText} dataField={AppString.tableBody}
                            alignment='center'/>
                    <Column minWidth={70} width={70} caption={AppString.totalNotifs}
                            dataField={AppString.tableTotalCount}
                            alignment='center'/>
                    <Column minWidth={80} width={80} dataField={AppString.tablePercent}
                            caption={AppString.sendPercentage}
                            alignment='center'
                            cellRender={PercentCellRender}/>
                    <Column minWidth={58} caption={AppString.status} dataField={AppString.tableStatus}
                            alignment='center'/>
                    <Column minWidth={80} caption={AppString.sender} dataField={AppString.tableSender}
                            alignment='center'/>
                    <Column minWidth={80} caption={AppString.startDate} dataField={AppString.tableStartDate}
                            alignment='center'/>
                    <Column minWidth={80} caption={AppString.endDate} dataField={AppString.tableEndDate}
                            alignment='center'/>
                    <Column minWidth={50} width={50} caption={AppString.startTime} dataField={AppString.tableStartTime}
                            alignment='center'/>
                    <Column minWidth={50} width={50} caption={AppString.endTime} dataField={AppString.tableEndTime}
                            alignment='center'/>
                    {hasEditPermission &&
                        <Column minWidth={35} width={35} fixed={true} caption=''
                                dataField={AppString.tableHandleEditNotif}
                                alignment='center'
                                cellRender={editCellRender}/>
                    }
                    {hasPauseResumePermission &&
                        <Column minWidth={35} width={35} fixed={true} caption=''
                                dataField={AppString.tableHandlePauseResumeNotif}
                                alignment='center'
                                cellRender={pauseResumeCellHandler}/>
                    }
                    {hasCancelPermission &&
                        <Column minWidth={35} width={35} fixed={true} caption=''
                                dataField={AppString.tableHandleCancelNotif}
                                alignment='center'
                                cellRender={cancelCellRender}/>
                    }
                    {hasDeletePermission &&
                        <Column minWidth={35} width={35} fixed={true} caption=''
                                dataField={AppString.tableHandleDeleteNotif}
                                alignment='center'
                                cellRender={deleteCellRender}/>}
                </DataGrid>
            }
            <Pagination/>
        </div>
    );
};

export default NotificationTable;
