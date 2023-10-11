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
import "./PaymentConfirmation.css";

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
      <DialogTitle>Payment Confirmation</DialogTitle>
      <DialogContent>
        {isPaymentComplete ? (
          <>
            <DialogContentText>
              Thank you for your order! Your food will be delivered in{" "}
              {deliveryTime} minutes, and your bill will be ${totalAmount}.
            </DialogContentText>
            <DialogActions>
              <Button onClick={handleDismiss} color="primary">
                Close
              </Button>
            </DialogActions>
          </>
        ) : (
          <>
            {Object.keys(formData).map((fieldName) => (
              <TextField
                key={fieldName}
                className="custom-textfield"
                label={
                  fieldName === "name"
                    ? "Name"
                    : fieldName === "phoneNumber"
                    ? "Phone Number"
                    : "Address"
                }
                fullWidth
                variant="outlined"
                name={fieldName}
                value={formData[fieldName]}
                onChange={handleInputChange}
                error={Boolean(validationErrors[fieldName])}
                helperText={validationErrors[fieldName]}
              />
            ))}

            <TextField
              className="custom-textfield"
              label="Notes (Optional)"
              fullWidth
              variant="outlined"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
            />

            <DialogContentText className="total-text">
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
