function FormatTimeStamp(timestamp) {
  const date = new Date(timestamp);
  const formattedTimeStamp = date.toLocaleDateString();
  return formattedTimeStamp;
}

export default FormatTimeStamp;
