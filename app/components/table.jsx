"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField,
  IconButton,
  InputAdornment,
  Tooltip,
  Box,
  Menu,
  MenuItem,
  Divider,
  Button,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

const dummyData = [
  { name: "Frozen yoghurt", calories: 1000, fat: 6, carbs: 24, protein: 4 },
  { name: "Ice cream sandwich", calories: 900, fat: 9, carbs: 37, protein: 4.3 },
  { name: "Eclair", calories: 800, fat: 16, carbs: 24, protein: 6 },
  { name: "Cupcake", calories: 700, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: "Gingerbread", calories: 600, fat: 16, carbs: 49, protein: 3.9 },
  { name: "Yoghurt", calories: 500, fat: 6, carbs: 24, protein: 4 },
  { name: "Ice cream", calories: 400, fat: 9, carbs: 37, protein: 4.3 },
  { name: "Eclair chocolate", calories: 300, fat: 16, carbs: 24, protein: 6 },
  { name: "Cupcake vanilla", calories: 200, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: "Gingerbread old", calories: 100, fat: 16, carbs: 49, protein: 3.9 },
  { name: "Macaron", calories: 150, fat: 7, carbs: 25, protein: 2 },
  { name: "Brownie", calories: 350, fat: 15, carbs: 45, protein: 5 },
  { name: "Cheesecake", calories: 500, fat: 30, carbs: 40, protein: 8 },
  { name: "Pudding", calories: 250, fat: 8, carbs: 35, protein: 4 },
  { name: "Donut", calories: 400, fat: 20, carbs: 50, protein: 3 },
  { name: "Muffin", calories: 300, fat: 12, carbs: 40, protein: 6 },
  { name: "Pie", calories: 450, fat: 22, carbs: 55, protein: 5 },
  { name: "Tart", calories: 350, fat: 18, carbs: 45, protein: 4 },
  { name: "Croissant", calories: 300, fat: 16, carbs: 25, protein: 4 },
  { name: "Waffle", calories: 400, fat: 18, carbs: 50, protein: 5 },
];

const rowsPerPageOptions = [5, 10, 25];

const DummyTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchVisible, setSearchVisible] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [subsectionSearch, setSubsectionSearch] = useState({
    section1: "",
    section2: "",
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when rows per page change
  };

  const handleRequestSort = (property) => {
    const isAscending = orderBy === property && order === "asc";
    setOrder(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };

  const getComparator = (order, orderBy) => {
    return (a, b) => {
      if (orderBy === "name") {
        return order === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      if (orderBy === "calories") {
        return order === "asc"
          ? a.calories - b.calories
          : b.calories - a.calories;
      }
      if (orderBy === "fat") {
        return order === "asc" ? a.fat - b.fat : b.fat - a.fat;
      }
      if (orderBy === "carbs") {
        return order === "asc" ? a.carbs - b.carbs : b.carbs - a.carbs;
      }
      if (orderBy === "protein") {
        return order === "asc" ? a.protein - b.protein : b.protein - a.protein;
      }
      return 0;
    };
  };

  const filteredData = dummyData.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = [...filteredData].sort(getComparator(order, orderBy));
  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleClickFilterButton = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseFilterMenu = () => {
    setAnchorEl(null);
  };

  const handleSubsectionSearch = (section, value) => {
    setSubsectionSearch((prev) => ({ ...prev, [section]: value }));
  };

  const handleAddItem = () => {
    // Add your logic to handle adding a new item here
    console.log(`Add item: ${searchTerm}`);
  };

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Box display="flex" alignItems="center">
            <IconButton onClick={handleClickFilterButton}>
              <FilterListIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseFilterMenu}
              sx={{ width: 400 }} // Increase width as needed
            >
              <Box p={2}>
                <TextField
                  label="Search Section 1"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={subsectionSearch.section1}
                  onChange={(e) => handleSubsectionSearch("section1", e.target.value)}
                  sx={{ mb: 2 }}
                />
                <Divider />
                <MenuItem>Subsection 1</MenuItem>
                <MenuItem>Subsection 2</MenuItem>
                {/* Add more subsection items here */}
                <Box mt={2}>
                  <TextField
                    label="Search Section 2"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={subsectionSearch.section2}
                    onChange={(e) => handleSubsectionSearch("section2", e.target.value)}
                  />
                </Box>
              </Box>
            </Menu>
            <Box
              sx={{
                marginLeft: 130,
                transform: searchVisible ? "translateX(0)" : "translateX(150%)",
                transition: "transform 0.5s ease-in-out",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <TextField
                variant="outlined"
                size="small"
                sx={{
                  width: "230px",
                  marginTop: "12px",
                }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      {searchTerm && (
                        <IconButton onClick={() => setSearchTerm("")}>
                          <ClearIcon />
                        </IconButton>
                      )}
                    </InputAdornment>
                  ),
                }}
                label="Search"
              />
            </Box>
            <Tooltip title="Search">
              {/* <IconButton onClick={() => setSearchVisible(!searchVisible)}>
                <SearchIcon />
              </IconButton> */}
            </Tooltip>
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell onClick={() => handleRequestSort("name")} align="left">
                  Name
                  {orderBy === "name" ? (
                    <span style={visuallyHidden}>{order === "desc" ? "sorted descending" : "sorted ascending"}</span>
                  ) : null}
                </TableCell>
                <TableCell onClick={() => handleRequestSort("calories")} align="left">
                  Calories
                  {orderBy === "calories" ? (
                    <span style={visuallyHidden}>{order === "desc" ? "sorted descending" : "sorted ascending"}</span>
                  ) : null}
                </TableCell>
                <TableCell onClick={() => handleRequestSort("fat")} align="left">
                  Fat (g)
                  {orderBy === "fat" ? (
                    <span style={visuallyHidden}>{order === "desc" ? "sorted descending" : "sorted ascending"}</span>
                  ) : null}
                </TableCell>
                <TableCell onClick={() => handleRequestSort("carbs")} align="left">
                  Carbs (g)
                  {orderBy === "carbs" ? (
                    <span style={visuallyHidden}>{order === "desc" ? "sorted descending" : "sorted ascending"}</span>
                  ) : null}
                </TableCell>
                <TableCell onClick={() => handleRequestSort("protein")} align="left">
                  Protein (g)
                  {orderBy === "protein" ? (
                    <span style={visuallyHidden}>{order === "desc" ? "sorted descending" : "sorted ascending"}</span>
                  ) : null}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.calories}</TableCell>
                    <TableCell align="left">{row.fat}</TableCell>
                    <TableCell align="left">{row.carbs}</TableCell>
                    <TableCell align="left">{row.protein}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <p>No results found for "{searchTerm}".</p>
                      <Button variant="contained" color="primary" onClick={handleAddItem}>
                        Add "{searchTerm}"
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </CardContent>
    </Card>
  );
};

export default DummyTable;
