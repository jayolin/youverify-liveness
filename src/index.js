import YouverifyLiveness from "youverify-liveness-web";
const yvLiveness = new YouverifyLiveness({
  tasks: [{ id: 'complete-the-circle' }],
});

document.getElementById('start-liveness').addEventListener('click', () => {
  try {
    yvLiveness.start();
  } catch (error) {
    // Handle Validation Errors
    console.log(`Something isn't right, ${error}`);
  }
});
