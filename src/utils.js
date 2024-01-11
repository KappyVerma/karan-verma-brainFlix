function FormatTimeStamp(timestamp) {
  const date = new Date(timestamp);
  const formattedTimeStamp = date.toLocaleDateString();
  return formattedTimeStamp;
}

export const url = "http://localhost:8080";

export default FormatTimeStamp;
