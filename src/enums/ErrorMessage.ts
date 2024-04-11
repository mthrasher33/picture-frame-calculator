enum ErrorMessage {
  InvalidUnitPairing = "Invalid unit pairing: '{unit1} must be paired with '{unit2}",
  InvalidMeasurementSystemsPairing = 'Invalid measurement systems pairing: imperial and metric systems cannot be combined in one class',
  LengthMustBeLongerThanWidth = 'Length must be longer than width in a rectangle'
}

export default ErrorMessage;
