import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  DataGrid,
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  GridColDef,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  GridSlots,
  GridRowParams,
} from "@mui/x-data-grid";
import CustomerHandler from "../components/customerhandler";
import dayjs from "dayjs";

// Interface for dynamic fields passed from the parent
interface TableProps {
  fields: Array<{ field: string; headerName: string }>;
  rows: GridRowsProp;
  setRows: React.Dispatch<React.SetStateAction<GridRowsProp>>;
  // handleRowClick: (params: GridRowParams) => void; // Define handleRowClick type
}

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows } = props;

  const handleClick = () => {
    setRows((oldRows) => {
      const nextId = Math.max(...oldRows.map((row) => row.id)) + 1; // Calculate next ID
      return [
        ...oldRows,
        {
          id: nextId,
          name: "",
          prefix: "",
          suffix: "",
          digits: "",
          incrementby: "",
          isenable: "",
          isNew: true,
        },
      ];
    });
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

// Define the Table component
const Table: React.FC<TableProps> = ({ fields, rows, setRows }) => {
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState<any>(null);

  // Handle row click to open the popup with row data
  const handleRowClick = (params: GridRowParams) => {
    setSelectedRowData(params.row); // Store clicked row data
    setIsModalOpen(true); // Open the dialog
  };

  // // Close the popup
  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedRowData(null);
  };

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  // Process row updates and validate fields
  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  // Dynamically generate columns based on the fields passed from the parent component
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      type: "string",
      editable: false,
    },
    ...fields.map(({ field, headerName }) => ({
      field,
      headerName,
      width: 150,
      editable: true,
    })),
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              onClick={handleCancelClick(id)}
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={handleEditClick(id)}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
          />,
        ];
      },
    },
  ];

  const transactionDate = dayjs("01-21-2023 4:15 AM", "MM/DD/YYYY hh:mm aa");

  return (
    ///sx={{ height: "100%", width: "100%" }}
    <Box>
      <DataGrid
        sx={{ backgroundColor: "#ffff", width: "72.5rem", height: "18rem" }}
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        onRowClick={handleRowClick} // Add onRowClick event here
        slots={{
          toolbar: EditToolbar as GridSlots["toolbar"],
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
      {/* CustomerHandler Modal */}
      {isModalOpen && (
        <CustomerHandler
          TransactionId={selectedRowData.id}
          TransactionDate={selectedRowData.TransactionDate}
          OperationResult={selectedRowData.OperationResult}
          HandlerName={selectedRowData.name}
          ProcessTime="" //{selectedRowData.ProcessTime}
          SystemErrorLogID="" //{selectedRowData.SystemErrorLogID}
          handleOpen={isModalOpen}
          handleClose={handleClose}
        />
      )}
    </Box>
  );
};

export default Table;
