function FormatTimeStamp(timestamp) {
  const date = new Date(timestamp);
  const formattedTimeStamp = date.toLocaleDateString();
  return formattedTimeStamp;
}

export const api_key = "c3065ea8-c23a-4e1e-bca2-149ee229e640";
export const url = "http://localhost:8080";

export default FormatTimeStamp;
