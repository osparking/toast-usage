import React, { useState } from 'react';
import { Toast, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showToast, setShowToast] = useState(false);

  return (
    <Container className="p-4">
      <h2>토스트란?</h2>
      
      <Button 
        onClick={() => setShowToast(true)}
        variant="primary"
      >
        토스트 보기
      </Button>

      {/* Toast Component */}
      <Toast 
        onClose={() => setShowToast(false)} 
        show={showToast} 
        delay={1500} 
        autohide
        className="mt-3"
      >
        <Toast.Header>
          <strong className="me-auto">알림</strong>
          <small>방금</small>
        </Toast.Header>
        <Toast.Body>결과는 ...입니다.</Toast.Body>
      </Toast>
    </Container>
  );
}

export default App;