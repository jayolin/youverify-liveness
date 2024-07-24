import YouverifyLiveness from 'youverify-liveness-web';

document.getElementById('start-liveness').addEventListener('click', () => {
  try {
    const yvLiveness = new YouverifyLiveness({
      tasks: [{ id: 'complete-the-circle' }],
    });
    yvLiveness.start();
  } catch (error) {
    // Handle Validation Errors
    console.log(`Something isn't right, ${error}`);
  }
});
