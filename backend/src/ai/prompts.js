export const codeReviewPrompt = (code) => {
  return `
You are a senior software engineer.

Analyze the code strictly and respond in the following format:

Summary:
- One line overview of the code quality

Issues:
- List bugs or logical issues if any

Improvements:
- Performance or readability improvements

Best Practices:
- Coding standards or design improvements

Improved Version:
- Provide a cleaner optimized version of the code

Keep the explanation simple and beginner friendly.

Code:
${code}
`;
};
