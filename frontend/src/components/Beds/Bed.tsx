import React, { FC, useState } from 'react';
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
import styles from './Bed.module.css';
import classNames from 'classnames';
import HotelIcon from '@mui/icons-material/Hotel';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { AnnotationData } from './Annotation';

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

const freeRoomBackground = `repeating-linear-gradient(
  45deg,
  green,
  green 10px,
  transparent 10px,
  transparent 20px
)`;

const halffullRoomBackground = `repeating-linear-gradient(
  45deg,
  orange,
  orange 10px,
  transparent 10px,
  transparent 20px
)`;

const fullRoomBackground = `repeating-linear-gradient(
  45deg,
  red,
  red 10px,
  transparent 10px,
  transparent 20px
)`;

const getColor = (freePlaces: number) => {
  return freePlaces === 0 ? 'red' : freePlaces < 2 ? 'orange' : 'green';
};

const Room: FC<{
  annotation: AnnotationData;
  index: number;
  selectedAnnotation: number | undefined;
  setHoveredAnnotation: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
  setSelectedAnnotation: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
}> = ({
  annotation,
  index,
  selectedAnnotation,
  setHoveredAnnotation,
  setSelectedAnnotation,
}) => {
  return (
    <div
      className={classNames(styles.annotation, {
        [styles.emptyRoom]: annotation.freePlaces > 0,
        [styles.halffullRoom]: annotation.freePlaces < 2,
        [styles.fullRoom]: annotation.freePlaces === 0,
      })}
      style={{
        left: annotation.x,
        top: annotation.y,
        width: annotation.width,
        height: annotation.height,
        background:
          annotation.freePlaces === 0
            ? fullRoomBackground
            : annotation.freePlaces < 2
              ? halffullRoomBackground
              : freeRoomBackground,
        backgroundColor:
          index === selectedAnnotation
            ? getColor(annotation.freePlaces)
            : 'transparent',
      }}
      onMouseEnter={() => setHoveredAnnotation(index)}
      onMouseLeave={() => setHoveredAnnotation(undefined)}
      onClick={() => {
        setSelectedAnnotation(index);
      }}
    >
      <HotelIcon
        className={styles.roomIcon}
        style={{ color: getColor(annotation.freePlaces) }}
      />
    </div>
  );
};

const UserSmallCard: FC<{ username: string }> = ({ username }) => {
  return (
    <div className={styles.userSmallCard}>
      <PersonAddIcon className={styles.userSmallCardAvatar} />
      <Typography variant="subtitle1">{username}</Typography>
    </div>
  );
};

const AnnotationContainer: FC<{ annotations: AnnotationData[] }> = ({
  annotations,
}) => {
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
          <Room
            annotation={annotation}
            index={index}
            selectedAnnotation={selectedAnnotation}
            setHoveredAnnotation={setHoveredAnnotation}
            setSelectedAnnotation={setSelectedAnnotation}
          />
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
                  border: '1px solid lightblue',
                }}
              >
                {annotation.usernames.length > 0 ? (
                  annotation.usernames.map((username, idx) => (
                    <UserSmallCard key={idx} username={username} />
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
