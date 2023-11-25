import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Paper,
  Container,
  Autocomplete,
  TextField,
} from '@mui/material';
import Typography from '@mui/material/Typography';

const Annotation = ({ x, y, width, height, occupiedPlaces, freePlaces }) => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const isfree = freePlaces === 0;
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: width,
        height: height,
        opacity: 0.6,
        border: !isfree ? '2px solid green' : '2px solid red',
        backgroundColor:
          isHovered || openModal ? (!isfree ? 'green' : 'red') : 'transparent',
        transition:
          'border 0.3s ease-in-out, background-color 0.3s ease-in-out',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOpenModal}
    ></div>
  );
};

const AnnotationContainer = ({ annotations }) => {
  const [selectedAnnotation, setSelectedAnnotation] = useState<number>();
  const [hoveredAnnotation, setHoveredAnnotation] = useState<number>();
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Card>
        <CardMedia
          component="img"
          alt="Annotated Image"
          height="100%"
          image={'floorPlan.png'}
        />
      </Card>
      {annotations.map((annotation, index) => (
        <React.Fragment key={annotation.id}>
          <div
            style={{
              position: 'absolute',
              left: annotation.x,
              top: annotation.y,
              width: annotation.width,
              height: annotation.height,
              opacity: 0.6,
              border:
                annotation.freePlaces !== 0
                  ? '2px solid green'
                  : '2px solid red',
              backgroundColor:
                index === selectedAnnotation
                  ? annotation.freePlaces !== 0
                    ? 'green'
                    : 'red'
                  : 'transparent',
              transition:
                'border 0.3s ease-in-out, background-color 0.3s ease-in-out',
            }}
            onMouseEnter={() => setHoveredAnnotation(index)}
            onMouseLeave={() => setHoveredAnnotation(undefined)}
            onClick={() => {
              setSelectedAnnotation(index);
            }}
          ></div>
          <div>
            {index === hoveredAnnotation && (
              <Paper
                style={{
                  position: 'absolute',
                  left: annotation.x,
                  top: annotation.y,
                  opacity: 1,
                  transform: 'translateX(-50%)',
                  padding: '5px',
                  borderRadius: '5px',
                }}
              >
                {annotation.usernames.length > 0 ? (
                  annotation.usernames.map((username, idx) => (
                    <Typography variant="subtitle1" key={idx}>
                      {username}
                    </Typography>
                  ))
                ) : (
                  <Typography variant="subtitle1">Empty Room</Typography>
                )}
              </Paper>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

const Beds = ({ annotations }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const users = [
    {
      label: 'User 1',
      value: 'user1',
      phoneNumber: '123-456-7890',
      email: 'user1@example.com',
      cancerType: 'Lung Cancer',
    },
    {
      label: 'User 2',
      value: 'user2',
      phoneNumber: '987-654-3210',
      email: 'user2@example.com',
      cancerType: 'Breast Cancer',
    },
    // Add more users as needed
  ];

  const handleUserSelect = (event, value) => {
    setSelectedUser(value);
  };

  return (
    <Container>
      <Box display="flex" marginTop={4}>
        <Paper
          elevation={3}
          style={{
            padding: 20,
            width: '48%',
            marginRight: '4%',
            textAlign: 'center',
            minHeight: '150px',
          }}
        >
          <Autocomplete
            options={users}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField {...params} label="Search Users" variant="outlined" />
            )}
            onChange={handleUserSelect}
          />
        </Paper>

        <Paper
          elevation={3}
          style={{
            padding: 20,
            width: '48%',
            textAlign: 'left',
            minHeight: '150px',
          }}
        >
          <div>
            {selectedUser && (
              <>
                <Typography variant="body1" style={{ marginBottom: 8 }}>
                  Name: {selectedUser.label}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: 8 }}>
                  Email: {selectedUser.email}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: 8 }}>
                  Phone Number: {selectedUser.phoneNumber}
                </Typography>
                <Typography variant="body1">
                  Cancer Type: {selectedUser.cancerType}
                </Typography>
              </>
            )}
          </div>
        </Paper>
      </Box>
      <Typography
        variant="h3"
        color="inherit"
        component="div"
        style={{ textAlign: 'left', width: '48%', marginTop: '4%' }}
      >
        Book a room
      </Typography>
      <Box marginTop={4}>
        <Paper elevation={3} style={{ padding: 20 }}>
          <div style={{ backgroundColor: '#e0e0e0' }}>
            <AnnotationContainer annotations={annotations} />
          </div>
        </Paper>
      </Box>

      <Box marginTop={4}>
        <Paper elevation={3} style={{ padding: 20 }}></Paper>
      </Box>
    </Container>
  );
};

export default Beds;
