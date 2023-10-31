import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";


const PaymentConfirmation = ({ open, handleClose, totalAmount }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    notes: "",
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [deliveryTime, setDeliveryTime] = useState(null);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  const handleDismiss = () => {
    handleClose();
    setIsPaymentComplete(false);
    setDeliveryTime(null);
    setFormData({ name: "", phoneNumber: "", address: "", notes: "" });
    setValidationErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "phoneNumber" ? value.replace(/\D/g, "") : value,
    });
    setValidationErrors({ ...validationErrors, [name]: "" });
  };

  const handlePay = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    }
    if (!formData.address) {
      errors.address = "Address is required";
    }

    if (Object.keys(errors).length === 0) {
      const randomDeliveryTime = Math.floor(Math.random() * 4 + 1) * 10;
      setDeliveryTime(randomDeliveryTime);
      setIsPaymentComplete(true);
    } else {
      setValidationErrors(errors);
    }
  };

  return (
    <Dialog open={open} onClose={handleDismiss}>
      <DialogTitle style={{ margin: 0, padding: '10px', fontSize: '24px' }}>Payment Confirmation</DialogTitle>
      <DialogContent>
        {isPaymentComplete ? (
          <>
            <DialogContentText>
              Thank you for your order! Your food will be delivered in {deliveryTime} minutes, and your bill will be ${totalAmount}.
            </DialogContentText>
            <DialogActions>
              <Button onClick={handleDismiss} color="primary">
                Close
              </Button>
            </DialogActions>
          </>
        ) : (
          <>
            <TextField
              style={{ marginTop: '7px' }}
              label="Name"
              fullWidth
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              error={Boolean(validationErrors.name)}
              helperText={validationErrors.name}
            />
  
            <TextField
              style={{ marginTop: '7px' }}
              label="Phone Number"
              fullWidth
              variant="outlined"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              error={Boolean(validationErrors.phoneNumber)}
              helperText={validationErrors.phoneNumber}
            />
  
            <TextField
              style={{ marginTop: '7px' }}
              label="Address"
              fullWidth
              variant="outlined"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              error={Boolean(validationErrors.address)}
              helperText={validationErrors.address}
            />
  
            <TextField
              style={{ marginTop: '7px' }}
              label="Notes (Optional)"
              fullWidth
              variant="outlined"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
            />
  
            <DialogContentText style={{ marginTop: '15px', fontWeight: 'bold', color: 'red' }}>
              Total Amount: ${totalAmount}
            </DialogContentText>
            <DialogActions>
              <Button onClick={handlePay} color="primary">
                Order
              </Button>
              <Button onClick={handleDismiss} color="primary">
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
  
};

export default PaymentConfirmation;
