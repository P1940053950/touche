// MyPage.js
import React from 'react';
import { Box, Container, Paper } from '@mui/material';

export default const BedsMain = () => {
    return (
        <Container>
            <Box marginTop={4}>
                <Paper elevation={3} style={{ padding: 20 }}>
                    <div style={{ height: 100, backgroundColor: '#e0e0e0' }}>
                        Box 1
                    </div>
                </Paper>
            </Box>

            <Box marginTop={4}>
                <Paper elevation={3} style={{ padding: 20 }}>
                    <div style={{ height: 100, backgroundColor: '#e0e0e0' }}>
                        Box 2
                    </div>
                </Paper>
            </Box>

            <Box marginTop={4}>
                <Paper elevation={3} style={{ padding: 20 }}>
                    <div style={{ height: 100, backgroundColor: '#e0e0e0' }}>
                        Box 3
                    </div>
                </Paper>
            </Box>
        </Container>
    );
};

