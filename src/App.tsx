import React from 'react';
import { MantineProvider, createTheme } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import Dashboard from './components/Dashboard';

const theme = createTheme({
  primaryColor: 'indigo',
  colors: {
    indigo: [
      '#E8EAF6',
      '#C5CAE9',
      '#9FA8DA',
      '#7986CB',
      '#5C6BC0',
      '#3F51B5',
      '#3949AB',
      '#303F9F',
      '#283593',
      '#1A237E',
    ],
  },
  components: {
    Paper: {
      styles: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    Button: {
      styles: {
        root: {
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(63, 81, 181, 0.2)',
          },
        },
      },
    },
    Title: {
      styles: {
        root: {
          fontWeight: 700,
        },
      },
    },
  },
});

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #1A237E 0%, #3949AB 50%, #5C6BC0 100%)',
          padding: '20px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Background animated elements */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
            animation: 'pulse 8s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '300px',
            height: '300px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            animation: 'float 15s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '10%',
            right: '20%',
            width: '400px',
            height: '400px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            animation: 'float 20s ease-in-out infinite',
          }} />
          
          {/* Add keyframes for animations */}
          <style>
            {`
              @keyframes pulse {
                0% { transform: scale(1); opacity: 0.5; }
                50% { transform: scale(1.1); opacity: 0.7; }
                100% { transform: scale(1); opacity: 0.5; }
              }
              @keyframes float {
                0% { transform: translate(0, 0) rotate(0deg); }
                50% { transform: translate(20px, 20px) rotate(180deg); }
                100% { transform: translate(0, 0) rotate(360deg); }
              }
            `}
          </style>
          
          <Dashboard />
        </div>
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App; 