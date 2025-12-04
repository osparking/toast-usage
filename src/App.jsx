import React, { useState } from 'react';
import { Toast, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showToast, setShowToast] = useState(false);

  return (
    <Container className="p-4">
      <h2>Toast Example</h2>
      
      <Button 
        onClick={() => setShowToast(true)}
        variant="primary"
      >
        Show Toast
      </Button>

      {/* Toast Component */}
      <Toast 
        onClose={() => setShowToast(false)} 
        show={showToast} 
        delay={3000} 
        autohide
        className="mt-3"
      >
        <Toast.Header>
          <strong className="me-auto">Notification</strong>
          <small>Just now</small>
        </Toast.Header>
        <Toast.Body>Hello! This is a toast message.</Toast.Body>
      </Toast>
    </Container>
  );
}

export default App;