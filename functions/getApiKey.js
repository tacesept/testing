// netlify/functions/getMessage.js

// If you need dotenv locally:
import "dotenv/config";

export async function handler() {
  // process.env.MESSAGE is only available in the serverless context
  const message = process.env.MESSAGE || "no MESSAGE set";
  return {
    statusCode: 200,
    body: JSON.stringify({ message }),
  };
}
